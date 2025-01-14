import CodeBlock from "@/components/CodeBlock";

export default function PortalsPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Portals i React</h1>
      <p className="text-xs">
        Portals i React bruges til at rendre børn udenfor deres forældrekomponent i DOM’en. Det kan være nyttigt til modale vinduer, tooltips eller pop-ups, hvor du vil undgå at bryde den eksisterende komponentstruktur.
      </p>

      <h2 className="text-base">Eksempel: Oprettelse af en Portal</h2>
      <CodeBlock
        code={`import ReactDOM from 'react-dom';
import { useState } from 'react';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Åbn Modal</button>
      {isOpen &&
        ReactDOM.createPortal(
          <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px' }}>
            <p>Dette er en Modal!</p>
            <button onClick={closeModal}>Luk Modal</button>
          </div>,
          document.getElementById('modal-root') // Target DOM node
        )}
    </div>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Hvordan fungerer Portals?</h2>
      <p className="text-xs">
        Portals gør det muligt at rendere et element til et DOM-niveau udenfor det normale komponenttræ. Det er især nyttigt i tilfælde, hvor du skal bryde ud af komponenthierarkiet, som f.eks. ved rendering af modaler, popups og overlays.
      </p>

      <h2 className="text-base">Fordele ved Portals</h2>
      <ul className="text-xs">
        <li><strong>Modularitet:</strong> Separér visningen af visse komponenter uden at påvirke deres forældrekomponenter.</li>
        <li><strong>Kontrol:</strong> Giver større kontrol over rendering på et specifikt DOM-niveau.</li>
        <li><strong>Brugervenlighed:</strong> Bruges til at håndtere overlappende UI-elementer, som modale vinduer.</li>
      </ul>
    </div>
  );
}
