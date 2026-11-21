import { Clock3, Link2, Scale, Workflow } from "lucide-react";
import Reveal from "@/components/Common/Reveal";

const problems = [
  {
    icon: Workflow,
    title: "پیچیدگی هسته بانکداری",
    description:
      "ساخت و نگهداری هسته تراکنش‌ها و حسابداری مالی پیچیده است.",
  },
  {
    icon: Scale,
    title: "عملیات مالی",
    description:
      "مدیریت حساب، موجودی، تراکنش و تسویه نیازمند زیرساخت دقیق و قابل Audit است.",
  },
  {
    icon: Link2,
    title: "پیچیدگی یکپارچه‌سازی",
    description:
      "اتصال به سرویس‌های بانکی، پرداختی و هویتی نیازمند توسعه و نگهداری مداوم است.",
  },
  {
    icon: Clock3,
    title: "زمان عرضه به بازار",
    description:
      "ساخت همه اجزا از صفر، زمان عرضه محصول مالی را افزایش می‌دهد.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-10 max-w-[760px] text-center md:mb-14">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              ساخت یک نئوبانک فقط ساخت یک اپلیکیشن نیست.
            </h2>
            <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              اپلیکیشن موبایل تنها لایه قابل مشاهده یک محصول بانکی است. پشت آن،
              مجموعه‌ای پیچیده از حساب‌ها، دفترکل، تراکنش‌ها، احراز هویت، کارت،
              پرداخت، تسویه، کنترل دسترسی، گزارش‌گیری و سرویس‌های عملیاتی قرار دارد.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {problems.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delayMs={index * 50}>
              <div className="h-full border border-stroke bg-white p-6 transition hover:border-primary/40 dark:border-stroke-dark dark:bg-gray-dark md:p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  {title}
                </h3>
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={100}>
          <p className="mt-10 text-center text-lg font-medium text-black dark:text-white md:mt-12">
            ما این لایه پیچیده را به مجموعه‌ای از APIها و سرویس‌های قابل استفاده
            تبدیل کرده‌ایم.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default ProblemSection;
