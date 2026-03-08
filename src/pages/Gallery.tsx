import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';

export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2626&auto=format&fit=crop", alt: "Blonde Balayage" },
    { src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2576&auto=format&fit=crop", alt: "Styling" },
    { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2574&auto=format&fit=crop", alt: "Hair Cut" },
    { src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2572&auto=format&fit=crop", alt: "Salon Interior" },
    { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2669&auto=format&fit=crop", alt: "Color Treatment" },
    { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop", alt: "Salon Atmosphere" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-20 px-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-gold-600 dark:text-gold-400 text-sm uppercase tracking-[0.3em] mb-4 block font-semibold">Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-serif text-zinc-900 dark:text-white mb-6">Our Work</h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              A glimpse into the transformations and artistry created by our talented team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-900 shadow-md"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-serif text-lg">{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
