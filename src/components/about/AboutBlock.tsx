import { useRef } from 'react'

import { Carousel } from '@mantine/carousel'
import { Box, SimpleGrid, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Autoplay from 'embla-carousel-autoplay'

import { FairSection } from '../FairSection.tsx'

import './style.css'

const items = [
  {
    id: 1,
    emoji: '🎠',
    title: 'Аттракционы',
    text: 'Тиры, кольцебросы, меткость, ловкость и немного абсурда',
  },
  {
    id: 2,
    emoji: '🎡',
    title: 'Азарт и удача',
    text: 'Колесо Фортуны, задания, призы и шутливые испытания',
  },
  {
    id: 3,
    emoji: '🤹',
    title: 'Шоу и развлечения',
    text: 'Клоуны, фокусы и неожиданные впечатления',
  },
  {
    id: 4,
    emoji: '🌭',
    title: 'Уличная еда',
    text: 'Хот-доги, бургеры, попкорн, сладкая вата',
  },
  {
    id: 5,
    emoji: '🎭',
    title: 'Костюмы и креатив',
    text: 'Прояви фантазию — лучшие образы получат призы',
  },
  {
    id: 6,
    emoji: '🎶',
    title: 'Музыка и танцы',
    text: 'Музыка, танцы и весёлый ритм вокруг ярмарки',
  },
]

function Card({ item, index }: { item: typeof items[number]; index?: number }) {
  return (
    <Box
      className="fair-card"
      style={index !== undefined ? { animationDelay: `${index * 120}ms` } : undefined}
      h="100%"
    >
      <Text fz={40}>{item.emoji}</Text>

      <Text fw={700} fz="lg" mt="xs" c="white">
        {item.title}
      </Text>

      <Text fz="sm" c="white" opacity={0.8}>
        {item.text}
      </Text>
    </Box>
  )
}

export function AboutBlock() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const autoplay = useRef(Autoplay({ delay: 3000 }))

  return (
    <FairSection
      id="games"
      title="Зона Азарта"
      subtitle="Испытай удачу. Проиграй красиво. Выиграй неожиданно."
    >
      <div className="fair-marquee">
        <div className="fair-marquee__inner">
          🎪 ИГРЫ • 🍔 ЕДА • 🎁 ПРИЗЫ • 🎠 АТТРАКЦИОНЫ • ✨ ШУМ • БАМ-БАМ
          🎪 ИГРЫ • 🍔 ЕДА • 🎁 ПРИЗЫ • 🎠 АТТРАКЦИОНЫ • ✨ ШУМ • БИП-БИП
        </div>
      </div>
      
      {isMobile ? (
        <Carousel
          slideSize="80%"
          slideGap="md"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={() => autoplay.current.play()}
          withControls={false}
        >
          {items.map((item) => (
            <Carousel.Slide key={item.id}>
              <Card item={item} />
            </Carousel.Slide>
          ))}
        </Carousel>
      ) : (
        <SimpleGrid cols={{ sm: 2, md: 3 }} spacing="lg">
          {items.map((item, index) => (
            <Card key={item.title} item={item} index={index} />
          ))}
        </SimpleGrid>
      )}
    </FairSection>
  )
}
