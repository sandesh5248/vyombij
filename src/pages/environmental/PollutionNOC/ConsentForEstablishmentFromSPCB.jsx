import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ConsentForEstablishmentFromSPCB = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Consent to Establish (CTE)"
                    heroTitleSuffix="from Pollution Control Board"
                    heroDescription="Are you working on new industrial and development projects? Secure your Consent to Establish from the Pollution Control Board with VyomBiz. We've successfully maintained a 98% first-time approval ratio and secured CTE for 500+ projects across PAN India."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "98%", label: "Approval Ratio" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Consent to Establish (CTE) —",
                        highlightTitle: "SPCB Overview",
                        description: [
                            "Consent to Establish (CTE), also known as Consent for Establishment from SPCB, is a mandatory pollution NOC required for regulating industrial discharges, including air emissions, wastewater, and noise under the Water and Air Acts.",
                            "Industries are categorized into Red (high), Orange (moderate), and Green (low) based on their pollution levels. Some states also recognize a White Category for exempt industries. Entrepreneurs must apply for CTE before setting up their unit to ensure environmental compliance.",
                            "Secure your CTE Certificate smoothly with VyomBiz consultants and avoid shutdowns or heavy fines ranging from Rs 1 Lakh to Rs 50 Lakh."
                        ],
                        whyIdealTitle: "Pollution Categories",
                        whyIdealList: [
                            { title: "Red Category", desc: "High pollution potential; requires rigorous scrutiny and environmental impact assessment." },
                            { title: "Orange Category", desc: "Moderate pollution potential; requires standard compliance and regular monitoring." },
                            { title: "Green Category", desc: "Low pollution potential; faster clearance and simplified documentation." },
                            { title: "White Category", desc: "Exempt from formal NOC but requires intimation and application submission." }
                        ]
                    }}

                    advantages={{
                        title: "Why Consent is Essential",
                        subtitle: "Advantages of getting CTE early",
                        list: [
                            { title: "Regulatory Compliance", desc: "Adheres to environmental laws (Water & Air Acts), helping avoid penalties and project closures." },
                            { title: "Sustainable Development", desc: "Promotes sustainability by ensuring industry operates within ecological limits from day one." },
                            { title: "Health and Safety", desc: "Ensures the facility doesn't pose health hazards to the local community and ecosystems." },
                            { title: "Positive Reputation", desc: "Demonstrates environmental consciousness, boosting brand value with investors and customers." },
                            { title: "Access to Financing", desc: "A prerequisite for securing loans and financial assistance from major banks and institutions." },
                            { title: "Operational Continuity", desc: "Prevents future legal roadblocks when transitioning from setup to active operations (CTO)." }
                        ]
                    }}

                    documents={{
                        title: "Documents Checklist",
                        subtitle: "What you need for a successful CTE application",
                        list: [
                            { title: "Site Plan", desc: "Location plan of the industry highlighting boundaries and nearby landmarks." },
                            { title: "Project Report", desc: "Details on raw materials, products, and capital cost of land/machinery." },
                            { title: "Water Balance", desc: "Source of water, intake quantity, and wastewater generation/treatment plan." },
                            { title: "Land Documents", desc: "Registration, Rent, or Lease deed proving legal possession of the site." },
                            { title: "Pollution Controls", desc: "Details of Water or Air Pollution Control Instruments and designs." },
                            { title: "Constitutional Docs", desc: "MOA/AOA, Partnership Deed, or Proprietorship documents as applicable." }
                        ]
                    }}

                    process={{
                        title: "Registration Procedure",
                        subtitle: "Securing your establishment efficiently",
                        steps: [
                            { step: "01", title: "Portal Submission", desc: "Submit CFE application online via the respective State Pollution Control Board's OCMMS portal with required fees." },
                            { step: "02", title: "Document Scrutiny", desc: "Regional Office (R.O.) scrutinizes submitted documents for consistency with local pollution norms." },
                            { step: "03", title: "Site Inspection", desc: "Officials may perform a site visit to verify location suitability and proposed discharge points." },
                            { step: "04", title: "Report Forwarding", desc: "Inspection report is forwarded to the approving authority for final review of the project." },
                            { step: "05", title: "Issuance of CTE", desc: "Provisional CTE is typically issued within 100-120 days, allowing construction to begin." }
                        ]
                    }}

                    postCompliance={{
                        title: "Validity & Penalties",
                        subtitle: "Critical compliance windows",
                        list: [
                            { title: "CTE Validity", desc: "Generally issued for 3 to 5 years. Micro/Small Green projects may get up to 15 years." },
                            { title: "Non-Compliance Risks", desc: "Defaults on Water/Air Act can lead to revocation of consent and immediate bank guarantee forfeit." },
                            { title: "Revocation Notice", desc: "SPCB reserves the right to revoke consent if units fail to implement promised pollution control measures." },
                            { title: "Timeline Note", desc: "The timeline for getting CTE is 100 to 120 days after filing the application on the OCMMS portal." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What is Consent to Establish from PCB?",
                            answer: "It is a mandatory pollutions NOC required before setting up any industrial plant to regulate air emissions and wastewater discharge."
                        },
                        {
                            question: "Is Consent to Establish from SPCB mandatory?",
                            answer: "Yes, under the Water Act and Air Act, no person shall establish or operate any industrial plant without the previous consent of the State Board."
                        },
                        {
                            question: "What is the difference between CTO and CTE?",
                            answer: "CTE (Establish) is obtained before setting up the industry. CTO (Operate) is obtained once the plant is established, allowing them to start operations."
                        },
                        {
                            question: "What is the validity of Consent to Establish?",
                            answer: "The CTE is generally issued for 3 to 5 years. For micro and small-scale green category projects, the validity can be further extended."
                        },
                        {
                            question: "Can CTE be revoked after issuance?",
                            answer: "Yes, the SPCB can revoke the certificate if the unit fails to comply with the Air Act (1981) or Water Act (1974) during construction."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success"
                    subtitle="Trusted by 500+ projects for SPCB clearances."
                    reviews={[
                        {
                            name: "Suresh Menon",
                            role: "Project Manager",
                            company: "Metals India",
                            rating: 5,
                            initials: "SM",
                            text: "VyomBiz expedited our CTE application through the OCMMS portal. Their understanding of the Red Category requirements was impeccable."
                        },
                        {
                            name: "Anita Desai",
                            role: "CEO",
                            company: "EcoPack Solutions",
                            rating: 5,
                            initials: "AD",
                            text: "Secured our Green Category CTE in record time. The team handled all the documentation, from site plans to water balance reports."
                        },
                        {
                            name: "Rajesh V.",
                            role: "Director",
                            company: "V-Tech Industries",
                            rating: 4.8,
                            initials: "RV",
                            text: "Professional handling of our site inspection. VyomBiz clarified all regulatory queries from the SPCB officials effectively."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default ConsentForEstablishmentFromSPCB;
