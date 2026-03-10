import { Link } from "react-router-dom";
import React from "react";
import DetailsLayout from "../common/DetailsLayout";
import { CheckCircle2 } from "lucide-react";

const PublicLimitedOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Company Registration
                        </span>

                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Public Limited Company Registration –
                            <span className="text-[#005a9c]"> An Overview</span>
                        </h2>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Public Limited Company registration allows businesses to raise capital from the public by issuing shares. This business structure is commonly used by large organizations that plan to expand operations and attract investors. Companies can raise funds through an Initial Public Offering (IPO) and list their shares on recognized stock exchanges such as the NSE or BSE.
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The SPICe+ incorporation process introduced by the Ministry of Corporate Affairs enables businesses to complete multiple registrations in a single application. This includes PAN, TAN, DIN, EPFO, ESIC, company name approval, GST registration, and opening a corporate bank account.
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                            Our professionals assist you throughout the entire registration journey, including company name approval, digital signature application, document preparation, and incorporation filing with the Registrar of Companies. With expert guidance, the Public Limited Company registration process becomes simple and efficient.
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/Public Limited Registration/overview...png"
                            alt="Public Limited Company Registration"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


const PublicLimitedAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Key Benefits
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Public Limited Company Registration
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Key advantages of forming a Public Limited Company in India.
                    </p>

                    <div className="mt-10">
                        <img
                            src="/Public Limited Registration/benefits...png"
                            alt="Public Limited Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        {
                            title: "Abundance of Funding",
                            desc: "A Public Limited Company can raise funds by offering shares to the public. Businesses can also obtain capital through bonds, financial institutions, and institutional investors to support business growth."
                        },
                        {
                            title: "Limited Liability",
                            desc: "Shareholders enjoy limited liability protection, which means they are responsible only for the amount invested in the company. Personal assets remain protected from business liabilities."
                        },
                        {
                            title: "Business Expansion",
                            desc: "Access to large public funding enables companies to expand operations, invest in new opportunities, and scale business activities effectively."
                        },
                        {
                            title: "No Minimum Capital Requirement",
                            desc: "Under current company law, there is no mandatory minimum capital requirement. However, businesses often start with a reasonable capital base to build investor confidence."
                        },
                        {
                            title: "No Upper Limit on Members",
                            desc: "A Public Limited Company requires a minimum of seven shareholders, and there is no upper limit on the number of members who can hold shares."
                        },
                        {
                            title: "Perpetual Existence",
                            desc: "The company continues to operate regardless of changes in directors or shareholders, ensuring long-term stability and continuity."
                        },
                        {
                            title: "Enhanced Credibility",
                            desc: "Public Limited Companies are generally considered more credible due to regulatory supervision and financial transparency, making it easier to attract investors and stakeholders."
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

const PublicEligibility = () => {
    const list = [
        { title: "Minimum 7 Members", desc: "At least seven shareholders are required to incorporate a Public Limited Company." },
        { title: "Minimum 3 Directors", desc: "A Public Limited Company must have at least three directors on its board." },
        { title: "Digital Signature", desc: "All directors must obtain Digital Signature Certificates for electronic filing." },
        { title: "Registered Office", desc: "The company must have a registered office address in India." },
        { title: "Company Name Requirement", desc: "The company name must end with the word “Limited”." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Public Limited Company Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Requirements to qualify for a Public Limited registration under MCA guidelines.
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

const PublicDocumentsSection = () => {
    const list = [
        "PAN Card of all Directors",
        "Aadhar Card of all Directors",
        "Latest Bank Statement",
        "Passport Size Photos",
        "Electricity/Water Bill (Office)",
        "NOC from Owner",
        "Rent Agreement",
        "Proof of Ownership (Registry)"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Public Limited Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Digital copies of director IDs, address proofs, and office premises documents.
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

const PublicProcessSection = () => {
    const steps = [
        { title: "DSC & DIN Allotment", desc: "Apply for Digital Signature Certificates and Director Identification Numbers for all directors." },
        { title: "RUN Name Approval", desc: "Submit your proposed company name for approval through the MCA name reservation process." },
        { title: "SPICe+ Documentation", desc: "Prepare the Memorandum of Association (MoA) and Articles of Association (AoA) and file the SPICe+ incorporation application." },
        { title: "ROC Scrutiny", desc: "The Registrar of Companies reviews the submitted documents and verifies regulatory compliance." },
        { title: "COI & PAN/TAN", desc: "After approval, the Certificate of Incorporation is issued along with PAN and TAN for the company." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for Public Limited Company Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Comprehensive 5-step journey to your enterprise launch.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="/Public Limited Registration/process...png" alt="Public Limited Registration Process" className="w-full rounded-lg shadow-sm" />
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
                                Start Public Limited Registration Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PublicFeaturesSection = () => {
    const features = [
        { title: "IPO Readiness", desc: "Our professionals help structure your company in a way that supports future investment and expansion." },
        { title: "Complex Structuring", desc: "Expert assistance in drafting shareholder agreements and company constitution documents." },
        { title: "Strategic Consultation", desc: "Professional guidance on board structure and corporate governance practices." },
        { title: "Fast-Track Approval", desc: "Efficient registration process with timely document preparation and filing." },
        { title: "Global Compliance", desc: "Ensuring compliance with company law and regulatory standards." },
        { title: "Dedicated Relationship Manager", desc: "A dedicated expert assigned to support you throughout the registration process." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Reasons to Consider VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Enterprise-grade legal and financial support.
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

const PublicDetails = () => {
    return (
        <DetailsLayout
            overview={<PublicLimitedOverview />}
            advantages={<PublicLimitedAdvantages />}
            eligibility={<PublicEligibility />}
            documents={<PublicDocumentsSection />}
            process={<PublicProcessSection />}
            features={<PublicFeaturesSection />}
        />
    );
};

export default PublicDetails;
