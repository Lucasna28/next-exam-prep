import CodeBlock from "@/components/CodeBlock";

export default function PortalsPage() {
  return (
    <div className="prose lg:prose-xl">
      <h1>React Portals</h1>

      <p>
        Portals lader dig rendere children elementer i en DOM node uden for det
        normale komponent hierarki. Dette er særligt nyttigt for modals,
        tooltips og dropdowns.
      </p>

      <h2>Modal med Portal</h2>
      <CodeBlock
        language="typescript"
        code={`import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal">
        {children}
        <button onClick={onClose}>Luk</button>
      </div>
    </div>,
    document.body
  );
}`}
      />

      <h2>Brug af Modal</h2>
      <CodeBlock
        language="typescript"
        code={`function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Åbn Modal
      </button>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
      >
        <h2>Modal Indhold</h2>
        <p>Dette renderes udenfor komponent hierarkiet</p>
      </Modal>
    </div>
  );
}`}
      />

      <h2>Hvornår bruges Portals?</h2>
      <ul>
        <li>Modals og dialogs</li>
        <li>Tooltips</li>
        <li>Floating menus</li>
        <li>Når z-index og styling er problematisk</li>
      </ul>
    </div>
  );
}
