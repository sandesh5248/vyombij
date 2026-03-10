import React from "react";
import HeroLayout from "../common/HeroLayout";

const PartnershipHero = () => {
    return (
        <div id="registration-hero">
            <HeroLayout
                announcementText="We are India's leading brand for Partnership Firm Registration."
                heroTitleMain="Partnership Firm Registration"
                heroTitleSuffix="in India"
                heroSubtitle="Avail 50% Off – Professional Services"
                heroDescription="Start your business with trusted partners through a simple and flexible structure. VyomBiz helps you draft a legally strong partnership deed and complete the registration process smoothly."
                stats={[
                    { count: "5,00,000+", label: "Businesses Assisted" },
                    { count: "1,00,000+", label: "Registrations Completed" },
                    { count: "300+", label: "Legal & Business Experts" },
                    { count: "50+", label: "Legal & Compliance Services" }
                ]}
                whatsIncludedList={[
                    "10+ Years of Experience",
                    "400 + In-House CAs, CS & Lawyers",
                    "99% SLA Delivery",
                    "10,000+ Pin codes Network in India"
                ]}
                successRateText="Successfully Registered 30,000+ Firms, 99% Success Rate"
            />
        </div>
    );
};

export default PartnershipHero;
