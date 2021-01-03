import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '../components/BookList';
import { getBooksThunk } from '../redux/actions';

export default function BookListContainer({ token }) {
  // 컨테이너에서 redux와의 연결고리 만들어서 컴포넌트로 보낸다.
  //=> 리덕스의 데이터를 받아와서 북리스트의 props로 넣어준다.

  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);

  const dispatch = useDispatch();

  const getBooks = useCallback(async () => {
    dispatch(getBooksThunk(token));
  }, [dispatch, token]);

  return (
    <BookList
      books={books}
      loading={loading}
      error={error}
      getBooks={getBooks}
    />
  );
}
