import { Button, Container, Stack, Text, Title } from '@mantine/core'
import { motion } from 'framer-motion'

type Props = {
  onEnter: () => void;
};

export function HeroSection({ onEnter }: Props) {
  return (
    <div style={styles.wrapper}>
      <Container size="md" style={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Stack align="center" gap="xl">
            <Text size="sm" c="dimmed" style={{ letterSpacing: 2 }}>
              ВХОД ТОЛЬКО ДЛЯ ИЗБРАННЫХ
            </Text>

            <Title order={1} style={styles.title}>
              ВОДОЛЕЙСКАЯ
              <br/>
              ЯРМАРКА
            </Title>

            <Text ta="center" size="lg" style={styles.subtitle}>
              20 февраля
              <br/>
              Фортуна решает, готов ли ты войти
            </Text>

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Button
                size="xl"
                radius="xl"
                onClick={onEnter}
                color="neonPink"
                style={styles.button}
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

const styles = {
  wrapper: {
    position: 'relative' as const,
    height: '100vh',
  },

  content: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 64,
    textAlign: 'center' as const,
    color: '#fff',
    textShadow: `
      0 0 10px #ff00cc,
      0 0 30px #ff00cc,
      0 0 60px #3333ff
    `,
  },

  subtitle: {
    color: '#e0e0ff',
  },

  button: {
    boxShadow: '0 0 30px rgba(255,0,204,0.9)',
  },
}

