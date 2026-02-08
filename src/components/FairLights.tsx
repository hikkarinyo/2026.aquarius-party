import { motion } from 'framer-motion'

export function FairLights() {
  return (
    <motion.div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none' as const,
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(255,0,204,0.15), transparent 30%),
          radial-gradient(circle at 80% 30%, rgba(0,255,255,0.12), transparent 35%),
          radial-gradient(circle at 50% 80%, rgba(255,255,255,0.05), transparent 40%)
        `,
        backgroundSize: '200% 200%',
      }}
      animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
    />
  )
}