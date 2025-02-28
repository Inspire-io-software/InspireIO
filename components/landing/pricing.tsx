import { CheckCircle } from "lucide-react";
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

export default function LandingPricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="mb-2">Pricing</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Choose the plan that&apos;s right for your business, with no
              hidden fees or surprises.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>
                Perfect for small teams and startups
              </CardDescription>
              <div className="mt-4 flex items-baseline text-5xl font-bold">
                $29
                <span className="ml-1 text-xl font-normal text-muted-foreground">
                  /month
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                {[
                  "Up to 5 team members",
                  "Basic project management",
                  "2GB storage",
                  "Email support",
                  "1 workspace",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-primary">
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle>Professional</CardTitle>
                <Badge>Popular</Badge>
              </div>
              <CardDescription>Ideal for growing businesses</CardDescription>
              <div className="mt-4 flex items-baseline text-5xl font-bold">
                $79
                <span className="ml-1 text-xl font-normal text-muted-foreground">
                  /month
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                {[
                  "Up to 20 team members",
                  "Advanced project management",
                  "10GB storage",
                  "Priority email & chat support",
                  "Multiple workspaces",
                  "Analytics dashboard",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>
                For large organizations with complex needs
              </CardDescription>
              <div className="mt-4 flex items-baseline text-5xl font-bold">
                $199
                <span className="ml-1 text-xl font-normal text-muted-foreground">
                  /month
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                {[
                  "Unlimited team members",
                  "Enterprise-grade security",
                  "Unlimited storage",
                  "24/7 phone, email & chat support",
                  "Unlimited workspaces",
                  "Advanced analytics & reporting",
                  "Dedicated account manager",
                  "Custom integrations",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
