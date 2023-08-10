import React from 'react';
import "./../styles/data-table.css";
import { MDBDataTable } from 'mdbreact';

const HPDatatablePage = () => {

  const data = {
    columns: [
      {
        label: 'Item No',
        field: 'number',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Rent',
        field: 'rent',
        sort: 'asc',
        width: 50
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
            name: 'Bicycles',
            rent: '800',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '02',
            name: 'Binoculars ',
            rent: '1500',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '03',
            name: 'Fishing Gear',
            rent: '1200',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '04',
            name: 'Snorkeling Gear',
            rent: '900',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '05',
            name: 'Bicycles',
            rent: 'Surfboards',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '06',
            name: 'Hiking Gear ',
            rent: '750',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '07',
            name: 'Tents',
            rent: '1600',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '08',
            name: 'Sleeping Bags',
            rent: '1350',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '09',
            name: 'Cooking Gear',
            rent: '950',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '10',
            name: 'Boots ',
            rent: '850',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '11',
            name: 'Backpacks',
            rent: '1700',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '12',
            name: 'Trekking Poles',
            rent: '1250',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '13',
            name: 'Tripods',
            rent: '1050',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '14',
            name: 'Cameras',
            rent: '750',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '15',
            name: 'Camping Lanterns',
            rent: '1100',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '16',
            name: 'Skates',
            rent: '900',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '17',
            name: 'Water Skis',
            rent: '1800',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '18',
            name: 'Hot Air Balloon Rides',
            rent: '1400',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '19',
            name: 'Beach Umbrellas',
            rent: '1200',
            button1: [<><div className='accept'>View</div></>],
            button2: [<><div className='reject'>Remove</div></>]
        },
        {
            number: '20',
            name: 'Rafts ',
            rent: '800',
            button1: [<><div className='accept'>View</div></>],
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