import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto mt-10 flex flex-col justify-center items-center">
      <h2 className="text-heading1-semibold">Not Found</h2>
      <p className="text-base-regular my-6">
        Could not find requested resource
      </p>
      <Link
        className="px-4 py-6 rounded-md bg-primary-500 border text-white hover:opacity-80"
        href="/actualdata"
      >
        Back to home  
      </Link>
    </div>
  );
}
