const OurCrew = () => {
    const crew = [
        {
            name: "Captain Sarah Vega",
            description: "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration."
        },
        {
            name: "Dr. Leo Redding",
            description: "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating."
        },
        {
            name: "Chief Engineer Hana Lee",
            description: "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands."
        },
        {
            name: "Mission Specialist Alex Santos",
            description: "As a mission specialist, Alex's job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers."
        },
        {
            name: "Crew Member Maya Patel",
            description: "Maya brings a unique blend of technical skills and customer service experience to the team. She's always ready to assist with any needs and to make sure every traveler has an unforgettable experience."
        }
    ];

    return (
        <div>
            {crew.map((member, index) => (
                <div key={index}>
                    <h3>{member.name}</h3>
                    <p>{member.description}</p>
                </div>
            ))}
        </div>
    );
};

export default OurCrew;