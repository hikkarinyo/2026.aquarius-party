import {Avatar, Card, SimpleGrid, Stack, Text, Title} from '@mantine/core'

import clown from '../assets/clown.png'
import dealer from '../assets/dealer.png'
import fortune from '../assets/fortune.png'
import illusionist from '../assets/illusionist.png'
import sprekhstalmeister from '../assets/sprekhstalmeister.png'
import strongman from '../assets/strongman.png'

import {FairSection} from './FairSection.tsx'

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

export function PerformersBlock() {
  return (
    <FairSection
      id="circus"
      title="Обитатели ярмарки"
      subtitle="Те, кто управляет хаосом, удачей и конкурсами"
    >
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing="xl"
        mt="xl"
      >
        {performers.map((p) => (
          <Card
            key={p.name}
            radius="lg"
            p="xl"
            style={{
              background: 'rgba(0,0,0,0.55)',
              border: '1px dashed rgba(255,255,255,0.25)',
              textAlign: 'center',
            }}
          >
            <Stack align="center" gap="sm">
                <Avatar
                  src={p.image}
                  size={128}
                  radius={128}
                  styles={{
                      root: {
                          border: '3px solid rgba(0, 200, 255, 0.7)', // мягкий голубой
                          boxShadow: '0 0 15px rgba(0, 200, 255, 0.4)', // подсветка вокруг
                          transition: 'all 0.3s ease',
                      },
                  }}
                />


                <Title order={4} c="white">
                {p.name}
              </Title>
              <Text size="sm" c="gray">
                {p.description}
              </Text>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </FairSection>
  )
}
