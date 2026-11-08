/**
 * Resolves product image paths:
 * If it's an external CDN link (starts with http/https), returns it directly.
 * Otherwise, resolves to the local assets directory.
 */
export const getProductImage = (img) => {
  if (!img) {
    return "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80";
  }
  if (img.startsWith("http://") || img.startsWith("https://")) {
    return img;
  }
  return `/assets/images/${img}`;
};

