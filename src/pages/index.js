import { NearContext } from "@/context";
import { useContext, useEffect, useState } from "react";
import { useCheckUser } from "@/hooks/firebase/useCheckUser";
import unProtectedPage from "@/utils/unProtectedRoute";
import { useLocalStorage } from "usehooks-ts";
import useTokenHook from "@/hooks/blockchain/useTokenHook";
import { useRouter } from 'next/router';

function Home() {
  const { signedAccountId, wallet } = useContext(NearContext);
  const router = useRouter();
  // const { checkUser } = useCheckUser(signedAccountId);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useLocalStorage("user", null);
  const TOKEN_CONTRACT = "tkn.lucidnft.testnet";
  const { userBalance } = useTokenHook(
    TOKEN_CONTRACT
  );


  useEffect(() => {
    setIsLoading(true);
    console.log("signedAccountId : ", signedAccountId);
    if (signedAccountId) {
      if (userBalance){
        console.log("userBalance : ", userBalance);
        setIsLoading(false);
        router.push(`/content`);
      } else {
        console.log("userBalance : ", userBalance);
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, [userBalance]);

  useEffect(() => {
    setIsLoading(true);
    if (signedAccountId && user && user.exist) {
      // checkUser(); // Automatically check the user in Firestore
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [signedAccountId, user]);

  const handleButtonClick = async () => {
    setIsLoading(true);

    if (!signedAccountId) {
      // If no user is signed in, trigger wallet sign-in
      await wallet.signIn();
    }
    setIsLoading(false);
  };
    
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

  return (
    <div className="background" style={{display: "flex"}}>
      <div className="desktopLogoContainer" style={{}}>
        <img src="/nft-member.png" alt="NFT Member" class="nft-member" />
      </div>

      <div className="textContainer">
        <div className="H1">Welcome to Lucid</div>
        <div className="H6">
          Connect your wallet to claim your Lucid Access Pass.
        </div>
        <div className="desktopButtonContainer">
          <div
              style={{
                minWidth: 150,
                height: 40,
              }}
              className="glass-btn-grad"
              onClick={() => handleButtonClick()}
          >
              Connect
          </div>
        </div>
      </div>

      {/* mobile version below */}
      <div style={{display: isMobileView ? 'flex': 'none', width: "100%", flexDirection: "column"}}>
        <div className="mobileLogoContainer" style={{}}>
          <img src="/nft-member.png" alt="NFT Member" class="nft-member" />
        </div>

        <div className="mobile-text-container">
          <div className="H3" style={{ lineHeight: "20px", color: "black", marginBottom: "20px"}}>
            Welcome to Lucid
          </div>
          <div className="H5" style={{ lineHeight: "20px", color: "black" }}>
            Connect your wallet to claim your Lucid Access Pass.
          </div>
        </div>
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
              Connect
          </div>
        </div>
      </div>

      <div className="footer centered">
          <div style={{display: isMobileView ? 'none': ''}} className="build-on"></div>
      </div>
    </div>
  );
}

export default unProtectedPage(Home);

