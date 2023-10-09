import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyLoadImageComponent = ({ alt, url }) => (
    <LazyLoadImage
        alt={alt}
        effect="blur"
        src={url}
    />
);
export default LazyLoadImageComponent;

