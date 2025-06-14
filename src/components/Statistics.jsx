
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

  return <ul className='list'>
    <li className='item' key={1}>Good: {good}</li>
    <li className='item' key={2}>Neutral: {neutral}</li>
    <li className='item' key={3}>Bad: {bad}</li>
    <li className='item' key={4}>Total: {total}</li>
    <li className='item' key={5}>Positive Feedback: {positivePercentage()}</li>
  </ul>

}