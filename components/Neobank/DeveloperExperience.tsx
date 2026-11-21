import Reveal from "@/components/Common/Reveal";

const steps = [
  { step: "01", title: "ایجاد حساب" },
  { step: "02", title: "احراز مشتری" },
  { step: "03", title: "صدور کارت" },
  { step: "04", title: "پردازش تراکنش" },
  { step: "05", title: "به‌روزرسانی دفترکل" },
  { step: "06", title: "تسویه" },
];

const DeveloperExperience = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[720px] text-center md:mb-14">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              تیم شما محصول می‌سازد، نه زیرساخت بانکی
            </h2>
            <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              APIهای استاندارد و سرویس‌های ماژولار به تیم توسعه اجازه می‌دهند
              قابلیت‌های مالی را بدون پیاده‌سازی تمام اجزای زیرساخت از ابتدا در
              محصول خود قرار دهد.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="relative border border-stroke bg-white p-5 dark:border-stroke-dark dark:bg-gray-dark"
              >
                <span className="mb-3 block text-xs font-bold text-primary">
                  {item.step}
                </span>
                <p className="text-sm font-semibold text-black dark:text-white">
                  {item.title}
                </p>
                {index < steps.length - 1 && (
                  <span className="absolute -left-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-stroke xl:block dark:bg-stroke-dark" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default DeveloperExperience;
