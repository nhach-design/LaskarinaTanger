import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Star } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
        {/* Hero */}
        <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2636&auto=format&fit=crop" 
            alt="About Us" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/50 to-zinc-50 dark:from-zinc-950/50 dark:to-zinc-950" />
          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-6xl font-serif text-zinc-900 dark:text-white mb-4">About Laskarina</h1>
            <p className="text-gold-600 dark:text-gold-300 text-lg tracking-wide font-medium">Beauty & Elegance in Tangier</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif text-zinc-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Located in the heart of Tangier at 27 Av. Moulay Hicham, Laskarina is more than just a beauty salon—it's a sanctuary for style and self-care. 
                With a reputation built on excellence, we pride ourselves on delivering personalized hair services that enhance your natural beauty.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                Our team, led by experienced stylists like Ayoub and Hicham, is dedicated to staying ahead of trends while mastering timeless techniques. 
                Whether you're looking for a transformative balayage, a precision cut, or a revitalizing treatment, we ensure every visit leaves you feeling confident and radiant.
              </p>
              
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-white/5 w-fit shadow-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 border-2 border-white dark:border-zinc-950 flex items-center justify-center text-xs text-zinc-600 dark:text-white font-medium">
                      {i === 3 ? '100+' : ''}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-gold-500">
                    <span className="font-bold text-zinc-900 dark:text-white">4.1</span>
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                  <p className="text-xs text-zinc-500">Based on 108 Google Reviews</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.567890123456!2d-5.800000!3d35.770000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875612345678%3A0x123456789abcdef!2s27%20Av.%20Moulay%20Hicham%2C%20Tanger%2090060!5e0!3m2!1sen!2sma!4v1234567890123!5m2!1sen!2sma" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="dark:invert-0 invert"
                ></iframe>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-white/10 shadow-xl max-w-xs">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="text-gold-600 dark:text-gold-500 shrink-0 mt-1" size={20} />
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">27 Av. Moulay Hicham, Tanger 90060</p>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="text-gold-600 dark:text-gold-500 shrink-0" size={20} />
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">06 12 46 50 64</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-gold-600 dark:text-gold-500 shrink-0" size={20} />
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">Open daily until 9:00 PM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
