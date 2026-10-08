import Hero from '../components/elements/shared/header/KontenHalaman';
import BestSeller from '../components/BestSeller';
import BookList from '../components/elements/shared/header/BookList';

export default function Home() {
  return (
    <>
      <Hero />
      <BestSeller />
      <BookList />
    </>
  );
}