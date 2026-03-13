import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const CGWAWaterBoring = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Central Ground Water Authority"
                    heroTitleSuffix="NOC for Water Boring"
                    heroDescription="Ignoring CGWA NOC requirements could cost you more than you think! Get your CGWA NOC for water boring with VyomBiz's expert guidance. We've helped 500+ businesses secure their NOC with a 100% proven track record."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "100%", label: "Accuracy" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Central Ground Water Authority —",
                        highlightTitle: "NOC Overview",
                        description: [
                            "The Central Ground Water Authority (CGWA) was established by the Government of India under the Environment (Protection) Act, 1986. It plays a key role in regulating and managing the country's groundwater resources.",
                            "A CGWA NOC is a certificate ensuring that any proposed project or activity involving groundwater extraction—whether for commercial, industrial, or domestic purposes—complies with all regulations. It promotes responsible practices like demand-side management and artificial groundwater recharge.",
                            "Say goodbye to complications! Let VyomBiz experts handle your CGWA NOC, leaving no room for worry and stress regarding your water extraction clearance."
                        ],
                        whyIdealTitle: "Who Needs It?",
                        whyIdealList: [
                            { title: "Commercial Units", desc: "Establishments extracting water for commercial purposes must obtain clearance." },
                            { title: "Industrial Plants", desc: "Manufacturing units needing boring for production or facility maintenance." },
                            { title: "Infrastructure Projects", desc: "Large-scale construction and housing projects with water needs." },
                            { title: "Mining Operations", desc: "Operations involving dewatering must comply with CGWA guidelines." }
                        ]
                    }}

                    advantages={{
                        title: "Regulatory Framework",
                        subtitle: "Under Environment Protection Act, 1986",
                        list: [
                            { title: "CGWA Regulated States", desc: "Assam, Ar. Pradesh, Bihar, Chhattisgarh, Gujarat, Jharkhand, MP, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Rajasthan, Sikkim, Tripura, Uttarakhand." },
                            { title: "SGWA Managed States", desc: "Andhra Pradesh, Delhi, Uttar Pradesh, Punjab, Haryana, Goa, Himachal, J&K, Karnataka, Kerala, Tamil Nadu, Telangana, West Bengal." },
                            { title: "Legal Mandate", desc: "Mandatory to prevent over-exploitation and ensure sustainability through regulatory compliances and artificial recharge." },
                            { title: "Sustainability", desc: "Promotes responsible practices like demand-side management and artificial groundwater recharge." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Documentation Required",
                        subtitle: "Essential paperwork for your application",
                        list: [
                            { title: "Industrial Projects", desc: "CTO, Schematic Diagram (Recycling), Non-availability Certificate, Local Authority Consent, Hydrogeological Report." },
                            { title: "Infrastructure Projects", desc: "State Agency Approval, MoEF&CC/SPCB Referral, Completion Certificate, Water Supply Plan, CPHEEO Norms." },
                            { title: "Mining Projects", desc: "SPCB Referral Letter, Geo-tagged Lease Map, Land Lease/Ownership, Govt. Approved Mining Plan, Core/Buffer Zone Report." },
                            { title: "General Documents", desc: "Site layout plan, details of water requirement, and existing extraction points if any." }
                        ]
                    }}

                    process={{
                        title: "Registration Procedure",
                        subtitle: "Step-by-step guidance to secure your NOC",
                        steps: [
                            { step: "01", title: "Eligibility Check", desc: "Fill out the online eligibility form on the CGWA portal with industrial segment and water quality details." },
                            { step: "02", title: "User Registration", desc: "Register as a new user with ID & address proofs to generate login credentials for the portal." },
                            { step: "03", title: "Document Submission", desc: "Upload detailed hydrogeological reports, site layout plans, and recycling flow diagrams." },
                            { step: "04", title: "Review & Field Visit", desc: "Authorities review the application; digital meters are mandated post-completion for tracking." },
                            { step: "05", title: "NOC Issuance", desc: "Approval granted with a validity of 2-5 years; track status online and download the final NOC." }
                        ]
                    }}

                    features={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "Guiding Groundwater extraction reliably since 2018",
                        list: [
                            { title: "Saved ₹50L+", desc: "Helped entrepreneurs save massive costs in groundwater projecting and compliance." },
                            { title: "99.2% Success", desc: "Industry-leading success rate in CGWA Borewell NOC Approvals and renewals." },
                            { title: "500+ Projects", desc: "Successfully managed and acquired Central Ground Water Authority NOCs for diverse clients." },
                            { title: "Water Experts", desc: "Network of 100+ specialists with experience across 50+ regulatory authorities." },
                            { title: "Post-NOC Support", desc: "Guidance on installing digital meters and artificial recharge structures for long-term compliance." },
                            { title: "Hydrogeological Expertise", desc: "Preparation of accurate reports by certified professionals to minimize rejection risks." }
                        ]
                    }}

                    postCompliance={{
                        title: "Post-NOC Compliances",
                        subtitle: "Mandatory steps after obtaining clearance",
                        list: [
                            { title: "Digital Water Meter", desc: "Install a digital water meter immediately to track and report daily extraction levels." },
                            { title: "Artificial Recharge", desc: "Implement artificial recharge structures if abstracting >200-500 m³/day as per guidelines." },
                            { title: "Quality Monitoring", desc: "Conduct bi-annual groundwater quality monitoring from NABL-accredited laboratories." },
                            { title: "Renewal Filing", desc: "Ensure timely renewal filing before the NOC expires to avoid heavy penalties and disconnection." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "Why is NOC required from CGWA?",
                            answer: "It is mandatory to obtain a CGWA NOC to prevent the over-exploitation of groundwater resources and to ensure the sustainability of water through regulatory compliances."
                        },
                        {
                            question: "What is the timeline for Central Ground Water Authority NOC?",
                            answer: "It generally takes around 90 days to process and approve the CGWA application, provided all documentation conforms to the guidelines."
                        },
                        {
                            question: "What is the validity of the CGWA Borewell NOC?",
                            answer: "The validity period ranges from 2 to 5 years depending on the assessment unit (Safe, Semi-Critical, Critical, Over-Exploited) of the project location."
                        },
                        {
                            question: "Are there any exemptions to the CGWA NOC?",
                            answer: "Some states managed by SGWAs have different rules. Industrial extraction almost always requires clearance, while specific domestic users may be exempt."
                        },
                        {
                            question: "What role do hydrogeological reports play?",
                            answer: "They are critical for assessment; these reports evaluate the impact of extraction on local aquifers and suggest mitigation strategies."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by over 500+ businesses for groundwater compliance."
                    reviews={[
                        {
                            name: "Prakash Jain",
                            role: "Infrastructure Lead",
                            company: "Jain Infrastructure",
                            rating: 5,
                            initials: "PJ",
                            text: "Getting the Central Ground Water Authority NOC for our new industrial plant was overwhelming until VyomBiz stepped in. They handled the hydrogeological report seamlessly."
                        },
                        {
                            name: "Meera Kapoor",
                            role: "Factory Owner",
                            company: "Kapoor Textiles",
                            rating: 5,
                            initials: "MK",
                            text: "The team at VyomBiz guided us through the local authority consent and the digital water meter installation. Their expertise saved us a lot of time."
                        },
                        {
                            name: "Rahul Seth",
                            role: "Mining Supervisor",
                            company: "Seth Minerals",
                            rating: 4.9,
                            initials: "RS",
                            text: "Very professional service. They handled our dewatering NOC with complete transparency. Highly recommended for complex groundwater clearance."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default CGWAWaterBoring;
