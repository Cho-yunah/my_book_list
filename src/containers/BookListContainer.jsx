import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '../components/BookList';
import { bookSuccess, bookFail, bookStart } from '../redux/actions';
import { sleep } from '../utils';
import axios from 'axios';

export default function BookListContainer({ token }) {
  // 컨테이너에서 redux와의 연결고리 만들어서 컴포넌트로 보낸다.
  //=> 리덕스의 데이터를 받아와서 북리스트의 props로 넣어준다.

  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);

  const dispatch = useDispatch();

  const getBooks = useCallback(async () => {
    try {
      dispatch(bookStart());

      await sleep(1500);

      const response = await axios.get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // 받은 책 리스트로 다시 랜더해줘 <= start
      // 리덕스한테 books: response.data를 넣어주기
      dispatch(bookSuccess(books));

      // 에러캐치하기
    } catch (error) {
      console.log(error);
      dispatch(bookFail(error));
    }
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
