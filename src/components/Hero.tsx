
import React from 'react';
import { Mail, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface HeroProps {
  className?: string;
  onScrollToValidate: () => void;
}

const Hero: React.FC<HeroProps> = ({ className, onScrollToValidate }) => {
  return (
    <section className={cn("relative w-full py-20 px-6", className)}>
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Mail className="h-16 w-16 text-purple-500" />
            <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full p-1">
              <Check className="h-4 w-4" />
            </div>
          </div>
        </div>
        
        <h1 className="mb-4 font-bold animate-fade-in">
          <span className="bg-clip-text text-transparent bg-purple-gradient">
            MailCheck
          </span>
          <br />
          <span>Fast Gmail Validation</span>
        </h1>
        
        <p className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
          Ensure your email list contains valid Gmail addresses with our powerful
          validation tool. Check one email or validate in bulk.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <Button 
            onClick={onScrollToValidate} 
            size="lg" 
            className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-8"
          >
            Start Validating
          </Button>
          <Link to="/learn" className="inline-block">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-purple-300 text-purple-500 hover:bg-purple-50 rounded-full px-8 w-full"
            >
              Learn More
            </Button>
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-xl animate-scale-in" style={{ animationDelay: '300ms' }}>
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-lg font-medium mb-2">Single Validation</h3>
            <p className="text-gray-500 text-sm">Validate individual Gmail addresses with instant results.</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl animate-scale-in" style={{ animationDelay: '400ms' }}>
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-lg font-medium mb-2">Bulk Processing</h3>
            <p className="text-gray-500 text-sm">Process multiple Gmail addresses at once to save time.</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl animate-scale-in" style={{ animationDelay: '500ms' }}>
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-lg font-medium mb-2">Instant Results</h3>
            <p className="text-gray-500 text-sm">Get validation results in real-time with detailed status.</p>
          </div>
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
};

export default Hero;
