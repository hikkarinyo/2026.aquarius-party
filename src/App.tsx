import { useEffect, useState } from 'react'

import { AboutBlock } from './components/AboutBlock.tsx'
import { FairLayout } from './components/FairLayout.tsx'
import { FortuneWheelModal } from './components/FortuneWheelModal.tsx'
import { HeroSection } from './components/HeroSection.tsx'


export type Zone = 'entrance' | 'games' | 'bar' | 'circus' | 'prizes'

export default function App() {
  const [wheelOpen, setWheelOpen] = useState(false)
  const [accessGranted, setAccessGranted] = useState(false)
  const [scrollZone, setScrollZone] = useState<Zone | null>(null)


  const handleResult = (zone: Zone) => {
    setAccessGranted(true)
    setScrollZone(zone)
  }

  useEffect(() => {
    if (!scrollZone) return

    const el = document.getElementById(scrollZone)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [scrollZone])

  return (
    <>
      <FairLayout>
        <HeroSection onEnter={() => setWheelOpen(true)}/>

        <FortuneWheelModal
          opened={wheelOpen}
          onClose={() => setWheelOpen(false)}
          onResult={handleResult}
        />

        {accessGranted && (
          <>
            <AboutBlock />
          </>
        )}
      </FairLayout>
    </>
  )
}

