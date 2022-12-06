import { Text } from './Statistic.styled';

export const Statistics = ({
  state: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive feedback: {positivePercentage}%</Text>
    </>
  );
};
