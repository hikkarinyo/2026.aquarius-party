import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Anchor,
  Box,
  Burger,
  Drawer,
  Group,
  Stack,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

export const FairHeader = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [opened, setOpened] = useState(false)

  const links = (
    <>
      <Anchor component={Link} to="/" c="white" size="lg" underline="never">
        Главная
      </Anchor>

      <Anchor component={Link} to="/program" c="white" size="lg" underline="never">
        Программа
      </Anchor>

      <Anchor
        href="https://fortuna.aquarius-party.ru/"
        target="_blank"
        rel="noopener noreferrer"
        c="#9bf6ff"
        size="lg"
        underline="never"
      >
        Сервис
      </Anchor>
    </>
  )

  return (
    <>
      <Box
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backdropFilter: 'blur(8px)',
          background: 'rgba(0,0,0,0.5)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Group justify="space-between" px="lg" py="sm">
          <Box style={styles.title}>
            Водолейская ярмарка 2026
          </Box>

          {isMobile ? (
            <Burger
              opened={opened}
              onClick={() => setOpened(!opened)}
              color="white"
            />
          ) : (
            <Group gap="lg">{links}</Group>
          )}
        </Group>
      </Box>

      {/* Mobile drawer */}
      <Drawer
        opened={opened}
        title="Водолейская ярмарка 2026"
        onClose={() => setOpened(false)}
        padding="md"
        size="100%"
        withCloseButton={true}
        styles={{
          content: {
            backgroundColor: '#0b0b0f',
            backgroundImage: `
      radial-gradient(circle at 20% 20%, rgba(255,0,204,0.12), transparent 40%),
      radial-gradient(circle at 80% 80%, rgba(0,255,255,0.12), transparent 40%)
    `,
          },
          header: {
            backgroundColor: 'transparent',
            color: '#fff',
            textShadow: `
                0 0 10px #ff00cc,
                0 0 30px #3333ff
            `,
            fontSize: 16,
            textAlign: 'center',
            textTransform: 'uppercase',
          },
        }}
      >
        <Stack gap="lg" mt="lg" align="center">
          <Anchor component={Link} to="/" c="white" onClick={() => setOpened(false)} size="lg" underline="never">
            Главная
          </Anchor>

          <Anchor component={Link} to="/program" c="white" onClick={() => setOpened(false)} size="lg" underline="never">
            Программа
          </Anchor>

          <Anchor
            href="https://fortuna.aquarius-party.ru/"
            target="_blank"
            rel="noopener noreferrer"
            c="#9bf6ff"
            onClick={() => setOpened(false)}
            size="lg"
            underline="never"
          >
            Сервис
          </Anchor>
        </Stack>
      </Drawer>
    </>
  )
}

const styles = {
  title: {
    textAlign: 'center' as const,
    color: '#fff',
    textShadow: `
      0 0 10px #ff00cc,
      0 0 30px #3333ff
    `,
    fontSize: 16,
    textTransform: 'uppercase',
  },
}
