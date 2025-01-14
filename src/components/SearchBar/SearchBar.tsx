import { Formik, Form, Field, FormikHelpers } from "formik";
import { Toaster, toast } from "react-hot-toast";
import { TiZoom } from "react-icons/ti";
import styles from "./SearchBar.module.css";
import SearchBtn from "../SearchBtn/SearchBtn";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

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
      {({ handleSubmit }) => (
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
          <SearchBtn onClick={handleSubmit} />
          <Toaster />
        </Form>
      )}
    </Formik>
  );
}