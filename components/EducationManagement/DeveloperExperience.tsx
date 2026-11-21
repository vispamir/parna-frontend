import {
  BookOpen,
  Boxes,
  FlaskConical,
  KeyRound,
  Server,
  Webhook,
} from "lucide-react";
import Reveal from "./Reveal";

const techItems = [
  { icon: Server, label: "REST API" },
  { icon: KeyRound, label: "کلید API" },
  { icon: Webhook, label: "رویدادها" },
  { icon: FlaskConical, label: "محیط آزمایشی" },
  { icon: BookOpen, label: "مستندات" },
  { icon: Boxes, label: "یکپارچه‌سازی" },
];

const codeSnippet = `POST /api/v1/enrollments

{
  "learner_id": "lrn_2041",
  "term_id": "trm_1404_1",
  "class_id": "cls_88",
  "tuition_plan": "installment_3"
}`;

const DeveloperExperience = () => {
  return (
    <section className="border-y border-stroke bg-gray-light/40 py-16 dark:border-stroke-dark dark:bg-bg-color-dark/30 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap items-start gap-y-10">
          <div className="w-full lg:w-1/2 lg:pl-10">
            <Reveal>
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                آماده اتصال به سامانه‌های آموزشی شما
              </h2>
              <p className="mb-8 max-w-[520px] text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
                با API استاندارد می‌توانید ثبت‌نام، شهریه، کلاس و پورتال را به
                سامانه‌های موجود مدرسه یا دانشگاه متصل کنید و فرآیندها را خودکار
                سازید.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {techItems.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 border border-stroke bg-white px-3 py-2.5 dark:border-stroke-dark dark:bg-gray-dark"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-primary"
                      strokeWidth={1.75}
                    />
                    <span className="text-sm font-medium text-black dark:text-white">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="w-full lg:w-1/2">
            <Reveal delayMs={100}>
              <div className="overflow-hidden rounded-lg border border-stroke bg-[#0F141E] shadow-two dark:border-stroke-dark">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <span className="text-xs text-white/60">ثبت‌نام فراگیر</span>
                  <span className="rounded bg-primary/20 px-2 py-0.5 text-[10px] font-medium text-primary">
                    HTTP
                  </span>
                </div>
                <pre
                  dir="ltr"
                  className="overflow-x-auto p-5 text-left text-[13px] leading-relaxed text-[#D7DEEA]"
                >
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperExperience;
