import styles from "./AboutUsPage.module.css";

const OurPartners = () => {

    const imagesOfPartners = [
        {
            img: "/business_partners/alphabet-logo.png",
            alt: "Alphabet",
            width: 100
        },
        {
            img: "/business_partners/amazon_logo.png",
            alt: "Amazon",
            width: 100
        },
        {
            img: "/business_partners/CBC_Logo_White.png",
            alt: "CBC",
            width: 100
        },
        {
            img: "/business_partners/Microsoft-Logo-white.png",
            alt: "Microsoft",
            width: 100
        },
        {
            img: "/business_partners/nyu-logo.png",
            alt: "NYU",
            width: 100
        },
        {
            img: "/business_partners/QueensLogo_white.png",
            alt: "Queen's University",
            width: 100
        },
        {
            img: "/business_partners/sodexo-logo.png",
            alt: "Sodexo",
            width: 100
        }
    ];

    return (
        <div>
            <p>
                We collaborate with leading space and technology companies.
            </p>

            <div className={styles.partners}>
                {imagesOfPartners.map((partner, index) => (
                    <img
                        key={index}
                        src={partner.img}
                        alt={partner.alt}
                        width={partner.width}
                    />
                ))}
            </div>
        </div>
    );
};

export default OurPartners;