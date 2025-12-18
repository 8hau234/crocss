export default function SizePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5E9D3]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* HEADER */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#C8B79A]">
              Size Guide
            </div>
            <h1 className="mt-3 text-3xl md:text-5xl font-light tracking-[0.06em]">
              Size Reference
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-[#E8DCC2]">
              Use the charts below to find the correct fit for kids and adults.
              Measurements may vary slightly by model.
            </p>
          </div>

          {/* BACK HOME */}
          <a
            href="/"
            className="inline-block text-xs uppercase tracking-[0.25em] text-[#C8B79A] hover:text-[#F5E9D3]"
          >
            ← Back Home
          </a>
        </div>

        {/* SIZE IMAGES */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* KIDS */}
          <div className="rounded-2xl overflow-hidden border border-[#2e2a24] bg-black">
            <div className="border-b border-[#2e2a24] p-4">
              <h2 className="text-lg font-light tracking-[0.2em] uppercase">
                Kids Sizes
              </h2>
            </div>
            <img
              src="/size-kids.jpg"
              alt="Kids size guide"
              className="w-full object-contain bg-black"
            />
          </div>

          {/* ADULT */}
          <div className="rounded-2xl overflow-hidden border border-[#2e2a24] bg-black">
            <div className="border-b border-[#2e2a24] p-4">
              <h2 className="text-lg font-light tracking-[0.2em] uppercase">
                Adult Sizes
              </h2>
            </div>
            <img
              src="/size-adult.jpg"
              alt="Adult size guide"
              className="w-full object-contain bg-black"
            />
          </div>
        </div>

        {/* FOOTNOTE */}
        <div className="mt-10 text-xs text-[#9c8f7a] border-t border-[#2e2a24] pt-6">
          If you’re between sizes, we recommend sizing up for comfort.
        </div>
      </div>
    </div>
  );
}
