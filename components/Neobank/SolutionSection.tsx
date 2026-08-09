import Reveal from "@/components/PaymentFacility/Reveal";

const modules = ["حساب", "دفترکل", "کارت", "کیف پول"];
const secondary = ["تراکنش", "موجودی", "پرداخت", "تسویه"];

const SolutionSection = () => {
  return (
    <section className="border-y border-stroke bg-gray-light/40 py-16 dark:border-stroke-dark dark:bg-bg-color-dark/30 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[700px] text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              یک زیرساخت، تمام اجزای موردنیاز نئوبانک
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto max-w-[820px] space-y-3 border border-stroke bg-white p-5 dark:border-stroke-dark dark:bg-gray-dark md:p-8">
            <Layer label="اپلیکیشن شما" />
            <Arrow />
            <Layer label="درگاه API" accent />
            <Arrow />
            <div className="border border-primary/30 bg-primary/5 p-4 dark:bg-primary/10 md:p-5">
              <p className="mb-4 text-center text-sm font-semibold text-primary">
                زیرساخت بانکداری
              </p>
              <div className="mb-3 grid grid-cols-2 gap-2 md:grid-cols-4">
                {modules.map((item) => (
                  <div
                    key={item}
                    className="border border-stroke bg-white px-2 py-3 text-center text-xs font-semibold text-black dark:border-stroke-dark dark:bg-dark dark:text-white md:text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {secondary.map((item) => (
                  <div
                    key={item}
                    className="border border-dashed border-stroke bg-transparent px-2 py-2.5 text-center text-xs font-medium text-body-color dark:border-stroke-dark dark:text-body-color-dark"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <Arrow />
            <Layer label="ریل‌های بانکی و مالی" muted />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const Layer = ({
  label,
  accent = false,
  muted = false,
}: {
  label: string;
  accent?: boolean;
  muted?: boolean;
}) => (
  <div
    className={`px-4 py-3 text-center text-sm font-semibold ${
      accent
        ? "border border-primary bg-primary text-white"
        : muted
          ? "border border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
          : "border border-stroke bg-gray-light/70 text-black dark:border-stroke-dark dark:bg-dark dark:text-white"
    }`}
  >
    {label}
  </div>
);

const Arrow = () => (
  <div className="flex justify-center" aria-hidden>
    <div className="h-5 w-px bg-stroke dark:bg-stroke-dark" />
  </div>
);

export default SolutionSection;
