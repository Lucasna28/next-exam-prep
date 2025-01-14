import CodeBlock from "@/components/CodeBlock";

export default function StateManagementLibrariesPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">State Management Libraries i React</h1>
      <p className="text-xs">
        State management libraries som Redux og Zustand bruges til at håndtere global state i React-applikationer. De hjælper med at holde state konsistent på tværs af mange komponenter og gør det lettere at administrere kompleks state i større applikationer.
      </p>

      <h2 className="text-base">Eksempel: Redux</h2>
      <CodeBlock
        code={`import { createStore } from 'redux';

// Reducer funktion
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Opret store
const store = createStore(counterReducer);

// Komponent som bruger store
import { useState, useEffect } from 'react';
function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setCounter(store.getState()));
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved State Management Libraries</h2>
      <ul className="text-xs">
        <li><strong>Konsistent State:</strong> Global state er tilgængelig i hele applikationen, hvilket gør det nemt at dele data mellem komponenter.</li>
        <li><strong>Skalering:</strong> Libraries som Redux gør det muligt at håndtere kompleks state i store applikationer med mange komponenter.</li>
        <li><strong>Reduceret Prop Drilling:</strong> Undgå at sende props gennem mange komponenter ved at centralisere state-managementet.</li>
      </ul>
    </div>
  );
}
