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
    slug: 'stock-01',
    title: { en: 'Untitled 01', ru: 'Без названия 01' },
    medium: { en: 'Acrylic on canvas', ru: 'Акрил, холст' },
    size: '80 x 100 cm',
    year: '2026',
    price: { en: '120 000 ₽', ru: '120 000 ₽' },
    isPlaceholder: true,
  },
  {
    slug: 'stock-02',
    title: { en: 'Untitled 02', ru: 'Без названия 02' },
    medium: { en: 'Acrylic on canvas', ru: 'Акрил, холст' },
    size: '70 x 90 cm',
    year: '2026',
    price: { en: '98 000 ₽', ru: '98 000 ₽' },
    isPlaceholder: true,
  },
  {
    slug: 'stock-03',
    title: { en: 'Untitled 03', ru: 'Без названия 03' },
    medium: { en: 'Mixed media on board', ru: 'Смешанная техника, панель' },
    size: '60 x 80 cm',
    year: '2026',
    price: { en: '86 000 ₽', ru: '86 000 ₽' },
    isPlaceholder: true,
  },
  {
    slug: 'stock-04',
    title: { en: 'Untitled 04', ru: 'Без названия 04' },
    medium: { en: 'Acrylic on canvas', ru: 'Акрил, холст' },
    size: '90 x 120 cm',
    year: '2026',
    price: { en: '145 000 ₽', ru: '145 000 ₽' },
    isPlaceholder: true,
  },
  {
    slug: 'stock-05',
    title: { en: 'Untitled 05', ru: 'Без названия 05' },
    medium: { en: 'Mixed media on canvas', ru: 'Смешанная техника, холст' },
    size: '65 x 85 cm',
    year: '2026',
    price: { en: '92 000 ₽', ru: '92 000 ₽' },
    isPlaceholder: true,
  },
  {
    slug: 'stock-06',
    title: { en: 'Untitled 06', ru: 'Без названия 06' },
    medium: { en: 'Acrylic on canvas', ru: 'Акрил, холст' },
    size: '100 x 140 cm',
    year: '2026',
    price: { en: '168 000 ₽', ru: '168 000 ₽' },
    isPlaceholder: true,
  },
]
