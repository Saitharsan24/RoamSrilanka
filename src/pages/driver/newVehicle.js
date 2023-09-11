import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DrivernewVehicle () {

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
        image4: ""
    })

    const {vehicle_number, color, model, company, seats, year, image1, image2, image3, image4 } = vehicle;

    const onInputChange = (e) => {
        setVehicle({ ...vehicle, [e.target.name]: e.target.value })
    }

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/addVehicle", vehicle);
        navigate("/driver/driverVehicle");
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
                                        <input type={"file"} class="form-control" id="inputEmail4" name="image1" value={image1} onChange={(e)=>onInputChange(e)}/>
                                    </div>
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">Image - 02</label>
                                        <input type={"file"} class="form-control" id="inputEmail4" name="image2" value={image2} onChange={(e)=>onInputChange(e)}/>
                                    </div>
                                </div>
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">Image - 03</label>
                                        <input type="file" class="form-control" id="inputEmail4" name="image3" value={image3} onChange={(e)=>onInputChange(e)}/>
                                    </div>
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">Image - 04</label>
                                        <input type="file" class="form-control" id="inputEmail4" name="image4" value={image4} onChange={(e)=>onInputChange(e)}/>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary mt-3 ml-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DrivernewVehicle;