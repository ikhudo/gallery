import { useMemo } from "react";
import useSEO, { BASE_URL } from "../hooks/useSEO";

const Home = () => {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Oliwia Khudo",
      url: BASE_URL,
      image: `${BASE_URL}/artist.webp`,
      jobTitle: "Visual Artist",
      description:
        "Young contemporary artist based in Kraków, Poland, specializing in interior decoration artworks and expressive abstract paintings.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kraków",
        addressCountry: "PL",
      },
      sameAs: [],
    }),
    [],
  );

  useSEO({
    title:
      "Oliwia Khudo — Young Artist in Kraków | Interior Decoration Artworks",
    description:
      "Discover original paintings for interior design by Oliwia Khudo, a young contemporary artist based in Kraków. Bold colors, expressive brushwork, unique art for your space.",
    canonical: BASE_URL + "/",
    ogImage: `${BASE_URL}/artist.webp`,
    jsonLd,
  });

  return (
    <main className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-10 pt-8 items-end">
      {/* Artist Section */}
      <section className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
        <div
          className="w-36 h-36 lg:w-44 lg:h-44 rounded-full border-2 border-warm-400 bg-cover bg-center shadow-[inset_0_0_0_8px_rgba(255,255,255,0.6)]"
          style={{
            backgroundImage: 'url("/artist.webp")',
          }}
          role="img"
          aria-label="Artist portrait"
        />
        <h1 className="font-serif text-4xl lg:text-5xl tracking-wide text-earth-600">
          Oliwia Khudo
        </h1>
        <p className="leading-relaxed max-w-sm text-md text-earth-800">
          Oliwia Khudo is a young artist based in Kraków whose vibrant work
          spans interior decoration artworks, nature-inspired pieces, and
          expressive abstract compositions. With bold colors and intuitive
          brushwork, each painting captures fleeting moments and emotions —
          creating unique paintings for interior design that invite viewers into
          her creative world.
        </p>
      </section>

      {/* Featured Section */}
      <section className="flex flex-col items-center gap-5">
        <h2 className="font-serif text-2xl text-earth-600 tracking-wide">
          Featured Works
        </h2>
        <div className="grid grid-cols-2 gap-6 w-full">
          <article className="bg-cream-50/20 border border-warm-300 p-5">
            <div className="frame group">
              <img
                src="/gallery/interiors/interior-1.webp"
                alt="Interior I"
                className="saturate-[0.3] group-hover:saturate-100 transition-[filter] duration-300"
              />
            </div>
            <h3 className="font-serif text-lg text-earth-800 mt-4 text-center">
              Interior I
            </h3>
          </article>
          <article className="bg-cream-50/20 border border-warm-300 p-5">
            <div className="frame group">
              <img
                src="/gallery/interiors/interior-10.webp"
                alt="Interior X"
                className="saturate-[0.3] group-hover:saturate-100 transition-[filter] duration-300"
              />
            </div>
            <h3 className="font-serif text-lg text-earth-800 mt-4 text-center">
              Interior X
            </h3>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Home;
