import CodeBlock from "@/components/CodeBlock";

export default function StateManagementPage() {
  return (
    <div className="prose lg:prose-xl">
      <h1>State Management i React</h1>

      <p>
        For større applikationer er det ofte nødvendigt at bruge state
        management libraries. Her ser vi på Zustand som et moderne og simpelt
        alternativ til Redux.
      </p>

      <h2>Zustand Store</h2>
      <CodeBlock
        language="typescript"
        code={`import create from 'zustand';

interface StoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 })
}));`}
      />

      <h2>Brug af Store</h2>
      <CodeBlock
        language="typescript"
        code={`function Counter() {
  const { count, increment, decrement, reset } = useStore();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`}
      />

      <h2>Fordele ved Zustand</h2>
      <ul>
        <li>Minimal boilerplate</li>
        <li>TypeScript support</li>
        <li>Nem at teste</li>
        <li>Bedre performance end Redux</li>
      </ul>
    </div>
  );
}
