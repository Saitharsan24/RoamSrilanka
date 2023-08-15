import React from 'react';
import "./../styles/data-table.css";
import { MDBDataTable } from 'mdbreact';
import { useNavigate } from "react-router-dom";

const HPDatatablePage = () => {

    const navigate = useNavigate();
  const data = {
    columns: [
      {
        label: 'Package No',
        field: 'number',
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
        label: 'Amount',
        field: 'amount',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Days',
        field: 'day',
        sort: 'asc',
        width: 150
      },
      {
        label: 'View',
        field: 'button1',
        width: 50,
        btn: 'hp-accept-button',
      },
      {
        label: 'Remove',
        field: 'button2',
        width: 50,
        btn: 'hp-reject-button',
      }
    ],
    rows: [
        {
            number: '01',
            type: 'Day Based',
            amount: '800',
            day: '2',
            button1: [<><div className='hp-accept' onClick={() => navigate("/hpviewpackage")}>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '02',
            type: 'Day Based',
            amount: '1500',
            day: '1',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '03',
            type: 'Day Based',
            amount: '1200',
            day: '4',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '04',
            type: 'Day Based',
            amount: '900',
            day: '2',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '05',
            type: 'Day Based',
            amount: '1100',
            day: '2',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '06',
            type: 'Day Based',
            amount: '750',
            day: '1',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '07',
            type: 'Day Based',
            amount: '1600',
            day: '3',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '08',
            type: 'Day Based',
            amount: '1350',
            day: '4',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '09',
            type: 'Day Based',
            amount: '950',
            day: '1',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '10',
            type: 'Day Based',
            amount: '850',
            day: '1',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '11',
            type: 'Day Based',
            amount: '1700',
            day: '4',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '12',
            type: 'Day Based',
            amount: '1250',
            day: '4',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '13',
            type: 'Day Based',
            amount: '1050',
            day: '2',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '14',
            type: 'Day Based',
            amount: '750',
            day: '2',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '15',
            type: 'Day Based',
            amount: '1100',
            day: '4',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '16',
            type: 'Day Based',
            amount: '900',
            day: '3',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '17',
            type: 'Day Based',
            amount: '1800',
            day: '1',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '18',
            type: 'Day Based',
            amount: '1400',
            day: '3',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '19',
            type: 'Day Based',
            amount: '1200',
            day: '3',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '20',
            type: 'Day Based',
            amount: '800',
            day: '3',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '21',
            type: 'Day Based',
            amount: '900',
            day: '1',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '22',
            type: 'Day Based',
            amount: '1200',
            day: '2',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '23',
            type: 'Day Based',
            amount: '1400',
            day: '4',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '24',
            type: 'Day Based',
            amount: '750',
            day: '2',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '25',
            type: 'Day Based',
            amount: '850',
            day: '5',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '26',
            type: 'Day Based',
            amount: '1500',
            day: '5',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '27',
            type: 'Day Based',
            amount: '1450',
            day: '4',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '28',
            type: 'Day Based',
            amount: '700',
            day: '2',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '29',
            type: 'Day Based',
            amount: '950',
            day: '2',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '30',
            type: 'Day Based',
            amount: '1200',
            day: '1',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '31',
            type: 'Day Based',
            amount: '1200',
            day: '4',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '32',
            type: 'Day Based',
            amount: '1500',
            day: '4',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '33',
            type: 'Day Based',
            amount: '1300',
            day: '2',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '34',
            type: 'Day Based',
            amount: '850',
            day: '2',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '35',
            type: 'Day Based',
            amount: '1600',
            day: '4',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '36',
            type: 'Day Based',
            amount: '950',
            day: '5',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '37',
            type: 'Day Based',
            amount: '850',
            day: '3',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '38',
            type: 'Day Based',
            amount: '1100',
            day: '4',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '39',
            type: 'Day Based',
            amount: '1500',
            day: '2',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '40',
            type: 'Day Based',
            amount: '800',
            day: '1',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '41',
            type: 'Day Based',
            amount: '900',
            day: '4',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '42',
            type: 'Day Based',
            amount: '750',
            day: '2',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '43',
            type: 'Day Based',
            amount: '1400',
            day: '5',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '44',
            type: 'Day Based',
            amount: '1000',
            day: '2',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '45',
            type: 'Day Based',
            amount: '1100',
            day: '4',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '46',
            type: 'Day Based',
            amount: '1200',
            day: '3',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '47',
            type: 'Day Based',
            amount: '1400',
            day: '3',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '48',
            type: 'Day Based',
            amount: '1500',
            day: '2',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '49',
            type: 'Day Based',
            amount: '1000',
            day: '4',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
        },
        {
            number: '50',
            type: 'Day Based',
            amount: '950',
            day: '4',
            button1: [<><div className='hp-accept'>View</div></>],
            button2: [<><div className='hp-reject'>Remove</div></>]
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