import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Headeruser from "../../components/headerusers";
import DriverSidebar from "./../../components/driver-sidebar";
import img1 from "./../../assets/images/front-car.png";
import img2 from "./../../assets/images/back-car.png";
import img3 from "./../../assets/images/side1-car.png";
import img4 from "./../../assets/images/side2-car.png";
import "./../../styles/vehicle.css";

function Vehicle() {

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
            <Headeruser />
            <div
                style={{ backgroundColor: "#ECECEC" }}
                className="d-flex flex-row column-gap-2 col-12"
            >
                <div className="col-lg-3 col-md-4 col-12">
                    <DriverSidebar />
                </div>
                <div className="d-flex mt-5 flex-column align-items-center">

                    <div className="d-flex align-items-center">
                        {
                            images.map((data, i) =>
                            <div className="thumbnail" key={i}>
                                <img className={sliderData.id===i?"clicked":""}  src={data.value} onClick={() => handleClick(i)} width="70px" height="70px" />
                            </div>
                            )
                        }
                    </div>
                    
                    <img className="big" src={sliderData.value} height="300" width="500"/>
                </div>
            </div>
        </div>
    );
}

export default Vehicle;