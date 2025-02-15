import React, { useState, useEffect } from "react";
import Modal from "react-modal";
// import "./common/icebreak.css";
// import modalLogo from "../../assets/modalLogo.svg";
// import nftMember from "../../assets/nft-member.png";
import MyNearIconUrl from "@near-wallet-selector/my-near-wallet/assets/my-near-wallet-icon.png";
import { useRouter } from "next/router";
import * as nearAPI from "near-api-js";



function GeneratePage({ wallet }) {


  const navigate = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);


//   useEffect(() => {
//     checkUser();
//   }, [wallet.isSignedIn]);

//   const checkUser = async () => {
   
//     if (wallet.isSignedIn) {
//       navigate("/app");
//     }
//   };

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    if (width < 640) setIsMobileView(true);
    else setIsMobileView(false);

  };


  const newUser = async () => {
    window.location.assign("/createWallet");
  }
  const connectWallet = async () => {
    localStorage.setItem("typeOfLogin", "existingUser");
    wallet.signIn();
    navigate("/");
  };


  return (
    <div className="background" style={{"display": "flex"}}>
      
      <div className="logoContainer" style={{}}>
        <div className="nft-member"></div>
      </div>
      
      <div className="textContainer" style={{"marginTop":"250px", "marginLeft": "150px"}}>
        <div className="H1" style={{ lineHeight: "20px", color: "black" }}>
            Onboard new members
        </div>
      </div>
      <div
        className="mobile-text-container"
      >
        <div className="H4" style={{ lineHeight: "20px", color: "black" }}>
          Onboard new members
        </div>
      </div>
      <div>
        {/* desktop button below */}
        <div className="desktopButtonContainer">
          <div
            style={{
              minWidth: 120,
              maxWidth: 120,
              height: 40,
            }}
            className="glass-btn-grad"
            onClick={() => connectWallet()}
          >
            Generate
          </div>
        </div>
        {/* mobile button below */}
        <div className="mobileButtonContainer">
          <div
            style={{
              minWidth: 120,
              maxWidth: 120,
              height: 40,
            }}
            className="glass-btn-grad"
            onClick={() => connectWallet()}
          >
            Generate
          </div>
        </div>
      </div>

      <div className="footer centered">
        <div style={{display: isMobileView ? 'none': ''}} className="build-on"></div>
      </div>

      {/* Model For Connecting */}
      <Modal
        className="model"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="H6">Connect to Near Wallet</div>
        <img height={80} width={80} src={MyNearIconUrl} />

        <div className="H6">connect wallet to get started</div>
        <div className="button" oClick={connectWallet}>
          Connect
        </div>
      </Modal>
    </div>
  );
}
export default GeneratePage;
