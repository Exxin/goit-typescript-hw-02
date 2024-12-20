import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string | null;
}

interface ImageGalleryProps {
  items: Photo[];
  onImageClick: (image: Photo) => void;
}

export default function ImageGallery({ items, onImageClick }: ImageGalleryProps) {
  return (
    <ul className={styles.list}>
      {items.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
}
