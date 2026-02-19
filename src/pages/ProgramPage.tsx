import {Accordion, Anchor, Box, List, Text, Title} from '@mantine/core'

import { FairLayout } from '../components/layouts/FairLayout'
import { FairSection } from '../components/layouts/FairSection'

const programSchedule = [
  { time: '19:00–19:30', activity: '🎪 Открытие Ярмарки, фуршет и вводная часть' },
  { time: '19:30–21:00', activity: '🎯 Зарабатываем билетики на локациях, крутим колесо и охотимся за призами' },
  { time: '21:00–21:15', activity: '🍿 Перекус и передышка, пока Водолеи считают баллы' },
  { time: '21:15–21:40', activity: '🏆 Награждение, финальные подарки и сюрпризы' },
  { time: '21:40–∞', activity: '🎤 Афтепати: караоке, танцы и легендарные чебупели' },
]

const faqItems = [
  {
    label: '🔮 Как работает Колесо Фортуны и сервис?',
    content: (
      <>
        <Text mb="xs" style={{ color: 'white' }}>
          Главная цель — зарабатывать билетики у Водолеев и обменивать их на подарки 🎁
        </Text>

        <Text mb="xs" style={{ color: 'white' }}>
          Чтобы получить подарок, нужно зарегистрироваться в сервисе:
        </Text>

        <Anchor
          href="https://fortuna.aquarius-party.ru/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#9bf6ff', textAlign: 'center', display: 'block', marginBottom: '8px' }}
        >
          https://fortuna.aquarius-party.ru/
        </Anchor>

        <Text mb="xs" style={{ color: 'white' }}>
          Как это работает:
        </Text>

        <List spacing="xs" size="sm" style={{ color: 'white' }}>
          <List.Item>Получите 100 приветственных бонусов после регистрации</List.Item>
          <List.Item>Зарабатывайте билетики в испытаниях Водолеев</List.Item>
          <List.Item>Крутите Колесо Фортуны (стоимость — 150 билетиков)</List.Item>
          <List.Item>Получите подтверждение брони подарка</List.Item>
          <List.Item>Подойти к любому Водолею и заберите приз</List.Item>
          <List.Item>Повторяйте цикл сколько успеете 😏</List.Item>
        </List>

        <Text mt="md" mb="xs" style={{ color: 'white' }}>
          ⏰ Важно:
        </Text>

        <List spacing="xs" size="sm" style={{ color: 'white' }}>
          <List.Item>Ярмарка работает 90 минут — все призы нужно успеть забрать за это время</List.Item>
          <List.Item>Если подарок не доехал — выдадим ваучер и отдадим его позже</List.Item>
        </List>

        <Text mt="md" style={{ color: 'white' }}>
          🏆 Главный приз получит участник, который наберёт больше всех билетиков — узнаете его на награждении ✨
        </Text>
      </>
    ),
  },
  {
    label: '🎟 Как заработать билетики?',
    content: (
      <List spacing="xs" size="sm" style={{ color: 'white' }}>
        <List.Item>Баскетбол-понг и тир — за попадания (до 100 билетиков)</List.Item>
        <List.Item>Кольцеброс — за меткость (до 100 билетиков)</List.Item>
        <List.Item>Гадалка — за гадание (до 100 билетиков)</List.Item>
        <List.Item>Егерьштальмейстер — баланс с яйцом (до 100 билетиков)</List.Item>
        <List.Item>Лавка Торговца — творческие задания (до 150 билетиков)</List.Item>
      </List>
    ),
  },
  {
    label: '🪙 Есть ли ограничения?',
    content: (
      <Text style={{ color: 'white' }}>
        Нельзя проходить одну и ту же локацию подряд — нужно чередовать активности.
        Некоторые доп.квесты имеют лимиты (сторис, песни и т.д.).
      </Text>
    ),
  },
  {
    label: '🎁 Как получить подарок?',
    content: (
      <List type="ordered" spacing="xs" size="sm" style={{ color: 'white' }}>
        <List.Item>Заработать билетики</List.Item>
        <List.Item>Покрутить Колесо Фортуны (150 билетиков)</List.Item>
        <List.Item>Получить уведомление о выигрыше</List.Item>
        <List.Item>Подойти к любому Водолею</List.Item>
        <List.Item>Забрать подарок (или у Торговца, если его нет на станции)</List.Item>
      </List>
    ),
  },
  {
    label: '⏰ До какого времени можно забрать призы?',
    content: (
      <Text style={{ color: 'white' }}>
        Забрать подарки можно в течение 90 минут работы Ярмарки.
        После завершения выдача прекращается.
      </Text>
    ),
  },
  {
    label: '🔁 Можно ли проходить испытания несколько раз?',
    content: (
      <Text style={{ color: 'white' }}>
        Да! Возвращаться к локациям можно сколько угодно, но не подряд.
      </Text>
    ),
  },
  {
    label: '⭐️ Как заработать дополнительные билетики?',
    content: (
      <>
        <Text mb="xs" style={{ color: 'white' }}>
          Выполняйте побочные квесты:
        </Text>

        <List spacing="xs" size="sm" style={{ color: 'white' }}>
          <List.Item>🍔 Накормить или напоить Водолея — 50 билетиков</List.Item>
          <List.Item>📸 Красиво сфотографировать Водолея — 50 билетиков</List.Item>
          <List.Item>🎪 Фото на фотозоне — 50 билетиков</List.Item>
          <List.Item>📱 Сторис с Ярмарки — 50 билетиков (до 3 раз)</List.Item>
          <List.Item>🎭 Костюм или грим — 100 билетиков</List.Item>
          <List.Item>🎵 Добавить песню в плейлист — 20 билетиков (до 10 песен)</List.Item>
        </List>
      </>
    ),
  },
]


export const ProgramPage = () => {
  return (
    <FairLayout>
      <FairSection
        id=""
        title="Программа Водолейской Ярмарки"
        subtitle="Испытай удачу. Проиграй красиво. Выиграй неожиданно."
      >
        <Box
          className="fair-card"
          h="100%"
          style={{
            padding: '24px',
            borderRadius: '18px',
            background: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            cursor: 'default',
            opacity: 0,
            transform: 'translateY(20px) scale(0.96)',
            animation: 'fairFadeIn 0.6s ease forwards',
            transition: 'transform 0.25s ease, boxShadow 0.25s ease, background 0.25s ease',
            marginBottom: '30px',
          }}
        >
          <List spacing="sm" mb="lg" style={{ color: 'white', marginBottom: 0 }}>
            {programSchedule.map((item, idx) => (
              <List.Item key={idx}>
                <strong>{item.time}:</strong> {item.activity}
              </List.Item>
            ))}

          </List>
        </Box>

        <Title order={2} style={styles.title}>
          FAQ
        </Title>

        <Accordion variant="filled" radius="md" defaultValue={faqItems[0].label}>
          {faqItems.map((item, idx) => (
            <Accordion.Item key={idx} value={item.label} style={{
              borderRadius: '18px',
              background: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              cursor: 'default',
              opacity: 0,
              transform: 'translateY(20px) scale(0.96)',
              animation: 'fairFadeIn 0.6s ease forwards',
              transition: 'transform 0.25s ease, boxShadow 0.25s ease, background 0.25s ease',
              marginBottom: '30px',
            }}>
              <Accordion.Control style={{ color: 'white', backgroundColor: 'transparent' }}>
                {item.label}
              </Accordion.Control>
              <Accordion.Panel style={{ backgroundColor: 'transparent', color: 'white' }}>
                {item.content}
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
        <Text ta="center" c="dimmed" mb="xl">
          🔮 Заблудился во вселенной Ярмарки? Лови ближайшего Водолея — он всё расскажет и покажет ✨
        </Text>

      </FairSection>
    </FairLayout>
  )
}

const styles = {
  title: {
    textAlign: 'center' as const,
    color: '#fff',
    textShadow: `
      0 0 10px #ff00cc,
      0 0 30px #3333ff
    `,
    marginBottom: 16,
    fontSize: 32,
    textTransform: 'uppercase',
  },
}

export default ProgramPage
