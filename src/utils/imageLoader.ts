export const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
};

export const preloadImages = async (imageUrls: string[]): Promise<void> => {
  try {
    await Promise.all(imageUrls.map(loadImage));
  } catch (error) {
    console.error('Error preloading images:', error);
  }
}; 