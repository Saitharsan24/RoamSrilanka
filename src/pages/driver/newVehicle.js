import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSession } from '../../Context/SessionContext';

function DrivernewVehicle () {

    //Initiating sessoin data
    const { sessionData , setSessionData  } = useSession();

    const userId = sessionData.userId;
    console.log('user: ' + userId);

    const [imageUrl1, setImageUrl1] = useState("");
    const [imageUrl2, setImageUrl2] = useState("");
    const [imageUrl3, setImageUrl3] = useState("");
    const [imageUrl4, setImageUrl4] = useState("");

    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState({
        vehicle_number: "",
        color: "",
        model: "",
        company: "",
        seats: "",
        year: "",
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        insurance_company: "",
        insurance_edate: "",
        insurance_no: "",
        insurance_sdate: "",
        userId: userId,
    })

    const {vehicle_number, color, model, company, seats, year, insurance_company, insurance_edate, insurance_no, insurance_sdate} = vehicle;

    const onInputChange = (e) => {
        
        setVehicle({ ...vehicle, [e.target.name]: e.target.value })
    }

    const onSubmit =async (e) => {
        e.preventDefault();

        console.log(vehicle)
        await axios.post("http://localhost:8080/addVehicle", vehicle);
        navigate("/driver/driverVehicle");
    };

    const upload_preset = "moz2vspi";
    const cloud_name = "dg3y629pc";

  const handleFileChange1 = (e) => {

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", upload_preset);
    const options = {
      method: "POST",
      body: formData,
    };

    fetch(`https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`, options)
      .then((res) => res.json())
      .then((res) => {
        setImageUrl1(res.secure_url); // Update the state with the uploaded image URL
        console.log(res.secure_url); //equal to image1Url1
        setVehicle({ ...vehicle, [e.target.name]: res.secure_url })
        console.log(vehicle); //
      })
      .catch((err) => console.log(err));
  };

    const handleFileChange2 = (e) => {

        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", upload_preset);
        const options = {
        method: "POST",
        body: formData,
        };

        fetch(`https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`, options)
        .then((res) => res.json())
        .then((res) => {
            setImageUrl2(res.secure_url); // Update the state with the uploaded image URL
            console.log(res.secure_url); //
            setVehicle({ ...vehicle, [e.target.name]: res.secure_url })
        })
        .catch((err) => console.log(err));  
    };

    const handleFileChange3 = (e) => {

        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", upload_preset);
        const options = {
        method: "POST",
        body: formData,
        };

        fetch(`https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`, options)
        .then((res) => res.json())
        .then((res) => {
            setImageUrl3(res.secure_url); // Update the state with the uploaded image URL
            console.log(res.secure_url); //
            setVehicle({ ...vehicle, [e.target.name]: res.secure_url })
        })
        .catch((err) => console.log(err));
        
        // console.log(imageUrl3);  
    };

    const handleFileChange4 = (e) => {

        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", upload_preset);
        const options = {
        method: "POST",
        body: formData,
        };

        fetch(`https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`, options)
        .then((res) => res.json())
        .then((res) => {
            setImageUrl4(res.secure_url); // Update the state with the uploaded image URL
            console.log(res.secure_url); //
            setVehicle({ ...vehicle, [e.target.name]: res.secure_url })
        })
        .catch((err) => console.log(err));
        
        // console.log(imageUrl4);  
    };

    return (
        <div className="d-flex w-100">
            <div className="d-flex flex-row col-lg-11 ms-lg-5 col-md-12 justify-content-around">
                <div class="col-sm-11 mb-3 mb-sm-0">
                    <div class="card mt-5">
                        <div class="card-body">
                            <h5 class="card-title">My Vehicle Info</h5><hr></hr>
                            <form className="" onSubmit={(e) => onSubmit(e)}>
                                <div class="d-flex flex-row justify-content-between">

                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">Vehicle Number</label>
                                        <input type={"text"} class="form-control" id="inputEmail4" placeholder="Vehicle License Plate Number" name="vehicle_number" value={vehicle_number} onChange={(e)=>onInputChange(e)}/>
                                    </div>
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputPassword4">Color</label>
                                        <input type={"text"} class="form-control" id="inputPassword4" placeholder="Vehicle Color" name="color" value={color} onChange={(e)=>onInputChange(e)}/>
                                    </div>
                                </div>
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">Model</label>
                                        <input type={"text"} class="form-control" id="inputEmail4" placeholder="Vehicle Model" name="model" value={model} onChange={(e)=>onInputChange(e)}/>
                                    </div>
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputPassword4">Manufactured Company</label>
                                        <input type={"text"} class="form-control" id="inputPassword4" placeholder="Company Name" name="company" value={company} onChange={(e)=>onInputChange(e)}/>
                                    </div>
                                </div>
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">No. of Seats</label>
                                        <input type={"number"} class="form-control" id="inputEmail4" placeholder="Count of seats" name="seats" value={seats} onChange={(e)=>onInputChange(e)}/>
                                    </div>
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputPassword4">Manufactured Year</label>
                                        <input type={"number"} class="form-control" id="inputPassword4" placeholder="Manufactured Year" name="year" value={year} onChange={(e)=>onInputChange(e)}/>
                                    </div>
                                </div>
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">Image - 01</label>
                                        <input type="file" class="form-control" id="inputEmail4" name="image1" onChange={handleFileChange1}/>
                                    </div>
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">Image - 02</label>
                                        <input type="file" class="form-control" id="inputEmail4" name="image2" onChange={handleFileChange2}/>
                                    </div>
                                </div>
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">Image - 03</label>
                                        <input type="file" class="form-control" id="inputEmail4" name="image3" onChange={handleFileChange3}/>
                                    </div>
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">Image - 04</label>
                                        <input type="file" class="form-control" id="inputEmail4" name="image4" onChange={handleFileChange4}/>
                                    </div>
                                </div>
                                {/* <div class="d-flex flex-row justify-content-between">
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">Insuarance Company</label>
                                        <input type={"text"} class="form-control" id="inputEmail4" placeholder="Enter Insuarance Company" name="insurance_company" value={insurance_company} onChange={(e)=>onInputChange(e)}/>
                                    </div>
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputPassword4">Insuarance Number</label>
                                        <input type={"text"} class="form-control" id="inputPassword4" placeholder="Enter Insuarance Number" name="insurance_no" value={insurance_no} onChange={(e)=>onInputChange(e)}/>
                                    </div>
                                </div>
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">Insuarance Start Date</label>
                                        <input type={"date"} class="form-control" id="inputEmail4" name="insurance_sdate" value={insurance_sdate} onChange={(e)=>onInputChange(e)}/>
                                    </div>
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputPassword4">Insuarance End Date</label>
                                        <input type={"date"} class="form-control" id="inputPassword4" name="insurance_edate" value={insurance_edate} onChange={(e)=>onInputChange(e)}/>
                                    </div>
                                </div>
                                <div class="form-group col-md-6 p-2">
                                    <label for="inputEmail4">Insuarance Copy</label>
                                    <input type="file" class="form-control" id="inputEmail4" name="insurance_img" onChange={handleFileChange4}/>
                                </div> */}
                                <button type="submit" class="btn btn-primary mt-3 ml-2" >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>)

}

export default DrivernewVehicle;