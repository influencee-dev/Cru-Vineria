import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export default function Contatti() {
  const whatsappLink = "https://wa.me/393911010450?text=Buongiorno,%20vorrei%20prenotare%20un%20tavolo%20da%20Cru.";

  return (
    <div className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-20"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-serif mb-12">Contatti</h1>
            <div className="space-y-10">
              <div className="flex gap-6">
                <MapPin className="w-6 h-6 text-brand-burgundy shrink-0" />
                <div>
                  <h4 className="font-serif text-xl mb-2">Indirizzo</h4>
                  <p className="text-white/60">Strada San Lorenzo,<br />71122 Foggia FG</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Phone className="w-6 h-6 text-brand-burgundy shrink-0" />
                <div>
                  <h4 className="font-serif text-xl mb-2">Telefono</h4>
                  <a href="tel:+393911010450" className="text-white/60 hover:text-brand-burgundy transition-colors">391 101 0450</a>
                </div>
              </div>
              <div className="flex gap-6">
                <Mail className="w-6 h-6 text-brand-burgundy shrink-0" />
                <div>
                  <h4 className="font-serif text-xl mb-2">Email</h4>
                  <p className="text-white/60">info@cruvineriaecucina.it</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Instagram className="w-6 h-6 text-brand-burgundy shrink-0" />
                <div>
                  <h4 className="font-serif text-xl mb-2">Instagram</h4>
                  <a href="https://www.instagram.com/cru_vineriacucina/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-brand-burgundy transition-colors">@cru_vineriacucina</a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-white/5 p-8 md:p-12 rounded-sm border border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <Clock className="w-6 h-6 text-brand-burgundy" />
                <h3 className="text-3xl font-serif">Orari</h3>
              </div>
              <div className="space-y-4 text-sm tracking-widest uppercase text-white/60">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Lunedì</span>
                  <span className="text-brand-burgundy">Chiuso</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Martedì</span>
                  <span>18:30 – 23:30</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Mercoledì</span>
                  <span>18:30 – 23:30</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Giovedì</span>
                  <span>18:30 – 23:30</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Venerdì</span>
                  <span>18:30 – 23:30</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Sabato</span>
                  <span>18:30 – 23:30</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Domenica</span>
                  <span>12:30 – 15:00</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block w-full py-6 bg-brand-burgundy text-white font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all shadow-xl"
              >
                Prenota un tavolo su WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
