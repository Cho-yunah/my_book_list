import React from 'react';
import axios from 'axios';
import { sleep } from '../utils';
import { LoadingOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import BookItem from './BookItem';
import styles from './BookList.module.css';

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
      <>
        <div className={styles.booklist_container}>
          <h1 className={styles.booklist_header}>
            MY BOOK LIST{loading && <LoadingOutlined />}
          </h1>
          <div className={styles.booklist_introbox}>
            <div className={styles.booklist_innerbox}>
              <div className={styles.booklist_intromessage}>
                <p>책을 읽으며 당신이 생각한 것을 적어보세요 </p>
                <p className={styles.booklist_lorem}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  cum architecto praesentium, vel minus numquam modi. Autem
                  tempora aliquid voluptas officia, iure magnam a expedita
                  reprehenderit neque natus sunt nesciunt.
                </p>
              </div>
              <img
                src="/img/Books_I've_read.png"
                alt="Books"
                className={styles.booklist_introimage}
              />
            </div>
          </div>
          <section className={styles.booklist_designbox}>
            Book Contents
            <p className={styles.booklist_designmsg}>recommand</p>
          </section>
          <section className={styles.booklist_itembox}>
            {books.length === 0 && <p> 데이터가 없습니다.</p>}
            {books.length !== 0 &&
              books.map((book) => {
                return <BookItem {...book} />;
              })}
          </section>
        </div>
      </>
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
