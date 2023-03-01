import React, { useEffect } from 'react'
import './Header.css';
import logo from '../Header/mx-player.png'
import { motion } from 'framer-motion'
import HomeIcon from '@mui/icons-material/Home';
// import BackupIcon from '@mui/icons-material/Backup';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {useNavigate} from 'react-router-dom'

const headerVariant ={
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {delay: 1.3, duration: 1.5}
  }
}

const logoVariant ={
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}

const imageVariant ={
  hidden: {
    opacity: 0,
    x: '-100vh'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring', delay: 0.2, stiffness: 40
    }
  },
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(178, 202, 211)',
    boxShadow: '0px 0px 8px rgb(178, 202, 211)',
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}

const backUpVariant ={
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {delay: 1.5, duration: 1.5}
  }
}



export const Header = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };
    
  return (
    <>
    <span className='header'>
      <div className="log">
        {/* Auto navigate to the home */}
          <motion.div 
            variants={backUpVariant}
            initial='hidden'
            animate='visible'>
              <HomeIcon onClick={navigateHome} className='home'/>
          </motion.div>
          
          <div className="sub-header">
              <motion.img className='mxlogo'  src={logo} alt='logo' 
              variants={imageVariant}
              initial='hidden'
              animate='visible'
              whileHover='hover'
              />
              <motion.b
                variants={headerVariant}
                initial='hidden'
                animate='visible'
                className='fx-header'
              >Fx Player</motion.b>
          </div>
          
          {/* Scroll back up to the top */}
          <motion.div
            variants={backUpVariant}
            initial='hidden'
            animate='visible'
          >
            <ArrowDropUpIcon onClick={() => window.scroll(0, 0)} className='back' />
          </motion.div> 
      </div>
      
    </span>
    
    </>
  )
}

