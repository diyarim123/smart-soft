import { Globe, Smartphone, Palette, Server, Code, Layers } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Globe,
    title: "Web-Based Systems",
    description:
      "Custom web applications and enterprise systems tailored to streamline your business operations and boost productivity.",
  },
  {
    icon: Code,
    title: "Website Development",
    description:
      "Stunning, responsive websites that captivate your audience and drive conversions with modern technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Human-centered design solutions that combine aesthetics with functionality for memorable digital experiences.",
  },
  {
    icon: Server,
    title: "Hosting Solutions",
    description: "Reliable, secure, and scalable hosting services to keep your applications running smoothly 24/7.",
  },
  {
    icon: Layers,
    title: "Full-Stack Solutions",
    description: "End-to-end development from concept to deployment, handling every aspect of your digital product.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Everything You Need to Go Digital
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to launch, we provide comprehensive digital solutions that help your business thrive in the
            modern world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
