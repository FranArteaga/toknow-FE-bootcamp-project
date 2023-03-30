import React, { useEffect, useState } from 'react'
import { BsPencilSquare } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { FaUserCircle } from 'react-icons/fa';

export default function GroupCard(props) {
  const [userRole, setUserRole] = useState("")
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = JSON.parse(atob(token.split(".")[1]));
    setUserRole(userData.role)

  }, [])


  return (

    <div className='groupCard mt-4 mb-3 col-lg-12'>
      <div className='d-flex m-4 justify-content-around'>

        <div className='col-lg-6 d-flex justify-content-center'>
          {/* CAMBIAR NOMBRE DE CLASE Y agregar estilo para crecer en card sin afectar ventana registergrupos*/}
          <div className='groupInfo groupCard__circle'>
            <p>{props.grade}</p>
            <p>{props.group}</p>
          </div>
        </div>

        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-around'>

          <div className='d-flex col-lg-9 justify-content-between align-items-center'>
            <div className='d-flex'>
              <div className='groupCard__counter d-flex justify-content-end' >
                <p className='groupCard__counter__number d-flex justify-content-center align-items-center'>
                  25
                </p>
              </div>
              <FaUserCircle className='groupCard__user groupCard__user__teacher' />
            </div>
            <div>
              Profesores
            </div>
          </div>
          <div className='d-flex col-lg-9 justify-content-between align-items-center'>
            <div className='d-flex'>
              <div className='groupCard__counter d-flex justify-content-end' >
                <p className='groupCard__counter__number d-flex justify-content-center align-items-center'>
                  25
                </p>
              </div>
              <FaUserCircle className='groupCard__user groupCard__user__student' />
            </div>
            <div>
              Alumnos
            </div>
          </div>
        </div>

      </div>
      <div className='groupCard__footer d-flex justify-content-center'>
        <div className='groupCard__footer__icons d-flex col-11 col-lg-11 p-3 justify-content-between'>

          {(userRole == "admin") ?
            <button onClick={props.onTrashClick} className='btn btn-outline-danger'>
              <BsFillTrashFill />
            </button> : <p></p>
          }

          <button onClick={props.onEyeClick} className='btn btn-outline-primary'>
            <BsPencilSquare />
          </button>

        </div>
      </div>
    </div>
  )
}
