import CodeBlock from "@/components/CodeBlock";

export default function JestMocksPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Mocking med Jest Mocks</h1>
      <p className="text-xs">
        Jest giver kraftfulde muligheder for at mocke funktioner, moduler og API-kald. Dette gør det muligt at teste isolerede komponenter og håndtere afhængigheder effektivt.
      </p>

      <h2 className="text-base">Mocking af en funktion</h2>
      <p className="text-xs">For at mocke en funktion kan du bruge <code>jest.fn()</code>:</p>
      <CodeBlock
        code={`// utils.js
export const fetchData = () => {
  return fetch('/api/data').then(res => res.json());
};

// utils.test.js
import { fetchData } from './utils';

jest.mock('./utils', () => ({
  fetchData: jest.fn(),
}));

test('fetchData mock', async () => {
  fetchData.mockResolvedValue({ id: 1, name: 'Mocked Data' });
  
  const data = await fetchData();
  expect(data).toEqual({ id: 1, name: 'Mocked Data' });
});`}
        language="javascript"
      />

      <h2 className="text-base">Mocking af hele moduler</h2>
      <p className="text-xs">
        Med <code>jest.mock()</code> kan du mocke et helt modul. Dette er nyttigt, når en komponent afhænger af et bibliotek eller en ekstern service.
      </p>
      <CodeBlock
        code={`// api.js
export const getUser = () => fetch('/api/user').then(res => res.json());

// Component.test.js
import { getUser } from './api';

jest.mock('./api', () => ({
  getUser: jest.fn(),
}));

test('getUser mock', async () => {
  getUser.mockResolvedValue({ id: 1, name: 'Mocked User' });
  
  const user = await getUser();
  expect(user).toEqual({ id: 1, name: 'Mocked User' });
});`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved Jest Mocks</h2>
      <ul className="text-xs">
        <li>Let at mocke individuelle funktioner eller hele moduler.</li>
        <li>Perfekt til isolerede tests af komponenter.</li>
        <li>Understøtter både synkron og asynkron mockning.</li>
      </ul>
    </div>
  );
}
