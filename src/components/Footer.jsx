import Logo from "../assets/react.svg";

const Footer = () => {
    return (
        <footer className="bg-[#121018] text-gray-300">
            {/* Top grid section */}
            <div className="container max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo */}
                <div className="flex items-start">
                    <img
                        src={Logo}
                        alt="ICP Dashboard"
                        className="h-8 mr-3"
                    />
                    <span className="text-white  text-sm font-bold">ICP Dashboard</span>
                </div>

                {/* ICP Dashboard Links */}
                <div>
                    <h3 className="font-semibold text-white mb-3 text-sm">ICP Dashboard</h3>
                    <ul className="space-y-2">
                        {[
                            "Home",
                            "Governance",
                            "Neurons",
                            "Subnets",
                            "Data Centers",
                            "Releases",
                            "Canisters",
                            "ICP Transactions",
                            "Circulation",
                            "Node Providers",
                            "Node Machines",
                            "SNS",
                            "SNS Tokenomics Analyzer",
                            "Chain Fusion",
                            "Bitcoin",
                            "Ethereum",
                            "Changelog",
                        ].map((item) => (
                            <li key={item}>
                                <a href="#" className="hover:text-white hover:underline transition-colors text-sm">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Internet Computer Links */}
                <div>
                    <h3 className="font-semibold text-white mb-3 text-sm">Internet Computer</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-white hover:underline transition-colors text-sm">
                                Internet Computer Home ↗
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white hover:underline transition-colors text-sm">
                                Run a Node Machine ↗
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white hover:underline transition-colors text-sm">
                                Submit a Proposal ↗
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <h3 className="font-semibold text-white mb-3 text-sm">Support</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-white hover:underline transition-colors text-sm">
                                IC Support ↗
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <a href="#" className="hover:text-white hover:underline transition-colors text-sm">
                                View Status ↗
                            </a>
                            <span className="bg-white text-black text-xs font-medium px-2 py-0.5 rounded-full text-sm">
                                Working
                            </span>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white hover:underline transition-colors text-sm">
                                IC Wiki ↗
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white hover:underline transition-colors text-sm">
                                Developer Forum ↗
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white hover:underline transition-colors text-sm">
                                Developer Grants ↗
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Divider & Copyright */}
            <div className="max-w-6xl mx-auto border-t border-gray-700">
                <div className="container mx-auto px-4 py-6">
                    <p className="text-sm text-gray-400">
                        © 2025 Internet Computer
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;