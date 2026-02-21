import { motion } from 'motion/react';

const CHEF_IMG = 'https://cruvineriaecucina.it/wp-content/uploads/2025/10/c64b9266-60cc-4cd9-afd9-b8c7546e9ac4-Modificata.png.png';
const CHEFS_BW = 'https://cruvineriaecucina.it/wp-content/uploads/2022/03/duane-mendes-JrRoJlGyZwk-unsplash-scaled.jpg';

export default function Chef() {
  return (
    <div className="bg-brand-dark text-white min-h-screen pt-32">
      <section className="px-6 md:px-20 pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-7xl font-serif mb-8 leading-tight">
              CHEF MICHELE <br />
              <span className="italic text-brand-burgundy">IMPAGNATIELLO</span>
            </h1>
            <div className="space-y-6 text-base md:text-lg text-white/80 font-light leading-relaxed">
              <p>
                Nato e cresciuto a Foggia, Michele Impagnatiello coltiva fin da bambino la passione per la cucina. Si iscrive all’Istituto Alberghiero “L. Einaudi”, dove inizia a formarsi, affiancando lo studio alle prime esperienze stagionali nelle cucine locali. Consegue il diploma con il massimo dei voti e avvia il suo percorso professionale nelle osterie della sua città, dove apprende i fondamenti della cucina tradizionale.
              </p>
              <p>
                Il desiderio di esplorare nuove prospettive lo spinge presto a confrontarsi con il mondo della ristorazione gourmet. Si trasferisce a Milano e approda da Al Fresco, sotto la guida dello chef Marco Pirotta, uno dei pionieri della tecnica CBT (cottura a bassa temperatura) in Italia. Lì approfondisce tecnica, precisione e rigore.
              </p>
              <p>
                Il sogno di lavorare in un ristorante stellato si realizza a Bologna, dove entra a far parte della brigata de I Portici, all’epoca guidato dallo chef Agostino Iacobucci. L’esperienza si rivela fondamentale per la sua crescita professionale.
              </p>
              <p>
                Durante il suo percorso incontra Alfonso Cicerale, chef originario di Lucera e attivo in Veneto. Impagnatiello sceglie di seguirlo come sous-chef, prima a Jesolo e poi all’Hotel Carlton di Venezia. Alfonso diventa il suo mentore, non solo in cucina, ma anche nella vita, contribuendo in modo decisivo alla sua maturazione personale e professionale.
              </p>
              <p>
                A 29 anni decide di tornare in Puglia, a Monopoli, dove guida il ristorante Bell. Qui ha finalmente l’occasione di esprimere nei piatti tutto ciò che ha appreso durante le esperienze fuori regione, con uno stile che fonde tradizione, tecnica e creatività.
              </p>
              <p>
                Spinto dal titolare del Bell, Impagnatiello fa ritorno nella sua amata Foggia con un obiettivo preciso: aprire un ristorante tutto suo e dimostrare il valore della sua terra, spesso sottovalutata. Nasce così “Cru – Vineria & Cucina”, il suo progetto più personale, che definisce il suo “figliol prodigo”. Cru si afferma come un luogo di culto gastronomico dove si intrecciano cucina tradizionale e creativa, aperitivi alternativi e una profonda passione per il vino.
              </p>
              <p>
                Il progetto ottiene rapidamente importanti riconoscimenti: entra nelle guide del Gambero Rosso e successivamente in Ambasciatori del Gusto, un’associazione che gli permette di confrontarsi con grandi colleghi e di diventare portavoce di una terra che, seppur spesso denigrata, lui continua ad amare profondamente.
              </p>
              <p className="text-xl md:text-2xl font-serif pt-4">
                Mettiti comodo, e goditi il viaggio.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="order-1 md:order-2 w-full max-w-md md:max-w-none mx-auto"
          >
            <img src={CHEF_IMG} alt="Chef Michele Impagnatiello" className="w-full h-auto rounded-sm shadow-2xl" />
          </motion.div>
        </div>
      </section>

      <section className="w-full">
        <img src={CHEFS_BW} alt="Chefs at work" className="w-full h-auto grayscale opacity-50" />
      </section>
    </div>
  );
}
