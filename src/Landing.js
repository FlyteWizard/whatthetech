import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './fire';


for (var i = 0; i < 12; i++) {
    var str = "q" + i;
    console.log(str);
    fire.database().ref("questionsums/" + str + "/ignore").set("ignore");
}



class Landing extends Component {
    render() {
        localStorage.setItem("username", this.username);

        return (
        <div>
            <h1 className="App-title">Privilege Walk</h1>
            <p className="App-intro">
              This activity forces participants to confront the ways in which society privileges some individuals over others.
              Privilege is often invisible, yet it has the potential to shape every aspect our everyday lives.
              As our lives become increasingly intertwined with technology, there is a growing need to raise awareness about these issues in the tech community.
            </p>


            <Link to='/start' className="App-button">Start my walk</Link>
            
        </div>
        );
    }
}

export default Landing;
