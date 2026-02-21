import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const HERO_IMG = 'https://cruvineriaecucina.it/wp-content/uploads/2022/03/duane-mendes-g5jWce3HUQ-unsplash-scaled.jpg';
const INTRO_IMG = 'https://cruvineriaecucina.it/wp-content/uploads/2022/04/Progetto-senza-titolo-2.png';

const MENU_PREVIEW = [
  { title: 'ANTIPASTI', items: ['Battuta di fassona, nocciole e tartufo', 'Uovo croccante, asparagi e fonduta di pecorino'] },
  { title: 'PRIMI', items: ['Tortelli di zucca, burro versato e salvia', 'Risotto ai frutti di mare e scorza di limone'] },
  { title: 'SECONDI', items: ['Filetto di manzo, riduzione al vino rosso', 'Pescato del giorno, verdure di stagione'] },
];

export default function Home() {
  const whatsappLink = "https://wa.me/393911010450?text=Buongiorno,%20vorrei%20prenotare%20un%20tavolo%20da%20Cru.";

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-brand-dark">
        <img 
          src={HERO_IMG} 
          alt="Hero" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-white text-6xl md:text-9xl font-serif mb-6">Cru</h1>
            <p className="text-white text-lg md:text-2xl font-light tracking-[0.3em] uppercase opacity-80">Vineria e Cucina</p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section (Burgundy) */}
      <section id="chi-siamo" className="bg-brand-burgundy text-white py-24 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
              Benvenuti da Cru, a Foggia.<br />
              Un ponte tra memoria e visione.<br />
              Siamo figli della terra e del gusto.
            </h2>
            <div className="space-y-6 text-lg max-w-2xl font-light">
              <p><strong>CRU</strong> nasce dal desiderio di Michele Impagnatiello di tornare alle radici, portando con sé l'esperienza dei grandi maestri italiani. È il suo "figliol prodigo", un luogo dove la tradizione foggiana incontra la tecnica più raffinata.</p>
              <p>Qui, ascoltiamo il passato per tradurlo in emozioni contemporanee. Siamo dove la passione per il vino incontra una cucina in continua evoluzione, definendo un'identità in fermento che celebra l'eccellenza del territorio.</p>
              <p>Un tavolo aperto a chi sa ascoltare, un viaggio tra chi siamo e chi vogliamo diventare.</p>
            </div>
            <div className="mt-12">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-brand-burgundy transition-all"
              >
                Prenota un Tavolo
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-24 max-w-6xl mx-auto">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={INTRO_IMG} 
            alt="Cru Dish" 
            className="w-full h-auto shadow-2xl rounded-sm" 
          />
        </div>
      </section>

      {/* Kitchen Section (Row from Cucina) */}
      <section className="py-24 px-6 md:px-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h3 className="text-4xl md:text-6xl font-serif">La Cucina</h3>
            <div className="space-y-8">
              {MENU_PREVIEW.map((section, idx) => (
                <div key={idx}>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-3 text-brand-burgundy">{section.title}</h4>
                  <ul className="space-y-1">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-brand-dark/80 text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link to="/cucina" className="inline-block border border-brand-dark px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-brand-dark hover:text-white transition-all">
              Vedi il menù completo
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://cruvineriaecucina.it/wp-content/uploads/2022/05/5.png" alt="Dish 1" className="w-full h-auto shadow-lg" />
            <img src="https://cruvineriaecucina.it/wp-content/uploads/2022/05/3.png" alt="Dish 2" className="w-full h-auto shadow-lg mt-12" />
          </div>
        </div>
      </section>

      {/* Vineria Row */}
      <section className="py-24 px-6 md:px-20 bg-white border-y border-brand-dark/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 order-2 md:order-1">
            <img src="https://cruvineriaecucina.it/wp-content/uploads/2022/05/4.png" alt="Vineria" className="w-full h-auto shadow-2xl rounded-sm" />
          </div>
          <div className="flex-1 order-1 md:order-2 space-y-8">
            <h3 className="text-4xl md:text-6xl font-serif">La Vineria</h3>
            <p className="text-brand-dark/70 text-lg font-light leading-relaxed">
              Una selezione curata di oltre 300 etichette. Dai grandi classici alle piccole produzioni artigianali, ogni bottiglia racconta una storia di passione e territorio.
            </p>
            <Link to="/vineria" className="inline-block bg-brand-burgundy text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-brand-dark transition-all">
              Esplora la cantina
            </Link>
          </div>
        </div>
      </section>

      {/* Chef Row */}
      <section className="py-24 px-6 md:px-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl md:text-6xl font-serif">Lo Chef</h3>
            <p className="text-white/70 text-lg font-light leading-relaxed">
              Michele Impagnatiello porta a Foggia la sua visione della cucina pugliese, contaminata dalle esperienze in giro per l'Italia. Una ricerca continua della materia prima migliore.
            </p>
            <Link to="/chef" className="inline-block border border-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-brand-dark transition-all">
              Conosci Michele
            </Link>
          </div>
          <div className="relative">
            <img src="https://cruvineriaecucina.it/wp-content/uploads/2025/10/c64b9266-60cc-4cd9-afd9-b8c7546e9ac4-Modificata.png.png" alt="Chef" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>
    </div>
  );
}
