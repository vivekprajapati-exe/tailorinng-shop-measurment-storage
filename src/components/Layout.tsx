
import NavBar from "./NavBar";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />
      <main className="flex-1">
        {children}
      </main>
      <Toaster />
    </div>
  );
};

export default Layout;
