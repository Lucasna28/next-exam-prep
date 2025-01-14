import CodeBlock from "@/components/CodeBlock";

export default function DebouncingThrottlingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Debouncing og Throttling</h1>
      <p className="text-xs">
        Debouncing og throttling er teknikker, der bruges til at styre hyppigheden af funktioner, der bliver kaldt i JavaScript. Begge teknikker kan hjælpe med at forbedre ydeevnen i applikationer, især når du arbejder med funktioner, der udløses hurtigt og ofte, som f.eks. når du lytter til events som scroll eller input.
      </p>

      <h2 className="text-base">Hvad er Debouncing?</h2>
      <p className="text-xs">
        Debouncing er en teknik, hvor vi forsinker kaldet af en funktion, indtil der er gået en bestemt mængde tid, efter at den sidste hændelse er blevet udløst. Det betyder, at hvis en funktion bliver kaldt flere gange hurtigt (som ved tastetryk i et inputfelt), vil den kun blive udført én gang, efter at der ikke er blevet udløst flere hændelser i en given periode.
      </p>

      <CodeBlock
        code={`// Eksempel på Debouncing
function debouncedFunction(fn, delay) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, arguments), delay);
  };
}

const searchInput = document.getElementById("search");

const debouncedSearch = debouncedFunction(function() {
  console.log("Søger...");
}, 500);

searchInput.addEventListener("input", debouncedSearch);`}
        language="javascript"
      />

      <h2 className="text-base">Hvordan Debouncing virker</h2>
      <p className="text-xs">
        I ovenstående eksempel, når der skrives i et inputfelt, vil funktionen kun blive kaldt én gang, 500 millisekunder efter det sidste tastetryk, i stedet for at blive kaldt for hver enkelt tastetryk. Dette er især nyttigt, når man f.eks. laver en søgning i realtid, hvor man ikke vil sende en forespørgsel for hvert tastetryk.
      </p>

      <h2 className="text-base">Hvad er Throttling?</h2>
      <p className="text-xs">
        Throttling er en teknik, der sørger for, at en funktion kun bliver kaldt én gang ad gangen i et givet tidsinterval. Dette er nyttigt, når man vil begrænse hyppigheden af funktioner, der bliver kaldt hurtigt, som f.eks. ved scroll-events eller window resize.
      </p>

      <CodeBlock
        code={`// Eksempel på Throttling
function throttledFunction(fn, limit) {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      fn.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if (Date.now() - lastRan >= limit) {
          fn.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

const handleScroll = throttledFunction(function() {
  console.log("Scroll event triggered!");
}, 200);

window.addEventListener("scroll", handleScroll);`}
        language="javascript"
      />

      <h2 className="text-base">Hvordan Throttling virker</h2>
      <p className="text-xs">
        I dette eksempel vil funktionen <code>handleScroll</code> kun blive kaldt én gang hvert 200 millisekund, selvom scroll-events sker hurtigere end det. Dette kan hjælpe med at reducere belastningen på applikationen og forbedre ydeevnen, især når der er mange events, som f.eks. scroll.
      </p>

      <h2 className="text-base">Fordele ved Debouncing</h2>
      <ul className="text-xs">
        <li><strong>Reduceret antal funktionskald:</strong> Funktioner bliver kun kaldt, når der er en pause i hændelserne.</li>
        <li><strong>Forbedret ydeevne:</strong> Hjælper med at undgå at køre dyre funktioner gentagne gange på kort tid.</li>
        <li><strong>Velegnet til input felter:</strong> Perfekt til realtids-søgning eller validering af inputfelter.</li>
      </ul>

      <h2 className="text-base">Fordele ved Throttling</h2>
      <ul className="text-xs">
        <li><strong>Reducerer hyppigheden af kald:</strong> Gør det muligt at håndtere højfrekvente events som scroll og resize effektivt.</li>
        <li><strong>Forbedrer brugeroplevelsen:</strong> Minsker forsinkelser i UI'en ved at sikre, at funktioner ikke bliver kaldt for ofte.</li>
        <li><strong>Velegnet til events som scroll, resize:</strong> Er ideel til at håndtere events, der kan opstå hurtigt og ofte.</li>
      </ul>

      <h2 className="text-base">Hvornår skal man bruge Debouncing og Throttling?</h2>
      <p className="text-xs">
        - Brug <strong>debouncing</strong> når du har brug for at vente på, at hændelser stopper før du udfører en funktion, f.eks. ved input i en søgebar.
        <br />
        - Brug <strong>throttling</strong> når du vil begrænse hyppigheden af funktioner, der udløses hurtigt og ofte, som f.eks. scroll-events.
      </p>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Debouncing og throttling er begge effektive teknikker til at styre hyppigheden af funktionskald i JavaScript og kan hjælpe med at forbedre ydeevnen i applikationer, der håndterer mange events. Valget mellem debouncing og throttling afhænger af den specifikke anvendelse og den ønskede adfærd.
      </p>
    </div>
  );
}
