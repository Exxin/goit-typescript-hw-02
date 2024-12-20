import Modal from "react-modal";
import styles from "./ImageModal.module.css";

interface ImageModalProps {
  imageUrl: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ImageModal({ imageUrl, isOpen, onClose }: ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
      appElement={document.getElementById("root") || undefined}
    >
      <div>
        {imageUrl ? (
          <img className={styles.img} src={imageUrl} alt="Selected image" />
        ) : (
          <p>No image selected</p>
        )}
      </div>
    </Modal>
  );
}
