import React from 'react'

function DriverReport() {
  return (
    <React.Fragment>
      <div className="d-flex flex-column w-100 align-items-center my-lg-5">
      <div
        style={{ backgroundColor: "#FFF", borderRadius: "10px" }}
        className="d-flex flex-column col-lg-10 col-md-11 col-10 shadow-lg my-5 "
      >
        <form>
          <div className="d-flex flex-row justify-content-between mx-4 my-4">
            <p
              className="m-0"
              style={{
                fontSize:"25px",
                color: "#004577",
                fontFamily: "Barlow",
                fontWeight: "600",
              }}
            >
              Report
            </p>
          </div>
          <div className="d-flex flex-column gap-lg-4 col-12 align-items-center">
            <div className="d-flex flex-column col-10 gap-1">
              <label for="report" style={{fontSize:"20px"}}>Report Type</label>
              <select className="p-3" style={{boxShadow:"0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)", border:"1.597px solid rgba(66, 80, 102, 0.40)", borderRadius:"7.983px"}} 
              name="" id="">
                <option value="">Type of Report</option>
                <option value="">option2</option>
                <option value="">option3</option>
                <option value="">option1</option>
              </select>
            </div>
            <div className="d-flex flex-column col-10 gap-1">
              <label for="report" style={{fontSize:"20px"}}>Date</label>
              <select className="p-3" style={{boxShadow:"0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)", border:"1.597px solid rgba(66, 80, 102, 0.40)", borderRadius:"7.983px"}} 
              name="" id="">
                <option value="">2020/07/30</option>
                <option value="">option2</option>
                <option value="">option3</option>
                <option value="">option1</option>
              </select>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center my-5">
            <button
              className="p-2"
              style={{
                borderRadius: "4px",
                border: "1px solid #DF0404",
                backgroundColor: "#004577",
                color: "#FFF",
                fontSize: "17px",
                fontWeight: "600",
                fontFamily: "Barlow",
                width: "45%",
                boxShadow:"0px 10px 20px 0px rgba(192, 192, 192, 0.35)"
              }}
            >
              Download
            </button>
          </div>
        </form>
      </div>
    </div>
    </React.Fragment>
  )
}

export default DriverReport
