import Link from "next/link";
import Reveal from "@/components/Common/Reveal";

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-stroke bg-white pt-[120px] dark:border-stroke-dark dark:bg-gray-dark md:pt-[140px] lg:pt-[160px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,108,247,0.08),_transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(74,108,247,0.15),_transparent_55%)]" />
      <div className="container relative z-10 pb-16 md:pb-20 lg:pb-24">
        <div className="flex flex-wrap items-center gap-y-12">
          <div className="w-full lg:w-1/2 lg:pl-8">
            <Reveal>
              <p className="mb-4 text-sm font-semibold tracking-wide text-primary">
                زیرساخت پرداخت‌یاری
              </p>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl md:leading-[1.2]">
                زیرساخت پرداخت‌یاری، آماده برای رشد کسب‌وکار شما
              </h1>
              <p className="mb-9 max-w-[560px] text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
                تمام زیرساخت فنی موردنیاز برای راه‌اندازی، مدیریت و توسعه
                سرویس‌های پرداخت‌یاری را در اختیار کسب‌وکار خود قرار دهید؛ از
                اتصال به شبکه پرداخت تا مدیریت پذیرندگان، تراکنش‌ها و تسویه.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-primary/90"
                >
                  درخواست مشاوره
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center rounded-sm border border-stroke bg-white px-8 py-4 text-base font-semibold text-black transition hover:border-primary hover:text-primary dark:border-stroke-dark dark:bg-transparent dark:text-white dark:hover:border-primary"
                >
                  مشاهده قابلیت‌ها
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="w-full lg:w-1/2">
            <Reveal delayMs={120}>
              <div className="relative mx-auto max-w-[560px]">
                <div className="overflow-hidden rounded-lg border border-stroke bg-white shadow-three dark:border-stroke-dark dark:bg-bg-color-dark">
                  <div className="flex items-center gap-2 border-b border-stroke px-4 py-3 dark:border-stroke-dark">
                    <span className="h-2.5 w-2.5 rounded-full bg-stroke dark:bg-stroke-dark" />
                    <span className="h-2.5 w-2.5 rounded-full bg-stroke dark:bg-stroke-dark" />
                    <span className="h-2.5 w-2.5 rounded-full bg-stroke dark:bg-stroke-dark" />
                    <span className="mr-3 text-xs text-body-color">
                      داشبورد عملیات پرداخت
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3">
                    {[
                      { label: "تراکنش‌ها", value: "۱۲٬۴۸۰" },
                      { label: "نرخ موفقیت", value: "۹۸٫۷٪" },
                      { label: "پذیرندگان", value: "۳۲۶" },
                      { label: "تسویه", value: "در صف" },
                      { label: "Webhook", value: "فعال" },
                      { label: "تأخیر API", value: "۴۲ms" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-md border border-stroke bg-gray-light/60 p-3 dark:border-stroke-dark dark:bg-dark/40"
                      >
                        <p className="mb-1 text-xs text-body-color dark:text-body-color-dark">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-black dark:text-white">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-stroke px-4 py-4 dark:border-stroke-dark">
                    <div className="mb-3 flex items-center justify-between text-xs text-body-color">
                      <span>حجم تراکنش (۷ روز)</span>
                      <span className="text-primary">+۱۲٪</span>
                    </div>
                    <div className="flex h-20 items-end gap-1.5">
                      {[40, 55, 48, 70, 62, 78, 85].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm bg-primary/15 dark:bg-primary/25"
                          style={{ height: `${h}%` }}
                        >
                          <div
                            className="w-full rounded-sm bg-primary"
                            style={{ height: "35%" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 hidden rounded-md border border-stroke bg-white px-4 py-3 shadow-one dark:border-stroke-dark dark:bg-bg-color-dark sm:block">
                  <p className="text-xs text-body-color">جریان رویداد</p>
                  <p className="text-sm font-medium text-black dark:text-white">
                    پرداخت موفق
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
