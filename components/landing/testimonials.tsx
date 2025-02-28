import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function LandingTestimonials() {
  return (
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
              Hear from businesses that have transformed their operations with
              our solutions.
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
                      &quot;Inspire IO&apos;s project management platform has
                      revolutionized how our teams collaborate across
                      continents. The efficiency gains have been remarkable, and
                      their support team is always responsive.&quot;
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
                      &quot;The data analytics platform from Inspire IO has
                      transformed our decision-making process. We now have
                      real-time insights that have directly contributed to our
                      30% growth this year.&quot;
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
                        <CardDescription>CEO, Midway Solutions</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      &quot;As a growing company, we needed scalable solutions
                      that could grow with us. Inspire IO delivered exactly
                      that, with a platform that&apos;s both powerful and easy
                      to use.&quot;
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
                      &quot;The collaboration tools from Inspire IO have brought
                      our remote teams together in ways we never thought
                      possible. The ROI has been immediate and
                      substantial.&quot;
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
                      &quot;As a startup, we needed affordable solutions that
                      didn&apos;t compromise on quality. Inspire IO&apos;s
                      platform gave us enterprise-level tools at a price point
                      that made sense for our budget.&quot;
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
                        <CardDescription>CTO, Innovative Apps</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      &quot;The support we&apos;ve received from Inspire IO has
                      been exceptional. They truly understand the challenges
                      startups face and have been partners in our growth
                      journey.&quot;
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
