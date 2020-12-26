import React from 'react';
import axios from 'axios';
import { sleep } from '../utils';
import { LoadingOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import BookItem from './BookItem';

export default class BookList extends React.Component {
  state = {
    books: [],
    loading: false,
    error: null,
  };

  render() {
    const { books, loading, error } = this.state;

    if (error !== null) {
      const errorType = error.response.data.error;

      if (errorType === 'INVALID_TOKEN') {
        return (
          <div>
            <h1>BookList {loading && <LoadingOutlined />}</h1>
            <p>
              유효하지 않은 토큰 입니다.
              <Button
                shape="circle"
                icon={<ReloadOutlined />}
                onClick={this.reload}
              />
            </p>
          </div>
        );
      }
    }

    // for 문으로 구현하기
    // const booksJsx = [];
    // for (let i =0;  i<books.length.toExponential; i++) {
    //   const title = books[i].title;
    //   booksJsx.push(<li>{title}</li>)
    // }

    return (
      <div>
        <h1>Book List{loading && <LoadingOutlined />}</h1>
        {books.length === 0 && <p> 데이터가 없습니다.</p>}
        {books.length !== 0 &&
          books.map((book) => {
            return <BookItem {...book} />;
          })}
      </div>
    );
  }

  getBooks = async () => {
    try {
      // 서버에 책 리스트 받기
      this.setState({ loading: true });
      const response = await axios.get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${this.props.token}`,
        },
      });
      console.log(response);

      await sleep(1500);

      // 받은 책 리스트로 다시 랜더해줘 <= state
      this.setState({ books: response.data, loading: false });

      // 에러캐치하기
    } catch (error) {
      console.log(error);
      this.setState({ loading: false }, error);
    }
  };

  async componentDidMount() {
    await this.getBooks();
  }
  reload = async () => {
    this.setState({ error: null });
    await this.getBooks();
  };
}
