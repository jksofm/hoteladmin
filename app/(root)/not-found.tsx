import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 className="text-heading2-semibold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/actualdata">Back to home</Link>
    </div>
  );
}
