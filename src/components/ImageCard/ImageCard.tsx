import styles from "./ImageCard.module.css";

interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string | null;
}

interface ImageCardProps {
  image: Photo;
  onClick: () => void;
}

export default function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img
        className={styles.img}
        src={image.urls.small}
        alt={image.alt_description || "Image"}
      />
    </div>
  );
}
