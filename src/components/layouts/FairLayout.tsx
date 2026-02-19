import type { PropsWithChildren } from 'react'

import { motion } from 'framer-motion'

import { FairHeader } from './FairHeader.tsx'

// Генерируем случайные частицы один раз
const particles = Array.from({ length: 15 }).map(() => ({
  size: 6 + Math.random() * 6,
  startX: Math.random() * 100,
  endY: -50 - Math.random() * 100,
  delay: Math.random() * 2,
  duration: 2 + Math.random() * 2,
  color: `hsl(${Math.random() * 360}, 80%, 70%)`,
  offsetX: (Math.random() - 0.5) * 50,
}))

export function FairLayout({ children }: PropsWithChildren) {
  return (
    <div style={styles.wrapper}>
      <FairHeader />
      {children}

      <div style={styles.confettiLayer}>
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0, x: 0 }}
            animate={{
              y: [0, p.endY],
              x: [0, p.offsetX],
              opacity: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: p.duration,
              delay: p.delay,
            }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: `${p.startX}%`,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: p.color,
              zIndex: 9999,
            }}
          />
        ))}
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    position: 'relative' as const,
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#0b0b0f',
    backgroundImage: `
      radial-gradient(circle at 20% 20%, rgba(255,0,204,0.12), transparent 40%),
      radial-gradient(circle at 80% 80%, rgba(0,255,255,0.12), transparent 40%)
    `,
  },
  confettiLayer: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none' as const,
    overflow: 'visible',
    zIndex: 9999,
  },
}
