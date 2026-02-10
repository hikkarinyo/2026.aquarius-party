import { Button, Container, Stack, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { motion } from 'framer-motion'

type Props = {
  onEnter: () => void;
};

export function HeroSection({ onEnter }: Props) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Container
        size="md"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 20px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Stack align="center" gap={isMobile ? 'md' : 'xl'}>
            <Text
              size={isMobile ? 'xs' : 'sm'}
              c="dimmed"
              style={{ letterSpacing: 2, textAlign: 'center' }}
            >
              ВХОД ТОЛЬКО ДЛЯ ИЗБРАННЫХ
            </Text>

            <Title
              order={1}
              style={{
                fontSize: isMobile ? 36 : 64,
                textAlign: 'center',
                color: '#fff',
                textShadow: `
                  0 0 10px #ff00cc,
                  0 0 30px #ff00cc,
                  0 0 60px #3333ff
                `,
              }}
            >
              ВОДОЛЕЙСКАЯ
              <br />
              ЯРМАРКА
              <Text
                component="span"
                style={{
                  display: 'block',
                  fontSize: isMobile ? 18 : 24,
                  color: '#ffd700',
                  letterSpacing: 4,
                  marginTop: 8,
                }}
              >
                ЮБИЛЕЙНОЕ ИЗДАНИЕ
              </Text>
            </Title>

            <Text
              mt="sm"
              c="dimmed"
              style={{
                pointerEvents: 'auto',
                textAlign: 'center',
                fontSize: isMobile ? 14 : 16,
              }}
            >
              20 февраля 19:00
              <br/>
              Место: офис Machineheads
            </Text>

            <Text
              ta="center"
              size={isMobile ? 'sm' : 'lg'}
              style={{ color: '#e0e0ff' }}
            >
              Фортуна решает, готов ли ты войти
            </Text>

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Button
                size={isMobile ? 'lg' : 'xl'}
                radius="xl"
                onClick={onEnter}
                color="neonPink"
                style={{
                  boxShadow: '0 0 30px rgba(255,0,204,0.9)',
                  width: isMobile ? '100%' : 250,
                }}
              >
                Крутить колесо
              </Button>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </div>
  )
}
