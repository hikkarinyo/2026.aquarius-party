import { Box,SimpleGrid, Text } from '@mantine/core'

import { FairSection } from './FairSection'

import './index.css'

const items = [
  {
    emoji: '🎠',
    title: 'Аттракционы',
    text: 'Тиры, кольцебросы, меткость, ловкость и немного абсурда',
  },
  {
    emoji: '🎡',
    title: 'Азарт и удача',
    text: 'Колесо Фортуны, задания, призы и шутливые наказания',
  },
  {
    emoji: '🤡',
    title: 'Цирк и шоу',
    text: 'Клоуны, фокусы, гротеск и ярмарочный вайб',
  },
  {
    emoji: '🌭',
    title: 'Уличная еда',
    text: 'Хот-доги, бургеры, попкорн, сладкая вата',
  },
  {
    emoji: '✨',
    title: 'Свет и шум',
    text: 'Огоньки, флажки, неон, музыка и смех вокруг',
  },
  {
    emoji: '📸',
    title: 'Фотозона',
    text: 'Яркие кадры, реквизит и фото «как с фестиваля»',
  },
]

export function AboutBlock() {
  return (
    <FairSection
      id="games"
      title="Зона Азарта"
      subtitle="Испытай удачу. Проиграй красиво. Выиграй неожиданно."
    >
      {/* Бегущая строка */}
      <div className="fair-marquee">
        <div className="fair-marquee__inner">
          🎪 ИГРЫ • 🍔 ЕДА • 🎁 ПРИЗЫ • 🤡 ЦИРК • 🎠 АТТРАКЦИОНЫ • ✨ ШУМ •
          🎪 ИГРЫ • 🍔 ЕДА • 🎁 ПРИЗЫ • 🤡 ЦИРК • 🎠 АТТРАКЦИОНЫ • ✨ ШУМ •
        </div>
      </div>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {items.map((item, index) => (
          <Box
            key={item.title}
            className="fair-card"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <Text fz={40}>{item.emoji}</Text>

            <Text fw={700} fz="lg" mt="xs" c="white">
              {item.title}
            </Text>

            <Text fz="sm" c="white" opacity={0.8}>
              {item.text}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </FairSection>
  )
}
