import { person } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-body md:flex-row">
        <p>
          © {new Date().getFullYear()} {person.name}. Built with Next.js, Tailwind CSS,
          and Framer Motion.
        </p>
        <p>{person.location}</p>
      </div>
    </footer>
  );
}
