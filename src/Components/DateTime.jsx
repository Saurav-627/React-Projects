import { useState } from "react";
import { useEffect } from "react";

const DateTime = () => {
  // Todo Date and Time
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString("en-US", { hour12: true });
      setDateTime(`Date : ${formattedDate} - Time : ${formattedTime}`);
    }, 1000);

    // cleanup function
    return () => clearInterval(interval);
  }, []);

  return <h2 className="text-xl text-center mt-2">{dateTime}</h2>;
};

export default DateTime;
