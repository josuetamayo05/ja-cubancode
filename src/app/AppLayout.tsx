import { MotionConfig } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import StickyMobileCTA from "../components/layout/StickyMobileCTA";
import ScrollToTop from "../components/layout/ScrollToTop";

export default function AppLayout() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <ScrollToTop />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <StickyMobileCTA />
      </div>
    </MotionConfig>
  );
}
