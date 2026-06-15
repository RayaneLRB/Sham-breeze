import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type Lang = 'fr' | 'en' | 'ar';

const t: Record<string, Record<Lang, string>> = {
  // Navbar
  'nav.home': { fr: 'Accueil', en: 'Home', ar: 'الرئيسية' },
  'nav.about': { fr: 'Notre Histoire', en: 'Our Story', ar: 'قصتنا' },
  'nav.experiences': { fr: 'Expériences', en: 'Experiences', ar: 'تجارب' },
  'nav.menu': { fr: 'La Carte', en: 'Menu', ar: 'القائمة' },
  'nav.gallery': { fr: 'Galerie', en: 'Gallery', ar: 'معرض' },
  'nav.reviews': { fr: 'Avis', en: 'Reviews', ar: 'آراء' },
  'nav.contact': { fr: 'Contact', en: 'Contact', ar: 'اتصل' },
  'nav.reserve': { fr: 'Réserver', en: 'Reserve', ar: 'احجز' },

  // Hero
  'hero.discover': { fr: 'Découvrir la Carte', en: 'Discover Menu', ar: 'اكتشف القائمة' },
  'hero.reserve': { fr: 'Réserver une Table', en: 'Reserve a Table', ar: 'احجز طاولة' },
  'hero.scroll': { fr: 'Défiler', en: 'Scroll', ar: 'مرر' },

  // About
  'about.subtitle': { fr: 'Notre Histoire', en: 'Our Story', ar: 'قصتنا' },
  'about.engagement': { fr: 'Notre Engagement', en: 'Our Commitment', ar: 'التزامنا' },
  'about.followers': { fr: 'Followers', en: 'Followers', ar: 'متابعين' },
  'about.rating': { fr: 'Note Google', en: 'Google Rating', ar: 'تقييم جوجل' },
  'about.moments': { fr: 'Moments', en: 'Moments', ar: 'لحظات' },

  // Experiences
  'exp.subtitle': { fr: "L'Expérience", en: 'The Experience', ar: 'التجربة' },
  'exp.description': { fr: "Chaque moment passé chez nous est une expérience à part entière.", en: "Every moment with us is an experience in itself.", ar: "كل لحظة عندنا هي تجربة فريدة." },

  // Menu
  'menu.note': { fr: 'Menu sous réserve de disponibilité · Prix en Dinar Algérien', en: 'Menu subject to availability · Prices in Algerian Dinar', ar: 'القائمة حسب التوفر · الأسعار بالدينار الجزائري' },

  // Gallery
  'gallery.subtitle': { fr: 'Galerie', en: 'Gallery', ar: 'معرض' },
  'gallery.title': { fr: "L'Art Visuel", en: 'Visual Art', ar: 'الفن البصري' },
  'gallery.all': { fr: 'Tout', en: 'All', ar: 'الكل' },

  // Reviews
  'reviews.subtitle': { fr: 'Témoignages', en: 'Testimonials', ar: 'شهادات' },
  'reviews.title': { fr: "Ce Qu'ils Disent", en: 'What They Say', ar: 'ماذا يقولون' },

  // Services
  'services.subtitle': { fr: 'Services', en: 'Services', ar: 'خدمات' },
  'services.title': { fr: 'À Votre Service', en: 'At Your Service', ar: 'في خدمتكم' },

  // Reservation
  'reservation.subtitle': { fr: 'Réservation', en: 'Reservation', ar: 'الحجز' },
  'reservation.title1': { fr: 'Réservez Votre', en: 'Reserve Your', ar: 'احجز' },
  'reservation.title2': { fr: 'Expérience', en: 'Experience', ar: 'تجربتك' },
  'reservation.text': { fr: "Notre équipe est à votre disposition pour rendre chaque visite exceptionnelle.", en: "Our team is at your disposal to make every visit exceptional.", ar: "فريقنا في خدمتكم لجعل كل زيارة استثنائية." },
  'reservation.call': { fr: 'Appeler', en: 'Call', ar: 'اتصل' },
  'reservation.whatsapp': { fr: 'WhatsApp', en: 'WhatsApp', ar: 'واتساب' },
  'reservation.book': { fr: 'Réserver une Table', en: 'Book a Table', ar: 'احجز طاولة' },
  'reservation.main': { fr: 'Principal', en: 'Main', ar: 'رئيسي' },
  'reservation.secondary': { fr: 'Secondaire', en: 'Secondary', ar: 'ثانوي' },

  // Hours
  'hours.title': { fr: 'Nos Horaires', en: 'Opening Hours', ar: 'أوقات العمل' },
  'hours.note': { fr: 'Horaires susceptibles de varier les jours fériés', en: 'Hours may vary on holidays', ar: 'قد تتغير الأوقات في الأعياد' },
  'hours.special': { fr: 'Spécial', en: 'Special', ar: 'خاص' },

  // Location
  'location.subtitle': { fr: 'Nous Trouver', en: 'Find Us', ar: 'موقعنا' },
  'location.title1': { fr: 'Votre Destination', en: 'Your Destination', ar: 'وجهتك' },
  'location.address': { fr: 'Adresse', en: 'Address', ar: 'العنوان' },
  'location.access': { fr: 'Accès Facile', en: 'Easy Access', ar: 'وصول سهل' },
  'location.parking': { fr: 'Parking Gratuit', en: 'Free Parking', ar: 'موقف مجاني' },
  'location.area': { fr: 'Quartier Résidentiel', en: 'Residential Area', ar: 'حي سكني' },
  'location.open': { fr: 'Ouvrir dans Google Maps', en: 'Open in Google Maps', ar: 'افتح في خرائط جوجل' },

  // Footer
  'footer.rights': { fr: 'Tous droits réservés.', en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' },
  'footer.tagline': { fr: "Une expérience culinaire d'exception.", en: 'An exceptional culinary experience.', ar: 'تجربة طعام استثنائية.' },
  'footer.nav': { fr: 'Navigation', en: 'Navigation', ar: 'التنقل' },
  'footer.contact': { fr: 'Contact', en: 'Contact', ar: 'اتصل بنا' },
  'footer.follow': { fr: 'Suivez-nous', en: 'Follow Us', ar: 'تابعنا' },
  'footer.hours': { fr: 'Horaires', en: 'Hours', ar: 'الأوقات' },

  // Loading
  'loading.text': { fr: "Chargement de l'expérience", en: 'Loading the experience', ar: 'جارٍ تحميل التجربة' },
};

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (key: string) => string;
  isRTL: boolean;
}

const LangContext = createContext<LangCtx | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try { return (localStorage.getItem('site_lang') as Lang) || 'fr'; } catch { return 'fr'; }
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('site_lang', l); } catch {}
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const tr = useCallback((key: string) => t[key]?.[lang] || t[key]?.fr || key, [lang]);

  const isRTL = lang === 'ar';

  return (
    <LangContext.Provider value={{ lang, setLang, tr, isRTL }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
