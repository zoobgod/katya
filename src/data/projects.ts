export type Project = {
  slug: string
  title: string
  place: string
  year: string
  summary: string
  description: string
  image: string
  detailImages: string[]
}

export const projects: Project[] = [
  {
    slug: 'sage-bloom',
    title: 'Sage Bloom',
    place: 'Private Residence, Moscow',
    year: '2025',
    summary: 'Soft green mural wrapping two walls in a light-filled living room.',
    description:
      'A hand-painted botanical composition created for a quiet family apartment. The mural moves from thin line drawing to layered washes so it feels visible in daylight but calm in evening light. Pigments were mixed on-site to match warm plaster and linen textures.',
    image:
      'https://images.unsplash.com/photo-1624969862293-b749659ccc4b?auto=format&fit=crop&w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1577083552431-6e5fd75fcddf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80&sat=-35',
    ],
  },
  {
    slug: 'studio-garden',
    title: 'Studio Garden',
    place: 'Yoga Loft, Kazan',
    year: '2024',
    summary: 'Organic wall painting developed for a movement and meditation studio.',
    description:
      'This project was designed to support slow movement sessions and breath work. The mural palette uses mineral beige, sage, and desaturated clay to reduce visual noise while keeping the space alive. Brush textures were left visible to preserve a handmade rhythm across the wall.',
    image:
      'https://images.unsplash.com/photo-1460904577954-8fadb262612c?auto=format&fit=crop&w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1459908676235-d5f02a50184b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80&sat=-40',
    ],
  },
  {
    slug: 'quiet-coast',
    title: 'Quiet Coast',
    place: 'Boutique Hotel, Sochi',
    year: '2025',
    summary: 'Sea-inspired wall composition for a small suite in a coastal hotel.',
    description:
      'The composition references shoreline curves and eroded stone. Instead of a literal landscape, the design uses abstract layers that hold depth from a distance and detail up close. Matte sealant was applied to keep reflections low and preserve soft color transitions.',
    image:
      'https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?auto=format&fit=crop&w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80&sat=-20',
    ],
  },
  {
    slug: 'clay-horizon',
    title: 'Clay Horizon',
    place: 'Cafe Margo, Saint Petersburg',
    year: '2023',
    summary: 'Warm terracotta gradients and line work for a neighborhood cafe.',
    description:
      'For this cafe interior, the wall painting balances statement and restraint. The lower half receives stronger earthen tones, while upper sections dissolve into pale neutrals. The project was completed in stages outside service hours to keep the venue open during installation week.',
    image:
      'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?auto=format&fit=crop&w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?auto=format&fit=crop&w=1200&q=80&sat=-35',
    ],
  },
  {
    slug: 'wild-iris',
    title: 'Wild Iris',
    place: 'Atelier Apartment, Tver',
    year: '2024',
    summary: 'A floral line mural blending fine detail with broad textured marks.',
    description:
      'The client wanted floral notes without decorative overload. The result is a single flowing motif that shifts from structured petals to loose pigment clouds. Pigments were intentionally muted to support existing furniture and natural oak floors.',
    image:
      'https://images.unsplash.com/photo-1578301978069-227b81b86942?auto=format&fit=crop&w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80&sat=-35',
    ],
  },
  {
    slug: 'linen-echo',
    title: 'Linen Echo',
    place: 'Children Library, Yaroslavl',
    year: '2025',
    summary: 'Calm illustrative wall painting for a children reading area.',
    description:
      'This library wall had to remain bright and gentle for young readers. The concept uses rounded forms and low-contrast transitions to keep the room welcoming without overstimulation. Durable matte coatings were chosen for easy cleaning and long-term color stability.',
    image:
      'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1200&q=80&sat=-25',
    ],
  },
]

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
)
