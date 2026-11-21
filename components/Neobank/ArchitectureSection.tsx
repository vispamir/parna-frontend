import {
  Boxes,
  Code2,
  Eye,
  Lock,
  Radio,
  Scale,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Reveal from "@/components/Common/Reveal";

const services = [
  "مشتری",
  "حساب",
  "کیف پول",
  "کارت",
  "تراکنش",
  "دفترکل",
  "پرداخت",
  "تسویه",
  "اطلاع‌رسانی",
];

const traits = [
  { icon: Boxes, label: "ماژولار" },
  { icon: Code2, label: "API-محور" },
  { icon: Radio, label: "رویدادمحور" },
  { icon: Scale, label: "مقیاس‌پذیر" },
  { icon: Eye, label: "قابل مشاهده" },
  { icon: Lock, label: "امن" },
  { icon: ShieldCheck, label: "قابل حسابرسی" },
  { icon: Workflow, label: "مقاوم در برابر خطا" },
];

const ArchitectureSection = () => {
  return (
    <section className="border-y border-stroke bg-gray-light/40 py-16 dark:border-stroke-dark dark:bg-bg-color-dark/30 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[680px] text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              معماری ساخته‌شده برای مقیاس
            </h2>
          </div>
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-3 border border-stroke bg-white p-5 dark:border-stroke-dark dark:bg-gray-dark md:p-7">
              <Node label="اپلیکیشن‌های کلاینت" />
              <Line />
              <Node label="درگاه API" accent />
              <Line />
              <Node label="هویت و دسترسی" />
              <Line />
              <div className="border border-primary/30 bg-primary/5 p-4 dark:bg-primary/10">
                <p className="mb-3 text-sm font-semibold text-primary">
                  سرویس‌های بانکداری
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
              <Line />
              <Node label="لایه یکپارچه‌سازی" />
              <Line />
              <Node label="بانک‌ها / PSP / زیرساخت مالی" muted />
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <ul className="space-y-3">
              {traits.map(({ icon: Icon, label }) => (
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

const Node = ({
  label,
  accent = false,
  muted = false,
}: {
  label: string;
  accent?: boolean;
  muted?: boolean;
}) => (
  <div
    className={`px-4 py-3 text-center text-sm font-semibold ${
      accent
        ? "border border-primary bg-primary text-white"
        : muted
          ? "border border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
          : "border border-stroke bg-gray-light/70 text-black dark:border-stroke-dark dark:bg-dark dark:text-white"
    }`}
  >
    {label}
  </div>
);

const Line = () => (
  <div className="flex justify-center" aria-hidden>
    <div className="h-4 w-px bg-stroke dark:bg-stroke-dark" />
  </div>
);

export default ArchitectureSection;
