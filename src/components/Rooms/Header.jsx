import Heading from "../Heading/Heading";

const Header = () => {
    return (
        <div>
            <Heading title='Veluvana Bali - Owl Bamboo House !' subtitle="Sidemen, Indonesia"
                />
                <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
                    <img className="object-cover w-full" src="https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg" alt="Header image" />
                </div>
        </div>
    );
};

export default Header;