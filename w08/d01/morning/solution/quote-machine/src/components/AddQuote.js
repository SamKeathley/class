import React, { Component } from 'react';
import { database } from '../utils/firebase';

import './AddQuote.css';

// created: Math.floor(Date.now() / 1000)

class AddQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      author: ''
    }

    this.ref = database.ref('/quotes');
  }

  componentWillUnmount() {
    this.ref.off();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('quote: ', this.state.quote, 'author: ', this.state.author);
  }

  render() {
    return (
      <section className="col-md-4 col-sm-12 add-quote">
        <form onSubmit={ this.handleSubmit.bind(this) } className="form-add-quote">
          <div className="row">
            <textarea
              onChange={ e => { this.setState({ quote: e.target.value }) } }
              value={ this.state.quote }
              className="form-control"
              rows="3"
              placeholder="Life changing quote"></textarea>
          </div>
          <div className="row">
            <input
              onChange={ e => { this.setState({ author: e.target.value }) } }
              value={ this.state.author }
              className="form-control"
              type="text"
              placeholder="Author" />
          </div>
          <div className="row">
            <button className="btn btn-primary">Add Quote</button>
          </div>
        </form>
      </section>
    );
  }
}

export default AddQuote;
