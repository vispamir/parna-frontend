import {
  Bell,
  Eye,
  FileLock2,
  KeyRound,
  LockKeyhole,
  ServerCrash,
  Shield,
  UsersRound,
} from "lucide-react";
import Reveal from "@/components/Common/Reveal";

const items = [
  { icon: Shield, label: "حفاظت از داده آموزشی" },
  { icon: KeyRound, label: "احراز هویت امن پورتال" },
  { icon: UsersRound, label: "نقش اولیا، فراگیر و پرسنل" },
  { icon: FileLock2, label: "سابقه تغییرات پرونده" },
  { icon: LockKeyhole, label: "محدودسازی دسترسی شعبه‌ای" },
  { icon: Eye, label: "مانیتورینگ دسترسی‌ها" },
  { icon: Bell, label: "هشدار رویدادهای حساس" },
  { icon: ServerCrash, label: "پایداری در دوره ثبت‌نام" },
  { icon: Shield, label: "پشتیبان‌گیری منظم" },
];

const Security = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[680px] text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              امنیت داده فراگیران و اولیا در اولویت
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark md:text-lg">
              اطلاعات تحصیلی و مالی با کنترل نقش، ثبت رویداد و دسترسی امن پورتال
              محافظت می‌شوند.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, label }, index) => (
            <Reveal key={`${label}-${index}`} delayMs={index * 35}>
              <div className="flex items-center gap-3 border border-stroke bg-white px-4 py-4 transition hover:border-primary/40 dark:border-stroke-dark dark:bg-gray-dark">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium text-black dark:text-white md:text-base">
                  {label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
