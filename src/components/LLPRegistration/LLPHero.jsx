import React from "react";
import HeroLayout from "../common/HeroLayout";

const LLPHero = () => {
    return (
        <div id="registration-hero">
            <HeroLayout
                announcementText="We are India's leading brand for LLP Registration."
                heroTitleMain="LLP Registration"
                heroTitleSuffix="in India"
                heroSubtitle="Avail 50% Off – Professional Services"
                heroDescription="Experiencing delays in registering your LLP online? Our experts help you complete the Limited Liability Partnership registration smoothly and quickly."
                stats={[
                    { count: "5,00,000+", label: "Happy Clients" },
                    { count: "1,00,000+", label: "Businesses Assisted" },
                    { count: "300+", label: "Professional Advisors" },
                    { count: "50+", label: "Business Services" }
                ]}
                whatsIncludedList={[
                    "10+ Years of Experience",
                    "400 + In-House CAs, CS & Lawyers",
                    "99% SLA Delivery",
                    "10,000+ Pin codes Network in India"
                ]}
                successRateText="Successfully Registered 3,000+ LLPs, 99% Success Rate"
            />
        </div>
    );
};

export default LLPHero;
