/**
 * Get the correct path for public assets (like images) that respects the Vite base URL
 * @param path - The path relative to the public folder (e.g., "/images/photo.png")
 * @returns The full path including the base URL
 */
export function getPublicPath(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if it exists to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
