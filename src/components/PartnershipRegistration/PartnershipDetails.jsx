import { Link } from "react-router-dom";
import React from "react";
import DetailsLayout from "../common/DetailsLayout";
import { CheckCircle2 } from "lucide-react";

const PartnershipRegistrationOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Company Registration
                        </span>

                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Partnership Firm Registration Online -
                            <span className="text-[#005a9c]"> An Overview</span>
                        </h2>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Partnership firms in India are governed by the Indian Partnership Act, 1932. The law defines the rights, duties, profit-sharing arrangements, and liabilities of partners involved in a business partnership. This business structure allows two or more individuals to operate a business together with shared responsibilities and profits.
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            At VyomBiz, our legal professionals assist you with drafting the partnership deed, completing documentation, applying for firm registration, and obtaining essential registrations such as PAN and GST. We also guide you through post-registration compliance requirements.
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                            VyomBiz provides partnership firm registration services across major Indian cities including Mumbai, Delhi, Bengaluru, Pune, Hyderabad, Chennai, and other business hubs.
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/Partnership Firm Registration/overview.....jpg"
                            alt="Partnership Firm Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


const PartnershipRegistrationAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Key Benefits
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Partnership Firm Registration Online
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Here are some key advantages of registering a partnership firm in India.
                    </p>

                    <div className="mt-10">
                        <img
                            src="/Partnership Firm Registration/benefits.....jpg"
                            alt="Partnership Firm Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    {[
                        {
                            title: "Ease of Registration",
                            desc: "The process of forming a partnership firm is relatively simple compared to other business structures like private limited companies. It mainly involves drafting a partnership deed and completing basic registration procedures. Partners are required to prepare and notarize a partnership deed and may register it with the Registrar of Firms depending on state regulations."
                        },
                        {
                            title: "Flexible Compliance",
                            desc: "Partnership firms generally have fewer compliance requirements compared to corporate entities. Partners are not required to obtain digital signatures or director identification numbers. Partners can manage operations with greater flexibility and can dissolve the firm with mutual agreement when required."
                        },
                        {
                            title: "100% Control in Decision Making",
                            desc: "In a partnership firm, partners typically share equal authority in business decisions unless otherwise specified in the partnership deed. The decision-making structure can be defined mutually by partners within the deed."
                        },
                        {
                            title: "Equal Share in Profits",
                            desc: "Partners share profits based on the ratio mentioned in the partnership deed, allowing flexibility in defining profit distribution."
                        },
                        {
                            title: "Not Liable for Corporate Tax",
                            desc: "Partnership firms are taxed under partnership taxation rules, and partners pay taxes on their share of income according to applicable tax laws."
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

const PartnershipEligibility = () => {
    const list = [
        { title: "Minimum 2 Partners", desc: "A partnership firm must have at least two individuals to start the business." },
        { title: "Business Name", desc: "Choose a unique firm name that does not conflict with existing business or trademark names." },
        { title: "Partnership Deed", desc: "A legal agreement defining partner roles, profit sharing, and responsibilities." },
        { title: "Registered Address", desc: "A valid office address is required for firm registration." },
        { title: "Capital Contribution", desc: "The partnership deed should clearly specify the investment made by each partner." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Partnership Firm Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Basic legal requirements to start your partnership firm.
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

const PartnershipDocumentsSection = () => {
    const list = [
        "PAN Card of Partners",
        "Aadhar Card of Partners",
        "Voter ID / Passport",
        "Passport Size Photos",
        "Electricity Bill (Office)",
        "Rent Agreement",
        "NOC from Owner",
        "Registry Copy (Property)"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Partnership Firm Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Digital copies of personal proofs and office documentation.
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

const PartnershipProcessSection = () => {
    const steps = [
        { title: "Partner Agreement", desc: "Partners mutually decide on business objectives, capital contribution, and profit-sharing structure." },
        { title: "Deed Drafting", desc: "Preparation of a legally valid partnership deed covering all operational terms." },
        { title: "Execution", desc: "Execution of the deed on stamp paper and signing by all partners." },
        { title: "Registration", desc: "Submitting the registration application to the Registrar of Firms if partners choose to register the firm." },
        { title: "Tax IDs", desc: "Applying for PAN and opening a current bank account for business transactions." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for Partnership Firm Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Simple steps to formalize your partnership.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="/Partnership Firm Registration/process.....jpg" alt="Partnership Registration Process" className="w-full rounded-lg shadow-sm" />
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
                                Start Partnership Registration Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PartnershipFeaturesSection = () => {
    const features = [
        { title: "Perfect Deed Drafting", desc: "Professionally drafted partnership deeds tailored to your business requirements." },
        { title: "Tax Optimization", desc: "Expert advice on profit distribution and partner remuneration planning." },
        { title: "Fast Processing", desc: "Quick assistance to complete registration and start business operations faster." },
        { title: "Regulatory Knowledge", desc: "Knowledge of partnership laws and state-level registration procedures." },
        { title: "Zero Paperwork Stress", desc: "Support with documentation, notarization, and stamp duty procedures." },
        { title: "Post-Registration", desc: "Post-registration assistance for GST registration, trademarks, and additional licenses." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Reasons to Consider VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your partner in building a strong legal foundation.
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

const PartnershipDetails = () => {
    return (
        <DetailsLayout
            overview={<PartnershipRegistrationOverview />}
            advantages={<PartnershipRegistrationAdvantages />}
            eligibility={<PartnershipEligibility />}
            documents={<PartnershipDocumentsSection />}
            process={<PartnershipProcessSection />}
            features={<PartnershipFeaturesSection />}
        />
    );
};

export default PartnershipDetails;
