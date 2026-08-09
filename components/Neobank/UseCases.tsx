import {
  AppWindow,
  BriefcaseBusiness,
  Building2,
  Landmark,
  Puzzle,
  Store,
} from "lucide-react";
import Reveal from "@/components/PaymentFacility/Reveal";

const cases = [
  {
    icon: Landmark,
    title: "نئوبانک",
    description: "راه‌اندازی یک تجربه بانکداری دیجیتال با برند اختصاصی.",
  },
  {
    icon: BriefcaseBusiness,
    title: "فین‌تک",
    description:
      "ساخت محصولات مالی جدید بدون توسعه تمام زیرساخت از ابتدا.",
  },
  {
    icon: Store,
    title: "مارکت‌پلیس",
    description: "ارائه حساب، کیف پول و تسویه به فروشندگان و کاربران.",
  },
  {
    icon: Building2,
    title: "پلتفرم‌های سازمانی",
    description: "اضافه کردن سرویس‌های مالی به اکوسیستم موجود.",
  },
  {
    icon: Puzzle,
    title: "مالی تعبیه‌شده",
    description:
      "قرار دادن قابلیت‌های مالی درون یک محصول یا پلتفرم غیرمالی.",
  },
  {
    icon: AppWindow,
    title: "بانکداری دیجیتال",
    description: "توسعه کانال‌های دیجیتال روی زیرساخت بانکی.",
  },
];

const UseCases = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[680px] text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              هر کسب‌وکاری می‌تواند لایه مالی خود را بسازد
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delayMs={index * 40}>
              <article className="h-full border border-stroke bg-white p-6 transition hover:border-primary/40 dark:border-stroke-dark dark:bg-gray-dark">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark md:text-base">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
