import React from 'react'
import { historicHomeItems } from '../constant/data'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

const HistoricHomeSpecialists = () => {
  return (
    <section className="section">
      <div className="container grid gap-[50px] md:grid-cols-2">
        <div>
          <h2>We are specialists in renovating and preserving historic homes.</h2>
          <p className='max-w-[431] pt-3'>Lorem ipsum dolor sit amet consectetur. Faucibus tristique auctor mauris velit varius. Eu duis viverra.</p>
          <div className="mt-5 grid sm:grid-cols-2">
            {historicHomeItems.map((item)=>(
              <div className="flex gap-2">
                <span className='text-sky-700'>
                  <IoCheckmarkCircleOutline />
                </span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl overflow-hidden">
          <img src="./images/banner2.png" alt="" width={523} height={387} className='img-cover'/>
        </div>
      </div>
    </section>
  )
}

export default HistoricHomeSpecialists