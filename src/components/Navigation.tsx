import Link from "next/link";

const Navigation = () => {
  const topics = [
    {
      section: "Grundlæggende",
      items: [
        { title: "Introduktion", path: "/" },
        { title: "Dynamic Routing", path: "/topics/dynamic-routing" },
        { title: "Static Site Generation", path: "/topics/ssg" },
      ],
    },
    {
      section: "Avanceret",
      items: [
        { title: "Server Components", path: "/topics/server-components" },
        { title: "API Routes", path: "/topics/api-routes" },
      ],
    },
  ];

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-slate-900 text-white p-6 overflow-y-auto">
      <div className="mb-8">
        <Link href="/" className="text-xl font-bold">
          Next.js Exam Prep
        </Link>
      </div>

      {topics.map((section) => (
        <div key={section.section} className="mb-6">
          <h3 className="text-sm font-semibold text-slate-400 mb-2">
            {section.section}
          </h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="block py-1 text-slate-300 hover:text-white transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Navigation;
