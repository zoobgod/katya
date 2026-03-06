export type LocalizedText = {
  en: string
  ru: string
}

export type Project = {
  slug: string
  title: LocalizedText
  place: LocalizedText
  year: string
  summary: LocalizedText
  description: LocalizedText
  image: string
  detailImages: string[]
  isPlaceholder?: boolean
}

export const projects: Project[] = [
  {
    slug: 'project-88',
    title: { en: 'INC 88', ru: 'INC 88' },
    place: { en: 'Moscow', ru: 'Москва' },
    year: '2022',
    summary: {
      en: 'A bold composition where pastel tones merge with layered organic forms and a stylized figure.',
      ru: 'Броская композиция, где пастельные тона соединяются со слоистыми органическими формами и стилизованной фигурой.',
    },
    description: {
      en: 'INC 88 is a contemporary work at the intersection of fluid abstraction and graphic illustration. Soft turquoise and mint tones create an almost dreamlike base, while contrasting lines and geometric accents set rhythm and movement. A simplified character anchors the composition and gives it a narrative center. The mural was executed in a private interior in Moscow from the artist’s original sketch. Scope: one wall. Technique and materials: brushwork, fine-art acrylic, and protective varnish. The project was completed in 3 days.',
      ru: 'INC 88 — современная работа на стыке пластичной абстракции и графичной иллюстрации. Мягкие бирюзовые и мятные оттенки создают почти сновидческую основу, а контрастные линии и геометрические акценты задают ритм и движение. Упрощенный персонаж удерживает композицию и добавляет ей сюжетный центр. Роспись выполнена в частном помещении в Москве по эскизу автора. Объем работы — одна стена. Техника и материалы: работа кистями, художественный акрил и защитный лак. Проект был реализован за 3 дня.',
    },
    image:
    'https://www.dropbox.com/scl/fi/6uhujaa85q91yg6kn4tuz/88MAINMAIN.JPG?rlkey=yxta460yr88qhuddi6cecsfsw&st=pcfzvvwu&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/6uhujaa85q91yg6kn4tuz/88MAINMAIN.JPG?rlkey=yxta460yr88qhuddi6cecsfsw&st=e98ka2dk&raw=1',
      'https://www.dropbox.com/scl/fi/4evuxho2bwiooxae7bdun/882.JPG?rlkey=2ex5i748sueqb1n6pqm7n000j&st=odrrvglv&raw=1',
      'https://www.dropbox.com/scl/fi/wvbw8rqusy7udslc36z6v/883.JPG?rlkey=318qrqj0pfgml2r71wm5twlpv&st=t4l2h4u4&raw=1',
    ],
  },
  {
    slug: 'persia',
    title: { en: 'Persiana', ru: 'Persiana' },
    place: { en: 'Moscow', ru: 'Москва' },
    year: '2023',
    summary: {
      en: 'A painting and mural inspired by Persian motifs, with layered ornament and a fluid structure.',
      ru: 'Картина и роспись, вдохновленные персидскими мотивами, с многослойным орнаментом и текучей структурой.',
    },
    description: {
      en: 'Persiana transitions from clear linear fragments to soft color fields: up close it reveals a large amount of detail, and from distance it keeps a calm, unified silhouette. The mural on a wooden panel combines decorative rhythm and abstract depth, relying on the plasticity of ornament rather than literal symbols. The final surface finish preserves tactile quality and texture. The works were created for a restaurant in Moscow from the artist’s own sketch. The project was completed in 4 days.',
      ru: 'Картина переходит от четких линейных фрагментов к мягким цветовым полям: вблизи раскрывается большое количество деталей, издалека сохраняется спокойный и цельный силуэт. Роспись на деревянной панели сочетает декоративный ритм и абстрактную глубину, опираясь на пластичность орнамента, а не на буквальные символы. Финальная отделка поверхности сохраняет тактильность и фактуру. Произведения созданы для ресторана в Москве по собственному эскизу. Проект реализован за 4 дня.',
    },
    image:
      'https://www.dropbox.com/scl/fi/shy5tnflppbysvngu53k1/PERSIAMAIN.JPG?rlkey=9hp25fxx7eot0q8b3ldgvkwg7&st=93nec1oj&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/97ocsigfw015um6yimrop/PERSIANA2.JPG?rlkey=3s2i67weaztf6cwwqfvdtxcx8&st=wmqdojvz&raw=1',
      'https://www.dropbox.com/scl/fi/6dclh2u80bzv265rhh070/PERSIANA3.JPG?rlkey=2kkj4kxa3o9zs7dopw322w3j4&st=pa567852&raw=1',
      'https://www.dropbox.com/scl/fi/bu63vm1urls3gev616k61/Persiana-3.JPG?rlkey=5bkbudhpbhiwqioubdpo1fgag&st=s3yllz9g&raw=1',
      'https://www.dropbox.com/scl/fi/54ct0wl8c67f6wp1luv1d/Persiana-1.JPG?rlkey=yj872d510857rgci9r6cgswf9&st=8vo2puyr&raw=1',
      'https://www.dropbox.com/scl/fi/ujsig4ckvj9wqziruxobq/Persiana-2.JPG?rlkey=wtea3d9dp0megeu4pk069f41h&st=lmjhk5fe&raw=1',
    ],
  },
  {
    slug: 'kitaeast',
    title: { en: 'KITAEAST', ru: 'KITAEAST' },
    place: { en: 'Surgut', ru: 'Сургут' },
    year: '2023',
    summary: {
      en: 'A mural in Chinese aesthetics with strong compositional direction and active tonal transitions.',
      ru: 'Роспись в китайской эстетике, с выраженным направлением композиции и активными тональными переходами.',
    },
    description: {
      en: 'The work supports the atmosphere of the dining hall and does not conflict with lighting or service flow. Composition and tones were selected to read as a whole while preserving the lively feel of an old Chinese street. The mural was executed in a venue in Surgut using sketches provided by the interior designers. Scope: five walls, four columns, and a decorative panel around the kitchen perimeter, plus decorative treatment of three additional columns and poster placement in the hall. Technique and materials: brushwork, fine-art acrylic, wall paint, and protective varnish. The project was completed in stages over 14 days.',
      ru: 'Работа поддерживает атмосферу зала и не конфликтует с освещением и динамикой обслуживания. Композиция и оттенки подобраны так, чтобы читаться цельно, но сохранять живость имитации китайской улочки. Роспись выполнена в заведении в Сургуте по эскизам, предоставленным дизайнерами. Объем проекта: пять стен, четыре столба и декоративная панель по периметру кухни, а также декоративное оформление трех столбов и размещение постеров по залу. Техника и материалы: работа кистями, художественный акрил, краска для стен и защитный лак. Работа выполнялась поэтапно и заняла 14 дней.',
    },
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
    title: { en: 'FLAMO', ru: 'FLAMO' },
    place: { en: 'Kazan', ru: 'Казань' },
    year: '2025',
    summary: {
      en: 'A unique author mural where precise linear graphics emphasize the philosophy and mythology of the venue.',
      ru: 'Уникальная авторская роспись, где точная линейная графика подчеркивает философию заведения и его мифологическую основу.',
    },
    description: {
      en: 'FLAMO is built on contrast: controlled ornamental lines against free painterly masses. This structure lets the wall read as a single gesture while opening many details at close range. The palette is intentionally restrained to preserve atmosphere and material texture. The mural was executed in a venue in Kazan from original sketches and mythology created specifically for this space. Scope: one arch and three walls. Technique and materials: brushwork, fine-art acrylic, and protective varnish. Photos were taken during the construction phase. The project was completed in 9 days.',
      ru: 'FLAMO построен на контрасте: контролируемые орнаментальные линии против свободных живописных масс. Такая структура позволяет воспринимать стену как единый жест, но при этом открывает множество деталей вблизи. Палитра намеренно сдержанная, чтобы сохранить атмосферу и материальность фактуры. Роспись выполнена в заведении в Казани по собственным эскизам и созданной мифологии для этого пространства. Объем работы — арка и три стены. Техника и материалы: работа кистью, художественный акрил и защитный лак. Фотографии сделаны на этапе строительных работ. Проект реализован за 9 дней.',
    },
    image:
      'https://www.dropbox.com/scl/fi/698tg20c7w11pmw4iyk4g/FLAMOMAIN.jpg?rlkey=vei5u2jp7kngg1x07ggz5a31h&st=l0fqopmn&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/uhwjx7eyih7jthqyx77o7/FLAMO4.jpg?rlkey=b2dd7jupj9zs98hym1e0ds2dl&st=p7brmsdb&raw=1',
      'https://www.dropbox.com/scl/fi/xjnzbktg2dvkmjd5y4etv/FLAMO3.jpg?rlkey=mmbc6yemdwacb7882eitk2hmv&st=6fnbthoo&raw=1',
      'https://www.dropbox.com/scl/fi/nuoomjqqv71ob1aekoq9d/FLAMO2.jpg?rlkey=iy5j9cnburzl730u4ml5ktl18&st=6phqqw3n&raw=1',
    ],
  },
  {
    slug: 'zen',
    title: { en: 'ZEN', ru: 'ZEN' },
    place: { en: 'Moscow', ru: 'Москва' },
    year: '2022',
    summary: {
      en: 'An entrance-group mural inspired by ancient temple imagery and Buddhist wall painting aesthetics.',
      ru: 'Роспись входной группы, вдохновленная древними храмовыми изображениями и эстетикой буддийских настенных росписей.',
    },
    description: {
      en: 'The composition is built as a dense panel with many deity figures, creating a ritual atmosphere and deep decorative environment. The core palette uses rich reds and golds that form a warm ceremonial glow. The mural includes more than 40 beings, each with unique ornament in the clothing. Details were executed with gold leaf, raised golden contours, and multilayer hand painting, making the work highly meticulous and detailed. The mural was created in a venue in Moscow from a sketch based on ancient temple painting. Technique: brushwork, fine-art acrylic, gold leaf, and protective varnish. The project was completed in 18 days.',
      ru: 'Композиция построена как насыщенное панно с множеством фигур божеств, создающих ощущение ритуального пространства и глубокой декоративной среды. Основная палитра — насыщенные красные и золотые оттенки, которые формируют торжественное и теплое свечение стены. В композиции изображено более 40 существ, каждое с уникальным орнаментом на одежде. Детали выполнены с использованием потали, объемных золотых контуров и многослойной ручной росписи, что делает работу особенно кропотливой и детализированной. Роспись создана в заведении в Москве по эскизу, основанному на древней храмовой росписи. Техника: работа кистями, художественный акрил, поталь и защитный лак. Проект реализован за 18 дней.',
    },
    image:
      'https://www.dropbox.com/scl/fi/2t220iguieagmzx17lwjx/ZENMAIN.JPG?rlkey=5o97ztef2s7l8xm89qn9kqsc4&st=xc5ach3p&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/2y7lnwi3a42q3z8it4age/ZEN2.JPG?rlkey=rsrq1snzvbfpb05fq7g975as8&st=bmky2w5f&raw=1',
      'https://www.dropbox.com/scl/fi/fndn7sgxfedqd3qx0zelp/ZEN3.JPG?rlkey=2r30vjeyb6d0gvhziznk8fgjb&st=t3sejs0t&raw=1',
      'https://www.dropbox.com/scl/fi/95gmwp5980tessqda5815/ZEN4.JPG?rlkey=nbrnxca6g76qx4itwxozr8w3g&st=kwnrq9gc&raw=1',
    ],
  },
  {
    slug: 'district',
    title: { en: 'District', ru: 'District' },
    place: { en: 'Undisclosed', ru: 'Скрытая локация' },
    year: '2025',
    summary: {
      en: 'Calm illustrative wall painting designed around layered architectural rhythm.',
      ru: 'Спокойная роспись с иллюстративным характером и многослойным архитектурным ритмом.',
    },
    description: {
      en: 'District uses soft transitions and controlled geometry to create a structured but quiet visual field. The painting is intentionally balanced, so it supports the room across daytime and evening light conditions. Durable matte coatings were selected for long-term color stability.',
      ru: 'District использует мягкие переходы и контролируемую геометрию, чтобы создать структурное, но тихое визуальное поле. Композиция специально выверена так, чтобы работать и при дневном, и при вечернем свете. Для долговечности и стабильности цвета выбраны износостойкие матовые покрытия.',
    },
    image:
      'https://www.dropbox.com/scl/fi/mmhelz9l3topjgdm2lirc/DISMAIN.JPG?rlkey=zyw7glntreogzndh4r9orpzcm&st=fba970aj&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/ia8vhkdvtipdt78zk0fex/DIS7.JPG?rlkey=8jwnnibuemzjhyoq1k8yo34tv&st=lq74k2oe&raw=1',
      'https://www.dropbox.com/scl/fi/kn2n4a5emgqme33xqkoho/DIS6.JPG?rlkey=n05nsyrv0n8rxktd90ay3upxv&st=ofdilhvf&raw=1',
      'https://www.dropbox.com/scl/fi/1v51x1fo08octfp0a175e/DIS4.JPG?rlkey=piyiomesl7zkkbsh3zhg61r8l&st=wxw1jq1l&raw=1',
      'https://www.dropbox.com/scl/fi/hta2tv81dqxg4nu8ki07h/DIS3.JPG?rlkey=uie8jw6yz69fisvpphk6mls7n&st=w5f26v8z&raw=1',
      'https://www.dropbox.com/scl/fi/kfiwgni0h1nwvmplgi1nx/DIS2.JPG?rlkey=qisvflzln4gb71fzrb9ti8j5f&st=5acoux0g&raw=1',
      'https://www.dropbox.com/scl/fi/wp11kahxzx1ean0gslh44/District-1.1.JPG?rlkey=5lqvd397pt0tmeq3jysk58ni7&st=tuzz3l3e&raw=1',
      'https://www.dropbox.com/scl/fi/3gybyw0ntwm2p3kx8zbf4/District-1.5.JPG?rlkey=l2qjyk73ir8w4tgz9e97hs0gf&st=vanxgysz&raw=1',
      'https://www.dropbox.com/scl/fi/8iph1c53mkuwcj6xhsrgc/District-1.2.JPG?rlkey=lvvca6a6dehdqiabbbz5sfib6&st=ua5y23se&raw=1',
      'https://www.dropbox.com/scl/fi/6np43oeuvv596s12hvi1v/District-1.3.JPG?rlkey=1uswz0w3ytyd5mmjdiwt7iumq&st=2iomx1mw&raw=1',
      'https://www.dropbox.com/scl/fi/7paxcccyxc9r58y5s0ucd/District-1.4.JPG?rlkey=3n5pzh8vl75blkaiwl6dyfiog&st=t3878y1q&raw=1',
      'https://www.dropbox.com/scl/fi/cxmr2al6lz99p1as876i7/District-3.1.JPG?rlkey=x6mitr96351fx98h4rdy7lyjw&st=8v0qap6d&raw=1',
      'https://www.dropbox.com/scl/fi/8ttyd8xassg2zz32kkaqj/District-1.6.JPG?rlkey=o2lzd64a4dn4s4mjj65g76ek2&st=37uoav34&raw=1',
      'https://www.dropbox.com/scl/fi/pvnnf8f6wyk2mmzy2dlmw/District-1.7.JPG?rlkey=310bu8n0zzd9p1nzqn0ztgdq3&st=hlbvp8x0&raw=1',

    ],
  },
  {
    slug: 'DEPO',
    title: { en: 'DEPO', ru: 'DEPO' },
    place: { en: 'Undisclosed', ru: 'Скрытая локация' },
    year: '2025',
    summary: {
      en: 'A large-scale mural with strong directional movement and layered urban rhythm.',
      ru: 'Крупноформатная роспись с сильным направленным движением и многослойным городским ритмом.',
    },
    description: {
      en: 'DEPO is a site-specific wall painting built around bold flow lines, soft tonal transitions, and textured brush passages. The composition was designed to read clearly from distance while keeping handcrafted detail up close. Layering and matte finishing were used to preserve depth without visual heaviness.',
      ru: 'DEPO — роспись, созданная под конкретное пространство, на основе выразительных линий, мягких тональных переходов и фактурной кистевой работы. Композиция читается цельно с расстояния, но сохраняет ручные детали вблизи. Многослойность и матовая отделка помогают удержать глубину без визуальной тяжести.',
    },
    image:
      'https://www.dropbox.com/scl/fi/wyyxoq54dufawuz9r4fvr/DEPOMAIN.JPG?rlkey=wid9qf6diddkj3czmktcvsl8h&st=yp6tfn7s&raw=1',
    detailImages: [],
  },
  {
    slug: 'CHICKO',
    title: { en: 'CHICKO', ru: 'CHICKO' },
    place: { en: 'Undisclosed', ru: 'Скрытая локация' },
    year: '2025',
    summary: {
      en: 'A playful but minimal mural concept balancing graphic accents with painterly texture.',
      ru: 'Игровая, но минималистичная роспись, где графичные акценты сбалансированы живописной фактурой.',
    },
    description: {
      en: 'CHICKO combines crisp compositional structure with expressive hand-painted marks to create a light, contemporary atmosphere. The palette was kept controlled so the wall supports the space without overwhelming it. Repeated forms and soft transitions create rhythm across the full surface.',
      ru: 'CHICKO объединяет четкую композиционную структуру и выразительные ручные мазки, формируя легкую современную атмосферу. Палитра намеренно сдержанная, чтобы работа поддерживала пространство и не перегружала его. Повторяющиеся формы и мягкие переходы создают ритм по всей поверхности стены.',
    },
    image:
      'https://www.dropbox.com/scl/fi/uvhihrt0gmpp7n4ib5x7z/CHICKOMAIN.JPG?rlkey=rdrqv0zgaxpmdjkx39xfp961s&st=qfg33ksl&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/q1hu22on5obu6liykutdl/CHICKO4.jpg?rlkey=536bcs7mm4lc3dczinj95biyw&st=y033tbi5&raw=1',
      'https://www.dropbox.com/scl/fi/l6wd4uoderhs4towqg92z/CHICKO3.jpg?rlkey=gmtmrq8myr5l9x0ytaxoejlce&st=lszv3les&raw=1',
      'https://www.dropbox.com/scl/fi/wi15jazhp7jibsmi62ujr/CHICKO2.jpg?rlkey=8au3s558klvp4gcmvdhtn1a9r&st=ky1sa11q&raw=1',
    ],
  },
  {
    slug: 'Central Market',
    title: { en: 'Central Market', ru: 'Центральный рынок' },
    place: { en: 'Central Market', ru: 'Центральный рынок' },
    year: '2025',
    summary: {
      en: 'A market-scale wall painting designed to feel warm, open, and continuously flowing.',
      ru: 'Масштабная роспись для пространства рынка, построенная на ощущении тепла, открытости и непрерывного движения.',
    },
    description: {
      en: 'Central Market was developed for a busy public-facing environment where visual clarity matters at every distance. The painting uses broad tonal zones, layered detailing, and balanced contrast to guide the eye naturally through the space. Durable materials and matte protection were selected for long-term stability.',
      ru: 'Проект Central Market создавался для активного общественного пространства, где важна визуальная ясность на любой дистанции. В работе используются широкие тональные зоны, многослойная детализация и выверенный контраст, чтобы взгляд естественно двигался по интерьеру. Для долговечности выбраны стойкие материалы и матовая защита.',
    },
    image:
      'https://www.dropbox.com/scl/fi/gipwsnovl191kr7f5vo1g/CENTRALMAIN.jpg?rlkey=i3hklfml9geh4rqlwq3vyblsw&st=mscslunc&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/fmqzk67eqqvow49h5bg1f/CENTRAL4.JPG?rlkey=e0nytppt4mgr7kg3ur8fugp94&st=vt560xdz&raw=1',
      'https://www.dropbox.com/scl/fi/vyyh0jxtpikdidt53tusv/CENTRAL3.JPG?rlkey=k8tkwewltag3dmcz2udvmxroz&st=q8cxme5r&raw=1',
      'https://www.dropbox.com/scl/fi/c2md2flb0pl6i9ekpblmi/CENTRAL2.JPG?rlkey=7ewva7jvaj3pzn4chw907hep1&st=vsxws38g&raw=1',
      'https://www.dropbox.com/scl/fi/re4vs26l6y5jm5q6l2uxl/2_2022.jpg?rlkey=rrnytpbdy23atot4j7g1o431b&st=68t2ivge&raw=1',
    ],
  },
  {
    slug: 'BSHOP',
    title: { en: 'BSHOP', ru: 'BSHOP' },
    place: { en: 'Undisclosed', ru: 'Скрытая локация' },
    year: '2025',
    summary: {
      en: 'A clean, modern mural treatment tailored for a boutique retail interior.',
      ru: 'Чистая современная роспись, адаптированная под интерьер бутикового ритейла.',
    },
    description: {
      en: 'BSHOP focuses on minimalist visual impact with refined line work, soft layering, and controlled contrast. The artwork was planned to complement product presentation while still carrying a clear artistic identity. Subtle texture transitions keep the wall dynamic without distracting from the space function.',
      ru: 'BSHOP делает ставку на минималистичное визуальное воздействие: точная линейная работа, мягкая многослойность и контролируемый контраст. Роспись спроектирована так, чтобы поддерживать презентацию товара и одновременно сохранять собственный художественный характер. Нюансные фактурные переходы добавляют динамику и не отвлекают от функции пространства.',
    },
    image:
      'https://www.dropbox.com/scl/fi/zijaua2hsmktd7mah8fe3/BSHOPMAIN.jpg?rlkey=z6pav3xtu0tdik5i5v5l4hh0k&st=z8g86zb2&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/ca4ntqhehfg9olvyytm1a/BSHOP3.jpg?rlkey=rj4pvxrwoy1avoen1tmimk9dw&st=3kwqkeph&raw=1',
      'https://www.dropbox.com/scl/fi/a99q4k3jjc9jy6gsl5qnw/BSHOP2.jpg?rlkey=wzodmf4abbiogty454gxqzy8o&st=60lybmki&raw=1',
    ],
  },
  {
    slug: 'angel-apples',
    title: { en: 'ANGEL&APPLES', ru: 'ANGEL&APPLES' },
    place: { en: 'Undisclosed', ru: 'Скрытая локация' },
    year: '2026',
    summary: {
      en: 'A panoramic staircase mural with a guardian angel, river landscape, and apple garden in warm dawn light.',
      ru: 'Панорамная роспись для лестничного пространства: ангел-хранитель, речной пейзаж и яблоневый сад в теплом свете рассвета.',
    },
    description: {
      en: 'ANGEL&APPLES wraps the staircase with a continuous landscape: tall trees, water reflections, orchard branches, and a distant house. A large winged figure becomes the focal point and anchors the story, while soft atmospheric gradients keep the wall airy. Warm gold tones are balanced with cooler blue-greens so the mural stays luminous by day and calm in evening light.',
      ru: 'ANGEL&APPLES разворачивается вдоль лестницы как единый пейзаж: высокие деревья, отражения воды, ветви сада и дом в глубине. Крупная фигура ангела становится главной точкой композиции и удерживает сюжет, а мягкие воздушные переходы сохраняют легкость стены. Теплые золотистые оттенки уравновешены холодными сине-зелеными тонами, поэтому роспись выглядит светлой днем и спокойной вечером.',
    },
    image: 'https://www.dropbox.com/scl/fi/a3w637cbwxvtxnq6n5p2u/MAIN.jpg?rlkey=lb5ug44whi8nld9fhjpd5zcbx&st=8jq5wvfx&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/b2bnzni3wlqzjoj9fynnc/_1.jpg?rlkey=3c57dr874f6sbg1g6i8gkoyit&st=skmbk1pd&raw=1',
      'https://www.dropbox.com/scl/fi/tt5s0nbbt3pp9q1hsvjud/_10.jpg?rlkey=wqbm5kcj5l87siqengrsh8tue&st=j14zdj5w&raw=1',
      'https://www.dropbox.com/scl/fi/5fycvv6qaa7qixbhpjscf/_11.jpg?rlkey=82gvredbxghornmdcae2rqsnk&st=szqjytxy&raw=1',
      'https://www.dropbox.com/scl/fi/gx5udv84u4k36ppgcmtlf/_14.jpg?rlkey=802h31n0t9qz0b2mqtiu9cyoq&st=ahnqtk4z&raw=1',
      'https://www.dropbox.com/scl/fi/cn6apflfcgog25dmkvut6/_12.jpg?rlkey=mv3fu6lx68n8v00ggp1p8q2p4&st=iuqjw0pl&raw=1',
      'https://www.dropbox.com/scl/fi/cd8e0ywgv7gvri8rmimd6/_9.jpg?rlkey=0zj3vzry1u0gbkkfe9sta93v4&st=td5cs0kx&raw=1',
      'https://www.dropbox.com/scl/fi/ctkxfifqs0oyl87fsmdyr/_8.jpg?rlkey=m5ide8t1h6pqextkc96c003z6&st=17ms9xov&raw=1',
      'https://www.dropbox.com/scl/fi/mrvdlc8xjwpbuo9i9jhla/_2.jpg?rlkey=7ea4pnb26ch87wgywpt8wlps7&st=gterdx59&raw=1',
      'https://www.dropbox.com/scl/fi/m88srrzx2oldjrzpdypb5/_3.jpg?rlkey=6c1d7qivehitq5alupvuq9rpt&st=553imw3y&raw=1',
      'https://www.dropbox.com/scl/fi/o66q11fji3ylddyug7qgm/_6.jpg?rlkey=fmq6sx96l36akdf225ok9ciwf&st=n3j5l5r0&raw=1',
      'https://www.dropbox.com/scl/fi/mxoultyank8e3gkd5uyvf/_5.jpg?rlkey=abg9craq4j52u3qrmo9br3ttw&st=ah8yeaaf&raw=1',
    ],
  },
  {
    slug: 'ermine-storks',
    title: { en: 'ERMINE&STORKS', ru: 'ERMINE&STORKS' },
    place: { en: 'Undisclosed', ru: 'Скрытая локация' },
    year: '2026',
    summary: {
      en: 'A multi-scene mural combining a portrait with an ermine, red-crowned cranes, and minimalist landscape graphics.',
      ru: 'Многочастная роспись, где объединены портрет с горностаем, красноголовые журавли и минималистичная графика пейзажа.',
    },
    description: {
      en: 'ERMINE&STORKS is built as a sequence across the architecture: a large portrait with an ermine on the stair wall, a dynamic crane composition, and monochrome bamboo-landscape accents with red marks. Realistic modeling is paired with graphic brush language so each fragment reads independently but remains part of one visual story. Deep background tones and controlled highlights keep the result dramatic, clean, and contemporary.',
      ru: 'ERMINE&STORKS построен как последовательность сцен в архитектуре: крупный портрет с горностаем на лестничной стене, динамичная композиция с журавлями и монохромные бамбуково-пейзажные акценты с красными метками. Реалистичная моделировка сочетается с графичной кистью, поэтому каждый фрагмент читается отдельно, но остается частью единого сюжета. Глубокие фоновые тона и сдержанные световые акценты дают выразительный, чистый и современный результат.',
    },
    image: 'https://www.dropbox.com/scl/fi/1vgt61czboi56slp6x8kv/_MAIN.jpg?rlkey=167mivrfdisrxuvs1wb1fchy8&st=qu9mqk2x&raw=1',
    detailImages: [
      'https://www.dropbox.com/scl/fi/2gidshqtdyx7yf2wvez98/_8.jpg?rlkey=qh0g7zjyzavul1dvnx19ihixj&st=1rb3850c&raw=1',
      'https://www.dropbox.com/scl/fi/xov9pk37tuwco41wm874d/2.JPG?rlkey=92xu0ffwmg8to43v1unjl7ny2&st=9rlatulh&raw=1',
      'https://www.dropbox.com/scl/fi/o2i2iou6arh3fuxtqz7gi/6.JPG?rlkey=1bzijx0utewuhapqnon1ssgtr&st=ydumleld&raw=1',
      'https://www.dropbox.com/scl/fi/a8ni7jvyn3516zei7m7pp/5.JPG?rlkey=ccc3tv40iom0ucbizolsv7ynr&st=4imz3xng&raw=1',
    ],
  },
]

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
)
