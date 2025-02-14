import React, { useState } from "react";
// Import the CSS file

function Content() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-4xl p-6 bg-white shadow-md rounded-lg min-h-screen container">
        <h1>Memo</h1>
        <h2>Inverting the Crypto Ecosystem Playbook</h2>
        <h3>Lucid - the Consumer Crypto Experience Layer</h3>
        <h3>The Vision</h3>
        <p className="vision-container">
            An internet of value where people can earn, save and spend onchain, regardless of where they access the internet from. A new economy of coordinated global communities that achieve goals in ways not possible before the advent of programmable money. 
        </p>
        <h2>Executive Summary</h2>
        <ul>
            <div 
            style={{ cursor: "pointer"}} 
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? "▲" : "▼"} Golden Era of Crypto 
            </div>
            {isOpen && (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <p>
                We are entering the golden era of crypto. Infrastructure is
                abundantly available, blockspace has become a commodity and the
                bottleneck to growing the pie is distribution and not technical
                improvements at the base layer. This new reality now allows for a
                different type of founder to enter and thrive in the crypto
                industry: the consumer app founder.
                <br />
                <br />
                In this new paradigm, power shifts from technological capabilities
                to storytelling, branding, user experience, and design. Blockchain
                infrastructure is going to be increasingly abstracted away such
                that the average user never will know that they are using a
                blockchain, much less which one. Therefore, the determining factor
                of which blockchain protocol will end up surviving and thriving
                will be their respective onchain GDP. Despite billions of dollars
                in investments, blockchain protocols have struggled to translate
                those funds into tangible and widely used products and services.
                This suggests a series of flaws in the strategy with which this
                has been pursued in the past.
                <br />
                <br />
                Lucid proposes a radically different path towards attaining an
                onchain economy, by building it from the ground up, instead of
                from the top down. It is inverting the crypto ecosystem
                go-to-market playbook, by building out an onchain economy first,
                ecosystem second, and infrastructure third.
                <br />
                <br />
                Instead of relying on external teams to realize the decentralized
                future on Lucid's chain, we move fast and centralized to
                systematically attain distribution by building viral and fleeting
                consumer crypto experiences that leverage shared components, smart
                contracts, and entry points. Instead of building our chain and
                testnet first, we build chain-abstracted products leveraging the
                abundantly available infrastructure. Infrastructure and tokenomics
                are too important to build pre-PMF and without the benefit of
                hindsight.
                </p>
            </div>
            )}
        </ul>
        <h2>The Problem - the Traditional Ecosystem Playbook</h2>
        <ul>
            <li>Fundraising</li>
            <li>Ecosystem Funds have proven ineffective</li>
            <li>Moving from Infrastructure to Consumer</li>
        </ul>
        <h2>Introducing Lucid</h2>
        <div className="flex justify-center mb-4">
            <img src="/lucid-intro-layer.png" />
        </div>
        <ul>
            <li>Economy First, Ecosystem Second, Infrastructure Third</li>
        </ul>
        <p>At Lucid, the approach we have adopted towards the go-to-market strategy for Layer 1 fundamentally diverges from the conventional playbook. We are building a systematic effort to build a brand around a smart contract enabled economy of products of services, from the bottom up around three core thesis:</p>
        <p>We believe consumer crypto will be:</p>
        <p>1. mobile</p>
        <p>2. viral with a short shelf life</p>
        <p>3. comprised of a handful of smart contract and web2 primitives</p>
        <p>Instead of outsourcing the end user acquisition via grants, we aim to use an app studio as a go to market for our economy, ecosystem and infrastructure. In this phase of the industry, where we have all the required infrastructure readily available, we will take a systematic approach toward creating consumer experiences by leveraging a growing in house built component and smart contract library, to create new 0-1 products at a continuously faster and cheaper rate. This allows us to use capital more effectively than an ecosystem fund and more importantly are able to retain learnings to build upon the successes and failures of each additional product we take to market.
        </p>
        <h2>The Wallet as the Experience Layer</h2>
        <ul>
            <li>Today's wallets are not optimized for mobile experiences</li>
        </ul>

        {/* Video Section */}
        <video controls width="100%">
            <source src="/videos/lucid-tutorial.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

    </div>
  );
}

export default Content;
