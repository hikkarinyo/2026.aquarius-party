import { Wheel } from 'react-custom-roulette'

import { Button, CloseButton,Modal, Stack, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import './style.css'

const data = [
  { option: 'Проходи 🎟️' },
  { option: 'Выпей шот 🥃' },
  { option: 'Танец с клоуном 🤡' },
  { option: 'Приз 🎁' },
  { option: 'Испытание 😈' },
]

const neonColors = ['#6a00ff', '#ff008c', '#00eaff', '#ffcc00', '#00ff99']

const BULB_SIZE = 12
const BULB_GAP = 6
const BULBS_COUNT = 24

type Props = {
  opened: boolean
  spin: boolean
  prize: number
  onStartSpin: () => void
  onStopSpin: () => void
  onClose: () => void
  onWheelStop: () => void
}

export function FortuneWheelModal({ opened, spin, prize, onStartSpin, onStopSpin, onClose, onWheelStop }: Props) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const WHEEL_SIZE = isMobile ? 350 : 500
  const BULB_RADIUS = WHEEL_SIZE / 2 - BULB_SIZE / 2 - BULB_GAP

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      fullScreen={isMobile}
      centered={!isMobile}
      size={isMobile ? '100%' : 'lg'}
      withCloseButton={false}
      radius={isMobile ? 0 : 20}
      styles={{
        body: {
          background: 'transparent',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          height: '100%',
        },
        content: {
          background: 'radial-gradient(circle at center, #2a004f 0%, #0b0015 70%)',
          padding: 0,
        },
      }}
    >
        <CloseButton
          onClick={onClose}
          size={30}
          iconSize={20}
          style={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}
        />


      <Stack align="center" justify="center" gap="lg" style={{ width: '100%' }}>
        <Title order={3} style={{ color: '#fff', textShadow: '0 0 10px #ff00cc', textAlign: 'center' }}>
          Колесо Фортуны
        </Title>

        <div style={{
          position: 'relative',
          width: WHEEL_SIZE,
          height: WHEEL_SIZE,
          borderRadius: '50%',
          boxShadow: '0 0 30px rgba(255, 0, 204, 0.6),0 0 60px rgba(51, 255, 255, 0.3)',
        }}>
          {Array.from({ length: BULBS_COUNT }).map((_, i) => {
            const angle = (360 / BULBS_COUNT) * i
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: BULB_SIZE,
                  height: BULB_SIZE,
                  marginLeft: -BULB_SIZE / 2,
                  marginTop: -BULB_SIZE / 2,
                  borderRadius: '50%',
                  background: i % 2 === 0 ? '#fff' : '#ffcc00',
                  transform: `rotate(${angle}deg) translate(${BULB_RADIUS}px)`,
                  animation: 'bulbBlink 1.2s infinite',
                  animationDelay: `${i * 0.08}s`,
                }}
              />
            )
          })}

          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Wheel
              mustStartSpinning={spin}
              prizeNumber={prize}
              data={data}
              backgroundColors={neonColors}
              textColors={['#ffffff']}
              fontSize={16}
              perpendicularText
              outerBorderWidth={8}
              outerBorderColor="#ff00cc"
              radiusLineWidth={2}
              radiusLineColor="rgba(255,255,255,0.4)"
              spinDuration={1.1}
              pointerProps={{
                style: {
                  fill: '#ffcc00',
                  filter: 'drop-shadow(0 0 6px #ffcc00) drop-shadow(0 0 12px #ff9900)',
                },
              }}
              onStopSpinning={() => {
                onStopSpin()
                onWheelStop()
              }}
            />
          </div>
        </div>

        <Button
          onClick={onStartSpin}
          disabled={spin}
          size="md"
          style={{
            background: '#ff00cc',
            opacity: spin ? 0.6 : 1,
            cursor: spin ? 'not-allowed' : 'pointer',
            boxShadow: '0 0 10px rgba(255,0,204,0.8), 0 0 20px rgba(255,0,204,0.6)',
          }}
        >
          {spin ? 'Крутится…' : 'Крутить'}
        </Button>
      </Stack>
    </Modal>
  )
}
