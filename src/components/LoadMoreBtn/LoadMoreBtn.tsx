import styles from "./LoadMoreBtn.module.css";

// Тип для пропсів компонента
interface LoadMoreBtnProps {
  isLoadMore: boolean;
  onClick: () => void;
}

export default function LoadMoreBtn({ isLoadMore, onClick }: LoadMoreBtnProps) {
  return (
    <div className={styles.wrap}>
      {isLoadMore && (
        <button className={styles.btn} onClick={onClick}>
          Load more
        </button>
      )}
    </div>
  );
}
