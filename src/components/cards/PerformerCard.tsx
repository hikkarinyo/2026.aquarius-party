import { useRef } from 'react'

import { Avatar, Card, Stack, Text, Title } from '@mantine/core'
import { motion, useInView } from 'framer-motion'

import type { Performer } from '../../constants/performers.ts'

const PerformerCard = ({ performer, isMobile, index }: {
  performer: Performer
  isMobile: boolean
  index?: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={isMobile ? {} : { opacity: 0, y: 50 }}
      animate={isMobile ? {} : isInView ? { opacity: 1, y: 0 } : {}}
      transition={isMobile ? {} : { duration: 0.5, delay: index ? index * 0.12 : 0 }}
    >
      <Card
        radius="lg"
        h="100%"
        p={isMobile ? 'md' : 'xl'}
        style={{
          background: 'rgba(0,0,0,0.55)',
          border: '1px dashed rgba(255,255,255,0.25)',
          textAlign: 'center',
          minHeight: isMobile ? '225px' : '305px',
        }}
      >
        <Stack align="center" gap={isMobile ? 'xs' : 'sm'}>
          <Avatar
            src={performer.image}
            size={isMobile ? 96 : 128}
            radius={999}
            styles={{
              root: {
                border: '3px solid rgba(0, 200, 255, 0.7)',
                boxShadow: '0 0 15px rgba(0, 200, 255, 0.4)',
                transition: 'all 0.3s ease',
              },
            }}
          />

          <Title order={isMobile ? 5 : 4} c="white">
            {performer.name}
          </Title>

          <Text size={isMobile ? 'xs' : 'sm'} c="gray">
            {performer.description}
          </Text>
        </Stack>
      </Card>
    </motion.div>
  )
}

export default PerformerCard
