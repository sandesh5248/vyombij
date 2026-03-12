import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const LicenseForChargingStationInUP = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="EV Charging Station"
                    heroTitleSuffix="License in Uttar Pradesh"
                    heroDescription="Are you looking to install an electric vehicle (EV) charging station in Uttar Pradesh? Get VyomBiz’s 360° expert support and experience stress-free licensing. We ensure a 100% success rate transition from application to power connection."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "714+", label: "Stations Registered" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "EV Station License —",
                        highlightTitle: "UP Framework",
                        description: [
                            "Uttar Pradesh is the country's largest consumer base, making it an ideal location for electric vehicle (EV) charging infrastructure. The charging station license in UP governs the setup of both public and private charging points across the state.",
                            "Guided by the Ministry of Power regulations (2018), this framework enables faster adoption of electric vehicles by simplifying the licensing for entrepreneurs. Whether you are building a rapid DC station or a slow AC hub, compliance is key to accessing state subsidies.",
                            "Promote sustainable mobility and tap into a lucrative business opportunity. VyomBiz helps you navigate the UPPCL and state nodal agency requirements with ease."
                        ],
                        whyIdealTitle: "Types of EV Stations",
                        whyIdealList: [
                            { title: "Public Stations", desc: "Commercial charging hubs open to all EV owners with standard billing systems." },
                            { title: "Semi-Public", desc: "Stations located in malls, hotels, or hospitals for specific user groups." },
                            { title: "Private Charging", desc: "Captive structure installed in residential complexes or private company fleets." },
                            { title: "Swapping Stations", desc: "Battery exchange hubs allowing 3-5 minute 're-fueling' for multi-fleet users." }
                        ]
                    }}

                    advantages={{
                        title: "Advantages of EV License",
                        subtitle: "Why Open an EV Station in UP?",
                        list: [
                            { title: "Profitable Business", desc: "Tap into the rising EV demand in India's most populous state with high ROI potential." },
                            { title: "Government Subsidies", desc: "Benefit from FAME-II incentives, capital subsidies, and government rebates on infrastructure." },
                            { title: "Low Competition", desc: "Secure early-mover advantage in the rapidly expanding green energy market in Uttar Pradesh." },
                            { title: "CSR & Branding", desc: "Demonstrate environmental commitment and attract eco-conscious customers to your premises." },
                            { title: "Cost Efficiency", desc: "Access special EV charging electricity tariffs that are lower than standard commercial rates." },
                            { title: "Increased Footfall", desc: "EV stations in retail locations significantly increase stay-duration and customer spending." }
                        ]
                    }}

                    eligibility={{
                        title: "License Eligibility",
                        subtitle: "Grid and Equipment Standards",
                        list: [
                            { title: "Hub Density", desc: "At least 1 charging station in every 3km x 3km grid in cities and every 25km on highways." },
                            { title: "Fast Charging", desc: "Mandatory provision for at least 1 fast-charging station every 100 km for long-range EVs." },
                            { title: "Infrastructure", desc: "Installation of 33/11 KV cables, dedicated transformers, and approved energy meters." },
                            { title: "NSP Partnership", desc: "Requirement to partner with an online Network Service Provider for remote billing and monitoring." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required",
                        subtitle: "Checklist for your UP license application",
                        list: [
                            { title: "KYC Details", desc: "Identity and address proof of the authorized signatory and company directors." },
                            { title: "Land Documents", desc: "Registered Sale Deed, Lease Deed, or valid Rent Agreement for the site." },
                            { title: "Site Maps", desc: "Topographic map and land layout highlighting the charging kiosks." },
                            { title: "Business Proof", desc: "GST Registration Certificate and PAN Card of the signatory/entity." },
                            { title: "Technical Specs", desc: "Single line diagram of the electrical setup and equipment certifications." }
                        ]
                    }}

                    process={{
                        title: "Deployment Process",
                        subtitle: "From application to power connection",
                        steps: [
                            { step: "01", title: "Online Application", desc: "Submit the initial application on the Ministry of Power / UPPCL portal with project details." },
                            { step: "02", title: "Site Inspection", desc: "Nodal authority conducts a land and grid-capacity inspection to verify technical feasibility." },
                            { step: "03", title: "License Fees", desc: "Payment of the prescribed licensing and connection fees following successful site verification." },
                            { step: "04", title: "Equipment Setup", desc: "Installation of kiosks (Level 1, 2, or 3) and mandatory safety systems as per CEA guidelines." },
                            { step: "05", title: "Final Certification", desc: "Testing of chargers, online system integration, and final issuance of the operational license." }
                        ]
                    }}

                    features={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "India’s most trusted EV licensing partner",
                        list: [
                            { title: "360° Support", desc: "End-to-end assistance from grid feasibility studies to equipment procurement advice." },
                            { title: "Subsidy Filing", desc: "Dedicated team to maximize your FAME-II and state-specific capital subsidy claims." },
                            { title: "1-Week Connection", desc: "Expedited processing to get your electricity connection and NOC in record time." },
                            { title: "Local Presence", desc: "50+ branch offices across India for direct liaison with regional UPPCL offices." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "How do I get permission for an EV license in UP?",
                            answer: "You must submit an online application on the Ministry of Power portal, undergo land inspection, pay fees, and receive the license from the nodal authority."
                        },
                        {
                            question: "What is the minimum investment for an EV station?",
                            answer: "Infrastructure costs typically range from ₹6 Lakh to ₹15 Lakh, depending on whether it's an AC or DC Rapid charging setup."
                        },
                        {
                            question: "Are there subsidies for station owners?",
                            answer: "Yes, the government has grants under FAME Phase II and UP-specific incentives like tariff exemptions and capital subsidies."
                        },
                        {
                            question: "How much land is required for a station?",
                            answer: "Typically, 1-2 standard parking spots for Level 2 setups, though rapid chargers require extra space for transformers."
                        },
                        {
                            question: "Difference between charging and swapping stations?",
                            answer: "Charging takes 30+ minutes inside the vehicle; swapping exchanges the battery for a charged one in 3-5 minutes."
                        }
                    ]}
                />

                <ReviewsSection
                    title="EV Entrepreneur Stories"
                    subtitle="Empowering the green movement in Uttar Pradesh."
                    reviews={[
                        {
                            name: "Gaurav Tyagi",
                            role: "Station Owner",
                            company: "GreenDrive UP",
                            rating: 5,
                            initials: "GT",
                            text: "VyomBiz managed our UPPCL load enhancement and license filing perfectly. We got our substation ready in just 10 days."
                        },
                        {
                            name: "Priyanka S.",
                            role: "Director",
                            company: "ChargePoint Noida",
                            rating: 5,
                            initials: "PS",
                            text: "Their understanding of the FAME-II subsidy process is unmatched. They helped us save 25% on our initial capital expenditure."
                        },
                        {
                            name: "Mohit Agarwal",
                            role: "Franchise Head",
                            company: "EV-Connect",
                            rating: 4.9,
                            initials: "MA",
                            text: "Very professional in handling the site inspection and grid technicalities. High level of technical competence."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default LicenseForChargingStationInUP;
