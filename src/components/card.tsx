import Luxury from "./luxury";
import Sedans from "./sedans";
import Suvs from "./suvs";

function Card() {
    return (
        <div className="w-[330px] rounded-lg overflow-hidden my-8 lg:flex lg:w-full">
            <Sedans />
            <Suvs />
            <Luxury />
        </div>
    );
}

export default Card;