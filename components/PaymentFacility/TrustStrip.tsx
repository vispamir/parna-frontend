import {
  Activity,
  Code2,
  CreditCard,
  FileBarChart2,
  Store,
  Wallet,
} from "lucide-react";
import Reveal from "./Reveal";

const items = [
  { icon: CreditCard, label: "اتصال به سرویس‌های پرداخت" },
  { icon: Store, label: "مدیریت پذیرندگان" },
  { icon: Activity, label: "مدیریت تراکنش‌ها" },
  { icon: Wallet, label: "تسویه و گزارش‌گیری" },
  { icon: Code2, label: "APIهای توسعه‌دهندگان" },
  { icon: FileBarChart2, label: "مانیتورینگ و کنترل" },
];

const TrustStrip = () => {
  return (
    <section className="border-b border-stroke bg-gray-light/50 py-10 dark:border-stroke-dark dark:bg-bg-color-dark/40 md:py-12">
      <div className="container">
        <Reveal>
          <p className="mb-8 text-center text-base font-medium text-black dark:text-white md:text-lg">
            یک زیرساخت واحد برای مدیریت چرخه کامل پرداخت
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {items.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md border border-stroke bg-white text-primary dark:border-stroke-dark dark:bg-dark">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="text-xs leading-relaxed text-body-color dark:text-body-color-dark md:text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TrustStrip;
