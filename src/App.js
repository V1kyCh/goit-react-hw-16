import './App.css';

import { Statistics } from './components/Statistics';
import { Section } from './components/Section';
import { Notification } from './components/Notification';
import { FeedbackOptions } from './components/FeedbackOptions';

import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => ((good / total) * 100).toFixed(2) + '%'

  const addOpinion = (e) => {

    switch (e.target.id) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <Section title='Please leave feedback'>
        <FeedbackOptions addReview={addOpinion} />
      </Section>
      <Section title='Statistic'>
        {good === 0 && neutral === 0 && bad === 0 ?
          <Notification message="There is no feedback"></Notification> :
          <Statistics good={good} bad={bad} neutral={neutral} total={total} positivePercentage={countPositiveFeedbackPercentage} />
        }
      </Section>
    </div>
  );
}

export default App;