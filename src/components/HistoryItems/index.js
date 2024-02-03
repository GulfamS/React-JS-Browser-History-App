import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const handleDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-container">
      <div className="list-items">
        <div className="item-container">
          <p className="time">{timeAccessed}</p>
          <div className="logo-container">
            <img src={logoUrl} alt="domain logo" className="app-logo" />
            <div className="name-container">
              <p className="title">{title}</p>
              <p className="domain">{domainUrl}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          className="button"
          type="button"
          onClick={handleDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
