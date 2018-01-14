import React, { Component } from 'react';
import fire from './fire';
import { Line } from 'react-chartjs-2';

var totalUsers = 10.0;
var counter = 1;

const data = {

  labels: [],
  datasets: [
    {
      label: 'View data',
      backgroundColor: "#222",
      borderColor: '#555',
        borderWidth: 2,
        pointBackgroundColor: [
        "#82A19A",
        "#B5CDBF ",
        "#E77171 ",
        "#F39998 ",
        "#EAADAC ",
        "#C8D4A4 ",
        "#F6ECB7",
        "#82A19A",
        "#B5CDBF ",
        "#E77171 ",
        "#F39998 ",
        "#EAADAC ",
        "#C8D4A4 ",
        "#F6ECB7" ],
        pointRadius: 10,
      hoverBackgroundColor: '',
      hoverBorderColor: '#fff',
      data: [],
      hover: {mode: null},
      borderWidth: 1,
    }
  ]

};

// Loop through users in order with the forEach() method. The callback
// provided to forEach() will be called synchronously with a DataSnapshot
var indexofmybar = -1;

var query = fire.database().ref("users");
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        
      var mysum = childSnapshot.val().sum;
        var username = childSnapshot.val().username;
        console.log(username + mysum);
        
        if (username == localStorage.getItem("username")) {
            data.labels.push(username);
        } else {
            data.labels.push(counter);
            counter++;
        }
        
        data.datasets[0].data.push(mysum);
  });
});

console.log("index of mine: " + indexofmybar);


class Compare extends Component {

    render() {
       
        return (
            <div className="Compare">
                <h1 className="overview-title">Compare</h1>
                <p className="App-intro">
                  Text.
                </p>

                <Line data={data} />
            </div>
        );

    }

}

export default Compare;