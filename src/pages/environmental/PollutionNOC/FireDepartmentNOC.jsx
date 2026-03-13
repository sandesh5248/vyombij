import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const FireDepartmentNOC = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Fire Department"
                    heroTitleSuffix="NOC Certification"
                    heroDescription="Do you wish to get a fire department NOC for your residential, educational, or high-risk building? Our experts ensure 100% compliance with fire safety standards. Join 1275+ businesses who secured their NOC with our expert-led advisory services."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "500+", label: "Compliance Experts" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Fire Department NOC —",
                        highlightTitle: "Safety Overview",
                        description: [
                            "The Fire Department NOC is a critical certificate issued to protect premises against fire damage. It validates that a building meets the fire safety standards prescribed by the Bureau of Indian Standards and state-specific fire service departments.",
                            "Inspection ensures that fire prevention and safety measures are functionally integrated into the building's architecture. For multi-plex or high-rise buildings (above 15 meters), obtaining this NOC is a compulsory legal mandate.",
                            "Worried about the complexities of fire safety certification? Talk to VyomBiz experts today for a seamless and integrated experience."
                        ],
                        whyIdealTitle: "Who Needs It?",
                        whyIdealList: [
                            { title: "Educational Units", desc: "Schools, Colleges, and Universities with student residential facilities." },
                            { title: "Business Buildings", desc: "Corporate offices and commercial complexes with high occupant density." },
                            { title: "High-Rise Residential", desc: "Apartment blocks and residential towers above 15 meters in height." },
                            { title: "Industrial Units", desc: "Manufacturing facilities and warehouses handling hazardous materials." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of Fire NOC",
                        subtitle: "Secure Your Business & Life Safety",
                        list: [
                            { title: "Trade License Ease", desc: "Compulsory attachment for applying for or renewing trade licenses with local civil bodies." },
                            { title: "Business Continuity", desc: "Ensures legal orchestration of business activities without the risk of sealing or shutdowns." },
                            { title: "Life Safety", desc: "Guarantees that essential fire-fighting equipment is in place to protect occupants from emergencies." },
                            { title: "Insurance Compliance", desc: "Most building insurance claims require a valid Fire NOC for processing in case of accidents." },
                            { title: "Property Value", desc: "Verified safety standards increase the market value and trust for commercial leasing." },
                            { title: "Legal Protection", desc: "Protects directors and owners from criminal liability in case of fire incidents on premises." }
                        ]
                    }}

                    eligibility={{
                        title: "Checklist for Success",
                        subtitle: "Pre and post-application requirements",
                        list: [
                            { title: "Building Plans", desc: "Detailed layout depicting fire exits, hydrants, and extinguisher placements." },
                            { title: "Safety Recommendations", desc: "Strict adherence to suggestions issued by the fire department during initial review." },
                            { title: "Site Inspection", desc: "Successful physical verification of firefighting equipment by regional fire officers." },
                            { title: "Stability Certificate", desc: "Structural stability proof ensuring the building can handle firefighting water loads." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "Essential paperwork for Fire NOC",
                        list: [
                            { title: "Identity Proof", desc: "ID and address proof of the applicant/authorized signatory." },
                            { title: "Premise Photos", desc: "High-quality photographs of the premises and installed safety gear." },
                            { title: "Wiring Certificate", desc: "Electrical wiring certificate from a licensed electrical contractor." },
                            { title: "Architectural Certs", desc: "Stability certificate and architect's certification of the layout." },
                            { title: "Proprietor Details", desc: "Proof of ownership or valid lease agreement for the property." },
                            { title: "Technical Plans", desc: "Multiple sets of building plans including floor-wise layout and site map." }
                        ]
                    }}

                    process={{
                        title: "Step-by-Step Procedure",
                        subtitle: "Your journey to fire safety clearance",
                        steps: [
                            { step: "01", title: "Application Filing", desc: "Apply online or offline to the State Fire Service Department with detailed building specs." },
                            { step: "02", title: "Technical Review", desc: "Chief Fire Officer (CFO) reviews plans against the National Building Code (NBC) standards." },
                            { step: "03", title: "Field Inspector", desc: "Region-specific inspector is assigned to conduct a thorough on-site verification." },
                            { step: "04", title: "Mock Drills", desc: "Functional testing of hydrants, alarms, and sprinklers during the inspection phase." },
                            { step: "05", title: "NOC Issuance", desc: "Official Fire Clearance Certificate is issued after successful final verification of all systems." }
                        ]
                    }}

                    postCompliance={{
                        title: "Validity & Renewal",
                        subtitle: "Critical safety windows",
                        list: [
                            { title: "Commercial Validity", desc: "NOC is valid for 3 years for business/commercial buildings; requires timely renewal." },
                            { title: "Residential Validity", desc: "Valid for 5 years for multi-story residential apartments with regular maintenance audits." },
                            { title: "Renewal Penalties", desc: "Fines apply after 7 days of delay, increasing from ₹5 to ₹15 per day beyond 15 days." },
                            { title: "Maintenance Audit", desc: "Certified declaration needed during renewal regarding functional electrical installations." }
                        ]
                    }}

                    features={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "10+ Years of Excellence in Fire Licensing",
                        list: [
                            { title: "Liaison Mastery", desc: "Decade-long experience in complex fire safety licensing and coordination with CFO office." },
                            { title: "Inspection Ready", desc: "We pre-audit your premises to ensure 100% success during the official fire department visit." },
                            { title: "Risk Assessment", desc: "Detailed fire load calculations and equipment placement advice for high-risk industries." },
                            { title: "Auto-Renewal Tracking", desc: "Digital systems to track and notify you 90 days before NOC expiration." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "Is Fire Department NOC mandatory?",
                            answer: "Yes, for high-rise buildings (above 15m), commercial units, and educational institutions, it is mandatory under state laws."
                        },
                        {
                            question: "What is the validity of Fire NOC?",
                            answer: "Generally, it is valid for 3 years for commercial buildings and 5 years for residential buildings."
                        },
                        {
                            question: "Difference between Provisional and Final NOC?",
                            answer: "Provisional is issued during plan approval; Final is issued after building completion and safety gear verification."
                        },
                        {
                            question: "What happens if I don't get the NOC?",
                            answer: "Non-compliance can lead to sealing of premises, heavy legal fines, and cancellation of trade licenses."
                        },
                        {
                            question: "Does VyomBiz help with on-site inspections?",
                            answer: "Yes, our experts coordinate the visit and ensuring all equipment is functionally compliant before the inspector arrives."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Safety Success Stories"
                    subtitle="Trusted by businesses for life-saving compliance."
                    reviews={[
                        {
                            name: "Sanjay Sharma",
                            role: "Admin Head",
                            company: "Heritage School",
                            rating: 5,
                            initials: "SS",
                            text: "VyomBiz managed our school's complex Fire NOC renewal flawlessly. Their pre-audit revealed gaps that we fixed before the inspection."
                        },
                        {
                            name: "Rishi Kapoor",
                            role: "Owner",
                            company: "RK Cinemas",
                            rating: 5,
                            initials: "RK",
                            text: "Crucial for our cinema's trade license. The team was very knowledgeable about the National Building Code requirements."
                        },
                        {
                            name: "Meenakshi V.",
                            role: "Secretary",
                            company: "Palm Meadows",
                            rating: 4.8,
                            initials: "MV",
                            text: "They simplified the process for our residential society. Professional handling of the electrical and structural certificates."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default FireDepartmentNOC;
