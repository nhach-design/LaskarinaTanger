import { motion } from 'motion/react';
import { ArrowRight, Star, Scissors, Sparkles, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop" 
            alt="Salon Interior" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/20 to-zinc-950" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold-400 text-sm uppercase tracking-[0.3em] mb-4"
          >
            Welcome to Laskarina
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-medium text-white mb-6 leading-tight"
          >
            Redefine Your <br />
            <span className="italic text-gold-200">Signature Style</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-zinc-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light"
          >
            Tangier's premier destination for luxury hair care, expert coloring, and personalized styling.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/book" 
              className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              Book Appointment <ArrowRight size={18} />
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white font-medium rounded-full transition-all duration-300"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Scissors className="w-8 h-8 text-gold-400" />,
              title: "Expert Styling",
              desc: "From butterfly cuts to precision trimming, our stylists master every technique."
            },
            {
              icon: <Sparkles className="w-8 h-8 text-gold-400" />,
              title: "Premium Color",
              desc: "Specializing in balayage, ombre, and vibrant color transformations."
            },
            {
              icon: <Clock className="w-8 h-8 text-gold-400" />,
              title: "Relaxing Experience",
              desc: "A serene atmosphere designed for your comfort and rejuvenation."
            }
          ].map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-zinc-950 border border-white/5 hover:border-gold-500/30 transition-colors duration-300">
              <div className="mb-6 p-3 bg-zinc-900 w-fit rounded-xl border border-white/5">{feature.icon}</div>
              <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Snippet */}
      <section className="py-24 px-6 relative overflow-hidden bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-sm uppercase tracking-[0.3em] mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Loved by our Clients</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "My go-to address for hair dying. Their coloration and highlights are simply exceptional. Keep up the great work!",
                author: "Douae Ahmadoun",
                role: "Local Guide"
              },
              {
                text: "I was here to do my hair in ombre blond with waves it turned out really amazing. Ayoub did my hair he is very good.",
                author: "Ka",
                role: "Client"
              },
              {
                text: "I got a butterfly cut and my hair has never been this voluminous. The staff speak multiple languages which really helped.",
                author: "Ray Salhi",
                role: "Client"
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-zinc-950 p-8 rounded-2xl border border-white/5 relative"
              >
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((_, starI) => (
                    <Star key={starI} className="w-4 h-4 text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 leading-relaxed italic">"{review.text}"</p>
                <div>
                  <p className="text-gold-300 font-serif text-lg">{review.author}</p>
                  <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2574&auto=format&fit=crop" 
            alt="Salon Service" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          
          <div className="relative z-10 px-8 py-20 md:py-32 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ready for a Transformation?</h2>
            <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">
              Book your appointment today and let our expert team take care of you.
            </p>
            <Link 
              to="/book" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-medium rounded-full transition-all duration-300"
            >
              Book Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
