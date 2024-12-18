import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

// Типи для пропсів компоненту
interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
}

interface ImageGalleryProps {
  items: Image[];
  onImageClick: (image: Image) => void;
}

export default function ImageGallery({ items, onImageClick }: ImageGalleryProps) {
  return (
    <ul className={styles.list}>
      {items &&
        items.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} onClick={() => onImageClick(image)} />
          </li>
        ))}
    </ul>
  );
}
