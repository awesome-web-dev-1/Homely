import { MdBathtub, MdBed, MdStraighten } from "react-icons/md";

const PopularCard = ({ imgURL, price, name, location, bed, bath, area }) => {
  return (
    <li className="card-item">
      <div>
        <img src={imgURL} alt={name} className="w-full h-48 object-cover" />
      </div>
      <div className="p-5">
        <b className="text-xl text-gray-900">{price}</b>
        <a href="#" className="block font-semibold text-2xl my-2 text-gray-700 hover:text-sky-600 transition">
          {name}
        </a>
        <p className="text-gray-500">{location}</p>

        {/* Icons Section */}
        <div className="flex flex-wrap mt-4 gap-4 items-center text-gray-700">
          <span className="flex items-center gap-2">
            <MdBed className="text-xl" />
            <p>{bed}</p>
          </span>
          <span className="flex items-center gap-2">
            <MdBathtub className="text-xl" />
            <p>{bath}</p>
          </span>
          <span className="flex items-center gap-2">
            <MdStraighten className="text-xl" />
            <p>{area}</p>
          </span>
        </div>
      </div>
    </li>
  );
};

export default PopularCard;
