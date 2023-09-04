import React, { useState, useRef } from 'react';
import * as AiIcon from 'react-icons/ai';
import * as IoIcon from 'react-icons/io5';
import '../styles/imageUpload.css';

function ImageUpload(props) {
  const [imageSrc, setImageSrc] = useState([]);
  const inputRef = useRef();

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);  // Convert FileList to Array
    setImageSrc(files);

    if (props.onImagesSelected) {  // Send selected images to the parent component
      props.onImagesSelected(files);
    }
  };

  const triggerFileSelect = () => {
    inputRef.current.click();
  };

  return (
    <>
      <div className='uploadBoxStyleCommon box-size-var01' onClick={triggerFileSelect}>
        <AiIcon.AiOutlineCloudUpload style={{ fontSize: "60px", color: "#004577" }} />
        <p className='uploadCompPara'>Upload image</p>
        {imageSrc.length > 0 && (
          <IoIcon.IoCloseCircle style={{ fontSize: "50px", opacity: 0.8, color: "#004577" }} />
        )}
        <input
          ref={inputRef}
          type="file"
          style={{ display: 'none' }}
          multiple
          onChange={handleFileChange}
        />
      </div>
    </>
  );
}

export default ImageUpload;
