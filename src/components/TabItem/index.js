import './index.css'

const TabItem = props => {
  const {tabDetails, changeActiveTab, isActive} = props
  const {displayText, tabId} = tabDetails
  const tabChange = () => {
    changeActiveTab(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={tabChange}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
