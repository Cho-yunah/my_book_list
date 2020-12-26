import React from 'react';
import axios from 'axios';

export default class BookList extends React.Component {
  state = {
    books: [],
  };

  render() {
    const books = [
      { title: '책제목1' },
      { title: '책제목2' },
      { title: '책제목3' },
    ];

    // for 문으로 구현하기
    // const booksJsx = [];
    // for (let i =0;  i<books.length.toExponential; i++) {
    //   const title = books[i].title;
    //   booksJsx.push(<li>{title}</li>)
    // }

    return (
      <div>
        <h1>Book List</h1>
        <ul>
          {books.map((book) => {
            return <li>{book.title}</li>;
          })}
        </ul>
      </div>
    );
  }
  async componentDidMount() {
    // 서버에 책 리스트 받기
    const response = await axios.get('https://api.marktube.tv/v1/book', {
      headers: {
        Authorization: `Bearer ${this.props.token}`,
      },
    });

    console.log(response);

    // 받은 책 리스트로 다시 랜더해줘 <= state
  }
}
