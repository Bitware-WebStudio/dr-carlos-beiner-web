export const getCloudinaryUrl = (src: string, options: { width?: number; quality?: number | string } = {}) => {
    const { width, quality = 'auto' } = options;

    // If it's not a Cloudinary URL and not a public ID (simple check), return as is
    // This is a naive check. A better one would Key off the cloud name.
    // Assuming the user will provide full URLs or we configure a base.
    // For now, let's optimize if we detect 'res.cloudinary.com'

    if (!src.includes('res.cloudinary.com')) {
        return src;
    }

    // Split the URL to inject transformations
    // Standard format: https://res.cloudinary.com/<cloud_name>/image/upload/<transformations>/<version>/<public_id>
    // We want to inject after '/upload/'

    const [baseUrl, rest] = src.split('/upload/');
    if (!rest) return src; // Unexpected format

    const params = [];
    params.push('f_auto'); // Auto format (webp/avif)
    params.push(`q_${quality}`); // Auto quality
    if (width) {
        params.push(`w_${width}`);
    }

    return `${baseUrl}/upload/${params.join(',')}/${rest}`;
};

export const generateSrcSet = (src: string) => {
    if (!src.includes('res.cloudinary.com')) return undefined;

    const widths = [640, 768, 1024, 1280, 1536];
    return widths
        .map(w => `${getCloudinaryUrl(src, { width: w })} ${w}w`)
        .join(', ');
};
