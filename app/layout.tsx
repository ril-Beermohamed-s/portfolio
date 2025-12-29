import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Beer Mohamed | Web Consultant",
  description: "Web Developer, Ecommerce Consultant, UI Engineer"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-primary">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
