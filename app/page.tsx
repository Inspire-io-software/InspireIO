import {
  LandingHeader,
  LandingHero,
  LandingAbout,
  LandingServices,
  LandingTestimonials,
  LandingPricing,
  LandingContact,
  LandingFooter,
} from "@/components/landing";
import LandingTeam from "@/components/landing/team";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <LandingHero />

        {/* About Section */}
        <LandingAbout />

        {/* Services Section */}
        <LandingServices />

        {/* Team Section */}
        <LandingTeam />

        {/* Testimonials Section */}
        <LandingTestimonials />

        {/* Pricing Section */}
        <LandingPricing />

        {/* Contact Section */}
        <LandingContact />
      </main>
      <LandingFooter />
    </div>
  );
}
