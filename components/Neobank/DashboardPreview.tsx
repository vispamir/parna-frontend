import Reveal from "@/components/PaymentFacility/Reveal";

const overview = [
  { label: "کل مشتریان", value: "۲۴٬۱۸۰" },
  { label: "حساب‌های فعال", value: "۱۸٬۹۴۲" },
  { label: "حجم تراکنش", value: "۱۲٫۴ میلیارد" },
  { label: "تعداد تراکنش", value: "۹۶٬۳۲۰" },
];

const financial = [
  { label: "موجودی", value: "۳٫۸ میلیارد" },
  { label: "دفترکل", value: "به‌روز" },
  { label: "تسویه", value: "۸ دسته" },
  { label: "مغایرت‌گیری", value: "۹۹٫۲٪" },
];

const operations = [
  { label: "مشتریان", value: "۱٬۲۴۰ امروز" },
  { label: "حساب‌ها", value: "۸۶۰ ایجاد" },
  { label: "کارت‌ها", value: "۴۱۲ فعال‌سازی" },
  { label: "تراکنش‌ها", value: "۱۴٬۲۱۰" },
  { label: "هشدارها", value: "۳ باز" },
];

const DashboardPreview = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[640px] text-center md:mb-14">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              داشبورد عملیاتی
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark md:text-lg">
              نمای مدیریتی برای کنترل مشتریان، حساب‌ها، کارت‌ها و وضعیت مالی —
              با داده‌های نمایشی.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-lg border border-stroke bg-white shadow-three dark:border-stroke-dark dark:bg-gray-dark">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stroke px-5 py-4 dark:border-stroke-dark">
              <div>
                <p className="text-sm font-semibold text-black dark:text-white">
                  پنل کنترل بانکداری
                </p>
                <p className="text-xs text-body-color dark:text-body-color-dark">
                  محیط نمایشی — داده نمونه
                </p>
              </div>
              <span className="rounded-sm bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                نمای کلی
              </span>
            </div>

            <div className="border-b border-stroke p-5 dark:border-stroke-dark">
              <p className="mb-3 text-xs font-semibold text-body-color">
                نمای کلی
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {overview.map((item) => (
                  <Metric key={item.label} {...item} />
                ))}
              </div>
            </div>

            <div className="grid border-b border-stroke dark:border-stroke-dark lg:grid-cols-2">
              <div className="border-b border-stroke p-5 dark:border-stroke-dark lg:border-b-0 lg:border-l lg:border-stroke dark:lg:border-stroke-dark">
                <p className="mb-3 text-xs font-semibold text-body-color">
                  مالی
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {financial.map((item) => (
                    <Metric key={item.label} {...item} />
                  ))}
                </div>
              </div>
              <div className="p-5">
                <p className="mb-3 text-xs font-semibold text-body-color">
                  عملیات
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {operations.map((item) => (
                    <Metric key={item.label} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const Metric = ({ label, value }: { label: string; value: string }) => (
  <div className="border border-stroke bg-gray-light/50 p-4 dark:border-stroke-dark dark:bg-dark/50">
    <p className="mb-1 text-xs text-body-color dark:text-body-color-dark">
      {label}
    </p>
    <p className="text-base font-bold text-black dark:text-white">{value}</p>
  </div>
);

export default DashboardPreview;
