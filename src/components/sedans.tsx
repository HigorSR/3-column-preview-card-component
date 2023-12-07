import IconSedans from "@/imgs/icon-sedans";

function Sedans() {
    return (
        <div className="bg-Bright-orange text-white p-12">
            <IconSedans />
            <h1 className="text-4xl uppercase my-8 font-bold font-big-shoulders-display">Sedans</h1>
            <p className="mb-6 text-sm text-Transparent-white(paragraphs) leading-relaxed pr-3 lg:w-52">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
            <button className="text-Bright-orange bg-white px-8 py-3 rounded-3xl lg:mt-14 hover:bg-Bright-orange hover:text-Transparent-white(paragraphs) hover:border-white border-2">Learn More</button>
        </div>
    );
}

export default Sedans;