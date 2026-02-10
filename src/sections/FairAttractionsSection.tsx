import { useRef } from 'react'

import { Carousel } from '@mantine/carousel'
import { SimpleGrid } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Autoplay from 'embla-carousel-autoplay'

import FairAttractionCard from '../components/cards/FairAttractionCard.tsx'
import { FairSection } from '../components/layouts/FairSection.tsx'
import Marquee from '../components/Marquee.tsx'
import { FAIR_ATTRACTIONS } from '../constants/attractions.ts'

export const FairAttractionsSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const autoplay = useRef(Autoplay({ delay: 3000 }))

  return (
    <FairSection
      id="games"
      title="Зона Азарта"
      subtitle="Испытай удачу. Проиграй красиво. Выиграй неожиданно."
    >
      <Marquee/>

      {isMobile ? (
        <Carousel
          slideSize="80%"
          slideGap="md"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={() => autoplay.current.play()}
          withControls={false}
        >
          {FAIR_ATTRACTIONS.map((item, index) => (
            <Carousel.Slide key={index}>
              <FairAttractionCard item={item} isMobile={isMobile}/>
            </Carousel.Slide>
          ))}
        </Carousel>
      ) : (
        <SimpleGrid cols={{ sm: 2, md: 3 }} spacing="lg">
          {FAIR_ATTRACTIONS.map((item, index) => (
            <FairAttractionCard key={item.title} item={item} index={index} isMobile={isMobile}/>
          ))}
        </SimpleGrid>
      )}
    </FairSection>
  )
}
