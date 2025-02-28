import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function LandingHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Inspire IO</span>
        </div>
        <nav className="flex gap-6">
          <Link
            href="#about"
            className="text-sm font-medium hover:text-primary"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-primary"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
