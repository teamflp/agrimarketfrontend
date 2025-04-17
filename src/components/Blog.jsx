import React from "react";
import blog1 from "../assets/img/blog-1.jpg";
import blog2 from "../assets/img/blog-2.jpg";
import blog3 from "../assets/img/blog-3.jpg";

export default function Blog() {
    return(
        <div className="container-fluid py-5 bg-white">
            <div className="container">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: '500px' }}>
                    <h6 className="text-primary text-uppercase">Our Blog</h6>
                    <h1 className="display-5">Latest Articles From Our Blog Post</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4">
                        <div className="blog-item position-relative overflow-hidden">
                            <img className="img-fluid" src={blog1} alt="Blog" />
                            <a className="blog-overlay" href="">
                                <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span className="text-white fw-bold">Jan 01, 2050</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item position-relative overflow-hidden">
                            <img className="img-fluid" src={blog2} alt="Blog" />
                            <a className="blog-overlay" href="">
                                <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span className="text-white fw-bold">Jan 01, 2050</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item position-relative overflow-hidden">
                            <img className="img-fluid" src={blog3} alt="Blog" />
                            <a className="blog-overlay" href="">
                                <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span className="text-white fw-bold">Jan 01, 2050</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}