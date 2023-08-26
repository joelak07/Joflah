import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">Joflah</span>
        <div className="user">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" alt="" />
            <span>John</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar