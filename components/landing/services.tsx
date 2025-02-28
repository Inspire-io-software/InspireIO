import { Code, Users, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function LandingServices() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="mb-2">Our Services</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What We Offer
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Inspire IO specializes in creating state-of-the-art software
              platforms and digital products that streamline processes, enhance
              productivity, and enable businesses to thrive.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Code className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Project Management Tools</CardTitle>
              <CardDescription>
                Streamline your workflow and boost team productivity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our intuitive project management solutions help teams
                collaborate effectively, track progress, and deliver projects on
                time and within budget.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Team Collaboration Platforms</CardTitle>
              <CardDescription>
                Connect your team seamlessly across locations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Foster communication and collaboration with our secure,
                feature-rich platforms designed to bring teams together
                regardless of physical location.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Database className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Data-Driven Decision Systems</CardTitle>
              <CardDescription>
                Transform data into actionable insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Leverage the power of your data with our analytics and
                decision-support systems that provide clear, actionable insights
                for strategic decision-making.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
