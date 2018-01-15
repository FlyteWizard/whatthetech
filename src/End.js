import React, { Component } from 'react';
import fire from './fire';
import { Link } from 'react-router-dom';
import { HorizontalBar } from 'react-chartjs-2';
import { Transition } from 'react-transition-group';


var totalUsers = 10.0;
var baseRef = fire.database();


const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  //padding: 20,
  //display: 'inline-block',
  //backgroundColor: '#8787d8'
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const questionList = [
    'Do you have a personal computer and/or phone?',
    'Were you ever discouraged from academics or jobs because of race, class, ethnicity, gender, or sexual orientation?',
    'Were you ever offered a good job because of your association with a friend or family member?',
    'Did/Do your parent(s) pay for your post-secondary education?',
    'Were you ever ashamed or embarrassed of your clothes, computer, mobile phone, etc.?',
    'Have you ever tried to change your appearance, mannerisms, or behavior to avoid being judged or ridiculed, or to gain more credibility?',
    'Have you ever felt or were told that you should work twice as hard as others to succeed in school or career because of your background?',
    'Do you have a disability?',
    'Did your parent(s) attend college?',
    'Do you have internet access at home?',
    'Are you a cis-gendered male?',
    "Have you been mistaken for a non-developer?"
];

console.log(questionList[0]);

const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  title: {
    text: 'Horizontal Bar Chart'
  },
  datasets: [
    {
      label: [
        'Do you have a personal computer and/or phone?',
        'Were you ever discouraged from academics or jobs because of race, class, ethnicity, gender, or sexual orientation?',
        'Were you ever offered a good job because of your association with a friend or family member?',
        'Did/Do your parent(s) pay for your post-secondary education?',
        'Were you ever ashamed or embarrassed of your clothes, computer, mobile phone, etc.?',
        'Have you ever tried to change your appearance, mannerisms, or behavior to avoid being judged or ridiculed, or to gain more credibility?',
        'Have you ever felt or were told that you should work twice as hard as others to succeed in school or career because of your background?',
        'Do you have a disability?',
        'Did your parent(s) attend college?',
        'Do you have internet access at home?',
        'Are you a cis-gendered male?',
        "Have you been mistaken for a non-developer?"
      ],
      backgroundColor: [
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
      borderColor: 'none',
      hoverBackgroundColor: '#fff',
      hoverBorderColor: 'none',
      data: [],
      borderWidth: 1,
    }
  ]

};


for (var i = 0; i < 12; i++) {
    var currRef = baseRef.ref("questionsums/q" + i);
    currRef.on("value", function(snapshot) {
        var x = snapshot.numChildren() - 1;
        console.log(x);
        data.datasets[0].data.push(x / totalUsers);
    });
}


class End extends Component {

    render() {
        return (
            <Transition appear={true} in={true} timeout={duration}>
                {(state) => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }} className="Overview">
                    
                    <div className="overview-text">
                        <div className="overview-inline">
                            <h1 className="overview-title">Overview</h1>
                            <p className="App-intro">
                              This activity forces participants to confront the ways in which society privileges some individuals over others.
                            </p>
                        </div>
                        
                        <div className="overview-inline">
                            <Link to='/compare' className="App-button compare-button">Compare</Link>
                        </div>
                    
                    </div>
                    
                    <HorizontalBar data={data} />
                </div>)}
            </Transition>
        );
    }

}

export default End;
