import React from 'react';
import type { CardProps } from '../../interfaces';
import Button from './Button';
import { DEFAULT_CARD_IMAGE, UI_TEXT } from '../../constants';

export const Card: React.FC<CardProps> = ({ id, title, description, imageUrl }) => {
  const imgSrc = imageUrl || DEFAULT_CARD_IMAGE;
  const idStr = id !== undefined && id !== null ? String(id) : undefined;

  const handleBook = () => {
    // placeholder action — replace with real navigation / modal
    alert(`Booking clicked for: ${title}${idStr ? ' (id: ' + idStr + ')' : ''}`);
  };

  return (
    <article
      className='border rounded-lg p-4 shadow-sm hover:shadow-lg transition max-w-sm'
      data-id={idStr}
    >
      <img src={imgSrc} alt={title} className='w-full h-44 object-cover rounded-md mb-3' />
      <h3 className='text-lg text-black font-semibold'>{title}</h3>
      {description && <p className='text-gray-600 mt-1 mb-3'>{description}</p>}
      <div className='flex gap-3'>
        <Button className='bg-indigo-600 hover:bg-indigo-700 text-white' label={UI_TEXT.bookNow} onClick={handleBook} />
        <Button
          label={UI_TEXT.details}
          onClick={() => alert('Show details (replace with real route)')}
          className='bg-gray-200 text-black hover:bg-gray-300'
        />
      </div>
    </article>
  );
};
