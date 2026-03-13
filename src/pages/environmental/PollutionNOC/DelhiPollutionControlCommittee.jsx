import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const DelhiPollutionControlCommittee = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Delhi Pollution Control"
                    heroTitleSuffix="Committee (DPCC) Authorization"
                    heroDescription="Get Delhi Pollution Control Committee Authorization for your business with VyomBiz experts. Ensure 100% compliance with environmental and DPCC standards for all industry categories in the Delhi region."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "99%", label: "SLA Delivery" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "DPCC Authorization —",
                        highlightTitle: "Compliance Overview",
                        description: [
                            "The Delhi Pollution Control Committee (DPCC) is an autonomous regulatory body responsible for issuing the DPCC License. Governed by the Ministry of Environment, Forest & Climate Change, it ensures that businesses in Delhi operate without harming the environment.",
                            "It acts as a No Objection Certificate (NOC) necessary for new setups, capacity expansions, or production process changes. Entrepreneurs in Delhi must acquire this authorization to stay legally compliant and avoid environmental litigation.",
                            "Not sure how to secure your DPCC Authorization? Talk to VyomBiz expert consultants today and get your paperwork handled with zero stress."
                        ],
                        whyIdealTitle: "Who Needs It?",
                        whyIdealList: [
                            { title: "Manufacturing Units", desc: "All trading and manufacturing entities operating within Delhi's jurisdiction." },
                            { title: "Waste Handlers", desc: "Solid, Hazardous, E-Waste, and Battery Waste management entities." },
                            { title: "Healthcare Labs", desc: "Hospitals, Clinics, and Bio-Medical waste generating establishments." },
                            { title: "Food Industry", desc: "Restaurants and food processing units requiring MCD and DPCC clearance." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of Authorization",
                        subtitle: "Sustainable Growth & Legal Security",
                        list: [
                            { title: "Sustainable Development", desc: "Ensures financial growth happens alongside ecological protection and social equity." },
                            { title: "Waste Management", desc: "Enforces proficient waste management measures so that business waste is reused and reduced." },
                            { title: "Resource Protection", desc: "Helps in preventing depletion of natural resources and maintaining Delhi's air and water quality." },
                            { title: "Legal Immunity", desc: "Protects your business from heavy penalties and shutdown orders from environmental authorities." },
                            { title: "Brand Reputation", desc: "Demonstrates environmental commitment, making your business more attractive to conscious consumers." },
                            { title: "Resource Efficiency", desc: "Promotes the use of pollution control devices that often lead to better resource utilization." }
                        ]
                    }}

                    eligibility={{
                        title: "Industry Classification",
                        subtitle: "How DPCC categorizes pollution levels",
                        list: [
                            { title: "White Category", desc: "Least polluting (Score 0-20). No formal consent required; only an undertaking is needed." },
                            { title: "Green Category", desc: "Moderately polluting (Score 21-40). Requires both Consent to Establish (CTE) and Operate (CTO)." },
                            { title: "Orange Category", desc: "Polluting industries (Score 41-59). Mandatory CTE/CTO before commencement of any setup." },
                            { title: "Red Category", desc: "Excessively polluting (Score > 60). Not permitted to function within the Delhi jurisdiction." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "Paperwork for DPCC filing",
                        list: [
                            { title: "Personal ID", desc: "PAN Card and Aadhaar of the applicant/authorized person." },
                            { title: "Utility Bill", desc: "Latest Electricity Bill or Water Connection Certificate of the site." },
                            { title: "Site Plan", desc: "Detailed location and site layout plan highlighting discharge points." },
                            { title: "Property Proof", desc: "Land Ownership document or valid Rent/Lease Deed." },
                            { title: "Business Docs", desc: "Partnership Deed, MOA/AOA, or Proprietorship declaration." },
                            { title: "Investment Proof", desc: "CA Certificate indicating total Capital Investment in project." }
                        ]
                    }}

                    process={{
                        title: "Registration Process",
                        subtitle: "Your journey to DPCC clearance",
                        steps: [
                            { step: "01", title: "Category Check", desc: "Verify business activity and classify it under White, Green, Orange, or Red categories." },
                            { step: "02", title: "Online Submission", desc: "Submit essential documents and detailed project reports on the DPCC official portal." },
                            { step: "03", title: "CTE Generation", desc: "Obtain Consent to Establish (CTE) before beginning any construction or machinery setup." },
                            { step: "04", title: "Device Installation", desc: "Install required pollution control devices like ETP/STP as directed during the CTE phase." },
                            { step: "05", title: "CTO Issuance", desc: "Conduct final verification of installed devices and receive the Consent to Operate (CTO)." }
                        ]
                    }}

                    features={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "10+ Years of Success in DPCC Liaison",
                        list: [
                            { title: "400+ Experts", desc: "In-house CAs, CS, and environmental lawyers for a seamless and integrated process." },
                            { title: "10K+ Pincodes", desc: "Wide network across India for local liaison and grounded regulatory support." },
                            { title: "99.2% Success", desc: "Industry-leading success rate in acquiring DPCC authorizations for diverse entities." },
                            { title: "24/7 Support", desc: "Round-the-clock assistance to resolve any compliance and documentation queries." },
                            { title: "Fast Tracking", desc: "Minimized turnaround time through expert handling of the OCMMS portal." },
                            { title: "Post-Consent Support", desc: "Guidance on maintaining pollution logs and timely CTO renewal filing." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What is DPCC Authorization?",
                            answer: "It is a legal permit (CTE/CTO) issued by the Delhi Pollution Control Committee ensuring trade activities don't harm Delhi's environment."
                        },
                        {
                            question: "How are industries classified in Delhi?",
                            answer: "They are classified into White, Green, Orange, and Red categories based on their pollution potential index score."
                        },
                        {
                            question: "Does the White Category require a certificate?",
                            answer: "No, White category industries only need to submit an undertaking to DPCC instead of a formal consent certificate."
                        },
                        {
                            question: "What is the validity of CTO in Delhi?",
                            answer: "Generally, CTO is granted for 10 years to Green category industries and 5 years to Orange category industries."
                        },
                        {
                            question: "How long does the DPCC process take?",
                            answer: "Typically, it takes 30-60 days for a decision on consent applications, depending on document completeness."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success in Delhi"
                    subtitle="Helping businesses thrive sustainably in the capital."
                    reviews={[
                        {
                            name: "Vikram Kohli",
                            role: "Hotel Manager",
                            company: "Crest Hotels",
                            rating: 5,
                            initials: "VK",
                            text: "Securing DPCC clearance for our hotel's DG sets and wastewater management was handled perfectly by VyomBiz. Highly professional team."
                        },
                        {
                            name: "Sanjana Roy",
                            role: "Production Head",
                            company: "Roy Plastic Works",
                            rating: 5,
                            initials: "SR",
                            text: "They helped us navigate the Orange category complexities and set up our ETP as per DPCC standards. Everything was on time."
                        },
                        {
                            name: "Aman Gupta",
                            role: "Traders Asson",
                            company: "Delhi Traders",
                            rating: 4.9,
                            initials: "AG",
                            text: "Excellent service for White category undertakings. They made the process digital and easy for all our association members."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default DelhiPollutionControlCommittee;
