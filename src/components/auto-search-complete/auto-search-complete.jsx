import React, {useState,useEffect} from "react";
import Suggesstions from "./suggesstions";
import "./autocomplete.css"

export default function AutoSearchComplete(){

  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(true);
  const [filteredUsers,setFilteredUsers] = useState([]);

  function handleSearchParam(event){
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if(query.length > 0){
      const filterUserData = users && users.length ? 
        users.filter((item) => item.toLowerCase().includes(query)) : [];
      setFilteredUsers(filterUserData);
      setShowDropdown(true);
    }else {
      setShowDropdown(false);
    }
  }

  async function fetchUser(){
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if(data && data.users && data.users.length){
        setUsers(data.users.map(item => item.firstName));
        setErrorMsg(null);
      } 
    } catch(error) {
      console.log(error);
      setErrorMsg(error);
      
    } 
  }

  function handleSuggesstionClick(event){
    console.log(event.target.innerText)
    setSearchParam(event.target.innerText);
    setShowDropdown(false);
    setFilteredUsers([]);
  }

  useEffect(() => {
    fetchUser();
  },[])

 //console.log(users, filteredUsers);
  return(
    <div>
      <input 
      onChange={handleSearchParam}
      value={searchParam}
      name="user-name"
      placeholder="Search user name"
      type="text" />
      {showDropdown && <Suggesstions 
                        handleSuggesstionClick={handleSuggesstionClick} 
                        filteredUsersData={filteredUsers} />
      }
    </div>
  )
}