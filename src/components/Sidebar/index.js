import React, { useState } from 'react'

const menus = [
  { name: 'Dashboard', icon: 'fas fa-store'},
  { name: 'Discounts', icon: 'fas fa-home'},
  { name: 'Graph', icon: 'fas fa-chart-pie'},
  { name: 'Messages', icon: 'fas fa-comments'},
  { name: 'Notifications', icon: 'fas fa-bell'},
  { name: 'Settings', icon: 'fas fa-cog'},
  { name: 'Logout', icon: 'fas fa-sign-out-alt'},
]


const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('Graph');
  
  return (
    <div className='flex flex-col gap-y-4 items-center py-8 w-24 bg-gray-900'>
      <button className='p-2 bg-opacity-20 rounded-xl bg-primary'>
        <i className='fas fa-store' />
      </button>
      <div className='flex flex-col gap-y-4'>
        {menus.map(item => (         
          <div key={item.name} className={`${activeMenu === item.name ? 'bg-gray-800 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom' : ''}`}>
            <button className={`p-4 my-4 ml-3 rounded-xl text-primary ${activeMenu === item.name ? 'text-white shadow-primary bg-primary' : 'text-primary'}`} onClick={setActiveMenu(item.name)}>
              <i className={`w-6 h-6 fill-current ${item.icon}`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}



export default Sidebar
