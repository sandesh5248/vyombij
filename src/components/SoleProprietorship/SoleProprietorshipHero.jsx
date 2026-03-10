import React from "react";
import HeroLayout from "../common/HeroLayout";

const SoleProprietorshipHero = () => {
    return (
        <div id="registration-hero">
            <HeroLayout
                announcementText="We are India's leading brand for Sole Proprietorship Registration."
                heroTitleMain="Sole Proprietorship"
                heroTitleSuffix="Registration"
                heroSubtitle="Get Professional Services at 50% Off – Start Today!"
                heroDescription="Experiencing delays in registering your proprietorship? Our expert consultants offer complete assistance. We have helped thousands of entrepreneurs establish their sole proprietorship businesses successfully."
                stats={[
                    { count: "5,00,000+", label: "Happy Clients" },
                    { count: "1,00,000+", label: "Businesses Assisted" },
                    { count: "300+", label: "Professional Advisors" },
                    { count: "50+", label: "Business Services" }
                ]}
                whatsIncludedList={[
                    "Expert-led Registration Process",
                    "GST TRN & ARN Generation",
                    "GST Registration",
                    "MSME Registration (Udyam)",
                    "GST Filing for 1 Financial Yr",
                    "ITR Filing Support"
                ]}
                successRateText="Successfully Registered 2,00,000+ Proprietorships, 99% Success Rate"
            />
        </div>
    );
};

export default SoleProprietorshipHero;
