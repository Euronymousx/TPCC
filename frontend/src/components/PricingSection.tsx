import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from './ui/Card'

const BASE_PRICE = 750

export function PricingSection() {
  const [anotherDog, setAnotherDog] = useState(false)
  const [secondWalk, setSecondWalk] = useState(false)

  const price = BASE_PRICE * (1 + (anotherDog ? 0.3 : 0) + (secondWalk ? 0.75 : 0))

  return (
    <section id="pricing" className="container mx-auto py-16 space-y-10">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-display text-center text-brandBrown">
        Subscription Pricing
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="text-center space-y-4">
          <h3 className="text-2xl font-display text-brandBrown">Base Subscription</h3>
          <p className="text-4xl font-display">${BASE_PRICE} <span className="text-lg font-sans">/ month</span></p>
          <p>1 daily walk • 5 drop-ins • eligible for add-ons</p>
        </Card>
        <Card className="space-y-4">
          <h4 className="font-display text-xl text-brandBrown">Add-ons</h4>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={anotherDog} onChange={(e) => setAnotherDog(e.target.checked)} />
            Another dog +30% (${(BASE_PRICE * 0.3).toFixed(2)})
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={secondWalk} onChange={(e) => setSecondWalk(e.target.checked)} />
            2nd walk / day +75% (${(BASE_PRICE * 0.75).toFixed(2)})
          </label>
          <p className="font-semibold">Total: ${price.toFixed(2)}</p>
          <div>
            <p>Extra drop-ins $60 ea | 5-pack $275 | 10-pack $500</p>
            <p>Weekly bath $40 / visit | Bi-weekly $55</p>
            <p>Grooming scheduling (price TBD, <a href="#" className="underline">Ask us</a>)</p>
          </div>
        </Card>
      </div>
      <Card className="space-y-4 max-w-md mx-auto">
        <h4 className="font-display text-xl text-brandBrown">Pet-Taxi Calculator</h4>
        <PetTaxi />
      </Card>
    </section>
  )
}

function PetTaxi() {
  const [miles, setMiles] = useState(0)
  const [wait, setWait] = useState(0)
  const cost = 40 + Math.max(0, miles - 6) * 2 + wait * 25
  return (
    <div className="space-y-2">
      <label className="block text-sm">Miles:
        <input type="number" value={miles} onChange={(e) => setMiles(parseFloat(e.target.value))} className="border px-2 py-1 ml-2 w-20" />
      </label>
      <label className="block text-sm">Waiting hours:
        <input type="number" value={wait} onChange={(e) => setWait(parseFloat(e.target.value))} className="border px-2 py-1 ml-2 w-20" />
      </label>
      <p className="font-semibold">${cost.toFixed(2)}</p>
    </div>
  )
}
