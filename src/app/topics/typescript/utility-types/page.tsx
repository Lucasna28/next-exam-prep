import CodeBlock from "@/components/CodeBlock";

export default function UtilityTypesPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Utility Types i TypeScript</h1>
      <p className="text-xs">
        Utility Types er indbyggede typer i TypeScript, der gør det lettere at manipulere og ændre eksisterende typer. De giver fleksibilitet til hurtigt at ændre egenskaberne i objekttyper eller oprette nye varianter af eksisterende typer uden at skulle definere dem fra bunden.
      </p>

      <h2 className="text-base">Vigtige Utility Types</h2>
      <p className="text-xs">
        TypeScript leverer flere Utility Types, der kan være nyttige i forskellige scenarier. Her er nogle af de mest brugte:
      </p>
      <ul className="text-xs">
        <li><strong>Partial:</strong> Opretter en type, hvor alle egenskaber er valgfrie.</li>
        <li><strong>Pick:</strong> Vælger et subset af egenskaber fra en eksisterende type.</li>
        <li><strong>Omit:</strong> Udelader et eller flere felter fra en eksisterende type.</li>
      </ul>

      <h2 className="text-base">Fordele ved Utility Types</h2>
      <ul className="text-xs">
        <li><strong>Fleksibilitet:</strong> Gør det lettere at skabe nye typer baseret på eksisterende.</li>
        <li><strong>Genbrug:</strong> Reducerer mængden af duplikat kode.</li>
        <li><strong>Øget type-sikkerhed:</strong> Hjælper med at fastholde type-sikkerhed i applikationen ved at ændre og manipulere typer korrekt.</li>
      </ul>
    </div>
  );
}
