import { Link } from "react-router-dom";
import React from "react";
import DetailsLayout from "../common/DetailsLayout";
import { CheckCircle2 } from "lucide-react";

const CompanyRegistrationOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Structure
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Private Limited Company Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A Private Limited Company is one of the most preferred business structures in India because it provides legal recognition and limited liability protection to its owners. In this structure, the company is treated as a separate legal entity, which means the personal assets of shareholders remain protected from business liabilities. According to the Companies Act, 2013, a private limited company must have at least two shareholders and can have up to 200 shareholders.                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            This structure is ideal for startups and growing businesses that plan to raise funds and expand operations over time. Shareholders can transfer their shares based on the rules mentioned in the Articles of Association (AoA). However, unlike public companies, private limited companies cannot issue shares to the public or list them on the stock exchange.                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end items-center">
                        <img
                            src="/Company Registration/overview.png"
                            alt="Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="grid lg:grid-cols-2 gap-10 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Advantages of Registering
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-5">
                        Registering a Private Limited Company offers several advantages such as legal identity, limited liability protection, and improved business credibility. These benefits make it one of the most reliable structures for entrepreneurs and growing businesses. Below are some key advantages of company registration.                    </p>
                    <div className="mt-10 flex justify-center items-center">
                        <img
                            src="/Company Registration/advantages.png"
                            alt="Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Limited Liability Protection", desc: "One of the major advantages of a Private Limited Company is limited liability protection. Shareholders are only responsible for the amount they invest in the company, which means their personal assets remain protected from business debts and liabilities." },
                        { title: "Greater Credibility", desc: "A registered company builds strong credibility in the market. Customers, suppliers, and investors generally trust legally registered businesses more than unregistered entities." },
                        { title: "Funding Access", desc: "Access to funding becomes easier for a Private Limited Company. Businesses can raise capital through investors, financial institutions, or by issuing shares to support expansion and operational growth." },
                        { title: "Perpetual Succession", desc: "A Private Limited Company enjoys perpetual succession, meaning the company continues to exist even if directors or shareholders change. The business remains operational regardless of ownership transitions." },
                        { title: "Separate Legal Entity", desc: "A Private Limited Company is treated as a separate legal entity from its owners. It can own assets, sign contracts, and take legal action independently in its own name." },
                        { title: "Tax Benefits", desc: "Private Limited Companies may benefit from various tax deductions and government incentives depending on their business activities. These benefits help companies manage finances efficiently and support long-term growth." }
                    ].map((item, index) => (
                        <div key={index} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
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

const CompanyEligibility = () => {
    const list = [
        { title: "2 Directors", desc: "A minimum of two directors is required, and at least one director must be a resident of India." },
        { title: "2 Shareholders", desc: "At least two shareholders are required to incorporate a Private Limited Company." },
        { title: "Registered Address", desc: "A registered office address within India is mandatory for company registration." },
        { title: "Digital ID", desc: "Mandatory Digital Signature and Director Identification Numbers." },
        { title: "Capital Norms", desc: "No minimum capital requirement (₹1 Lakh recommended for credibility)." }
    ];
    return (
        <section className="w-full py-12 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                            Eligibility Criteria for Private Limited Company Registration
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                            The legal foundation requires meeting these baseline criteria defined in the Companies Act 2013.
                        </p>
                        <div className="space-y-5">
                            {list.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1 bg-[#e6f0fa] p-1 rounded-full text-[#005a9c] shrink-0 self-start">
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <div>
                                        <span className="font-semibold text-[#072b47] text-lg block">{item.title}</span>
                                        <span className="text-slate-600 text-base">{item.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10">
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]">
                                Check Your Eligibility Now
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end items-center order-first lg:order-last">
                        <img
                            src="/Company Registration/eligibility.png"
                            alt="Company Eligibility"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyDocumentsSection = () => {
    const list = [
        "PAN Card Copy",
        "Aadhar Card Copy",
        "Passport Size Photo",
        "Voter ID / Passport",
        "Latest Utility Bill (Office)",
        "No Objection (NOC)",
        "Rental Agreement",
        "Ownership Proof"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">
                    <div className="flex justify-center lg:justify-start items-center">
                        <img
                            src="/Company Registration/documents.png"
                            alt="Documents Required"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                            Documents Required for Company Registration
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                            Digital copies of ID proofs and office documentation for the SPICe+ filing.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {list.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 shadow-sm hover:bg-white transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-[#005a9c]" />
                                    <span className="text-[16px] text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyProcessSection = () => {
    const steps = [
        { title: "DSC & DIN", desc: "Apply for Digital Signature Certificates (DSC) and Director Identification Numbers (DIN) for all directors." },
        { title: "Name Approval", desc: "Submit your preferred company name for approval with the Registrar of Companies (ROC)." },
        { title: "Documentation", desc: "Prepare incorporation documents such as the Memorandum of Association (MoA) and Articles of Association (AoA)." },
        { title: "Incorporation", desc: "Submit the incorporation application with the Ministry of Corporate Affairs to receive the Certificate of Incorporation." }
    ];
    return (
        <section className="w-full py-10 bg-[#f0f4f8]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for Private Limited Company Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Simplified 4-stage journey to your incorporation.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1 flex items-center justify-center">
                        <img
                            src="/Company Registration/Process.png"
                            alt="Company Registration Process"
                            className="w-full rounded-lg shadow-sm"
                        />
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
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] inline-block text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Company Registration Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyFeaturesSection = () => {
    const features = [
        { title: "Senior Consultation", desc: "Professional consultation to help you choose the right business structure and capital plan." },
        { title: "Name Availability", desc: "Detailed name availability checks to ensure your company name is unique and compliant." },
        { title: "Compliance Support", desc: "Post-incorporation support for PAN, TAN, GST and bank accounts." },
        { title: "Startup Registration", desc: "Guidance on Startup India recognition and associated tax holidays." },
        { title: "Zero Hassle", desc: "We manage the entire online documentation and filing process." },
        { title: "Direct Expert Access", desc: "Direct guidance from experienced Chartered Accountants and Company Secretaries." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                            Service Features & Support
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-10">
                            End-to-end support for your company formation with expert guidance at every step.
                        </p>
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4 p-5 border border-slate-100 rounded-2xl hover:shadow-md transition-all group hover:border-[#005a9c]/20">
                                    <div className="text-xl font-bold text-[#005a9c] group-hover:scale-110 transition-transform">{index + 1}.</div>
                                    <div>
                                        <h3 className="text-[18px] font-semibold text-[#072b47]">{feature.title}</h3>
                                        <p className="text-slate-600 mt-1 leading-relaxed text-[15px]">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end items-center">
                        <img
                            src="/Company Registration/support.png"
                            alt="Service Features"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const RegistrationDetails = () => {
    return (
        <DetailsLayout
            overview={<CompanyRegistrationOverview />}
            whyRequired={{
                title: "Why is Company Registration Required?",
                imageUrl: "/company-registration-why.webp",
                content: "Company registration is a process that gives legal status to a business and establishes its identity, separate from its owners. It boosts the organization's credibility, making it easier to gain the trust of the customers, suppliers and investors. It also opens the gateway to secure funding and facilitates protecting intellectual property rights. Company registration in India guarantees perpetual succession, enabling the business to operate beyond the founders' participation. Registering a business is a step that gives the company a formal and legal standing, helps in its expansion and provides financial stability."
            }}
            advantages={<CompanyRegistrationAdvantages />}
            eligibility={<CompanyEligibility />}
            documents={<CompanyDocumentsSection />}
            process={<CompanyProcessSection />}
            features={<CompanyFeaturesSection />}
        />
    );
};

export default RegistrationDetails;
