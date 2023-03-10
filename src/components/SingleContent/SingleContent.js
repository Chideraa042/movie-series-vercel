import React from 'react'
import { Badge } from '@material-ui/core'
import './SingleContent.css';
import { img_300, unavailable } from '../../configure/configure'
import { ContentModal } from '../contentModal/ContentModal';

export const SingleContent = ({id, poster, title, date, media_type, vote_average}) => {
  return (
    <ContentModal className='modal' media_type={media_type} id={id}>
      <Badge badgeContent={vote_average} color={vote_average>6?'primary' : 'secondary'}/>
      <img className='poster' src={poster? `${img_300}/${poster}` : unavailable} alt={title}/>
      <b className='title'>{title}</b>
      <span className='subTitle'> 
        {media_type === 'tv'? 'Tv Series' : 'Movie'}
        <span className='subTitle'>{date}</span>
      </span>
      
    </ContentModal>

  )
}
