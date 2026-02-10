import { useEffect, useRef, useState } from 'react'

import spinSrc from '../public/sounds/spin.mp3'

import { FortuneWheelModal } from './components/FortuneWheelModal'
import { FairLayout } from './components/layouts/FairLayout'
import { FairAttractionsSection } from './sections/FairAttractionsSection'
import { FinalSection } from './sections/FinalSection'
import { HeroSection } from './sections/HeroSection'
import { PerformersSection } from './sections/PerformersSection'

const UNLOCK_KEY = 'fair_content_unlocked'

export type WheelStep = 'wheel' | 'result'

export default function App() {
  const [isWheelModalOpen, setIsWheelModalOpen] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const [prize, setPrize] = useState(0)
  const [wheelStep, setWheelStep] = useState<WheelStep>('wheel')

  const [isContentUnlocked, setIsContentUnlocked] = useState(() => {
    return localStorage.getItem(UNLOCK_KEY) === 'true'
  })

  const spinSound = useRef<HTMLAudioElement | null>(null)
  const firstBlockRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    spinSound.current = new Audio(spinSrc)
    spinSound.current.loop = true
    spinSound.current.volume = 0.5
  }, [])

  const handleSpinStart = () => {
    if (isSpinning) return

    setPrize(Math.floor(Math.random() * 5))
    setIsSpinning(true)
    spinSound.current?.play()
  }

  const handleSpinStop = () => {
    spinSound.current?.pause()
    if (spinSound.current) spinSound.current.currentTime = 0
    setIsSpinning(false)
  }

  const handleWheelStopped = () => {
    handleSpinStop()
    setWheelStep('result')
  }

  const handleGoNext = () => {
    setIsWheelModalOpen(false)
    setWheelStep('wheel')

    if (!isContentUnlocked) {
      setIsContentUnlocked(true)
      localStorage.setItem(UNLOCK_KEY, 'true')

      setTimeout(() => {
        if (!firstBlockRef.current) return

        const rect = firstBlockRef.current.getBoundingClientRect()
        window.scrollTo({
          top: window.scrollY + rect.top - 40,
          behavior: 'smooth',
        })
      }, 400)
    }
  }

  const handleModalClose = () => {
    if (isSpinning) return
    setIsWheelModalOpen(false)
    setWheelStep('wheel')
  }

  return (
    <FairLayout>
      <HeroSection onEnter={() => setIsWheelModalOpen(true)} />

      <FortuneWheelModal
        isOpen={isWheelModalOpen}
        isSpinning={isSpinning}
        prize={prize}
        step={wheelStep}
        onSpinStart={handleSpinStart}
        onSpinStop={handleSpinStop}
        onWheelStopped={handleWheelStopped}
        onGoNext={handleGoNext}
        onClose={handleModalClose}
      />

      {isContentUnlocked && (
        <>
          <div ref={firstBlockRef}>
            <FairAttractionsSection />
          </div>
          <PerformersSection />
          <FinalSection />
        </>
      )}
    </FairLayout>
  )
}
