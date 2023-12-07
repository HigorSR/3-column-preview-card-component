import IconSuvs from "@/imgs/icon-suvs";

function Suvs() {
    return (
        <div className="bg-Dark-cyan text-white p-12">
            <IconSuvs />
            <h1 className="text-4xl uppercase my-8 font-bold font-big-shoulders-display">SUVs</h1>
            <p className="mb-6 text-sm text-Transparent-white(paragraphs) leading-relaxed pr-3 lg:w-52">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
            <button className="text-Dark-cyan bg-white px-8 py-3 rounded-3xl lg:mt-14 hover:bg-Dark-cyan hover:text-Transparent-white(paragraphs) hover:border-white border-2">Learn More</button>
        </div>
    );
}

export default Suvs;