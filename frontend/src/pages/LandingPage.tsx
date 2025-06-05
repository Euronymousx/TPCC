import { Hero } from '../components/Hero'
import { TrustBadges } from '../components/TrustBadges'
import { PricingSection } from '../components/PricingSection'
import { ImagesSection } from '../components/ImagesSection'

export function LandingPage() {
  return (
    <div>
      <Hero />
      <TrustBadges />
      <PricingSection />
      <ImagesSection />
    </div>
  )
}
