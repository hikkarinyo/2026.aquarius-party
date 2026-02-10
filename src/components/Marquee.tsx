import { motion } from 'framer-motion'

const Marquee = () => {
  const text = '🎪 ИГРЫ • 🍔 ЕДА • 🎁 ПРИЗЫ • 🎠 АТТРАКЦИОНЫ • ✨ МУЗЫКА • 🤡 БИП-ПУП '

  return (
    <div
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        marginBottom: '24px',
        opacity: 0.9,
        background: 'transparent',
      }}
    >
      <motion.div
        style={{
          display: 'inline-block',
          color: 'white',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textShadow: '0 0 12px rgba(255, 0, 200, 0.6)',
        }}
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 18,
            ease: 'linear',
          },
        }}
      >
        {text}
        {text}
      </motion.div>
    </div>
  )
}

export default Marquee
