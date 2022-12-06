import { Btn, Wrapper } from './Button.styled';
export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <Btn
          key={option}
          onClick={() => {
            onClick(option);
          }}
        >
          {option}
        </Btn>
      ))}
    </Wrapper>
  );
};
