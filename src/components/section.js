'use client'

export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`min-h-screen py-20 ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}
