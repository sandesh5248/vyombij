import React from "react";
import HeroLayout from "../common/HeroLayout";

const PublicHero = () => {
    return (
        <div id="registration-hero">
            <HeroLayout
                announcementText="We are India's leading brand for Public Limited Registration."
                heroTitleMain="Public Limited Company"
                heroTitleSuffix="Registration"
                heroSubtitle="Avail 50% Off – Professional Services"
                heroDescription="Build a large-scale business with the ability to raise funds from the public. Register your Public Limited Company with VyomBiz and get expert guidance for a smooth incorporation process."
                stats={[
                    { count: "5,00,000+", label: "Businesses Assisted" },
                    { count: "1,00,000+", label: "Registrations Completed" },
                    { count: "300+", label: "Legal & Financial Experts" },
                    { count: "50+", label: "Business Compliance Services" }
                ]}
                whatsIncludedList={[
                    "10+ Years of Experience",
                    "400 + In-House CAs, CS & Lawyers",
                    "99% SLA Delivery",
                    "10,000+ Pin codes Network in India"
                ]}
                successRateText="Successfully Registered 500+ Public Entities, 99% Success Rate"
            />
        </div>
    );
};

export default PublicHero;
