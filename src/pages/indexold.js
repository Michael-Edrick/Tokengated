import { Button } from "@/components/ui/button"; // Assuming shadcn's button component is used
import { NearContext } from "@/context";
import { useContext, useEffect, useState } from "react";
import { useCheckUser } from "@/hooks/firebase/useCheckUser";
import unProtectedPage from "@/utils/unProtectedRoute";
import Loader from "@/components/Loader";
import { useLocalStorage } from "usehooks-ts";

function Home() {
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

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await wallet.signOut();
      localStorage.clear();
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Main Content */}
          <div className="flex-grow flex items-center justify-center">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img src="/arina-logo.png" alt="Logo" className="h-10" />
              </div>
              <p className="text-lg text-newSecondary mt-4">Friendly Competitions</p>
              <p className="text-lg text-newSecondary mb-8">With Skin in the Game</p>

              {/* Buttons */}
              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <Button
                  onClick={handleButtonClick}
                  className="bg-newSecondary hover:bg-orange-600 text-white py-2 px-4 rounded-full w-48 hover:scale-[1.1]"
                >
                  Sign Up
                </Button>
                <Button
                  onClick={handleSignOut}
                  className="bg-newSecondary hover:bg-orange-600 text-white py-2 px-4 rounded-full w-48 hover:scale-[1.1]"
                >
                  Log In
                </Button>
              </div>
            </div>
          </div>

          {/* Footer with Credits */}
          <footer className="text-right py-4 container">
            <a href="/credits"
            >
              Credits
            </a>
          </footer>
        </>
      )}
    </div>
  );
}

export default unProtectedPage(Home);

