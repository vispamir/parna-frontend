import {
  BookOpenCheck,
  CalendarDays,
  ClipboardCheck,
  FileBarChart2,
  GraduationCap,
  School,
  UsersRound,
  Wallet,
} from "lucide-react";
import Reveal from "@/components/Common/Reveal";

const features = [
  {
    icon: GraduationCap,
    title: "پرونده فراگیران",
    description:
      "مدیریت دانش‌آموزان، دانشجویان و فراگیران با سوابق تحصیلی، تماس و وضعیت ثبت‌نام.",
  },
  {
    icon: Wallet,
    title: "شهریه، اقساط و تسویه",
    description:
      "ثبت شهریه، برنامه اقساط، پیگیری معوقات و هماهنگی مالی با واحد آموزش.",
  },
  {
    icon: CalendarDays,
    title: "کلاس، ترم و تقویم",
    description:
      "تعریف ترم‌ها، کلاس‌ها، ظرفیت، زمان‌بندی و جلوگیری از تداخل برنامه.",
  },
  {
    icon: School,
    title: "اساتید و مربیان",
    description:
      "مدیریت پرونده اساتید، تخصیص کلاس، برنامه تدریس و هماهنگی پرسنل آموزشی.",
  },
  {
    icon: ClipboardCheck,
    title: "حضور و غیاب",
    description:
      "ثبت حضور در کلاس، گزارش غیبت و اطلاع‌رسانی به اولیا یا فراگیران.",
  },
  {
    icon: UsersRound,
    title: "پورتال اولیا و فراگیران",
    description:
      "دسترسی امن برای مشاهده وضعیت تحصیلی، شهریه، حضور و پیام‌های مؤسسه.",
  },
  {
    icon: BookOpenCheck,
    title: "کارتابل پرسنل آموزشی",
    description:
      "ارجاع درخواست‌ها، تأییدها و هماهنگی داخلی بین واحد آموزش و اداری.",
  },
  {
    icon: FileBarChart2,
    title: "گزارش آموزشی و مالی",
    description:
      "گزارش ثبت‌نام، ظرفیت کلاس، وصول شهریه، حضور و عملکرد ترم.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[640px] text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              قابلیت‌های کلیدی
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark md:text-lg">
              مجموعه‌ای منسجم برای اداره عملیات آموزشی در مدارس، آموزشگاه‌ها و
              دانشگاه‌ها.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delayMs={index * 40}>
              <article className="group h-full border border-stroke bg-white p-6 transition hover:border-primary/40 dark:border-stroke-dark dark:bg-gray-dark">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark md:text-base">
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

export default Features;
