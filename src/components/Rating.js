import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  
  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating === rating ? 0 : selectedRating);
  };
  
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className="star"
          color={star <= rating ? '#ffc107' : '#e4e5e9'}
          onClick={() => handleRatingClick(star)}
        />
      ))}
    </div>
  );
};

export default StarRating;
