import React from 'react';

const featuresData = [
    // Array of feature objects
    {
        icon: "/img/icon-chat.webp",
        alt: "Chat Icon",
        title: "You are our #1 priority",
        description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
        icon: "/img/icon-money.webp",
        alt: "Money Icon",
        title: "More savings means higher rates",
        description: "The more you save with us, the higher your interest rate will be!"
    },
    {
        icon: "/img/icon-security.webp",
        alt: "Security Icon",
        title: "Security you can trust",
        description: "We use top of the line encryption to make sure your data and money is always safe."
    }
];

const Feature = () => {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {/* Mapping over the featuresData array to render individual feature items */}
            {featuresData.map((feature, index) => (
                <div className="feature-item" key={index}>
                    <img
                        src={feature.icon}
                        alt={feature.alt}
                        className="feature-icon"
                        width="100"
                        height="100"
                    />
                    <h3 className="feature-item-title">{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </section>
    );
};

export default Feature;
