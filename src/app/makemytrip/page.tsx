import Link from "next/link";

export default function Makemytrip() {
  return (
    <div className="pt-16">
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <Link href="/" className="text-sm text-zinc-500 hover:text-black mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Increasing Wallet Adoption
        </h1>
        <p className="text-xl text-zinc-500">Shipped Feature Design</p>
      </section>
    </div>
  );
}
