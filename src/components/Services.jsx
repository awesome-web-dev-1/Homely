import React from 'react'
import { ServicesCardItem } from '../constant/data'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <section className='services'>
        <div className="container">
            <p className="text-center text-sm text-sky-600">Services</p>
            <h2 className='text-center mb-[64px]'>Services we offer</h2>

            <ul className="grid gap-[25px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {ServicesCardItem.map((item)=>(
                    <ServicesCard icon={item.icon} title={item.title} text={item.text} />
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Services