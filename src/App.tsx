import { useEffect, useRef, useState } from 'react'

import clickSrc from '../public/sounds/click.mp3'
import spinSrc from '../public/sounds/spin.mp3'

import { AboutBlock } from './components/AboutBlock.tsx'
import { FairLayout } from './components/FairLayout.tsx'
import { FinalSection } from './components/FinalSection.tsx'
import { FortuneWheelModal } from './components/FortuneWheelModal.tsx'
import { HeroSection } from './components/HeroSection.tsx'
import { PerformersBlock } from './components/PerformersBlock.tsx'

export default function App() {
  const [wheelOpen, setWheelOpen] = useState(false)
  const [spin, setSpin] = useState(false)
  const [prize, setPrize] = useState(0)

  const spinSound = useRef<HTMLAudioElement | null>(null)
  const clickSound = useRef<HTMLAudioElement | null>(null)

  // инициализация аудио один раз
  useEffect(() => {
    spinSound.current = new Audio(spinSrc)
    spinSound.current.loop = true
    spinSound.current.volume = 0.5

    clickSound.current = new Audio(clickSrc)
    clickSound.current.volume = 0.8
  }, [])

  const startSpin = () => {
    if (spin) return
    const nextPrize = Math.floor(Math.random() * 5)
    setPrize(nextPrize)
    setSpin(true)
  }

  const stopSpin = () => {
    spinSound.current?.pause()
    if (spinSound.current) spinSound.current.currentTime = 0
    clickSound.current?.play()
    setSpin(false)
  }

  const handleClose = () => {
    setWheelOpen(false)
    stopSpin()
    setPrize(0)
  }

  return (
    <FairLayout>
      <HeroSection onEnter={() => setWheelOpen(true)} />

      {wheelOpen && (
        <FortuneWheelModal
          opened={wheelOpen}
          spin={spin}
          prize={prize}
          onStartSpin={() => {
            startSpin()
            spinSound.current?.play()
          }}
          onStopSpin={stopSpin}
          onClose={handleClose}
        />
      )}

      <AboutBlock />
      <PerformersBlock />
      <FinalSection />
    </FairLayout>
  )
}
