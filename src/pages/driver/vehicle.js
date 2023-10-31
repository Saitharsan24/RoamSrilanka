import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import img1 from "./../../assets/images/front-car.png";
import img2 from "./../../assets/images/back-car.png";
import img3 from "./../../assets/images/side1-car.png";
import img4 from "./../../assets/images/side2-car.png";
import "./../../styles/vehicle.css";
import * as Icon from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import { useSession } from '../../Context/SessionContext';
import axios from "axios";
// import ReactStars from "react-rating-stars-component";

function Vehicle() {

    //Initiating sessoin data
    const { sessionData , setSessionData  } = useSession();

    const userId = sessionData.userId;
    console.log('user: ' + userId);

    const apiBaseUrl = "http://localhost:8080";
    const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        timeout: 10000,
      });

    const deleteVehicle = async(e) => {
        e.preventDefault();
        try {
          const response = await axiosInstance.delete(`/deleteVehicleByUser/${userId}`);
    
          if (response.status === 200) {
            window.location.reload();
            console.log("okkkk");
          }
        } catch (error) {
          console.log(error);
        }
    };

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

    const [rowCount, setRowCount] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/count')
            .then((response) => response.json())
            .then((data) => setRowCount(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const [vehicle, setVehicle] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/vehiclebyUser/'+userId)
            .then((response) => response.json())
            .then((data) => setVehicle(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    // const totalValues = vehicle ? vehicle.length : 0;
    console.log(vehicle)
    console.log('vehicle length : ' + vehicle.length)
    // const totalVehicle = vehicle ? vehicle.length : 0;

    // console.log('totalVehicle ' + totalVehicle)
    // const images = [
    //     {id:0, value:rowCount === 3 ? vehicle[0]['image1'] : img1},
    //     {id:1, value:rowCount === 3 ? vehicle[0]['image2'] : img2},
    //     {id:2, value:rowCount === 3 ? vehicle[0]['image3'] : img3},
    //     {id:3, value:rowCount === 3 ? vehicle[0]['image4'] : img4}
    // ]

    const images = [
        {id:0, value:vehicle.length === 1 ? vehicle[0]['image1'] : img1},
        {id:1, value:vehicle.length === 1 ? vehicle[0]['image2'] : img1},
        {id:2, value:vehicle.length === 1 ? vehicle[0]['image3'] : img1},
        {id:3, value:vehicle.length === 1 ? vehicle[0]['image4'] : img1}
    ]

    setTimeout(() => { 
        console.log('hello')
    },2000);

    const [sliderData, setSliderData] = useState(images[0]);
    const handleClick = (index) => {
        console.log(index);
        const slider = images[index];
        setSliderData(slider);
    }

    console.log(rowCount)

    return (
        <div>
            <div
                style={{ backgroundColor: "#ECECEC" }}
                className="d-flex flex-row column-gap-2 col-12 "
            >
                <div className="d-flex flex-column flex-lg-row col-lg-9 col-md-8 col-12 p-2 mt-4 w-100">
                    {/* <div class="position-relative">
                        <div class="position-absolute top-0 end-0">h</div>
                    </div> */}
                    <div class="row">
                        
                        {(vehicle.length === 0) &&
                        <div className="col-sm-12 w-100">
                            <div>
                                <div class="card">
                                    <div class="card-body">
                                        <h4>Add Your Vehicle Informations</h4>
                                        <p class="card-text text-muted">you haven't uploaded your vehicle details please provide your vehicle informations for better experience.</p>
                                        <br></br> 
                                        <Link to="/driver/drivernewVehicle"><button class="btn btn-primary mt-3 ml-2">Add My Vehicle</button></Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        }  
                        {(vehicle.length !==0) &&
                        <div class="row">
                            {vehicle[0]['status'] == 1 ? (
                                <div style={{color:"green"}}>Status</div>
                            ):(
                                <div style={{color:"red"}}>Status</div>
                            )}

                            <button onClick={deleteVehicle}>Delete My vehicle</button>
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
                                                    <h6 class="card-title">{vehicle.length === 1 ? vehicle[0]['vehicle_number'] : 'WP SP 2233'}</h6>
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
                                                    <h6 class="card-title">{vehicle.length === 1 ? vehicle[0]['color'] : 'White'}</h6>
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
                                                    <h6 class="card-title">{vehicle.length === 1 ? vehicle[0]['company'] : 'TOYOTA'}</h6>
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
                                                    <h6 class="card-title">{vehicle.length === 1 ? vehicle[0]['seats'] : '4'}</h6>
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
                                                    <h6 class="card-title">{vehicle.length === 1 ? vehicle[0]['year'] : '2019'}</h6>
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
                                                    <h6 class="card-title">{vehicle.length === 1 ? vehicle[0]['model'] : 'Premio'}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Vehicle;