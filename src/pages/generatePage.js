import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
// import "./common/icebreak.css";
// import modalLogo from "../../assets/modalLogo.svg";
// import nftMember from "../../assets/nft-member.png";
import MyNearIconUrl from "@near-wallet-selector/my-near-wallet/assets/my-near-wallet-icon.png";
import { useRouter } from "next/router";
import * as nearAPI from "near-api-js";
import { Button } from "@/components/ui/button"; // Assuming shadcn's button component is used
import { NearContext } from "@/context";
import { useCheckUser } from "@/hooks/firebase/useCheckUser";
import unProtectedPage from "@/utils/unProtectedRoute";
import Loader from "@/components/Loader";
import { useLocalStorage } from "usehooks-ts";



function GeneratePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  const { signedAccountId, wallet } = useContext(NearContext);
  const { checkUser } = useCheckUser(signedAccountId);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useLocalStorage("user", null);

  useEffect(() => {
    setIsLoading(true);
    if (signedAccountId && user && user.exist) {
      checkUser(); // Automatically check the user in Firestore
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [signedAccountId, checkUser, user]);

  const handleButtonClick = async () => {
    setIsLoading(true);

    if (!signedAccountId) {
      // If no user is signed in, trigger wallet sign-in
      await wallet.signIn();
    }
    setIsLoading(false);
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
              minWidth: 150,
              height: 40,
            }}
            className="glass-btn-grad"
            onClick={() => handleButtonClick()}
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
            onClick={() => handleButtonClick()}
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
        <div className="button" oClick={handleButtonClick}>
          Connect
        </div>
      </Modal>
    </div>
  );
}
export default GeneratePage;
