import React from 'react';
import "../styles/data-table.css";
import { MDBDataTable } from 'mdbreact';

const HPDatatablePage = () => {

  const data = {
    columns: [
      {
        label: 'Event No',
        field: 'number',
        sort: 'dsc',
        width: 150
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Location',
        field: 'location',
        sort: 'asc',
        width: 150
      },
      {
        label: 'View',
        field: 'button1',
        width: 50,
        btn: 'accept-button',
      },
      {
        label: 'Remove',
        field: 'button2',
        width: 50,
        btn: 'reject-button',
      }
    ],
    rows: [
        {
            number: '01',
            name: 'Starry Nights',
            date: '11/09/2020',
            location: 'Galle, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '02',
            name: 'Ocean Adventure',
            date: '21/10/2023',
            location: 'Badulla, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '03',
            name: 'Cultural Fusion',
            date: '04/11/2021',
            location: 'Nuwara Eliya, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '04',
            name: 'Forest Fest',
            date: '16/11/2021',
            location: 'Galle, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '05',
            name: 'Summer Spectacle',
            date: '07/12/2023',
            location: 'Galle, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '06',
            name: 'Wild Safari',
            date: '07/02/2023',
            location: 'Badulla, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '07',
            name: 'Safari ',
            date: '17/05/2023',
            location: 'Jaffna, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '08',
            name: 'Food Fiesta',
            date: '18/06/2023',
            location: 'Nuwara Eliya, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '09',
            name: 'Ocean Adventure',
            date: '15/12/2023',
            location: 'Badulla, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '10',
            name: 'Sunset Soiree',
            date: '15/12/2022',
            location: 'Badulla, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '11',
            name: 'Vintage Carnival',
            date: '28/01/2023',
            location: 'Nuwara Eliya, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '12',
            name: 'Forest Fest',
            date: '25/04/2022',
            location: 'Nuwara Eliya, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '13',
            name: 'Cultural Fusion',
            date: '19/10/2023',
            location: 'Galle, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '14',
            name: 'Historic Walk',
            date: '08/02/2023',
            location: 'Galle, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '15',
            name: 'Historic Walk',
            date: '08/12/2020',
            location: 'Nuwara Eliya, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '16',
            name: 'Summer Spectacle',
            date: '06/06/2023',
            location: 'Jaffna, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '17',
            name: 'Wild Safari',
            date: '12/12/2022',
            location: 'Badulla, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '18',
            name: 'Summer Spectacle',
            date: '12/12/2021',
            location: 'Jaffna, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '19',
            name: 'Cultural Fusion',
            date: '10/05/2023',
            location: 'Jaffna, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '20',
            name: 'Wild Safari',
            date: '28/05/2023',
            location: 'Jaffna, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '21',
            name: 'Wild Safari',
            date: '25/04/2022',
            location: 'Badulla, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '22',
            name: 'Mountain Magic',
            date: '25/01/2022',
            location: 'Galle, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '23',
            name: 'Starry Nights',
            date: '27/12/2022',
            location: 'Nuwara Eliya, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '24',
            name: 'Wild Safari',
            date: '25/04/2023',
            location: 'Galle, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '25',
            name: 'Perahera',
            date: '07/01/2023',
            location: 'Jaffna, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '26',
            name: 'Mountain Magic',
            date: '08/08/2023',
            location: 'Jaffna, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '27',
            name: 'Mountain Magic',
            date: '26/06/2021',
            location: 'Nuwara Eliya, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '28',
            name: 'Starry Nights',
            date: '07/05/2023',
            location: 'Galle, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '29',
            name: 'Perahera',
            date: '21/08/2023',
            location: 'Kandy, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '30',
            name: 'Starry Nights',
            date: '18/05/2023',
            location: 'Badulla, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '31',
            name: 'Mountain Retreat',
            date: '04/11/2020',
            location: 'Nuwara Eliya, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '32',
            name: 'Starry Nights',
            date: '08/06/2023',
            location: 'Nuwara Eliya, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '33',
            name: 'Mountain Retreat',
            date: '08/05/2023',
            location: 'Galle, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '34',
            name: 'Ocean Adventure',
            date: '14/08/2023',
            location: 'Galle, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '35',
            name: 'Starry Nights',
            date: '04/11/2023',
            location: 'Nuwara Eliya, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '36',
            name: 'Perahera',
            date: '30/07/2023',
            location: 'Jaffna, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '37',
            name: 'Mountain Retreat',
            date: '22/03/2020',
            location: 'Jaffna, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '38',
            name: 'Vintage Carnival',
            date: '05/12/2020',
            location: 'Nuwara Eliya, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '39',
            name: 'Perahera',
            date: '04/11/2020',
            location: 'Galle, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '40',
            name: 'Starry Nights',
            date: '04/11/2022',
            location: 'Badulla, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '41',
            name: 'Vintage Carnival',
            date: '01/07/2023',
            location: 'Nuwara Eliya, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '42',
            name: 'Vintage Carnival',
            date: '01/10/2023',
            location: 'Galle, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '43',
            name: 'Ocean Adventure',
            date: '10/11/2020',
            location: 'Jaffna, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '44',
            name: 'Cultural Fusion',
            date: '04/10/2020',
            location: 'Galle, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '45',
            name: 'Ocean Adventure',
            date: '01/09/2023',
            location: 'Nuwara Eliya, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '46',
            name: 'Ocean Adventure',
            date: '04/11/2020',
            location: 'Jaffna, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '47',
            name: 'Forest Fest',
            date: '04/08/2023',
            location: 'Jaffna, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '48',
            name: 'Perahera',
            date: '04/08/2021',
            location: 'Galle, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '49',
            name: 'Forest Fest',
            date: '01/08/2023',
            location: 'Nuwara Eliya, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '50',
            name: 'Vintage Carnival',
            date: '01/08/2022',
            location: 'Nuwara Eliya, Sri Lanka',
            button1: [<><a  href='plannerViewEvent'><button style={{border:"none"}} className='accept'>View</button></a></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
    //   small
      data={data}
    />
  );
}

export default HPDatatablePage;