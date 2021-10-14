// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList, isActiveList} = props
  const {appName, imageUrl} = appsList

  return (
    <>
      {isActiveList ? (
        <li>
          <div>
            <img src={imageUrl} className="siz" alt={appName} />
            <p>{appName}</p>
          </div>
        </li>
      ) : null}
    </>
  )
}

export default AppItem
