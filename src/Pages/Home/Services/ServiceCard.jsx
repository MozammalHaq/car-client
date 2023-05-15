import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;
    console.log(service)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions text-orange-500 text-2xl font-bold flex justify-between items-center">
                    <h3>Price: {price}</h3>
                    <Link
                        to={`/checkout/${_id}`}
                        className="btn btn-primary"
                    > Book Now </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;