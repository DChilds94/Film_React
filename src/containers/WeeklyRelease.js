import React, {Component} from 'react';
import Film from '../components/Film.js'

class WeeklyRelease extends Component{
  constructor(props) {
  super(props)
  this.state = {
    data: [
      {id: 1, film: "Sausage Party"},
      {id: 2, film: "Cafe Society"},
      {id: 3, film: "Morgan"},
      {id: 4, film: "The 9th Life of Louis Drax"},
      {id: 5, film: "Naam Hai Akira"},
      {id: 6, film: "Equity"},
      {id: 7, film: "Things to come"}
    ]
  }
}

  render() {
    return (
      <div>
    <h1>Weekly Releases</h1>
      <Film data={this.state.data}/>
      </div>
    )
  }
}

export default WeeklyRelease;
