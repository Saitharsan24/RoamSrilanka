import React, { useState, useEffect } from "react";

function DrivernewVehicle () {

    return (
        <div className="d-flex w-100">
            <div className="d-flex flex-row col-lg-11 ms-lg-5 col-md-12 justify-content-around">
                <div class="col-sm-10 mb-3 mb-sm-0">
                    <div class="card mt-5">
                        <div class="card-body">
                            <h5 class="card-title">My Vehicle Info</h5><hr></hr>
                            <form className="">
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">Vehicle Number</label>
                                        <input type="text" class="form-control" id="inputEmail4" placeholder="Vehicle License Plate Number" />
                                    </div>
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputPassword4">Color</label>
                                        <input type="text" class="form-control" id="inputPassword4" placeholder="Vehicle Color" />
                                    </div>
                                </div>
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">Model</label>
                                        <input type="text" class="form-control" id="inputEmail4" placeholder="Vehicle Model" />
                                    </div>
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputPassword4">Manufactured Company</label>
                                        <input type="text" class="form-control" id="inputPassword4" placeholder="Company Name" />
                                    </div>
                                </div>
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">No. of Seats</label>
                                        <input type="number" class="form-control" id="inputEmail4" placeholder="Count of seats" />
                                    </div>
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputPassword4">Manufactured Year</label>
                                        <input type="number" class="form-control" id="inputPassword4" placeholder="Manufactured Year" />
                                    </div>
                                </div>
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">Image - 01</label>
                                        <input type="file" class="form-control" id="inputEmail4" />
                                    </div>
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">Image - 02</label>
                                        <input type="file" class="form-control" id="inputEmail4" />
                                    </div>
                                </div>
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">Image - 03</label>
                                        <input type="file" class="form-control" id="inputEmail4" />
                                    </div>
                                    <div class="form-group col-md-6 p-2">
                                        <label for="inputEmail4">Image - 04</label>
                                        <input type="file" class="form-control" id="inputEmail4" />
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