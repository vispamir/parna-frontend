import {
  CalendarDays,
  ClipboardCheck,
  GraduationCap,
  School,
  UsersRound,
  Wallet,
} from "lucide-react";
import Reveal from "./Reveal";

const items = [
  { icon: GraduationCap, label: "پرونده فراگیران" },
  { icon: Wallet, label: "شهریه و اقساط" },
  { icon: CalendarDays, label: "کلاس و تقویم" },
  { icon: School, label: "اساتید و مربیان" },
  { icon: ClipboardCheck, label: "حضور و غیاب" },
  { icon: UsersRound, label: "پورتال اولیا" },
];

const TrustStrip = () => {
  return (
    <section className="border-b border-stroke bg-gray-light/50 py-10 dark:border-stroke-dark dark:bg-bg-color-dark/40 md:py-12">
      <div className="container">
        <Reveal>
          <p className="mb-8 text-center text-base font-medium text-black dark:text-white md:text-lg">
            یک زیرساخت واحد برای چرخه کامل عملیات آموزشی
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
