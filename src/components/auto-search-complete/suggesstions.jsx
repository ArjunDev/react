import AutoSearchComplete from "./auto-search-complete";
import "./autocomplete.css"

export default function Suggesstions({filteredUsersData, handleSuggesstionClick}){

  return(
    <ul>
      {
        filteredUsersData && filteredUsersData.length ? 
        filteredUsersData.map((item, index) => 
        <li 
          className="suggesstions"
          onClick={handleSuggesstionClick} 
          key={index}> {item} </li>
          ) : null 
      }
    </ul>
  )
}