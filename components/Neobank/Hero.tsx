import Link from "next/link";
import Reveal from "@/components/PaymentFacility/Reveal";

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-stroke bg-white pt-[120px] dark:border-stroke-dark dark:bg-gray-dark md:pt-[140px] lg:pt-[160px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,108,247,0.07),_transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(74,108,247,0.14),_transparent_55%)]" />
      <div className="container relative z-10 pb-16 md:pb-20 lg:pb-24">
        <div className="flex flex-wrap items-center gap-y-12">
          <div className="w-full lg:w-[52%] lg:pl-8">
            <Reveal>
              <p className="mb-4 text-sm font-semibold tracking-wide text-primary">
                زیرساخت بانکداری
              </p>
              <h1 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl md:leading-[1.15]">
                زیرساخت بانکی برای ساخت نئوبانک شما
              </h1>
              <p className="mb-4 max-w-[540px] text-lg font-medium text-black/80 dark:text-white/80">
                حساب، کارت، تراکنش، کیف پول و سرویس‌های مالی را روی یک زیرساخت
                یکپارچه بسازید.
              </p>
              <p className="mb-9 max-w-[560px] text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
                با استفاده از زیرساخت ما، قابلیت‌های بانکی و مالی موردنیاز محصول
                خود را از طریق APIهای استاندارد دریافت کنید و به‌جای ساخت زیرساخت
                پیچیده بانکی، روی تجربه مشتری و رشد محصول تمرکز کنید.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-primary/90"
                >
                  درخواست مشاوره
                </Link>
                <Link
                  href="#building-blocks"
                  className="inline-flex items-center justify-center rounded-sm border border-stroke bg-white px-8 py-4 text-base font-semibold text-black transition hover:border-primary hover:text-primary dark:border-stroke-dark dark:bg-transparent dark:text-white dark:hover:border-primary"
                >
                  مشاهده قابلیت‌ها
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="w-full lg:w-[48%]">
            <Reveal delayMs={100}>
              <div className="mx-auto max-w-[480px] space-y-3 border border-stroke bg-white p-5 shadow-three dark:border-stroke-dark dark:bg-bg-color-dark md:p-6">
                <FlowBox label="اپلیکیشن‌ها" />
                <Connector />
                <FlowBox label="APIهای بانکی" accent />
                <Connector />
                <div className="border border-primary/30 bg-primary/5 p-4 dark:bg-primary/10">
                  <p className="mb-3 text-center text-sm font-semibold text-primary">
                    هسته زیرساخت بانکداری
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {["حساب‌ها", "کارت‌ها", "دفترکل", "تراکنش‌ها"].map((item) => (
                      <div
                        key={item}
                        className="border border-stroke bg-white px-2 py-2 text-center text-xs font-medium text-black dark:border-stroke-dark dark:bg-dark dark:text-white"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <Connector />
                <FlowBox label="بانک‌ها / PSP / ریل‌های مالی" muted />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

const FlowBox = ({
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

const Connector = () => (
  <div className="flex justify-center" aria-hidden>
    <div className="h-4 w-px bg-stroke dark:bg-stroke-dark" />
  </div>
);

export default Hero;
