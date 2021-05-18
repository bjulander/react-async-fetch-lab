// create your App component here
import React, { Component } from 'react'

export default class App extends React.Component{

    state = {
        peopleInSpace: []
    }

    render(){
        return (
      <div>
          hello
          </div>
        )
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(res =>res.json())
        .then(data => {
            this.setState({peopleInSpace: data.people})
        })
    }
}