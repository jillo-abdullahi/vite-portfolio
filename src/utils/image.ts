export const getCloudinaryUrl = (url: string, params: string) => {
  if (!url || !url.includes('cloudinary.com') || !url.includes('/upload/')) return url;
  // Prevent double-injection if params already exist
  if (url.includes(`/upload/${params}/`)) return url;
  return url.replace('/upload/', `/upload/${params}/`);
};

interface ResponsiveImageResult {
  src: string | undefined;
  srcSet: string | undefined;
}

/**
 * Generates optimized Cloudinary URLs and srcSet for responsive images.
 * Handles local paths (in /portfolio/) and non-Cloudinary URLs gracefully.
 * 
 * @param url - The source URL or filename
 * @param defaultWidth - The width for the default src attribute
 * @param sizes - Array of widths to generate srcSet entries for
 * @returns Object containing src and srcSet
 */
export const getResponsiveImageProps = (
  url: string | undefined, 
  defaultWidth: number = 800, 
  sizes: number[] = [400, 800, 1200]
): ResponsiveImageResult => {
  if (!url) return { src: undefined, srcSet: undefined };

  // Handle local paths - assume they are in /portfolio/ folder based on existing logic
  if (!url.startsWith('http') && !url.startsWith('https')) {
    return { src: `/portfolio/${url}`, srcSet: undefined };
  }

  // Handle non-Cloudinary external URLs
  if (!url.includes('cloudinary.com') || !url.includes('/upload/')) {
    return { src: url, srcSet: undefined };
  }

  // Generate main src
  const src = getCloudinaryUrl(url, `f_auto,q_auto,w_${defaultWidth}`);

  // Generate srcSet
  const srcSet = sizes
    .map(width => {
      const optimizedUrl = getCloudinaryUrl(url, `f_auto,q_auto,w_${width}`);
      return `${optimizedUrl} ${width}w`;
    })
    .join(', ');

  return { src, srcSet };
};
