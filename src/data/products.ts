import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'noir-01',
    name: 'Legging Sculpt Ribbed Onyx',
    slug: 'legging-sculpt-ribbed-onyx',
    category: 'leggings',
    categoryLabel: 'Leggings',
    price: 249.90,
    originalPrice: 299.90,
    rating: 4.9,
    reviewsCount: 342,
    badge: 'BESTSELLER',
    isBestseller: true,
    colors: [
      { name: 'Preto Ônix', hex: '#09090b' },
      { name: 'Cinza Grafite', hex: '#27272a' },
      { name: 'Branco Giz', hex: '#f4f4f5' }
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    images: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'A Legging Sculpt Onyx foi desenvolvida com malha canelada de alta densidade 340 GSM que comprime sem marcar. Cós super alto anatômico que não enrola durante agachamentos e treinos de alta intensidade.',
    fabricTech: [
      'Zero Transparência comprovada em teste squat',
      'Cós duplo com sustentação lombar',
      'Secagem ultrarrápida com tecnologia Dry-Breathe',
      'Toque aveludado com 22% de elastano nobre'
    ],
    stockWarning: 'Apenas 4 peças restantes no tamanho M'
  },
  {
    id: 'noir-02',
    name: 'Top Racerback Carbon Flex',
    slug: 'top-racerback-carbon-flex',
    category: 'tops',
    categoryLabel: 'Tops & Sutiãs',
    price: 159.90,
    originalPrice: 189.90,
    rating: 4.8,
    reviewsCount: 189,
    badge: 'LANÇAMENTO',
    isNew: true,
    colors: [
      { name: 'Preto Carbono', hex: '#121214' },
      { name: 'Cinza Asfalto', hex: '#3f3f46' },
      { name: 'Branco Neve', hex: '#ffffff' }
    ],
    sizes: ['PP', 'P', 'M', 'G'],
    images: [
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Design minimalista de alta sustentação. Decote frontal limpo com costas nadador contemporâneas. Bojo removível de memória e faixa elástica reforçada na base.',
    fabricTech: [
      'Sustentação de médio a alto impacto',
      'Bojo inteligente anti-deformação removível',
      'Alças ergonômicas que distribuem o peso',
      'Tratamento antibacteriano permanente anti-odor'
    ]
  },
  {
    id: 'noir-03',
    name: 'Conjunto Seamless Ghost Gray',
    slug: 'conjunto-seamless-ghost-gray',
    category: 'conjuntos',
    categoryLabel: 'Conjuntos',
    price: 369.90,
    originalPrice: 429.90,
    rating: 5.0,
    reviewsCount: 521,
    badge: 'DROP LIMITADO',
    isBestseller: true,
    colors: [
      { name: 'Cinza Fantasma', hex: '#71717a' },
      { name: 'Preto Eclipse', hex: '#000000' },
      { name: 'Cinza Platina', hex: '#d4d4d8' }
    ],
    sizes: ['PP', 'P', 'M', 'G'],
    images: [
      'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Conjunto icônico com tecnologia sem costura (Seamless 3D). Modela as curvas naturais do corpo sem compressão restritiva. Inclui Top Strappy e Legging com efeito "peach lift".',
    fabricTech: [
      'Construção circular sem costuras laterais',
      'Zonas de ventilação térmica mapeadas no corpo',
      'Efeito modelador no quadril e cintura',
      'Proteção UV 50+ para treinos ao ar livre'
    ],
    stockWarning: 'Últimas 2 unidades do Drop 01'
  },
  {
    id: 'noir-04',
    name: 'Jaqueta Corta-Vento Aerodynamic Black',
    slug: 'jaqueta-corta-vento-aerodynamic',
    category: 'casacos',
    categoryLabel: 'Casacos & Jaquetas',
    price: 389.90,
    originalPrice: 459.90,
    rating: 4.9,
    reviewsCount: 114,
    badge: 'EXCLUSIVO',
    isNew: true,
    colors: [
      { name: 'Preto Fosco', hex: '#0f0f10' },
      { name: 'Branco Óptico', hex: '#ffffff' }
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    images: [
      'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Corta-vento ultraleve com silhueta cropped moderna e cordões elásticos ajustáveis na barra. Tecido impermeável e corta-vento com detalhes refletivos para treinos noturnos.',
    fabricTech: [
      'Membrana ripstop ultraleve resistente à água',
      'Zíper impermeável bidirecional YKK',
      'Capuz ergonômico com regulador embutido',
      'Bolsos laterais com trava para smartphone'
    ]
  },
  {
    id: 'noir-05',
    name: 'Shorts Biker Contour Dark Slate',
    slug: 'shorts-biker-contour-dark-slate',
    category: 'shorts',
    categoryLabel: 'Shorts & Bikers',
    price: 179.90,
    originalPrice: 219.90,
    rating: 4.9,
    reviewsCount: 278,
    badge: 'TENDÊNCIA',
    colors: [
      { name: 'Cinza Chumbo', hex: '#18181b' },
      { name: 'Preto Puro', hex: '#050505' },
      { name: 'Cinza Mescla', hex: '#52525b' }
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    images: [
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Comprimento ideal de 7 polegadas que não sobe durante a corrida ou agachamentos. Costuras planas flatlock antissocamento e bolso lateral profundo para celular.',
    fabricTech: [
      'Acabamento siliconado na barra para zero deslizamento',
      'Bolso lateral profundo para iPhone Pro Max',
      'Compressão muscular que reduz fadiga',
      'Toque macio "butter-soft"'
    ]
  },
  {
    id: 'noir-06',
    name: 'Macacão Unitard Studio Pure White',
    slug: 'macacao-unitard-studio-white',
    category: 'conjuntos',
    categoryLabel: 'Conjuntos & Macacões',
    price: 329.90,
    originalPrice: 389.90,
    rating: 4.8,
    reviewsCount: 95,
    badge: 'EDITORIAL',
    isNew: true,
    colors: [
      { name: 'Branco Puro', hex: '#ffffff' },
      { name: 'Preto Total', hex: '#09090b' }
    ],
    sizes: ['PP', 'P', 'M', 'G'],
    images: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Peça única contemporânea para Yoga, Pilates e estilo Athleisure. Decote quadrado clean e detalhe nas costas abertas. Forro duplo frontal com zero transparência.',
    fabricTech: [
      'Forro duplo opaco 100% blindado',
      'Alças largas que não machucam o ombro',
      'Modelagem escultura que alonga a silhueta',
      'Tecido antibolinha com resistência a mais de 200 lavagens'
    ]
  },
  {
    id: 'noir-07',
    name: 'Oversized Hoodie Off-Duty Ash',
    slug: 'oversized-hoodie-off-duty-ash',
    category: 'casacos',
    categoryLabel: 'Casacos & Jaquetas',
    price: 349.90,
    originalPrice: 399.90,
    rating: 4.9,
    reviewsCount: 162,
    badge: 'STREETWEAR',
    colors: [
      { name: 'Cinza Cinzel', hex: '#3f3f46' },
      { name: 'Preto Ônix', hex: '#121214' },
      { name: 'Off-White', hex: '#e4e4e7' }
    ],
    sizes: ['P', 'M', 'G'],
    images: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Moletom pesado de corte streetwear contemporâneo com 420 GSM de algodão penteado sustentável. Interior flanelado premium, capuz duplo estruturado e bordado sutil tonal NOIR.',
    fabricTech: [
      '100% Algodão Pesado 420 GSM',
      'Tratamento pré-encolhido que não deforma',
      'Capuz duplo estruturado sem cordão solto',
      'Bolso canguru embutido com acabamento reforçado'
    ]
  },
  {
    id: 'noir-08',
    name: 'Top Assimétrico Monolith Strappy',
    slug: 'top-assimetrico-monolith',
    category: 'tops',
    categoryLabel: 'Tops & Sutiãs',
    price: 169.90,
    originalPrice: 199.90,
    rating: 4.7,
    reviewsCount: 88,
    badge: 'DESIGN EXCLUSIVO',
    colors: [
      { name: 'Preto Profundo', hex: '#0a0a0c' },
      { name: 'Cinza Prata', hex: '#a1a1aa' }
    ],
    sizes: ['PP', 'P', 'M', 'G'],
    images: [
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Design de um ombro só com tiras duplas de alta tensão nas costas. Criado para quem deseja uma presença marcante tanto nos treinos quanto em produções casuais noturnas.',
    fabricTech: [
      'Estrutura com costuras embutidas',
      'Sustentação assimétrica calibrada',
      'Compressão suave e toque gelado',
      'Bojo removível de formato anatômico'
    ]
  },
  {
    id: 'noir-09',
    name: 'Mala Duffle Tactical Studio 35L',
    slug: 'mala-duffle-tactical-studio',
    category: 'acessorios',
    categoryLabel: 'Acessórios',
    price: 289.90,
    originalPrice: 349.90,
    rating: 4.9,
    reviewsCount: 204,
    badge: 'ESSENCIAL',
    colors: [
      { name: 'Preto Tático', hex: '#09090b' },
      { name: 'Cinza Grafite', hex: '#27272a' }
    ],
    sizes: ['M'],
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Mala esportiva minimalista impermeável com compartimento isolado e ventilado para calçados, bolso impermeável para roupas úmidas e suporte integrado para tapete de yoga.',
    fabricTech: [
      'Nylon balístico 900D resistente à abrasão e água',
      'Compartimento ventilado para tênis',
      'Bolsa impermeável interna para roupas de banho',
      'Fivelas em metal fosco ultra resistentes'
    ]
  },
  {
    id: 'noir-10',
    name: 'Garrafa Térmica Matte Black 750ml',
    slug: 'garrafa-termica-matte-black',
    category: 'acessorios',
    categoryLabel: 'Acessórios',
    price: 139.90,
    originalPrice: 169.90,
    rating: 5.0,
    reviewsCount: 412,
    badge: 'BESTSELLER',
    colors: [
      { name: 'Preto Matte', hex: '#18181b' },
      { name: 'Branco Giz', hex: '#ffffff' }
    ],
    sizes: ['M'],
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Aço inoxidável 18/8 com parede dupla e isolamento a vácuo. Mantém a água gelada por até 24 horas e quente por 12 horas sem suar por fora. Tampa com bico esportivo vedado.',
    fabricTech: [
      'Isolamento térmico Temp-Shield 24h gelado',
      '100% Livre de BPA e toxinas',
      'Pintura eletrostática fosca texturizada antiderrapante',
      'Bocal largo fácil de higienizar e adicionar gelo'
    ]
  },
  {
    id: 'noir-11',
    name: 'Kit Grip Socks + Faixa Cabelo Pro',
    slug: 'kit-grip-socks-faixa-cabelo',
    category: 'acessorios',
    categoryLabel: 'Acessórios',
    price: 99.90,
    originalPrice: 129.90,
    rating: 4.8,
    reviewsCount: 175,
    colors: [
      { name: 'Preto Clássico', hex: '#09090b' },
      { name: 'Cinza & Branco', hex: '#d4d4d8' }
    ],
    sizes: ['P', 'M'],
    images: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Pack premium para Pilates e Barre. Meia cano médio com pontos em silicone antiderrapante de alta aderência e faixa de cabelo com silicone interno que não escorrega.',
    fabricTech: [
      'Silicone ergonômico no solado para aderência máxima',
      'Algodão orgânico com elastano respirável',
      'Arco do pé com compressão elástica',
      'Faixa de absorção de suor de secagem rápida'
    ]
  },
  {
    id: 'noir-12',
    name: 'Legging Flare Studio Cinza Chumbo',
    slug: 'legging-flare-studio-chumbo',
    category: 'leggings',
    categoryLabel: 'Leggings',
    price: 279.90,
    originalPrice: 329.90,
    rating: 4.9,
    reviewsCount: 198,
    badge: 'TENDÊNCIA',
    isNew: true,
    colors: [
      { name: 'Cinza Chumbo', hex: '#27272a' },
      { name: 'Preto Ônix', hex: '#09090b' }
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    images: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'A flare contemporânea que transita com perfeição do treino de mobilidade ao brunch. Barra sutilmente aberta que alonga as pernas e cós em V que valoriza a cintura.',
    fabricTech: [
      'Cós em V modelador com efeito cintura fina',
      'Barra flare com caimento fluido',
      'Zero transparência em tecido encorpado',
      'Tecnologia 4-Way Stretch que não marca joelho'
    ]
  }
];

export const LOOKBOOK_SPOTS = [
  {
    id: 'spot-top',
    x: 48,
    y: 35,
    productId: 'noir-02',
    title: 'Top Racerback Carbon Flex',
    price: 159.90
  },
  {
    id: 'spot-legging',
    x: 52,
    y: 68,
    productId: 'noir-01',
    title: 'Legging Sculpt Ribbed Onyx',
    price: 249.90
  }
];

export const TESTIMONIALS = [
  {
    name: 'Dra. Beatriz Monteiro',
    role: 'Atleta Híbrida & Médica Esportiva',
    rating: 5,
    comment: 'A qualidade dos tecidos da NOIR superou todas as marcas gringas que já testei. A compressão da Legging Sculpt é surreal, não desce durante 15km de corrida e tem zero transparência no agachamento pesado.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    verified: true,
    location: 'São Paulo, SP'
  },
  {
    name: 'Mariana Duarte',
    role: 'Instrutora de Reformer Pilates',
    rating: 5,
    comment: 'O Conjunto Ghost Gray virou meu uniforme oficial de dar aulas e treinar. As peças não têm costuras que incomodam e o caimento monocromático transmite uma elegância absurda dentro do studio.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    verified: true,
    location: 'Rio de Janeiro, RJ'
  },
  {
    name: 'Carolina Siqueira',
    role: 'Triatleta Amadora',
    rating: 5,
    comment: 'O corta-vento é inacreditavelmente leve e corta o vento real da madrugada. Já comprei 4 peças no primeiro mês. Entrega expressa impecável com embalagem ecológica de luxo.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    verified: true,
    location: 'Curitiba, PR'
  }
];
