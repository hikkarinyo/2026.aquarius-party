import { useRef } from 'react'

import { Box, Text } from '@mantine/core'
import { motion, useInView } from 'framer-motion'

import { type Attraction } from '../../constants/attractions'

const FairAttractionCard = ({ item, index, isMobile }: { item: Attraction; index?: number; isMobile?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })


  return (
    <motion.div
      ref={ref}
      initial={isMobile ? {} : { opacity: 0, y: 50 }}
      animate={isMobile ? {} : isInView ? { opacity: 1, y: 0 } : {}}
      transition={isMobile ? {} : { duration: 0.5, delay: index ? index * 0.12 : 0 }}
    >
      <Box
        className="fair-card"
        h="100%"
        style={{
          padding: '24px',
          borderRadius: '18px',

          background: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(6px)',

          border: '1px solid rgba(255, 255, 255, 0.12)',

          cursor: 'default',

          opacity: 0,
          transform: 'translateY(20px) scale(0.96)',
          animation: 'fairFadeIn 0.6s ease forwards',

          transition: 'transform 0.25s ease, boxShadow 0.25s ease, background 0.25s ease',
          minHeight: isMobile ? '225px' : '200px',
        }}
      >
        <Text fz={40}>{item.emoji}</Text>

        <Text fw={700} fz="lg" mt="xs" c="white">
          {item.title}
        </Text>

        <Text fz="sm" c="white" opacity={0.8}>
          {item.text}
        </Text>
      </Box>
    </motion.div>
  )
}

export default FairAttractionCard
