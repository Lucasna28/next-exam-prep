import CodeBlock from "@/components/CodeBlock";

export default function SassScssPage() {
  return (
    <div className="prose lg:prose-lg">
      <h1 className="text-lg">SASS/SCSS</h1>
      <p className="text-base">
        SASS (Syntactically Awesome Stylesheets) og dets mere populære variant SCSS er CSS-forhåndsprocessorer, der tilbyder avancerede funktioner som variabler, nesting, mixins, inheritance og meget mere. Det gør det lettere at organisere og vedligeholde komplekse stylesheets.
      </p>

      <h2 className="text-base">Fordele ved SASS/SCSS</h2>
      <ul className="text-base">
        <li>
          <strong>Variabler:</strong> Genbrug værdier som farver, afstande og skrifttyper over hele projektet.
        </li>
        <li>
          <strong>Nesting:</strong> Strukturér dine styles hierarkisk for at matche HTML.
        </li>
        <li>
          <strong>Mixins:</strong> Genbrug kodeblokke på tværs af dit stylesheet.
        </li>
        <li>
          <strong>Forlængelse:</strong> Del styles mellem forskellige klasser med <code>@extend</code>.
        </li>
      </ul>

      <h2 className="text-base">Installation</h2>
      <p className="text-base">
        For at bruge SASS/SCSS i et projekt kan du installere det via npm:
      </p>
      <CodeBlock code={`npm install sass`} language="bash" />

      <h2 className="text-base">Eksempler</h2>
      <h3 className="text-base">1. Variabler</h3>
      <CodeBlock
        code={`$primary-color: #3498db;

button {
  background-color: $primary-color;
  color: white;
}`}
        language="scss"
      />

      <h3 className="text-base">2. Nesting</h3>
      <CodeBlock
        code={`nav {
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      a {
        text-decoration: none;
        color: black;

        &:hover {
          color: #3498db;
        }
      }
    }
  }
}`}
        language="scss"
      />

      <h3 className="text-base">3. Mixins</h3>
      <CodeBlock
        code={`@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center;
  height: 100vh;
}`}
        language="scss"
      />

      <h2 className="text-base">SASS vs. SCSS</h2>
      <p className="text-base">
        SCSS er en nyere syntaks for SASS, der bruger en CSS-lignende syntax, hvilket gør det nemmere at lære og bruge. Her er et eksempel på forskellen:
      </p>
      <h3 className="text-base">SASS syntaks</h3>
      <CodeBlock
        code={`$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color`}
        language="sass"
      />
      <h3 className="text-base">SCSS syntaks</h3>
      <CodeBlock
        code={`$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}`}
        language="scss"
      />

      <h2 className="text-base">Konklusion</h2>
      <p className="text-base">
        SASS/SCSS gør det muligt at skrive mere effektiv og organiseret CSS, hvilket er særligt nyttigt i store projekter. Det hjælper med at skabe genanvendelig kode og øger produktiviteten i arbejdet med stylesheets.
      </p>
    </div>
  );
}
