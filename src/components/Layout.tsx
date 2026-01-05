import { ReactNode } from "react";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
