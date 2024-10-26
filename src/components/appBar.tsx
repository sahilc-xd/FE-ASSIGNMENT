import { FaDiscord } from 'react-icons/fa';
import { HomeIcon, Users2, BarChart2, FileText, Info } from 'lucide-react';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  icon: ReactNode;
  text: string;
}

export const AppBar = () => {
  return (
    <nav className="px-6 py-3 rounded-lg">
      <div className="flex items-center space-x-6 max-w-max mx-auto">
       
        <div className="bg-[#204AF8E5] px-4 py-2 flex items-center space-x-6 rounded-lg border border-white shadow-[0px_4px_0px_0px_rgba(255,255,255,1)]">
          <div className="flex items-center space-x-2 pr-8">
            <img src='../src/assets/images/Subtract.png' alt="Logo" />
            <span 
              className="text-[#FFFFFF]" 
              style={{
                fontFamily: 'Dx Dynamix-Free-Personal-Use',
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '14.4px',
                textAlign: 'left',
                color: 'rgba(255, 255, 255, 0.52)', 
                paddingTop: '5px'
              }}
            >
              Vault
            </span>
          </div>
          <NavLink href="/" icon={<HomeIcon size={20} />} text="Home" />
          <NavLink href="/admin" icon={<Users2 size={20} />} text="Admin" />
          <NavLink href="/analytics" icon={<BarChart2 size={20} />} text="Analytics" />
          <NavLink href="/guide" icon={<FileText size={20} />} text="Guide" />
          <NavLink href="/about" icon={<Info size={20} />} text="About" />
        </div>

        {/* Right side - Discord Icon */}
        <div className="flex items-center">
          <a 
            href="/discord" 
            className="flex items-center justify-center w-14 h-12 bg-[#7B61FF] rounded-2xl border border-[#FFFFFF] shadow-[0_2px_0_0_#FFFFFF] hover:bg-[#6B51EF] transition-colors duration-200 p-4"
          >
            <FaDiscord className="w-10 h-10 text-white " />
          </a>
        </div>
      </div>
    </nav>
  );
};

// Helper component for navigation links
const NavLink = ({ href, icon, text }: NavLinkProps) => {
  return (
    <a 
      href={href}
      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};