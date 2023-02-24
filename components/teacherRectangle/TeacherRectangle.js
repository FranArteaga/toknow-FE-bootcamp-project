import React, {useState, useEffect} from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';
import { BsFillTrashFill } from 'react-icons/bs';

export default function TeacherRectangle( props ) {
// lo envíaba como ({teacher})
  // const { name, lastNameA, lastNameB, tipoProfesor, onEyeClick } = teacher
  // console.log("tipo de teacher", tipoProfesor)
  const [userRole, setUserRole] = useState("")
  useEffect(() =>{
    const token = localStorage.getItem("token");
    const userData = JSON.parse(atob(token.split(".")[1]));
    const userId = userData.id;
    setUserRole (userData.role)
  }, [])
  
  return (
    <div className='teacherInfo d-flex col-lg-12'>
      <div className='teacherInfo__wrapper d-flex col-lg-12'>
        <div className='d-flex col-lg-2 justify-content-center align-items-center'>
          <FaUserCircle className='teacherInfo__userCircle' />
        </div>
        <div className='col-lg-7'>
          <div>
            <span>{` ${props.name} ${props.lastNameA} ${props.lastNameB} `}</span>
          </div>
          <span>{props.tipoProfesor}</span>
        </div>
        <div className='teacherInfo__icons d-flex col-lg-3 align-items-center justify-content-around'>
          <button onClick={props.onEyeClick} className='btn btn-outline-primary'>
            <FaRegEye />
          </button>
          {(userRole == "admin") ?
          <button onClick={props.onTrashClick}className='btn btn-outline-danger'>
            <BsFillTrashFill />
          </button> : <p></p>
          }
        </div>
      </div>
    </div>
  )
}
