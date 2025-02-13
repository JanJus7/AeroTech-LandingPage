import { useEffect, useState } from "react";

export default function TimeOnSite() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 bg-green-600 text-white px-3 py-2 rounded-lg shadow-md text-xs sm:text-sm md:text-base">
      Time on site: {seconds}s
    </div>
  );
}
