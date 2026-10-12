export type Lang = "hy" | "ru" | "en";

export const defaultLang: Lang = "hy";
export const locales: Lang[] = ["hy", "ru", "en"];

export const localeShort: Record<Lang, string> = { hy: "ՀԱՅ", ru: "РУС", en: "ENG" };
export const localeName: Record<Lang, string> = {
  hy: "Հայերեն",
  ru: "Русский",
  en: "English",
};
export const localePath: Record<Lang, string> = { hy: "/", ru: "/ru", en: "/en" };

interface Dict {
  nav: { services: string; smart: string; standards: string; contact: string };
  brand: string;
  hero: {
    headline: string;
    lead: string;
    region: string;
    ctaPrimary: string;
    ctaSecondary: string;
    diagram: { source: string; meter: string; panel: string; circuits: string[] };
  };
  schedule: {
    title: string;
    lead: string;
    colService: string;
    colScope: string;
    items: { name: string; scope: string }[];
  };
  smart: { title: string; lead: string; items: string[] };
  standards: { title: string; lead: string; items: string[] };
  contact: {
    title: string;
    lead: string;
    callLabel: string;
    emailLabel: string;
    email: string;
    phoneLabel: string;
    note: string;
  };
  footer: { tag: string; rights: string };
}

export const ui: Record<Lang, Dict> = {
  hy: {
    nav: { services: "Ծառայություններ", smart: "Խելացի տներ", standards: "Ինչպես ենք աշխատում", contact: "Կապ" },
    brand: "Էլեկտրիկ Հայաստան",
    hero: {
      headline: "Էլեկտրամոնտաժ և խելացի տներ Հայաստանում",
      lead: "Նախագծում, մոնտաժ, սպասարկում և ավտոմատացում՝ ըստ ստանդարտների և թափանցիկ գնով։",
      region: "Երևան և մարզեր",
      ctaPrimary: "Զանգահարել",
      ctaSecondary: "Ծառայությունների ցանկ",
      diagram: {
        source: "230 Վ",
        meter: "Հաշվիչ",
        panel: "Վահան",
        circuits: ["Լուսավորություն", "Խոհանոց", "Կլիմա", "Խելացի հանգույց", "Անվտանգություն"],
      },
    },
    schedule: {
      title: "Ծառայությունների ցանկ",
      lead: "Ինչ ենք անում և ինչ է ներառված յուրաքանչյուր աշխատանքում։",
      colService: "Ծառայություն",
      colScope: "Ինչ է ներառված",
      items: [
        { name: "Էլեկտրամոնտաժ", scope: "Ցանցերի նախագծում, մալուխի անցկացում, վահանների հավաքում" },
        { name: "Սպասարկում և վերանորոգում", scope: "Ախտորոշում, անսարքությունների վերացում, կանոնավոր ստուգում" },
        { name: "Խելացի տուն", scope: "Լուսավորության, կլիմայի, մուտքի և անվտանգության ավտոմատացում" },
        { name: "Անվտանգություն", scope: "Պաշտպանիչ սարքեր, հրդեհաշիջում, արտակարգ իրավիճակների կանխարգելում" },
        { name: "Սարքավորումների տեղադրում", scope: "Հաշվիչներ, ավտոմատ անջատիչներ, լուսավորություն" },
        { name: "Էներգաարդյունավետություն", scope: "LED լուսավորություն, խելացի հաշվառում, էներգիայի օպտիմիզացիա" },
      ],
    },
    smart: {
      title: "Խելացի տուն",
      lead: "Մեկ համակարգ՝ հարմարավետության, անվտանգության և խնայողության համար։",
      items: [
        "Լուսավորության սցենարներ",
        "Կլիմայի կառավարում",
        "Մուտքի վերահսկում",
        "Տեսահսկում",
        "Ահազանգում",
        "Էներգիայի հաշվառում",
      ],
    },
    standards: {
      title: "Ինչպես ենք աշխատում",
      lead: "Կանոններ, որոնք չենք բաց թողնում ոչ մի նախագծում։",
      items: [
        "Հայկական և միջազգային ստանդարտներ",
        "Թափանցիկ գնային առաջարկ՝ մինչև աշխատանքի սկիզբը",
        "Ժամկետների պահպանում",
        "Մաքուր և կարգավորված ավարտ",
        "Երաշխիք կատարված աշխատանքի համար",
        "Անվտանգությունը՝ առաջին տեղում",
      ],
    },
    contact: {
      title: "Սկսենք աշխատանքը",
      lead: "Զանգահարեք կամ գրեք՝ կքննարկենք օբյեկտը և կտանք գնահատական։",
      callLabel: "Զանգահարել",
      emailLabel: "Գրել նամակ",
      email: "info@electricarmenia.am",
      phoneLabel: "+374 00 000 000",
      note: "Կոնտակտային տվյալները կլրացվեն ավելի ուշ",
    },
    footer: { tag: "Էլեկտրիկ և խելացի տներ Հայաստանում", rights: "Բոլոր իրավունքները պաշտպանված են։" },
  },

  ru: {
    nav: { services: "Услуги", smart: "Умный дом", standards: "Как мы работаем", contact: "Контакты" },
    brand: "Электрик Армения",
    hero: {
      headline: "Электромонтаж и умный дом в Армении",
      lead: "Проектирование, монтаж, обслуживание и автоматизация — по стандартам и с прозрачной ценой.",
      region: "Ереван и регионы",
      ctaPrimary: "Позвонить",
      ctaSecondary: "Список услуг",
      diagram: {
        source: "230 В",
        meter: "Счётчик",
        panel: "Щит",
        circuits: ["Освещение", "Кухня", "Климат", "Умный узел", "Безопасность"],
      },
    },
    schedule: {
      title: "Список услуг",
      lead: "Что мы делаем и что входит в каждую работу.",
      colService: "Услуга",
      colScope: "Что входит",
      items: [
        { name: "Электромонтаж", scope: "Проект сетей, прокладка кабеля, сборка щитов" },
        { name: "Обслуживание и ремонт", scope: "Диагностика, устранение неисправностей, регулярная проверка" },
        { name: "Умный дом", scope: "Автоматизация освещения, климата, доступа и безопасности" },
        { name: "Безопасность", scope: "Защитные устройства, пожарная защита, предотвращение аварий" },
        { name: "Монтаж оборудования", scope: "Счётчики, автоматические выключатели, освещение" },
        { name: "Энергоэффективность", scope: "LED-освещение, умный учёт, оптимизация потребления" },
      ],
    },
    smart: {
      title: "Умный дом",
      lead: "Одна система — для комфорта, безопасности и экономии.",
      items: [
        "Сценарии освещения",
        "Управление климатом",
        "Контроль доступа",
        "Видеонаблюдение",
        "Оповещения",
        "Учёт энергии",
      ],
    },
    standards: {
      title: "Как мы работаем",
      lead: "Правила, которые мы не пропускаем ни в одном проекте.",
      items: [
        "Армянские и международные стандарты",
        "Прозрачная смета до начала работ",
        "Соблюдение сроков",
        "Чистое и аккуратное завершение",
        "Гарантия на выполненные работы",
        "Безопасность — на первом месте",
      ],
    },
    contact: {
      title: "Начнём работу",
      lead: "Позвоните или напишите — обсудим объект и дадим оценку.",
      callLabel: "Позвонить",
      emailLabel: "Написать письмо",
      email: "info@electricarmenia.am",
      phoneLabel: "+374 00 000 000",
      note: "Контактные данные будут добавлены позже",
    },
    footer: { tag: "Электромонтаж и умные дома в Армении", rights: "Все права защищены." },
  },

  en: {
    nav: { services: "Services", smart: "Smart home", standards: "How we work", contact: "Contact" },
    brand: "Electric Armenia",
    hero: {
      headline: "Electrical work and smart homes in Armenia",
      lead: "Design, installation, maintenance and automation — to standard, with transparent pricing.",
      region: "Yerevan and regions",
      ctaPrimary: "Call us",
      ctaSecondary: "Service list",
      diagram: {
        source: "230 V",
        meter: "Meter",
        panel: "Panel",
        circuits: ["Lighting", "Kitchen", "Climate", "Smart hub", "Security"],
      },
    },
    schedule: {
      title: "Service schedule",
      lead: "What we do, and what each job includes.",
      colService: "Service",
      colScope: "Scope",
      items: [
        { name: "Wiring & installation", scope: "Network design, cable runs, panel assembly" },
        { name: "Maintenance & repair", scope: "Diagnostics, fault fixing, scheduled checks" },
        { name: "Smart home", scope: "Automation of lighting, climate, access and security" },
        { name: "Safety", scope: "Protective devices, fire protection, emergency prevention" },
        { name: "Equipment installation", scope: "Meters, circuit breakers, lighting" },
        { name: "Energy efficiency", scope: "LED lighting, smart metering, consumption optimization" },
      ],
    },
    smart: {
      title: "Smart home",
      lead: "One system — for comfort, security and savings.",
      items: ["Lighting scenes", "Climate control", "Access control", "Video surveillance", "Alerts", "Energy metering"],
    },
    standards: {
      title: "How we work",
      lead: "Rules we don't skip on any project.",
      items: [
        "Armenian and international standards",
        "Transparent estimate before work starts",
        "On-time delivery",
        "Clean, tidy finish",
        "Warranty on completed work",
        "Safety first",
      ],
    },
    contact: {
      title: "Let's start",
      lead: "Call or write — we'll review your site and give an estimate.",
      callLabel: "Call us",
      emailLabel: "Send an email",
      email: "info@electricarmenia.am",
      phoneLabel: "+374 00 000 000",
      note: "Contact details will be added later",
    },
    footer: { tag: "Electrical & smart home work in Armenia", rights: "All rights reserved." },
  },
};
