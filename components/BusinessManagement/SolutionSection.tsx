"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const nodes = [
  { id: "crm", label: "فروش و CRM", x: 18, y: 18 },
  { id: "hr", label: "منابع انسانی", x: 50, y: 8 },
  { id: "finance", label: "مالی و حسابداری", x: 82, y: 18 },
  { id: "retail", label: "صندوق فروشگاهی", x: 12, y: 50 },
  { id: "inventory", label: "انبار و موجودی", x: 88, y: 50 },
  { id: "cartable", label: "کارتابل", x: 18, y: 82 },
  { id: "portal", label: "پنل مشتری", x: 50, y: 92 },
  { id: "api", label: "API عمومی", x: 82, y: 82 },
  { id: "automation", label: "اتوماسیون", x: 35, y: 35 },
  { id: "reports", label: "گزارش‌ها", x: 65, y: 35 },
];

const SolutionSection = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="border-y border-stroke bg-gray-light/40 py-16 dark:border-stroke-dark dark:bg-bg-color-dark/30 md:py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[700px] text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              همه‌چیز برای اداره یکپارچه کسب‌وکار
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark md:text-lg">
              ماژول‌های عملیاتی در یک لایه مشترک داده و دسترسی کنار هم قرار
              می‌گیرند.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative mx-auto aspect-square max-w-[720px] overflow-hidden rounded-lg border border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark md:aspect-[16/11]">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden
            >
              {nodes.map((node) => (
                <line
                  key={`line-${node.id}`}
                  x1="50"
                  y1="50"
                  x2={node.x}
                  y2={node.y}
                  stroke={active === node.id ? "#4A6CF7" : "#E3E8EF"}
                  strokeWidth={active === node.id ? 0.35 : 0.2}
                  className="transition-colors duration-300 dark:stroke-stroke-dark"
                />
              ))}
              <circle
                cx="50"
                cy="50"
                r="11"
                className="fill-primary/10 stroke-primary"
                strokeWidth="0.4"
              />
            </svg>

            <div className="absolute left-1/2 top-1/2 z-10 w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-md border border-primary bg-white px-3 py-3 text-center shadow-one dark:bg-dark sm:w-[180px]">
              <p className="text-[11px] font-semibold leading-snug text-primary sm:text-xs">
                زیرساخت کسب‌وکار
              </p>
            </div>

            {nodes.map((node) => (
              <button
                key={node.id}
                type="button"
                onMouseEnter={() => setActive(node.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(node.id)}
                onBlur={() => setActive(null)}
                className={`absolute z-10 max-w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-md border px-2 py-1.5 text-[10px] font-medium leading-tight transition sm:max-w-[140px] sm:px-2.5 sm:text-xs ${
                  active === node.id
                    ? "border-primary bg-primary text-white"
                    : "border-stroke bg-white text-black hover:border-primary/50 dark:border-stroke-dark dark:bg-dark dark:text-white"
                }`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                {node.label}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SolutionSection;
