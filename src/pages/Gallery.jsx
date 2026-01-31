import { useState } from "react";

const galleryItems = [
  // Interiors
  {
    title: "Interior I",
    image: "/gallery/interiors/interior-1.webp",
    category: "interiors",
  },
  {
    title: "Interior II",
    image: "/gallery/interiors/interior-2.webp",
    category: "interiors",
  },
  {
    title: "Interior III",
    image: "/gallery/interiors/interior-3.webp",
    category: "interiors",
  },
  {
    title: "Interior IV",
    image: "/gallery/interiors/interior-4.webp",
    category: "interiors",
  },
  {
    title: "Interior V",
    image: "/gallery/interiors/interior-5.webp",
    category: "interiors",
  },
  {
    title: "Interior VI",
    image: "/gallery/interiors/interior-6.webp",
    category: "interiors",
  },
  {
    title: "Interior VII",
    image: "/gallery/interiors/interior-7.webp",
    category: "interiors",
  },
  {
    title: "Interior VIII",
    image: "/gallery/interiors/interior-8.webp",
    category: "interiors",
  },
  {
    title: "Interior IX",
    image: "/gallery/interiors/interior-9.webp",
    category: "interiors",
  },
  // Artworks
  {
    title: "Artwork I",
    image: "/gallery/Photo_2026-01-25_160909.jpg",
    category: "artworks",
  },
  {
    title: "Artwork II",
    image: "/gallery/Photo_2026-01-25_160909_1.jpg",
    category: "artworks",
  },
  {
    title: "Artwork III",
    image: "/gallery/Photo_2026-01-25_160909_2.jpg",
    category: "artworks",
  },
  {
    title: "Artwork IV",
    image: "/gallery/Photo_2026-01-25_160909_3.jpg",
    category: "artworks",
  },
  {
    title: "Artwork V",
    image: "/gallery/Photo_2026-01-25_160909_4.jpg",
    category: "artworks",
  },
  {
    title: "Artwork VI",
    image: "/gallery/Photo_2026-01-25_160909_8.jpg",
    category: "artworks",
  },
  {
    title: "Artwork VII",
    image: "/gallery/Photo_2026-01-25_160909_5.jpg",
    category: "artworks",
  },
  {
    title: "Artwork VIII",
    image: "/gallery/Photo_2026-01-25_160909_6.jpg",
    category: "artworks",
  },
  {
    title: "Artwork IX",
    image: "/gallery/Photo_2026-01-25_160909_7.jpg",
    category: "artworks",
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "interiors", label: "Interiors" },
  { key: "artworks", label: "Artworks" },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <main className="py-9">
      <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-earth-600 text-center mb-4">
        Gallery
      </h1>
      <p className="text-center max-w-xl mx-auto mb-6 text-earth-800 leading-relaxed">
        Explore the complete collection of original artworks, each piece telling
        its own unique story through color, light, and emotion.
      </p>

      <div className="flex justify-center gap-3 mb-10">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`px-5 py-2 font-serif text-lg border transition-all duration-200 ${
              activeFilter === filter.key
                ? "bg-earth-600 text-cream-50 border-earth-600"
                : "bg-cream-50/50 text-earth-600 border-warm-400 hover:bg-warm-300/50"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-7">
        {filteredItems.map((item) => (
          <article
            key={item.title}
            className="bg-cream-50/20 border border-warm-300 p-4"
          >
            <div className="frame group">
              <img
                src={item.image}
                alt={item.title}
                className="saturate-[0.3] group-hover:saturate-100 transition-[filter] duration-300"
              />
            </div>
            <div className="pt-3 text-center">
              <h3 className="font-serif text-lg text-earth-800 mb-1">
                {item.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
