import React, {Component} from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description :'',
      amount: props.expense ? props.expense.amount.toString() :'',
      note: props.expense ? props.expense.note :'',
      createdAt: props.expense ? moment(props.expense.createdAt) :moment(),
      calendarFocused: false,
      errorDescription: '',
      errorAmount: ''
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description:description, errorDescription:''}));
  }
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({amount:amount, errorAmount:''}));
    }
  }
  onNoteChange = (e) => {
    //   const note = e.target.value;
    e.persist(); // alternative way
    this.setState(() => ({note: e.target.value}));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({createdAt}));
    }
  };
  onFocusChange = ({focused}) => {
    this.setState(() => ({calendarFocused: focused}));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description) {
      this.setState(() => ({errorDescription: 'Please provide description'}));
    }
    if (!this.state.amount) {
      this.setState(() => ({errorAmount: 'Please provide amount'}));
    } 
    if (this.state.description && this.state.amount) {
      this.props.onSubmit({
          description: this.state.description,
          amount: parseFloat(this.state.amount, 10),
          createdAt: this.state.createdAt.valueOf(),
          note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              value={this.state.description}
              onChange={this.onDescriptionChange}
              className={!this.state.errorDescription
              ? 'form-control'
              : 'form-control is-invalid'}
              id="description"
              placeholder="Description"/> {!this.state.errorDescription && <small className="form-text text-muted">Add a description. example: Water bill, Bought a shirt, etc...</small>}
            {this.state.errorDescription && <div className="invalid-feedback">{this.state.errorDescription}</div>}
          </div>
          <div className="row">
            <div className="form-group col">
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                className={!this.state.errorAmount
                ? 'form-control'
                : 'form-control is-invalid'}
                value={this.state.amount}
                onChange={this.onAmountChange}
                id="amount"
                placeholder="Amount"/> {this.state.errorAmount && <div className="invalid-feedback">{this.state.errorAmount}</div>}
            </div>
            <div className="form-group col">
              <label htmlFor="date">Date</label><br/>
              <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                isOutsideRange={() => false}
                numberOfMonths={1}
                block={true}
                small={true}
                readOnly={true}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="note">Note (optional)</label>
            <textarea
              className="form-control"
              value={this.state.note}
              onChange={this.onNoteChange}
              placeholder="Add a note for your expense (optional)"
              rows="3"></textarea>
          </div>
          <button 
            type="submit" 
            className='btn btn-primary btn-lg btn-block'
          >
            {this.props.expense?'Update Expense':'Add Expense'}
          </button>
        </form>
      </div>
    );
  }
}