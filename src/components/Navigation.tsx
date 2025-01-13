import Link from "next/link";

const Navigation = () => {
  const topics = [
    { title: "Dynamic Routing", path: "/topics/dynamic-routing" },
    { title: "Static Site Generation", path: "/topics/ssg" },
    // Vi kan tilføje flere emner senere
  ];

  return (
    <nav className="bg-slate-800 text-white p-4">
      <div className="container mx-auto flex gap-4">
        <Link href="/" className="hover:text-blue-300">
          Hjem
        </Link>
        {topics.map((topic) => (
          <Link
            key={topic.path}
            href={topic.path}
            className="hover:text-blue-300"
          >
            {topic.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
