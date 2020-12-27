import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import styles from './BookItem.module.css';

export default function BookItem({ title, author, message, url }) {
  return (
    <div className={styles.bookitem_container}>
      <h1 className={styles.bookitem_header}>{title}</h1>
      <article>
        <h2>
          {' '}
          <a href={url} target="_BLANK" rel="noreferrer">
            <Button icon={<HomeOutlined />} />
          </a>
        </h2>
        <h3>{author}</h3>
        <pre>{message}</pre>
      </article>
    </div>
  );
}
