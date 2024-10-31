import protectedPage from "@/utils/protectedRoute";

function ChallengeOpponent(props) {

  return (
    // <div className="w-full md:flex md:justify-center pb-4">
    //   <div className="min-h-[160px] sm:min-w-[500px] bg-tertiary shadow-md rounded-[25px] px-4 py-6 flex flex-col justify-between items-center mt-6 space-y-4 relative">
    //     <div className="w-full flex justify-center md:justify-start gap-3 md:gap-5">
    //       <p className="text-[24px] font-bold text-white truncate overflow-hidden whitespace-nowrap">
    //         {props?.gameName}
    //       </p>
    //     </div>
    //     <div className="w-full flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
    //       {/* Left side teams */}
    //       <div className="flex flex-col space-y-4">
    //         {props?.players?.map((player, index) => (
    //           <div
    //             key={index}
    //             className="flex flex-col justify-center items-center space-y-2"
    //           >
    //             <div className="w-[60px] h-[60px] bg-gray-300 rounded-lg overflow-hidden">
    //               <img
    //                 src={player?.profileImage || "/user.png"}
    //                 alt={`Profile of ${player?.teamName}`}
    //                 className="object-cover w-full h-full"
    //               />
    //             </div>
    //             <p className="text-[13px] text-newSecondary font-bold">
    //               {player?.teamName}
    //             </p>
    //           </div>
    //         ))}
    //       </div>

    //       {/* Amount Section */}
    //       <div className="flex flex-col items-center mx-4 text-center">
    //         <p className="text-[36px] font-bold text-newSecondary">
    //           {props?.totalContributionAmount}$
    //         </p>
    //       </div>

    //       {/* Right side teams */}
    //       <div className="flex flex-col space-y-4">
    //         <div className="flex flex-col items-center space-y-2">
    //           <div className="w-[60px] h-[60px] bg-gray-300 rounded-lg overflow-hidden">
    //             <img
    //               src={"/waiting_icon.png"}
    //               alt="Profile"
    //               className="object-cover w-full h-full"
    //             />
    //           </div>
    //           <p className="text-[13px] text-newSecondary font-bold">Waiting</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <>
    <div className=" justify-center md:flex md:justify-center pb-4 font-archivo" style={{ fontFamily: "'Archivo', sans-serif" }}>
<div className="min-h-[200px] sm:min-w-[300px] bg-black shadow-md rounded px-1 py-1 flex flex-col justify-between items-center mt-6 space-y-6 relative">

{/* Header Section */}
<div className="w-full flex justify-between items-center py-2">
<p className="text-[12px] md:text-[16px] text-white">Challenge ID:  {props.gameData?.challengeId} </p>
<div className="h-full flex justify-end px-2">
  <img
    src="/arina-logo.png"
    alt="Right Player"
    className="object-cover h-3 md:h-4 rounded-l"
  />
</div>
</div>

{/* Main Content Section */}
<div className="flex flex-col items-center space-y-4 w-full border rounded min-h-[200px]">
<div className="relative flex justify-between w-full h-[150px] overflow-hidden rounded-lg">
  
  {/* Left Side Image */}
  <div className="w-1/2">
    <img
      src={props?.gameData?.team[0]?.profileImage ? props?.gameData?.team[0]?.profileImage || "/unsplash.png"
        : "/unsplash.png"}
      alt="Left Player"
      className="object-cover w-full h-full rounded-l-lg"
    />
  </div>

  {/* Right Side Image */}
  <div className="w-1/2">
    <img
       src={props?.gameData?.team[1]?.profileImage ? props?.gameData?.team[1]?.profileImage || "/unsplash.png"
        : "/unsplash.png"}
      alt="Right Player"
      className="object-cover w-full h-full rounded-r-lg"
    />
  </div>
  
  
  {/* Slanted Divider */}
  {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-transparent rotate-6 transform skew-x-[20deg] w-full h-full pointer-events-none" /> */}
</div>

{/* VS and Player Info Section */}
<div className="w-full flex justify-between px-2">
  
  {/* Left Player Info */}
  <div className="w-1/2 text-right flex justify-content-center">
  
<div className="flex flex-col items-center">
<p className="text-[12px] md:text-[15px] font-bold text-white">
{props?.gameData?.team[0]?.teamName || "Waiting"}
{/* Waiting */}
</p>

</div>



    </div>

  <p className="text-[24px] font-bold text-newSecondary px-2">vs</p>

  {/* Right Player Info */}
  
  <div className="w-1/2 text-left flex justify-content-center">
  
<div className="flex flex-col items-center">
<p className="text-[12px] md:text-[15px] font-bold text-white">
{props?.gameData?.team[1]?.teamName || "Waiting"}
{/* Waiting */}
</p>

</div>

    </div>
</div>


</div>


</div>
</div>
  </>

  );
}

export default protectedPage(ChallengeOpponent);
