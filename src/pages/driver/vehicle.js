import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import img1 from "./../../assets/images/front-car.png";
import img2 from "./../../assets/images/back-car.png";
import img3 from "./../../assets/images/side1-car.png";
import img4 from "./../../assets/images/side2-car.png";
import "./../../styles/vehicle.css";
import * as Icon from "react-bootstrap-icons";
// import ReactStars from "react-rating-stars-component";

function Vehicle() {

    const ratingExample = {
        size: 50,
        count: 5,
        color: "black",
        activeColor: "yellow",
        value: 0,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />
    };

    const images = [
        {id:0, value:img1},
        {id:1, value:img2},
        {id:2, value:img3},
        {id:3, value:img4}
    ]

    const [sliderData, setSliderData] = useState(images[0]);
    const handleClick = (index) => {
        console.log(index);
        const slider = images[index];
        setSliderData(slider);
    }

    return (
        <div>
            <div
                style={{ backgroundColor: "#ECECEC" }}
                className="d-flex flex-row column-gap-2 col-12"
            >
                
                <div className="d-flex flex-column flex-lg-row col-lg-9 col-md-8 col-12 p-2 mt-4 w-100">
                    {/* <div class="position-relative">
                        <div class="position-absolute top-0 end-0">h</div>
                    </div> */}
                    
                    <div class="row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Vehicle</h5>
                            <div class="position-relative">
                                <div class="position-absolute top-0 end-0"><Icon.Pencil color="black" /></div>
                            </div>
                            <p class="card-text text-muted">you can edit the pictures of your vehicle</p>
                            <div class="card">
                                <div class="card-body">
                                    <div className="d-flex align-items-center">
                                        {
                                            images.map((data, i) =>
                                            <div className="thumbnail rounded mx-auto d-block shadow-lg" key={i}>
                                                <img className={sliderData.id===i?"clicked":""}  src={data.value} onClick={() => handleClick(i)} width="100px" height="100px" />
                                            </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3 border-danger ">
                                <img className="big" src={sliderData.value} height="300" width="500"/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card mb-2">
                            <div class="card-body">
                                <h5 class="card-title">Vehicle Rate</h5>
                                {/* <ReactStars {...ratingExample} /> */}
                            </div>
                        </div>
                        <div class="card">
                        <div class="card-body">
                            <div class="position-relative">
                                <div class="position-absolute top-0 end-0"><Icon.Pencil color="black" /></div>
                            </div>
                            <h5 class="card-title">Info</h5>
                            <p class="card-text  text-muted">With supporting text below as a natural lead-in to additional content.</p>
                            
                            <div class="row mt-2">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <div class="card">
                                        <div class="card-body">
                                            <h6 class="card-title">Vehicle Number</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <div class="card border-danger">
                                        <div class="card-body">
                                            <h6 class="card-title">sp CAR 3111</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <div class="card">
                                        <div class="card-body">
                                            <h6 class="card-title">Color</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <div class="card border-danger">
                                        <div class="card-body">
                                            <h6 class="card-title">White</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <div class="card">
                                        <div class="card-body">
                                            <h6 class="card-title">Manufactured Company</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <div class="card border-danger">
                                        <div class="card-body">
                                            <h6 class="card-title">Toyota</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <div class="card">
                                        <div class="card-body">
                                            <h6 class="card-title">Seats</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <div class="card border-danger">
                                        <div class="card-body">
                                            <h6 class="card-title">4</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <div class="card">
                                        <div class="card-body">
                                            <h6 class="card-title">Manufactured year</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <div class="card border-danger">
                                        <div class="card-body">
                                            <h6 class="card-title">2018</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <div class="card">
                                        <div class="card-body">
                                            <h6 class="card-title">Model</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <div class="card border-danger">
                                        <div class="card-body">
                                            <h6 class="card-title">Premio</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Vehicle;