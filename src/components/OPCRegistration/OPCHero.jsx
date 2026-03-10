import React from "react";
import HeroLayout from "../common/HeroLayout";

const OPCHero = () => {
    return (
        <div id="registration-hero">
            <HeroLayout
                announcementText="We are India's leading brand for One Person Company Registration."
                heroTitleMain="OPC Registration"
                heroTitleSuffix="in India"
                heroSubtitle="Avail 50% Off – Professional Services"
                heroDescription="Get the advantages of a private limited company while retaining full control as a single owner. Begin your entrepreneurial journey with VyomBiz today."
                stats={[
                    { count: "5,00,000+", label: "Happy Clients" },
                    { count: "1,00,000+", label: "Businesses Assisted" },
                    { count: "300+", label: "Business Advisors" },
                    { count: "50+", label: "Professional Services" }
                ]}
                whatsIncludedList={[
                    "10+ Years of Experience",
                    "400 + In-House CAs, CS & Lawyers",
                    "99% SLA Delivery",
                    "10,000+ Pin codes Network in India"
                ]}
                successRateText="Successfully Registered 12,000+ OPCs, 99% Success Rate"
            />
        </div>
    );
};

export default OPCHero;
