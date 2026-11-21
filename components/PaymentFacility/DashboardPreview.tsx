import Reveal from "@/components/Common/Reveal";

const metrics = [
  { label: "تعداد تراکنش‌ها", value: "۱۸٬۲۴۰", hint: "امروز" },
  { label: "حجم تراکنش", value: "۴٫۲ میلیارد", hint: "ریال" },
  { label: "نرخ موفقیت", value: "۹۸٫۶٪", hint: "+۰٫۴٪" },
  { label: "تسویه", value: "۱۲ دسته", hint: "در صف" },
  { label: "پذیرندگان", value: "۳۲۶", hint: "فعال" },
];

const recentTx = [
  {
    id: "TX-938201",
    merchant: "فروشگاه آفتاب",
    amount: "۱٬۲۵۰٬۰۰۰",
    status: "موفق",
  },
  {
    id: "TX-938198",
    merchant: "پلتفرم سرویس‌یار",
    amount: "۸۴۰٬۰۰۰",
    status: "موفق",
  },
  {
    id: "TX-938190",
    merchant: "مارکت‌پلیس نکسوس",
    amount: "۳٬۱۰۰٬۰۰۰",
    status: "در انتظار",
  },
  {
    id: "TX-938184",
    merchant: "فین‌تک پرداخت‌جو",
    amount: "۵۶۰٬۰۰۰",
    status: "ناموفق",
  },
];

const DashboardPreview = () => {
  return (
    <section className="border-y border-stroke bg-gray-light/40 py-16 dark:border-stroke-dark dark:bg-bg-color-dark/30 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[640px] text-center md:mb-14">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              نمای عملیاتی داشبورد
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark md:text-lg">
              کنترل تراکنش‌ها، پذیرندگان و تسویه از یک پنل واحد با داده‌های
              نمایشی برای نمایش ساختار محصول.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-lg border border-stroke bg-white shadow-three dark:border-stroke-dark dark:bg-gray-dark">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stroke px-5 py-4 dark:border-stroke-dark">
              <div>
                <p className="text-sm font-semibold text-black dark:text-white">
                  نمای عملیات
                </p>
                <p className="text-xs text-body-color dark:text-body-color-dark">
                  محیط نمایشی — داده نمونه
                </p>
              </div>
              <span className="rounded-sm bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                پیش‌نمایش
              </span>
            </div>

            <div className="grid gap-3 border-b border-stroke p-5 dark:border-stroke-dark sm:grid-cols-2 lg:grid-cols-5">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border border-stroke bg-gray-light/50 p-4 dark:border-stroke-dark dark:bg-dark/50"
                >
                  <p className="mb-1 text-xs text-body-color dark:text-body-color-dark">
                    {metric.label}
                  </p>
                  <p className="text-lg font-bold text-black dark:text-white">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-[11px] text-body-color dark:text-body-color-dark">
                    {metric.hint}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-black dark:text-white">
                  تراکنش‌های اخیر
                </h3>
                <span className="text-xs text-body-color">آخرین به‌روزرسانی: لحظاتی پیش</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-sm">
                  <thead>
                    <tr className="border-b border-stroke text-right text-xs text-body-color dark:border-stroke-dark">
                      <th className="pb-3 font-medium">شناسه</th>
                      <th className="pb-3 font-medium">پذیرنده</th>
                      <th className="pb-3 font-medium">مبلغ (ریال)</th>
                      <th className="pb-3 font-medium">وضعیت</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTx.map((row) => (
                      <tr
                        key={row.id}
                        className="border-b border-stroke/70 last:border-0 dark:border-stroke-dark/70"
                      >
                        <td className="py-3 font-medium text-black dark:text-white" dir="ltr">
                          {row.id}
                        </td>
                        <td className="py-3 text-body-color dark:text-body-color-dark">
                          {row.merchant}
                        </td>
                        <td className="py-3 text-black dark:text-white">{row.amount}</td>
                        <td className="py-3">
                          <StatusBadge status={row.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  const styles =
    status === "موفق"
      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
      : status === "در انتظار"
        ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
        : "bg-rose-500/10 text-rose-600 dark:text-rose-400";

  return (
    <span className={`inline-flex rounded-sm px-2 py-1 text-xs font-medium ${styles}`}>
      {status}
    </span>
  );
};

export default DashboardPreview;
