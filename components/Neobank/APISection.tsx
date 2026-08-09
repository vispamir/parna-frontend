import {
  BookOpen,
  Boxes,
  FlaskConical,
  KeyRound,
  Lock,
  Radio,
  Server,
  Webhook,
} from "lucide-react";
import Reveal from "@/components/PaymentFacility/Reveal";

const items = [
  { icon: Server, label: "REST API" },
  { icon: Webhook, label: "Webhook" },
  { icon: KeyRound, label: "کلید API" },
  { icon: Lock, label: "احراز هویت" },
  { icon: FlaskConical, label: "محیط آزمایشی" },
  { icon: BookOpen, label: "مستندات" },
  { icon: Radio, label: "یکپارچه‌سازی رویدادمحور" },
  { icon: Boxes, label: "سرویس‌های ماژولار" },
];

const requestCode = `POST /api/v1/accounts

{
  "customer_id": "cus_123",
  "type": "personal"
}`;

const responseCode = `{
  "id": "acc_123",
  "status": "active",
  "currency": "IRR"
}`;

const APISection = () => {
  return (
    <section className="border-y border-stroke bg-gray-light/40 py-16 dark:border-stroke-dark dark:bg-bg-color-dark/30 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[640px] text-center md:mb-14">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              هر قابلیت، یک API قابل استفاده
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark md:text-lg">
              پلتفرم API بانکی برای تیم‌هایی که می‌خواهند قابلیت مالی را به‌صورت
              کنترل‌شده و قابل توسعه در محصول خود قرار دهند.
            </p>
          </div>
        </Reveal>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-lg border border-stroke bg-[#0F141E] shadow-two dark:border-stroke-dark">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-xs text-white/60">ایجاد حساب</span>
                <span className="rounded bg-primary/20 px-2 py-0.5 text-[10px] font-medium text-primary">
                  REST
                </span>
              </div>
              <div className="border-b border-white/10 p-5">
                <p className="mb-2 text-[11px] uppercase tracking-wide text-white/40">
                  درخواست
                </p>
                <pre
                  dir="ltr"
                  className="overflow-x-auto text-left text-[13px] leading-relaxed text-[#D7DEEA]"
                >
                  <code>{requestCode}</code>
                </pre>
              </div>
              <div className="p-5">
                <p className="mb-2 text-[11px] uppercase tracking-wide text-white/40">
                  پاسخ
                </p>
                <pre
                  dir="ltr"
                  className="overflow-x-auto text-left text-[13px] leading-relaxed text-[#A8F0C0]"
                >
                  <code>{responseCode}</code>
                </pre>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {items.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 border border-stroke bg-white px-4 py-3 dark:border-stroke-dark dark:bg-gray-dark"
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
      </div>
    </section>
  );
};

export default APISection;
