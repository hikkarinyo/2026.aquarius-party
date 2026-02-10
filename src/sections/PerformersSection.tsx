import { useRef } from 'react'

import { Carousel } from '@mantine/carousel'
import { SimpleGrid } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Autoplay from 'embla-carousel-autoplay'

import PerformerCard from '../components/cards/PerformerCard.tsx'
import { FairSection } from '../components/layouts/FairSection.tsx'
import { PERFORMER_DATA } from '../constants/performers.ts'


export const PerformersSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const autoplay = useRef(Autoplay({ delay: 3000 }))

  return (
    <FairSection
      id="circus"
      title="Обитатели ярмарки"
      subtitle="Те, кто управляет хаосом, удачей и конкурсами"
    >
      {isMobile ? (
        <Carousel
          slideSize="85%"
          slideGap="md"
          withControls={false}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={() => autoplay.current.play()}
        >
          {PERFORMER_DATA.map((p) => (
            <Carousel.Slide key={p.name}>
              <PerformerCard performer={p} isMobile={isMobile}/>
            </Carousel.Slide>
          ))}
        </Carousel>
      ) : (
        <SimpleGrid cols={{ sm: 2, md: 3 }} spacing="xl" mt="xl">
          {PERFORMER_DATA.map((p) => (
            <PerformerCard key={p.name} performer={p} isMobile={false}/>
          ))}
        </SimpleGrid>
      )}
    </FairSection>
  )
}
