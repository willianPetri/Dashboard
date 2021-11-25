import React from 'react'

const StatsCard = () => {
  const stats = [
    {
      title: "Total Revenue",
      percentage: "+32.40%",
      value: "$10,243.00",
      status: "up",
      icon: 'fas fa-dollar-sign',
    },
    {
      title: "Total Dish Ordered",
      percentage: "-12.40%",
      value: "23,456",
      status: "down",
      icon: 'fas fa-utensils',
    },
    {
      title: "Total Customer",
      percentage: "+2.40%",
      value: "1,234",
      status: "up",
      icon: 'fas fa-user-friends',
    },
  ];
  
  return (
    <div className='flex gap-6'>
      {stats.map(stat => (
        <div className="flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3">
          <div className="flex items-center gap-x-3">
            <div className="p-2 bg-gray-800 rounded-lg">
              <i className={stat.icon} />
            </div>
            <span className={`text-xs font-medium ${stat.status === 'up' ? 'text-accent-green' : 'text-accent-red'}`}>
              {stat.percentage}
            </span>
            <div className={`p-0.5 rounded-full ${stat.status === 'up' ? 'bg-green-900' : 'bg-red-900'}`}>
              {stat.status === 'up' 
                ? <i className='fas fa-arrow-up fill-current text-accent-green' /> 
                : <i className='fas fa-arrow-down fill-current text-accent-red' /> }                       
            </div>
          </div>
          <div className="text-3xl font-semibold text-white">{stat.value}</div>
          <div className="text-sm tracking-wide text-gray-500">{stat.title}</div>
        </div>
      ))}
    </div>
  )
}

export default StatsCard
