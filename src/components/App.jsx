import { Component } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './Button';
import { Statistics } from './Statistic';
import { Notification } from './Notification';
import { Layout } from './Layout';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  totalState = () => Object.values(this.state).reduce((a, b) => a + b, 0);

  positivePercentage = () => {
    const sum = this.totalState();
    return sum ? Math.round((100 / sum) * this.state.good) : 0;
  };

  render() {
    const state = this.state;
    return (
      <Layout>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onClick={this.onLeaveFeedback}
            options={Object.keys(state)}
          ></FeedbackOptions>
        </Section>
        <Section title={'Statistics'}>
          {this.totalState() > 0 ? (
            <Statistics
              state={state}
              total={this.totalState()}
              positivePercentage={this.positivePercentage()}
            ></Statistics>
          ) : (
            <Notification message={'There is no feedback'}></Notification>
          )}
        </Section>
      </Layout>
    );
  }
}
