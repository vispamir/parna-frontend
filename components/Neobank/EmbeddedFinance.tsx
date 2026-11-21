import Reveal from "@/components/Common/Reveal";

const modules = ["حساب", "کارت", "کیف پول", "پرداخت", "دفترکل"];

const EmbeddedFinance = () => {
  return (
    <section className="border-y border-stroke bg-gray-light/40 py-16 dark:border-stroke-dark dark:bg-bg-color-dark/30 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              بانکداری را درون محصول خود قرار دهید
            </h2>
            <p className="max-w-[520px] text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              با استفاده از زیرساخت بانکداری می‌توانید قابلیت‌های مالی را مستقیماً
              در تجربه اصلی محصول خود قرار دهید.
            </p>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="space-y-3 border border-stroke bg-white p-5 dark:border-stroke-dark dark:bg-gray-dark md:p-6">
              <Box label="پلتفرم شما" />
              <Line />
              <Box label="APIهای بانکی" accent />
              <Line />
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                {modules.map((item) => (
                  <div
                    key={item}
                    className="border border-stroke bg-gray-light/60 px-2 py-2.5 text-center text-xs font-medium text-black dark:border-stroke-dark dark:bg-dark dark:text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <Line />
              <Box label="تجربه مشتری" muted />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Box = ({
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

export default EmbeddedFinance;
