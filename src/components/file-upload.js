import React from "react";
import "./../styles/file-upload.css";
import * as Icon from "react-bootstrap-icons";

function DragDropFile() {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="d-flex flex-column p-5 col-8" style={{backgroundColor:"white"}}>
        <form
      id="form-file-upload"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="d-flex flex-column gap-4">
        <input
          ref={inputRef}
          type="file"
          id="input-file-upload"
          multiple={true}
          onChange={handleChange}
        />
        <label
          id="label-file-upload"
          htmlFor="input-file-upload"
          className={dragActive ? "drag-active" : ""}
        >
          <div className="d-flex flex-column align-items-center gap-3 p-3">
            <Icon.CloudUpload
              className="mt-2"
              style={{
                textAlign: "center",
                fontSize: "3rem",
                color: "#4C95EB",
              }}
            />
            <p
              className="m-0"
              style={{ fontFamily: "Mulish", fontSize: "1.25rem" }}
            >
              <b>Drag & drop files or </b>
            </p>
            <span style={{ color: "#4C95EB" }}><button style={{width:"100%"}} className="upload-button p-2" onClick={onButtonClick}>
        Upload Files
        </button></span>
            <p
              className=""
              style={{
                color: "#676767",
                fontFamily: "Mulish",
                fontSize: "1rem",
              }}
            >
              Supported formates: JPEG, PNG, PSD, SVG, TIFF
            </p>
          </div>
        </label>
      </div>
      {dragActive && (
        <div
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
    </div>
  );
}

export default DragDropFile;
