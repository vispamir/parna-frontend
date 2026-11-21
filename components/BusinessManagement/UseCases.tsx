import {
  Building2,
  Factory,
  ShoppingBag,
  Store,
  Truck,
} from "lucide-react";
import Reveal from "./Reveal";

const useCases = [
  {
    icon: Building2,
    title: "شرکت‌های خدماتی",
    description: "مدیریت فروش، پروژه، فاکتور و منابع انسانی در یک جریان واحد.",
  },
  {
    icon: Store,
    title: "خرده‌فروشی",
    description: "صندوق فروشگاهی، موجودی فروشگاه و تسویه روزانه.",
  },
  {
    icon: ShoppingBag,
    title: "توزیع و بازرگانی",
    description: "CRM مشتریان، سفارش، انبار و گزارش سودآوری.",
  },
  {
    icon: Factory,
    title: "تولید سبک",
    description: "کنترل مواد، انبار و هماهنگی مالی با عملیات تولید.",
  },
  {
    icon: Truck,
    title: "سازمان‌های چندواحدی",
    description: "چند کسب‌وکار، کارتابل مشترک و گزارش‌گیری متمرکز.",
  },
];

const UseCases = () => {
  return (
    <section className="border-y border-stroke bg-gray-light/40 py-16 dark:border-stroke-dark dark:bg-bg-color-dark/30 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[720px] text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              برای سازمان‌هایی که عملیات روزانه پیچیده دارند
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
