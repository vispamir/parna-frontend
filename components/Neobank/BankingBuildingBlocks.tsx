import {
  ArrowLeftRight,
  BadgeCheck,
  BookOpen,
  CreditCard,
  Landmark,
  Layers3,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import Reveal from "@/components/Common/Reveal";

const blocks = [
  {
    icon: Landmark,
    title: "حساب دیجیتال",
    description: "ایجاد و مدیریت حساب‌های دیجیتال برای کاربران و مشتریان.",
    capabilities: [
      "ایجاد حساب",
      "وضعیت حساب",
      "موجودی",
      "چرخه عمر حساب",
      "صورتحساب حساب",
    ],
  },
  {
    icon: BookOpen,
    title: "دفترکل",
    description: "دفترکل مالی برای ثبت و کنترل رویدادهای مالی.",
    capabilities: [
      "دفترکل دوطرفه",
      "رهگیری موجودی",
      "رویدادهای مالی",
      "مسیر حسابرسی",
      "صورتحساب‌ها",
    ],
    conceptual: true,
  },
  {
    icon: ArrowLeftRight,
    title: "مدیریت تراکنش",
    description: "مدیریت چرخه کامل تراکنش‌های مالی.",
    capabilities: [
      "ایجاد تراکنش",
      "مدیریت وضعیت",
      "Idempotency",
      "تاریخچه تراکنش",
      "رویداد / Webhook",
    ],
  },
  {
    icon: CreditCard,
    title: "زیرساخت کارت",
    description: "زیرساخت مدیریت کارت و سرویس‌های مرتبط.",
    capabilities: [
      "صدور کارت",
      "چرخه عمر کارت",
      "وضعیت کارت",
      "تراکنش‌های کارت",
      "مدیریت کارت",
    ],
  },
  {
    icon: Wallet,
    title: "کیف پول",
    description: "کیف پول و مدیریت موجودی کاربران.",
    capabilities: [
      "ایجاد کیف پول",
      "موجودی",
      "واریز",
      "برداشت",
      "انتقال",
      "تاریخچه تراکنش",
    ],
  },
  {
    icon: BadgeCheck,
    title: "KYC / KYB",
    description: "زیرساخت مدیریت فرآیندهای شناسایی و احراز مشتری.",
    capabilities: [
      "هویت مشتری",
      "احراز هویت",
      "احراز کسب‌وکار",
      "پروفایل مشتری",
      "گردش‌کار انطباق",
    ],
  },
  {
    icon: Layers3,
    title: "پرداخت",
    description: "اتصال سرویس‌های پرداخت به تجربه مالی محصول.",
    capabilities: [
      "پرداخت",
      "وضعیت پرداخت",
      "Callback",
      "Webhook",
      "مغایرت‌گیری",
    ],
  },
  {
    icon: ShieldCheck,
    title: "تسویه",
    description: "مدیریت فرآیندهای مالی و تسویه.",
    capabilities: [
      "تسویه",
      "مغایرت‌گیری",
      "گزارش‌های مالی",
      "وضعیت تسویه",
    ],
  },
];

const BankingBuildingBlocks = () => {
  return (
    <section id="building-blocks" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[680px] text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              بلوک‌های سازنده بانکداری
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark md:text-lg">
              ماژول‌های قابل ترکیب برای ساخت محصول مالی؛ هر ماژول از طریق API در
              دسترس تیم توسعه قرار می‌گیرد.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {blocks.map(
            ({ icon: Icon, title, description, capabilities, conceptual }, index) => (
              <Reveal key={title} delayMs={index * 35}>
                <article className="group flex h-full flex-col border border-stroke bg-white p-6 transition hover:border-primary/40 dark:border-stroke-dark dark:bg-gray-dark">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    {conceptual && (
                      <span className="rounded-sm border border-stroke px-2 py-0.5 text-[10px] font-medium text-body-color dark:border-stroke-dark dark:text-body-color-dark">
                        مفهومی
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                    {title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                    {description}
                  </p>
                  <ul className="mt-auto space-y-1.5 border-t border-stroke pt-4 dark:border-stroke-dark">
                    {capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="text-xs text-body-color dark:text-body-color-dark"
                      >
                        <span className="ml-1.5 text-primary">•</span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default BankingBuildingBlocks;
