import Reveal from "@/components/Common/Reveal";

const steps = [
  {
    step: "01",
    title: "معماری",
    description: "نیازمندی‌ها و معماری محصول مشخص می‌شود.",
  },
  {
    step: "02",
    title: "یکپارچه‌سازی",
    description: "اتصال سرویس‌ها از طریق API.",
  },
  {
    step: "03",
    title: "محیط آزمایشی",
    description: "توسعه و تست در محیط آزمایشی.",
  },
  {
    step: "04",
    title: "محیط عملیاتی",
    description: "راه‌اندازی و مانیتورینگ محصول.",
  },
];

const IntegrationSteps = () => {
  return (
    <section className="border-y border-stroke bg-gray-light/40 py-16 dark:border-stroke-dark dark:bg-bg-color-dark/30 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[560px] text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              از API تا محصول مالی
            </h2>
          </div>
        </Reveal>

        <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="pointer-events-none absolute right-0 top-8 hidden h-px w-full bg-stroke xl:block dark:bg-stroke-dark" />
          {steps.map((item, index) => (
            <Reveal key={item.step} delayMs={index * 60}>
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
