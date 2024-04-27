import { useEffect } from "react";
import { useRouter } from "next/router";
import { metadata } from "../app/metadata";

// Component that uses "use client" for client-side logic
export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Example of client-side logic
    console.log("This runs only on the client side.");
  }, []);

  return (
    <div>
      <h1>{metadata.title}</h1>
      <p>{metadata.description}</p>
      {/* Other JSX content... */}
    </div>
  );
}

// Add "use client" directive to specify client-side logic
// The code inside useEffect will only run in the browser
// and won't be executed during server-side rendering
// use client
