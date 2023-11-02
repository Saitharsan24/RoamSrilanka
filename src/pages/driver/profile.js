import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import img2 from "./../../assets/images/profile.jpg";
import img from "./../../assets/images/driver.jpg";
import { useSession } from '../../Context/SessionContext';
import axios from "axios";

function Profile() {
   
    // const [requests, setRequests] = useState([]);
    // //Sending data to backend
    // const apiBaseUrl = "http://localhost:8080";

    // const axiosInstance = axios.create({
    //     baseURL: apiBaseUrl,
    //     timeout: 10000,
    // });

    // useEffect(() => {
    //     // Fetch data from your backend API
    //     axiosInstance
    //       .get("/allTripRequests")
    //       .then((response) => {
    //         setRequests(response.data);
    //         console.log(response.data);
    //       })
    //       .catch((error) => {
    //         console.log("Error fetching data:", error);
    //       });
    // }, []);
    
    // const filteredRequests = requests.filter((request) => request.status == 3);
    // console.log("My requests : " + filteredRequests.length);
    // //Initiating sessoin data
    // const { sessionData , setSessionData  } = useSession();

    // const userId = sessionData.userId;
    // console.log(userId);
    // const Username = sessionData.userFullName;
    // console.log(Username);

    // const [Review, setReview] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:8080/driverReview/'+userId)
    //         .then((response) => response.json())
    //         .then((data) => setReview(data))
    //         .catch((error) => console.error('Error fetching data:', error));
    // }, []);

    // console.log(Review);

    const [requests, setRequests] = useState([]);
    const [driver, setDriver] = useState([]);
    //Sending data to backend
    const apiBaseUrl = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        timeout: 10000,
    });

    useEffect(() => {
        // Fetch data from your backend API
        axiosInstance
          .get("/allTripRequests")
          .then((response) => {
            setRequests(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log("Error fetching data:", error);
          });
    }, []);

    useEffect(() => {
        // Fetch data from your backend API
        axiosInstance
          .get("/viewDriver")
          .then((response) => {
            setDriver(response.data);
            // console.log(response.data);
          })
          .catch((error) => {
            console.log("Error fetching data:", error);
          });
    }, []);
    console.log('hello from driver');
    console.log(driver);
    
    const { sessionData , setSessionData  } = useSession();

    const userId = sessionData.userId;
    console.log(userId);

    const filterDriver = driver.filter((mydriver) => mydriver.userId == userId);
    console.log(filterDriver);

    const filteredRequests = requests.filter((request) => request.status == 3);
    console.log("My requests : " + filteredRequests.length);
    //Initiating sessoin data
    
    const filteredToBe = requests.filter((request) => request.status == 2);
    console.log("To Be Completed : " + filteredToBe.length);

    const Username = sessionData.userFullName;
    console.log(Username);

    const [Review, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/driverReview/'+userId)
            .then((response) => response.json())
            .then((data) => setReview(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    console.log(Review);

    const date = new Date(); // Your date object
    const formattedDate = date.toISOString().split('T')[0];
    console.log(formattedDate);

    return (
        <div>
            <div
                style={{ backgroundColor: "#ECECEC" }}
                className="d-flex flex-row column-gap-2 col-12"
            >
                
                <div className="col-lg-9 col-md-8 col-12 p-2 mt-4 w-100">
                    <div className="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <div className="d-flex align-items-center justify-content-around">
                                    <img src={img2} alt="profile"  width="150px" height="150px" />
                                    <div>
                                        <h3>{Username}</h3>
                                        <h4 style={{fontWeight:"300"}}>Colombo, Sri Lanka</h4>
                                    </div>
                                    <div >
                                        <h3 >{filteredRequests.length}</h3>
                                        <h4 style={{fontWeight:"300"}}>Trips</h4>
                                    </div>
                                    <div>
                                        <h3>{filteredToBe.length}</h3>
                                        <h4 style={{fontWeight:"300"}}>To Be Completed</h4>
                                    </div>
                                    {/* <img src={img2} alt="profile"  width="150px" height="150px" />
                                    <div>
                                        <h3>{Username}</h3>
                                        <h4 style={{fontWeight:"300"}}>Colombo, Sri Lanka</h4>
                                    </div>
                                    <div >
                                        <h3 >{filteredRequests.length}</h3>
                                        <h4 style={{fontWeight:"300"}}>Trips</h4>
                                    </div>
                                    <div>
                                        <h3>4.8</h3>
                                        <h4 style={{fontWeight:"300"}}>Rating</h4>
                                    </div> */}
                                    {/* <div>
                                        <h3>$12 / hr</h3>
                                        <h4 style={{fontWeight:"300"}}>Rate</h4>
                                    </div> */}
                                </div>                                
                            </div>
                        </div>
                    </div><br></br>
                    <div className="d-flex">
                        <div className="col-sm-6 p-2">
                            <div class="card">
                                <div class="card-body">
                                    {/* <div class="position-relative">
                                        <div class="position-absolute top-0 end-0"><Icon.Pencil color="black" /></div>
                                    </div> */}
                                    <h5>Personal Informations</h5><hr></hr>
                                    <div style={{marginTop:"5px"}}>
                                        <h6>Full Name</h6>
                                        <span className="p-1">{Username}</span><hr></hr>
                                    </div>
                                    <div style={{marginTop:"5px"}}>
                                        <h6>About Me</h6>
                                        <span className="p-1">This aspect is crucial, and I commend the driver for prioritizing safety.</span><hr></hr>	
                                    </div>
                                    <div style={{marginTop:"5px"}}>
                                        <h6>Language Spoken</h6>
                                        <span className="p-1">English, Tamil, Sinhala</span>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-sm-6 p-2">
                            <div class="card" style={{ maxHeight: "360px", overflowY: "auto" }}>
                                <div class="card-body">
                                    <h5>Reviews</h5>
                                    {Review.map((item) => (
                                    <div class="card mt-1">
                                        <div class="card-body">
                                            <div class="position-relative">
                                                <div class="position-absolute top-0 end-0"><span style={{color:"blue"}}>{item.date}</span></div>
                                            </div>
                                            <div className="d-flex">
                                                <img src={img2} alt="profile"  className="rounded" width="50px" height="50px" />
                                                <div style={{margin:"5px"}}>
                                                    <h6>{item.tourist_name}</h6>
                                                    {item.feedback}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                    <div class="card mt-1">
                                        <div class="card-body">
                                            <div class="position-relative">
                                                <div class="position-absolute top-0 end-0"><span style={{color:"blue"}}>2023.07.31 | 11:00</span></div>
                                            </div>
                                            <div className="d-flex">
                                                <img src={img2} alt="profile"  className="rounded" width="50px" height="50px" />
                                                <div>
                                                    <h6>Amaya Perera</h6>
                                                    I felt safe throughout the journey, and the driver followed all traffic rules diligently.
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

export default Profile;