import CodeBlock from "@/components/CodeBlock";

export default function PropDrillingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Prop Drilling i React</h1>
      <p className="text-xs">
        Prop Drilling refererer til at sende props fra en forælderkomponent til en barnkomponent, som måske ikke selv har brug for propsen, men som skal videregive den til en endnu dybere komponent.
      </p>

      <h2 className="text-base">Eksempel: Prop Drilling</h2>
      <CodeBlock
        code={`function Grandparent() {
  const message = "Hej fra bedsteforælder!";
  return <Parent message={message} />;
}

function Parent({ message }) {
  return <Child message={message} />;
}

function Child({ message }) {
  return <p>{message}</p>;
}`}
        language="javascript"
      />

      <h2 className="text-base">Hvordan fungerer Prop Drilling?</h2>
      <p className="text-xs">
        Prop Drilling opstår, når en komponent sender props gennem flere niveauer af komponenter. Dette kan føre til unødvendig kompleksitet og gøre det svært at vedligeholde koden, når mange komponenter skal bruge data, som kun en af dem oprindeligt havde.
      </p>

      <h2 className="text-base">Fordele og Ulemper ved Prop Drilling</h2>
      <ul className="text-xs">
        <li><strong>Fordele:</strong> Enkel implementering for små applikationer, hvor datadeling mellem komponenter er direkte.</li>
        <li><strong>Ulemper:</strong> Kan føre til vanskeligheder ved vedligeholdelse i store applikationer, da props skal videregives gennem mange niveauer af komponenter.</li>
        <li><strong>Løsning:</strong> Brug af Context API eller state management løsninger som Redux kan undgå prop drilling ved at centralisere state-håndtering.</li>
      </ul>
    </div>
  );
}
