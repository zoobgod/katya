export type Project = {
  slug: string
  title: string
  place: string
  year: string
  summary: string
  description: string
  image: string
  detailImages: string[]
  isPlaceholder?: boolean
}

export const projects: Project[] = [
  {
    slug: 'project-88',
    title: 'Project 88',
    place: 'Moscow',
    year: '2025',
    summary:
      'Vibrant abstract composition blending pastel pinks, teals, and layered organic forms with a stylized figure.',
    description:
      'Project 88 is a contemporary mixed-style painting that combines fluid abstraction with graphic illustration. Soft turquoise and mint tones build a dreamlike base, while bold pathways and geometric accents add rhythm and movement. A simplified character anchors the composition and gives the work a narrative center.',
    image:
      'https://uc8b02027c1ed4ae4b4b0336caa3.dl.dropboxusercontent.com/cd/0/inline/C7w7JtsFx_ikeq_ZGMqB7UPNlSIeF50uY92Fyw3Em8bVIqUvFK5VY3jFd-aApXtmIq7hIxonZJQuxqzIu8Vy-fvhu4IdgL1aFVkTv-FGrjAyRd4fCgeIXY-ln3IU2KtRg_VbjK5mA_TJUC5YWu-wu7xh/file#',
    detailImages: [
      'https://www.dropbox.com/scl/fi/6uhujaa85q91yg6kn4tuz/88MAINMAIN.JPG?rlkey=yxta460yr88qhuddi6cecsfsw&st=e98ka2dk&raw=1',
      'https://www.dropbox.com/scl/fi/4evuxho2bwiooxae7bdun/882.JPG?rlkey=2ex5i748sueqb1n6pqm7n000j&st=odrrvglv&raw=1',
      'https://www.dropbox.com/scl/fi/wvbw8rqusy7udslc36z6v/883.JPG?rlkey=318qrqj0pfgml2r71wm5twlpv&st=t4l2h4u4&raw=1',
    ],
  },
  {
    slug: 'ocean',
    title: 'OCEAN',
    place: 'Undisclosed',
    year: '2024',
    summary: 'A calm ocean-inspired mural built around depth, flow, and soft transitions.',
    description:
      'OCEAN explores wave-like movement through layered blue-green tones and visible hand-painted texture. The composition stays open and breathable, so the wall feels expansive without becoming visually heavy. Matte finishes keep reflections low and preserve the softness of the palette.',
    image:
      'https://www.dropbox.com/scl/fi/b9bkwhua14y6vuv18yck2/OCEANMAIN.JPG?rlkey=9jmhonczkwocbgwe9l90ij9ua&st=ncw94ln1&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/semxw6674a8kszcflfnwl/OCEAN3.JPG?rlkey=sjzwqjiqftysh6pq01ql6c1rs&st=0eh99ndo&raw=1',
      'https://www.dropbox.com/scl/fi/ka713unqiweleshupulnb/OCEAN2.JPG?rlkey=ct1t3tbwcjsy5a9zyox6jbt4w&st=ka4rax80&raw=1',
    ],
  },
  {
    slug: 'persia',
    title: 'PERSIA',
    place: 'Undisclosed',
    year: '2025',
    summary: 'Persia-inspired wall composition with layered ornament and flowing structure.',
    description:
      'PERSIA blends decorative rhythm with abstract depth, drawing on ornamental movement rather than literal motifs. The wall shifts from structured line passages to soft color fields, creating detail up close and calm from distance. The final finish keeps tones muted and tactile.',
    image:
      'https://www.dropbox.com/scl/fi/shy5tnflppbysvngu53k1/PERSIAMAIN.JPG?rlkey=9hp25fxx7eot0q8b3ldgvkwg7&st=93nec1oj&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/97ocsigfw015um6yimrop/PERSIANA2.JPG?rlkey=3s2i67weaztf6cwwqfvdtxcx8&st=wmqdojvz&raw=1',
      'https://www.dropbox.com/scl/fi/6dclh2u80bzv265rhh070/PERSIANA3.JPG?rlkey=2kkj4kxa3o9zs7dopw322w3j4&st=pa567852&raw=1',
    ],
  },
  {
    slug: 'kitaeast',
    title: 'KITAEAST',
    place: 'KITAEAST',
    year: '2023',
    summary: 'China-inspired wall painting developed for a restaurant interior.',
    description:
      'KITAEAST was produced as a site-specific restaurant mural with a strong directional flow and warm tonal transitions. The composition supports the dining space without competing with lighting and service movement. The project was executed in stages outside opening hours to avoid disruption.',
    image:
      'https://www.dropbox.com/scl/fi/iilm991wm5v8xxsgmjau3/KITAEASTMAIN.jpg?rlkey=rrllf8dq4viwbppbgxzd3ska4&st=b6myh2qo&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/7jwz1za04djt7nf08w6mo/KITAEAST4.JPG?rlkey=miheashha7ljgux7cuudxyry5&st=295uvhh0&raw=1',
      'https://www.dropbox.com/scl/fi/mus1oucfzpkv335s1kgqi/KITAEAST3.jpg?rlkey=ts3cisqbezczt7mujht6uymbn&st=feq5ze32&raw=1',
      'https://www.dropbox.com/scl/fi/704pmlq746jgjpysmbwto/KITAEAST2.jpg?rlkey=i0rkjsm92injg6uhfrag38756&st=1y0e9i29&raw=1',
    ],
  },
  {
    slug: 'flamo',
    title: 'FLAMO',
    place: 'Undisclosed',
    year: '2024',
    summary: 'A mural balancing precise line detail with broad textured brushwork.',
    description:
      'FLAMO is built around contrast: controlled ornamental strokes against loose painterly fields. The structure allows the wall to read as one gesture while still revealing details in close view. Color choices were kept restrained to preserve atmosphere and material texture.',
    image:
      'https://www.dropbox.com/scl/fi/698tg20c7w11pmw4iyk4g/FLAMOMAIN.jpg?rlkey=vei5u2jp7kngg1x07ggz5a31h&st=l0fqopmn&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/uhwjx7eyih7jthqyx77o7/FLAMO4.jpg?rlkey=b2dd7jupj9zs98hym1e0ds2dl&st=p7brmsdb&raw=1',
      'https://www.dropbox.com/scl/fi/xjnzbktg2dvkmjd5y4etv/FLAMO3.jpg?rlkey=mmbc6yemdwacb7882eitk2hmv&st=6fnbthoo&raw=1',
      'https://www.dropbox.com/scl/fi/nuoomjqqv71ob1aekoq9d/FLAMO2.jpg?rlkey=iy5j9cnburzl730u4ml5ktl18&st=6phqqw3n&raw=1',
    ],
  },
  {
    slug: 'district',
    title: 'District',
    place: 'Undisclosed',
    year: '2025',
    summary: 'Calm illustrative wall painting designed around layered architectural rhythm.',
    description:
      'District uses soft transitions and controlled geometry to create a structured but quiet visual field. The painting is intentionally balanced, so it supports the room across daytime and evening light conditions. Durable matte coatings were selected for long-term color stability.',
    image:
      'https://www.dropbox.com/scl/fi/mmhelz9l3topjgdm2lirc/DISMAIN.JPG?rlkey=zyw7glntreogzndh4r9orpzcm&st=fba970aj&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/ia8vhkdvtipdt78zk0fex/DIS7.JPG?rlkey=8jwnnibuemzjhyoq1k8yo34tv&st=lq74k2oe&raw=1',
      'https://www.dropbox.com/scl/fi/kn2n4a5emgqme33xqkoho/DIS6.JPG?rlkey=n05nsyrv0n8rxktd90ay3upxv&st=ofdilhvf&raw=1',
      'https://www.dropbox.com/scl/fi/1v51x1fo08octfp0a175e/DIS4.JPG?rlkey=piyiomesl7zkkbsh3zhg61r8l&st=wxw1jq1l&raw=1',
      'https://www.dropbox.com/scl/fi/hta2tv81dqxg4nu8ki07h/DIS3.JPG?rlkey=uie8jw6yz69fisvpphk6mls7n&st=w5f26v8z&raw=1',
      'https://www.dropbox.com/scl/fi/kfiwgni0h1nwvmplgi1nx/DIS2.JPG?rlkey=qisvflzln4gb71fzrb9ti8j5f&st=5acoux0g&raw=1',
    ],
  },
  {
    slug: 'DEPO',
    title: 'DEPO',
    place: 'Undisclosed',
    year: '2025',
    summary: 'A large-scale mural with strong directional movement and layered urban rhythm.',
    description:
      'DEPO is a site-specific wall painting built around bold flow lines, soft tonal transitions, and textured brush passages. The composition was designed to read clearly from distance while keeping handcrafted detail up close. Layering and matte finishing were used to preserve depth without visual heaviness.',
    image: 'https://www.dropbox.com/scl/fi/wyyxoq54dufawuz9r4fvr/DEPOMAIN.JPG?rlkey=wid9qf6diddkj3czmktcvsl8h&st=yp6tfn7s&raw=1',
    detailImages: [


    ],
  },
  {
    slug: 'CHICKO',
    title: 'CHICKO',
    place: 'Undisclosed',
    year: '2025',
    summary: 'A playful but minimal mural concept balancing graphic accents with painterly texture.',
    description:
      'CHICKO combines crisp compositional structure with expressive hand-painted marks to create a light, contemporary atmosphere. The palette was kept controlled so the wall supports the space without overwhelming it. Repeated forms and soft transitions create rhythm across the full surface.',
    image: 'https://www.dropbox.com/scl/fi/uvhihrt0gmpp7n4ib5x7z/CHICKOMAIN.JPG?rlkey=rdrqv0zgaxpmdjkx39xfp961s&st=qfg33ksl&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/q1hu22on5obu6liykutdl/CHICKO4.jpg?rlkey=536bcs7mm4lc3dczinj95biyw&st=y033tbi5&raw=1',
      'https://www.dropbox.com/scl/fi/l6wd4uoderhs4towqg92z/CHICKO3.jpg?rlkey=gmtmrq8myr5l9x0ytaxoejlce&st=lszv3les&raw=1',
      'https://www.dropbox.com/scl/fi/wi15jazhp7jibsmi62ujr/CHICKO2.jpg?rlkey=8au3s558klvp4gcmvdhtn1a9r&st=ky1sa11q&raw=1',
      
    ],
  },
  {
    slug: 'Central Market',
    title: 'Central Market',
    place: 'Central Market',
    year: '2025',
    summary: 'A market-scale wall painting designed to feel warm, open, and continuously flowing.',
    description:
      'Central Market was developed for a busy public-facing environment where visual clarity matters at every distance. The painting uses broad tonal zones, layered detailing, and balanced contrast to guide the eye naturally through the space. Durable materials and matte protection were selected for long-term stability.',
    image: 'https://www.dropbox.com/scl/fi/gipwsnovl191kr7f5vo1g/CENTRALMAIN.jpg?rlkey=i3hklfml9geh4rqlwq3vyblsw&st=mscslunc&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/fmqzk67eqqvow49h5bg1f/CENTRAL4.JPG?rlkey=e0nytppt4mgr7kg3ur8fugp94&st=vt560xdz&raw=1',
      'https://www.dropbox.com/scl/fi/vyyh0jxtpikdidt53tusv/CENTRAL3.JPG?rlkey=k8tkwewltag3dmcz2udvmxroz&st=q8cxme5r&raw=1',
      'https://www.dropbox.com/scl/fi/c2md2flb0pl6i9ekpblmi/CENTRAL2.JPG?rlkey=7ewva7jvaj3pzn4chw907hep1&st=vsxws38g&raw=1',


    ],
  },
  {
    slug: 'BSHOP',
    title: 'BSHOP',
    place: 'Undisclosed',
    year: '2025',
    summary: 'A clean, modern mural treatment tailored for a boutique retail interior.',
    description:
      'BSHOP focuses on minimalist visual impact with refined line work, soft layering, and controlled contrast. The artwork was planned to complement product presentation while still carrying a clear artistic identity. Subtle texture transitions keep the wall dynamic without distracting from the space function.',
    image: 'https://www.dropbox.com/scl/fi/zijaua2hsmktd7mah8fe3/BSHOPMAIN.jpg?rlkey=z6pav3xtu0tdik5i5v5l4hh0k&st=z8g86zb2&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/ca4ntqhehfg9olvyytm1a/BSHOP3.jpg?rlkey=rj4pvxrwoy1avoen1tmimk9dw&st=3kwqkeph&raw=1',
      'https://www.dropbox.com/scl/fi/a99q4k3jjc9jy6gsl5qnw/BSHOP2.jpg?rlkey=wzodmf4abbiogty454gxqzy8o&st=60lybmki&raw=1',


    ],
  },
]

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
)
