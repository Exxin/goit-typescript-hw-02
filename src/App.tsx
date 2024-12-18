import { useState, useEffect } from "react";
import "./App.css";
import { fetchPhotos } from "./gallery-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

// Тип для зображення
interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
}

function App() {
  // Типізуємо всі стани
  const [images, setImages] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Типізація handleSearch
  const handleSearch = (newQuery: string): void => {
    setQuery(newQuery);
    setPage(1);
    setImages([]); // Очищаємо результати перед новим пошуком
  };

  // Типізація handleLoadMore
  const handleLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  // Типізація openModal
  const openModal = (image: Photo): void => {
    setSelectedImage(image.urls.regular);
    setModalIsOpen(true);
  };

  // Типізація closeModal
  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  // Вплив запитів на зміну стану
  useEffect(() => {
    if (!query) {
      return;
    }

    async function getPhotos() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchPhotos(query, page);
        setImages((prevImages) => [...prevImages, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getPhotos();
  }, [page, query]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}

      <ErrorMessage error={error} />

      <Loader isLoading={isLoading} />

      {images.length > 0 && (
        <LoadMoreBtn isLoadMore={true} onClick={handleLoadMore} />
      )}

      <ImageModal
        imageUrl={selectedImage}
        isOpen={modalIsOpen}
        onClose={closeModal}
      />
    </>
  );
}

export default App;
