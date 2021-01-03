import React, { useEffect } from 'react';
import { LoadingOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import BookItem from './BookItem';
import styles from './BookList.module.css';

export default function BookList({
  // 뷰에 관련된 3개
  books,
  loading,
  error,
  // 리덕스의 상태를 바꾸기 위해 넣어준것 4개를 컨테이너로 옮긴다.
  // startBooks,
  // successBooks,
  // failBooks,
  // token,
  getBooks, // getBooks를 호출만 한다.
}) {
  useEffect(() => {
    getBooks();
  }, [getBooks]);

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
              onClick={this.getBooks}
            />
          </p>
        </div>
      );
    }
  }

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
