import React from 'react';
import ImageItem from './ImageItem';

export default function ShowImages({ files }) {
  return (
    <ul>
      {files.map((file, i) => (
        <ImageItem key={i} file={file} />
      ))}
    </ul>
  );
}
