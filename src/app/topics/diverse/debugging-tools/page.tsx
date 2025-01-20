import CodeBlock from "@/components/CodeBlock";

export default function DebuggingToolsPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Debugging Tools i Next.js</h1>
      <p className="text-xs">
        Fejlfinding er en vigtig del af udviklingsprocessen, og der findes mange
        værktøjer til at hjælpe med at finde og rette fejl i din applikation. I
        Next.js kan du bruge forskellige værktøjer som React DevTools og
        Next.js&apos; egne debugger-funktioner.
      </p>

      <h2 className="text-base">React DevTools</h2>
      <p className="text-xs">
        React DevTools er et kraftfuldt værktøj til at debugge
        React-applikationer. Det giver dig mulighed for at inspicere
        komponenter, deres tilstand og props, samt at fejlsøge
        renderingsprocessen. Du kan installere React DevTools som en
        browserudvidelse eller som et stand-alone værktøj.
      </p>

      <h3 className="text-base">Installation af React DevTools</h3>
      <p className="text-xs">
        For at bruge React DevTools, skal du installere browserudvidelsen, som
        kan findes på Chrome Web Store eller Firefox Add-ons. Alternativt kan du
        bruge DevTools som et stand-alone værktøj via npm:
      </p>
      <CodeBlock code={`npm install -g react-devtools`} language="bash" />
      <p className="text-xs">
        Når du har installeret DevTools, kan du starte det med følgende
        kommando:
      </p>
      <CodeBlock code={`react-devtools`} language="bash" />
      <p className="text-xs">
        Når værktøjet kører, vil du kunne bruge DevTools til at inspektere dine
        React-komponenter i browserens udviklerværktøjer.
      </p>

      <h3 className="text-base">Brug af React DevTools</h3>
      <p className="text-xs">
        Når du åbner React DevTools, vil du se en ny fane i din browser&apos;s
        DevTools kaldet &quot;React&quot;. Her kan du:
      </p>
      <ul className="text-xs">
        <li>Se komponenter i komponenttræet.</li>
        <li>Inspecte komponentens props, state og hooks.</li>
        <li>Profiler komponentrendering for at analysere performance.</li>
      </ul>

      <h2 className="text-base">Next.js Debugger</h2>
      <p className="text-xs">
        Next.js leveres også med nogle nyttige debugger-værktøjer, der kan
        hjælpe med fejlfinding. Du kan bruge <code>console.log</code> eller
        bruge browserens indbyggede udviklerværktøjer til at debugge din
        Next.js-applikation.
      </p>

      <h3 className="text-base">Debugging af Next.js server-side kode</h3>
      <p className="text-xs">
        Når du arbejder med server-side funktioner som{" "}
        <code>getServerSideProps</code> eller <code>getStaticProps</code>, kan
        du bruge Node.js&apos; indbyggede debugger. Du kan starte din Next.js
        app med debugging aktiveret ved at bruge følgende kommando:
      </p>
      <CodeBlock
        code={`node --inspect-brk node_modules/.bin/next dev`}
        language="bash"
      />
      <p className="text-xs">
        Dette åbner debugging-porten og giver dig mulighed for at tilslutte en
        debugger som Chrome DevTools eller VSCode.
      </p>

      <h3 className="text-base">Brug af breakpoints i Next.js</h3>
      <p className="text-xs">
        Du kan også bruge breakpoints i Next.js for at stoppe koden ved bestemte
        steder og inspicere variabler og kørselstrin. For at gøre dette kan du
        tilføje <code>debugger;</code> i din kode, og når applikationen når den
        linje, stopper den og giver dig mulighed for at inspicere værdier.
      </p>
      <CodeBlock
        code={`// For eksempel i getServerSideProps
export async function getServerSideProps() {
  debugger; // Breakpoint for at debugge server-side kode
  const data = await fetch('https://api.example.com/data');
  return { props: { data } };
}`}
        language="javascript"
      />

      <h3 className="text-base">Next.js Debugging i Produktion</h3>
      <p className="text-xs">
        Når du fejlsøger en produktion Next.js-applikation, kan du bruge{" "}
        <code>next-logger</code> for at logge fejl og advarsler. Det giver en
        nem måde at holde styr på applikationens opførsel i produktion.
      </p>

      <h2 className="text-base">Fordele ved Debugging Tools</h2>
      <ul className="text-xs">
        <li>
          <strong>Forbedret fejlfinding:</strong> Værktøjer som React DevTools
          gør det muligt at finde og rette fejl i React-komponenter hurtigt.
        </li>
        <li>
          <strong>Performance optimering:</strong> Brug profiler til at
          analysere renderingstider og finde performanceflaskehalse.
        </li>
        <li>
          <strong>Bedre server-side debugging:</strong> Next.js giver mulighed
          for at debugge server-side kode med breakpoints og debugger-ports.
        </li>
      </ul>
    </div>
  );
}
