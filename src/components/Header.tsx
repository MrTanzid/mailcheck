import React from 'react';
import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
interface HeaderProps {
  className?: string;
}
const Header: React.FC<HeaderProps> = ({
  className
}) => {
  return <header className={cn("w-full py-4 px-6 flex items-center justify-between", className)}>
      <Link to="/" className="flex items-center space-x-2">
        <Mail className="h-6 w-6 text-purple-500" />
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-purple-gradient">MailCheck</h2>
      </Link>
      <nav>
        <ul className="flex items-center space-x-6">
          <li>
            
          </li>
        </ul>
      </nav>
    </header>;
};
export default Header;