'use client'

import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-md mx-auto text-center p-8">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-display text-primary mb-4">Thank You!</h1>
          <p className="text-body-large text-secondary">
            Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#0A3161] hover:bg-[#B31942] text-white font-medium rounded-lg transition-colors duration-300"
          >
            Return to Homepage
          </Link>

          <div className="text-body-small text-muted">
            <p>Questions? Email us directly at:</p>
            <a
              href="mailto:RayXu@fermienergy.com"
              className="text-[#0A3161] hover:text-[#B31942] underline"
            >
              RayXu@fermienergy.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
