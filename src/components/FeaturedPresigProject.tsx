import { CodeBracketIcon } from "@heroicons/react/24/outline";
import {
  LuConstruction,
  LuSearch,
  LuShield,
  LuFileText,
  LuZap,
  LuGlobe,
} from "react-icons/lu";
import { FaNpm } from "react-icons/fa";

export const FeaturedPresigProject = () => {
  return (
    <section>
      <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange/10 via-gray-800/80 to-gray-900/80 backdrop-blur-sm border-2 border-orange/30 hover:border-orange/60 transition-all duration-500 hover:scale-[1.01]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(231,161,26,0.1)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
        </div>

        <div className="relative z-10 p-8 lg:p-10">
          {/* Work in Progress Badge - Now in normal flow */}
          <div className="flex justify-start mb-6">
            <div className="px-4 py-2 text-sm font-bold rounded-xl bg-gray-900/80 text-orange backdrop-blur-sm border-2 border-orange/40 shadow-lg flex items-center space-x-2">
              <LuConstruction className="inline-block lg:mr-2 text-lg" />
              <span>Currently Working On</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Content Section */}
            <div className="flex-1 space-y-4">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-white group-hover:text-orange transition-colors duration-300">
                  Presig
                </h2>
                <p className="text-xl text-orange font-semibold">
                  Know what you sign, before you sign.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                  Presig is a developer-first toolkit that decodes Ethereum
                  transactions into plain-English explanations with clear risk
                  insights. Drop it into your dApp, explorer, or dashboard to
                  help users understand what they're about to sign -{" "}
                  <i>before the wallet popup appears.</i>
                </p>
              </div>

              <hr className="border-t border-gray-700/40" />

              {/* Features */}
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3 text-gray-300">
                  <LuSearch className="text-orange text-lg mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Deterministic decoding of ERC-20, NFT, and DeFi transactions
                  </span>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <LuShield className="text-orange text-lg mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Highlight unlimited approvals and unknown spenders
                  </span>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <LuFileText className="text-orange text-lg mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Human-readable summaries instead of raw hex data
                  </span>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <LuZap className="text-orange text-lg mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Embeddable components for React, vanilla JS, or API use
                  </span>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <LuGlobe className="text-orange text-lg mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Chain-agnostic, works across Ethereum and EVM networks
                  </span>
                </div>
              </div>

              <hr className="border-t border-gray-700/40" />

              {/* Tech Stack */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "React",
                    "Ethereum",
                    "Web3",
                    "Node.js",
                    "Viem",
                    "DeFi",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-medium bg-orange/20 text-orange border border-orange/40 rounded-lg hover:bg-orange/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://www.npmjs.com/package/@presig/core"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-2 px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-gray-900 bg-orange rounded-xl hover:bg-orange/90 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <FaNpm className="h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:scale-110 transition-transform duration-200" />
                  <span className="whitespace-nowrap">View on NPM</span>
                </a>
                <a
                  href="https://github.com/jillo-abdullahi/presig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-2 px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-gray-100 bg-gray-700/80 border border-gray-600 rounded-xl hover:bg-gray-600 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <CodeBracketIcon className="h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:scale-110 transition-transform duration-200" />
                  <span className="whitespace-nowrap">View Source</span>
                </a>
              </div>
            </div>

            {/* Visual Element */}
            <div className="w-full lg:w-96 xl:w-[500px] lg:flex-shrink-0">
              <div className="relative">
                {/* Terminal/Code Mockup */}
                <div className="bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-gray-400 text-sm font-mono">
                        presig-demo.ts
                      </span>
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="p-4 font-mono text-xs leading-relaxed space-y-1 overflow-hidden">
                    <div>
                      <span className="text-purple-400">import</span>
                      <span className="text-white ml-1">{"{ explainTx }"}</span>
                      <span className="text-purple-400 ml-1">from</span>
                      <span className="text-green-400 ml-1">
                        "@presig/core";
                      </span>
                    </div>

                    <div className="py-1"></div>

                    <div>
                      <span className="text-blue-400">const</span>
                      <span className="text-white ml-1">result</span>
                      <span className="text-white ml-1">=</span>
                      <span className="text-purple-400 ml-1">await</span>
                      <span className="text-yellow-400 ml-1">explainTx</span>
                      <span className="text-white">(</span>
                    </div>

                    <div className="ml-2">
                      <span className="text-white">{"{"}</span>
                    </div>

                    <div className="ml-4">
                      <span className="text-white">chainId:</span>
                      <span className="text-orange ml-1">1</span>
                      <span className="text-white">,</span>
                    </div>

                    <div className="ml-4">
                      <span className="text-white">to:</span>
                      <span className="text-green-400 ml-1">
                        "0xA0b86a33E6441b8bE791..."
                      </span>
                      <span className="text-white">,</span>
                    </div>

                    <div className="ml-4">
                      <span className="text-white">data:</span>
                      <span className="text-green-400 ml-1">
                        "0x095ea7b3000000..."
                      </span>
                    </div>

                    <div className="ml-2">
                      <span className="text-white">{"}"}</span>
                      <span className="text-white">,</span>
                      <span className="text-white ml-1">client</span>
                      <span className="text-white">);</span>
                    </div>

                    <div className="py-1"></div>

                    <div className="text-gray-500">// Response:</div>

                    <div>
                      <span className="text-white">{"{"}</span>
                    </div>

                    <div className="ml-2">
                      <span className="text-white">title:</span>
                      <span className="text-green-400 ml-1">
                        "Approve unlimited USDC"
                      </span>
                      <span className="text-white">,</span>
                    </div>

                    <div className="ml-2">
                      <span className="text-white">riskLevel:</span>
                      <span className="text-red-400 ml-1">
                        <span className="text-red-400 mr-1">"⚠️</span>high"
                      </span>
                    </div>

                    <div className="ml-2">
                      <span className="text-white">summary:</span>
                      <span className="text-green-400 ml-1">
                        "Grant permission to..."
                      </span>
                    </div>

                    <div>
                      <span className="text-white">{"}"}</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-3 -right-4 w-8 h-8 bg-orange/20 rounded-full animate-bounce delay-300"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500/20 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
