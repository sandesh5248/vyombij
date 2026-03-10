import { Link } from "react-router-dom";
import React from "react";
import DetailsLayout from "../common/DetailsLayout";
import { CheckCircle2 } from "lucide-react";

const OPCRegistrationOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Company Registration
                        </span>

                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            One Person Company Registration –
                            <span className="text-[#005a9c]"> An Overview</span>
                        </h2>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Are you a solo entrepreneur looking to start your own business? One Person Company registration is an ideal option for individual founders. It offers benefits such as simple incorporation, reduced compliance requirements, and complete ownership for the founder.
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Introduced under the Companies Act, 2013, the OPC structure allows a single entrepreneur to operate a business with a corporate legal identity.
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Under Section 2(62) of the Companies Act, 2013, a single individual can establish an OPC with one member and one director, ensuring complete control with limited liability protection.
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                            Need assistance with OPC registration in India? Our experts provide quick, smooth, and cost-effective company registration support.
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/OPC Registration/overview....png"
                            alt="OPC Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


const OPCRegistrationAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Key Benefits
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of OPC Registration Online
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Key advantages available to entrepreneurs forming a One Person Company in India.
                    </p>

                    <div className="mt-10">
                        <img
                            src="/OPC Registration/benefits.png"
                            alt="OPC Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        {
                            title: "Simple Incorporation Process",
                            desc: "The OPC incorporation process is simple and requires only one member along with a nominee. There is no minimum paid-up capital requirement, allowing flexibility in starting the business."
                        },
                        {
                            title: "Access to Easy Fund Raising",
                            desc: "Being a registered company, OPCs may attract funding from investors, incubators, and financial institutions. Banks often find OPCs more reliable than sole proprietorships due to better governance structure."
                        },
                        {
                            title: "Fewer Compliances",
                            desc: "OPCs benefit from reduced compliance requirements and certain exemptions under the Companies Act, 2013."
                        },
                        {
                            title: "Flexible Decision Making & Easy Management",
                            desc: "With only one member, decisions can be taken quickly without internal conflicts. Decisions can be documented in the minute book, making management simple and efficient."
                        },
                        {
                            title: "Limited Liability",
                            desc: "An OPC has a separate legal identity. The owner’s liability is limited to their shareholding, protecting personal assets from business risks."
                        },
                        {
                            title: "Exclusive Benefits",
                            desc: "OPCs receive certain privileges and regulatory relaxations, making them suitable for individual entrepreneurs."
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <h3 className="text-[20px] font-semibold text-[#072b47] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const OPCEligibility = () => {
    const list = [
        { title: "Natural Person", desc: "Only a natural person who is an Indian citizen and resident can incorporate an OPC." },
        { title: "Single OPC Only", desc: "An individual is allowed to incorporate only one OPC at a time." },
        { title: "Nominee Required", desc: "A nominee must be appointed during the incorporation process." },
        { title: "No Minors", desc: "A minor is not permitted to become a member or nominee of an OPC." },
        { title: "Activity Limit", desc: "OPCs are not permitted to carry out Non-Banking Financial Investment activities." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for OPC Registration in India?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    The legal criteria you must meet to form an Indian One Person Company.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {list.map((item, i) => (
                        <div key={i} className="flex gap-3 p-4 bg-[#e6f0fa] rounded-xl">
                            <CheckCircle2 className="text-[#005a9c] shrink-0 mt-0.5" size={20} />
                            <div>
                                <span className="font-semibold text-[#072b47]">{item.title}</span>
                                <span className="text-slate-600"> – {item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Check Your Eligibility Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

const OPCDocumentsSection = () => {
    const list = [
        "PAN Card Copy",
        "Aadhar Card Copy",
        "Latest Bank Statement",
        "Passport Size Photo",
        "Electricity Bill (Office)",
        "NOC from Owner",
        "Rent Agreement",
        "Proof of Ownership"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for OPC Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Digital copies of documents for the founder and the registered office address are required.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {list.map((item, i) => (
                        <div key={i} className="flex gap-3 p-4 bg-[#e6f0fa] rounded-xl">
                            <CheckCircle2 className="text-[#005a9c] shrink-0 mt-0.5" size={20} />
                            <span className="text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const OPCProcessSection = () => {
    const steps = [
        { title: "DSC & DIN", desc: "Apply for a Digital Signature Certificate and Director Identification Number." },
        { title: "Name Reservation", desc: "Reserve a suitable company name through the MCA portal." },
        { title: "Documentation", desc: "Prepare and sign the MoA, AoA, and nominee consent documents." },
        { title: "Integrated Filing", desc: "File the SPICe+ incorporation forms with the required office address proof." },
        { title: "Final Certificate", desc: "Receive the Certificate of Incorporation along with PAN and TAN." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for OPC Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Getting your OPC live in 5 simple stages.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="/OPC Registration/process. ...png" alt="OPC Registration Process" className="w-full rounded-lg shadow-sm" />
                    </div>
                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">{index + 1}.</div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">{step.title}</h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200" />
                        <div className="mt-12 text-center">
                            <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/general-info" className="bg-[#f59e0b] hover:bg-[#d97706] inline-block text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start OPC Registration Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const OPCFeaturesSection = () => {
    const features = [
        { title: "Expert Consultation", desc: "Expert guidance to choose the right legal structure for your business." },
        { title: "Fast Delivery", desc: "Efficient processes ensuring timely incorporation." },
        { title: "Legal Documentation", desc: "Professional preparation of MoA, AoA, and nominee documentation." },
        { title: "Post-Reg Support", desc: "Support with GST registration and ongoing company compliance." },
        { title: "Transparent Pricing", desc: "Transparent pricing with no hidden charges." },
        { title: "Dedicated Support", desc: "Dedicated assistance from experienced business consultants." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Reasons to Consider VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expert support for your solo business venture.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex gap-3 p-5 bg-[#e6f0fa] rounded-xl">
                            <CheckCircle2 className="text-[#005a9c] shrink-0 mt-0.5" size={20} />
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{feature.title}</h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const OPCDetails = () => {
    return (
        <DetailsLayout
            overview={<OPCRegistrationOverview />}
            advantages={<OPCRegistrationAdvantages />}
            eligibility={<OPCEligibility />}
            documents={<OPCDocumentsSection />}
            process={<OPCProcessSection />}
            features={<OPCFeaturesSection />}
        />
    );
};

export default OPCDetails;
