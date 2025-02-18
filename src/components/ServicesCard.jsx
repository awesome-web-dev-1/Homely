import React from 'react'

const ServicesCard = ({icon,title,text}) => {
  return (
    <li className='services-card-item'>
        <div className="bg-sky-200/30 max-w-max p-5 rounded-full">
            <img src={icon} alt={title} width={70} height={70} />
        </div>
        <h4 className='text-[22px] font-bold my-3'>{title}</h4>
        <p>{text}</p>
    </li>
  )
}

export default ServicesCard