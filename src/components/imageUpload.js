import React ,{ useState, useRef } from 'react'
import * as AiIcon from 'react-icons/ai'
import * as IoIcon from 'react-icons/io5'
import '../styles/imageUpload.css'
import { Opacity } from '@mui/icons-material';

function ImageUpload({ onFileChange }) {

  const [imageSrc, setImageSrc] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageSrc(reader.result);
        };
        reader.readAsDataURL(file);

        // Inform the parent about the selected file
        onFileChange(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleClearImage = (event) => {
    setImageSrc(null);
    event.stopPropagation(); // Prevent the event from bubbling up to parent elements
  };

  return (
    <>
        <div
            className={`uploadBoxStyleCommon box-size-var01 ${imageSrc ? 'image-present' : ''}`}
            onClick={handleUploadClick}
            style={{ backgroundImage: `url(${imageSrc})` }}
        >
            {!imageSrc && (
            <>
                <AiIcon.AiOutlineCloudUpload style={{ fontSize: "60px", color: "#004577" }} />
                <p className='uploadCompPara'>Upload image</p>
            </>
                )}
            {imageSrc && (
                <IoIcon.IoCloseCircle onClick={handleClearImage} style={{fontSize:"50px",opacity:0.8, color:"#004577"}}/>
            )}
            <input type="file" style={{ display: 'none' }} ref={fileInputRef} onChange={handleImageChange} accept="image/*"/>                 
        </div>
    </>
  )
}

export default ImageUpload
