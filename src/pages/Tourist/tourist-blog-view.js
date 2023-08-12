import React from 'react'
import '../../styles/tourist/touristblog.css';
import DropFileInput from '../../components/dragdrop.js';
import {Button} from 'react-bootstrap';


function TouristBlogView() {
  const onFileChange = (files) => {
    console.log(files);
  }
  return (
    <div className='tourist-main'>
      
      <div className="tourist-headings w-100">
        <h2 className='mb-1' style={{margin:'0px', fontWeight:'600'}}>Write new blog article</h2>
        <hr style={{margin:'0px'}} />
      </div>

      {/* Blog form */}
      <div className='new-blog-form mt-3 d-flex flex-column gap-3'>
        <div className="blog-heading">
          <h4 className='mb-2'>Heading</h4>
          <input type="text" />
        </div>
        
        <div className='mt-2 d-flex flex-row gap-4 blog-image-upload'>
            <div className='primary-image'>
              <h4 className='mb-2'>Primary image</h4>
                <DropFileInput
                  onFileChange={(files) => onFileChange(files)}
                  />
            </div>

            <div className='secondary-image'>
              <h4 className='mb-2'>Secondary image</h4>
                <DropFileInput
                  onFileChange={(files) => onFileChange(files)}
                  />
            </div> 
        </div>

        <div className="blog-content">
          <h4 className='mb-2'>Content</h4>
          <input type="text" value='Lorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsome'/>
        </div>

        <div className="blog-add-btn d-flex gap-4">
              <a href="rentItem">
                <Button
                    className="rent-btn"
                    variant="primary"
                    size='lg'
                    style={{
                      backgroundColor: "#004577",
                      border: "none",
                      paddingLeft: "25px",
                      paddingRight: "25px",
                      fontSize: "15px",
                    }}
                  >+ Sub-heading
                </Button>
              </a>
              <a href="rentItem">
                <Button
                    className="rent-btn"
                    variant="primary"
                    size='lg'
                    style={{
                      backgroundColor: "#004577",
                      border: "none",
                      paddingLeft: "25px",
                      paddingRight: "25px",
                      fontSize: "15px",
                    }}
                  >+ Paragraph
                </Button>
              </a>
        </div>

        <div className="blog-content">
          <input type="text" value='Lorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsome'/>
        </div>

        <div className="blog-add-btn d-flex justify-content-between gap-4 mt-3">
              <a href="rentItem">
                <Button
                    className="rent-btn"
                    variant="primary"
                    size='lg'
                    style={{
                      backgroundColor: "#A60000",
                      border: "none",
                      paddingLeft: "25px",
                      paddingRight: "25px",
                      fontSize: "15px",
                    }}
                  >Delete article
                </Button>
              </a>
              <a href="rentItem">
                <Button
                    className="rent-btn"
                    variant="primary"
                    size='lg'
                    style={{
                      backgroundColor: "#004577",
                      border: "none",
                      paddingLeft: "25px",
                      paddingRight: "25px",
                      fontSize: "15px",
                    }}
                  >Edit article
                </Button>
              </a>
        </div>
        
      </div>
      
    </div>
  )
}

export default TouristBlogView;