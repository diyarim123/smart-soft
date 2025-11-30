const clients = [
  { name: "TechFlow", logo: "TechFlow" },
  { name: "Innovate Co", logo: "Innovate" },
  { name: "Digital Plus", logo: "Digital+" },
  { name: "NextGen Labs", logo: "NextGen" },
  { name: "Cloud Nine", logo: "Cloud9" },
  { name: "Bright Ideas", logo: "Bright" },
]

const testimonials = [
  {
    quote:
      "Smart Soft transformed our vision into a stunning reality. Their attention to detail and creative approach exceeded all our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechFlow",
  },
  {
    quote:
      "Working with Smart Soft was a game-changer for our business. They delivered a beautiful, functional app on time and within budget.",
    author: "Michael Chen",
    role: "Founder, NextGen Labs",
  },
  {
    quote:
      "The team's expertise in UI/UX design helped us create an intuitive platform that our users absolutely love.",
    author: "Emily Rodriguez",
    role: "Product Manager, Digital Plus",
  },
]

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Clients</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Trusted by Amazing Brands
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We&apos;ve had the pleasure of working with incredible companies across various industries.
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center mb-20">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center h-16 px-4 bg-secondary/30 rounded-lg">
              <span className="text-muted-foreground font-semibold text-lg">{client.logo}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-background border border-border rounded-2xl p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="text-foreground font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
