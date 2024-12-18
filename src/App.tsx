import { useState, useEffect } from "react";
import "./App.css";
import { fetchPhotos } from "./gallery-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
// import SearchBtn from "./components/SearchButton/SearchBtn";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image.urls.regular);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
      {/* <SearchBtn onSearchBtn={handleSearch}/> */}

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
