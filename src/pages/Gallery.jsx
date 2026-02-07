import { useState, useEffect } from "react";

const galleryItems = [
  // Interiors
  {
    title: "Interior X",
    image: "/gallery/interiors/interior-10.webp",
    category: "interiors",
    description: "Raw textures and muted tones creating a restful retreat.",
    story: "This piece was born from my love of quiet, lived-in spaces. I imagined a bedroom where the painting above the bed mirrors the softness of linen and the weathered warmth of natural materials—a place where art and rest become one.",
  },
  {
    title: "Interior I",
    image: "/gallery/interiors/interior-1.webp",
    category: "interiors",
    description: "A harmonious blend of modern aesthetics and timeless elegance.",
    story: "This piece emerged from my fascination with how art transforms living spaces. I wanted to capture the dialogue between a painting and its surroundings—how colors from the canvas seem to spill into the room itself.",
  },
  {
    title: "Interior II",
    image: "/gallery/interiors/interior-2.webp",
    category: "interiors",
    description: "Where contemporary design meets artistic expression.",
    story: "I painted this imagining a quiet morning, sunlight filtering through sheer curtains. The artwork on the wall becomes a window to another world, inviting contemplation and peace.",
  },
  {
    title: "Interior III",
    image: "/gallery/interiors/interior-3.webp",
    category: "interiors",
    description: "A celebration of color and spatial harmony.",
    story: "Every room tells a story, and art is its narrator. Here, I explored how bold colors can anchor a space while still feeling light and inviting.",
  },
  {
    title: "Interior IV",
    image: "/gallery/interiors/interior-4.webp",
    category: "interiors",
    description: "Minimalist beauty with a touch of warmth.",
    story: "This composition reflects my belief that the best interiors feel both curated and effortless. The art doesn't compete with the space—it completes it.",
  },
  {
    title: "Interior V",
    image: "/gallery/interiors/interior-5.webp",
    category: "interiors",
    description: "Soft tones creating a sanctuary of calm.",
    story: "I created this piece thinking about the importance of having a personal retreat. A place where every element, especially the art, contributes to inner peace.",
  },
  {
    title: "Interior VI",
    image: "/gallery/interiors/interior-6.webp",
    category: "interiors",
    description: "Dynamic composition in a serene setting.",
    story: "The contrast between energetic brushstrokes and calm surroundings fascinates me. This piece explores that tension—movement frozen in a moment of stillness.",
  },
  {
    title: "Interior VII",
    image: "/gallery/interiors/interior-7.webp",
    category: "interiors",
    description: "Nature-inspired hues bringing the outdoors in.",
    story: "I've always been drawn to how natural light changes throughout the day. This interior captures that golden hour glow when everything feels magical.",
  },
  {
    title: "Interior VIII",
    image: "/gallery/interiors/interior-8.webp",
    category: "interiors",
    description: "Elegant simplicity with artistic focal points.",
    story: "Sometimes the most powerful statement is a quiet one. This piece celebrates restraint and the beauty of negative space.",
  },
  {
    title: "Interior IX",
    image: "/gallery/interiors/interior-9.webp",
    category: "interiors",
    description: "A dreamy atmosphere of light and shadow.",
    story: "This was inspired by memories of lazy Sunday afternoons. The soft interplay of light creates a dreamlike quality I find deeply comforting.",
  },
  // Artworks
  {
    title: "Artwork I",
    image: "/gallery/Photo_2026-01-25_160909.jpg",
    category: "artworks",
    description: "An exploration of color and emotion.",
    story: "This piece came to me during a walk through autumn woods. The colors were so vivid, so alive—I rushed home to capture that feeling before it faded.",
  },
  {
    title: "Artwork II",
    image: "/gallery/Photo_2026-01-25_160909_1.jpg",
    category: "artworks",
    description: "Abstract forms dancing with light.",
    story: "I painted this listening to Chopin. The music seemed to guide my brush, creating rhythms and harmonies in color that I couldn't have planned.",
  },
  {
    title: "Artwork III",
    image: "/gallery/Photo_2026-01-25_160909_2.jpg",
    category: "artworks",
    description: "A journey through texture and tone.",
    story: "This piece taught me to embrace imperfection. What started as a mistake became the most interesting part of the painting.",
  },
  {
    title: "Artwork IV",
    image: "/gallery/Photo_2026-01-25_160909_3.jpg",
    category: "artworks",
    description: "Bold strokes capturing fleeting moments.",
    story: "I wanted to freeze a feeling—that brief moment of joy when something unexpected makes you smile. The bold colors are my attempt to hold onto happiness.",
  },
  {
    title: "Artwork V",
    image: "/gallery/Photo_2026-01-25_160909_4.jpg",
    category: "artworks",
    description: "Layers of meaning in every brushstroke.",
    story: "Each layer in this painting represents a different memory. Some are buried deep, others rise to the surface. Together they tell my story.",
  },
  {
    title: "Artwork VI",
    image: "/gallery/Photo_2026-01-25_160909_8.jpg",
    category: "artworks",
    description: "Where intuition meets intention.",
    story: "I created this during a thunderstorm. There's something about the electricity in the air that makes colors feel more intense, more alive.",
  },
  {
    title: "Artwork VII",
    image: "/gallery/Photo_2026-01-25_160909_5.jpg",
    category: "artworks",
    description: "A meditation on movement and stillness.",
    story: "This piece is about finding calm in chaos. The swirling forms eventually settle into something peaceful—just like our thoughts when we let them be.",
  },
  {
    title: "Artwork VIII",
    image: "/gallery/Photo_2026-01-25_160909_6.jpg",
    category: "artworks",
    description: "Vibrant expressions of inner landscapes.",
    story: "I don't always know what I'm painting until it's done. This one surprised me—it revealed feelings I didn't know I was carrying.",
  },
  {
    title: "Artwork IX",
    image: "/gallery/Photo_2026-01-25_160909_7.jpg",
    category: "artworks",
    description: "The poetry of color set free.",
    story: "My final piece in this series. It represents letting go—of expectations, of control, of fear. Just pure, joyful creation.",
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "interiors", label: "Interiors" },
  { key: "artworks", label: "Artworks" },
];

const Modal = ({ item, onClose, onPrev, onNext, hasPrev, hasNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  const ArrowButton = ({ direction, onClick, disabled }) => (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      disabled={disabled}
      className={`absolute top-1/2 -translate-y-1/2 ${
        direction === "prev" ? "left-2 md:left-4" : "right-2 md:right-4"
      } z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border transition-all duration-200 ${
        disabled
          ? "bg-cream-100/10 text-earth-600/40 border-warm-300/20 cursor-not-allowed"
          : "bg-cream-50 text-earth-600 border-warm-400 hover:bg-warm-300/50 hover:border-warm-500"
      }`}
      aria-label={direction === "prev" ? "Previous artwork" : "Next artwork"}
    >
      <span className="text-xl md:text-2xl text-earth-600">
        {direction === "prev" ? "\u2039" : "\u203a"}
      </span>
    </button>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-earth-900/80 backdrop-blur-sm" />

      <ArrowButton direction="prev" onClick={onPrev} disabled={!hasPrev} />
      <ArrowButton direction="next" onClick={onNext} disabled={!hasNext} />

      <div
        className="relative bg-gradient-to-br from-cream-100 to-cream-200 max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-warm-400 shadow-2xl mx-12 md:mx-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-earth-600 hover:text-earth-800 hover:bg-warm-300/50 transition-colors text-2xl"
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 md:p-8 flex items-center justify-center bg-cream-50/50">
            <div className="frame">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-4xl text-earth-600 mb-2">
              {item.title}
            </h2>
            <p className="text-warm-600 font-serif italic mb-6">
              {item.description}
            </p>

            <div className="border-t border-warm-400 pt-6">
              <h3 className="font-serif text-lg text-earth-600 mb-3">
                Artist's Story
              </h3>
              <p className="text-earth-800 leading-relaxed">
                {item.story}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-warm-400">
              <p className="text-sm text-earth-400 font-serif">
                Original artwork by Oliwia Khudo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex < filteredItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

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
        {filteredItems.map((item, index) => (
          <article
            key={item.title}
            className="bg-cream-50/20 border border-warm-300 p-4 cursor-pointer hover:shadow-lg hover:border-warm-500 transition-all duration-200"
            onClick={() => setSelectedIndex(index)}
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

      {selectedIndex !== null && (
        <Modal
          item={filteredItems[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < filteredItems.length - 1}
        />
      )}
    </main>
  );
};

export default Gallery;
