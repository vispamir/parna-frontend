import Reveal from "./Reveal";

const metrics = [
  { label: "فراگیران فعال", value: "۱٬۲۴۰", hint: "ترم جاری" },
  { label: "کلاس‌ها", value: "۶۸", hint: "برنامه فعال" },
  { label: "وصول شهریه", value: "۸۷٪", hint: "تا امروز" },
  { label: "غیبت امروز", value: "۳۲", hint: "اعلان شده" },
  { label: "درخواست‌ها", value: "۱۴", hint: "کارتابل باز" },
];

const recentRows = [
  {
    id: "ENR-4401",
    title: "ثبت‌نام دوره زبان",
    owner: "آموزشگاه مرکزی",
    status: "تأیید شده",
  },
  {
    id: "TU-2290",
    title: "قسط دوم شهریه",
    owner: "واحد مالی",
    status: "پرداخت شده",
  },
  {
    id: "ATT-118",
    title: "غیبت جلسه ۳",
    owner: "کلاس ریاضی",
    status: "اعلان به ولی",
  },
  {
    id: "CLS-77",
    title: "تغییر زمان کلاس",
    owner: "برنامه‌ریزی",
    status: "در انتظار",
  },
];

const DashboardPreview = () => {
  return (
    <section className="border-y border-stroke bg-gray-light/40 py-16 dark:border-stroke-dark dark:bg-bg-color-dark/30 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[640px] text-center md:mb-14">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              نمای عملیاتی داشبورد آموزشی
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark md:text-lg">
              ثبت‌نام، شهریه، کلاس‌ها و حضور را از یک پنل واحد با داده‌های نمایشی
              دنبال کنید.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-lg border border-stroke bg-white shadow-three dark:border-stroke-dark dark:bg-gray-dark">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stroke px-5 py-4 dark:border-stroke-dark">
              <div>
                <p className="text-sm font-semibold text-black dark:text-white">
                  نمای عملیات آموزش
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
                  رویدادهای اخیر
                </h3>
                <span className="text-xs text-body-color">
                  آخرین به‌روزرسانی: لحظاتی پیش
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-sm">
                  <thead>
                    <tr className="border-b border-stroke text-right text-xs text-body-color dark:border-stroke-dark">
                      <th className="pb-3 font-medium">شناسه</th>
                      <th className="pb-3 font-medium">عنوان</th>
                      <th className="pb-3 font-medium">واحد</th>
                      <th className="pb-3 font-medium">وضعیت</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentRows.map((row) => (
                      <tr
                        key={row.id}
                        className="border-b border-stroke/70 last:border-0 dark:border-stroke-dark/70"
                      >
                        <td
                          className="py-3 font-medium text-black dark:text-white"
                          dir="ltr"
                        >
                          {row.id}
                        </td>
                        <td className="py-3 text-body-color dark:text-body-color-dark">
                          {row.title}
                        </td>
                        <td className="py-3 text-black dark:text-white">
                          {row.owner}
                        </td>
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
    status === "تأیید شده" || status === "پرداخت شده"
      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
      : status === "در انتظار"
        ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
        : "bg-primary/10 text-primary";

  return (
    <span
      className={`inline-flex rounded-sm px-2 py-1 text-xs font-medium ${styles}`}
    >
      {status}
    </span>
  );
};

export default DashboardPreview;
