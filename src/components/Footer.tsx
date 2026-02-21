const LOGO_FOOTER = 'https://cruvineriaecucina.it/wp-content/uploads/2022/05/logo-cru-maiusc.-nero-2.png';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="flex-1">
          <img src={LOGO_FOOTER} alt="Logo" className="h-12 brightness-0 invert mb-10" />
          <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] space-y-2">
            <p className="font-bold text-white/60 mb-2">Orari di apertura</p>
            <p>Lunedì: Chiuso</p>
            <p>Martedì - Sabato: 18:30 – 23:30</p>
            <p>Domenica: 12:30 – 15:00</p>
          </div>
        </div>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 text-sm tracking-widest">
          <div className="space-y-6">
            <h4 className="font-serif text-2xl normal-case tracking-normal">Strada San Lorenzo,<br />71122 Foggia FG</h4>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-white/40 w-16">TEL</span>
              <a href="tel:+393911010450" className="hover:text-brand-burgundy transition-colors">391 101 0450</a>
            </div>
            <div className="flex gap-4">
              <span className="text-white/40 w-16">MAIL</span>
              <a href="mailto:info@cruvineriaecucina.it" className="hover:text-brand-burgundy transition-colors">info@cruvineriaecucina.it</a>
            </div>
            <div className="flex gap-4">
              <span className="text-white/40 w-16">SOCIAL</span>
              <a href="https://www.instagram.com/cru_vineriacucina/" target="_blank" rel="noreferrer" className="hover:text-brand-burgundy transition-colors">@cru_vineriacucina</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] text-white/40 uppercase tracking-widest">
        <p>Cru Srl · Foggia (FG)</p>
      </div>
    </footer>
  );
}
