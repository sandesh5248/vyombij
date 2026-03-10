import React from "react";
import HeroLayout from "../common/HeroLayout";

const RegistrationHero = () => {
    return (
        <div id="registration-hero">
            <HeroLayout
                announcementText="We are India's leading brand for Private Limited Registration."
                heroTitleMain="Private Limited Company Registration"
                heroSubtitle="Avail 50% Off – Professional Services"
                heroDescription="Launch your business confidently with VyomBiz. Register your Private Limited company with professional legal guidance and a smooth online process."
                stats={[
                    { count: "5,00,000+", label: "Businesses Served" },
                    { count: "1,00,000+", label: "Registrations Completed" },
                    { count: "300+", label: "Legal & Compliance Experts" },
                    { count: "50+", label: "Business & Legal Services" }
                ]}
                whatsIncludedList={[
                    "10+ Years of Experience",
                    "400 + In-House CAs, CS & Lawyers",
                    "99% SLA Delivery",
                    "10,000+ Pin codes Network in India"
                ]}
                successRateText="Successfully Registered 50k+ Companies, 99% Success Rate"
            />
        </div>
    );
};

export default RegistrationHero;
