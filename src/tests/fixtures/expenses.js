import moment from 'moment';

export default[
  {
    id: 1,
    description : 'Gas Bill',
    amount : 1200,
    note : '',
    createdAt : 0
  }, {
    id: 2,
    description : 'House Rent',
    amount : 15000,
    note : '',
    createdAt : moment(0).subtract(4, 'days').valueOf()
  }, {
    id: 3,
    description : 'Rent',
    amount : 800,
    note : '',
    createdAt : moment(0).add(4, 'days').valueOf()
  }
];