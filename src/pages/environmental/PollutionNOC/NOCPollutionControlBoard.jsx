import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const NOCPollutionControlBoard = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="NOC Pollution"
                    heroTitleSuffix="Control Board"
                    heroDescription="Have you implemented pollution prevention and control measures for your business? Secure your NOC Pollution Control Board with VyomBiz and stay legally compliant. Join 43,000+ businesses who secured their NOC with our expert-led advisory."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "10k+", label: "Pin codes" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "SPCB NOC —",
                        highlightTitle: "Industry Consent",
                        description: [
                            "Obtaining an NOC (No Objection Certificate) from the State Pollution Control Board (SPCB) is a mandatory legal requirement before starting any industrial or commercial activity. The board overseen the maintenance of environmental standards for air and water quality.",
                            "Under the provisions of the Water Pollution Act (1974) and Air Pollution Act (1981), businesses must obtain 'Consent to Establish' (CTE) before construction and 'Consent to Operate' (CTO) before starting production. This ensures that industrial growth does not come at the cost of ecological balance.",
                            "Are you facing technical roadblocks in securing your pollution board NOC? Speak to VyomBiz consultants today and get your certificate with zero stress and maximum compliance."
                        ],
                        whyIdealTitle: "Who Needs It?",
                        whyIdealList: [
                            { title: "Manufacturing & Traders", desc: "Factories across all sectors including chemicals, textiles, and engineering." },
                            { title: "Waste Entities", desc: "E-Waste, Solid Waste, and Hazardous waste management and recycling units." },
                            { title: "Healthcare Centers", desc: "Hospitals, Clinics, and Pathological labs generating bio-medical waste." },
                            { title: "Mining & Infrastructure", desc: "Large scale mining operations and infrastructure projects affecting natural resources." }
                        ]
                    }}

                    advantages={{
                        title: "Advantages of SPCB NOC",
                        subtitle: "Compliance Fuels Responsible Growth",
                        list: [
                            { title: "Sustainable Development", desc: "Ensures industrial progress happens without disturbing the delicate ecological balance." },
                            { title: "Resource Protection", desc: "Helps in the conservation of natural resources and prevents critical water/air degradation." },
                            { title: "Legal Eligibility", desc: "Mandatory for applying for other statutory permits like trade licenses or factory registrations." },
                            { title: "Market Reputation", desc: "Positions your brand as an environmentally responsible player in the global market." },
                            { title: "Avoid Stiff Penalties", desc: "Protects your unit from heavy legal fines, imprisonment, or forced industrial closure." },
                            { title: "Operational Continuity", desc: "Guarantees smooth business orchestration without fear of environmental audits/shuts." }
                        ]
                    }}

                    eligibility={{
                        title: "Industry Categorization",
                        subtitle: "CPCB/SPCB Pollution Index",
                        list: [
                            { title: "Red Category", desc: "High pollution load. Requires the most stringent emission control and frequent monitoring audits." },
                            { title: "Orange Category", desc: "Moderate pollution load. Mandatory emission control gear and regular compliance reporting." },
                            { title: "Green Category", desc: "Least impactful industries with minimal emissions; require standard consent for operations." },
                            { title: "White Category", desc: "Environmentally benign industries. Generally exempt from formal consent, only require an undertaking." }
                        ]
                    }}

                    documents={{
                        title: "Required Checklist",
                        subtitle: "Essential paperwork for your NOC",
                        list: [
                            { title: "Entity Proof", desc: "PAN Card of the unit and Aadhar/ID of the authorized signatory or partners." },
                            { title: "Operating Proof", desc: "Valid Factory License, Trade License, or Udyog Aadhaar registration." },
                            { title: "Site Layout", desc: "Detailed engineering drawings of the site and the proposed business design." },
                            { title: "Financial Cert", desc: "CA-verified letter stating the total project cost and capital investment." },
                            { title: "Utility Records", desc: "Latest electricity and utility bills proof to verify the operational scale." },
                            { title: "Technical Plans", desc: "ETP/STP design layouts and air pollution control (APC) arrangement specifications." }
                        ]
                    }}

                    process={{
                        title: "Step-by-Step Procedure",
                        subtitle: "Clear path to environmental compliance",
                        steps: [
                            { step: "01", title: "Application Filing", desc: "Submit the primary application on the respective SPCB portal with accurate unit data." },
                            { step: "02", title: "Technical Uploads", desc: "Attach proposed pollution control plans and specific technical drawings of emission points." },
                            { step: "03", title: "Regional Review", desc: "Officers from the regional SPCB office conduct a physical site inspection of the premises." },
                            { step: "04", title: "Compliance Scrutiny", desc: "The board processes the inspection report and verifies technical adequacy within 90-120 days." },
                            { step: "05", title: "NOC Issuance", desc: "Final CTE or CTO certificate is issued upon successful verification of environmental gear." }
                        ]
                    }}

                    postCompliance={{
                        title: "Penalties & Timelines",
                        subtitle: "Rules of the environmental acts",
                        list: [
                            { title: "Environmental Act", desc: "Non-compliance can lead to imprisonment up to 5 years and fines up to ₹1 Lakh per default." },
                            { title: "Daily Penalties", desc: "Continual default after initial warning can lead to extra fines of ₹5,000 per day." },
                            { title: "Hazardous Rules", desc: "Occupiers are strictly liable for heavy financial damages as levied by the State PCB." },
                            { title: "Renewal Windows", desc: "Apply for CTO renewal at least 60-90 days before the expiry of the existing certificate." }
                        ]
                    }}

                    features={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "Dominating Environmental Consulting in India",
                        list: [
                            { title: "10+ Years", desc: "A decade of core expertise in acquiring thousands of SPCB/CPCB clearances nationwide." },
                            { title: "500+ Projects", desc: "Proven track record of assisting diverse industrial units in complex licensing needs." },
                            { title: "End-to-End", desc: "Complete documentation, technical drawing support, and liaison until final certification." },
                            { title: "75% Market Hold", desc: "India's leading brand in environmental compliance with widespread regional network." },
                            { title: "Expert Pre-Audit", desc: "We conduct virtual and physical pre-audits to ensure your site is inspection-ready." },
                            { title: "Regional Liaison", desc: "Dedicated local teams for every state board ensuring faster processing of files." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What is NOC Pollution Control Board?",
                            answer: "It is a mandatory legal consent (CTE/CTO) issued by the State Board to ensure industries meet environmental safety standards."
                        },
                        {
                            question: "What are the common industrial categories?",
                            answer: "CPCB classifies industries into Red, Orange, Green, and White categories based on their pollution index."
                        },
                        {
                            question: "When should I apply for certificate renewal?",
                            answer: "Ideally, you should apply for renewal at least 60-90 days before the expiry of your existing 'Consent to Operate'."
                        },
                        {
                            question: "Is there any provision for exemption?",
                            answer: "Only 'White Category' industries (Pollution Index 0-20) are generally exempt, though they may need to file an undertaking."
                        },
                        {
                            question: "What is the validity of the Pollution NOC?",
                            answer: "Validity ranges from 3 years for 'Red' category to 10 years for 'Green' industries, depending on state-specific norms."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Industrial Trust"
                    subtitle="Trusted by factories across 10,000+ pin codes."
                    reviews={[
                        {
                            name: "Rakesh Mishra",
                            role: "Plant Head",
                            company: "Apex Manufacturing",
                            rating: 5,
                            initials: "RM",
                            text: "Getting the SPCB NOC for our manufacturing unit was daunting until we consulted VyomBiz. Their regional team handled the CTE filing perfectly."
                        },
                        {
                            name: "Dinesh Kumar",
                            role: "Factory Owner",
                            company: "DK Textiles",
                            rating: 5,
                            initials: "DK",
                            text: "Very knowledgeable about the technical drawings required for the ETP. Their pre-audit helped us pass the board inspection in one go."
                        },
                        {
                            name: "Sunita Narayan",
                            role: "Compliance Director",
                            company: "Green Pharma",
                            rating: 4.8,
                            initials: "SN",
                            text: "Excellent liaison support. They simplified the complex hazardous waste rules for us and got our CTO renewed without delays."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default NOCPollutionControlBoard;
