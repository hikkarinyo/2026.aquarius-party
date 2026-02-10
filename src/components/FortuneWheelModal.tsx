import { Wheel } from 'react-custom-roulette'

import { Button, CloseButton, Modal, Stack, Text, Title, Transition } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import type { WheelStep } from '../App'
import {
  BULB_GAP,
  BULB_SIZE,
  BULBS_COUNT,
  NEON_COLORS,
  WHEEL_DATA,
} from '../constants/wheel'

import SpinButton from './wheel/SpinButton'
import WheelContainer from './wheel/WheelContainer'

interface WheelModalProps {
  isOpen: boolean
  isSpinning: boolean
  prize: number
  step: WheelStep
  onSpinStart: () => void
  onSpinStop: () => void
  onWheelStopped: () => void
  onGoNext: () => void
  onClose: () => void
}

export const FortuneWheelModal = ({
  isOpen, isSpinning, prize, step, onSpinStart, onSpinStop, onWheelStopped, onGoNext, onClose,
}: WheelModalProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const WHEEL_SIZE = isMobile ? 350 : 500
  const BULB_RADIUS = WHEEL_SIZE / 2 - BULB_SIZE / 2 - BULB_GAP

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      fullScreen={isMobile}
      centered={!isMobile}
      size={isMobile ? '100%' : 'lg'}
      withCloseButton={false}
      radius={isMobile ? 0 : 20}
      styles={modalStyles}
    >
      <CloseButton
        onClick={onClose}
        size={30}
        iconSize={20}
        style={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}
      />

      <Stack align="center" justify="center" gap="lg"
             style={{ width: '100%', height: WHEEL_SIZE + 150, position: 'relative' }}>
        <Transition mounted={step === 'wheel'} transition="scale" duration={300}>
          {(styles) => (
            <Stack align="center" justify="center" gap="lg" style={{ ...styles, width: '100%' }}>
              <Title order={3} style={{ color: '#fff', textShadow: '0 0 10px #ff00cc' }}>
                Колесо Фортуны
              </Title>

              <WheelContainer
                wheelSize={WHEEL_SIZE}
                bulbRadius={BULB_RADIUS}
                bulbCount={BULBS_COUNT}
              >
                <Wheel
                  mustStartSpinning={isSpinning}
                  prizeNumber={prize}
                  data={WHEEL_DATA}
                  backgroundColors={NEON_COLORS}
                  textColors={['#ffffff']}
                  fontSize={16}
                  outerBorderWidth={8}
                  outerBorderColor="#ff00cc"
                  radiusLineWidth={2}
                  radiusLineColor="rgba(255,255,255,0.4)"
                  spinDuration={0.1}
                  pointerProps={{
                    style: {
                      fill: '#ffcc00',
                      filter:
                        'drop-shadow(0 0 6px #ffcc00) drop-shadow(0 0 12px #ff9900)',
                    },
                  }}
                  onStopSpinning={() => {
                    onSpinStop()
                    onWheelStopped()
                  }}
                />
              </WheelContainer>

              <SpinButton
                isSpinning={isSpinning}
                onClick={onSpinStart}
              />
            </Stack>
          )}
        </Transition>

        <Transition mounted={step === 'result'} transition="scale" duration={3000}>
          {(styles) => (
            <Stack
              align="center"
              gap="lg"
              style={styles}
            >
              <Title
                order={2}
                style={{
                  color: '#ffcc00',
                  textShadow: '0 0 15px #ffcc00',
                  textAlign: 'center',
                }}
              >
                🎉 Поздравляем! 🎉
              </Title>

              <Title order={4} style={{ color: '#fff', textAlign: 'center' }}>
                Вы выиграли: {WHEEL_DATA[prize].option}
              </Title>

              <Button
                size="lg"
                radius="xl"
                onClick={() => {
                  if (WHEEL_DATA[prize].id === 'prize') {
                    window.open('https://youtu.be/dQw4w9WgXcQ?si=IiBMLz8prARMntDu', '_blank')
                  }
                  onGoNext()
                }}
                style={{
                  background: 'linear-gradient(90deg, #ff00cc, #ffcc00)',
                }}
              >
                Посмотреть, что вас ждёт
              </Button>

              {WHEEL_DATA[prize].id === 'prize' && (
                <Text
                  mt="sm"
                  c="dimmed"
                  style={{
                    fontSize: 14,
                    marginTop: '0px',
                  }}
                >
                  Не забудь заскринить, чтобы получить плюшку!
                </Text>
              )}
            </Stack>
          )}
        </Transition>
      </Stack>
    </Modal>
  )
}

const modalStyles = {
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
}
