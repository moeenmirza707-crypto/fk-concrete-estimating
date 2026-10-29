import { NextResponse } from 'next/server'

// Simple in-memory rate limiter per IP (max 5 requests per 10 minutes)
const ipRateMap = new Map<string, { count: number; lastReset: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 10 * 60 * 1000 // 10 minutes
  const maxRequests = 5

  const record = ipRateMap.get(ip)
  if (!record || now - record.lastReset > windowMs) {
    ipRateMap.set(ip, { count: 1, lastReset: now })
    return false
  }

  if (record.count >= maxRequests) {
    return true
  }

  record.count += 1
  return false
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'unknown-ip'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Rate limit exceeded. Please wait a few minutes before submitting again or email us directly.',
        },
        { status: 429 }
      )
    }

    const body = await request.json()

    // 1. Honeypot check (anti-bot)
    if (body.website_trap && body.website_trap.length > 0) {
      // Silently discard spam submission
      return NextResponse.json({ success: true, message: 'Estimate request received successfully.' })
    }

    const {
      name,
      businessName,
      email,
      phone,
      projectType,
      projectLocation,
      scopeSize,
      turnaround,
      projectNotes,
      planLink,
      consent,
    } = body

    // 2. Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Full name is required (minimum 2 characters).' },
        { status: 400 }
      )
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'A valid work email address is required.' },
        { status: 400 }
      )
    }

    if (!projectType || typeof projectType !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Please select a concrete project type.' },
        { status: 400 }
      )
    }

    if (!projectLocation || typeof projectLocation !== 'string' || projectLocation.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Project location (City, State) is required.' },
        { status: 400 }
      )
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: 'You must agree to the privacy terms to submit your project plans.' },
        { status: 400 }
      )
    }

    // 3. Webhook / CRM Forwarding Integration
    const submissionData = {
      timestamp: new Date().toISOString(),
      clientIp: ip,
      name: name.trim(),
      businessName: businessName?.trim() || 'N/A',
      email: email.trim(),
      phone: phone?.trim() || 'N/A',
      projectType,
      projectLocation: projectLocation.trim(),
      scopeSize: scopeSize?.trim() || 'Not specified',
      turnaround: turnaround || 'Standard (24-48 hours)',
      projectNotes: projectNotes?.trim() || 'None',
      planLink: planLink?.trim() || 'No link provided',
    }

    const webhookUrl = process.env.ESTIMATE_WEBHOOK_URL

    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionData),
        })

        if (!webhookResponse.ok) {
          console.error('Webhook delivery failed with status:', webhookResponse.status)
        }
      } catch (err) {
        console.error('Error dispatching to external webhook:', err)
      }
    } else {
      // In development or when webhook is not yet configured, log cleanly
      console.log('--- NEW ESTIMATE REQUEST RECEIVED (Pending Webhook Configuration) ---')
      console.log(JSON.stringify(submissionData, null, 2))
    }

    return NextResponse.json({
      success: true,
      message: 'Estimate request successfully received! Our Division 03 estimating team will review your plans and contact you within 2 to 4 business hours.',
      refId: `FK-${Date.now().toString().slice(-6)}`,
    })
  } catch (error) {
    console.error('Estimate submission error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected server error occurred while processing your request. Please try again or email us directly at estimates@fkconcreteestimating.com.',
      },
      { status: 500 }
    )
  }
}

