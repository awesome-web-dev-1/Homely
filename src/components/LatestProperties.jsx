import { latestProps } from '../constant/data'
import LatestItem from './LatestItem'

const LatestProperties = () => {
  return (
    <section className="section">
        <div className="container grid md:grid-cols-2 md:items-center gap-[50px]">
            <div className="md:order-2">
                <h2>We offer the latest properties to our valued clients.</h2>
                <ul className="mt-5">
                    {latestProps.map((item)=>(
                        <LatestItem icon={item.icon} title={item.title} text={item.text} />
                    ))}
                </ul>
            </div>
            <div className="rounded-xl overflow-hidden">
                <img src="./images/banner1.png" alt="" className='img-cover'/>
            </div>
        </div>
    </section>
  )
}

export default LatestProperties