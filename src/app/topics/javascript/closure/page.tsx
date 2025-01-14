import CodeBlock from "@/components/CodeBlock";

export default function ClosurePage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Closure</h1>
      <p className="text-xs">
        En closure i JavaScript er en funktion, der husker sin omgivende kontekst, selv efter at den er blevet returneret og eksekveret udenfor den oprindelige funktion. Dette betyder, at en closure har adgang til variablerne fra den funktion, den blev oprettet i, selv når den bliver kaldt udenfor det oprindelige scope.
      </p>

      <h2 className="text-base">Hvordan Closure virker</h2>
      <p className="text-xs">
        Når en funktion bliver oprettet i en anden funktion, har den adgang til både dens egne variable og de variabler fra den omgivende funktion. Hvis den indre funktion bliver returneret og kaldt senere, husker den stadig den oprindelige omgivende funktion og dens variabler.
      </p>

      <CodeBlock
        code={`function outerFunction() {
  let outerVariable = "Jeg er fra den ydre funktion";
  
  function innerFunction() {
    console.log(outerVariable); // Har adgang til outerVariable
  }
  
  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // "Jeg er fra den ydre funktion"`}

        language="javascript"
      />

      <h2 className="text-base">Eksempel: En closure</h2>
      <p className="text-xs">
        I dette eksempel opretter vi en funktion <code>outerFunction</code>, som indeholder en variabel <code>outerVariable</code>. Vi opretter en indre funktion <code>innerFunction</code>, som refererer til <code>outerVariable</code>. Når vi returnerer <code>innerFunction</code> og kalder den senere, husker den stadig den oprindelige kontekst og får adgang til <code>outerVariable</code>.
      </p>

      <h2 className="text-base">Fordele ved Closure</h2>
      <ul className="text-xs">
        <li><strong>Dataenkapsling:</strong> Closure kan hjælpe med at beskytte og isolere data fra det globale scope ved at holde variable private.</li>
        <li><strong>Oprettelse af funktioner med vedvarende tilstand:</strong> Closure gør det muligt at oprette funktioner, der husker en bestemt tilstand, selv når de kaldes senere.</li>
        <li><strong>Højere funktionalitet:</strong> Closure kan bruges til at skabe mere fleksible og genbrugbare funktioner, som kan have specifik adgang til eksterne data.</li>
      </ul>

      <h2 className="text-base">Eksempel: Closure som en tæller</h2>
      <p className="text-xs">
        Closure kan bruges til at skabe funktioner, der bevarer tilstanden mellem kald. For eksempel kan vi oprette en tæller, som husker dens nuværende værdi på tværs af flere funktionelle kald.
      </p>

      <CodeBlock
        code={`function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3`}

        language="javascript"
      />

      <h2 className="text-base">Eksempel: Closure som en tæller</h2>
      <p className="text-xs">
        I dette eksempel opretter vi en funktion <code>createCounter</code>, som opretter en tæller og returnerer en funktion, der øger tælleren og viser den opdaterede værdi. Hver gang vi kalder <code>counter()</code>, husker funktionen den oprindelige værdi af <code>count</code>, hvilket gør den vedvarende.
      </p>

      <h2 className="text-base">Hvordan Closure hjælper med privatliv i JavaScript</h2>
      <p className="text-xs">
        Closure kan bruges til at skabe privat data, som kun er tilgængelig for de funktioner, der har adgang til det. Dette er et grundlæggende aspekt af funktionel programmering i JavaScript.
      </p>

      <CodeBlock
        code={`function createSecret() {
  let secret = "hemmelig";
  
  return function() {
    return secret;
  };
}

const getSecret = createSecret();
console.log(getSecret()); // "hemmelig"`}

        language="javascript"
      />

      <h2 className="text-base">Eksempel: Closure til privat data</h2>
      <p className="text-xs">
        I dette eksempel bruger vi closure til at skabe en privat variabel <code>secret</code>, som kun kan tilgås via funktionen <code>getSecret</code>. Dette giver os mulighed for at beskytte data fra at blive ændret udenfor funktionen.
      </p>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Closure er et powerfult koncept i JavaScript, som giver funktioner mulighed for at huske deres oprindelige kontekst og de variabler, de blev oprettet med. Dette kan være nyttigt til at skabe funktioner med vedvarende tilstand, beskytte privat data og meget mere. At forstå og udnytte closures er et vigtigt skridt i at blive en dygtig JavaScript-udvikler.
      </p>
    </div>
  );
}
