import {Anchor, Box, Text} from '@mantine/core'
import { motion } from 'framer-motion'

import finalImage from '../../public/images/fair-artists.png'

import { FairSection } from './FairSection'

export function FinalSection() {
  const title = 'ВСЕХ  ЖДЁМ!'.split('')

  return (
    <FairSection id="final" title="" subtitle="">
      <Box
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          borderRadius: 16,
          overflow: 'hidden',
        }}
      >
        <img
          src={finalImage}
          alt="Все артисты"
          style={{ width: '100%', display: 'block' }}
        />

        <Box
          style={{
            position: 'absolute',
            top: '15%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            gap: 6,
            fontSize: 64,
            fontWeight: 700,
            color: '#fff',
            textShadow: `
              0 0 10px #ff00cc,
              0 0 30px #ff00cc,
              0 0 60px #3333ff
              `,
            letterSpacing: 5,
          }}
        >
          {title.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 300 }}
            >
              {letter}
            </motion.span>
          ))}
        </Box>
      </Box>

      <Box style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10,

      }}>
        <Text
          mt="sm"
          style={{ pointerEvents: 'auto', textAlign: 'center' }}
          c="dimmed"
        >
          Остались вопросы?
          <br/>
          Не стесняйся — пиши в{' '}
          <Anchor
            href="https://t.me/Noctua96"
            target="_blank"
            c="dimmed"
            style={{
              fontWeight: 600,
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
