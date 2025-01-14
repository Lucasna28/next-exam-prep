import CodeBlock from "@/components/CodeBlock";

export default function ModulesBundlingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Modules og Bundling</h1>
      <p className="text-xs">
        JavaScript-moduler og bundling er to vigtige teknologier i moderne webudvikling. Moduler hjælper med at organisere koden ved at opdele den i små, genbrugelige enheder, mens bundling hjælper med at optimere koden til produktion ved at samle disse moduler i én eller få filer.
      </p>

      <h2 className="text-base">Hvad er JavaScript-moduler?</h2>
      <p className="text-xs">
        Et JavaScript-modul er en fil, der indeholder koden til en bestemt funktionalitet. Moduler gør det muligt at opdele applikationen i mindre, håndterbare dele, som hver især kan importeres og anvendes af andre dele af applikationen. Dette skaber en bedre struktur og genanvendelighed i koden.
      </p>

      <h3 className="text-base">Eksempel på et Modul i JavaScript</h3>
      <p className="text-xs">
        Moduler kan eksportere funktionalitet (som funktioner, objekter eller værdier), og de kan importeres i andre filer.
      </p>
      <CodeBlock
        code={`// file: math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// file: app.js
import { add, subtract } from './math';

console.log(add(2, 3)); // 5
console.log(subtract(5, 3)); // 2`}
        language="javascript"
      />

      <h2 className="text-base">Hvordan Bundling fungerer?</h2>
      <p className="text-xs">
        Når man arbejder med JavaScript-moduler, kan antallet af filer hurtigt vokse, hvilket kan påvirke performance. Bundling er processen, hvor disse moduler samles til én eller få filer, som kan downloades hurtigere af browseren. Bundling minimerer også antallet af HTTP-anmodninger, som kan forbedre applikationens ydeevne.
      </p>

      <h3 className="text-base">Eksempel på Bundling med Webpack</h3>
      <p className="text-xs">
        Webpack er et populært værktøj til at bundle JavaScript-moduler og optimere filer til produktion. Her er et simpelt eksempel på, hvordan du kan konfigurere Webpack til at samle dine moduler.
      </p>
      <CodeBlock
        code={`// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved at Bruge Moduler og Bundling</h2>
      <ul className="text-xs">
        <li><strong>Organisation:</strong> Moduler giver mulighed for bedre organisering af kode, da du kan adskille funktionalitet i små, fokuserede filer.</li>
        <li><strong>Genbrug:</strong> Moduler kan nemt genbruges i forskellige projekter og applikationer, hvilket reducerer behovet for at skrive den samme kode igen og igen.</li>
        <li><strong>Ydelse:</strong> Bundling reducerer antallet af filer, der skal hentes af browseren, hvilket forbedrer applikationens ydeevne.</li>
        <li><strong>Optimering:</strong> Bundling hjælper med at minificere og komprimere koden, hvilket også forbedrer indlæsningstiden for applikationen.</li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Moduler og bundling er grundlæggende teknologier, der hjælper med at organisere og optimere JavaScript-applikationer. Moduler gør det muligt at opdele koden i håndterbare enheder, mens bundling sikrer, at koden leveres effektivt til brugerne. Ved at forstå disse teknologier kan du forbedre både udviklings- og produktionsoplevelsen af din JavaScript-applikation.
      </p>
    </div>
  );
}
