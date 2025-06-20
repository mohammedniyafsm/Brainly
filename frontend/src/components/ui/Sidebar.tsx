import { SidebarItem } from "./SidebarItem";
import brain from "../../assets/brain.png";

export const Sidebar = () => {
  return (
    <div className="h-screen w-72 bg-white border-r border-gray-200 fixed left-0 top-0 shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center px-6 py-4 gap-2 cursor-pointer">
        <img src={brain} alt="Second Brain Logo" className="h-8" />
        <h1 className="text-2xl font-bold text-gray-900 font-inter">
          Second Brain
        </h1>
      </div>

      {/* Sidebar Items */}
      <SidebarItem />
    </div>
  );
};
