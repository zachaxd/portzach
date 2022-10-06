import React from 'react'
import GitHubCalendar from 'react-github-calendar';



function GitCalendar() {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };
  return (
    <div className='bg-black/40 rounded-lg px-8 py-3 text-white'>
        <a href="#" className=''>
        <GitHubCalendar username="zachaxd" 
        color="#2563eb"
        transformData={selectLastHalfYear}
        fontSize={11}
        theme={{
          level0: '#334155',
          level1: '#6366f1',
          level2: '#4f46e5',
          level3: '#4338ca',
          level4: '#3730a3'
        }}
        />
        
        </a>
    </div>
  )
}

export default GitCalendar