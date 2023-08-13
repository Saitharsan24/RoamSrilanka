
import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
  PieChart, Pie,
} from 'recharts';



const Registers_users_bar = [
  {
    name: "February",
    tourist: 5,
    driver: 10,
    guite: 5,
    amt: 2400,
  },
  {
    name: "March",
    tourist: 4,
    driver: 3,
    guite: 4,
    amt: 2210,
  },
  {
    name: "April",
    tourist: 20,
    driver: 8,
    guite:10,
    amt: 2290,
  },
  {
    name: "May",
    tourist: 32,
    driver: 7,
    guite:3,
    amt: 2000,
  },
  {
    name: "June",
    tourist: 15,
    driver: 7,
    guite:3,
    amt: 2181,
  },
  {
    name: "July",
    tourist: 9,
    driver: 8,
    guite:4,
    amt: 2500,
  },
  {
    name: "August",
    tourist: 7,
    driver: 2,
    guite:9,
    amt: 2100,
  },
];

const Registered_hotel = [
  {
    name: "Feb",
    hotel: 2,
    amt: 2400,
  },
  {
    name: "Mar",
    hotel: 4,
    amt: 2210,
  },
  {
    name: "Apr",
    hotel: 7,
    amt: 2290,
  },
  {
    name: "May",
    hotel: 12,
    amt: 2000,
  },
  {
    name: "Jun",
    hotel: 8,
    amt: 2181,
  },
  {
    name: "Jul",
    hotel: 6,
    amt: 2500,
  },
  {
    name: "Aug",
    hotel: 3,
    amt: 2100,
  },
];

const monthRevenue_1 = [
  { name: 'Tourist', value: 40000 },
  { name: 'Driver', value: 30000 },
  { name: 'Guite', value: 30000},
  { name: 'Hotel', value: 20000 },
];

const monthRevenue_2 = [
  {
    name: "Feb",
    Revenue: 100000,
    amt: 2400,
  },
  {
    name: "Mar",
    tourist: 120000,
    amt: 2210,
  },
  {
    name: "Apr",
    Revenue: 300000,
    amt: 2290,
  },
  {
    name: "May",
    Revenue: 78000,
    amt: 2000,
  },
  {
    name: "Jun",
    Revenue: 200000,
    amt: 2181,
  },
  {
    name: "Jul",
    Revenue: 390000,
    amt: 2500,
  },
  {
    name: "Aug",
    Revenue: 340000,
    amt: 2100,
  },
];
 






const RegistersUsersBar = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.split(" ")[1]}
      </text>
    </g>
  );
};


const COLORS = ['#004577', '#98A3B2', '#67BCAD', '#596365'];

const RADIAN = Math.PI / 180;
const monthRevenue = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


function AdminDashboard() {
  return (
    <React.Fragment>
      <div className="d-flex flex-row w-100">
        <div className="d-flex flex-column  align-items-center  col-7">
          <div className="d-flex flex  justify-content-center align-items-center  p-3 mt-4 col-12 gap-4">
            <div
              className="d-flex flex justify-content-center align-items-center  fw-bold bg-white col-5"
              style={{ textAlign: "center", borderRadius: "10px" }}
            >
              <div className="mt-3 p-0">
                {" "}
                <p>
                  {" "}
                  Number Of Pending
                  <br /> Blogs <br />
                  <p style={{ color: "#004577", fontSize: "30px" }}>06</p>
                </p>
              </div>
            </div>
            <div
              className="d-flex flex justify-content-center align-items-center fw-bold bg-white col-5"
              style={{ textAlign: "center", borderRadius: "10px" }}
            >
              <div className="mt-3">
                {" "}
                <p>
                  {" "}
                  Number Of Pending
                  <br /> Packages <br />
                  <p style={{ color: "#004577", fontSize: "30px" }}>06</p>
                </p>
              </div>
            </div>
          </div>
          {/* chart-01 */}
          <div className="d-flex flex justify-content-center  align-items-center col-12  ">
              <div className='reg-chart d-flex flex justify-content-center  align-items-center bg-white p-3 mt-3' style={{borderRadius:"10px"}}>
                <div className='d-flex flex-column'>
              <p style={{fontWeight:"bold"}}>Monthly Count Count of Registered users</p>
              {/* <ResponsiveContainer width="100%" height="100%"> */}
                      <BarChart
                        width={600}
                        height={300}
                        data={Registers_users_bar}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="tourist" fill="#004577" minPointSize={5}>
                          <LabelList dataKey="name" content={RegistersUsersBar} />
                        </Bar>
                        <Bar dataKey="driver" fill="#98A3B2" minPointSize={10} />
                        <Bar dataKey="guite" fill="#67BCAD" minPointSize={10} />
                      </BarChart>
                      {/* </ResponsiveContainer> */}

                      </div>
               </div>
          </div>
          <div className="d-flex flex justify-content-center  align-items-center col-12 ">
            <div className="bg-white mt-4 p-4" style={{borderRadius:"10px",width:"638px"}}>
            <p style={{fontWeight:"bold",}}>Monthly Count Count of Registered Hotels</p>
              {/* <ResponsiveContainer width="100%" height="100%"> */}
              <BarChart
                        width={550}
                        height={250}
                        data={Registered_hotel}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="hotel" fill="#004577" minPointSize={5}>
                          <LabelList dataKey="name" content={RegistersUsersBar} />
                        </Bar>
                        {/* <Bar dataKey="driver" fill="#98A3B2" minPointSize={10} />
                        <Bar dataKey="guite" fill="#67BCAD" minPointSize={10} /> */}
                      </BarChart>
                      {/* </ResponsiveContainer> */}
                </div>
          </div>
        </div>

        <div className="d-flex flex-column  align-items-start col-5 gap-3 ">
          <div className="d-flex flex justify-content-center align-items-center bg-white mt-5" style={{borderRadius:"10px"}}>
            <div className='reg-chart d-flex flex-column justify-content-center  align-items-center   p-3 mt-3' >
                     <div className='fw-bold'><span>Total Revenue of this Month</span><span style={{color:"#004577"}}> 120,000/=</span> </div>
                     <div className='d-flex flex '>
                      {/* <ResponsiveContainer width="100%" height="100%"> */}
                        <PieChart width={350} height={200}>
                          <Pie
                            data={monthRevenue_1}
                          cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={monthRevenue_1}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {monthRevenue_1.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                        </PieChart>
                  {/* </ResponsiveContainer> */}
                    <div className='d-flex flex-column justify-content-center  align-items-center'>
                     <p style={{color:"#004577",fontWeight:"bold"}}>Tourist</p>
                     <p style={{color:"#98A3B2",fontWeight:"bold"}}>Driver</p>
                     <p style={{color:"#67BCAD",fontWeight:"bold"}}>Guite</p>
                     <p style={{color:"#596365",fontWeight:"bold"}}>Hotels</p>
                    </div>
                  </div>
         </div>
          </div>
          <div className="d-flex flex col-8 ">
            <div className='bg-white p-3' style={{borderRadius:"10px"}}>
              <p style={{fontWeight:"bold"}}>Monthly Total Revenue  of the System</p>
              {/* <ResponsiveContainer width="100%" height="100%"> */}
              <BarChart
                        width={400}
                        height={280}
                        data={monthRevenue_2}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Revenue" fill="#004577" minPointSize={5}>
                          <LabelList dataKey="name" content={RegistersUsersBar} />
                        </Bar>
                        {/* <Bar dataKey="driver" fill="#98A3B2" minPointSize={10} />
                        <Bar dataKey="guite" fill="#67BCAD" minPointSize={10} /> */}
                      </BarChart>
                      {/* </ResponsiveContainer> */}

              </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AdminDashboard;
