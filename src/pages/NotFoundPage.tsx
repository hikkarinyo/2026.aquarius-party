import { useNavigate } from 'react-router-dom'

import { Box, Button, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { motion } from 'framer-motion'

import { FairLayout } from '../components/layouts/FairLayout.tsx'
import { FairSection } from '../components/layouts/FairSection.tsx'

export default function NotFoundPage() {
  const navigate = useNavigate()
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <FairLayout>
      <FairSection id="" title="404" subtitle="">
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '1.5rem',
          }}
        >
          <Text c="dimmed">
            Ой-ой-ой! 🥴 <br/>
            Похоже, ты уронил свой нос где-то на ярмарке 🎪 <br/>
            Не волнуйся — мы поможем его найти!
          </Text>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Button
              size={isMobile ? 'lg' : 'xl'}
              radius="xl"
              onClick={() => navigate('/')}
              color="neonPink"
              style={{
                boxShadow: '0 0 30px rgba(255,0,204,0.9)',
              }}
            >
              Вернуться на главную
            </Button>
          </motion.div>
        </Box>
      </FairSection>
    </FairLayout>
  )
}
