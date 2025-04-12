
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ScissorsLinear, Users, Settings, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { path: "/", label: "Dashboard", icon: <ScissorsLinear size={18} /> },
    { path: "/customers", label: "Customers", icon: <Users size={18} /> },
    { path: "/settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          <ScissorsLinear className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold text-lg">StitchTrack</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(item.path) 
                  ? "bg-primary text-primary-foreground" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Menu />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
