import { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

import { Button, Modal, Stack, Title } from '@mantine/core'

import type { Zone } from '../App.tsx'

const data = [
  { option: 'Проходи 🎟️' },
  { option: 'Выпей шот 🥃' },
  { option: 'Танец с клоуном 🤡' },
  { option: 'Приз 🎁' },
  { option: 'Испытание 😈' },
]

const zoneMap: Record<number, Zone> = {
  0: 'entrance',
  1: 'bar',
  2: 'circus',
  3: 'prizes',
  4: 'games',
}


type Props = {
  opened: boolean
  onClose: () => void
  onResult: (zone: Zone) => void
}


export function FortuneWheelModal({ opened, onClose, onResult }: Props) {
  const [spin, setSpin] = useState(false)
  const [prize, setPrize] = useState(0)

  const startSpin = () => {
    setPrize(Math.floor(Math.random() * data.length))
    setSpin(true)
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      size="lg"
      withCloseButton={false}
      styles={{
        body: {
          overflow: 'hidden',
        },
      }}
    >
    <Stack align="center" gap="lg">
        <Title order={3}>Колесо Фортуны</Title>

      <Wheel
        mustStartSpinning={spin}
        prizeNumber={prize}
        data={data}
        outerBorderWidth={4}
        radiusLineWidth={2}
        fontSize={14}
        backgroundColors={['#ff00cc', '#3333ff']}
        textColors={['#ffffff']}
        onStopSpinning={() => {
          setSpin(false)
          onResult(zoneMap[prize])
          onClose()
        }}
      />

      <Button onClick={startSpin} size="md">
          Крутить
        </Button>
      </Stack>
    </Modal>
  )
}
