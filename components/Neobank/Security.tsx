import {
  Bell,
  Eye,
  FileLock2,
  KeyRound,
  LockKeyhole,
  Route,
  ServerCrash,
  Shield,
  UsersRound,
  Workflow,
} from "lucide-react";
import Reveal from "@/components/PaymentFacility/Reveal";

const items = [
  { icon: KeyRound, label: "احراز هویت" },
  { icon: Shield, label: "مجوزدهی" },
  { icon: UsersRound, label: "کنترل دسترسی مبتنی بر نقش" },
  { icon: FileLock2, label: "لاگ حسابرسی" },
  { icon: LockKeyhole, label: "رمزنگاری" },
  { icon: Eye, label: "مانیتورینگ" },
  { icon: Bell, label: "هشداردهی" },
  { icon: Route, label: "ردیابی‌پذیری تراکنش" },
  { icon: Workflow, label: "مدیریت خطا" },
  { icon: ServerCrash, label: "پشتیبان‌گیری و بازیابی" },
];

const Security = () => {
  return (
    <section className="border-y border-stroke bg-gray-light/40 py-16 dark:border-stroke-dark dark:bg-bg-color-dark/30 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[720px] text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              در محصولات مالی، اعتماد یک قابلیت اختیاری نیست؛ یک الزام است.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ icon: Icon, label }, index) => (
            <Reveal key={label} delayMs={index * 30}>
              <div className="flex h-full items-center gap-3 border border-stroke bg-white px-4 py-4 transition hover:border-primary/40 dark:border-stroke-dark dark:bg-gray-dark">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium text-black dark:text-white">
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
