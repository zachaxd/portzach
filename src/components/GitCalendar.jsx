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
    <div className='bg-black/40 rounded-lg px-6 py-4 text-white hover:bg-slate-900/20 hover:text-white/50 transition ease-in-out duration-150'>
        <a href="#" className=''>
        <GitHubCalendar username="zachaxd" 
        color="#2563eb"
        transformData={selectLastHalfYear}
        />
        
        </a>
    </div>
  )
}

export default GitCalendar