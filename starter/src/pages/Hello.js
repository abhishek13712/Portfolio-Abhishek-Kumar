import { useState, useEffect } from "react";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3500); // Reduce delay to match visual completion
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-white">
      {/* Welcome Animation */}
      {showWelcome && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
          <h1 className="text-7xl font-pacifico text-bluish animate-welcome">Welcome</h1>
        </div>
      )}

      <style jsx>{`
        @keyframes welcome {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
          80% {
            opacity: 1;
            transform: scale(1.5);
          }

          100% {
            opacity: 0;
            transform: scale(1);
          }
        }

        .animate-welcome {
          animation: welcome 4s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
