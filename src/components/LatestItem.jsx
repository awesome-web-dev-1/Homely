
const LatestItem = ({icon,title,text}) => {
  return (
    <li className="flex gap-4 mt-2">
        <div>
            <img src={icon} alt={title} width={64} height={64}/>
        </div>

        <div>
            <h4 className="text-2xl text-sky-500">{title}</h4>
            <p>{text}</p>
        </div>
    </li>
  )
}

export default LatestItem