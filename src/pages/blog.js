import React, { Component } from "react";
import Footer from "../components/footer";
import "bootstrap/dist/css/bootstrap.css";
import "./../styles/blog.css";
import Header from "../components/Header";

const Blog = () => {
  return (
    <div>
      <Header />
      <div className="blog-bg text-white d-flex flex-column justify-content-center">
        <h1 
          style={{
            fontSize: "7rem",
            textAlign: "center" 
          }}
        >
          Blog Articles
        </h1>
      </div>
      <br />
      <div className="blog-full-list" style={{ textAlign: "center" }}>
        <a href="#link" style={{color:"#004577",fontSize:"1rem"}}>
          Home/Blogs
          <br />
        </a>
        <br />
        <h4 style={{ textAlign: "center",fontSize:"3rem" }}>
          <span style={{color:"#004577"}}>What our</span>
          <span style={{ color: "#DB163A" }}> satisfied clients say</span>
        </h4>
        <br />
        <div className="d-flex  flex-wrap justify-content-evenly gap-3">
          
            <div className="col-lg-3 col-md-5 col-sm-11 col-11">
              <div className="blog-list-img"></div>
              <div className="blog-list-msg"></div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-11 col-11">
              <div className="blog-list-img"></div>
              <div className="blog-list-msg"></div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-11 col-11">
              <div className="blog-list-img"></div>
              <div className="blog-list-msg"></div>
            </div>
          
            <div className="col-lg-3 col-md-5 col-sm-11 col-11">
              <div className="blog-list-img"></div>
              <div className="blog-list-msg"></div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-11 col-11">
              <div className="blog-list-img"></div>
              <div className="blog-list-msg"></div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-11 col-11">
              <div className="blog-list-img"></div>
              <div className="blog-list-msg"></div>
            </div>
          
            <div className="col-lg-3 col-md-5 col-sm-11 col-11">
              <div className="blog-list-img"></div>
              <div className="blog-list-msg"></div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-11 col-11">
              <div className="blog-list-img"></div>
              <div className="blog-list-msg"></div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-11 col-11">
              <div className="blog-list-img"></div>
              <div className="blog-list-msg"></div>
            </div>
          
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
