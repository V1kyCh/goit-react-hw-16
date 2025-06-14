export const FeedbackOptions = ({addReview}) => {
    return <ul className='buttons-list'>
        <li key={1} className='button-item'>
            <button id="good" onClick={addReview}>good</button>
        </li>
        <li key={2} className='button-item'>
            <button id="neutral" onClick={addReview}>neutral</button>
        </li>
        <li key={3} className='button-item'>
            <button id="bad" onClick={addReview}>bad</button>
        </li>
    </ul>
}
