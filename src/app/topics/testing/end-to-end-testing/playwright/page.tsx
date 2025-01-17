import CodeBlock from "@/components/CodeBlock";

export default function PlaywrightPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">End-to-End Testing med Playwright</h1>
      <p className="text-xs">
        Playwright er et kraftfuldt E2E-testværktøj fra Microsoft, der giver support til moderne browserfunktioner og multibrowsersupport.
      </p>

      <h2 className="text-base">Opsætning i Next.js</h2>
      <p className="text-xs">
        For at bruge Playwright i et Next.js-projekt skal du installere Playwright:
      </p>
      <CodeBlock
        code={`npm install @playwright/test --save-dev`}
        language="bash"
      />
      <p className="text-xs">
        Initialiser Playwright med følgende kommando:
      </p>
      <CodeBlock
        code={`npx playwright install`}
        language="bash"
      />
      <p className="text-xs">
        Dette opretter en standardopsætning og mapper til tests, herunder <code>tests</code>.
      </p>

      <h2 className="text-base">Eksempel på en Playwright-test</h2>
      <p className="text-xs">
        Her er et eksempel på en Playwright-test, der verificerer startsiden:
      </p>
      <CodeBlock
        code={`// tests/home.spec.js
const { test, expect } = require("@playwright/test");

test("Startside loader korrekt", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const welcomeText = await page.textContent("h1");
  expect(welcomeText).toBe("Velkommen");
});`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved Playwright</h2>
      <ul className="text-xs">
        <li>Support til flere browsere som Chrome, Firefox og WebKit.</li>
        <li>Kraftfulde funktioner som test af offline-tilstand og netværksinterception.</li>
        <li>Robust testarkitektur og parallellisering.</li>
      </ul>

      <h2 className="text-base">Næste skridt</h2>
      <p className="text-xs">
        Udforsk avancerede funktioner såsom visual regression testing og test af komplekse interaktioner med Playwright.
      </p>
    </div>
  );
}
