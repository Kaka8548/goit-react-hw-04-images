import { Application } from './App.styled';
import Button from './button/Button';
import ImageGallery from './imageGallery/ImageGallery';
import Searchbar from './searchbar/Searchbar';
import { filterHIts, getImages } from 'utils';
import Loader from './loader/Loader';
import { useState } from 'react';
import { useEffect } from 'react';

export function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await getImages({ query, page });
        const filteredHits = filterHIts(data.hits);

        setImages(prevState => [...prevState, ...filteredHits]);
        setTotalImages(data.totalHits);
        setError('');
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSubmit = normilizedQuery => {
    setQuery(normilizedQuery);
    setImages([]);
    setPage(1);
    setTotalImages(0);
  };

  const handleClick = () => {
    setPage(prevState => prevState + 1);
  };

  const isBtnShown = totalImages !== images.length && !isLoading;

  return (
    <Application>
      <Searchbar handleSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {isBtnShown && <Button onClick={handleClick} />}
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </Application>
  );
}
