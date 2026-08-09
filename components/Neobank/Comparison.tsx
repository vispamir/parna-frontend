import { Check, X } from "lucide-react";
import Reveal from "@/components/PaymentFacility/Reveal";

const buildFromScratch = [
  "زمان توسعه بالا",
  "هزینه نگهداری بالا",
  "پیچیدگی یکپارچه‌سازی",
  "نیاز به تیم تخصصی",
  "توسعه و نگهداری اجزای متعدد",
];

const withInfrastructure = [
  "APIهای آماده",
  "ماژول‌های قابل استفاده",
  "توسعه سریع‌تر",
  "تمرکز روی تجربه مشتری",
  "قابلیت توسعه مرحله‌ای",
];

const Comparison = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[640px] text-center md:mb-14">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              انتخاب مسیر توسعه
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark md:text-lg">
              مقایسه رویکرد ساخت از صفر با استفاده از زیرساخت بانکداری.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-[900px] gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full border border-stroke bg-white p-6 dark:border-stroke-dark dark:bg-gray-dark md:p-8">
              <h3 className="mb-5 text-lg font-semibold text-black dark:text-white">
                ساخت از صفر
              </h3>
              <ul className="space-y-3">
                {buildFromScratch.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-body-color dark:text-body-color-dark md:text-base"
                  >
                    <X
                      className="mt-0.5 h-4 w-4 shrink-0 text-rose-500"
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delayMs={70}>
            <div className="h-full border border-primary/40 bg-primary/5 p-6 dark:bg-primary/10 md:p-8">
              <h3 className="mb-5 text-lg font-semibold text-black dark:text-white">
                استفاده از زیرساخت بانکداری
              </h3>
              <ul className="space-y-3">
                {withInfrastructure.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-black dark:text-white md:text-base"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
