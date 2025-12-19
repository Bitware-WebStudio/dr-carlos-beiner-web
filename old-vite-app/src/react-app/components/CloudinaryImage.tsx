import { ImgHTMLAttributes } from 'react';
import { getCloudinaryUrl, generateSrcSet } from '../utils/cloudinary';

interface CloudinaryImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}

export default function CloudinaryImage({ src, alt, className, ...props }: CloudinaryImageProps) {
    const isCloudinary = src.includes('res.cloudinary.com');
    const srcSet = isCloudinary ? generateSrcSet(src) : undefined;
    const optimizedSrc = isCloudinary ? getCloudinaryUrl(src) : src;

    return (
        <img
            src={optimizedSrc}
            srcSet={srcSet}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, 50vw"
            alt={alt}
            className={className}
            loading="lazy"
            {...props}
        />
    );
}
