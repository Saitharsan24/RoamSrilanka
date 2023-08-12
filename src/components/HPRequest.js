import React from 'react';
import "./../styles/data-table.css";
import { MDBDataTable } from 'mdbreact';

const HPDatatablePage = () => {

  const data = {
    columns: [
      {
        label: 'Tourist Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Type',
        field: 'type',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Show Details',
        field: 'button1',
        width: 50,
        btn: 'accept-button',
      }
    ],
    rows: [
        {
            name: 'John Doe',
            type: 'Package',
            date: '2023-07-01',
            button1: [<><div className='show'>Show Details</div></>]
        },
          {
            name: 'Alice Smith',
            type: 'Custom Package',
            date: '2023-07-02',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Robert Johnson',
            type: 'Camera',
            date: '2023-07-03',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Emily Davis',
            type: 'Custom Package',
            date: '2023-07-04',
            button1: [<><div className='show'>Show Details</div></>]          },
          {
            name: 'Michael Lee',
            type: 'Tent',
            date: '2023-07-05',
            button1: [<><div className='show'>Show Details</div></>]          },
          {
            name: 'Sophia Wilson',
            type: 'Package',
            date: '2023-07-06',
            button1: [<><div className='show'>Show Details</div></>]          },
          {
            name: 'William Clark',
            type: 'Package',
            date: '2023-07-07',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Olivia Baker',
            type: 'Custom Package',
            date: '2023-07-08',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'James Wilson',
            type: 'Tent',
            date: '2023-07-09',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Emma Martinez',
            type: 'Package',
            date: '2023-07-10',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Alexander White',
            type: 'Tent',
            date: '2023-07-11',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Mia Anderson',
            type: 'Package',
            date: '2023-07-12',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Ethan Lopez',
            type: 'Tent',
            date: '2023-07-13',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Abigail Hill',
            type: 'Package',
            date: '2023-07-14',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Michael Scott',
            type: 'Tent',
            date: '2023-07-15',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Emily Young',
            type: 'Package',
            date: '2023-07-16',
            button1: [<><div className='show'>Show Details</div></>]
         },
          {
            name: 'William Turner',
            type: 'Tent',
            date: '2023-07-17',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Sofia Hernandez',
            type: 'Package',
            date: '2023-07-18',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'James Patterson',
            type: 'Tent',
            date: '2023-07-19',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Olivia Lee',
            type: 'Camera',
            date: '2023-07-20',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Daniel Scott',
            type: 'Package',
            date: '2023-07-21',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Ava Young',
            type: 'Tent',
            date: '2023-07-22',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Elijah King',
            type: 'Camera',
            date: '2023-07-23',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Mia Hernandez',
            type: 'Package',
            date: '2023-07-24',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Ethan Walker',
            type: 'Package',
            date: '2023-07-25',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Amelia Green',
            type: 'Custom Package',
            date: '2023-07-26',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Alexander Hall',
            type: 'Camera',
            date: '2023-07-27',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Sofia Hernandez',
            type: 'Camera',
            date: '2023-07-28',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'William Turner',
            type: 'Package',
            date: '2023-07-29',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Ava Young',
            type: 'Camera',
            date: '2023-07-30',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Daniel Scott',
            type: 'Custom Package',
            date: '2023-07-31',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Mia Hernandez',
            type: 'Package',
            date: '2023-08-01',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Oliver Green',
            type: 'Camera',
            date: '2023-08-02',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Emily Clark',
            type: 'Custom Package',
            date: '2023-08-03',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'James Patterson',
            type: 'Custom Package',
            date: '2023-08-04',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Lucas Baker',
            type: 'Package',
            date: '2023-08-05',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Emma Walker',
            type: 'Custom Package',
            date: '2023-08-06',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Alexander Wilson',
            type: 'Camera',
            date: '2023-08-07',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Olivia Lee',
            type: 'Package',
            date: '2023-08-08',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Noah Wright',
            type: 'Camera',
            date: '2023-08-09',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Daniel Johnson',
            type: '+1 (789) 012-5678',
            date: '2023-08-10',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Sofia Hernandez',
            type: 'Package',
            date: '2023-08-11',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Ethan Walker',
            type: 'Custom Package',
            date: '2023-08-12',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Ava Young',
            type: 'Camera',
            date: '2023-08-13',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'William Turner',
            type: 'Package',
            date: '2023-08-14',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Emily Davis',
            type: 'Custom Package',
            date: '2023-08-15',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Alexander Hall',
            type: 'Custom Package',
            date: '2023-08-16',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Lucas Baker',
            type: 'Package',
            date: '2023-08-17',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Emma Walker',
            type: 'Camera',
            date: '2023-08-18',
            button1: [<><div className='show'>Show Details</div></>]
          },
          {
            name: 'Charlotte Evans',
            type: 'Camera',
            date: '2023-08-19',
            button1: [<><div className='show'>Show Details</div></>]
          }
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