import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Wine = {
  name: string;
  producer?: string;
  description?: string;
  year?: string;
  alcohol?: string;
  price: string;
};

type Region = {
  name: string;
  wines: Wine[];
};

type WineCategory = {
  id: string;
  name: string;
  regions: Region[];
};

const WINE_LIST: WineCategory[] = [
  {
    id: 'rossi',
    name: 'Vini Rossi',
    regions: [
      {
        name: 'Puglia',
        wines: [
          { name: 'CAIAFFA', producer: 'primitivo bio', year: '2024', alcohol: '14%', price: '20€' },
          { name: 'LAMPYRIS', producer: 'CAIAFFA', description: 'nero di troia bio', year: '2018', alcohol: '14%', price: '38€' },
          { name: 'TORRE CRETOSA', producer: 'borgo turrito', description: '100% nero di troia', alcohol: '13,5%', price: '18€' },
          { name: 'BUCARI', producer: 'az. agr. recchia', year: '2022', alcohol: '13%', price: '24€' },
          { name: 'ATTANASIO', description: 'primitivo di manduria riserva', year: '2017', alcohol: '16,5%', price: '40€' },
        ]
      },
      {
        name: 'Campania',
        wines: [
          { name: 'SPARAPOSA', description: 'barbera', producer: 'az. Agr. Brama', year: '2016', alcohol: '14,5%', price: '26€' },
          { name: 'MASSAIO', description: 'aglianico', producer: 'casarocca', year: '2024', alcohol: '13%', price: '25€' },
        ]
      },
      {
        name: 'Marche',
        wines: [
          { name: 'KURNI', producer: 'Oasi degli angeli', description: 'Montepulciano', year: '2021', alcohol: '14,5%', price: '140€' },
          { name: 'CAMPOFIORITO', producer: 'Fattoria Lucesole', description: 'Montepulciano', year: '2019', alcohol: '14%', price: '26€' },
        ]
      },
      {
        name: 'Umbria',
        wines: [
          { name: 'TURLO’', description: 'lago di Corbara rosso doc', producer: 'Castello di Titignano', year: '2020', alcohol: '14%', price: '20€' },
          { name: 'RUBESCO', producer: 'Lungarotti', description: 'rosso di torgiano', year: '2022', alcohol: '14,5%', price: '18€' },
          { name: 'MONTEFALCO', producer: 'lungarotti', year: '2022', alcohol: '14,5%', price: '24€' },
        ]
      },
      {
        name: 'Toscana',
        wines: [
          { name: 'TERRE DI PISA', producer: 'Sangervasio', description: 'sangiovese', year: '2011', alcohol: '14,5%', price: '30€' },
          { name: 'ROSSO DI MONTALCINO', producer: 'celestino pecci', year: '2020 vintage', alcohol: '15%', price: '34€' },
          { name: 'BRUNELLO DI MONTALCINO', producer: 'poggio al carro, celestino pecci', year: '2019', alcohol: '15%', price: '75€' },
          { name: 'MAMA', producer: 'certosa di belriguardo', description: 'chianti docg', year: '2021', alcohol: '13,5%', price: '23€' },
        ]
      },
      {
        name: 'Friuli Venezia Giulia',
        wines: [
          { name: 'LE VIGNE DI ZAMO’', description: 'rosso Friuli', year: '2021', alcohol: '13,5%', price: '18€' },
          { name: 'PETRUCCO', description: 'refosco del peduncolo', year: '2023', alcohol: '13,5%', price: '30€' },
          { name: 'KANTE', description: 'terrano', year: '2019', alcohol: '11,5%', price: '28€' },
        ]
      },
      {
        name: 'Veneto',
        wines: [
          { name: 'AMARONE DELLA VALPOLICELLA', producer: 'corte lonardi', year: '2016', alcohol: '15,5%', price: '75€' },
          { name: 'VALPOLICELLA RIPASSO', producer: 'corte lonardi', year: '2020', alcohol: '14%', price: '34€' },
          { name: 'SERAFINI & VIDOTTO', description: '100% recantina', year: '2022', alcohol: '13%', price: '28€' },
        ]
      },
      {
        name: 'Piemonte',
        wines: [
          { name: 'NEBBIOLO', producer: 'Cristian boffa', year: '2023', alcohol: '14,5%', price: '32€' },
        ]
      },
      {
        name: 'Sicilia',
        wines: [
          { name: 'CANTINE DI NESSUNO', producer: 'nuddu', description: 'Etna rosso', year: '2020', alcohol: '13,5%', price: '35€' },
          { name: 'HUGONIS', description: 'cabernet sauvignon e nero d’avola', producer: 'Tenuta Rapitalà', year: '2018', alcohol: '14%', price: '30€' },
        ]
      },
      {
        name: 'Estero',
        wines: [
          { name: 'SAUMUR', producer: 'Domaine Guibertau', description: 'les moulins', year: '2023', alcohol: '13%', price: '45€' },
          { name: 'JUAN DE ALZATE RIOJA CRIANZA', year: '2017', alcohol: '14%', price: '28€' },
          { name: 'DOMINIQUE GRUHIER', description: 'bourgogne epineuil 100% pinot nero', year: '2022', alcohol: '13%', price: '50€' },
          { name: 'DOMAINE BOHN', description: 'Le coup de jus', year: '2022', alcohol: '12,5%', price: '40€' },
          { name: 'OROKSEGUL', producer: 'HEGYI KALO', alcohol: '14,5%', price: '55€' },
        ]
      }
    ]
  },
  {
    id: 'rosati',
    name: 'Vini Rosati',
    regions: [
      {
        name: 'Selezione Rosati',
        wines: [
          { name: 'CAIAFFA', description: 'nero di troia', year: '2024', alcohol: '13%', price: '20€' },
          { name: 'MANTIS', producer: 'CAIAFFA', description: 'susumaniello', year: '2025', alcohol: '13%', price: '22€' },
          { name: 'ROSALUCE', producer: 'Lungarotti', description: 'sangiovese', year: '2025', alcohol: '11,5%', price: '18€' },
          { name: 'ATTANASIO', description: 'primitivo', alcohol: '15%', year: '2024', price: '24€' },
          { name: 'BUCARI', producer: 'az. agr. Recchia', description: 'primitivo', year: '2022', alcohol: '13%', price: '24€' },
          { name: 'DOMAINE LA ROUILLERE', description: 'cote de provance', alcohol: '12%', year: '2024', price: '24€' },
        ]
      }
    ]
  },
  {
    id: 'bianchi',
    name: 'Vini Bianchi',
    regions: [
      {
        name: 'Puglia',
        wines: [
          { name: 'CAIAFFA', description: 'fiano puglia', year: '2024', alcohol: '13%', price: '20€' },
        ]
      },
      {
        name: 'Campania',
        wines: [
          { name: 'CRIANZA', producer: 'az. agricola Brama', description: 'trebbiano romagnolo macerato', year: '2016', alcohol: '14,5%', price: '35€' },
          { name: 'CAPODANIELLO', producer: 'fiorentino Baldassarre', description: 'fiano Campania', year: '2021', alcohol: '13,5%', price: '65€' },
          { name: 'QUINTO', producer: 'az. agr. carmine Cocozza', description: 'bianco colli di Salerno', year: '2018', alcohol: '12,5%', price: '30€' },
        ]
      },
      {
        name: 'Abruzzo',
        wines: [
          { name: 'GIOCHEREMO CON I FIORI', description: 'pecorino', producer: 'torre dei beati', year: '2024', alcohol: '14%', price: '24€' },
        ]
      },
      {
        name: 'Umbria',
        wines: [
          { name: 'TORRE DI GIANO', producer: 'Lungarotti', description: '(vermentino/grechetto/trebbiano)', year: '2022', alcohol: '12%', price: '18€' },
          { name: 'TRAGUGNANO', producer: 'Sergio Mottura', year: '2022', alcohol: '13,5%', price: '22€' },
        ]
      },
      {
        name: 'Marche',
        wines: [
          { name: 'VERSIANO', description: 'verdicchio Jesi', producer: 'vignamato', year: '2023', alcohol: '13%', price: '20€' },
        ]
      },
      {
        name: 'Lazio',
        wines: [
          { name: 'CANTINE IMPERATORI', description: 'bianco frascati in anfora', year: '2024', alcohol: '13%', price: '32€' },
        ]
      },
      {
        name: 'Veneto',
        wines: [
          { name: 'IOCLOE', description: 'durella', producer: 'diletta tonello', year: '2022', alcohol: '12%', price: '18€' },
        ]
      },
      {
        name: 'Trentino, sudtirol',
        wines: [
          { name: 'BESSERERHOF', description: 'pinot bianco', alcohol: '14%', price: '23€' },
        ]
      },
      {
        name: 'Friuli Venezia Giulia',
        wines: [
          { name: 'Kante', description: 'malvasia 100%', year: '2020', alcohol: '12,5%', price: '32€' },
          { name: 'Kante', description: 'vitovska 100%', year: '2022', alcohol: '12%', price: '30€' },
        ]
      },
      {
        name: 'Estero',
        wines: [
          { name: 'BISHOP’S LEAP', description: 'sauvignon blanc, new zeland', year: '2024', price: '24€' },
          { name: 'DOMAINE HAMELIN', description: 'chablis', year: '2023', alcohol: '13%', price: '28€' },
          { name: 'DOMANE WACHAU', description: 'riesling anfora', year: '2021', alcohol: '12%', price: '31€' },
          { name: 'DOMAINE LEBRUN', description: 'pouilly fumè, francia', year: '2024', alcohol: '13%', price: '36€' },
          { name: 'LE BARCEAU DES FEES', description: 'francia, chenin blanc', year: '2022', alcohol: '13,5%', price: '48€' },
          { name: 'SYLVAIN PATAILLE', description: 'bourgogne aligoté', year: '2020', alcohol: '13%', price: '65€' },
        ]
      }
    ]
  },
  {
    id: 'bollicine',
    name: 'Bollicine',
    regions: [
      {
        name: 'Bollicine Italiane',
        wines: [
          { name: 'RICCI CURBASTRO', description: 'brut rosè, franciacorta', alcohol: '12,5%', price: '34€' },
          { name: 'VULCANO 800', producer: 'terra dei re', description: 'metodo classico pinot nero', year: '2020', alcohol: '12%', price: '35€' },
          { name: 'VULCANO 800', producer: 'terra dei re', description: 'metodo classico pinot nero rosè', year: '2020', alcohol: '12%', price: '35€' },
          { name: 'ALESSIO MESSIANI', description: 'metodo classico extra brut, 10anni s.l.', alcohol: '12,5%', price: '50€' },
          { name: 'ALESSIO MESSIANI', description: 'metodo classico 0 dosage, 10anni s.l.', alcohol: '12,5%', price: '55€' },
          { name: 'SPENSIERATA', description: 'franciacorta brut', alcohol: '12,5%', price: '38€' },
          { name: 'MAN', description: 'trentodoc brut', alcohol: '12%', price: '38€' },
          { name: 'MAN', description: 'trentodoc rose', alcohol: '12%', price: '40€' },
          { name: 'GIGLIO DI MARE', description: 'spumante rosè', alcohol: '11,5%', price: '17€' },
        ]
      },
      {
        name: 'Champagne ed estero',
        wines: [
          { name: 'LOUIS ROEDERER', description: 'CRISTAL', year: '2014', alcohol: '12%', price: '300€' },
          { name: 'JEAN PHILIPPE TROUSSET', description: 'le rosè, premier cru extra brut', alcohol: '12%', price: '75€' },
          { name: 'JEAN PHILIPPE TROUSSET', description: 'creme, extra brut premier cru', alcohol: '12%', price: '75€' },
          { name: 'H. BILLIOT FILS ROSE', description: 'brut grand cru', alcohol: '12,5%', price: '70€' },
          { name: 'ERIC TAILLET', description: 'renaissance, extra brut, 100% meunier', alcohol: '12,5%', price: '50€' },
          { name: 'LOUIS CONSTANT', description: 'brut reserve', alcohol: '12,5%', price: '45€' },
          { name: 'HENRI DE VILLAMONT', description: 'cremant de bourgogne, bdb brut', alcohol: '11,5%', price: '28€' },
        ]
      }
    ]
  },
  {
    id: 'distillati',
    name: 'Amari, Distillati, Drinks',
    regions: [
      {
        name: 'Amari e liquori',
        wines: [
          { name: 'ROGER', price: '4,50€' },
          { name: 'JEFFERSON', price: '4,50€' },
          { name: 'MADAME MILU’', price: '6.50€' },
          { name: 'AMARO DEL CAPO', price: '3,50€' },
          { name: 'LIMONCELLO', price: '3,50€' },
          { name: 'LIMONCELLO TORO CURCUMA E ZENZERO', price: '4€' },
          { name: 'FERNET BRANCA', price: '3,50€' },
          { name: 'BRANCA MENTA', price: '3,50€' },
          { name: 'JAGEIRMESTER', price: '3,50€' },
          { name: 'DISARONNO', price: '3,50€' },
          { name: 'MONTENEGRO', price: '3,50€' },
          { name: 'PASSITO DI VISCIOLE', price: '6€' },
          { name: 'BAYLES', price: '4€' },
          { name: 'GRAMBRINUS', price: '3,50€' },
          { name: 'CHERRY STOCK', price: '3,50€' },
          { name: 'RATAFIA TORO', price: '4€' },
          { name: 'CREMA PISTACCHIO', price: '4€' },
        ]
      },
      {
        name: 'Whisky',
        wines: [
          { name: 'LAPHROAIG', price: '8€' },
          { name: 'NIKKA FROM THE BARREL', price: '9€' },
          { name: 'NIKKA SUPER RARE OLD', price: '9€' },
          { name: 'TALISKER SKYE', price: '8€' },
          { name: 'OBAN', price: '9€' },
          { name: 'KNOB CREEK', price: '8€' },
        ]
      },
      {
        name: 'Cognac ed armagnac',
        wines: [
          { name: 'JANNEAU VSOP GRAN ARMAGNAC', price: '9€' },
          { name: 'COGNAC MARTEL VSOP', price: '9€' },
        ]
      },
      {
        name: 'Rum',
        wines: [
          { name: 'DIPLOMATICO', price: '6€' },
          { name: 'SAILOR JERRY SPICED RUM', price: '6€' },
          { name: 'BARCELO’ IMPERIAL', price: '8€' },
          { name: 'FLOR DE CAñA ANEJO GRAN RESERVA 7ANNI', price: '6€' },
          { name: 'EMINENTE GRAN RISERVA 7ANNI', price: '9€' },
          { name: 'MATUSALEM GRAN RESERVA 15ANNI', price: '9€' },
        ]
      },
      {
        name: 'Grappa',
        wines: [
          { name: 'GRAPPA POLI BARRIQUE', price: '4,50€' },
          { name: 'GRAPPA POLI BIANCA 25', price: '4,50€' },
        ]
      },
      {
        name: 'Gin/Vodka tonic/lemon',
        wines: [
          { name: 'TANQUERAY', price: '7€' },
          { name: 'MALFY POMPELMO', price: '8€' },
          { name: 'MALFY ORIGINALE', price: '8€' },
          { name: 'MONKEY 47', price: '9€' },
          { name: 'LONDON 3', price: '8€' },
          { name: 'GIN MARE', price: '8€' },
          { name: 'PORTOFINO', price: '9€' },
          { name: 'TENJAKU GIN', price: '9€' },
          { name: 'GIN DI PUGLIA', price: '8€' },
          { name: 'BOTANIST', price: '9€' },
          { name: 'ROKU', price: '9€' },
          { name: 'BELVEDERE', price: '8€' },
        ]
      }
    ]
  }
];

export default function Vineria() {
  const [activeCategory, setActiveCategory] = useState(WINE_LIST[0].id);

  const currentCategory = WINE_LIST.find(c => c.id === activeCategory)!;

  return (
    <div className="bg-brand-cream min-h-screen pt-32 pb-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6">La Vineria</h1>
          <p className="text-brand-dark/60 tracking-widest uppercase text-sm">La nostra selezione</p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {WINE_LIST.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 text-xs tracking-widest uppercase transition-all border ${
                activeCategory === category.id
                  ? 'bg-brand-burgundy text-white border-brand-burgundy'
                  : 'bg-transparent text-brand-dark border-brand-dark/20 hover:border-brand-dark'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Wine List Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-16"
          >
            {currentCategory.regions.map((region) => (
              <div key={region.name} className="space-y-8">
                <h2 className="text-2xl font-serif border-b border-brand-dark/10 pb-4">{region.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                  {region.wines.map((wine, idx) => (
                    <div key={idx} className="flex justify-between items-end group">
                      <div className="flex-1 pr-4">
                        <h4 className="font-medium text-sm md:text-base uppercase tracking-wider group-hover:text-brand-burgundy transition-colors">
                          {wine.name}
                        </h4>
                        <p className="text-xs text-brand-dark/60 italic">
                          {[wine.producer, wine.description, wine.year, wine.alcohol].filter(Boolean).join(', ')}
                        </p>
                      </div>
                      <div className="font-serif text-lg text-brand-burgundy whitespace-nowrap">
                        {wine.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
