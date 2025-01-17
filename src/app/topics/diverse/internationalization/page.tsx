"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CodeBlock from "@/components/CodeBlock";

export default function I18nPage() {
  const router = useRouter();
  const { locale, locales, asPath } = router;
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    // Sæt det aktuelle sprog, når komponenten bliver monteret
    setCurrentLocale(locale);
  }, [locale]);

  const handleChangeLanguage = (newLocale: string) => {
    router.push(asPath, asPath, { locale: newLocale });
  };

  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Internationalization (i18n) i Next.js</h1>
      <p className="text-xs">
        Internationalization (i18n) gør det muligt for webapplikationer at
        understøtte flere sprog og regioner. I Next.js kan du nemt implementere
        i18n ved at bruge de indbyggede funktioner og indstillinger.
      </p>

      <h2 className="text-base">Hvordan i18n fungerer i Next.js</h2>
      <p className="text-xs">
        Next.js understøtter internationalisering (i18n) som en del af sin
        indbyggede routing. Du kan definere forskellige sprog i din
        Next.js-konfiguration og bruge routerens <code>locale</code> for at
        ændre sprog dynamisk.
      </p>

      <h3 className="text-base">Opsætning af i18n i Next.js</h3>
      <p className="text-xs">
        For at aktivere i18n i Next.js, skal du først tilføje en{" "}
        <code>i18n</code>-konfiguration i din <code>next.config.js</code> fil:
      </p>
      <CodeBlock
        code={`// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'da', 'de'],
    defaultLocale: 'en',
  },
};`}
        language="javascript"
      />

      <h3 className="text-base">Skift sprog dynamisk</h3>
      <p className="text-xs">
        Når du har sat op din i18n-konfiguration, kan du bruge Next.js-routerens{" "}
        <code>locale</code> og <code>locales</code> til at ændre sprog dynamisk.
        Du kan implementere en sprogselector som i følgende eksempel:
      </p>
      <CodeBlock
        code={`import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locales, locale, asPath } = router;

  const changeLanguage = (newLocale) => {
    router.push(asPath, asPath, { locale: newLocale });
  };

  return (
    <div>
      <h3>Current Language: {locale}</h3>
      <select onChange={(e) => changeLanguage(e.target.value)} value={locale}>
        {locales.map((lng) => (
          <option key={lng} value={lng}>
            {lng}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;`}
        language="javascript"
      />

      <h3 className="text-base">Eksempel på oversættelse</h3>
      <p className="text-xs">
        For at vise forskellige indhold på tværs af sprog, kan du bruge en
        oversættelsesfil og importere den baseret på det aktuelle sprog. Her er
        et eksempel:
      </p>
      <CodeBlock
        code={`// en.json (English)
{
  "greeting": "Hello, welcome to our website!"
}

// da.json (Danish)
{
  "greeting": "Hej, velkommen til vores hjemmeside!"
}`}
        language="json"
      />

      <h3 className="text-base">Brug af oversættelse i komponenter</h3>
      <p className="text-xs">
        Når du har dine oversættelsesfiler, kan du bruge dem i dine komponenter
        som følger:
      </p>
      <CodeBlock
        code={`import { useRouter } from 'next/router';
import en from '@/locales/en.json';
import da from '@/locales/da.json';

const translations = { en, da };

export default function HomePage() {
  const { locale } = useRouter();
  const t = translations[locale];

  return <h1>{t.greeting}</h1>;
}`}
        language="javascript"
      />

      <h3 className="text-base">Fordele ved i18n i Next.js</h3>
      <ul className="text-xs">
        <li>
          <strong>Flere sprog:</strong> Giver brugerne mulighed for at vælge
          deres foretrukne sprog.
        </li>
        <li>
          <strong>Automatisk sprogdetektion:</strong> Next.js kan automatisk
          vælge sprog baseret på brugerens browserindstillinger.
        </li>
        <li>
          <strong>Optimering:</strong> Next.js understøtter server-side
          rendering (SSR) og statisk generation (SSG) med internationalisering,
          hvilket gør det muligt at generere forskellige versioner af siderne
          baseret på sprog.
        </li>
      </ul>

      <h3 className="text-base">Flere sprog og lokaliserede ruter</h3>
      <p className="text-xs">
        Next.js understøtter også at have forskellige ruter for hvert sprog. Du
        kan f.eks. have en URL-struktur som <code>/en/</code> for engelsk og{" "}
        <code>/da/</code> for dansk.
      </p>
    </div>
  );
}
