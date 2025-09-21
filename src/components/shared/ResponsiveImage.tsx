import { type FC } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean; // For above-the-fold images
  sizes?: string; // For responsive sizing
}

const ResponsiveImage: FC<ResponsiveImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  width = 40, 
  height = 40,
  priority = false,
  sizes = `${width}px`
}) => {
  // Extract filename without extension for building responsive sources
  const baseName = src.replace(/\.[^/.]+$/, '');
  
  return (
    <picture>
      {/* AVIF format - best compression */}
      <source 
        srcSet={`${baseName}-40.avif 1x, ${baseName}-80.avif 2x`}
        type="image/avif"
        sizes={sizes}
      />
      {/* WebP format - good compression, wide support */}
      <source 
        srcSet={`${baseName}-40.webp 1x, ${baseName}-80.webp 2x`}
        type="image/webp"
        sizes={sizes}
      />
      {/* Fallback - WebP 40px for best performance */}
      <img
        src={`${baseName}-40.webp`}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        // Preload critical images
        {...(priority && {
          'data-priority': 'true'
        })}
      />
    </picture>
  );
};

export default ResponsiveImage;
