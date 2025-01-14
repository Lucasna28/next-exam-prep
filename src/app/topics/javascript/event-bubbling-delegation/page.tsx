import CodeBlock from "@/components/CodeBlock";

export default function EventBubblingDelegationPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Event Bubbling og Event Delegation</h1>
      <p className="text-xs">
        Event bubbling og event delegation er teknikker, der bruges til at håndtere events i DOM'en, hvilket gør det lettere at administrere events på flere elementer uden at skulle tilføje en event listener til hvert enkelt element.
      </p>

      <h2 className="text-base">Hvad er Event Bubbling?</h2>
      <p className="text-xs">
        Event bubbling beskriver den måde, hvorpå et event starter ved den målrettede element og "bobler" op igennem DOM-træet, og aktiverer event listeners på hver forælder, indtil den når <code>document</code>.
      </p>

      <CodeBlock
        code={`// Eksempel på Event Bubbling
const button = document.getElementById("myButton");

button.addEventListener("click", (event) => {
  console.log("Klikket på knappen");
});

document.body.addEventListener("click", () => {
  console.log("Body blev klikket");
});

// Klik på knappen vil logge begge meddelelser:
// 1. "Klikket på knappen" (fra knappen)
// 2. "Body blev klikket" (fra body)`}
        language="javascript"
      />

      <h2 className="text-base">Hvordan Event Bubbling virker</h2>
      <p className="text-xs">
        I ovenstående eksempel vil et klik på knappen <code>#myButton</code> trigge både eventet på knappen og eventet på dens forælder (i dette tilfælde <code>body</code>). Eventet "bobler" op fra det målrettede element til de overordnede elementer i DOM'en.
      </p>

      <h2 className="text-base">Hvad er Event Delegation?</h2>
      <p className="text-xs">
        Event delegation er en teknik, hvor du i stedet for at tilføje event listeners til mange elementer, tilføjer én enkelt event listener til en forælder. Når et event opstår på et af de indre elementer, håndteres det af event listeneren på forælderen.
      </p>

      <CodeBlock
        code={`// Eksempel på Event Delegation
document.getElementById("parentDiv").addEventListener("click", (event) => {
  if (event.target && event.target.matches("button")) {
    console.log("Klik på en knap!");
  }
});`}
        language="javascript"
      />

      <h2 className="text-base">Hvordan Event Delegation virker</h2>
      <p className="text-xs">
        I stedet for at tilføje en event listener til hver knap, tilføjer vi en enkelt event listener til den overordnede <code>div</code> (i dette tilfælde <code>#parentDiv</code>). Når et klik sker på et barn (f.eks. en knap), tjekker vi, om eventets mål er en knap, og håndterer eventet derefter.
      </p>

      <h2 className="text-base">Fordele ved Event Delegation</h2>
      <ul className="text-xs">
        <li><strong>Ydeevne:</strong> Det reducerer antallet af event listeners på DOM-elementer, hvilket gør det mere effektivt, især når du arbejder med mange elementer.</li>
        <li><strong>Enkel vedligeholdelse:</strong> Med event delegation kan du tilføje en enkelt event listener, der håndterer alle klik på børnelementer, hvilket gør koden lettere at vedligeholde.</li>
        <li><strong>Dynamic Elements:</strong> Event delegation tillader, at du kan håndtere events på elementer, der bliver tilføjet dynamisk til DOM'en efter page load.</li>
      </ul>

      <h2 className="text-base">Eksempel på brug af Event Delegation med Dynamiske Elementer</h2>
      <CodeBlock
        code={`// Dynamisk oprettelse af knapper og event delegation
const parentDiv = document.getElementById("parentDiv");

for (let i = 1; i <= 5; i++) {
  const button = document.createElement("button");
  button.textContent = "Button " + i;
  parentDiv.appendChild(button);
}

parentDiv.addEventListener("click", (event) => {
  if (event.target && event.target.matches("button")) {
    console.log("Klik på knap: " + event.target.textContent);
  }
});`}
        language="javascript"
      />

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Event bubbling og event delegation er kraftfulde teknikker til håndtering af events i JavaScript. Ved at udnytte disse teknikker kan vi skrive effektiv, vedligeholdelig og fleksibel kode, der håndterer events på en elegant måde, især når vi arbejder med dynamiske og store DOM-strukturer.
      </p>
    </div>
  );
}
