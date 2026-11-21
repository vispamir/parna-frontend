import Reveal from "@/components/Common/Reveal";

const steps = [
  {
    step: "01",
    title: "تحلیل فرآیندها",
    description: "شناخت واحدها، جریان‌های فروش، مالی و منابع انسانی سازمان.",
  },
  {
    step: "02",
    title: "پیکربندی ماژول‌ها",
    description: "فعال‌سازی CRM، مالی، HR، انبار و صندوق متناسب با نیاز.",
  },
  {
    step: "03",
    title: "انتقال داده و آموزش",
    description: "ورود اطلاعات پایه، تعریف دسترسی‌ها و آموزش کاربران کلیدی.",
  },
  {
    step: "04",
    title: "راه‌اندازی عملیاتی",
    description: "شروع کار واقعی با مانیتورینگ، پشتیبانی و بهبود مستمر.",
  },
];

const IntegrationSteps = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[640px] text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              راه‌اندازی مرحله‌ای و قابل کنترل
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
