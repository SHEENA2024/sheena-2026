import { useState } from 'react';
import { HiOutlinePhotograph } from 'react-icons/hi';
import './ImageFrame.css';

export default function ImageFrame({
  src,
  alt = '',
  label = 'Add image',
  ratio = '4 / 3',
  rounded = false,
  className = '',
}) {
  const [failed, setFailed] = useState(false);
  const show = src && !failed;

  return (
    <div
      className={`img-frame ${rounded ? 'img-frame--round' : ''} ${
        show ? '' : 'img-frame--empty'
      } ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {show ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <div className="img-frame__placeholder">
          <HiOutlinePhotograph />
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}