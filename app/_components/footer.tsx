import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Logo" width={50} height={50} />
              <span className="text-foreground font-bold text-xl">
                Smart Soft
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              A creative tech team dedicated to building exceptional digital
              experiences that help businesses thrive in the modern world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Clients", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={`#${link.toLowerCase()}`}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Web Systems",
                "Websites",
                "Mobile Apps",
                "UI/UX Design",
                "Hosting",
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Smart Soft. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
