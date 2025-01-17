import CodeBlock from "@/components/CodeBlock";

export default function CypressPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">End-to-End Testing med Cypress</h1>
      <p className="text-xs">
        Cypress er et populært værktøj til end-to-end (E2E) testing. Det giver en nem opsætning og en intuitiv grænseflade til at teste hele applikationen fra brugerens perspektiv.
      </p>

      <h2 className="text-base">Opsætning i Next.js</h2>
      <p className="text-xs">
        For at begynde at bruge Cypress i et Next.js-projekt, skal du installere Cypress:
      </p>
      <CodeBlock
        code={`npm install cypress --save-dev`}
        language="bash"
      />
      <p className="text-xs">
        Når installationen er færdig, kan du initialisere Cypress med:
      </p>
      <CodeBlock
        code={`npx cypress open`}
        language="bash"
      />
      <p className="text-xs">
        Dette opretter en <code>cypress</code>-mappe, hvor du kan skrive dine tests.
      </p>

      <h2 className="text-base">Eksempel på en Cypress-test</h2>
      <p className="text-xs">
        Her er et eksempel på en simpel Cypress-test, der verificerer, at startsiden loader korrekt:
      </p>
      <CodeBlock
        code={`// cypress/e2e/home.cy.js
describe("Startside test", () => {
  it("Loader startsiden", () => {
    cy.visit("/");
    cy.contains("Velkommen").should("be.visible");
  });
});`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved Cypress</h2>
      <ul className="text-xs">
        <li>Let at sætte op og bruge med Next.js.</li>
        <li>Interaktiv brugergrænseflade, der gør det nemt at debugge tests.</li>
        <li>Understøtter automatisering og videooptagelser af testforløb.</li>
      </ul>

      <h2 className="text-base">Næste skridt</h2>
      <p className="text-xs">
        Udforsk avancerede funktioner som netværksstubs og integrationstests for at få mest muligt ud af Cypress.
      </p>
    </div>
  );
}
