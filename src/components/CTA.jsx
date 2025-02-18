import React from 'react'
import { IoPlay } from 'react-icons/io5'

const CTA = () => {
  return (
    <section className='py-20'>
        <div className="container bg-neutral-300 min-h-[274px] rounded-lg grid place-content-center">
            <button className=" bg-neutral-50 w-[60px] h-[60px] rounded-full grid place-content-center cta-btn">
                <IoPlay size={30}/>
            </button>
        </div>
    </section>
  )
}

export default CTA