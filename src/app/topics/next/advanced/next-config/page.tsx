import CodeBlock from "@/components/CodeBlock";

export default function NextConfigPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Forstå next.config.js</h1>

      <h2 className="text-base">Hvad er next.config.js?</h2>
      <p className="text-xs">
        <code>next.config.js</code> er en central konfigurationsfil, der bruges til at tilpasse din Next.js-applikation. Den gør det muligt at aktivere specifikke funktioner, optimere ydeevnen og styre, hvordan Next.js bygger og håndterer din app.
      </p>

      <h2 className="text-base">Eksempel: Grundlæggende next.config.js</h2>
      <p className="text-xs">
        Her er et simpelt eksempel på en <code>next.config.js</code> fil. Denne konfiguration aktiverer React Strict Mode og tillader billeder fra en ekstern kilde.
      </p>

      <CodeBlock
        code={`module.exports = {
  reactStrictMode: true,
  images: {
    domains: [&quot;example.com&quot;],
  },
};`}
        language="javascript"
      />

      <h3 className="text-sm">Hvad gør denne konfiguration?</h3>
      <ul className="text-xs">
        <li><strong>reactStrictMode:</strong> Aktiverer React&apos;s Strict Mode for at hjælpe med at finde potentielle problemer i din app.</li>
        <li><strong>images.domains:</strong> Tillader Next.js at indlæse billeder fra eksterne domæner, f.eks. &quot;example.com&quot;.</li>
      </ul>

      <h5 className="text-base">Eksempel: Custom Webpack-konfiguration</h5>
      <p className="text-xs">
        Du kan også tilpasse Webpack for at tilføje avancerede funktioner eller understøttelse af nye filtyper. Her er et eksempel:
      </p>

      <CodeBlock
        code={`module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\\.svg$/,
      use: [&quot;@svgr/webpack&quot;],
    });
    return config;
  },
};`}
        language="javascript"
      />

      <h3 className="text-sm">Hvad gør denne Webpack-konfiguration?</h3>
      <ul className="text-xs">
        <li><strong>Tilføjer SVG-understøttelse:</strong> Gør det muligt at importere SVG-filer som React-komponenter ved hjælp af <code>@svgr/webpack</code>.</li>
        <li><strong>Tilpasset Webpack:</strong> Giver fuld fleksibilitet til at ændre Webpack&apos;s standardopsætning.</li>
      </ul>

      <h2 className="text-base">Fordele ved next.config.js</h2>
      <ul className="text-xs">
        <li><strong>Centraliseret kontrol:</strong> Alle konfigurationer håndteres ét sted.</li>
        <li><strong>Performance:</strong> Mulighed for at optimere billeder, caching og andre aspekter af din app.</li>
        <li><strong>Fleksibilitet:</strong> Tilpasning af Webpack og andre værktøjer gør det muligt at håndtere avancerede use cases.</li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        <code>next.config.js</code> er hjertet af din Next.js-applikations konfiguration. Med denne fil kan du optimere, tilpasse og skalere din applikation med avancerede funktioner og fleksibilitet.
      </p>
    </div>
  );
}
