export type Lang = "hy" | "ru" | "en";

export const defaultLang: Lang = "hy";
export const locales: Lang[] = ["hy", "ru", "en"];

/** Short label shown in the language switcher. */
export const localeShort: Record<Lang, string> = {
  hy: "ՀԱՅ",
  ru: "РУС",
  en: "ENG",
};

/** Human-readable language name (for aria-label / title). */
export const localeName: Record<Lang, string> = {
  hy: "Հայերեն",
  ru: "Русский",
  en: "English",
};

/** Route of each locale's home page. */
export const localePath: Record<Lang, string> = {
  hy: "/",
  ru: "/ru",
  en: "/en",
};

type Item = { title: string; text: string };

interface Dict {
  nav: { services: string; smart: string; about: string; contact: string };
  brand: string;
  badge: string;
  hero: { a: string; b: string; c: string; lead: string };
  cta: { primary: string; secondary: string };
  chips: string[];
  stats: { value: string; label: string }[];
  services: { title: string; lead: string; items: Item[] };
  smart: { title: string; lead: string; items: Item[]; tiles: string[] };
  about: { title: string; lead: string; items: Item[] };
  contact: { title: string; lead: string; call: string; email: string; note: string };
  footer: { tag: string; rights: string };
}

export const ui: Record<Lang, Dict> = {
  hy: {
    nav: { services: "Ծառայություններ", smart: "Խելացի տներ", about: "Մեր մասին", contact: "Կապ" },
    brand: "Էլեկտրիկ Հայաստան",
    badge: "Երևան և մարզեր",
    hero: {
      a: "Էլեկտրիկ ծառայություններ և",
      b: "խելացի տներ",
      c: "Հայաստանում",
      lead: "Պրոֆեսիոնալ էլեկտրամոնտաժ, սպասարկում և խելացի տան լուծումներ։ Աշխատում ենք արագ, անվտանգ և թափանցիկ գներով։",
    },
    cta: { primary: "Պատվիրել ծառայություն", secondary: "Դիտել ծառայությունները" },
    chips: ["Էլեկտրամոնտաժ", "Սպասարկում", "Խելացի տուն", "Անվտանգություն", "Լուսավորություն", "Էներգախնայողություն"],
    stats: [
      { value: "5+", label: "Տարվա փորձ" },
      { value: "100+", label: "Ավարտված աշխատանք" },
      { value: "24/7", label: "Աջակցություն" },
    ],
    services: {
      title: "Ինչ ենք անում",
      lead: "Ամբողջական էլեկտրական լուծումներ՝ նախագծումից մինչև գործարկում։",
      items: [
        { title: "Էլեկտրամոնտաժ", text: "Բնակելի, կոմերցիոն և արդյունաբերական օբյեկտների էլեկտրացանցերի մոնտաժ։" },
        { title: "Սպասարկում և վերանորոգում", text: "Ախտորոշում, անսարքությունների վերացում և կանոնավոր սպասարկում։" },
        { title: "Խելացի տներ", text: "Լուսավորության, ջեռուցման, մուտքի և անվտանգության ավտոմատացում։" },
        { title: "Անվտանգություն և պաշտպանություն", text: "Հրդեհաշիջում, պաշտպանիչ սարքեր և արտակարգ իրավիճակների կանխարգելում։" },
        { title: "Սարքավորումների տեղադրում", text: "Վահանակներ, հաշվիչներ, ավտոմատ անջատիչներ և լուսավորություն։" },
        { title: "Էներգաարդյունավետություն", text: "LED լուսավորություն, խելացի հաշվառում և էներգիայի օպտիմիզացիա։" },
      ],
    },
    smart: {
      title: "Խելացի տուն",
      lead: "Մեկ համակարգ, որը կառավարում է ամեն ինչ՝ հարմարավետության, անվտանգության և խնայողության համար։",
      items: [
        { title: "Կենտրոնացված կառավարում", text: "Կառավարեք լուսավորությունը, կլիման և սարքերը մեկ հավելվածից։" },
        { title: "Անվտանգություն 24/7", text: "Խելացի մուտք, տեսահսկում և ծանուցումներ իրական ժամանակում։" },
        { title: "Էներգախնայողություն", text: "Սցենարներ և ավտոմատացում, որոնք նվազեցնում են ծախսերը։" },
      ],
      tiles: ["Լուսավորություն", "Կլիմա", "Մուտք", "Տեսահսկում", "Սցենարներ", "Էներգիա"],
    },
    about: {
      title: "Ինչու մենք",
      lead: "Աշխատում ենք այնպես, որ դուք վստահ լինեք արդյունքին։",
      items: [
        { title: "Որակ", text: "Հայկական և միջազգային ստանդարտներին համապատասխան աշխատանք։" },
        { title: "Հուսալիություն", text: "Ժամանակին կատարում և թափանցիկ գնային քաղաքականություն։" },
        { title: "Անվտանգություն", text: "Անվտանգությունը առաջնահերթություն է ամեն նախագծում։" },
      ],
    },
    contact: {
      title: "Սկսեք ձեր նախագիծը",
      lead: "Թողեք հարցումը՝ և մենք կկապվենք ձեզ հետ 24 ժամվա ընթացքում։",
      call: "Զանգահարել",
      email: "Էլ. նամակ",
      note: "Կոնտակտային տվյալները կլրացվեն ավելի ուշ",
    },
    footer: { tag: "Էլեկտրիկ և խելացի տների լուծումներ Հայաստանում", rights: "Բոլոր իրավունքները պաշտպանված են։" },
  },

  ru: {
    nav: { services: "Услуги", smart: "Умный дом", about: "О нас", contact: "Контакты" },
    brand: "Электрик Армения",
    badge: "Ереван и регионы",
    hero: {
      a: "Электромонтаж и",
      b: "умный дом",
      c: "в Армении",
      lead: "Профессиональный электромонтаж, обслуживание и решения для умного дома. Работаем быстро, безопасно и с прозрачными ценами.",
    },
    cta: { primary: "Заказать услугу", secondary: "Смотреть услуги" },
    chips: ["Электромонтаж", "Обслуживание", "Умный дом", "Безопасность", "Освещение", "Энергоэффективность"],
    stats: [
      { value: "5+", label: "лет опыта" },
      { value: "100+", label: "выполненных работ" },
      { value: "24/7", label: "поддержка" },
    ],
    services: {
      title: "Что мы делаем",
      lead: "Полный спектр электромонтажных работ — от проекта до запуска.",
      items: [
        { title: "Электромонтаж", text: "Монтаж электрических сетей для жилых, коммерческих и промышленных объектов." },
        { title: "Обслуживание и ремонт", text: "Диагностика, устранение неисправностей и регулярное обслуживание." },
        { title: "Умный дом", text: "Автоматизация освещения, отопления, доступа и безопасности." },
        { title: "Безопасность и защита", text: "Пожарная защита, защитные устройства и предотвращение аварий." },
        { title: "Монтаж оборудования", text: "Щиты, счётчики, автоматические выключатели и освещение." },
        { title: "Энергоэффективность", text: "LED-освещение, умный учёт и оптимизация потребления." },
      ],
    },
    smart: {
      title: "Умный дом",
      lead: "Одна система, которая управляет всем — для комфорта, безопасности и экономии.",
      items: [
        { title: "Центральное управление", text: "Управляйте освещением, климатом и устройствами из одного приложения." },
        { title: "Безопасность 24/7", text: "Умный доступ, видеонаблюдение и уведомления в реальном времени." },
        { title: "Энергосбережение", text: "Сценарии и автоматизация, снижающие ваши расходы." },
      ],
      tiles: ["Освещение", "Климат", "Доступ", "Видеонаблюдение", "Сценарии", "Энергия"],
    },
    about: {
      title: "Почему мы",
      lead: "Мы работаем так, чтобы вы были уверены в результате.",
      items: [
        { title: "Качество", text: "Работы по армянским и международным стандартам." },
        { title: "Надёжность", text: "Соблюдение сроков и прозрачные цены." },
        { title: "Безопасность", text: "Безопасность — приоритет в каждом проекте." },
      ],
    },
    contact: {
      title: "Начните свой проект",
      lead: "Оставьте заявку — мы свяжемся с вами в течение 24 часов.",
      call: "Позвонить",
      email: "Email",
      note: "Контактные данные будут добавлены позже",
    },
    footer: { tag: "Электромонтаж и умные дома в Армении", rights: "Все права защищены." },
  },

  en: {
    nav: { services: "Services", smart: "Smart Home", about: "About", contact: "Contact" },
    brand: "Electric Armenia",
    badge: "Yerevan & regions",
    hero: {
      a: "Electrical services and",
      b: "smart homes",
      c: "in Armenia",
      lead: "Professional electrical installation, maintenance and smart home solutions. Fast, safe and transparently priced.",
    },
    cta: { primary: "Request a service", secondary: "View services" },
    chips: ["Wiring", "Maintenance", "Smart Home", "Safety", "Lighting", "Efficiency"],
    stats: [
      { value: "5+", label: "years of experience" },
      { value: "100+", label: "completed projects" },
      { value: "24/7", label: "support" },
    ],
    services: {
      title: "What we do",
      lead: "End-to-end electrical work — from design to commissioning.",
      items: [
        { title: "Wiring & installation", text: "Electrical networks for residential, commercial and industrial sites." },
        { title: "Maintenance & repair", text: "Diagnostics, fault fixing and scheduled servicing." },
        { title: "Smart home", text: "Automation of lighting, heating, access and security." },
        { title: "Safety & protection", text: "Fire protection, protective devices and emergency prevention." },
        { title: "Equipment installation", text: "Panels, meters, circuit breakers and lighting." },
        { title: "Energy efficiency", text: "LED lighting, smart metering and consumption optimization." },
      ],
    },
    smart: {
      title: "Smart home",
      lead: "One system that runs everything — for comfort, security and savings.",
      items: [
        { title: "Central control", text: "Manage lighting, climate and devices from a single app." },
        { title: "24/7 security", text: "Smart access, video surveillance and real-time alerts." },
        { title: "Energy savings", text: "Scenes and automation that cut your bills." },
      ],
      tiles: ["Lighting", "Climate", "Access", "CCTV", "Scenes", "Energy"],
    },
    about: {
      title: "Why us",
      lead: "We work so you can be confident in the result.",
      items: [
        { title: "Quality", text: "Work to Armenian and international standards." },
        { title: "Reliability", text: "On-time delivery and transparent pricing." },
        { title: "Safety", text: "Safety is the priority in every project." },
      ],
    },
    contact: {
      title: "Start your project",
      lead: "Leave a request — we'll get back to you within 24 hours.",
      call: "Call",
      email: "Email",
      note: "Contact details will be added later",
    },
    footer: { tag: "Electrical & smart home solutions in Armenia", rights: "All rights reserved." },
  },
};
