import CodeBlock from "@/components/CodeBlock";

export default function MockServiceWorkerPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Mocking med Mock Service Worker (MSW)</h1>
      <p className="text-xs">
        Mock Service Worker (MSW) er et kraftfuldt værktøj til at mocke API-kald i både browser- og Node.js-miljøer. Det gør det muligt at teste applikationen uden afhængighed af en live-backend.
      </p>

      <h2 className="text-base">Opsætning i Next.js</h2>
      <p className="text-xs">For at starte med MSW, installer biblioteket:</p>
      <CodeBlock code={`npm install msw --save-dev`} language="bash" />

      <p className="text-xs">Opret en handler-fil til at definere API-mock-responser:</p>
      <CodeBlock
        code={`// mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/user', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ id: 1, name: 'Mocked User' })
    );
  }),
];`}
        language="javascript"
      />

      <p className="text-xs">Initialiser MSW i dit projekt:</p>
      <CodeBlock
        code={`// mocks/browser.js
import { setupWorker } from 'msw';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);`}
        language="javascript"
      />

      <p className="text-xs">Kald <code>worker.start()</code> i din applikations opstartsproces:</p>
      <CodeBlock
        code={`// pages/_app.js
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('../mocks/browser');
  worker.start();
}`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved MSW</h2>
      <ul className="text-xs">
        <li>Test API-kald uden en live-backend.</li>
        <li>Kan bruges i både browser- og Node.js-miljøer.</li>
        <li>Realistisk simulering af API-responser.</li>
      </ul>
    </div>
  );
}
