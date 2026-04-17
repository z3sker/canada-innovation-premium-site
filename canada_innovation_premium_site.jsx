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

function VisualShell({ eyebrow, title, children, className = '' }) {
  return (
    <div className={`rounded-[30px] border border-white/12 bg-black/25 p-5 backdrop-blur-2xl ${className}`}>
      <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/42">{eyebrow}</div>
      <div className="mt-3 text-lg font-semibold tracking-tight text-white">{title}</div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function MetricTag({ label, value }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/[0.05] px-4 py-3">
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">{label}</div>
      <div className="mt-2 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}

function EcosystemOverviewVisual() {
  const stages = [
    { step: '01', title: 'Исследования', text: 'университеты и R&D-центры' },
    { step: '02', title: 'Инкубация', text: 'инкубаторы и первые пилоты' },
    { step: '03', title: 'Ранний капитал', text: 'ангелы и pre-seed чек' },
    { step: '04', title: 'Масштабирование', text: 'VC, акселераторы, growth' },
    { step: '05', title: 'Глобальный рынок', text: 'экспорт и международные сети' },
  ];

  return (
    <VisualShell eyebrow="ecosystem flow" title="Как канадская экосистема проводит стартап от науки к рынку">
      <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-4">
        <div className="grid gap-3 lg:grid-cols-5">
          {stages.map((stage, idx) => (
            <div key={stage.step} className="relative">
              <motion.div
                className="rounded-[24px] border border-white/10 bg-black/28 p-4 backdrop-blur-xl"
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.08, duration: 0.35 }}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/42">{stage.step}</div>
                <div className="mt-3 text-lg font-semibold text-white">{stage.title}</div>
                <div className="mt-2 text-sm leading-6 text-white/64">{stage.text}</div>
              </motion.div>
              {idx < stages.length - 1 && (
                <div className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-gradient-to-r from-white/0 via-white/28 to-white/0 lg:block" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">core logic</div>
          <div className="mt-2 text-sm leading-6 text-white/68">
            Сила Канады не в одном фонде или институте, а в связанной цепочке: таланты, инкубаторы, капитал, кластеры и экспортные механизмы.
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <MetricTag label="talent base" value="университеты + R&D" />
        <MetricTag label="capital stack" value="ангелы + VC + grants" />
        <MetricTag label="market reach" value="кластеры + export" />
      </div>
    </VisualShell>
  );
}

function VentureCapitalVisual() {
  const bars = [
    { label: 'Seed', value: 28, color: 'from-cyan-300 to-sky-400', note: 'ранние чеки' },
    { label: 'Series A', value: 46, color: 'from-emerald-300 to-teal-400', note: 'первые фонды роста' },
    { label: 'Series B', value: 68, color: 'from-lime-300 to-emerald-400', note: 'масштабирование' },
    { label: 'Growth', value: 88, color: 'from-white to-lime-200', note: 'поздняя стадия' },
  ];
  const levels = ['100', '75', '50', '25', '0'];

  return (
    <VisualShell eyebrow="capital depth" title="Глубина финансирования растёт по мере взросления стартапа">
      <div className="grid gap-4">
        <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-4">
          <div className="grid gap-4 rounded-[22px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(163,230,53,0.16),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-4 lg:grid-cols-[42px_minmax(0,1fr)]">
            <div className="hidden lg:flex lg:h-64 lg:flex-col lg:justify-between">
              {levels.map((level) => (
                <div key={level} className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/36">
                  {level}
                </div>
              ))}
            </div>

            <div className="relative h-64">
              <div className="absolute inset-0 flex flex-col justify-between">
                {levels.map((level) => (
                  <div key={level} className="border-t border-white/8" />
                ))}
              </div>

              <div className="absolute inset-0 flex items-end justify-between gap-4 px-1 pt-6">
                {bars.map((bar, idx) => (
                  <div key={bar.label} className="flex h-full flex-1 flex-col justify-end">
                    <div className="mb-3 text-center">
                      <div className="text-sm font-semibold text-white">{bar.value}</div>
                      <div className="text-[11px] text-white/46">{bar.note}</div>
                    </div>
                    <motion.div
                      className={`w-full rounded-t-[22px] bg-gradient-to-t ${bar.color} shadow-[0_20px_60px_rgba(163,230,53,0.18)]`}
                      style={{ height: `${bar.value}%` }}
                      initial={{ height: 0, opacity: 0.45 }}
                      animate={{ height: `${bar.value}%`, opacity: 1 }}
                      transition={{ delay: idx * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">{bar.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <MetricTag label="anchor" value="BDC Capital" />
          <MetricTag label="growth funds" value="Inovia / late-stage" />
          <MetricTag label="2025 pace" value="$7.95B+" />
        </div>
      </div>
    </VisualShell>
  );
}

function ClusterNetworkVisual() {
  const clusters = [
    { region: 'Montréal', sector: 'Scale AI', accent: 'bg-cyan-300' },
    { region: 'Vancouver', sector: 'Digital Technology', accent: 'bg-sky-300' },
    { region: 'Ontario', sector: 'Advanced Manufacturing', accent: 'bg-violet-300' },
    { region: 'Prairies', sector: 'Protein Industries', accent: 'bg-emerald-300' },
    { region: 'Atlantic', sector: 'Ocean Cluster', accent: 'bg-pink-300' },
  ];

  return (
    <VisualShell eyebrow="cluster matrix" title="Пять кластеров питают единый экспортный контур">
      <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-4">
        <div className="grid gap-4 rounded-[22px] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-4">
          <div className="grid gap-3">
            {clusters.map((cluster, idx) => (
              <motion.div
                key={cluster.region}
                className="grid items-center gap-3 rounded-[20px] border border-white/10 bg-black/26 px-4 py-3 backdrop-blur-xl sm:grid-cols-[minmax(0,1fr)_24px_180px]"
                initial={{ x: 12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.06, duration: 0.3 }}
              >
                <div className="flex items-center gap-3">
                  <span className={`h-2.5 w-2.5 rounded-full ${cluster.accent}`} />
                  <div>
                    <div className="text-base font-semibold text-white">{cluster.region}</div>
                    <div className="text-sm text-white/58">{cluster.sector}</div>
                  </div>
                </div>
                <div className="hidden text-center text-white/34 sm:block">→</div>
                <div className="rounded-[16px] border border-white/10 bg-white/[0.045] px-3 py-2 text-sm text-white/66">
                  Готовность к экспорту
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-[22px] border border-white/10 bg-white/[0.045] p-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">export layer</div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[18px] border border-white/10 bg-black/24 px-4 py-3">
                <div className="text-sm font-semibold text-white">CanExport</div>
                <div className="mt-1 text-sm leading-6 text-white/58">покрывает часть затрат на выход на новые рынки</div>
              </div>
              <div className="rounded-[18px] border border-white/10 bg-black/24 px-4 py-3">
                <div className="text-sm font-semibold text-white">Trade Commissioner Service</div>
                <div className="mt-1 text-sm leading-6 text-white/58">открывает доступ к сетям в США, Европе и Азии</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function EventSignalVisual() {
  const events = [
    { city: 'Toronto', name: 'Elevate', tone: 'рост сети инвесторов' },
    { city: 'Montréal', name: 'Startupfest', tone: 'глобальная витрина' },
    { city: 'Ottawa', name: 'SaaS North', tone: 'B2B SaaS фокус' },
  ];

  return (
    <VisualShell eyebrow="event signal" title="Конференции создают плотность внимания вокруг хаба">
      <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-4">
        <div className="relative overflow-hidden rounded-[22px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.15),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] px-4 py-5">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
          <div className="space-y-4">
            {events.map((event, idx) => (
              <motion.div
                key={event.name}
                className="relative ml-6 rounded-[22px] border border-white/10 bg-black/28 p-4 backdrop-blur-xl"
                initial={{ x: 14, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.35 }}
              >
                <div className="absolute -left-[29px] top-5 h-4 w-4 rounded-full border border-white/20 bg-white shadow-[0_0_18px_rgba(255,255,255,0.45)]" />
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/42">{event.city}</div>
                <div className="mt-2 text-lg font-semibold text-white">{event.name}</div>
                <div className="mt-2 text-sm leading-6 text-white/62">{event.tone}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function SlideDetails({ slide, hasVisual }) {
  return (
    <>
      {slide.stats && (
        <div className={`grid gap-4 ${hasVisual ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {slide.stats.map((item) => (
            <StatPill key={item.value + item.text} value={item.value} text={item.text} />
          ))}
        </div>
      )}

      {slide.cards && (
        <div className={`grid gap-4 md:gap-5 ${hasVisual ? 'xl:grid-cols-1' : 'lg:grid-cols-2'}`}>
          {slide.cards.map((card) => (
            <InfoCard key={card.heading} {...card} />
          ))}
        </div>
      )}

      {slide.bullets && (
        <div className={`grid gap-3 ${hasVisual ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
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
    </>
  );
}

function SlideVisual({ slide }) {
  switch (slide.id) {
    case '01':
      return <EcosystemOverviewVisual />;
    case '05':
      return <VentureCapitalVisual />;
    case '07':
      return <ClusterNetworkVisual />;
    case '09':
      return <EventSignalVisual />;
    default:
      return null;
  }
}

function SlideContent({ slide, index, total }) {
  const Icon = slide.icon;
  const hasVisual = ['01', '05', '07', '09'].includes(slide.id);
  const visual = hasVisual ? <SlideVisual slide={slide} /> : null;

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
          <div className={`grid gap-5 ${hasVisual ? 'xl:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)]' : ''}`}>
            <div className="grid gap-4">
              <SlideDetails slide={slide} hasVisual={hasVisual} />
            </div>

            {hasVisual && (
              <div className="xl:pl-2">
                {visual}
              </div>
            )}
          </div>
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
