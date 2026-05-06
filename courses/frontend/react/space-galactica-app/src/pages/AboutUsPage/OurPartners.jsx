import styles from "./AboutUsPage.module.css";
const OurPartners = () => {
    return (
        <div>
            <p>
                We collaborate with leading space and technology companies.
            </p>

            <div className={styles.partners}>
                <img src="/business_partners/alphabet-logo.png" alt="SpaceX" width="100" />
                <img src="/business_partners/amazon_logo.png" alt="SpaceX" width="100" />
                <img src="/business_partners/CBC_Logo_White.png" alt="SpaceX" width="100" />
                <img src="/business_partners/Microsoft-Logo-white.png" alt="SpaceX" width="100" />
                <img src="/business_partners/nyu-logo.png" alt="ESA" width="100" />
                <img src="/business_partners/QueensLogo_white.png" alt="ESA" width="100" />
                <img src="/business_partners/sodexo-logo.png" alt="ESA" width="100" />

            </div>
        </div>
    );
};

export default OurPartners;