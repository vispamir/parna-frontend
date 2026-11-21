import { FileSpreadsheet, Layers3, Link2Off, RefreshCcw } from "lucide-react";
import Reveal from "@/components/Common/Reveal";

const problems = [
  {
    icon: Layers3,
    title: "ابزارهای پراکنده",
    description:
      "فروش، مالی، منابع انسانی و انبار در سامانه‌های جدا کار می‌کنند و تصویر واحدی از کسب‌وکار وجود ندارد.",
  },
  {
    icon: FileSpreadsheet,
    title: "وابستگی به فایل و فرآیند دستی",
    description:
      "گزارش‌گیری، هماهنگی بین واحدها و پیگیری کارها وابسته به اکسل و پیام‌رسانی غیررسمی می‌ماند.",
  },
  {
    icon: Link2Off,
    title: "ناهماهنگی داده",
    description:
      "اطلاعات مشتری، موجودی، فاکتور و حقوق هم‌زمان به‌روز نمی‌شوند و مغایرت عملیاتی ایجاد می‌شود.",
  },
  {
    icon: RefreshCcw,
    title: "هزینه نگهداری چند سیستم",
    description:
      "ادغام، آموزش و پشتیبانی چندین نرم‌افزار هزینه‌بر است و مقیاس‌پذیری سازمان را کند می‌کند.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[720px] text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              اداره کسب‌وکار با سامانه‌های جدا، کند و پرهزینه است
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {problems.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delayMs={index * 60}>
              <div className="h-full border border-stroke bg-white p-6 transition hover:border-primary/40 dark:border-stroke-dark dark:bg-gray-dark md:p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  {title}
                </h3>
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={120}>
          <p className="mt-10 text-center text-lg font-medium text-black dark:text-white md:mt-12">
            پرنا این پیچیدگی را به یک زیرساخت مدیریت کسب‌وکار تبدیل کرده است.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default ProblemSection;
