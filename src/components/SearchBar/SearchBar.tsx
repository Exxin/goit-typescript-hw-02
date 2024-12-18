import { Formik, Form, Field, FormikHelpers } from "formik";
import { Toaster, toast } from "react-hot-toast";
import { TiZoom } from "react-icons/ti";
import styles from "./SearchBar.module.css";
import SearchBtn from "../../components/SearchBtn/SearchBtn";

// Тип для пропсів компонента
interface SearchBarProps {
  onSearch: (query: string) => void;
}

// Тип для значень форми
interface FormValues {
  query: string;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const notify = () => {
    toast.error("Please enter text to search for images.");
  };

  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values: FormValues, actions: FormikHelpers<FormValues>) => {
        if (!values.query.trim()) {
          notify();
          return;
        }
        onSearch(values.query);
        actions.resetForm();
      }}
    >
      {({ values, handleSubmit }) => (
        <Form className={styles.form}>
          <TiZoom className={styles.icon} />
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            className={styles.input}
          />
          <SearchBtn
            onClick={() => {
              if (!values.query.trim()) {
                notify();
                return;
              }
              handleSubmit(); // Викликає submit форми
            }}
          />
          <Toaster />
        </Form>
      )}
    </Formik>
  );
}
