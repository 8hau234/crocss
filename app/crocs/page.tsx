"use client";

const CROCS_ITEMS = [
  {
    name: "Crocs Classic Clog",
    color: "Black",
    type: "Unisex",
    condition: "New / Tag",
    img: "/1crocs.jpeg",
    description:
      "The original Crocs Classic Clog in all-black. Lightweight, breathable, and designed for all-day wear with Iconic Crocs Comfort™.",
  },
  {
    name: "Crocs Classic Platform Clog",
    color: "Light Pink",
    type: "Unisex",
    condition: "New / Boxed",
    img: "/2crocs.jpeg",
    description:
      "An elevated take on the Classic Clog featuring a platform sole. Soft pastel finish with added height while maintaining signature comfort.",
  },
  {
    name: "Crocs Classic Cars™ Clog",
    color: "Red · Lightning McQueen",
    type: "Unisex",
    condition: "New / Tag",
    img: "/3crocs.jpeg",
    description:
      "Official Disney·Pixar Cars™ Crocs with Lightning McQueen graphics. A bold, collectible pair made for comfort and fun.",
  },
  {
    name: "Crocs Classic Clog",
    color: "Hot Pink",
    type: "Unisex",
    condition: "New / Tag",
    img: "/4crocs.jpeg",
    description:
      "Vibrant hot pink Classic Crocs. Lightweight, water-friendly, and easy to style with bold or casual outfits.",
  },
  {
    name: "Crocs Mega Crush Clog",
    color: "White",
    type: "Unisex",
    condition: "New / Boxed",
    img: "/5crocs.jpeg",
    description:
      "The Mega Crush Clog features an exaggerated platform sole with enhanced traction and modern proportions for a fashion-forward look.",
  },
];

export default function CrocsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5E9D3]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-[#2e2a24] bg-[#050505]/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="text-2xl md:text-3xl tracking-[0.25em] font-light">
            STORE OVERSIZED
          </div>

          <nav className="hidden gap-6 text-xs md:flex">
            <a
              href="/"
              className="uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]"
            >
              Home
            </a>

            <span className="uppercase tracking-[0.18em] text-[#F5E9D3]">
              Crocs
            </span>

            <a
              href="/birkenstock"
              className="uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]"
            >
              Birkenstock
            </a>

            <a
              href="/size"
              className="uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]"
            >
              Size
            </a>

            <a
              href="/authenticity"
              className="uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]"
            >
              Authenticity
            </a>

            <a
              href="/contact"
              className="uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]"
            >
              Contact
            </a>
          </nav>

          <div className="text-xs uppercase tracking-[0.18em] text-[#C8B79A]">
            Display only
          </div>
        </div>
      </header>

      <main className="bg-[#050505] pb-16">
        {/* HERO */}
        <section className="relative flex min-h-[60vh] items-end overflow-hidden">
          <img
            src="/1crocs.jpeg"
            alt="Crocs lineup"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,233,211,0.18),_transparent_55%)] mix-blend-soft-light" />

          <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-24">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#C8B79A]">
              <span>CROCS</span>
              <span className="h-px w-10 bg-[#C8B79A]" />
              <span>DISPLAY ONLY</span>
            </div>

            <h1 className="mt-4 text-4xl md:text-6xl font-light">
              Classic · Platform · Mega Crush.
            </h1>

            <p className="mt-3 max-w-xl text-sm md:text-base text-[#E8DCC2]">
              Current Crocs available at STORE OVERSIZED. Stock updates as items
              move — screenshot and DM to confirm availability.
            </p>
          </div>
        </section>

        {/* GRID */}
        <section className="mx-auto mt-10 max-w-6xl px-4">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="text-lg uppercase tracking-[0.25em]">
              Available Crocs
            </h2>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#9c8f7a]">
              Display only · DM to reserve
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CROCS_ITEMS.map((item) => (
              <article
                key={item.name + item.color}
                className="group flex flex-col overflow-hidden border border-[#2e2a24] bg-[#0b0b0b] transition hover:-translate-y-1 hover:border-[#C8B79A]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
                    {item.condition}
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2 px-4 py-4">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-[#C8B79A]">
                    {item.color}
                  </div>

                  <h3 className="text-base md:text-lg font-light">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[12px] leading-relaxed text-[#E8DCC2]">
                    {item.description}
                  </p>

                  <span className="mt-3 inline-block w-fit rounded-full border border-[#3a3328] px-2 py-1 text-[11px] uppercase tracking-[0.18em]">
                    {item.type}
                  </span>

                  <p className="mt-3 text-[11px] text-[#9c8f7a]">
                    DM with a screenshot of this card to confirm availability.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
