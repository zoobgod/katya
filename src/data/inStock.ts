import type { LocalizedText } from './projects'

export type InStockItem = {
  slug: string
  title: LocalizedText
  medium: LocalizedText
  size: string
  year: string
  price: LocalizedText
  image?: string
  isPlaceholder?: boolean
}

export const inStockItems: InStockItem[] = [
  {
    slug: 'kata-noi-phuket',
    title: { en: 'KATA NOI. PHUKET.', ru: 'KATA NOI. PHUKET.' },
    medium: { en: 'Oil on canvas', ru: 'Масло на холсте' },
    size: '35 x 45 cm',
    year: '2026',
    price: { en: '65 000 rub', ru: '65 000 руб' },
  },
  {
    slug: 'avacados-dream',
    title: { en: "AVACADO'S DREAM", ru: "AVACADO'S DREAM" },
    medium: { en: 'Oil on canvas', ru: 'Масло на холсте' },
    size: '40 x 50 cm',
    year: '2026',
    price: { en: '75 000 rub', ru: '75 000 руб' },
  },
  {
    slug: 'on-the-way',
    title: { en: 'ON THE WAY', ru: 'ON THE WAY' },
    medium: { en: 'Oil on canvas', ru: 'Масло на холсте' },
    size: '50 x 100 cm',
    year: '2026',
    price: { en: '112 000 rub', ru: '112 000 руб' },
  },
  {
    slug: 'i-thought-a-lot-and-wondered',
    title: { en: 'I thought a lot and wondered.', ru: 'I thought a lot and wondered.' },
    medium: { en: 'Oil on canvas', ru: 'Масло на холсте' },
    size: '30 x 30 cm',
    year: '2026',
    price: { en: '55 000 rub', ru: '55 000 руб' },
  },
  {
    slug: 'opora',
    title: { en: 'OPORA', ru: 'OPORA' },
    medium: { en: 'Oil on canvas', ru: 'Масло на холсте' },
    size: '80 x 100 cm',
    year: '2026',
    price: { en: '125 000 rub', ru: '125 000 руб' },
  },
  {
    slug: 'different',
    title: { en: 'DIFFERENT', ru: 'DIFFERENT' },
    medium: { en: 'Oil on canvas', ru: 'Масло на холсте' },
    size: '50 x 70 cm',
    year: '2026',
    price: { en: '75 000 rub', ru: '75 000 руб' },
  },
  {
    slug: 'late-l',
    title: { en: 'LATE L.', ru: 'LATE L.' },
    medium: { en: 'Oil on canvas', ru: 'Масло на холсте' },
    size: '100 x 120 cm',
    year: '2026',
    price: { en: 'Inquire about the price', ru: 'Цена по запросу' },
  },
  {
    slug: 'water-has-a-soul-too',
    title: { en: 'WATER HAS A SOUL TOO', ru: 'WATER HAS A SOUL TOO' },
    medium: { en: 'Oil on canvas', ru: 'Масло на холсте' },
    size: '50 x 100 cm',
    year: '2026',
    price: { en: '112 000 rub', ru: '112 000 руб' },
  },
  {
    slug: 'spring',
    title: { en: 'SPRING.', ru: 'SPRING.' },
    medium: { en: 'Oil on canvas', ru: 'Масло на холсте' },
    size: '110 x 120 cm',
    year: '2026',
    price: { en: '260 000 rub', ru: '260 000 руб' },
  },
  {
    slug: 'spirits-of-the-jungle',
    title: { en: 'SPIRITS OF THE JUNGLE', ru: 'SPIRITS OF THE JUNGLE' },
    medium: { en: 'Oil on canvas', ru: 'Масло на холсте' },
    size: '100 x 120',
    year: '2026',
    price: { en: 'Inquire about the price', ru: 'Цена по запросу' },
  },
  {
    slug: 'shepherd',
    title: { en: 'SHEPHERD', ru: 'SHEPHERD' },
    medium: { en: 'Oil on canvas', ru: 'Масло на холсте' },
    size: '60 x 60 cm',
    year: '2026',
    price: { en: 'Inquire about the price', ru: 'Цена по запросу' },
  },
  {
    slug: 'v-polumrake',
    title: { en: 'V POLUMRAKE', ru: 'V POLUMRAKE' },
    medium: { en: 'Oil on canvas', ru: 'Масло на холсте' },
    size: '70 x 90 cm',
    year: '2026',
    price: { en: 'Inquire about the price', ru: 'Цена по запросу' },
  },
  {
    slug: 'more',
    title: { en: 'MORE', ru: 'MORE' },
    medium: { en: 'Oil on canvas', ru: 'Масло на холсте' },
    size: '60 x 60 cm',
    year: '2026',
    price: { en: 'Inquire about the price', ru: 'Цена по запросу' },
  },
  {
    slug: 'expectation',
    title: { en: 'EXPECTATION', ru: 'EXPECTATION' },
    medium: { en: 'Oil on canvas', ru: 'Масло на холсте' },
    size: '70 x 100 cm',
    year: '2026',
    price: { en: '125 000 rub', ru: '125 000 руб' },
  },
  {
    slug: 'vacation',
    title: { en: 'VACATION', ru: 'VACATION' },
    medium: { en: 'Oil on canvas', ru: 'Масло на холсте' },
    size: '60 x 90 cm',
    year: '2026',
    price: { en: 'Inquire about the price', ru: 'Цена по запросу' },
  },
  {
    slug: 'birds',
    title: { en: 'BIRDS', ru: 'BIRDS' },
    medium: { en: 'Oil on canvas', ru: 'Масло на холсте' },
    size: '50 x 100 cm',
    year: '2026',
    price: { en: '95 000 rub', ru: '95 000 руб' },
  },
  {
    slug: 'the-harbinger-of-love',
    title: { en: 'THE HARBINGER OF LOVE.', ru: 'THE HARBINGER OF LOVE.' },
    medium: { en: 'Oil on canvas', ru: 'Масло на холсте' },
    size: '60 x 100 cm',
    year: '2026',
    price: { en: '170 000 rub', ru: '170 000 руб' },
  },
]
