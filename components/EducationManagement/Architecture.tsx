import {
  Eye,
  HardDrive,
  Lock,
  Radio,
  Scale,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Reveal from "./Reveal";

const technicalTraits = [
  { icon: ShieldCheck, label: "دسترسی امن برای اولیا و فراگیران" },
  { icon: Scale, label: "مقیاس‌پذیر برای چند شعبه" },
  { icon: Lock, label: "کنترل نقش آموزشی و اداری" },
  { icon: Radio, label: "رویدادهای شهریه و حضور" },
  { icon: Eye, label: "نظارت بر عملیات ترم" },
  { icon: HardDrive, label: "سابقه قابل حسابرسی" },
  { icon: Workflow, label: "جریان کار ثبت‌نام تا کلاس" },
];

const services = [
  "فراگیر",
  "ثبت‌نام",
  "شهریه",
  "کلاس",
  "حضور",
  "پورتال",
  "گزارش",
];

const Architecture = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[700px] text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              زیرساختی که با رشد مؤسسه آموزشی مقیاس می‌گیرد
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark md:text-lg">
              از ثبت‌نام تا گزارش‌گیری ترم، لایه‌ها شفاف و قابل اتصال به سیستم‌های
              جانبی هستند.
            </p>
          </div>
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-3 border border-stroke bg-white p-6 dark:border-stroke-dark dark:bg-gray-dark md:p-8">
              <FlowNode label="فراگیر / ولی / استاد" />
              <FlowArrow />
              <FlowNode label="پورتال و دسترسی نقش‌محور" />
              <FlowArrow />
              <div className="border border-primary/30 bg-primary/5 p-4 dark:bg-primary/10">
                <p className="mb-3 text-sm font-semibold text-primary">
                  زیرساخت مدیریت آموزش
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {services.map((service) => (
                    <div
                      key={service}
                      className="border border-stroke bg-white px-2 py-2 text-center text-xs font-medium text-black dark:border-stroke-dark dark:bg-dark dark:text-white"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
              <FlowArrow />
              <FlowNode label="گزارش‌ها / مالی / اطلاع‌رسانی" accent />
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <ul className="space-y-3">
              {technicalTraits.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 border border-stroke bg-white px-4 py-3 dark:border-stroke-dark dark:bg-gray-dark"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-medium text-black dark:text-white md:text-base">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const FlowNode = ({
  label,
  accent = false,
}: {
  label: string;
  accent?: boolean;
}) => (
  <div
    className={`px-4 py-3 text-center text-sm font-semibold ${
      accent
        ? "border border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
        : "border border-stroke bg-gray-light/70 text-black dark:border-stroke-dark dark:bg-dark dark:text-white"
    }`}
  >
    {label}
  </div>
);

const FlowArrow = () => (
  <div className="flex justify-center py-0.5" aria-hidden>
    <div className="h-5 w-px bg-stroke dark:bg-stroke-dark" />
  </div>
);

export default Architecture;
