import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Rocket,
  Landmark,
  Cpu,
  Banknote,
  Globe2,
  Trophy,
  Mic2,
  Building2,
  Factory,
  Briefcase,
} from 'lucide-react';

const slides = [
  {
    id: '01',
    label: 'инновационный обзор · канада',
    title: 'Инновационная экосистема Канады',
    subtitle:
      'Глобальный лидер в области технологий, исследований и предпринимательства. Обзор ключевых драйверов национального роста.',
    icon: Sparkles,
    accent: 'from-violet-500/35 via-fuchsia-500/20 to-cyan-400/25',
    stats: [
      { value: '12', text: 'структурированных экранов' },
      { value: '5', text: 'глобальных инновационных кластеров' },
      { value: '$7.95 млрд+', text: 'венчурных инвестиций в 2025' },
    ],
  },
  {
    id: '02',
    label: 'университетская среда',
    title: 'Инкубаторы: фундамент для ранних стадий',
    subtitle:
      'Университетские инкубаторы дают командам пространство, наставничество и быстрый путь от идеи к компании.',
    icon: Rocket,
    accent: 'from-sky-500/30 via-blue-500/20 to-cyan-300/20',
    cards: [
      {
        eyebrow: 'флагман',
        heading: 'Velocity · Университет Ватерлоо',
        text: 'Один из самых продуктивных университетских инкубаторов в мире. Помогает студентам и выпускникам превращать идеи в коммерческие продукты.',
      },
      {
        eyebrow: 'эффект',
        heading: 'Реальный рычаг роста',
        text: 'Компании, прошедшие через Velocity, привлекли миллиарды долларов инвестиций и создали тысячи рабочих мест.',
      },
    ],
  },
  {
    id: '03',
    label: 'ранний капитал',
    title: 'Бизнес-ангелы: деньги, связи и экспертиза',
    subtitle:
      'Ангельские сети закрывают критический разрыв на самой ранней стадии и сильно повышают шансы стартапа выжить.',
    icon: Landmark,
    accent: 'from-amber-400/30 via-orange-500/20 to-rose-400/20',
    stats: [
      { value: '60+', text: 'организованных групп ангелов' },
      { value: 'Anges Québec', text: 'крупнейшая сеть на востоке страны' },
      { value: 'Maple Leaf Angels', text: 'сильный технологический фокус в Торонто' },
    ],
    note: 'Ангелы дают не только капитал, но и доверие рынка, отраслевые контакты и помощь в первых сделках.',
  },
  {
    id: '04',
    label: 'программы роста',
    title: 'Акселераторы ускоряют выход на глобальные рынки',
    subtitle:
      'Канадские акселераторы делают упор не просто на обучение, а на быстрый рост и подготовку к крупным раундам.',
    icon: Cpu,
    accent: 'from-emerald-400/30 via-teal-500/20 to-cyan-400/20',
    cards: [
      {
        eyebrow: 'deep tech & science',
        heading: 'Creative Destruction Lab',
        text: 'Уникальная модель наставничества для наукоёмких стартапов: жёсткие цели, сильные менторы и масштабирование до мирового уровня.',
      },
      {
        eyebrow: 'it & software',
        heading: 'FounderFuel',
        text: 'Ведущий акселератор Монреаля с сильной менторской базой и фокусом на ИТ-решениях и программном обеспечении.',
      },
    ],
  },
  {
    id: '05',
    label: 'венчурный капитал',
    title: 'VC-рынок формирует канадских «единорогов»',
    subtitle:
      'Зрелый рынок капитала даёт топливо компаниям, которые уже вышли из ранней стадии и готовы к масштабированию.',
    icon: Banknote,
    accent: 'from-lime-400/25 via-emerald-500/20 to-green-400/25',
    stats: [
      { value: '$7.95 млрд+', text: 'объём инвестиций в 2025 году' },
      { value: 'BDC Capital', text: 'крупнейший государственный игрок' },
      { value: 'Inovia Capital', text: 'фонд роста глобальных чемпионов' },
    ],
    note: 'Госкапитал и частные фонды вместе формируют плотную систему финансирования от seed до поздних стадий.',
  },
  {
    id: '06',
    label: 'неразводняющее финансирование',
    title: 'Гранты и налоговые льготы снижают риск инноваций',
    subtitle:
      'Одна из самых щедрых систем поддержки R&D помогает технологическим компаниям проводить исследования без сильного размывания доли.',
    icon: Landmark,
    accent: 'from-cyan-400/25 via-sky-500/20 to-indigo-500/20',
    cards: [
      {
        eyebrow: 'прямое финансирование',
        heading: 'NRC IRAP',
        text: 'Программа промышленной помощи, которая может покрывать до 80% затрат на R&D и наём сильных технических специалистов.',
      },
      {
        eyebrow: 'налоговые льготы',
        heading: 'SR&ED',
        text: 'Крупнейшая программа налоговых кредитов в Канаде, возвращающая значительную часть затрат на исследования и разработки.',
      },
    ],
  },
  {
    id: '07',
    label: 'масштабирование и экспорт',
    title: 'Кластеры и экспортные программы выводят стартапы наружу',
    subtitle:
      'Связка отраслевых кластеров и экспортной поддержки помогает инновациям не застревать внутри локального рынка.',
    icon: Globe2,
    accent: 'from-indigo-500/30 via-violet-500/20 to-blue-400/20',
    bullets: [
      'Scale AI · Монреаль',
      'Digital Technology · Ванкувер',
      'Advanced Manufacturing · Онтарио',
      'Protein Industries · Прерии',
      'Ocean Cluster · Атлантика',
      'CanExport покрывает часть расходов на выход на новые рынки',
      'Trade Commissioner Service даёт доступ к сетям в США, Европе и Азии',
    ],
  },
  {
    id: '08',
    label: 'видимость и валидация',
    title: 'Конкурсы и питч-сессии работают как трамплин',
    subtitle:
      'Публичные выступления дают не только призовые деньги, но и PR, узнаваемость и важный сигнал для инвесторов.',
    icon: Trophy,
    accent: 'from-pink-400/25 via-rose-400/20 to-orange-400/20',
    cards: [
      {
        eyebrow: 'британская колумбия',
        heading: 'New Ventures BC',
        text: 'Крупный конкурс с сильным призовым фондом и широкой аудиторией, который повышает видимость стартапов.',
      },
      {
        eyebrow: 'университетская витрина',
        heading: 'UBC Investor Showcase',
        text: 'Площадка для презентации лучших разработок университета перед реальными инвесторами и экосистемными игроками.',
      },
    ],
  },
  {
    id: '09',
    label: 'событийная инфраструктура',
    title: 'Конференции формируют глобальный имидж тех-хаба',
    subtitle:
      'Крупные форумы притягивают инвесторов, фаундеров и экспертов со всего мира и усиливают бренд страны как открытого инновационного центра.',
    icon: Mic2,
    accent: 'from-fuchsia-500/30 via-purple-500/20 to-indigo-500/20',
    stats: [
      { value: 'Toronto', text: 'Elevate — крупный фестиваль технологий и инноваций' },
      { value: 'Montréal', text: 'Startupfest — сильный питч-формат и глобальные спикеры' },
      { value: 'Ottawa', text: 'SaaS North — фокус на B2B SaaS и масштабировании' },
    ],
  },
  {
    id: '10',
    label: 'институты развития',
    title: 'Инфраструктурные организации связывают науку и рынок',
    subtitle:
      'Координационные центры помогают коммерциализировать исследования, ускоряют контакты и повышают плотность взаимодействия внутри экосистемы.',
    icon: Building2,
    accent: 'from-slate-400/30 via-zinc-500/20 to-sky-400/20',
    cards: [
      {
        eyebrow: 'торонто',
        heading: 'MaRS Discovery District',
        text: 'Крупный городской инновационный хаб, который объединяет стартапы, корпорации и исследовательскую среду.',
      },
      {
        eyebrow: 'регион ватерлоо',
        heading: 'Communitech',
        text: 'Сильный центр поддержки технологий и один из катализаторов знаменитого кластера Ватерлоо.',
      },
    ],
  },
  {
    id: '11',
    label: 'физическая среда',
    title: 'Технопарки и фаблабы создают пространство для прорыва',
    subtitle:
      'Инновации ускоряются там, где рядом есть таланты, оборудование и плотная повседневная коммуникация.',
    icon: Factory,
    accent: 'from-teal-400/30 via-emerald-500/20 to-lime-400/20',
    cards: [
      {
        eyebrow: 'промышленные кластеры',
        heading: 'Kanata North · Оттава',
        text: 'Крупнейший технопарк Канады, где работают более 21 000 специалистов. Высокая концентрация экспертизы создаёт мощный эффект масштаба.',
      },
      {
        eyebrow: 'прототипирование',
        heading: 'Fab Lab Montréal / MakerLabs',
        text: 'Открытые лаборатории с 3D-принтерами, лазерной резкой и ЧПУ, которые делают hardware-разработку доступнее и быстрее.',
      },
    ],
  },
  {
    id: '12',
    label: 'зрелость экосистемы',
    title: 'Венчурные студии и ассоциации закрепляют системность',
    subtitle:
      'Финальный слой экосистемы — это механизмы серийного создания компаний и коллективной защиты интересов индустрии.',
    icon: Briefcase,
    accent: 'from-violet-500/30 via-indigo-500/20 to-slate-400/20',
    cards: [
      {
        eyebrow: 'создание бизнеса',
        heading: 'Венчурные студии',
        text: 'Формат, где стартапы запускаются совместно со студиями и корпорациями, что повышает вероятность сильного старта. Пример: Highline Beta.',
      },
      {
        eyebrow: 'защита интересов',
        heading: 'CVCA и TECHNATION',
        text: 'Профессиональные объединения, которые влияют на правила игры и помогают технологическому сектору говорить с государством одним голосом.',
      },
    ],
  },
];

function useKeyboardNavigation(total, index, setIndex) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        setIndex((prev) => (prev + 1) % total);
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setIndex((prev) => (prev - 1 + total) % total);
      }
      if (e.key === 'Home') {
        e.preventDefault();
        setIndex(0);
      }
      if (e.key === 'End') {
        e.preventDefault();
        setIndex(total - 1);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [total, index, setIndex]);
}

function GradientOrb({ className = '' }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-70 ${className}`}
      style={{
        background:
          'radial-gradient(circle at center, rgba(255,255,255,0.32) 0%, rgba(122,92,255,0.28) 22%, rgba(36,198,220,0.16) 48%, rgba(0,0,0,0) 72%)',
      }}
    />
  );
}

function NavDot({ active, onClick, number }) {
  return (
    <button
      onClick={onClick}
      className={`relative h-10 w-10 rounded-full border text-xs transition-all duration-300 ${
        active
          ? 'border-white/40 bg-white text-neutral-950 shadow-[0_8px_30px_rgba(255,255,255,0.18)]'
          : 'border-white/12 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
      }`}
      aria-label={`Перейти к экрану ${number}`}
    >
      {number}
    </button>
  );
}

function StatPill({ value, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/6 px-5 py-4 backdrop-blur-xl">
      <div className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{value}</div>
      <div className="mt-1 text-sm text-white/62">{text}</div>
    </div>
  );
}

function InfoCard({ eyebrow, heading, text }) {
  return (
    <div className="group rounded-[28px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.075] hover:shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/48">{eyebrow}</div>
      <div className="mt-4 text-xl font-semibold leading-tight text-white md:text-2xl">{heading}</div>
      <div className="mt-3 max-w-[48ch] text-[15px] leading-7 text-white/68 md:text-base">{text}</div>
    </div>
  );
}

function SlideContent({ slide, index, total }) {
  const Icon = slide.icon;

  return (
    <motion.div
      key={slide.id}
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -18, scale: 0.985 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-full w-full overflow-hidden rounded-[34px] border border-white/10 bg-[#09090d]/80 shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.accent}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.09),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:72px_72px]" />

      <GradientOrb className="-left-12 top-10 h-52 w-52" />
      <GradientOrb className="right-0 top-1/3 h-72 w-72" />
      <GradientOrb className="bottom-0 left-1/4 h-60 w-60" />

      <div className="relative flex h-full flex-col px-6 py-6 md:px-10 md:py-8 lg:px-14 lg:py-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/52">{slide.label}</div>
            <div className="mt-3 max-w-4xl text-3xl font-semibold leading-[1.03] tracking-tight text-white md:text-5xl lg:text-6xl">
              {slide.title}
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.06] px-4 py-3 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-neutral-950">
              <Icon size={20} strokeWidth={2.2} />
            </div>
            <div className="hidden sm:block">
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">page</div>
              <div className="mt-0.5 text-sm font-medium text-white">{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>
            </div>
          </div>
        </div>

        <div className="mt-6 max-w-3xl text-base leading-8 text-white/72 md:mt-8 md:text-lg">
          {slide.subtitle}
        </div>

        <div className="mt-8 flex-1 min-h-0">
          {slide.stats && (
            <div className="grid gap-4 md:grid-cols-3">
              {slide.stats.map((item) => (
                <StatPill key={item.value + item.text} value={item.value} text={item.text} />
              ))}
            </div>
          )}

          {slide.cards && (
            <div className="grid gap-4 md:gap-5 lg:grid-cols-2">
              {slide.cards.map((card) => (
                <InfoCard key={card.heading} {...card} />
              ))}
            </div>
          )}

          {slide.bullets && (
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {slide.bullets.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-white/10 bg-white/[0.055] px-5 py-4 text-[15px] leading-7 text-white/76 backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {slide.note && (
          <div className="mt-6 rounded-[26px] border border-white/12 bg-black/20 px-5 py-4 text-sm leading-7 text-white/66 backdrop-blur-xl md:text-[15px]">
            {slide.note}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function CanadaInnovationPremiumSite() {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const current = slides[index];

  useKeyboardNavigation(total, index, setIndex);

  useEffect(() => {
    const id = 'canada-premium-fonts';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
      :root {
        --bg: #05060a;
      }
      html, body, #root {
        background: var(--bg);
      }
      body {
        font-family: 'Outfit', system-ui, sans-serif;
      }
      .font-mono {
        font-family: 'JetBrains Mono', monospace !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const progress = useMemo(() => ((index + 1) / total) * 100, [index, total]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#05060a] text-white">
      <div className="relative min-h-screen px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(102,126,234,0.12),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(118,75,162,0.18),transparent_24%),radial-gradient(circle_at_50%_85%,rgba(34,211,238,0.12),transparent_28%)]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1600px] flex-col">
          <div className="mb-4 flex items-center justify-between px-1 md:mb-5">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">outfit / jetbrains mono</div>
              <div className="mt-2 text-sm text-white/55 md:text-base">Премиальный веб-режим с клавиатурной навигацией</div>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <button
                onClick={() => setIndex((prev) => (prev - 1 + total) % total)}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] text-white/80 backdrop-blur-xl transition hover:bg-white/[0.09]"
                aria-label="Предыдущий экран"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setIndex((prev) => (prev + 1) % total)}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] text-white/80 backdrop-blur-xl transition hover:bg-white/[0.09]"
                aria-label="Следующий экран"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative flex-1">
            <AnimatePresence mode="wait">
              <SlideContent slide={current} index={index} total={total} key={current.id} />
            </AnimatePresence>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center md:bottom-7">
            <div className="pointer-events-auto w-[min(96vw,960px)] rounded-[30px] border border-white/10 bg-black/35 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <div className="mb-3 h-[3px] w-full overflow-hidden rounded-full bg-white/8">
                <motion.div
                  className="h-full rounded-full bg-white"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.35 }}
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
                {slides.map((slide, i) => (
                  <NavDot
                    key={slide.id}
                    number={i + 1}
                    active={i === index}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
