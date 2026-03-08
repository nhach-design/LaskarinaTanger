import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';

export default function Services() {
  const categories = [
    {
      title: "Coloring & Highlights",
      items: [
        { name: "Balayage", price: "From 800 MAD", desc: "Hand-painted highlights for a natural, sun-kissed look." },
        { name: "Ombre", price: "From 700 MAD", desc: "Seamless gradient color transition from dark to light." },
        { name: "Full Color", price: "From 400 MAD", desc: "Complete root-to-tip color transformation." },
        { name: "Root Touch-up", price: "From 250 MAD", desc: "Maintenance for your color regrowth." },
      ]
    },
    {
      title: "Styling & Cuts",
      items: [
        { name: "Butterfly Cut", price: "250 MAD", desc: "Voluminous, layered cut for movement and body." },
        { name: "Precision Cut", price: "200 MAD", desc: "Expert cutting tailored to your face shape." },
        { name: "Blow Dry & Style", price: "From 100 MAD", desc: "Professional styling for any occasion." },
        { name: "Waves & Curls", price: "From 150 MAD", desc: "Glamorous waves or defined curls." },
      ]
    },
    {
      title: "Treatments",
      items: [
        { name: "Smoothing Treatment", price: "From 1200 MAD", desc: "Keratin or protein treatments for silky smooth hair." },
        { name: "Deep Conditioning", price: "200 MAD", desc: "Intensive moisture mask for damaged hair." },
        { name: "Scalp Treatment", price: "150 MAD", desc: "Revitalizing care for a healthy scalp." },
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-20 px-6 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-gold-600 dark:text-gold-400 text-sm uppercase tracking-[0.3em] mb-4 block font-semibold">Our Menu</span>
            <h1 className="text-4xl md:text-5xl font-serif text-zinc-900 dark:text-white mb-6">Services & Pricing</h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              We use only premium products to ensure the health and beauty of your hair. 
              Prices may vary based on hair length and density.
            </p>
          </motion.div>

          <div className="space-y-16">
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-white/5 shadow-sm dark:shadow-none"
              >
                <h2 className="text-2xl font-serif text-gold-600 dark:text-gold-200 mb-8 border-b border-zinc-100 dark:border-white/10 pb-4">
                  {category.title}
                </h2>
                <div className="grid gap-8">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group">
                      <div className="flex-grow">
                        <div className="flex items-baseline justify-between mb-1">
                          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">
                            {item.name}
                          </h3>
                          <span className="sm:hidden text-gold-600 dark:text-gold-400 font-mono text-sm">{item.price}</span>
                        </div>
                        <p className="text-zinc-500 dark:text-zinc-500 text-sm">{item.desc}</p>
                      </div>
                      <div className="hidden sm:block flex-shrink-0 w-32 text-right">
                        <span className="text-gold-600 dark:text-gold-400 font-mono text-sm">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
