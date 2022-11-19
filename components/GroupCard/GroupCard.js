import React from 'react'
import GroupCircle from '../GroupCircle/GroupCircle'

export default function GroupCard(props) {
  return (
    <div className='groupCard col-lg-5'>
      <div className='d-flex'>
        <div className='col-lg-6 d-flex justify-content-center'>
        <div className='groupInfo'>
            <p>{props.grade}</p>
            <p>{props.group}</p>
        </div>
        </div>
        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-around'>
          <div>
            Profesor
          </div>
          <div>
            Alumnos
          </div>
        </div>
      </div>
      <div className='groupCard__footer d-flex justify-content-end'>
        iconos
      </div>
    </div>
  )
}