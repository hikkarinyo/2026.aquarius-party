import { BULB_SIZE } from '../../constants/wheel.ts'


interface BulbsProps {
  bulbCount: number
  bulbRadius: number
}

const Bulbs = ({ bulbCount, bulbRadius }: BulbsProps) => {
  return (
    <>
      {Array.from({ length: bulbCount }).map((_, i) => {
        const angle = (360 / bulbCount) * i
        const bulbColor = i % 2 === 0 ? '#fff' : '#ffcc00'

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: BULB_SIZE,
              height: BULB_SIZE,
              marginLeft: -BULB_SIZE / 2,
              marginTop: -BULB_SIZE / 2,
              borderRadius: '50%',
              background: bulbColor,
              transform: `rotate(${angle}deg) translate(${bulbRadius}px)`,
              animation: 'bulbBlink 1.2s infinite',
              animationDelay: `${i * 0.08}s`,
            }}
          />
        )
      })}
    </>
  )
}

export default Bulbs
