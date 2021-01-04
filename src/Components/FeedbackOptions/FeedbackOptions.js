import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          className={s.btn}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
      {/* <button
        type="button"
        name="good"
        className={s.btn}
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        className={s.btn}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        className={s.btn}
        onClick={onLeaveFeedback}
      >
        Bad
      </button> */}
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
