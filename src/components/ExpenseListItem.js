import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt, note}) => (
  <div className="col-sm-6 mb-4">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
        <Link to={`/edit/${id}`}>{description}</Link>
        </h4>
        <h6 className="card-text">{amount}tk. - {moment(createdAt).format('DD MMMM, YYYY')}</h6>
        {note && <p>{note}</p>}
      </div>
    </div>
  </div>
);

export default ExpenseListItem;