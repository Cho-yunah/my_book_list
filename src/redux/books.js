import { BOOK_SUCCESS, BOOK_START, BOOK_FAIL } from './actions';

// 초기값 셋팅
const initialState = { books: [], loading: false, error: null };

export default function books(state = initialState, action) {
  switch (action.type) {
    case BOOK_SUCCESS:
      return { books: action.books, loading: false, error: null };
    case BOOK_START:
      return { ...state, loading: true, error: null };
    case BOOK_FAIL:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
