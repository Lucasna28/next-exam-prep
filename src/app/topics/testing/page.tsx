import Link from "next/link";

export default function TestingOverviewPage() {
  const topics = [
    { title: "Jest", path: "/testing/jest" },
    { title: "React Testing Library", path: "/testing/react-testing-library" },
    { title: "End-to-End Testing - Cypress", path: "/testing/end-to-end/cypress" },
    { title: "End-to-End Testing - Playwright", path: "/testing/end-to-end/playwright" },
    { title: "Mocking - Mock Service Worker", path: "/testing/mocking/mock-service-worker" },
    { title: "Mocking - Jest Mocks", path: "/testing/mocking/jest-mocks" },
    { title: "Snapshot Testing", path: "/testing/snapshot-testing" },
  ];

  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Testing Overview</h1>
      <p className="text-xs">
        Velkommen til oversigten over testing-emner. Klik på et af nedenstående emner for at lære mere om testmetoder og værktøjer i Next.js.
      </p>
      <ul className="text-xs">
        {topics.map((topic) => (
          <li key={topic.path}>
            <Link href={topic.path} className="text-blue-500 hover:underline">
              {topic.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
