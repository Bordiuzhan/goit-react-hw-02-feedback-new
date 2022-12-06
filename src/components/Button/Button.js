export const FeedbackOptions = ({ options, onClick }) => {
  return options.map(option => (
    <button
      key={option}
      onClick={() => {
        onClick(option);
      }}
    >
      {option}
    </button>
  ));
};
