import { useEffect } from "react";

const galleryImages = [
  "/gallery/Photo_2026-01-25_160909.jpg",
  "/gallery/Photo_2026-01-25_160909_1.jpg",
  "/gallery/Photo_2026-01-25_160909_2.jpg",
  "/gallery/Photo_2026-01-25_160909_3.jpg",
  "/gallery/Photo_2026-01-25_160909_4.jpg",
  "/gallery/Photo_2026-01-25_160909_5.jpg",
  "/gallery/Photo_2026-01-25_160909_6.jpg",
  "/gallery/Photo_2026-01-25_160909_7.jpg",
  "/gallery/Photo_2026-01-25_160909_8.jpg",
  "/gallery/interiors/interior-10.webp",
  "/gallery/interiors/interior-1.webp",
  "/gallery/interiors/interior-2.webp",
  "/gallery/interiors/interior-3.webp",
  "/gallery/interiors/interior-4.webp",
  "/gallery/interiors/interior-5.webp",
  "/gallery/interiors/interior-6.webp",
  "/gallery/interiors/interior-7.webp",
  "/gallery/interiors/interior-8.webp",
  "/gallery/interiors/interior-9.webp",
];

export const useImagePreloader = () => {
  useEffect(() => {
    galleryImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
};

export default useImagePreloader;
