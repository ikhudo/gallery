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
