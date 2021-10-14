// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, isActive, onClickTab} = props
  const {displayText, tabId} = tabsList

  const onClickTabHandler = () => {
    onClickTab(tabId)
  }
  const className = isActive ? 'active' : ''

  return (
    <li>
      <button className={className} onClick={onClickTabHandler} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
