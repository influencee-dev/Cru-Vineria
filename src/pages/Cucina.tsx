import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const MENU_DATA = {
  carta: [
    { 
      title: 'ANTIPASTI', 
      items: [
        { name: 'Scampi crudi', price: '9€ cad.' },
        { name: 'Gambero di mazara 1a taglia', price: '10€' },
        { name: 'Ostrica concava francese n.3', price: '5€' },
        { name: 'Crudo di mare (secondo disponibilità)', price: '35€' },
        { name: 'Cheesecake di pane e pomodoro, tartare di tonno, stracciatella, gel di basilico', price: '14€' },
        { name: 'Polpo, crema di zucca, cardoncelli', price: '16€' },
        { name: 'Carciofo fritto, crema di carciofi, zabaione, cacio ricotta vaccina', price: '13€' },
        { name: 'Uovo 62°, funghi cardoncelli, crema di pecorino, tartufo nero', price: '14€' },
      ] 
    },
    { 
      title: 'PRIMI', 
      items: [
        { name: 'Cappelletti ripieni di patate, stracciatella e limone, in bisque di crostacei, gambero rosso, gel di basilico', price: '22€' },
        { name: 'Risotto selezione “riso buono” in crema di topinambur, gamberi rosa e liquirizia', price: '22€ min. 2' },
        { name: 'Ziti, genovese di manzo, pecorino', price: '17€' },
        { name: 'Tubetti, crema di ceci, marasciuoli, peperone crusco di senise', price: '14€' },
      ] 
    },
    { 
      title: 'SECONDI', 
      items: [
        { name: 'Cuore di baccalà in tempura, crema di favetta, marasciuoli e polvere di peperone crusco di senise', price: '20€' },
        { name: 'Trancio di pescato, crema di topinambur, erbe di campo, fondo di manzo', price: '20€' },
        { name: 'Cotoletta di tonno in crosta di taralli, maionese alla soia e zucchine macerate', price: '18€' },
        { name: 'Guancia brasata al vino, cremoso di zucca, funghi cardoncelli', price: '20€' },
      ] 
    },
  ],
  dessert: [
    { name: 'Tiramisù Cru', description: 'La nostra versione del classico intramontabile', price: '7€' },
    { name: 'Pera al Sangiovese', description: 'Pera cotta nel vino, crema inglese e crumble alle mandorle', price: '8€' },
    { name: 'Scomposizione di Millefoglie', description: 'Crema chantilly, frutti di bosco e sfoglia croccante', price: '8€' },
  ]
};

export default function Cucina() {
  return (
    <div className="bg-brand-cream min-h-screen pt-32 pb-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6">La Cucina</h1>
          <p className="text-brand-dark/60 tracking-widest uppercase text-sm">Materia Prima e Tecnica</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="space-y-16">
            <section>
              <h3 className="text-3xl font-serif mb-10 border-b border-brand-dark/10 pb-4">Menù alla carta</h3>
              <div className="space-y-12">
                {MENU_DATA.carta.map((section, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-brand-burgundy">{section.title}</h4>
                    <div className="space-y-6">
                      {section.items.map((item, i) => (
                        <div key={i} className="flex justify-between items-start gap-4 group">
                          <p className="text-brand-dark/80 text-sm leading-relaxed group-hover:text-brand-burgundy transition-colors">{item.name}</p>
                          <span className="font-serif text-sm whitespace-nowrap">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-serif mb-10 border-b border-brand-dark/10 pb-4">Dessert</h3>
              <div className="space-y-8">
                {MENU_DATA.dessert.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-4 group">
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-xs mb-1 group-hover:text-brand-burgundy transition-colors">{item.name}</h4>
                      <p className="text-brand-dark/60 text-[10px] italic">{item.description}</p>
                    </div>
                    <span className="font-serif text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="grid grid-cols-1 gap-8 sticky top-32">
            <img src="https://cruvineriaecucina.it/wp-content/uploads/2022/04/Progetto-senza-titolo-2.png" alt="Cru Dish" className="w-full h-auto shadow-xl rounded-sm" />
            <img src="https://cruvineriaecucina.it/wp-content/uploads/2022/04/img-menu-15.46.03.png" alt="Cru Detail" className="w-full h-auto shadow-xl rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
