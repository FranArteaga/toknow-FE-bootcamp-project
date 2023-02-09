import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';
import { BsFillTrashFill } from 'react-icons/bs';

export default function TeacherRectangle({ teacher }) {

  const { name, lastNameA, lastNameB, tipoProfesor } = teacher
  console.log("tipo de teacher", tipoProfesor)
  return (
    <div className='teacherInfo'>
      <div className='teacherInfo__wrapper d-flex col-lg-12'>
        <div className='d-flex col-lg-2 justify-content-center align-items-center'>
          <FaUserCircle className='teacherInfo__userCircle'/>
        </div>
        <div className='col-lg-7'>
          <div>
            <span>{` ${name} ${lastNameA} ${lastNameB} `}</span>
          </div>
          <span>{tipoProfesor}</span>
        </div>
        <div className='teacherInfo__icons d-flex col-lg-3 align-items-center justify-content-around'>
        <button  className='btn btn-outline-primary'>
            <FaRegEye />
          </button>
          <button  className='btn btn-outline-danger'>
            <BsFillTrashFill />
          </button>
        </div>
      </div>
    </div>
  )
}
