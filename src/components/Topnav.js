import React from 'react'
import { GoSearch } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

export const Topnav = () => {
  const navigate = useNavigate();

  const navigateToSearch = () => {
    navigate('/search')
  }
  return (
    <div> 
      
      <GoSearch onClick={navigateToSearch}/>
    </div>
  )
}
