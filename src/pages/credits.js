import { Button } from "@/components/ui/button"; // Assuming Shadcn's Button is used
import unProtectedPage from "@/utils/unProtectedRoute";
import Loader from "@/components/Loader";
import { useState } from "react";

function Credits() {
  const [isLoading, setIsLoading] = useState(false);

  const contributors = [
    { name: "Kaliba Enterprises Private Limited", link: "https://kalibaenterprises.com" },
    { name: "Cambrian Collective",link:"https://cambriancollective.xyz/"},
    { name: "0x4227",link:"https://0x4227.xyz/"}
  ];

  const references = [
    { title: "Shadcn Components", url: "https://ui.shadcn.com/docs/components/" },
    { title: "Magic UI", url: "https://magicui.design/docs/components/" }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="max-w-4xl p-6 bg-white shadow-md rounded-lg">
          {/* Header */}
          <div className="text-center">
          
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Credits</h1>
            <p className="text-lg text-gray-600">Acknowledging contributors, developers, and references.</p>
          </div>

          {/* Contributors Section */}
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contributors</h2>
            <ul className="space-y-2">
              {contributors.map((contributor, index) => (
                <li key={index}>
                  <a
                    href={contributor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {contributor.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* References Section */}
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">References</h2>
            <ul className="space-y-2">
              {references.map((reference, index) => (
                <li key={index}>
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {reference.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          
          <footer className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Developed and contributed by{" "}
              <a
                href="https://kalibaenterprises.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Kaliba Enterprises Private Limited
              </a>
              .
            </p>
            <div className="mt-4">
              <a href="/">
              <Button className="bg-newSecondary hover:bg-orange-600 text-white py-2 px-4 rounded-full">
                Back to Home
              </Button>
              </a>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

export default unProtectedPage(Credits);
