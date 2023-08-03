import React from "react";
import Headeruser from "../components/headerusers";
import GuideSidebar from "../components/guide-sidebar";
import MyChart from "../components/myTrips-chart";

const GuideDashoard = () => {
    return(
        <div className="d-flex flex-column">
            <Headeruser/>
            <div className="d-flex flex-row col-12">
                <GuideSidebar/>
                <div className="d-flex flex-row w-100">
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-row">
                            {/* <div><MyChart/></div> */}
                        </div>
                        <div></div>
                    </div>
                    <div className="d-flex flex-column"></div>
                </div>
            </div>
        </div>
    );
};
export default GuideDashoard;