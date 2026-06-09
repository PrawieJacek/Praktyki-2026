import {
  Check,
  ArrowRight,
  Quote,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  TrendingUp,
  Clock,
} from 'lucide-react';
import Button from './components/Button';
import { clients, problems, services, portfolio, testimonials, blogPosts, newsList } from './data';

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-pink-200 selection:text-pink-900">
      
      {/* --- NAVBAR --- */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-purple-100 text-purple-800 font-bold px-4 py-2 rounded-md tracking-wider text-sm">
            NETPLACE
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-pink-600">Oferta</a>
          <a href="#" className="hover:text-pink-600">Realizacje</a>
          <a href="#" className="hover:text-pink-600">Opinie</a>
          <a href="#" className="hover:text-pink-600">Blog</a>
          <a href="#" className="hover:text-pink-600">Kontakt</a>
        </div>
        <Button>Darmowa konsultacja</Button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-70 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-xl">
            <span className="inline-block border border-gray-200 bg-white rounded-full px-4 py-1.5 text-xs font-medium text-gray-600 mb-6 shadow-sm">
              Autoryzowany Partner Shoper od 2014
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#1f2332] leading-tight mb-6">
              Prowadzisz sklep Shoper?<br />
              Nasze usługi oszczędzają Twój<br />
              czas i rozwijają sprzedaż.
            </h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Rozwiązujemy cyfrowe wyzwania e-commerce i oddajemy przedsiębiorcą to, czego mają najmniej – czas.<br />
              Projektujemy, wdrażamy i rozwijamy sklepy Shoper, byś Ty mógł skupić się na klientach i wzroście biznesu.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Button>Darmowa konsultacja</Button>
              <Button variant="outline">Zobacz realizacje</Button>
            </div>
            
            <div className="flex gap-10">
              <div>
                <p className="text-3xl font-bold text-pink-600">200+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">wdrożeń</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-teal-500">10+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">lat doświadczenia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-pink-600">99%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">poleca nas</p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] flex justify-center items-center">
            <div className="absolute right-0 top-10 w-4/5 h-[320px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-10 bg-gray-50 flex items-center px-4 gap-2 border-b border-gray-100">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="mx-auto bg-white rounded-md px-10 py-1 text-[10px] text-gray-400 border border-gray-200">twoj-sklep.shoper.pl</div>
              </div>
              <div className="flex-1 bg-purple-50/50 flex flex-col items-center justify-center relative">
                <div className="relative mt-8">
                   <div className="w-12 h-6 border-4 border-[#c62284] border-b-0 rounded-t-full absolute -top-6 left-1/2 -translate-x-1/2"></div>
                   <div className="w-32 h-36 bg-[#c62284] rounded-xl relative z-10 shadow-lg"></div>
                   <div className="w-4 h-4 bg-pink-300 rounded-full absolute top-4 right-4 z-20"></div>
                </div>
                <div className="absolute bottom-0 w-full bg-white p-4 text-left shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-gray-100">
                  <p className="text-xs font-bold mb-2">Nowa kolekcja premium</p>
                  <p className="text-[#c62284] font-bold text-sm">249 zł <span className="text-gray-400 line-through text-xs ml-2">329 zł</span></p>
                  <div className="w-20 h-2 bg-[#c62284] rounded-full mt-3"></div>
                </div>
              </div>
            </div>

            <div className="absolute right-[-20px] top-[40px] bg-white p-4 rounded-xl shadow-lg border border-gray-100 w-48 z-20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <p className="text-xs text-gray-500">Konwersja</p>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-gray-800">+32%</p>
                <TrendingUp className="w-6 h-6 text-teal-500 mb-1" />
              </div>
            </div>

            <div className="absolute left-[20px] bottom-[60px] bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4 z-20">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-teal-500" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Zaoszczędzony czas</p>
                <p className="text-lg font-bold text-gray-800">20h / tydzień</p>
              </div>
            </div>
            
            <div className="absolute right-[60px] bottom-[40px] bg-teal-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 z-30 shadow-md">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              Sklep online 24/7
            </div>
          </div>
        </div>
      </section>

      {/* --- DLACZEGO MY? (PROBLEMS) --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <p className="text-teal-500 text-sm font-bold tracking-wider uppercase mb-4">Dlaczego my?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f2332] mb-12 max-w-2xl">
          Znamy problemy e-commerce.<br />
          Mamy na nie rozwiązania.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.id} className={`${p.color} p-8 rounded-2xl flex flex-col justify-between`}>
              <div className="mb-12">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl font-bold text-pink-200">{p.id}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6a728a]">Problem</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 pr-4">{p.problem}</h3>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ArrowRight className="w-4 h-4 text-teal-500" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-500">Rozwiązanie</span>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {p.solution}
                </p>
                <span className="inline-block bg-white text-pink-600 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                  {p.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- NASZE PAKIETY --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal-500 text-sm font-bold tracking-wider uppercase mb-4">Nasze pakiety</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2332]">
              Zacznij sprzedawać online.<br />
              Wybierz swój pakiet.
            </h2>
          </div>

          <div className="bg-[#1a1c29] text-white rounded-3xl p-8 md:p-12 mb-8 shadow-xl relative overflow-hidden">
             <span className="inline-block bg-[#c62284] text-white text-xs font-bold px-3 py-1 rounded-full mb-6 relative z-10">
              Najlepsza oferta
            </span>
            <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h3 className="text-3xl font-bold mb-4">Pakiet Kompletny</h3>
                <p className="text-gray-400 text-sm mb-8 max-w-md leading-relaxed">
                  Wszystko czego potrzebujesz aby zacząc sprzedawac online – licencja, konfiguracja techniczna i profesjonalny wygląd w jednym pakiecie.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-end gap-6">
                <div className="text-right">
                  <p className="text-5xl font-bold">3 100 <span className="text-sm text-gray-400 font-normal">PLN netto</span></p>
                </div>
                <Button className="w-full md:w-auto shadow-lg shadow-pink-500/30">Zamów pakiet kompletny</Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-10 border-t border-gray-700 relative z-10">
              {['Licencja Shoper (rabat -10%)', 'Shoper Starter Pack', 'Certyfikat SSL', 'Shoper Theme Pack', 'Shoper Regulaminy', '12 miesięcy gwarancji'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-teal-500/20 rounded-full p-1">
                     <Check className="w-4 h-4 text-teal-400" />
                  </div>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-pink-100 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-pink-600"></div>
              <h3 className="text-2xl font-bold text-pink-600 mb-2">Shoper Starter Pack</h3>
              <p className="text-gray-500 text-sm mb-8 min-h-[40px]">Kompletna konfiguracja techniczna nowego sklepu Shoper</p>
              
              <p className="text-4xl font-bold text-gray-800 mb-8 border-b border-gray-100 pb-8">
                1 199 <span className="text-sm text-gray-400 font-normal">PLN netto</span>
              </p>
              
              <ul className="space-y-4 mb-10 flex-1">
                {['Konfiguracja domeny i SSL', 'Integracja płatności online', 'Konfiguracja metod wysyłki', 'Struktura kategorii produktów', 'Wdrożenie GA4 i GTM', 'Zgodność z RODO', '12 miesięcy gwarancji'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-500 shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Zamów pakiet</Button>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-purple-100 flex flex-col relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <h3 className="text-2xl font-bold text-purple-700 mb-2">Shoper Theme Pack</h3>
              <p className="text-gray-500 text-sm mb-8 min-h-[40px]">Profesjonalny wygląd sklepu dopasowany do Twojej marki</p>
              
              <p className="text-4xl font-bold text-gray-800 mb-8 border-b border-gray-100 pb-8">
                1 299 <span className="text-sm text-gray-400 font-normal">PLN netto</span>
              </p>
              
              <ul className="space-y-4 mb-10 flex-1">
                {['Profesjonalna konfiguracja szablonu', 'Dopasowanie do identyfikacji marki', 'Optymalizacja UX/UI', 'Responsywność na mobile', 'Konfiguracja strony głównej', 'Slider i banery promocyjne', '12 miesięcy gwarancji'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-500 shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-purple-700 text-white font-medium rounded-lg px-6 py-3 hover:bg-purple-800 transition-colors">
                Zamów pakiet
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- USŁUGI --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-blue-600 text-sm font-bold tracking-wider uppercase mb-4">Usługi</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2332] mb-4">
              Wszystko, czego potrzebuje<br />
              Twój sklep na Shoperze
            </h2>
            <p className="text-gray-500">
              Nasze własne pakiety i sprawdzone usługi naszych partnerów — w jednym miejscu.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 rounded-full flex items-center gap-2">
            Zobacz pełen cennik <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col relative">
              {s.partner && (
                <span className="absolute top-6 right-6 bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  Partner
                </span>
              )}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${s.bg}`}>
                {s.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 mb-6 flex-1">{s.desc}</p>
              <a href="#" className={`text-sm font-bold flex items-center gap-1 ${s.partner ? 'text-pink-600' : 'text-teal-500'}`}>
                {s.link} <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* --- WYPRÓBUJ ZA DARMO --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
             <p className="text-teal-500 text-sm font-bold tracking-wider uppercase mb-4">Wypróbuj za darmo</p>
             <h2 className="text-3xl md:text-4xl font-bold text-[#1f2332] mb-6">
               Załóż darmowy sklep Shoper<br />
               przez Netplace
             </h2>
             <p className="text-gray-500 mb-8 leading-relaxed">
               Przetestuj Shoper przez 14 dni za darmo. Zakładając sklep z poziomu naszej strony zyskujesz dostęp do dedykowanego wsparcia technicznego Netplace od pierwszego dnia.
             </p>
             
             <ul className="space-y-4 mb-10">
                {[
                  '14 dni za darmo - bez zobowiązań', 
                  'Pełna funkcjonalność platformy Shoper', 
                  'Wsparcie techniczne Netplace w pakiecie', 
                  'Możliwość płynnego przejścia na pakiet Starter lub Kompletny',
                  '-10% rabatu na licencję Shoper z Netplace'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-500 shrink-0" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button>Załóż darmowy sklep Shoper</Button>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#f5eef9] rounded-[40px] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-inner">
               <div className="w-24 h-12 bg-purple-200 rounded-lg mb-8"></div>
               <h3 className="text-3xl font-bold text-gray-800 mb-6">Shoper</h3>
               <div className="bg-[#c62284] text-white font-bold py-2 px-6 rounded-full mb-4">
                 14 DNI ZA DARMO
               </div>
               <div className="bg-[#4a55a2] text-white font-bold py-2 px-6 rounded-full mb-8">
                 LICENCJA -10%
               </div>
               <p className="text-gray-500 text-sm mb-1">Bez karty kredytowej</p>
               <p className="text-gray-500 text-sm mb-12">Bez zobowiązań</p>
               
               <p className="text-xs text-gray-400 flex items-center gap-1">
                 powered by <span className="font-bold text-[#c62284]">Netplace</span>
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ZAUFALI NAM (MARQUEE) --- */}
      <section className="bg-[#1f2332] py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-10">
          <p className="text-teal-400 text-xs font-bold tracking-wider uppercase mb-2">Zaufali nam</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Klienci, z którymi współpracujemy</h2>
        </div>
        
        <div className="flex overflow-hidden relative max-w-7xl mx-auto">
          <div className="flex animate-marquee gap-6">
            {[...clients, ...clients].map((client, i) => (
              <div key={i} className="bg-[#2a2f42] text-gray-400 text-sm font-medium px-8 py-4 rounded-lg whitespace-nowrap min-w-[160px] text-center shrink-0">
                {client}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 25s linear infinite;
          }
        `}</style>
      </section>

      {/* --- REALIZACJE --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-bold tracking-wider uppercase mb-4">Realizacje</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2332]">Sklepy, które stworzyliśmy</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {portfolio.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-[#f0f1f5] aspect-video rounded-t-3xl rounded-b-md flex items-center justify-center text-gray-400 mb-6 group-hover:bg-gray-200 transition-colors">
                {item.url}
              </div>
              <div className="px-2">
                <p className="text-xs font-bold text-pink-600 mb-2">
                  {item.tags.join(' | ')}
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-6 min-h-[40px]">{item.desc}</p>
                
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Zakres prac</p>
                  <div className="flex flex-wrap gap-2">
                    {item.zakres.map((z, j) => (
                      <span key={j} className="bg-pink-50 text-pink-700 text-xs px-3 py-1 rounded-full">
                        {z}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="rounded-full border-pink-600 text-pink-600">
            Zobacz wszystkie realizacje
          </Button>
        </div>
      </section>

      {/* --- OPINIE KLIENTOW --- */}
      <section className="bg-[#1f2332] py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal-400 text-sm font-bold tracking-wider uppercase mb-4">Opinie klientów</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Co mówią o nas klienci?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 flex flex-col shadow-lg">
                <Quote className="w-8 h-8 text-teal-400 mb-6" />
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full"></div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{t.author}</p>
                    <p className="text-gray-400 text-xs">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BLOG --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-teal-500 text-sm font-bold tracking-wider uppercase mb-4">Blog</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2332] mb-4">
              Wiedza i porady dla e-commerce
            </h2>
            <p className="text-gray-500">
              Dzielimy się doświadczeniem z ponad 200 wdrożeń sklepów Shoper — czytaj, ucz się, wprowadzaj w życie.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 rounded-full flex items-center gap-2">
            Zobacz wszystkie wpisy <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <div key={i} className="group cursor-pointer flex flex-col h-full border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`h-48 w-full ${post.imgColor} rounded-t-2xl relative overflow-hidden`}>
                 <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                 <div className="absolute top-5 left-5 w-20 h-20 bg-white/20 rounded-full blur-lg"></div>
              </div>
              <div className="p-6 flex flex-col flex-1 bg-white">
                <span className="inline-block bg-pink-50 text-pink-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 self-start">
                  {post.tag}
                </span>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex-1 group-hover:text-pink-600 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <a href="#" className="text-teal-500 text-sm font-bold flex items-center gap-1">
                  Czytaj artykuł <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SHOPER NEWS & CTA --- */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-[#1f2332]">Aktualności ze świata Shoper</h2>
              <a href="#" className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:underline">
                Wszystkie <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            
            <div className="space-y-6">
              {newsList.map((news, i) => (
                <div key={i} className="flex gap-6 border-b border-gray-200 pb-6 last:border-0">
                  <div className="w-24 shrink-0 pt-1">
                    <span className="text-teal-500 text-xs font-bold">{news.date}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{news.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{news.desc}</p>
                    <a href="#" className="text-blue-600 text-xs font-medium hover:underline">Czytaj więcej →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-[#1a1c29] text-white rounded-3xl p-10 h-full flex flex-col justify-center">
              <span className="inline-block bg-[#c62284]/20 text-[#c62284] text-[10px] font-bold px-3 py-1 rounded-full mb-6 self-start">
                Autoryzowany Partner Shoper
              </span>
              <h3 className="text-3xl font-bold mb-4">
                Załóż sklep Shoper<br />
                z Netplace
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Konfiguracja techniczna, profesjonalny szablon i wsparcie od pierwszego dnia. Skorzystaj z rabatu -10% na licencję Shoper przez nasz program partnerski.
              </p>
              
              <div className="mb-8">
                <span className="text-gray-400 text-sm">od </span>
                <span className="text-4xl font-bold">1 199 </span>
                <span className="text-gray-400 text-sm">PLN netto</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button>Zamów wdrożenie</Button>
                <Button variant="dark">Sprawdź pakiety</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PARTNERZY --- */}
      <section className="py-12 bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm mb-8">Nasi partnerzy technologiczni</p>
          <div className="flex justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            <span className="text-2xl font-bold">Shoper</span>
            <span className="text-2xl font-bold">Semcore</span>
            <span className="text-2xl font-bold">Callback24</span>
          </div>
        </div>
      </section>

      {/* --- PRE-FOOTER CTA --- */}
      <section className="bg-[#4a63b0] py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Gotowy na własny sklep internetowy?</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Umów się na darmową konsultację. Porozmawiamy o Twoich potrzebach i doradzimy najlepsze rozwiązanie.
        </p>
        <Button variant="white" className="rounded-full font-bold text-[#c62284] px-8 py-4 shadow-xl">
          Darmowa konsultacja
        </Button>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1a1c29] text-gray-400 py-16 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
            
            <div className="col-span-2 lg:col-span-1">
              <h4 className="text-white font-bold text-lg mb-4">NETPLACE</h4>
              <p className="mb-6 leading-relaxed">
                Agencja e-commerce.<br />
                Autoryzowany Partner Shoper od 2014.<br />
                Kreujemy Twoje miejsce w sieci.
              </p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <div key={i} className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Usługi Shoper</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Shoper Starter Pack</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shoper Theme Pack</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Licencja Shoper</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Modyfikacje custom</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Migracje sklepów</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Storefront</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Marketing</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">SEO / SXO</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Google Ads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analityka GA4</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Audyt UX</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Optymalizacja konwersji</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Content marketing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Firma</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">O nas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Realizacje</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Opinie klientów</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shoper News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partnerzy</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <h4 className="text-white font-bold mb-4">Kontakt</h4>
              <ul className="space-y-3 mb-6">
                <li>biuro@netplace.com.pl</li>
                <li>+48 12 288 78 00</li>
                <li>+48 690 466 092</li>
                <li className="mt-4">ul. Makuszyńskiego 4</li>
                <li>31-752 Kraków</li>
              </ul>
              <Button className="w-full text-xs py-2">Umów konsultacje</Button>
            </div>

          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2026 Netplace Sp. z o.o. Wszelkie prawa zastrzeżone.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
              <a href="#" className="hover:text-white transition-colors">Regulamin</a>
              <a href="#" className="hover:text-white transition-colors">Deklaracja dostępności</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}