import CodeBlock from "@/components/CodeBlock";

export default function SnapshotTestingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Snapshot Testing</h1>
      <p className="text-xs">
        Snapshot testing bruges til at validere, at en komponentes output
        forbliver uændret over tid. Ved at gemme en &quot;`snapshot&quot;` af
        komponentens output kan fremtidige ændringer identificeres og gennemgås.
      </p>

      <h2 className="text-base">Opsætning i Next.js med Jest</h2>
      <p className="text-xs">
        For at bruge snapshot testing med Jest, installer nødvendige pakker:
      </p>
      <CodeBlock
        code={`npm install jest @testing-library/react @testing-library/jest-dom --save-dev`}
        language="bash"
      />

      <h2 className="text-base">Eksempel på Snapshot Testing</h2>
      <p className="text-xs">Lad os teste en simpel komponent:</p>
      <CodeBlock
        code={`// components/HelloWorld.js
export default function HelloWorld() {
  return <h1>Hello, World!</h1>;
}`}
        language="javascript"
      />
      <p className="text-xs">Snapshot-testfilen kan se sådan ud:</p>
      <CodeBlock
        code={`// __tests__/HelloWorld.test.js
import { render } from '@testing-library/react';
import HelloWorld from '../components/HelloWorld';

test('renders correctly', () => {
  const { container } = render(<HelloWorld />);
  expect(container).toMatchSnapshot();
});`}
        language="javascript"
      />

      <h2 className="text-base">Hvordan Snapshot Testing virker</h2>
      <p className="text-xs">
        Når testen køres første gang, genereres et snapshot i en{" "}
        <code>__snapshots__</code>-mappe. På fremtidige kørsler sammenlignes
        komponentens output med det eksisterende snapshot. Hvis der er
        forskelle, vil testen fejle, hvilket indikerer en ændring i output.
      </p>

      <h2 className="text-base">Fordele og Ulemper</h2>
      <h3 className="text-sm">Fordele</h3>
      <ul className="text-xs">
        <li>Hurtigt at implementere.</li>
        <li>Perfekt til komponenter med statisk output.</li>
        <li>Identificerer utilsigtede ændringer i UI.</li>
      </ul>
      <h3 className="text-sm">Ulemper</h3>
      <ul className="text-xs">
        <li>
          Kan blive besværligt at vedligeholde, hvis komponenter ændrer sig
          ofte.
        </li>
        <li>Overdreven brug kan føre til falske positiver.</li>
      </ul>

      <h2 className="text-base">Snapshot Testing i Next.js</h2>
      <p className="text-xs">
        Snapshot testing kan bruges i Next.js-projekter til at sikre stabilitet
        i UI-komponenter. Sørg for at inkludere snapshots som en del af
        kodegennemgangen for at vurdere ændringer.
      </p>
    </div>
  );
}
