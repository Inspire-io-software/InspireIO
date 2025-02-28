import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Code,
  Database,
  Globe,
  Lightbulb,
  Rocket,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
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

      <main className="flex-1">
        {/* Hero Section */}
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
                Inspire IO delivers innovative, scalable technology solutions
                that drive efficiency, collaboration, and growth for businesses
                of all sizes.
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

        {/* About Section */}
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
                    At Inspire IO, our mission is to empower businesses of all
                    sizes with innovative, scalable technology solutions that
                    drive efficiency, collaboration, and growth. By combining
                    user-centric design with cutting-edge technology, we aim to
                    inspire our customers to reach their full potential,
                    fostering creativity and success in a rapidly evolving
                    digital landscape.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className="text-muted-foreground">
                    Our vision is to be a global leader in intelligent,
                    connected software platforms, becoming the go-to partner for
                    businesses seeking transformative tools that simplify
                    operations and amplify impact. We envision a future where
                    our products seamlessly integrate into everyday workflows,
                    delivering unparalleled value and inspiring progress across
                    industries.
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
                      We embrace the power of innovation to solve complex
                      problems and continually push the boundaries of what's
                      possible.
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
                      Our customers' success is our success. We listen closely
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
                      Trust and transparency guide every decision we make. We
                      hold ourselves accountable to the highest standards of
                      ethical behavior.
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
                      We are committed to creating lasting value for our
                      customers, our communities, and the environment by
                      developing products that endure and evolve responsibly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="mb-2">Our Services</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What We Offer
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Inspire IO specializes in creating state-of-the-art software
                  platforms and digital products that streamline processes,
                  enhance productivity, and enable businesses to thrive.
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
                    collaborate effectively, track progress, and deliver
                    projects on time and within budget.
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
                    decision-support systems that provide clear, actionable
                    insights for strategic decision-making.
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

        {/* Team Section */}
        <section id="team" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="mb-2">Our Team</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Meet Our Experts
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our talented team of professionals is dedicated to delivering
                  exceptional solutions and service.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Alex Johnson",
                  role: "CEO & Founder",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Sam Rivera",
                  role: "CTO",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Jamie Chen",
                  role: "Head of Design",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Taylor Morgan",
                  role: "Lead Developer",
                  image: "/placeholder.svg?height=300&width=300",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4"
                >
                  <Avatar className="h-32 w-32">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 text-center">
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="mb-2">Testimonials</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Our Clients Say
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Hear from businesses that have transformed their operations
                  with our solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="tab1">Enterprise</TabsTrigger>
                  <TabsTrigger value="tab2">Mid-Market</TabsTrigger>
                  <TabsTrigger value="tab3">Startups</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage
                              src="/placeholder.svg?height=40&width=40"
                              alt="Avatar"
                            />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle>John Doe</CardTitle>
                            <CardDescription>
                              CTO, Global Enterprises
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          "Inspire IO's project management platform has
                          revolutionized how our teams collaborate across
                          continents. The efficiency gains have been remarkable,
                          and their support team is always responsive."
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage
                              src="/placeholder.svg?height=40&width=40"
                              alt="Avatar"
                            />
                            <AvatarFallback>MS</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle>Maria Smith</CardTitle>
                            <CardDescription>
                              COO, Tech Solutions Inc.
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          "The data analytics platform from Inspire IO has
                          transformed our decision-making process. We now have
                          real-time insights that have directly contributed to
                          our 30% growth this year."
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="tab2" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage
                              src="/placeholder.svg?height=40&width=40"
                              alt="Avatar"
                            />
                            <AvatarFallback>RJ</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle>Robert Johnson</CardTitle>
                            <CardDescription>
                              CEO, Midway Solutions
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          "As a growing company, we needed scalable solutions
                          that could grow with us. Inspire IO delivered exactly
                          that, with a platform that's both powerful and easy to
                          use."
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage
                              src="/placeholder.svg?height=40&width=40"
                              alt="Avatar"
                            />
                            <AvatarFallback>AP</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle>Alice Parker</CardTitle>
                            <CardDescription>
                              CIO, Regional Networks
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          "The collaboration tools from Inspire IO have brought
                          our remote teams together in ways we never thought
                          possible. The ROI has been immediate and substantial."
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="tab3" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage
                              src="/placeholder.svg?height=40&width=40"
                              alt="Avatar"
                            />
                            <AvatarFallback>DK</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle>David Kim</CardTitle>
                            <CardDescription>
                              Founder, NextGen Startup
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          "As a startup, we needed affordable solutions that
                          didn't compromise on quality. Inspire IO's platform
                          gave us enterprise-level tools at a price point that
                          made sense for our budget."
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage
                              src="/placeholder.svg?height=40&width=40"
                              alt="Avatar"
                            />
                            <AvatarFallback>SL</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle>Sarah Lee</CardTitle>
                            <CardDescription>
                              CTO, Innovative Apps
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          "The support we've received from Inspire IO has been
                          exceptional. They truly understand the challenges
                          startups face and have been partners in our growth
                          journey."
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="mb-2">Pricing</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for your business, with no hidden
                  fees or surprises.
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
                  <CardDescription>
                    Ideal for growing businesses
                  </CardDescription>
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

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="mb-2">Contact Us</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Have questions or ready to start your journey with Inspire IO?
                  We're here to help.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Contact Information</h3>
                  <p className="text-muted-foreground">
                    Fill out the form or reach out to us directly using the
                    information below.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>contact@inspireio.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>123 Innovation Way, Tech City, TC 12345</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM EST
                  </p>
                  <p className="text-muted-foreground">
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    We'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          First name
                        </label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Last name
                        </label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        placeholder="john.doe@example.com"
                        type="email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Inspire IO</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering businesses with innovative, scalable technology
                solutions that drive efficiency, collaboration, and growth.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                <Link href="#about" className="hover:text-foreground">
                  About Us
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Careers
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Press
                </Link>
                <Link href="#" className="hover:text-foreground">
                  News
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Resources</h3>
              <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-foreground">
                  Blog
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Documentation
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Help Center
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Community
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-foreground">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Cookie Policy
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Data Processing
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Inspire IO. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
