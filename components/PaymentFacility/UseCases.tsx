import {
  BriefcaseBusiness,
  Building2,
  ShoppingBag,
  Store,
  WalletCards,
} from "lucide-react";
import Reveal from "./Reveal";

const useCases = [
  {
    icon: Store,
    title: "مارکت‌پلیس",
    description: "مدیریت پرداخت و تسویه فروشندگان متعدد.",
  },
  {
    icon: BriefcaseBusiness,
    title: "پلتفرم‌های خدماتی",
    description: "مدیریت دریافت وجه و تسویه با ارائه‌دهندگان خدمات.",
  },
  {
    icon: WalletCards,
    title: "فین‌تک",
    description:
      "استفاده از زیرساخت پرداخت به‌عنوان بلوک سازنده برای محصول مالی.",
  },
  {
    icon: ShoppingBag,
    title: "تجارت الکترونیک",
    description: "مدیریت پرداخت، تراکنش و گزارش‌گیری در مقیاس بالا.",
  },
  {
    icon: Building2,
    title: "پلتفرم‌های B2B",
    description: "ایجاد زیرساخت دریافت و تسویه برای مشتریان سازمانی.",
  },
];

const UseCases = () => {
  return (
    <section className="border-y border-stroke bg-gray-light/40 py-16 dark:border-stroke-dark dark:bg-bg-color-dark/30 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[720px] text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              برای کسب‌وکارهایی که پرداخت بخش مهمی از محصول آن‌هاست
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {useCases.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delayMs={index * 50}>
              <article className="h-full border border-stroke bg-white p-5 transition hover:border-primary/40 dark:border-stroke-dark dark:bg-gray-dark">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-black dark:text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
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
