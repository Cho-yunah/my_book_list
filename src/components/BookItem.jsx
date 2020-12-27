import { Button, Rate } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import styles from './BookItem.module.css';

export default function BookItem({ title, author, message, url }) {
  return (
    <div className={styles.bookitem_container}>
      <h1 className={styles.bookitem_header}>{title}</h1>
      <article>
        <h2 className={styles.bookitem_author}>{author}</h2>
        <Rate allowHalf defaultValue={5} className={styles.bookitem_rate} />
        <p className={styles.bookitem_message}>{message}</p>

        <div>
          {' '}
          <a href={url} target="_BLANK" rel="noreferrer">
            <Button
              icon={<HomeOutlined />}
              className={styles.bookitem_sitebutton}
            />
          </a>
        </div>
      </article>
    </div>
  );
}
