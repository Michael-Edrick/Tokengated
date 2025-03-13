import React, { useState, useContext, useEffect } from "react";
import { NearContext } from "@/context";
import { AlertCircle, Star } from "lucide-react"; // Import icons from Lucide
import { useRouter } from 'next/router';
import useAnalyticsHook from "@/hooks/blockchain/useAnalyticsHook";

function AlertBox({ icon, text }) {
    return (
      <div className="flex items-center p-4 mb-4 text-gray-800 bg-gray-100 rounded-lg" style={{backgroundColor: "#f5f2f2"}}>
        <span className="mr-3 text-yellow-500">{icon}</span>
        <p className="text-sm">{text}</p>
      </div>
    );
}

function Content() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const { signedAccountId, wallet } = useContext(NearContext);
    const [transactionCount, setTransactionCount] = useState(null);

    const [isGoldenEra, setIsGoldenEra] = useState(false);
    const [isFundraising, setIsFundraising] = useState(false);
    const [isEcosystem, setIsEcosystem] = useState(false);
    const [isMoving, setIsMoving] = useState(false);
    const [isEconomy, setIsEconomy] = useState(false);

    // The Wallet as the Experience Layer section
    const [isToday, setIsToday] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isBrowser, setIsBrowser] = useState(false);
    const [isApp, setIsApp] = useState(false);
    const [isLucid, setIsLucid] = useState(false);
    const [isWhy, setIsWhy] = useState(false);

    // Distribution Section
    const [isPhase1, setIsPhase1] = useState(false);
    const [isPhase2, setIsPhase2] = useState(false);
    const [isPhase3, setIsPhase3] = useState(false);
    const [isPhase4, setIsPhase4] = useState(false);

    // Go to Market Section
    const [isMonetisation, setIsMonetisation] = useState(false);
    const [isOne, setIsOne] = useState(false);

    // Bonding Curves Section
    const [isABG, setIsABG] = useState(false);
    const [isDragonRank, setIsDragonRank] = useState(false);
    const [isSwag, setIsSwag] = useState(false);
    const [isCleim, setIsCleim] = useState(false);

    // Conditional Payments Section
    const [isIcebreak, setIsIcebreak] = useState(false);
    const [isDragonmail, setIsDragonmail] = useState(false);
    const [isAllowance, setIsAllowance] = useState(false);
    const [isWorkout, setIsWorkout] = useState(false);

    // Payment Streaming Section
    const [isSpectacle, setIsSpectacle] = useState(false);
    const [isStreamoLingo, setIsStreamoLingo] = useState(false);
    const [isTourguide, setIsTourguide] = useState(false);

    // Fungible Token Section
    const [isEvent, setIsEvent] = useState(false);

    // Tokengates Section
    const [isBoiler, setIsBoiler] = useState(false);
    const [isEventReservation, setIsEventReservation] = useState(false);
    const [isTokengated, setIsTokengated] = useState(false);

    // Prediction Markets Section
    const [isArina, setIsArina] = useState(false);

    // DAOs Section
    const [isPrivate, setIsPrivate] = useState(false);

    const handleSignOut = async () => {
        setIsLoading(true);
        try {
          await wallet.signOut();
          localStorage.clear();
          router.push(`/`);
        } catch (error) {
          console.error("Error signing out:", error);
        } finally {
          setIsLoading(false);
        }
      };

      useEffect(() => {
        setIsLoading(true);
        if (!signedAccountId) {
            router.push(`/`);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
      }, [signedAccountId]);

      const { getTransactionCount } = useAnalyticsHook();

      useEffect(() => {
        const fetchTransactionCount = async () => {
            const count = await getTransactionCount(signedAccountId); 
            if (count) {
                setTransactionCount(count);
            }
        };

        fetchTransactionCount();
      }, []);

    return (
        <div className="max-w-4xl p-6 bg-white shadow-md rounded-lg min-h-screen container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h1>Memo</h1>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        minWidth: 120,
                        maxWidth: 160,
                        height: 70,
                        alignItems: "flex-start",
                        paddingTop: "10px",
                    }}
                    onClick={() => handleSignOut()}
                >
                    <h5>tx count : {transactionCount}</h5>
                    <h5>unique users : 84</h5>
                </div>
                <div
                    style={{
                        display: "flex",
                        minWidth: 120,
                        maxWidth: 120,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "10px",
                    }}
                    className="dark-glass-btn-grad"
                    onClick={() => handleSignOut()}
                >
                    <h4>Logout</h4>
                </div>
            </div>
            
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
                onClick={() => setIsGoldenEra(!isGoldenEra)}
                >
                {isGoldenEra ? "▼" : "▶"} Golden Era of Crypto 
                </div>
                {isGoldenEra && (
                <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px"}}>
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
                <div 
                    style={{ cursor: "pointer"}} 
                    onClick={() => setIsFundraising(!isFundraising)}
                    >
                    {isFundraising ? "▼" : "▶"} Fundraising 
                </div>
                {isFundraising && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <ol style={{ paddingLeft: "20px", listStyleType: "decimal" }}>
                            <li style={{ paddingBottom: "10px"}}>Founders innovate at the protocol layer, by being faster, cheaper, more interoperable, more secure or all of the above</li>
                            <li style={{ paddingBottom: "10px"}}>Founders pitch a decentralised future, enabled by their infrastructure and token</li>
                            <li style={{ paddingBottom: "10px"}}>Founders sell a token around their new infrastructure to investors</li>
                            <li style={{ paddingBottom: "10px"}}>Founders raise enormous amounts of capital and set up an ecosystem fund to kickstart their onchain economy</li>
                        </ol>
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer"}} 
                    onClick={() => setIsEcosystem(!isEcosystem)}
                    >
                    {isEcosystem ? "▼" : "▶"} Ecosystem Funds have proven ineffective 
                </div>
                {isEcosystem && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>What the above has lead to is an abundance of blockspace across L2s and alt-L1s, all looking for founders that will help source the demand for this resource. However, ecosystem funds have not proven to be very effective at doing so, as they typically attract mercenary founders and developer studios, who may build out what they say they will, but rarely maintain it afterward as their incentive was the ecosystem grant rather than the chance of building a sustainable product or service within this ecosystem. </p>
                        <br />
                        <p>The result is capital destruction at a massive scale. Worse than that, ecosystems are usually left in the dark as to why a project failed, and therefore are not able to leverage those learnings to increase the chances of success of the remaining projects. The net result of this is a lack of a sustainable onchain economy. </p>
                        <br />
                        <p>Through this lens, most ecosystems are still at day 0, even if they have raised hundreds of millions of dollars. Novel and promising infrastructure advancements do not automatically translate into founder and user adoption and more importantly into an onchain economic activity. </p>
                        <br />
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer"}} 
                    onClick={() => setIsMoving(!isMoving)}
                    >
                    {isMoving ? "▼" : "▶"} Moving from Infrastructure to Consumer
                </div>
                {isMoving && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>We believe the traditional playbook that has worked so well in bootstrapping new infrastructure networks and communities, will not work for the next stage of the industry - leveraging the abundant infrastructure to capture consumers.</p>
                        <br />
                        <p>Chain abstraction will allow for seamless multi-chain experiences whereby the end consumer does not need to know what infrastructure is powering the product or service they are using, thus making leading blockchains, their branding and their narratives superfluous. </p>
                        <br />
                        <p>The past decade of venture funding has primarily supported crypto infrastructure, thus making  blockspace a commodity. Therefore the deciding factor of which blockchain ecosystem will come out on top by the end of the decade, will be the products and services that users are able to access using their onchain wallet and identity. Now that chains can effectively be abstracted away, this leads to a situation where brands and consumer experiences are more important than the specific chain powering the experience.</p>
                        <br />
                    </div>
                )}
            </ul>
            <h2>Introducing Lucid</h2>
            <ul>
                <div 
                    style={{ cursor: "pointer"}} 
                    onClick={() => setIsEconomy(!isEconomy)}
                    >
                    {isEconomy ? "▼" : "▶"} Economy First, Ecosystem Second, Infrastructure Third
                </div>
                {isEconomy && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>At Lucid, the approach we have adopted towards the go-to-market strategy for Layer 1 fundamentally diverges from the conventional playbook. We are building a systematic effort to build a brand around a smart contract enabled economy of products of services, from the bottom up around three core thesis:</p>
                        <br />
                        <p>We believe consumer crypto will be:</p>
                        <br />
                        <ol style={{ paddingLeft: "20px", listStyleType: "decimal" }}>
                            <li style={{ paddingBottom: "10px"}}>Mobile</li>
                            <li style={{ paddingBottom: "10px"}}>viral with a short shelf life</li>
                            <li style={{ paddingBottom: "10px"}}>comprised of a handful of smart contract and web2 primitives</li>
                        </ol>
                        <br />
                        <p>Instead of outsourcing the end user acquisition via grants, we aim to use an app studio as a go to market for our economy, ecosystem and infrastructure. In this phase of the industry, where we have all the required infrastructure readily available, we will take a systematic approach toward creating consumer experiences by leveraging a growing in house built component and smart contract library, to create new 0-1 products at a continuously faster and cheaper rate. This allows us to use capital more effectively than an ecosystem fund and more importantly are able to retain learnings to build upon the successes and failures of each additional product we take to market. </p>
                        <br />
                    </div>
                )}
            </ul>
            <div className="flex justify-center mb-4">
                <img src="/lucid-intro-layer.png" />
            </div>
            <h2>The Wallet as the Experience Layer</h2>
            <div className="flex justify-center mb-4">
                <img src="/lucid-ecosystem.png" />
            </div>
            <ul>
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold"}} 
                    onClick={() => setIsToday(!isToday)}
                >
                    {isToday ? "▼" : "▶"} Today's wallets are not optimized for mobile experiences
                </div>
                {isToday && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>The experience layer starts with our chain abstracted wallet, Lucid. Through this wallet we are a offering a growing library of apps uniquely enabled by crypto, which we will market independently. Thus over time, the wallet becomes a distribution machine and user sink for the cumulative user base of our app portfolio. Imagine for a second, if friend tech would continuously market new and unrelated products through their PWA which now sits on hundreds of thousands of smartphones, mostly unused.</p>
                        <p>Consumer crypto today has not taken off due to friction on many fronts. Currently only 3% of all people that have bought crypto, use it regularly on mobile. If we assume consumer crypto in its end state will be mainly driven by mobile first experiences and apps, lets look at where current mobile wallets fall short. </p>
                        <div 
                            style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                            onClick={() => setIsMobile(!isMobile)}
                        >
                            {isMobile ? "▼" : "▶"} Mobile Wallets
                        </div>
                        {isMobile && (
                            <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                                <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                                    <li style={{ paddingBottom: "10px"}}>Rainbow</li>
                                    <li style={{ paddingBottom: "10px"}}>HERE Wallet</li>
                                </ul>
                                <p>Mobile wallets such as rainbow or here wallet, are very limited in its functionality beyond connecting to DApps or sending and receiving funds from wallet to wallet. </p>
                                <br />
                            </div>
                        )}
                        <div 
                            style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                            onClick={() => setIsBrowser(!isBrowser)}
                        >
                            {isBrowser ? "▼" : "▶"} Mobile Wallets with browser
                        </div>
                        {isBrowser && (
                            <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                                <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                                    <li style={{ paddingBottom: "10px"}}>Metamask</li>
                                    <li style={{ paddingBottom: "10px"}}>Phantom</li>
                                    <li style={{ paddingBottom: "10px"}}>Coinbase Wallet</li>
                                </ul>
                                <p>Mobile wallets with browsers are awesome, because they allow an end-to-end experience without ever leaving the application itself. This reduction in friction is a significant improvement compared to the wallets mentioned above. However, the shortcomings that they face,  is that they are ecosystem constrained, often serving mainly one ecosystem (EVM or Solana), and their browser is not optimised for any of the experiences, which results in a clunky UX. </p>
                                <br />
                            </div>
                        )}
                        <div 
                            style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                            onClick={() => setIsApp(!isApp)}
                        >
                            {isApp ? "▼" : "▶"} App Wallets
                        </div>
                        {isApp && (
                            <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                                <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                                    <li style={{ paddingBottom: "10px"}}>Uniswap Wallet</li>
                                    <li style={{ paddingBottom: "10px"}}>Sweat Wallet</li>
                                </ul>
                                <p>Applications with a singular specific usecase have found success in their standalone wallet services that are the entry point to the actual product users want to use. In the case of Uniswap it is to natively swap tokens on the Uniswap protocol within the wallet and for Sweatcoin users download and use the wallet to receive their rewards for walking, which is the reason they download the app for in the first place, not because it is a wallet. Where these wallets fall short is offering their users to leverage their accounts and funds to use other applications from within that wallet, thereby acting as a gateway to consumer crypto.</p>
                                <br />
                            </div>
                        )}
                        <br />
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsLucid(!isLucid)}
                >
                    {isLucid ? "▼" : "▶"} Lucid - the Consumer Experience Layer
                </div>
                {isLucid && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>Lucid is a mobile consumer wallet that looks and feels like any regular Web2 app. An embedded browser allows users to take their data and assets from experience to experience. Lucid is a super app that allows users to earn in one experience, and spend in the next experience all from the same application, with the blockchain completely abstracted away.</p>
                        <br />
                        <p>Using this architecture, we will be building a series of consumer products from 0-1 and making them discoverable in the browser of Lucid. When using the product, it will feel like a native application, but users will be able to leverage the same account and assets for each of the products. Given our thesis that most apps will be comprised of the same components, our speed to market will increase with each deployed product. Lucid will act as a compounding user sink to which we can offer more and more experiences, thus becoming a powerful distribution channel over time. </p>
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsWhy(!isWhy)}
                >
                    {isWhy ? "▼" : "▶"} Why this problem, why now?
                </div>
                {isWhy && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                            <li style={{ paddingBottom: "10px"}}>Infrastructure is at an inflection point that allows a new type of builder to enter the industry</li>
                            <li style={{ paddingBottom: "10px"}}>Chain Abstraction technology will enable user experiences that look and feel like Web2</li>
                            <li style={{ paddingBottom: "10px"}}>On and off ramps in every major country allow a seamless entry and exit into and out of the crypto economy</li>
                        </ul>
                    </div>
                )}
            </ul>
            {/* Video Section */}
            <video controls width="100%">
                <source src="/videos/lucid-tutorial.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h2>Distribution</h2>
            <ul>
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsPhase1(!isPhase1)}
                >
                    {isPhase1 ? "▼" : "▶"} Phase 1: The Wallet and Inhouse Built DApps
                </div>
                {isPhase1 && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>At the heart of every consumer crypto experience lies the wallet. Wallets are ground zero to every crypto product and are often viewed and treated in isolation, rather than the entry point to an economy. Todays wallets are not optimised for consumer crypto experiences, nor act as a gateway to a suite of mobile-first DApps.</p>
                        <div className="p-6">
                            <AlertBox
                                icon="🚧"
                                text="A wallet should not feel like a wallet nor look like a browser."
                            />
                        </div>
                        <p>Lucid starts with the wallet, as this allows us a full end to end control of the end user experience. Currently, relying on third party wallets and integrations lead to friction and breakage points. Each additional step we require our user to go through in order to access our products leads to a significant reduction of users. We therefore only need to onboard our users once, and can then onboard them to new experiences at a speed and convenience usually reserved to closed ecosystems such as Apple and Google.</p>
                        <p>Lucid starts with the wallet, as this allows us a full end to end control of the end user experience. Currently, relying on third party wallets and integrations lead to friction and breakage points. Each additional step we require our user to go through in order to access our products leads to a significant reduction of users. We therefore only need to onboard our users once, and can then onboard them to new experiences at a speed and convenience usually reserved to closed ecosystems such as Apple and Google.</p>
                        <br />
                        <p className="vision-container">Creativity isnt magic - <em>Everything is a Remix</em></p>
                        <br />
                        <div className="p-6">
                            <AlertBox
                                icon="💫"
                                text="Solve messaging once, solve onboarding once, solve conditional payments once, ... Mix and match them indefinitely and churn out exciting consumer experiences. "
                            />
                        </div>
                        <p className="mb-2"><u>Web3:</u></p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                            <li style={{ paddingBottom: "10px"}}>NFTs</li>
                            <li style={{ paddingBottom: "10px"}}>Fungible Tokens</li>
                            <li style={{ paddingBottom: "10px"}}>DeFi Primitives like AMMs & Bonding curves</li>
                            <li style={{ paddingBottom: "10px"}}>Tokengates</li>
                            <li style={{ paddingBottom: "10px"}}>Conditional Payments</li>
                            <li style={{ paddingBottom: "10px"}}>Payment Streaming</li>
                            <li style={{ paddingBottom: "10px"}}>Multi-Sigs</li>
                            <li style={{ paddingBottom: "10px"}}>DAOs</li>
                        </ul>
                        <br />
                        <p className="mb-2"><u>Web2:</u></p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                            <li style={{ paddingBottom: "10px"}}>Messaging</li>
                            <li style={{ paddingBottom: "10px"}}>File upload/download</li>
                            <li style={{ paddingBottom: "10px"}}>Video streaming</li>
                            <li style={{ paddingBottom: "10px"}}>Affiliate marketing</li>
                            <li style={{ paddingBottom: "10px"}}>Map software & geolocation</li>
                        </ul>
                        <p>Thus we will focus on building out product ideas from 0-1, and gradually increase the output the larger our component library gets. </p>
                        <div className="p-6">
                            <AlertBox
                                icon="💬"
                                text="Once a user is onboarded to the application, Lucid will not only serve as their account and wallet, but as a gateway to a wider range of consumer crypto applications."
                            />
                        </div>
                        <p>Each of our consumer app launches will be tailored for a seamless user experience from the Lucid wallet. This allows us to turn Lucid into a user sink and user experience layer, where we can cross sell the users of one app on the benefits of another that we build. They will be able to seamlessly move their profile and assets from one experience to the next. Each app experience will be optimised for virality and the build out of core components for our component library. This in turn allows us to remix those components at the fraction of a cost to launch yet more products. </p>
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsPhase2(!isPhase2)}
                >
                    {isPhase2 ? "▼" : "▶"} Phase 2: Opening up the Distribution to Third Party Developers and Founders
                </div>
                {isPhase2 && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>Each additional product will cumulatively increase the user base of the Lucid wallet and create an attractive distribution channel for other developers to tap into. We will open up our distribution channel and component library once a smooth and seamless experience can be guaranteed in app, and the most crucial smart contracts mentioned above have been created and battle tested for our system.</p>
                        <br />
                        <p>For this phase of ecosystem growth we want to tap into the hustler economy and non-technical founder talent pool. With a feature complete component and smart contract library we can offer hustlers a business out of a box which they usually find with providers like shopify, and non-technical founders a technical product library that allows them to take an idea to market without the need for a technical co-founder. </p>
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsPhase3(!isPhase3)}
                >
                    {isPhase3 ? "▼" : "▶"} Phase 3: Building a Custom Chain for the Cumulative Onchain Economy on Lucid
                </div>
                {isPhase3 && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>We fundamentally believe that applications drive infrastructure. As such, any company or groups of companies seeking to leverage Web3 in a chainabstracted way, are better off pursuing the app chain thesis than deploying on most currently available L1s. The cumulative experience economy powered by Lucid tech and accessed through its vast userbase, will be a testament to this strategy.</p>
                        <br />
                        <p>With Lucids onchain economy growing and thriving, we now can create a purpose built chain around our needs as an onchain ecosystem, with the benefit of tapping into the learnings and designs of all protocols that came before us, given their open source nature. </p>
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsPhase4(!isPhase4)}
                >
                    {isPhase4 ? "▼" : "▶"} Distribution Philosophy
                </div>
                {isPhase4 && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>Understanding the multifaceted nature of ecosystem building allows us to tailor our strategies across different phases of our vision. In the initial phase, distribution will pose a significant challenge. We are introducing a variety of products to the market in a manner that is predominantly Web2 native. The difficulty of this phase is converting the initial set of users, as those users will be onboarded in a Web2 like manner. However, once they are onboarded, they can then enjoy the composability of Web3 and take their account to the rest of our experience economy. Our structural setup enables the systematic introduction of multiple products to the market, targeting different niches which all accumulate to the Lucid brand ecosystem. Through this approach we can enjoy the compounding effect on users through multiple product launches, as we are building towards ephemeral product experiences through which each product will retain a certain percentage of users for the next product. </p>
                        <p>Phase 1 will look messy in the short term, as the products that are rolled out target a variety of different user niches and sometimes have little overlap in target audiences. By catering to various sections, including meme coin communities, journalists, tutors, language translators, and content creators, we establish disconnected "niche islands." Each additional product however, increases the product and audience density of our ecosystem to the point where we are able to sell general purpose products that unify these user groups. This approach ensures that we're not starting from scratch with every new product. Instead, we're tapping into an already engaged user base, notwithstanding the potential churn. The expectation is that this method will yield compounding benefits over time, as the initial outreach to unrelated niches gradually fosters a comprehensive network of users.</p>
                        <p>It is important to note, that our products are optimised for 2 metrics: potential of virality and profitability. Profits derived from the app layer will be crucial in building out the lucid ecosystem. In this regard, we are pursuing a mercantilist policy, leveraging app layer surpluses to reinvest in our ecosystem growth, rather than going from fundraise to fundraise and chasing vanity metrics while doing so. </p>
                    </div>
                )}
            </ul>
            <h2>Go To Market</h2>
            <ul>
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsMonetisation(!isMonetisation)}
                >
                    {isMonetisation ? "▼" : "▶"} Monesitation
                </div>
                {isMonetisation && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>We capture value not via the wallet but from the individual DApps via fees, tokens and sales. The greater the amount of DApps created, the greater the probability to achieve a viral revenue generating breakout. Cleims business model will be similar to that of pump.fun, spectacle will take a commission on each piece of content acquired and icebreak will follow the friend.tech model. We aim to become the central place where the normal user goes to engage in experiences not possible without Web3 tech - however we want to let the experiences speak for themselves and will refrain from marketing any Web3 terms or lingo to our end consumers. </p>
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsOne(!isOne)}
                >
                    {isOne ? "▼" : "▶"} One Component, Multiple products
                </div>
                {isOne && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>In our GTM, we focus on building out those products that leverage the most versatile components and have the greatest probability of viral breakout. In this way we are able to gradually increase the velocity of our productive output and establish a userbase to which we can then sell more general purpose applications. </p>
                    </div>
                )}
            </ul>
            <div className="flex justify-center mb-4">
                <img src="/lucid-go-to-market.png" />
            </div>
            <h2>Bonding Curves</h2>
            <ul>
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsABG(!isABG)}
                >
                    {isABG ? "▼" : "▶"} ABG Directory
                </div>
                {isABG && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>The ABG Directory is a product built for the Asian Girl Boss community, the memecoin launched by Erica Kang. With the directory, we make it easy to discover the female movers and shakers of the industry, who are able to register and link their twitter to their NEAR account. Users that want to reach out to them, are able to purchase or sell access keys on a bonding curves, which allows them to send private messages. </p>
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsDragonRank(!isDragonRank)}
                >
                    {isDragonRank ? "▼" : "▶"} DragonRank
                </div>
                {isDragonRank && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>Leveraging the ABG Directory components, DragonRank is an near identical product implementation, whereby users with the Blackdragon NFT can connect to the site and to eachother with access passes denominated in Blackdragon memecoins on a bonding curve. </p>
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsSwag(!isSwag)}
                >
                    {isSwag ? "▼" : "▶"} Swag.fun
                </div>
                {isSwag && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>
                            <a href="https://swag.fun" target="_blank" rel="noopener noreferrer"><u>Swag.fun</u></a> aims to leverage the same components as ABG Directory and DragonRank to create an ecommerce store where every item is sold on a bonding curve - similar to 
                            <a href="https://unisocks.org" target="_blank" rel="noopener noreferrer"> <u>unisocks.org</u></a>
                        </p>
                        <p>
                            Designers or people with a merch idea can upload it, and people wanting to see the item in production can purchase it on a bonding curve. Simply put, the platform functions like 
                            <a href="https://pump.fun" target="_blank" rel="noopener noreferrer"> <u>pump.fun</u></a> but instead of memecoins graduating into a DEX, merchandise graduates into production.
                        </p>
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsCleim(!isCleim)}
                >
                    {isCleim ? "▼" : "▶"} Cleim
                </div>
                {isCleim && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>Cleim is a creator NFT launchpad, where creators can post their images as NFTs on a bonding curve. We thereby simplify the experience, so that creators no longer need to worry about collection sizes and prices, but can rather let the market decide the value of their work via the bonding curve.</p>
                        <p>They are now able to earn from the same content they have been posting to instagram for free, by receiving a fee on each buy and sell of their creations. Users can collect the art and photography of those creators which they want to support, and which they believe will accrue in value .</p>
                        <iframe
                            style={{border: "none"}}
                            width="100%"
                            height="600px"
                            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/ftQC8TFrVY0AnxeKAqCJAt/JJ---Clemens?content-scaling=fixed&kind=proto&node-id=375-17909&page-id=369%3A3991&scaling=min-zoom&t=lOjwk8echzAfpN3j-1"
                            allowfullscreen>
                        </iframe>
                    </div>
                )}
            </ul>
            <h2>Conditional Payments</h2>
            <ul>
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsIcebreak(!isIcebreak)}
                >
                    {isIcebreak ? "▼" : "▶"} Icebreak
                </div>
                {isIcebreak && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <img 
                            src="https://file.notion.so/f/f/c6beb990-989e-404e-a566-afa98a69aba3/41311c1d-b9e9-43d4-9e5f-3e4be74a835e/Untitled.png?table=block&id=ab8b1fec-3295-4094-a571-ce66184b264d&spaceId=c6beb990-989e-404e-a566-afa98a69aba3&expirationTimestamp=1739642400000&signature=aTvDy4rdUATLMCUVZIqZUS5qaLhsCGKfcrz4xUaZ9VQ&downloadName=Untitled.png"
                            alt="Embedded Content"
                            style={{width: "100%", height: "auto", border: "none"}}
                        />
                        <p>Reward replying. Icebreak is a messaging application that allows users to attach rewards to their messages, that get unlocked if their intended recipient replies.</p>
                        <p><u>Components</u></p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                            <li style={{ paddingBottom: "10px"}}>Conditional Payments</li>
                            <li style={{ paddingBottom: "10px"}}>Messaging</li>
                            <li style={{ paddingBottom: "10px"}}>Bonding Curves</li>
                        </ul>
                        <br/>
                        <p>Alpha version launched with 91 users onchain and 100N in volume. Beta launch currently underway with the integration of bonding curves. </p>
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsDragonmail(!isDragonmail)}
                >
                    {isDragonmail ? "▼" : "▶"} Dragonmail
                </div>
                {isDragonmail && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <img 
                            src="https://file.notion.so/f/f/c6beb990-989e-404e-a566-afa98a69aba3/719ba1e6-c0b6-47ac-a0a1-0b5f3935c1c4/Untitled.png?table=block&id=68b487f1-9972-4774-b019-af146fff5b2e&spaceId=c6beb990-989e-404e-a566-afa98a69aba3&expirationTimestamp=1739642400000&signature=RLdeKpyfa14LpUBDCOjK86xkfnkVB4DuJF6hrwU5S40&downloadName=Untitled.png"
                            alt="Embedded Content"
                            style={{width: "100%", height: "auto", border: "none"}}
                        />
                        <p>Dragonmail was a fun experiment for Chinese New Year, that allowed users to send memecoin filled luckpockets. <b>It leveraged the same infrastructure as icebreak</b>, and only required front end adaptations, and thus was launched <b>within 8 days</b> and has been used hundreds of times without any further resources deployed to it from our end. </p>
                        <br/>
                        <p><u>Components</u></p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                            <li style={{ paddingBottom: "10px"}}>Conditional Payments</li>
                            <li style={{ paddingBottom: "10px"}}>Messaging</li>
                        </ul>
                        <br/>
                        <p>Alpha version live with 1.1k drops created. </p>
                        <p>
                            <a href="https://dragonmail.xyz/" target="_blank" rel="noopener noreferrer"><u>dragonmail.xyz</u></a>
                        </p>
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsAllowance(!isAllowance)}
                >
                    {isAllowance ? "▼" : "▶"} Allowance DApp
                </div>
                {isAllowance && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>Take a picture of an uncompleted chore, such as cleaning the room, mowing the lawn or doing the laundry, attach a reward to it and post it to a token gated group chat. The person who sends back a picture of the completed task will then be able to claim the reward if approved by the poster.</p>
                        <br/>
                        <p><u>Components</u></p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                            <li style={{ paddingBottom: "10px"}}>Conditional Payments</li>
                            <li style={{ paddingBottom: "10px"}}>Tokengates</li>
                        </ul>
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsWorkout(!isWorkout)}
                >
                    {isWorkout ? "▼" : "▶"} Workout Buddy
                </div>
                {isWorkout && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>
                            Use image detection software like
                            <a href="https://github.com/roboflow/supervision" target="_blank" rel="noopener noreferrer">
                                <img 
                                style={{ display:"inline-block", width:"1em", height:"1em", verticalAlign:"-0.15em", borderRadius:"4px", marginLeft:"0.3em"}}
                                src="/github-icon.png" 
                                alt=""
                                /><u>supervision</u> 
                            </a> to track exercises like push ups or pull ups, and pay users to do so. Users effectively can pay themselves or others per repetition of any given exercise. 
                        </p>
                        <br/>
                        <p><u>Components</u></p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                            <li style={{ paddingBottom: "10px"}}>Conditional Payments</li>
                            <li style={{ paddingBottom: "10px"}}>Image Recognation</li>
                        </ul>
                    </div>
                )}
            </ul>
            <h2>Payment Streaming</h2>
            <ul>
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsSpectacle(!isSpectacle)}
                >
                    {isSpectacle ? "▼" : "▶"} Spectacle
                </div>
                {isSpectacle && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <div className="mb-4">
                            <img src="/spectacle-treasury.png" />
                        </div>
                        <p>Spectacle is an on demand live streaming platform that allows users to pay for live streams per second. Think of snapchat map, but in reverse. Instead of seeing what users post on the map, request content from a given area. </p>
                        <p>Target users: journalists, international students on apartment hunt, secret shoppers.</p>
                        <br/>
                        <p><u>Components</u></p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                            <li style={{ paddingBottom: "10px"}}>Video Streaming</li>
                            <li style={{ paddingBottom: "10px"}}>Payment Streaming</li>
                            <li style={{ paddingBottom: "10px"}}>Media Upload</li>
                            <li style={{ paddingBottom: "10px"}}>Messaging</li>
                            <li style={{ paddingBottom: "10px"}}>Maps</li>
                        </ul>
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsStreamoLingo(!isStreamoLingo)}
                >
                    {isStreamoLingo ? "▼" : "▶"} StreamoLingo
                </div>
                {isStreamoLingo && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>Learn any language on StreamoLingo by setting up a video call with a language tutor, and paying them per second. I have learned basic indonesian, by meeting up with a tutor 3 times a week for two hours at a time, where all we did was converse, and I had to write down every word I did not know until I could hold a conversation. Leveraging previous components, this could be set up in a very short time. </p>
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsTourguide(!isTourguide)}
                >
                    {isTourguide ? "▼" : "▶"} Tourguide App
                </div>
                {isTourguide && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>Tourguides can post their tours on to a map, that anyone can join if they connect to the stream. Once connected, the location of the tour is revealed and tourists can pay per minute that they partake in the tour.</p>
                        <p><u>Components</u></p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                            <li style={{ paddingBottom: "10px"}}>Payment Streaming</li>
                            <li style={{ paddingBottom: "10px"}}>Maps</li>
                            <li style={{ paddingBottom: "10px"}}>Tokengates</li>
                        </ul>
                    </div>
                )}
            </ul>
            <h2>Fungible Token</h2>
            <ul>
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsEvent(!isEvent)}
                >
                    {isEvent ? "▼" : "▶"} Event App
                </div>
                {isEvent && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>
                            <a href="https://londonblockchain.xyz/#invitee" target="_blank" rel="noopener noreferrer">
                                <u>https://londonblockchain.xyz/#invitee</u> 
                            </a> 
                        </p>
                        <p>Leveraging NEARs Blockchain Operating System, we took the NCON App first premiered at the NEAR Conference in Lisbon in 2023, and adapted the DApp for the blockchain conferences at the London Business School and Oxford University.</p>
                        <p>Attendees were able to earn tokens by attending panel talks, and spend those tokens on merchandise. The event DApp allows event organisers to increase engagement and design their micro event economies with an unparalleled ease. </p>
                        <br/>
                        <div className="mb-4">
                            <img src="/london-blockchain.png" />
                        </div>
                        <p><u>Components</u></p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                            <li style={{ paddingBottom: "10px"}}>Account Abstraction</li>
                            <li style={{ paddingBottom: "10px"}}>Maps</li>
                            <li style={{ paddingBottom: "10px"}}>Fungible Tokens</li>
                        </ul>
                        <br/>
                        <p>160 users, with 40% using their tokens to claim merchandise.</p>
                    </div>
                )}
            </ul>
            <h2>Tokengates</h2>
            <ul>
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsBoiler(!isBoiler)}
                >
                    {isBoiler ? "▼" : "▶"} Boiler Room Onchain
                </div>
                {isBoiler && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>Boiler room has created a loyal community of millions of ravers. However, not everyone who wants to let lose and go to a rave would necessarily want themselves viewable in that state to everyone on the internet via youtube. Instead, we could create an event series that issues POAPs for each attendee, that then allows them to view any future live stream of that same series in a token gated environment. </p>
                        <br/>
                        <p><u>Components</u></p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                            <li style={{ paddingBottom: "10px"}}>Video Streaming</li>
                            <li style={{ paddingBottom: "10px"}}>POAPs</li>
                            <li style={{ paddingBottom: "10px"}}>Tokengates</li>
                        </ul>
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsEventReservation(!isEventReservation)}
                >
                    {isEventReservation ? "▼" : "▶"} Event Reservation App
                </div>
                {isEventReservation && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>Sign up to any event with your public profile. If capacity is reached, additional people can be accepted by a Harbergers tax by which registered attendants agree to forego their attendance for a set price.</p>
                        <br/>
                        <p><u>Components</u></p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                            <li style={{ paddingBottom: "10px"}}>Fungible Token</li>
                            <li style={{ paddingBottom: "10px"}}>Harbergers Tax Contract</li>
                        </ul>
                    </div>
                )}
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsTokengated(!isTokengated)}
                >
                    {isTokengated ? "▼" : "▶"} Tokengated Professional Channels and Communities
                </div>
                {isTokengated && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>Leveraging previous components we can lean into the coaching and influencer communities that sell access to messaging groups. Instead of having a group chat on telegram or whatsapp, we can cap the size of the group and allow people to trade in and out of their access to a given group. </p>
                        <br/>
                        <p><u>Components</u></p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                            <li style={{ paddingBottom: "10px"}}>Messaging</li>
                            <li style={{ paddingBottom: "10px"}}>NFTs</li>
                            <li style={{ paddingBottom: "10px"}}>Tokengates</li>
                        </ul>
                    </div>
                )}
            </ul>
            <h2>Prediction Markets</h2>
            <ul>
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsArina(!isArina)}
                >
                    {isArina ? "▼" : "▶"} Arina
                </div>
                {isArina && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>A simple smart contract that allows users to compete against eachother in small private settings for money. For example, two college students playing FIFA against eachother can put up 5$ each, with the winner taking the full 10$. However, because we are leveraging prediction market smart contracts, other bystanders can also join in on the wager. Results are enforced via consensus of the participants to keep the product as simple and lightweight as possible.</p>
                        <br/>
                        <p><u>Components</u></p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                            <li style={{ paddingBottom: "10px"}}>Conditional Payments</li>
                        </ul>
                        <p>Live on testnet and submitted for the redacted hackathon</p>
                        <p>
                            <a href="https://arina-kappa.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <u>https://arina-kappa.vercel.app/</u> 
                            </a> 
                        </p>
                        <div className="mb-4">
                            <img src="/arina-pic.png" />
                        </div>
                    </div>
                )}
            </ul>
            <h2>DAOs</h2>
            <ul>
                <div 
                    style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px"}} 
                    onClick={() => setIsPrivate(!isPrivate)}
                >
                    {isPrivate ? "▼" : "▶"} Private Agentic DAO
                </div>
                {isPrivate && (
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingTop: "10px" }}>
                        <p>We are building an agentic multichain DAO management platform that makes creating and managing DAOs as easy as sending a message or voting in a poll. The platform combines AI agents and blockchain infrastructure to remove friction in DAO operations, from investment exploration to execution. Built on the NEAR protocol, it integrates with <a href="http://bitte.ai/" target="_blank" rel="noopener noreferrer"><u>Bitte.ai</u></a> for AI agent functionalities, Calimero.network for secure off-chain compute and on-chain execution of DAO proposals, and Sig.network for multi-chain transactions and ownership of assets.</p>
                        <p>Creating a DAO with our platform is as simple as opening a group chat. Once initiated, users can join the chat by depositing stablecoins into the DAO. AI agents seamlessly handle the operational tasks, allowing the DAO to function entirely within the chat interface. Members can explore, vote on, and execute investment opportunities without ever leaving the chat, while chain signatures and MPC nodes allow users to hold custody over assets on any network. This streamlined process removes traditional coordination inefficiencies and empowers users to focus on decision-making and governance, all from a single, intuitive interface.</p>
                        <p>We will capture value by taking a small fee on profitable transactions executed through the platform. This includes activities such as staking, yield farming, and successful trades facilitated by the DAO. By aligning our revenue model with the success of our users, we ensure sustainable growth while incentivizing the effective use of the platform's capabilities.</p>
                    </div>
                )}
            </ul>
            <div className="mb-4">
                <img src="/lucid-overall.png" />
            </div>
            <p>If you are interested in talking all things consumer crypto, shoot me a line on telegram</p>
            <p>
                <a href="https://t.me/clemens_sc" target="_blank" rel="noopener noreferrer">
                    @clemens_sc 
                </a> 
            </p>
        </div>
    );
}

export default Content;
