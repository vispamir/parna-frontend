import Reveal from "@/components/PaymentFacility/Reveal";

const WhiteLabel = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[700px] text-center md:mb-14">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              زیرساخت از ما، تجربه مشتری از شما
            </h2>
            <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              برند، تجربه کاربری و منطق کسب‌وکار خود را حفظ کنید و قابلیت‌های
              مالی را روی زیرساخت ما پیاده کنید.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={60}>
          <div className="mx-auto flex max-w-[720px] flex-col items-center gap-4">
            <div className="grid w-full gap-4 sm:grid-cols-2">
              <div className="border border-stroke bg-white px-6 py-8 text-center dark:border-stroke-dark dark:bg-gray-dark">
                <p className="mb-2 text-xs font-medium text-body-color dark:text-body-color-dark">
                  لایه ۰۱
                </p>
                <p className="text-xl font-bold text-black dark:text-white">
                  برند شما
                </p>
              </div>
              <div className="border border-primary/40 bg-primary/5 px-6 py-8 text-center dark:bg-primary/10">
                <p className="mb-2 text-xs font-medium text-primary">لایه ۰۲</p>
                <p className="text-xl font-bold text-primary">زیرساخت ما</p>
              </div>
            </div>

            <div
              className="flex h-8 items-center text-body-color dark:text-body-color-dark"
              aria-hidden
            >
              <span className="text-2xl font-light">+</span>
            </div>

            <div className="w-full border border-black bg-black px-6 py-8 text-center text-white dark:border-white dark:bg-white dark:text-black">
              <p className="mb-2 text-xs font-medium opacity-70">نتیجه</p>
              <p className="text-xl font-bold md:text-2xl">محصول مالی شما</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhiteLabel;
