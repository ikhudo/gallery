const galleryItems = [
  // Row 1 - Vertical images
  {
    title: "Artwork I",
    image: "/gallery/Photo_2026-01-25_160909.jpg",
  },
  {
    title: "Artwork II",
    image: "/gallery/Photo_2026-01-25_160909_1.jpg",
  },
  {
    title: "Artwork III",
    image: "/gallery/Photo_2026-01-25_160909_2.jpg",
  },
  // Row 2 - Horizontal images
  {
    title: "Artwork IV",
    image: "/gallery/Photo_2026-01-25_160909_3.jpg",
  },
  {
    title: "Artwork V",
    image: "/gallery/Photo_2026-01-25_160909_4.jpg",
  },
  {
    title: "Artwork VI",
    image: "/gallery/Photo_2026-01-25_160909_8.jpg",
  },
  // Row 3 - Vertical images
  {
    title: "Artwork VII",
    image: "/gallery/Photo_2026-01-25_160909_5.jpg",
  },
  {
    title: "Artwork VIII",
    image: "/gallery/Photo_2026-01-25_160909_6.jpg",
  },
  {
    title: "Artwork IX",
    image: "/gallery/Photo_2026-01-25_160909_7.jpg",
  },
  // Interiors
  {
    title: "Interior I",
    image: "/gallery/interiors/interior-1.png",
  },
  {
    title: "Interior II",
    image: "/gallery/interiors/interior-2.png",
  },
  {
    title: "Interior III",
    image: "/gallery/interiors/interior-3.png",
  },
  {
    title: "Interior IV",
    image: "/gallery/interiors/interior-4.png",
  },
  {
    title: "Interior V",
    image: "/gallery/interiors/interior-5.png",
  },
  {
    title: "Interior VI",
    image: "/gallery/interiors/interior-6.png",
  },
  {
    title: "Interior VII",
    image: "/gallery/interiors/interior-7.png",
  },
  {
    title: "Interior VIII",
    image: "/gallery/interiors/interior-8.png",
  },
  {
    title: "Interior IX",
    image: "/gallery/interiors/interior-9.png",
  },
];

const Gallery = () => {
  return (
    <main className="py-9">
      <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-earth-600 text-center mb-4">
        Gallery
      </h1>
      <p className="text-center max-w-xl mx-auto mb-10 text-earth-800 leading-relaxed">
        Explore the complete collection of original artworks, each piece telling
        its own unique story through color, light, and emotion.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-7">
        {galleryItems.map((item) => (
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
