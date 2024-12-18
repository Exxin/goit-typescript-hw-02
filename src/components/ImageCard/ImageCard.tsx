import styles from "./ImageCard.module.css";

// Типи для пропсів компонента
interface Image {
  urls: {
    small: string;
  };
  alt_description?: string;
}

interface ImageCardProps {
  image: Image;
  onClick: (url: string) => void;
}

export default function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <img
      onClick={() => onClick(image.urls.small)}
      className={styles.img}
      src={image.urls.small}
      alt={image.alt_description || "Image"}
    />
  );
}

