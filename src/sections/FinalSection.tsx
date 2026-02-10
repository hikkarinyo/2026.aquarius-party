import { useRef } from 'react'

import { Anchor, Box, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { motion, useInView } from 'framer-motion'

import finalImage from '../../public/images/fair-artists.png'
import { FairSection } from '../components/layouts/FairSection.tsx'

export function FinalSection() {
  const title = 'ВСЕХ  ЖДЁМ!'.split('')
  const isMobile = useMediaQuery('(max-width: 768px)')
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })


  return (
    <FairSection id="final" title="" subtitle="">
      <Box
        ref={ref}
        style={{
          fontSize: isMobile ? 36 : 64,
          fontWeight: 700,
          color: '#fff',
          textShadow: `
            0 0 10px #ff00cc,
            0 0 30px #ff00cc,
            0 0 60px #3333ff
          `,
          letterSpacing: isMobile ? 2 : 5,
          textAlign: 'center',
          marginBottom: isMobile ? 16 : 24,
        }}
      >
        {title.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 300 }}
          >
            {letter}
          </motion.span>
        ))}
      </Box>

      <Box
        style={{
          width: '100%',
          maxWidth: isMobile ? '100%' : 1200,
          margin: '0 auto',
          borderRadius: isMobile ? 12 : 16,
          overflow: 'hidden',
        }}
      >
        <img
          src={finalImage}
          alt="Все артисты"
          style={{ width: '100%', display: 'block' }}
        />
      </Box>

      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: isMobile ? 8 : 10,
        }}
      >
        <Text
          mt="sm"
          c="dimmed"
          style={{
            pointerEvents: 'auto',
            textAlign: 'center',
            fontSize: isMobile ? 14 : 16,
          }}
        >
          Остались вопросы?
          <br />
          Не стесняйся — пиши в{' '}
          <Anchor
            href="https://t.me/Noctua96"
            target="_blank"
            c="dimmed"
            style={{
              fontWeight: 600,
              fontSize: isMobile ? 14 : 16,
            }}
            underline="hover"
          >
            Telegram
          </Anchor>{' '}
          и приходи на ярмарку! ✨
        </Text>
      </Box>
    </FairSection>
  )
}
