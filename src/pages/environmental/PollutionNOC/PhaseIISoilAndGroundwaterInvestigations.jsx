import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const PhaseIISoilAndGroundwaterInvestigations = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Phase II Soil & Groundwater"
                    heroTitleSuffix="Investigations (ESA)"
                    heroDescription="Are you concerned about contamination risks on your property? VyomBiz delivers 99% report acceptance with 7–14 day subsurface assessments. Our geologists provide expert sampling, lab analysis, and end-to-end compliance support for your due diligence."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "99.5%", label: "Report Acceptance" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Phase II Investigations —",
                        highlightTitle: "Environmental Assessment",
                        description: [
                            "Phase II Soil and Groundwater Investigations (Phase II ESAs) are critical for evaluating environmental risks associated with industrial and commercial properties. They are typically initiated when a Phase I ESA identifies project-stopping Recognized Environmental Conditions (RECs).",
                            "The process involves geophysical surveys, core drilling, and depth-specific laboratory analysis under stringent ASTM standards. Our goal is to quantify contamination and assess immediate risks to human health or future property developments.",
                            "Worried about the technical hurdles of subsurface investigations? Let VyomBiz geologists eliminate them swiftly and optimize your property compliance strategy."
                        ],
                        whyIdealTitle: "When do I need it?",
                        whyIdealList: [
                            { title: "Property Acquisition", desc: "Detailed due diligence before finalizing a high-value real estate or industrial purchase." },
                            { title: "Risk Evaluation", desc: "Evaluating potential environmental liabilities before a property sale or liquidation." },
                            { title: "Lender Requests", desc: "Mandatory requirement for property refinancing or securing loans from major banks." },
                            { title: "Insurance Audits", desc: "Verification of site conditions for re-insurance or specialized environmental coverage." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of Phase II",
                        subtitle: "Cost Savings & Community Health",
                        list: [
                            { title: "Avoid Treatment Costs", desc: "A clear picture of contamination early on allows for targeted and cost-effective clean-up efforts." },
                            { title: "Risk Mitigation", desc: "Prevents negative legal consequences and ensures full regulatory compliance with state pollution norms." },
                            { title: "Human Health", desc: "Reduces hazards from toxic subsurface contamination that could affect site workers or local residents." },
                            { title: "Clean Environment", desc: "Protects local water tables and prevents chemical migration into neighboring agricultural or urban areas." },
                            { title: "Project Speed", desc: "Identifies show-stoppers early, allowing developers to redesign or remediate without missing deadlines." },
                            { title: "Verified Data", desc: "Provides defensible technical data for negotiations during property transactions or legal disputes." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Required Documentation",
                        subtitle: "Paperwork for a rigorous investigation",
                        list: [
                            { title: "Phase I ESA Report", desc: "The primary document identifying the RECs that trigger the Phase II assessment." },
                            { title: "Sampling Strategy", desc: "A detailed Sampling & Analysis Plan (SAP) developed by our lead geologists." },
                            { title: "Safety Plan", desc: "Site-specific Health & Safety Plan (HASP) ensuring safety during drilling operations." },
                            { title: "Sample Custody Forms", desc: "Legal chain-of-custody forms to maintain the integrity of laboratory samples." },
                            { title: "Topographic Maps", desc: "Detailed maps of the site highlighting past usage zones and current structures." },
                            { title: "Historical Records", desc: "Previous chemical usage logs or underground storage tank (UST) registration data." }
                        ]
                    }}

                    process={{
                        title: "Investigation Procedure",
                        subtitle: "Step-by-step technical analysis",
                        steps: [
                            { step: "01", title: "Scope Design", desc: "Geologists develop a site-specific scope detailing the exact drilling points and lab parameters." },
                            { step: "02", title: "Utility Clearance", desc: "Geophysical surveys (GPR) to identify underground pipes and cables before drilling." },
                            { step: "03", title: "Fieldwork & Sample", desc: "Core drilling and water-table sampling conducted by licensed geologists and drilling crews." },
                            { step: "04", title: "Laboratory Analysis", desc: "Evaluating soil and water samples against authorized screening thresholds for VOCs and heavy metals." },
                            { step: "05", title: "Final Certified Report", desc: "Our geologist documents the data and provides remediation recommendations complying with ASTM norms." }
                        ]
                    }}

                    features={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "Top choice for Subsurface Investigations",
                        list: [
                            { title: "1000+ Completed", desc: "Extensive track record in successful Phase I and Phase II Environmental Site Assessments." },
                            { title: "200+ Experts", desc: "Access to a vast network of in-house environmental geologists and lab technicians." },
                            { title: "99.5% Acceptance", desc: "Maintains an industry-best success rate in delivering accurate and regulator-accepted reports." },
                            { title: "10+ Years Exp", desc: "Decade-long proven experience in property risk management and subsurface modeling." },
                            { title: "Accurate Labs", desc: "Direct partnerships with certified laboratories for precise chemical and vapor analysis." },
                            { title: "Due Diligence Focus", desc: "Our reports are designed to protect investors and lenders from hidden environmental liabilities." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What is Phase II Soil & Groundwater Investigation?",
                            answer: "It includes geophysical surveys, drilling, sampling, and lab analysis to quantify contamination identified in a Phase I assessment."
                        },
                        {
                            question: "Is Phase I mandatory before Phase II?",
                            answer: "Yes, a Phase I ESA is typically required first as it identifies the Recognized Environmental Conditions (RECs) that Phase II must address."
                        },
                        {
                            question: "What triggers a Phase II ESA?",
                            answer: "Potential contamination like underground storage tanks, chemical spills, or past industrial use found during history checks triggers it."
                        },
                        {
                            question: "Is soil gas sampling using vapor pins effective?",
                            answer: "Yes, it is highly effective for identifying VOCs that may migrate into building foundations, a critical part of the risk assessment."
                        },
                        {
                            question: "What is the typical timeline for an investigation?",
                            answer: "Sample collection takes ~14 days, lab analysis ~7 days, and the final certified report is usually ready within 4 weeks."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Property Risk Success"
                    subtitle="Trusted by leading real estate and industrial groups."
                    reviews={[
                        {
                            name: "Akhil Srivastava",
                            role: "Real Estate Director",
                            company: "Urban Heights",
                            rating: 5,
                            initials: "AS",
                            text: "VyomBiz identified heavy metal contamination in our proposed site before purchase. Their report saved us from a multi-crore liability."
                        },
                        {
                            name: "Pooja Hegde",
                            role: "Operations Manager",
                            company: "Indus Logistics",
                            rating: 5,
                            initials: "PH",
                            text: "Professional handling of core drilling and groundwater sampling. The geologist's report was extremely detailed and accepted by our bank."
                        },
                        {
                            name: "Vikram Seth",
                            role: "Owner",
                            company: "Seth Manufacturing",
                            rating: 4.8,
                            initials: "VS",
                            text: "They handled our Phase II with great speed. The utility clearance was done overnight to ensure no disruption to our ongoing factory work."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default PhaseIISoilAndGroundwaterInvestigations;
