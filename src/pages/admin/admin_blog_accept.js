import React from "react";
import * as BsIcons from 'react-icons/bs'
import { Button } from 'react-bootstrap'
import * as BiIcons from 'react-icons/bi'
import "../../styles/admin/admin_blog_accept.css"
import profile from "../../assets/images/profile.jpg";


function AdminBlogAccept() {
  

  return (
    <React.Fragment>
      <div className='blog-main'>
      
      <div className="tourist-headings w-100">
        <h2 className='mb-1' style={{margin:'0px', fontWeight:'600'}}>Blog article of <span style={{color:"#030229"}}>Robert Johnson</span></h2>
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
              <img  src={profile}
                     className=" primary-pic object-fit-cover img-fluid m-auto"  style={{width:"11vm",height:"11vm"}} ></img>
            </div>

            <div className='secondary-image'>
              <h4 className='mb-2'>Secondary image</h4>
              <div className="d-flex flex gap-3">
              <img  src={profile}
                     className=" primary-pic object-fit-cover img-fluid m-auto"  style={{width:"11vm",height:"11vm"}} ></img>
                     <img  src={profile}
                     className=" primary-pic object-fit-cover img-fluid m-auto"  style={{width:"11vm",height:"11vm"}} ></img>
                </div>
            </div> 
        </div>

        <div className="blog-content">
          <h4 className='mb-2'>Content</h4>
          <input type="text" value='Lorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsome'/>
        </div>

        {/* <div className="blog-add-btn d-flex gap-4">
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
        </div> */}
        <div><h4>Sub heading-01</h4></div>

        <div className="blog-content">
          <input type="text" value='Lorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsomeLorem epsome'/>
        </div>

        <div className="blog-add-btn d-flex justify-content-end gap-4 mt-3">
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
                  >Rejected 
                </Button>
              </a>
              <a href="touristBlogView">
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
                  >Publish
                </Button>
              </a>
        </div>
        
      </div>
    </div>
    </React.Fragment>
  );
}

export default AdminBlogAccept;

