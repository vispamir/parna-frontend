import {
  Activity,
  BellRing,
  Code2,
  FileBarChart2,
  Gauge,
  Store,
  Wallet,
  Webhook,
} from "lucide-react";
import Reveal from "@/components/Common/Reveal";

const features = [
  {
    icon: Code2,
    title: "API‌محور",
    description:
      "تمام قابلیت‌های اصلی از طریق APIهای استاندارد و مستند در اختیار تیم فنی قرار می‌گیرد.",
  },
  {
    icon: Store,
    title: "مدیریت پذیرندگان",
    description:
      "ایجاد، احراز، فعال‌سازی و مدیریت چرخه عمر پذیرندگان.",
  },
  {
    icon: Activity,
    title: "مدیریت تراکنش",
    description:
      "ثبت و رهگیری تراکنش‌ها، وضعیت‌ها، Callbackها و خطاها.",
  },
  {
    icon: Wallet,
    title: "تسویه",
    description:
      "مدیریت فرآیندهای تسویه و ارائه گزارش‌های مالی قابل اتکا.",
  },
  {
    icon: Gauge,
    title: "مدیریت حساب و موجودی",
    description:
      "مدیریت موجودی، حساب‌ها و گردش مالی کاربران و پذیرندگان.",
  },
  {
    icon: Webhook,
    title: "Webhook",
    description:
      "ارسال رویدادهای لحظه‌ای برای اطلاع‌رسانی تغییر وضعیت تراکنش‌ها و عملیات مالی.",
  },
  {
    icon: FileBarChart2,
    title: "گزارش‌گیری",
    description:
      "گزارش‌های عملیاتی و مالی برای کنترل و تحلیل عملکرد سیستم.",
  },
  {
    icon: BellRing,
    title: "مانیتورینگ",
    description:
      "مانیتورینگ سرویس‌ها، تراکنش‌ها و خطاها برای حفظ پایداری زیرساخت.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[640px] text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              قابلیت‌های کلیدی
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark md:text-lg">
              مجموعه‌ای منسجم از قابلیت‌های فنی و عملیاتی برای راه‌اندازی و
              مدیریت سرویس پرداخت‌یاری.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delayMs={index * 40}>
              <article className="group h-full border border-stroke bg-white p-6 transition hover:border-primary/40 dark:border-stroke-dark dark:bg-gray-dark">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
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

export default Features;
