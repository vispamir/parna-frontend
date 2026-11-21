import Reveal from "@/components/Common/Reveal";

const steps = [
  {
    step: "01",
    title: "دریافت دسترسی API",
    description: "دسترسی فنی و کلیدهای اولیه برای شروع یکپارچه‌سازی.",
  },
  {
    step: "02",
    title: "اتصال و توسعه",
    description: "اتصال سرویس‌ها از طریق REST API و تعریف Webhookها.",
  },
  {
    step: "03",
    title: "تست در محیط آزمایشی",
    description: "اعتبارسنجی جریان‌های پرداخت و تسویه در محیط آزمایشی.",
  },
  {
    step: "04",
    title: "راه‌اندازی عملیاتی",
    description: "انتقال به محیط عملیاتی با مانیتورینگ و کنترل دسترسی.",
  },
];

const IntegrationSteps = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[640px] text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              راه‌اندازی ساده، توسعه‌پذیر و سریع
            </h2>
          </div>
        </Reveal>

        <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="pointer-events-none absolute right-0 top-8 hidden h-px w-full bg-stroke xl:block dark:bg-stroke-dark" />
          {steps.map((item, index) => (
            <Reveal key={item.step} delayMs={index * 70}>
              <div className="relative h-full border border-stroke bg-white p-6 dark:border-stroke-dark dark:bg-gray-dark">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                  {item.step}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSteps;
