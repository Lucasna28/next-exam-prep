"use client";

import { useEffect, useState } from "react";
import { onCLS, onFID, onLCP, Metric } from "web-vitals";
import CodeBlock from "@/components/CodeBlock";

interface WebVitalsMetrics {
  LCP?: number;
  FID?: number;
  CLS?: number;
}

export default function WebVitalsPage() {
  const [webVitalsData, setWebVitalsData] = useState<WebVitalsMetrics | null>(
    null
  );

  useEffect(() => {
    onLCP((metric: Metric) => {
      setWebVitalsData((prevData) => ({
        ...prevData,
        LCP: metric.value,
      }));
    });

    onFID((metric: Metric) => {
      setWebVitalsData((prevData) => ({
        ...prevData,
        FID: metric.value,
      }));
    });

    onCLS((metric: Metric) => {
      setWebVitalsData((prevData) => ({
        ...prevData,
        CLS: metric.value,
      }));
    });
  }, []);

  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Web Vitals</h1>
      <p className="text-xs">
        Web Vitals er et initiativ fra Google, der fokuserer på at forbedre
        brugeroplevelsen på websteder. De vigtigste Web Vitals-metrics
        inkluderer Core Web Vitals, som giver indsigt i, hvordan dine brugere
        oplever din webside, med fokus på performance og interaktivitet.
      </p>

      <h2 className="text-base">De vigtigste Web Vitals</h2>
      <ul className="text-xs">
        <li>
          <strong>Largest Contentful Paint (LCP):</strong> Måler den tid, det
          tager at renderere den største synlige del af din side.
        </li>
        <li>
          <strong>First Input Delay (FID):</strong> Måler den tid, det tager for
          din side at reagere på brugerens første interaktion (klik, tastetryk,
          etc.).
        </li>
        <li>
          <strong>Cumulative Layout Shift (CLS):</strong> Måler hvor meget
          layoutet af din side skifter under indlæsning, hvilket kan forårsage
          en dårlig brugeroplevelse.
        </li>
      </ul>

      <h3 className="text-base">Hvordan Web Vitals hjælper med performance</h3>
      <p className="text-xs">
        Web Vitals giver dig præcise målinger af de vigtigste aspekter af
        brugeroplevelsen, så du kan forbedre din applikations performance.
        F.eks. ved at reducere LCP og CLS kan du sikre, at brugerne får en
        hurtigere og mere responsiv oplevelse.
      </p>

      <h3 className="text-base">Eksempel på brug af Web Vitals i Next.js</h3>
      <p className="text-xs">
        Next.js gør det nemt at rapportere Web Vitals ved at bruge Web Vitals
        API&apos;et direkte og sende målingerne til en funktion, der kan gemme
        eller vise disse data.
      </p>
      <CodeBlock
        code={`import { onCLS, onFID, onLCP } from 'web-vitals';

export default function WebVitalsPage() {
  useEffect(() => {
    onLCP((metric) => {
      console.log(metric); // Du kan sende denne data til et tracking system eller vise det på din side
    });

    onFID((metric) => {
      console.log(metric);
    });

    onCLS((metric) => {
      console.log(metric);
    });
  }, []);

  return <div>Web Vitals data bliver indsamlet...</div>;
}`}
        language="javascript"
      />

      <h2 className="text-base">Hvordan Web Vitals påvirker SEO</h2>
      <p className="text-xs">
        Google bruger Web Vitals som en rankingfaktor, hvilket betyder, at
        dårlig performance (som f.eks. høj LCP eller dårlig CLS) kan påvirke din
        placering i søgeresultaterne. Det er derfor vigtigt at optimere disse
        metrics for at sikre bedre SEO og brugeroplevelse.
      </p>

      <h3 className="text-base">Måling af Web Vitals i Produktion</h3>
      <p className="text-xs">
        For at få præcise målinger af Web Vitals i produktion, kan du bruge{" "}
        <code>web-vitals</code> biblioteket sammen med en løsning som Google
        Analytics, Firebase eller et andet tracking-system til at indsamle data
        og analysere performance i det virkelige liv.
      </p>

      {webVitalsData && (
        <div className="text-xs">
          <h4 className="text-base">Web Vitals Data</h4>
          <pre>{JSON.stringify(webVitalsData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
