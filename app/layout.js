import "@/styles/globals.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-dark dark:text-light transition-all duration-500">
        ${children}
      </body>
    </html>
  );
}

export default RootLayout;
