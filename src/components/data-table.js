import React from 'react';
import "./../styles/data-table.css";
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {

  const data = {
    columns: [
      {
        label: 'Tourist Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Phone Number',
        field: 'number',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Accept',
        field: 'button1',
        width: 50,
        btn: 'accept-button',
      },
      {
        label: 'Reject',
        field: 'button2',
        width: 50,
        btn: 'reject-button',
      }
    ],
    rows: [
        {
            name: 'John Doe',
            number: '+1 (123) 456-7890',
            email: 'john.doe@example.com',
            date: '2023-07-01',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]
        },
          {
            name: 'Alice Smith',
            number: '+44 7890 123456',
            email: 'alice.smith@example.com',
            date: '2023-07-02',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]
          },
          {
            name: 'Robert Johnson',
            number: '+1 (234) 567-8901',
            email: 'robert.johnson@example.com',
            date: '2023-07-03',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]
          },
          {
            name: 'Emily Davis',
            number: '+44 7123 456789',
            email: 'emily.davis@example.com',
            date: '2023-07-04',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Michael Lee',
            number: '+1 (345) 678-9012',
            email: 'michael.lee@example.com',
            date: '2023-07-05',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Sophia Wilson',
            number: '+44 7709 876543',
            email: 'sophia.wilson@example.com',
            date: '2023-07-06',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'William Clark',
            number: '+1 (456) 789-0123',
            email: 'william.clark@example.com',
            date: '2023-07-07',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]
          },
          {
            name: 'Olivia Baker',
            number: '+44 7890 987654',
            email: 'olivia.baker@example.com',
            date: '2023-07-08',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'James Wilson',
            number: '+1 (567) 890-1234',
            email: 'james.wilson@example.com',
            date: '2023-07-09',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Emma Martinez',
            number: '+44 7123 456789',
            email: 'emma.martinez@example.com',
            date: '2023-07-10',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Alexander White',
            number: '+1 (678) 901-2345',
            email: 'alexander.white@example.com',
            date: '2023-07-11',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Mia Anderson',
            number: '+44 7709 876543',
            email: 'mia.anderson@example.com',
            date: '2023-07-12',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Ethan Lopez',
            number: '+1 (789) 012-3456',
            email: 'ethan.lopez@example.com',
            date: '2023-07-13',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Abigail Hill',
            number: '+44 7890 987654',
            email: 'abigail.hill@example.com',
            date: '2023-07-14',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Michael Scott',
            number: '+1 (890) 123-4567',
            email: 'michael.scott@example.com',
            date: '2023-07-15',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Emily Young',
            number: '+44 7123 456789',
            email: 'emily.young@example.com',
            date: '2023-07-16',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]         },
          {
            name: 'William Turner',
            number: '+1 (234) 567-8901',
            email: 'william.turner@example.com',
            date: '2023-07-17',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Sofia Hernandez',
            number: '+44 7890 123450',
            email: 'sofia.hernandez@example.com',
            date: '2023-07-18',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'James Patterson',
            number: '+1 (345) 678-9012',
            email: 'james.patterson@example.com',
            date: '2023-07-19',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Olivia Lee',
            number: '+44 7123 456780',
            email: 'olivia.lee@example.com',
            date: '2023-07-20',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Daniel Scott',
            number: '+1 (456) 789-0123',
            email: 'daniel.scott@example.com',
            date: '2023-07-21',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Ava Young',
            number: '+44 7709 876540',
            email: 'ava.young@example.com',
            date: '2023-07-22',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Elijah King',
            number: '+1 (567) 890-1234',
            email: 'elijah.king@example.com',
            date: '2023-07-23',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Mia Hernandez',
            number: '+44 7890 987650',
            email: 'mia.hernandez@example.com',
            date: '2023-07-24',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Ethan Walker',
            number: '+1 (678) 901-2345',
            email: 'ethan.walker@example.com',
            date: '2023-07-25',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Amelia Green',
            number: '+44 7123 456781',
            email: 'amelia.green@example.com',
            date: '2023-07-26',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Alexander Hall',
            number: '+1 (789) 012-3456',
            email: 'alexander.hall@example.com',
            date: '2023-07-27',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Sofia Hernandez',
            number: '+44 7890 123450',
            email: 'sofia.hernandez@example.com',
            date: '2023-07-28',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'William Turner',
            number: '+1 (234) 567-8901',
            email: 'william.turner@example.com',
            date: '2023-07-29',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Ava Young',
            number: '+44 7709 876540',
            email: 'ava.young@example.com',
            date: '2023-07-30',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Daniel Scott',
            number: '+1 (456) 789-0123',
            email: 'daniel.scott@example.com',
            date: '2023-07-31',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Mia Hernandez',
            number: '+44 7890 987650',
            email: 'mia.hernandez@example.com',
            date: '2023-08-01',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Oliver Green',
            number: '+1 (567) 890-2345',
            email: 'oliver.green@example.com',
            date: '2023-08-02',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Emily Clark',
            number: '+44 7123 456782',
            email: 'emily.clark@example.com',
            date: '2023-08-03',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'James Patterson',
            number: '+1 (345) 678-9012',
            email: 'james.patterson@example.com',
            date: '2023-08-04',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Lucas Baker',
            number: '+44 7890 123451',
            email: 'lucas.baker@example.com',
            date: '2023-08-05',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Emma Walker',
            number: '+1 (678) 901-3456',
            email: 'emma.walker@example.com',
            date: '2023-08-06',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Alexander Wilson',
            number: '+44 7123 456783',
            email: 'alexander.wilson@example.com',
            date: '2023-08-07',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Olivia Lee',
            number: '+1 (567) 890-4567',
            email: 'olivia.lee@example.com',
            date: '2023-08-08',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Noah Wright',
            number: '+44 7709 876541',
            email: 'noah.wright@example.com',
            date: '2023-08-09',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Daniel Johnson',
            number: '+1 (789) 012-5678',
            email: 'daniel.johnson@example.com',
            date: '2023-08-10',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Sofia Hernandez',
            number: '+44 7890 123450',
            email: 'sofia.hernandez@example.com',
            date: '2023-08-11',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Ethan Walker',
            number: '+1 (234) 567-7890',
            email: 'ethan.walker@example.com',
            date: '2023-08-12',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Ava Young',
            number: '+44 7709 876542',
            email: 'ava.young@example.com',
            date: '2023-08-13',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'William Turner',
            number: '+1 (678) 901-2345',
            email: 'william.turner@example.com',
            date: '2023-08-14',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Emily Davis',
            number: '+44 7123 456784',
            email: 'emily.davis@example.com',
            date: '2023-08-15',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Alexander Hall',
            number: '+1 (789) 012-3456',
            email: 'alexander.hall@example.com',
            date: '2023-08-16',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Lucas Baker',
            number: '+44 7890 123451',
            email: 'lucas.baker@example.com',
            date: '2023-08-17',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Emma Walker',
            number: '+1 (567) 890-2345',
            email: 'emma.walker@example.com',
            date: '2023-08-18',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Charlotte Evans',
            number: '+44 7123 456785',
            email: 'charlotte.evans@example.com',
            date: '2023-08-19',
            button1: [<><div className='accept'>Accept</div></>],
            button2: [<><div className='reject'>Reject</div></>]          },
          {
            name: 'Oliver Green',
            number: '+1 (678) 901-3456',
            email: 'oliver.green@example.com',
            date: '2023-08-20',
            button1: 'Accept',
            button2: 'Reject'          }
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

export default DatatablePage;