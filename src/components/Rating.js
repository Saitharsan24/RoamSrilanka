import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ selectedRating, onRatingChange }) => {
  const handleRatingClick = (selectedRating) => {
    onRatingChange(selectedRating);
  };
  
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className="star"
          color={star <= selectedRating ? '#ffc107' : '#e4e5e9'}
          onClick={() => handleRatingClick(star)}
        />
      ))}
    </div>
  );
};

export default StarRating;
