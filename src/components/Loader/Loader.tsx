import { Blocks } from "react-loader-spinner";
// import styles from "./Loader.module.css";

// Тип для пропсів компонента
interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  return (
    isLoading && (
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    )
  );
}
