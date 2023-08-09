import React from 'react'
import '../../styles/tourist/touristblog.css';

function TouristBlog() {
  return (
    <div className='tourist-main'>
      
      <div className="tourist-headings w-100">
        <h2 className='mb-1' style={{margin:'0px', fontWeight:'600'}}>Write new blog article</h2>
        <hr style={{margin:'0px'}} />
      </div>

      {/* Blog form */}
      <div className='new-blog-form'>
        <div className="blog-heading"></div>
        <div className="blog-image-upload"></div>
        <div className="blog-content"></div>
        
      </div>
      
    </div>
  )
}

export default TouristBlog;