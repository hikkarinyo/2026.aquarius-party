import { useRef } from 'react'

import { Carousel } from '@mantine/carousel'
import {
  Avatar,
  Card,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Autoplay from 'embla-carousel-autoplay'

import clown from '../../public/images/clown.png'
import dealer from '../../public/images/dealer.png'
import fortune from '../../public/images/fortune.png'
import illusionist from '../../public/images/illusionist.png'
import sprekhstalmeister from '../../public/images/sprekhstalmeister.png'
import strongman from '../../public/images/strongman.png'

import { FairSection } from './FairSection.tsx'

import '@mantine/carousel/styles.css'

type Performer = {
  name: string
  description: string
  image: string
}

const performers: Performer[] = [
  {
    name: 'Гадалка',
    description: 'Скажет правду, половину выдумает и улыбнётся одинаково.',
    image: fortune,
  },
  {
    name: 'Силач',
    description: 'Испытай свои силы и узнай, насколько ты сильный… или хотя бы попробуй!',
    image: strongman,
  },
  {
    name: 'Клоун',
    description: 'Попадёшь в цель — уйдёшь с красным носом.',
    image: clown,
  },
  {
    name: 'Торговец всячиной',
    description: 'Продаст воздух, если вы не заметите подвоха!',
    image: dealer,
  },
  {
    name: 'Иллюзионист',
    description: 'Путает реальность, правила и шансы на победу.',
    image: illusionist,
  },
  {
    name: 'Егерьшталмейстер',
    description: 'Испытания, где важно удержать равновесие… и самообладание.',
    image: sprekhstalmeister,
  },
]

function PerformerCard({  p, isMobile }: {
  p: Performer
  isMobile: boolean
}) {
  return (
    <Card
      radius="lg"
      h="100%"
      p={isMobile ? 'md' : 'xl'}
      style={{
        background: 'rgba(0,0,0,0.55)',
        border: '1px dashed rgba(255,255,255,0.25)',
        textAlign: 'center',
      }}
    >
      <Stack align="center" gap={isMobile ? 'xs' : 'sm'}>
        <Avatar
          src={p.image}
          size={isMobile ? 96 : 128}
          radius={999}
          styles={{
            root: {
              border: '3px solid rgba(0, 200, 255, 0.7)',
              boxShadow: '0 0 15px rgba(0, 200, 255, 0.4)',
              transition: 'all 0.3s ease',
            },
          }}
        />

        <Title order={isMobile ? 5 : 4} c="white">
          {p.name}
        </Title>

        <Text size={isMobile ? 'xs' : 'sm'} c="gray">
          {p.description}
        </Text>
      </Stack>
    </Card>
  )
}

export function PerformersBlock() {
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
          {performers.map((p) => (
            <Carousel.Slide key={p.name}>
              <PerformerCard p={p} isMobile/>
            </Carousel.Slide>
          ))}
        </Carousel>
      ) : (
        <SimpleGrid cols={{ sm: 2, md: 3 }} spacing="xl" mt="xl">
          {performers.map((p) => (
            <PerformerCard key={p.name} p={p} isMobile={false}/>
          ))}
        </SimpleGrid>
      )}
    </FairSection>
  )
}
