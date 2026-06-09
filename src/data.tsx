import type { ReactNode } from 'react';
import {
  Monitor,
  LayoutTemplate,
  Languages,
  Blocks,
  Key,
  Share2,
  Mail,
  Search,
  Eye,
  Video,
  Sparkles,
} from 'lucide-react';

export const clients = ['Tatar Dog', 'Optiland', 'U Zbira', 'Czytelnik', 'Aluramy', 'Meble Zone', 'Premium Box', 'TechStore', 'GreenLife', 'FashionHub'];

export const problems = [
  {
    id: '01',
    problem: 'Nie wiem od czego zaczac sprzedaz online',
    solution: 'Shoper Starter Pack - kompletna konfiguracja techniczna: domena, SSL, platnosci, wysylka, GA4, RODO.',
    tag: 'Starter Pack',
    color: 'bg-pink-50',
  },
  {
    id: '02',
    problem: 'Moj sklep wyglada nieprofesjonalnie',
    solution: 'Shoper Theme Pack - profesjonalna konfiguracja szablonu dopasowana do Twojej marki.',
    tag: 'Theme Pack',
    color: 'bg-purple-50',
  },
  {
    id: '03',
    problem: 'Mam ruch, ale klienci nie kupuja',
    solution: 'Audyt UX i optymalizacja konwersji. Analizujemy zachowania uzytkownikow i eliminujemy bariery.',
    tag: 'Optymalizacja',
    color: 'bg-blue-50',
  },
  {
    id: '04',
    problem: 'Klienci nie moga mnie znalezc w sieci',
    solution: 'SEO/SXO we wspolpracy z Semcore - pozycjonowanie, Google Ads i content marketing.',
    tag: 'SEO / Semcore',
    color: 'bg-pink-50',
  },
  {
    id: '05',
    problem: 'Potrzebuje niestandardowych funkcji w sklepie',
    solution: 'Aplikacje Shoper i modyfikacje szablonow - dedykowane rozwiazania dopasowane do Twoich potrzeb.',
    tag: 'Aplikacje Shoper',
    color: 'bg-purple-50',
  },
  {
    id: '06',
    problem: 'Chce sprzedawac za granice',
    solution: 'Wersje jezykowe sklepu Shoper - pelna lokalizacja i ekspansja na rynki zagraniczne.',
    tag: 'Wersje jezykowe',
    color: 'bg-blue-50',
  },
];

export const services = [
  { icon: <Monitor className="w-6 h-6 text-pink-500" />, title: 'Shoper Starter Pack', desc: 'Wystartuj sklep w 14 dni — szablon, konfiguracja, szkolenie.', link: 'Dowiedz się więcej', bg: 'bg-pink-100' },
  { icon: <LayoutTemplate className="w-6 h-6 text-purple-500" />, title: 'Shoper Theme Pack', desc: 'Profesjonalny szablon Shopera dopasowany do Twojej marki.', link: 'Dowiedz się więcej', bg: 'bg-purple-100' },
  { icon: <Languages className="w-6 h-6 text-teal-500" />, title: 'Shoper Translate Pack', desc: 'Wielojęzyczna wersja Twojego sklepu — z AI w tle.', link: 'Dowiedz się więcej', bg: 'bg-teal-100' },
  { icon: <Blocks className="w-6 h-6 text-fuchsia-500" />, title: 'Aplikacje Shoper App Store', desc: 'Nasze integracje i dodatki dostępne w Shoper App Store.', link: 'Dowiedz się więcej', bg: 'bg-fuchsia-100' },
  { icon: <LayoutTemplate className="w-6 h-6 text-indigo-500" />, title: 'Szablon Monaco', desc: 'Nasz flagowy, szybki szablon Shopera — gotowy do startu.', link: 'Dowiedz się więcej', bg: 'bg-indigo-100' },
  { icon: <Key className="w-6 h-6 text-pink-400" />, title: 'Licencje Shoper -10%', desc: 'Sprzedaż licencji Shopera ze stałym rabatem dla nowych sklepów.', link: 'Dowiedz się więcej', bg: 'bg-pink-100' },
  { icon: <Share2 className="w-6 h-6 text-cyan-500" />, title: 'Marketing automation', desc: 'Flowy, segmentacja, kampanie cyklu życia klienta.', link: 'Dowiedz się więcej', bg: 'bg-cyan-100' },
  { icon: <Mail className="w-6 h-6 text-blue-500" />, title: 'Kampanie newsletter', desc: 'Strategia, projekt graficzny, wysyłka — pod klucz.', link: 'Dowiedz się więcej', bg: 'bg-blue-100' },
  { icon: <Search className="w-6 h-6 text-rose-500" />, title: 'SEO i pozycjonowanie', desc: 'Pozycjonowanie i content marketing — z partnerem Semcore.', link: 'Sprawdź usługę', bg: 'bg-rose-100', partner: true },
  { icon: <Eye className="w-6 h-6 text-pink-600" />, title: 'Audyt UX i heatmapy', desc: 'Analiza zachowań użytkowników i optymalizacja konwersji.', link: 'Sprawdź usługę', bg: 'bg-pink-100', partner: true },
  { icon: <Video className="w-6 h-6 text-purple-400" />, title: 'Reklama Google i Meta', desc: 'Płatne kampanie i remarketing prowadzone przez specjalistów.', link: 'Sprawdź usługę', bg: 'bg-purple-100', partner: true },
  { icon: <Sparkles className="w-6 h-6 text-indigo-400" />, title: 'AI dla e-commerce', desc: 'Sztuczna inteligencja w opisach produktów i obsłudze klienta.', link: 'Sprawdź usługę', bg: 'bg-indigo-100', partner: true },
];

export const portfolio = [
  { url: 'magicznypokoik.pl', tags: ['Meble dziecięce', 'magicznypokoik.pl'], title: 'Magiczny Pokoik', desc: 'Kompletne wdrożenie sklepu z meblami dziecięcymi - od konfiguracji technicznej po profesjonalny wygląd.', zakres: ['Starter Pack', 'Theme Pack', 'Google Ads'] },
  { url: 'pixel-shop.pl', tags: ['Gaming i gadżety', 'pixel-shop.pl'], title: 'Pixel Shop', desc: 'Sklep z gadżetami gamingowymi z automatyzacja zamówień. Projekt dostarczony przed terminem.', zakres: ['Starter Pack', 'Theme Pack'] },
  { url: 'lavelio.pl', tags: ['Biżuteria z grawerem', 'lavelio.pl'], title: 'Lavelio', desc: 'Unikalna personalizacja szablonu z modułem graweru online. Wygląd idealnie oddający charakter marki.', zakres: ['Theme Pack', 'Modyfikacje custom'] },
  { url: 'urbanstyle.pl', tags: ['Moda i odzież', 'urbanstyle.pl'], title: 'Urban Style', desc: 'Nowoczesny sklep z odzieżą streetwear. Zaawansowane filtry produktowe i integracja z Instagramem.', zakres: ['Starter Pack', 'Theme Pack', 'Aplikacje'] },
  { url: 'biomarket24.pl', tags: ['Zdrowa żywność', 'biomarket24.pl'], title: 'BioMarket24', desc: 'Sklep z ekologiczną żywnością z subskrypcjami i programem lojalnościowym dla stałych klientów.', zakres: ['Starter Pack', 'Theme Pack', 'Aplikacje'] },
  { url: 'techzone.pl', tags: ['Elektronika', 'techzone.pl'], title: 'TechZone', desc: 'Sklep z akcesoriami elektronicznymi. Wielojęzykowa wersja i optymalizacja konwersji.', zakres: ['Starter Pack', 'Theme Pack', 'Wersje językowe'] },
];

export const testimonials = [
  { quote: 'Netplace to partner, do ktorego wracam juz trzeci raz. Profesjonalizm, terminowosc i nieoczekiwane bonusy wykraczajace poza zakres zlecenia.', author: 'Michal Świątek', company: 'mebelzone.pl' },
  { quote: 'Długo szukalismy takiego partnera. Rozwiazują wszystkie problemy natychmiast, a projekt dostarczyli przed terminem.', author: 'Tomasz Bosaczyk', company: 'Pixel Shop' },
  { quote: 'Sebastian doskonale uchwyci moja wizje. Sklep wyglada pieknie i dziala sprawnie. Polecam kazdemu, kto szuka partnera do e-commerce.', author: 'Ewa Bartkowiak', company: 'lavelio.pl' },
];

export const blogPosts = [
  { imgColor: 'bg-gradient-to-br from-pink-200 to-pink-400', tag: 'WDROŻENIA', title: 'Jak wybrać szablon Shoper, który nie zabije Twojej sprzedaży', date: '12 kw. 2026', readTime: '5 min czytania' },
  { imgColor: 'bg-gradient-to-br from-cyan-200 to-teal-400', tag: 'KONWERSJA', title: '10 błędów wdrożeniowych, które zabijają sprzedaż w Twoim sklepie', date: '5 kw. 2026', readTime: '8 min czytania' },
  { imgColor: 'bg-gradient-to-br from-indigo-300 to-purple-500', tag: 'AI & E-COMMERCE', title: 'AI w e-commerce: czy warto inwestować w 2026 roku?', date: '28 mar. 2026', readTime: '5 min czytania' },
];

export const newsList = [
  { date: '12 kw. 2026', title: 'Shoper wprowadza nowy edytor Storefront 2.0', desc: 'Nowa wersja edytora wizualnego z drag & drop i lepszymi opcjami personalizacji szablonow.' },
  { date: '8 kw. 2026', title: 'Integracja Shoper z BaseLinker - nowosci w synchronizacji', desc: 'Zaktualizowana integracja umozliwia automatyczna synchronizacje stanow magazynowych i zamowien.' },
  { date: '2 kw. 2026', title: 'Shoper Premium - nowe funkcje AI w opisach produktow', desc: 'Platforma wprowadza generowanie opisow produktow i rekomendacje oparte na sztucznej inteligencji.' },
  { date: '28 mar. 2026', title: 'Aktualizacja systemu platnosci w Shoper', desc: 'Nowe metody platnosci i usprawnienia w procesie checkout dla wyzszej konwersji.' },
];
