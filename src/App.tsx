import { useEffect, useRef, useState } from 'react'

import spinSrc from '../public/sounds/spin.mp3'

import { AboutBlock } from './components/about/AboutBlock'
import { FairLayout } from './components/FairLayout'
import { FinalSection } from './components/FinalSection'
import { HeroSection } from './components/HeroSection'
import { FortuneWheelModal } from './components/modal/FortuneWheelModal'
import { PerformersBlock } from './components/PerformersBlock'

const UNLOCK_KEY = 'fair_content_unlocked'

export default function App() {
  const [wheelOpen, setWheelOpen] = useState(false)
  const [spin, setSpin] = useState(false)
  const [prize, setPrize] = useState(0)
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return localStorage.getItem(UNLOCK_KEY) === 'true'
  })

  const spinSound = useRef<HTMLAudioElement | null>(null)
  const firstBlockRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    spinSound.current = new Audio(spinSrc)
    spinSound.current.loop = true
    spinSound.current.volume = 0.5
  }, [])

  const startSpin = () => {
    if (spin) return
    setPrize(Math.floor(Math.random() * 5))
    setSpin(true)
    spinSound.current?.play()
  }

  const stopSpin = () => {
    spinSound.current?.pause()
    if (spinSound.current) spinSound.current.currentTime = 0
    setSpin(false)
  }

  const handleWheelStopped = () => {
    stopSpin()
    setWheelOpen(false)

    if (!isUnlocked) {
      setIsUnlocked(true)
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
    if (spin) return
    setWheelOpen(false)
  }

  return (
    <FairLayout>
      <HeroSection onEnter={() => setWheelOpen(true)} />

      {wheelOpen && (
        <FortuneWheelModal
          opened={wheelOpen}
          spin={spin}
          prize={prize}
          onStartSpin={startSpin}
          onStopSpin={stopSpin}
          onWheelStop={handleWheelStopped}
          onClose={handleModalClose}
        />
      )}

      {isUnlocked && (
        <>
          <div ref={firstBlockRef}>
            <AboutBlock />
          </div>
          <PerformersBlock />
          <FinalSection />
        </>
      )}
    </FairLayout>
  )
}

