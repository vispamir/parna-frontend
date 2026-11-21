import Link from "next/link";
import Reveal from "./Reveal";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden border-t border-stroke bg-black py-16 dark:border-stroke-dark md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(74,108,247,0.22),_transparent_60%)]" />
      <div className="container relative z-10">
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              عملیات آموزش را پراکنده نگه ندارید.
            </h2>
            <p className="mb-9 text-base leading-relaxed text-white/70 md:text-lg">
              با زیرساخت مدیریت آموزش پرنا، ثبت‌نام، شهریه، کلاس و ارتباط با
              فراگیران را در یک بستر واحد اداره کنید.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-w-[200px] items-center justify-center rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-primary/90"
              >
                درخواست مشاوره
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-w-[200px] items-center justify-center rounded-sm border border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white transition hover:border-white/50"
              >
                دریافت دمو
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTA;
