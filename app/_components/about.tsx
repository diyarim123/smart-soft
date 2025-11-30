import { Users, Target, Lightbulb } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              A Creative Team Dedicated to Your Success
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Smart Soft is more than just a service provider — we&apos;re a passionate creative team that believes in
              the power of technology to transform businesses. We combine innovation, expertise, and dedication to
              deliver solutions that exceed expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team brings together diverse skills in web development, mobile applications, UI/UX design, and hosting
              solutions. We work closely with our clients to understand their vision and turn it into reality.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Collaboration", desc: "We work as partners, not vendors" },
                { icon: Target, title: "Precision", desc: "Attention to every detail" },
                { icon: Lightbulb, title: "Innovation", desc: "Fresh ideas, modern solutions" },
              ].map((item) => (
                <div key={item.title} className="text-center sm:text-left">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 mx-auto sm:mx-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src="/desk.png" alt="Smart Soft Team" className="w-full h-full object-cover" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
