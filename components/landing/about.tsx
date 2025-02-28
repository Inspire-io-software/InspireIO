import { Badge } from "@/components/ui/badge";
import { Lightbulb, Users, CheckCircle, Globe } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function LandingAbout() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="mb-2">About Us</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Mission & Vision
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Discover what drives us to create transformative technology
              solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground">
                At Inspire IO, our mission is to empower businesses of all sizes
                with innovative, scalable technology solutions that drive
                efficiency, collaboration, and growth. By combining user-centric
                design with cutting-edge technology, we aim to inspire our
                customers to reach their full potential, fostering creativity
                and success in a rapidly evolving digital landscape.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground">
                Our vision is to be a global leader in intelligent, connected
                software platforms, becoming the go-to partner for businesses
                seeking transformative tools that simplify operations and
                amplify impact. We envision a future where our products
                seamlessly integrate into everyday workflows, delivering
                unparalleled value and inspiring progress across industries.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Our Core Values
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <Lightbulb className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Innovation-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We embrace the power of innovation to solve complex problems
                  and continually push the boundaries of what&apos;s possible.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Users className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Customer-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our customers&apos; success is our success. We listen closely
                  to their needs and design solutions that drive real-world
                  impact.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CheckCircle className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Trust and transparency guide every decision we make. We hold
                  ourselves accountable to the highest standards of ethical
                  behavior.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Globe className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We are committed to creating lasting value for our customers,
                  our communities, and the environment by developing products
                  that endure and evolve responsibly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
