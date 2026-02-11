import { Button, Stack, Text, Title } from '@mantine/core'

import { WHEEL_DATA } from '../../constants/wheel.ts'

interface WheelResultProps {
  prize: number;
  onGoNext: () => void;
}

export const WheelResult = ({ prize, onGoNext }: WheelResultProps) => {
  const prizeData = WHEEL_DATA[prize]

  return (
    <Stack align="center" gap="lg">
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
        Вы выиграли: {prizeData.label} {prizeData.emoji}
      </Title>

      <Button
        size="lg"
        radius="xl"
        onClick={() => {
          if (prizeData.id === 'prize') {
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

      {prizeData.id === 'prize' && (
        <Text mt="sm" c="dimmed" style={{ fontSize: 14, marginTop: '0px' }}>
          Не забудь заскринить, чтобы получить плюшку!
        </Text>
      )}
    </Stack>
  )
}
