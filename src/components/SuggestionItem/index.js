// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, finalSearchInput} = props
  const {suggestion} = suggestionDetails

  const updateSearchResult = () => {
    finalSearchInput(suggestion)
  }

  return (
    <li className="list-container">
      <p className="suggestion-style">{suggestion}</p>
      <button type="button" className="button" onClick={updateSearchResult}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-style"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
