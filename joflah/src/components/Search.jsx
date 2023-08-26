   import React from 'react'
   
   const Search = () => {
     return (
       <div className='search'>
        <div className="searchForm">
            <input type="text" placeholder='Find a User'/>
        </div>
        <div className="userChat">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" alt="" />
            <div className="userChatInfo">
                <span>Jane</span>
            </div>
        </div>
       </div>
     )
   }
   
   export default Search