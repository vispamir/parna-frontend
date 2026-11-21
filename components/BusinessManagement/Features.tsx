import {
  Boxes,
  Building2,
  Calculator,
  ClipboardList,
  ShoppingCart,
  Users,
  UserRoundCog,
  Workflow,
} from "lucide-react";
import Reveal from "@/components/Common/Reveal";

const features = [
  {
    icon: Users,
    title: "فروش و CRM",
    description:
      "مخاطبین، سرنخ‌ها، معاملات، پایپ‌لاین فروش، فعالیت‌ها، فاکتور و پیش‌بینی فروش در یک جریان واحد.",
  },
  {
    icon: UserRoundCog,
    title: "منابع انسانی",
    description:
      "پرسنل، شیفت، حضور و غیاب، حقوق و دستمزد، فیش حقوقی و کارتابل شخصی کارکنان.",
  },
  {
    icon: Calculator,
    title: "مالی و حسابداری",
    description:
      "بانک، صندوق، اسناد حسابداری، گزارش‌های مالی، چک و اتصال به سامانه مؤدیان.",
  },
  {
    icon: ShoppingCart,
    title: "صندوق فروشگاهی",
    description:
      "فروش حضوری، برگشت، انبار فروشگاه، تسویه طرف‌حساب و گزارش‌های خرده‌فروشی.",
  },
  {
    icon: Boxes,
    title: "انبار و موجودی",
    description:
      "رسید و حواله، خرید، تأمین‌کنندگان، کاردکس، تعدیل موجودی و کنترل موجودی چندانباره.",
  },
  {
    icon: ClipboardList,
    title: "کارتابل و عملیات",
    description:
      "ارجاع کار، تصمیم‌گیری سازمانی، تسک، پیام‌رسانی داخلی و پیگیری درخواست‌ها.",
  },
  {
    icon: Workflow,
    title: "اتوماسیون و پنل مشتری",
    description:
      "اتوماسیون فرآیندها، پشتیبانی مشتری و پورتال مشتری برای پیگیری و ارتباط مستقیم.",
  },
  {
    icon: Building2,
    title: "چند کسب‌وکار",
    description:
      "مدیریت چند واحد سازمانی یا کسب‌وکار زیر یک سازمان با جداسازی داده و دسترسی.",
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
              مجموعه‌ای منسجم از ماژول‌های عملیاتی برای اداره روزانه و مقیاس‌پذیری
              سازمان.
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
