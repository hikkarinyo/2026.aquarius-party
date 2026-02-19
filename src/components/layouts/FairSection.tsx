import * as React from 'react'

import { Container, Text, Title } from '@mantine/core'

type Props = {
  id: string
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export function FairSection({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} style={styles.section}>
      <Container size="md" style={{ position: 'relative', zIndex: 2 }}>
        <Title order={2} style={styles.title}>
          {title}
        </Title>

        {subtitle && (
          <Text ta="center" c="dimmed" mb="xl">
            {subtitle}
          </Text>
        )}

        {children}
      </Container>
    </section>
  )
}

export const styles = {
  section: {
    position: 'relative' as const,
    paddingTop: 30,
    paddingBottom: 30,
    overflow: 'hidden',
  },

  title: {
    textAlign: 'center' as const,
    color: '#fff',
    textShadow: `
      0 0 10px #ff00cc,
      0 0 30px #3333ff
    `,
    marginBottom: 16,
    fontSize: 32,
    textTransform: 'uppercase',
  },
}
