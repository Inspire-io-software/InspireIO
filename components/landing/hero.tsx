import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function LandingHero() {
  return (
    <section
      id="hero"
      className="w-full py-12 md:py-20 bg-gradient-to-b from-background to-muted"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mx-auto">
          <Badge className="mb-4">Innovative Solutions</Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Empowering Your Business with Intelligent Technology
          </h1>
          <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl mb-8">
            Inspire IO delivers innovative, scalable technology solutions that
            drive efficiency, collaboration, and growth for businesses of all
            sizes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" className="gap-1">
              <Rocket className="size-4" />
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
          <div className="relative w-full">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <Image
              src="/placeholder.svg?height=600&width=1200"
              width={1200}
              height={600}
              alt="Hero Image"
              className="rounded-xl object-cover shadow-xl w-full bg-green-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
