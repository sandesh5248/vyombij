import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EWasteLicenseForDismantling = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="E-waste License"
                    heroTitleSuffix="for Dismantling"
                    heroDescription="Do you wish to start Dismantling E-Waste but are not sure about the licensing requirements? Connect with VyomBiz to obtain an E-waste License for Dismantling. 199 out of 200 dismantlers are successfully running their businesses after securing the license with us."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "99.5%", label: "Success Rate" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "E-waste License —",
                        highlightTitle: "Dismantling Overview",
                        description: [
                            "If you are a dismantler with a desire to protect human health and the environment from the adverse effects of hazardous wastes, securing an e-waste license for dismantling is essential. Electronic waste releases harmful chemicals like lead, chromium, and PVC.",
                            "Collecting, dismantling, and recycling such waste is critical for sustainable growth. The license ensures that hazardous components are separated legally and safely before being sent to authorized recyclers.",
                            "Encountering challenges in obtaining your e-waste license? Let VyomBiz experts help you overcome regulatory hurdles in one go."
                        ],
                        whyIdealTitle: "Who is Eligible?",
                        whyIdealList: [
                            { title: "Individuals", desc: "Entrepreneurs starting a new solo dismantling unit." },
                            { title: "Registered Societies", desc: "NGOs or community organizations involved in waste management." },
                            { title: "Corporate Entities", desc: "Private limited or public companies establishing large-scale facilities." },
                            { title: "Associations", desc: "Trade associations or designated agencies for waste collection." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of License",
                        subtitle: "Promoting Sustainable Waste Management",
                        list: [
                            { title: "Preserves Resources", desc: "It helps to preserve natural resources by recovering valuable metals from discarded electronics." },
                            { title: "Prevents Pollution", desc: "Prevents toxic spills and soil/water contamination caused by improper disposal of hazardous components." },
                            { title: "Business Growth", desc: "Generates new growth and employment while ensuring full legal compliance with E-Waste rules." },
                            { title: "Circular Economy", desc: "Contributes to the circular economy by re-introducing dismantled parts into the production cycle." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "Checklist for your dismantling authorization",
                        list: [
                            { title: "Authorized ID", desc: "Aadhar card and PAN copy of the authorized signatory of the unit." },
                            { title: "Legal Residency", desc: "Electricity bill or utility proof of the unit's physical location." },
                            { title: "Business License", desc: "Existing Factory License or Trade License of the facility." },
                            { title: "Layout Plan", desc: "Detailed site plan highlighting dismantling and storage areas." },
                            { title: "Company Docs", desc: "MOA/AOA or Partnership Deed if the entity is a company or firm." },
                            { title: "Authorization", desc: "Board resolution authorizing the person for DPCC/SPCB communication." }
                        ]
                    }}

                    process={{
                        title: "Operational Requirements",
                        subtitle: "Space & Process standards for dismantlers",
                        steps: [
                            { step: "01", title: "Site Selection", desc: "Ensure a minimum of 300 sq. meters for a 1T/day capacity unit with water-resistant roofing." },
                            { step: "02", title: "De-dusting Setup", desc: "Install dismantling tables with suction hoods and bag filters to manage airborne particles." },
                            { step: "03", title: "Manual Segregation", desc: "Conduct physical segregation of circuit boards, plastics, and batteries using wire cutters." },
                            { step: "04", title: "Safe Storage", desc: "Establish separate containers for hazardous parts (lead batteries, mercury switches) as per rules." },
                            { step: "05", title: "Reporting & Dispatch", desc: "Maintain logs of dismantled parts and ensure dispatch to only authorized e-waste recyclers." }
                        ]
                    }}

                    features={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "Your partner in E-Waste sustainability",
                        list: [
                            { title: "SOP Guidance", desc: "We provide detailed Standard Operating Procedures for safe manual dismantling." },
                            { title: "Compliance Liaison", desc: "Direct coordination with SPCB/DPCC for faster application processing." },
                            { title: "Space Optimization", desc: "Expert advice on layout planning to meet the 300 sq. m. per ton requirement." },
                            { title: "Documentation Support", desc: "End-to-end help with factory licenses and environmental undertakings." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What is the dismantling of e-waste?",
                            answer: "It is an authorization that allows a business to manually or mechanically dismantle electronic waste into parts like circuit boards, plastics, and batteries."
                        },
                        {
                            question: "Why is a dismantling license crucial?",
                            answer: "It authorizes you to legally separate hazardous components and ensures your activities protect the environment from toxic spills."
                        },
                        {
                            question: "What is manual dismantling?",
                            answer: "The process of opening electrical equipment with tools like screwdrivers for physical segregation of parts."
                        },
                        {
                            question: "Is dismantling mandatory before recycling?",
                            answer: "Yes, because mixed e-waste cannot go directly to a recycler without separating non-recyclable or toxic components first."
                        },
                        {
                            question: "What are the space requirements?",
                            answer: "A minimum of 300 square meters is required for a capacity of 1 ton per day to handle storage and processing."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Dismantler Success Stories"
                    subtitle="Trusted by leading waste management partners."
                    reviews={[
                        {
                            name: "Rahul Khanna",
                            role: "Unit Manager",
                            company: "Khanna E-Waste",
                            rating: 5,
                            initials: "RK",
                            text: "VyomBiz helped us plan our de-dusting system and site layout to meet the DPCC standards. Secured our license within 45 days."
                        },
                        {
                            name: "Sandeep V.",
                            role: "Director",
                            company: "Eco-Dismantlers",
                            rating: 5,
                            initials: "SV",
                            text: "Highly professional in handling company MOA and factory license documentation. They made e-waste compliance look easy."
                        },
                        {
                            name: "Jaspreet Kaur",
                            role: "Operations Head",
                            company: "SafeRecycle",
                            rating: 4.9,
                            initials: "JK",
                            text: "Their team explained the hazardous component storage rules perfectly. We are now running a fully compliant facility."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default EWasteLicenseForDismantling;
