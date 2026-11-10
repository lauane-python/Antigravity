import React from 'react';
import { Star, CheckCircle, Sparkles, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const LookbookCommunity: React.FC = () => {
  const communityPosts = [
    {
      handle: '@larissa.active',
      location: 'São Paulo • Studio Velocity',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      tag: 'Legging Onyx Sculpt'
    },
    {
      handle: '@juliamorais.fit',
      location: 'Rio de Janeiro • Ipanema Run',
      image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=800&q=80',
      tag: 'Jaqueta Aerodynamic Black'
    },
    {
      handle: '@camila.pilates',
      location: 'Curitiba • Reformer Club',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      tag: 'Conjunto Ghost Gray'
    },
    {
      handle: '@fernanda_cross',
      location: 'Belo Horizonte • Iron Box',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
      tag: 'Top Racerback Carbon'
    }
  ];

  return (
    <section className="py-20 lg:py-28 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>AVALIAÇÕES REAIS DE ATLETAS</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white">
              QUEM USA NÃO TROCA
            </h2>
            <p className="text-zinc-400 text-sm">
              Mais de 14.800 mulheres em todo o Brasil treinam com a precisão e elegância da NOIR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-4 hover:border-white/20 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-white">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-white" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-zinc-600" />
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-white/20 filter grayscale"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-white font-['Syne']">{t.name}</h4>
                      {t.verified && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <p className="text-[11px] text-zinc-400">{t.role}</p>
                    <p className="text-[10px] text-zinc-500 font-mono">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Community Grid */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
                <svg className="w-3.5 h-3.5 fill-none stroke-current text-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>COMUNIDADE // #NOIRATHLETICA</span>
              </div>
              <h3 className="font-['Syne'] text-2xl sm:text-3xl font-extrabold text-white mt-1">
                TREINE COM ESTILO NO INSTAGRAM
              </h3>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-1.5 underline"
            >
              <span>Siga @noir.athletica no Instagram</span>
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {communityPosts.map((post, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-900 border border-white/10"
              >
                <img
                  src={post.image}
                  alt={post.handle}
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-4">
                  <div className="flex items-center gap-2 text-white text-xs font-bold font-mono">
                    <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span>{post.handle}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{post.location}</p>
                  <span className="mt-2 text-[10px] font-mono uppercase text-zinc-300 bg-white/10 px-2 py-0.5 rounded w-max border border-white/20">
                    {post.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
