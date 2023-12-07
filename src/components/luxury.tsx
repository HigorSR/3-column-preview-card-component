import IconLuxury from "@/imgs/icon-luxury";

function Luxury() {
    return (
        <div className="bg-Very-dark-cyan text-white p-12 lg:rounded-r-lg lg:overflow-hidden">
            <IconLuxury />
            <h1 className="text-4xl uppercase my-8 font-bold font-big-shoulders-display ">Luxury</h1>
            <p className="mb-6 text-sm text-Transparent-white(paragraphs) leading-relaxed pr-4 lg:w-52 lg:pr-2">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
            <button className="text-Very-dark-cyan bg-white px-8 py-3 rounded-3xl lg:mt-14 hover:bg-Very-dark-cyan hover:text-Transparent-white(paragraphs) hover:border-white border-2">Learn More</button>
        </div>
    );
}

export default Luxury;