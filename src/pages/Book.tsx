import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Calendar, Clock, User, Phone, Scissors, CheckCircle } from 'lucide-react';

export default function Book() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  const handleWhatsApp = () => {
    const message = `Hello, I would like to book an appointment at Laskarina.`;
    window.open(`https://wa.me/212612465064?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-zinc-950 py-20 px-6 flex items-center justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <span className="text-gold-400 text-sm uppercase tracking-[0.3em] mb-4 block">Reservations</span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Book Your Visit</h1>
          <p className="text-zinc-400 mb-10 leading-relaxed">
            Choose the most convenient way to schedule your appointment. 
            Fill out the form for a specific request, or chat with us directly on WhatsApp for immediate assistance.
          </p>

          <div className="space-y-6">
            <button 
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-medium transition-colors duration-300 shadow-lg shadow-green-900/20"
            >
              <MessageCircle size={24} />
              Book via WhatsApp
            </button>
            
            <div className="flex items-center gap-4 text-zinc-500 text-sm justify-center">
              <div className="h-px bg-white/10 flex-grow"></div>
              <span>OR</span>
              <div className="h-px bg-white/10 flex-grow"></div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-zinc-900 p-8 rounded-2xl border border-white/5 shadow-2xl"
        >
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Request Sent!</h3>
              <p className="text-zinc-400">We will confirm your appointment shortly via phone.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-gold-400 hover:text-gold-300 text-sm underline"
              >
                Book another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2">Personal Details</label>
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 text-zinc-600" size={18} />
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      required
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 text-zinc-600" size={18} />
                    <input 
                      type="tel" 
                      placeholder="Phone Number"
                      required
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2">Appointment Details</label>
                <div className="space-y-4">
                  <div className="relative">
                    <Scissors className="absolute left-4 top-3.5 text-zinc-600" size={18} />
                    <select 
                      required
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                      value={formData.service}
                      onChange={e => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="" disabled>Select Service</option>
                      <option value="cut">Hair Cut & Styling</option>
                      <option value="color">Coloring (Balayage/Ombre)</option>
                      <option value="treatment">Treatment (Smoothing/Care)</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <Calendar className="absolute left-4 top-3.5 text-zinc-600" size={18} />
                      <input 
                        type="date" 
                        required
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors [color-scheme:dark]"
                        value={formData.date}
                        onChange={e => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div className="relative">
                      <Clock className="absolute left-4 top-3.5 text-zinc-600" size={18} />
                      <select 
                        required
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                        value={formData.time}
                        onChange={e => setFormData({...formData, time: e.target.value})}
                      >
                        <option value="" disabled>Time</option>
                        <option value="morning">Morning (10-12)</option>
                        <option value="afternoon">Afternoon (12-5)</option>
                        <option value="evening">Evening (5-9)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 rounded-xl transition-colors duration-300"
              >
                Confirm Booking
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
