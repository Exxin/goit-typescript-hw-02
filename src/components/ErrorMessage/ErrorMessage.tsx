import styles from "./ErrorMessage.module.css";

// Тип для пропсів компонента
interface ErrorMessageProps {
  error: boolean;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div>
      {error && (
        <p className={styles.text}>
          Oops! There was an error! Please reload!
        </p>
      )}
    </div>
  );
}
