import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export default function BookItem({ title, author, message, url }) {
  return (
    <div>
      <h2>
        {title}{' '}
        <a href={url} target="_BLANK" rel="noreferrer">
          <Button icon={<HomeOutlined />} />
        </a>
      </h2>
      <h3>{author}</h3>
      <pre>{message}</pre>
    </div>
  );
}
