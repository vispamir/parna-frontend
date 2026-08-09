import {
  BookOpen,
  KeyRound,
  FlaskConical,
  Webhook,
  Boxes,
  Server,
} from "lucide-react";
import Reveal from "./Reveal";

const techItems = [
  { icon: Server, label: "REST API" },
  { icon: Webhook, label: "Webhook" },
  { icon: KeyRound, label: "کلید API" },
  { icon: FlaskConical, label: "محیط آزمایشی" },
  { icon: BookOpen, label: "مستندات" },
  { icon: Boxes, label: "SDK" },
];

const codeSnippet = `POST /api/v1/payments

{
  "amount": 1000000,
  "callback_url": "https://example.com/callback",
  "customer": {
    "id": "cus_8f2a91"
  }
}`;

const DeveloperExperience = () => {
  return (
    <section className="border-y border-stroke bg-gray-light/40 py-16 dark:border-stroke-dark dark:bg-bg-color-dark/30 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap items-start gap-y-10">
          <div className="w-full lg:w-1/2 lg:pl-10">
            <Reveal>
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                ساخته شده برای تیم‌های فنی
              </h2>
              <p className="mb-8 max-w-[520px] text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
                با APIهای استاندارد، مستندات کامل و ابزارهای توسعه، تیم شما
                می‌تواند به‌جای ساخت زیرساخت پرداخت، روی محصول اصلی کسب‌وکار تمرکز
                کند.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {techItems.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 border border-stroke bg-white px-3 py-2.5 dark:border-stroke-dark dark:bg-gray-dark"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-primary"
                      strokeWidth={1.75}
                    />
                    <span className="text-sm font-medium text-black dark:text-white">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="w-full lg:w-1/2">
            <Reveal delayMs={100}>
              <div className="overflow-hidden rounded-lg border border-stroke bg-[#0F141E] shadow-two dark:border-stroke-dark">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <span className="text-xs text-white/60">ایجاد پرداخت</span>
                  <span className="rounded bg-primary/20 px-2 py-0.5 text-[10px] font-medium text-primary">
                    HTTP
                  </span>
                </div>
                <pre
                  dir="ltr"
                  className="overflow-x-auto p-5 text-left text-[13px] leading-relaxed text-[#D7DEEA]"
                >
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperExperience;
