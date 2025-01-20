import CodeBlock from "@/components/CodeBlock";
import Dropdown from "@/components/Dropdown";

export default function DropdownPage() {
  const items = [
    {
      title: "Item 1",
      path: "/item-1",
      subItems: [
        { title: "Subitem 1.1", path: "/item-1/subitem-1" },
        { title: "Subitem 1.2", path: "/item-1/subitem-2" },
      ],
    },
    {
      title: "Item 2",
      path: "/item-2",
      subItems: [
        { title: "Subitem 2.1", path: "/item-2/subitem-1" },
        { title: "Subitem 2.2", path: "/item-2/subitem-2" },
      ],
    },
  ];

  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Dropdown Component</h1>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        En dropdown komponent, der håndterer både overordnede og underordnede
        elementer, og giver brugeren mulighed for at navigere mellem dem.
      </p>

      <section className="mt-8">
        <h2 className="text-base">Dropdown med Sub-items</h2>
        <div className="my-4">
          <Dropdown section="Sektion 1" items={items} isSearching={false} />
        </div>
        <CodeBlock
          language="tsx"
          code={`import Dropdown from '@/components/Dropdown';

const items = [
  {
    title: "Item 1",
    path: "/item-1",
    subItems: [
      { title: "Subitem 1.1", path: "/item-1/subitem-1" },
      { title: "Subitem 1.2", path: "/item-1/subitem-2" },
    ],
  },
  {
    title: "Item 2",
    path: "/item-2",
    subItems: [
      { title: "Subitem 2.1", path: "/item-2/subitem-1" },
      { title: "Subitem 2.2", path: "/item-2/subitem-2" },
    ],
  },
];

<Dropdown section="Sektion 1" items={items} isSearching={false} />`}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-base">Dropdown med Søgefunktion</h2>
        <div className="my-4">
          <Dropdown section="Sektion 2" items={items} isSearching={true} />
        </div>
        <CodeBlock
          language="tsx"
          code={`<Dropdown section="Sektion 2" items={items} isSearching={true} />`}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-base">Props Reference</h2>
        <div className="my-4">
          <pre className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 text-sm">
            {`interface DropdownProps {
  section: string;
  items: {
    title: string;
    path: string;
    subItems?: {
      title: string;
      path: string;
    }[];
  }[];
  isSearching: boolean;
}`}
          </pre>
        </div>
      </section>
    </div>
  );
}
