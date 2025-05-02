
import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t py-12 mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} MailCheck. All rights reserved.
            </p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">
              Made with ❤️ By{' '}
              <a 
                href="https://t.me/sp_mrt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-700 transition-colors"
              >
                MrTanzid
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
