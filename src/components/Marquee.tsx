import { motion } from 'framer-motion'

const Marquee = () => {
  const text =
    '🎪 ИГРЫ • 🍔 ЕДА • 🎁 ПРИЗЫ • 🎠 АТТРАКЦИОНЫ • ✨ МУЗЫКА • 🤡 БИП-ПУП • '

  return (
    <div
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        marginBottom: '24px',
        opacity: 0.9,
      }}
    >
      <motion.div
        style={{
          display: 'flex',
          width: 'fit-content',
          color: 'white',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textShadow: '0 0 12px rgba(255, 0, 200, 0.6)',
        }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: 'linear',
        }}
      >
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  )
}

export default Marquee
