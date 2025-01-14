import Link from "next/link";

export default function ControlledUncontrolledOverviewPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Controlled vs. Uncontrolled Components</h1>
      <p className="text-xs">
        I React er der to måder at håndtere formularinput på:{" "}
        <strong>Controlled Components</strong> og{" "}
        <strong>Uncontrolled Components</strong>. Controlled Components bruger
        state til at styre værdierne, mens Uncontrolled Components bruger refs
        til at læse inputværdier direkte fra DOM.
      </p>
      <h2 className="text-base">Læs mere:</h2>
      <ul className="text-xs">
        <li>
          <Link href="/topics/react/controlled-uncontrolled/controlled">
            Controlled Components
          </Link>
        </li>
        <li>
          <Link href="/topics/react/controlled-uncontrolled/uncontrolled">
            Uncontrolled Components
          </Link>
        </li>
      </ul>
    </div>
  );
}
