import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const UttarPradeshPollutionControlBoard = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Uttar Pradesh"
                    heroTitleSuffix="Pollution Control Board (UPPCB)"
                    heroDescription="Looking for seamless Uttar Pradesh Pollution Control Board (UPPCB) approval? Get expert support to ensure 100% compliance with Uttar Pradesh environmental regulations for your manufacturing or service unit."
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
                        title: "UPPCB Authorization —",
                        highlightTitle: "Regional Compliance",
                        description: [
                            "The Uttar Pradesh Pollution Control Board (UPPCB) is a legal organization established under the Water Act that ensures the implementation of environmental laws within Uttar Pradesh. With 25 regional offices, it manages and controls pollution acts across the state.",
                            "Consent to Establish (CTE) is a mandatory No Objection Certificate (NOC) required from UPPCB before constructing any industrial facility. It affirms that environmental norms have been followed and acts as an enlightening tool for factories to reduce toxicity in critical zones like the Ganga basin.",
                            "Fear of delays in securing your UPPCB approval? Talk to VyomBiz expert consultants today for a seamless and integrated compliance journey."
                        ],
                        whyIdealTitle: "Who Needs It?",
                        whyIdealList: [
                            { title: "Manufacturing Units", desc: "All factories and industrial entities operating within Uttar Pradesh boundaries." },
                            { title: "Waste Management", desc: "E-Waste, Solid Waste, and Hazardous waste management facilities." },
                            { title: "Healthcare Centers", desc: "Hospitals, Clinics, and Laboratories generating bio-medical waste." },
                            { title: "Food Industry", desc: "Dairy plants, slaughterhouses, and larger food processing establishments." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of UPPCB NOC",
                        subtitle: "Environmental & Business Value",
                        list: [
                            { title: "Sustainable Development", desc: "Promotes financial growth alongside ecological protection and social equity in the state." },
                            { title: "Resource Conservation", desc: "Prevents depletion of natural resources while maintaining regional water and air quality." },
                            { title: "Efficient Waste Management", desc: "Permits the implementation of modern waste management practices to reduce and reuse waste." },
                            { title: "Legal Safety", desc: "Ensures full compliance with the Water & Air Acts, protecting you from litigation and shutdowns." },
                            { title: "Consumer Trust", desc: "Boosts brand value by demonstrating adherence to state environmental and health guidelines." },
                            { title: "Eco-Friendly Operations", desc: "Encourages adoption of solar power, CNG, and energy-efficient lighting in workspaces." }
                        ]
                    }}

                    eligibility={{
                        title: "Industry Categories",
                        subtitle: "Pollution Index Scores in UP",
                        list: [
                            { title: "White Category", desc: "Least polluting (Index 0-20). No formal consent certificate needed, only guidelines apply." },
                            { title: "Green Category", desc: "Moderately polluting (Index 21-40). Mandatory CTE and CTO certificates required." },
                            { title: "Orange Category", desc: "High polluting (Index 41-59). Strictly prohibited to commence without consent certificates." },
                            { title: "Red Category", desc: "Excessively polluting (Index > 60). Prohibited or heavily restricted due to hazardous emissions." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Required Documents",
                        subtitle: "Paperwork for CTE/CTO filing",
                        list: [
                            { title: "Identity Docs", desc: "Aadhar and PAN Card of the authorized signatory or business owner." },
                            { title: "Property Proof", desc: "Registered Sale Deed, Lease Deed, or valid Rent Agreement for the site." },
                            { title: "Layout Plan", desc: "Detailed site and business design plan highlighting discharge points." },
                            { title: "Legal Status", desc: "Partnership Deed, MOA/AOA, or Proprietorship declaration for the entity." },
                            { title: "CA Certificate", desc: "Verified Certificate from an auditor regarding project capital investment." },
                            { title: "Water Balance", desc: "Schematic chart of wastewater and underground water balance/usage." }
                        ]
                    }}

                    process={{
                        title: "Registration Procedure",
                        subtitle: "Your path to UPPCB clearance",
                        steps: [
                            { step: "01", title: "Common Application", desc: "Fill out the comprehensive application form online with all industrial specifications." },
                            { step: "02", title: "Digital Submission", desc: "Upload requisite documents including site layout and flowcharts on the UPPCB portal." },
                            { step: "03", title: "Fee Payment", desc: "Make the consolidated application fee payment as prescribed for your category." },
                            { step: "04", title: "Field Inspection", desc: "An authorized board team reviews and inspects the site for field verification." },
                            { step: "05", title: "Grant of NOC", desc: "Obtain the final CTE or CTO certificate within 90 days of successful inspection scrutiny." }
                        ]
                    }}

                    features={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "Your Environmental Consulting Partner",
                        list: [
                            { title: "10+ Years Exp", desc: "Over a decade of core experience in environmental consulting and SPCB liaison." },
                            { title: "300+ Scaled Units", desc: "Successfully assisted major industrial houses in obtaining legacy UPPCB clearances." },
                            { title: "Pre-Screening", desc: "We ensure all documents are audit-ready before final submission to avoid rejections." },
                            { title: "70% Market Share", desc: "Dominant player in the environmental licensing space with a high reputation." },
                            { title: "Auto-Renewal", desc: "Dedicated systems to track and manage your 5-10 year validity and renewal cycles." },
                            { title: "Expert Representation", desc: "In-house team to represent your case during complex technical inspections." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What is the purpose of UPPCB?",
                            answer: "It ensures implementation of environmental laws to reduce air and water pollution, acting as a regulator for industries in UP."
                        },
                        {
                            question: "Who needs a UPPCB consent certificate?",
                            answer: "Manufacturing units, healthcare labs, traders, and waste management entities operating in UP need CTE/CTO."
                        },
                        {
                            question: "How are industries categorized in UP?",
                            answer: "Based on pollution index scores: White (0-20), Green (21-40), Orange (41-59), and Red (Above 60)."
                        },
                        {
                            question: "What is the validity of a UPPCB Certificate?",
                            answer: "Authorization is typically valid for 5 to 10 years depending on the industry category and compliance level."
                        },
                        {
                            question: "How long is the process to get a certificate?",
                            answer: "It involves online filing, fee payment, and field verification, taking approximately 90 days for final grant."
                        }
                    ]}
                />

                <ReviewsSection
                    title="UP Business Success"
                    subtitle="Trusted by factories across Uttar Pradesh."
                    reviews={[
                        {
                            name: "Manish Tiwari",
                            role: "Plant Manager",
                            company: "UP Steels",
                            rating: 5,
                            initials: "MT",
                            text: "VyomBiz handled our Red category inspection flawlessly. Their knowledge of the local regional office was a huge plus."
                        },
                        {
                            name: "Deepak Yadav",
                            role: "Director",
                            company: "Yadav Dairy",
                            rating: 5,
                            initials: "DY",
                            text: "Securing our CTE was easy with their digital support. They managed all the wastewater balance calculations for us."
                        },
                        {
                            name: "Rishi Verma",
                            role: "Owner",
                            company: "Verma Plastics",
                            rating: 4.9,
                            initials: "RV",
                            text: "Very professional in managing Orange category certificates. They helped us set up our STP as per the board's norms."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default UttarPradeshPollutionControlBoard;
