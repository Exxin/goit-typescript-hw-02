import styles from "./SearchBtn.module.css";

// Тип для пропсів компонента
interface SearchBtnProps {
  onClick: () => void;
}

export default function SearchBtn({ onClick }: SearchBtnProps) {
  return (
    <div className={styles.wrap}>
      <button type="button" className={styles.btn} onClick={onClick}>
        Search
      </button>
    </div>
  );
}
