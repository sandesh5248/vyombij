import { Link } from "react-router-dom";
import React from "react";
import DetailsLayout from "../common/DetailsLayout";
import { CheckCircle2 } from "lucide-react";

const SoleProprietorshipOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Solo Business
                        </span>

                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Sole Proprietorship Registration –
                            <span className="text-[#005a9c]"> An Overview</span>
                        </h2>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A Sole Proprietorship is the simplest and most widely used business structure in India, owned and managed by a single individual. Also referred to as a sole trader or individual business, it is an ideal option for freelancers, small businesses, and independent entrepreneurs. This structure is commonly preferred by entrepreneurs who want complete control over their business operations. Although the business may hire employees, it is not considered a separate legal entity from its owner.
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Since there is no legal separation between the owner and the business, the owner is fully responsible for profits, debts, and liabilities. Unlike companies or LLPs, sole proprietorships do not require formal incorporation with the Ministry of Corporate Affairs (MCA). However, obtaining licenses such as GST registration, Shop and Establishment License, or other required permits is necessary for legal operation.
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/Sole Proprietor Registration/overview.....png"
                            alt="Sole Proprietorship Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


const SoleProprietorshipAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Key Advantages
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Key Advantages
                    </h2>

                    <div className="mt-10">
                        <img
                            src="/Sole Proprietor Registration/benefits.jpeg"
                            alt="Sole Proprietorship Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    {[
                        {
                            title: "Simple Registration",
                            desc: "The process of setting up a sole proprietorship is simple and involves minimal paperwork. It does not require formal incorporation with the Ministry of Corporate Affairs (MCA). This allows entrepreneurs to start their business quickly without complex legal procedures."
                        },
                        {
                            title: "Business Control",
                            desc: "A sole proprietorship gives the owner complete control over business decisions. The owner can independently make decisions, manage operations, and retain all profits. This flexibility helps the business respond quickly to market changes and opportunities."
                        },
                        {
                            title: "Cost Effective",
                            desc: "A sole proprietorship is cost-effective and does not require expensive registration procedures. Because the setup cost is low, it is a popular choice for individuals starting a small business."
                        },
                        {
                            title: "Tax Benefits",
                            desc: "The taxation process for a sole proprietorship is simple. Business income is treated as the owner’s personal income. There is no separate corporate tax applicable to the business."
                        },
                        {
                            title: "Low Compliance Needs",
                            desc: "Compared to companies and LLPs, proprietorships have minimal compliance requirements. Fewer regulatory obligations make it easier for owners to focus on running and growing their business."
                        },
                        {
                            title: "Access to Profits",
                            desc: "A sole proprietorship does not have a separate legal identity. Since the owner and business are the same entity, the owner receives all profits directly. The owner retains full control over the income generated by the business."
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

const SoleProprietorshipEligibility = () => {
    const list = [
        { title: "Natural Person", desc: "Only an individual person can start a sole proprietorship business." },
        { title: "Indian Resident", desc: "The owner should be a resident of India." },
        { title: "Valid PAN", desc: "The business operates using the owner’s personal PAN number." },
        { title: "Registered Office", desc: "A physical business address is required, which can also be residential." },
        { title: "Trade License", desc: "Licenses may be required depending on the business activity and location." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Sole Proprietorship Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Simple eligibility criteria for single-owner businesses in India.
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

const SoleProprietorshipDocumentsSection = () => {
    const list = [
        "PAN Card of Owner",
        "Aadhar Card of Owner",
        "Office Address Proof",
        "Rental Agreement (if any)",
        "Latest Utility Bill",
        "NOC from Owner",
        "Passport Size Photos",
        "MSME/Udyam Certificate"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Sole Proprietorship Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Digital copies of documents are required to complete the registration process.
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

const SoleProprietorshipProcessSection = () => {
    const steps = [
        { title: "Name Selection", desc: "Choose a suitable business name for your proprietorship." },
        { title: "Document Check", desc: "Verify PAN and Aadhaar details for registration and licensing." },
        { title: "GST/Udyam Filing", desc: "Apply for required registrations such as GST or Udyam." },
        { title: "Bank Verification", desc: "Open a current bank account using your business documents." },
        { title: "Live Operations", desc: "Start business operations with the required legal registrations in place." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for Sole Proprietorship Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Smooth 5-Step Journey to launch your vision.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="/Sole Proprietor Registration/process ....jpg" alt="Sole Proprietorship Registration Process" className="w-full rounded-lg shadow-sm" />
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
                                Start Sole Proprietorship Registration Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SoleProprietorshipFeaturesSection = () => {
    const features = [
        { title: "Expert Consultation", desc: "Guidance on licenses required for your specific type of business." },
        { title: "Time Efficiency", desc: "Our team manages the entire registration process on your behalf." },
        { title: "Paperwork Excellence", desc: "Accurate documentation to reduce the chances of application rejection." },
        { title: "Compliance Management", desc: "Support with smooth compliance and timely tax filings." },
        { title: "Customized Solutions", desc: "Customized solutions suitable for small businesses and growing enterprises." },
        { title: "Market Leadership", desc: "Years of experience helping entrepreneurs set up their businesses successfully." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Reasons to Consider VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Join the market leaders who trust us with their setup.
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

const SoleProprietorshipDetails = () => {
    return (
        <DetailsLayout
            overview={<SoleProprietorshipOverview />}
            advantages={<SoleProprietorshipAdvantages />}
            eligibility={<SoleProprietorshipEligibility />}
            documents={<SoleProprietorshipDocumentsSection />}
            process={<SoleProprietorshipProcessSection />}
            features={<SoleProprietorshipFeaturesSection />}
        />
    );
};

export default SoleProprietorshipDetails;
