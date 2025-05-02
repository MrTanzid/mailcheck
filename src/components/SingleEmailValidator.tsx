
import React, { useState } from 'react';
import { Check, X, Mail, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const SingleEmailValidator: React.FC = () => {
  const [email, setEmail] = useState('');
  const [validating, setValidating] = useState(false);
  const [result, setResult] = useState<{ valid: boolean; message: string } | null>(null);

  const validateEmail = () => {
    if (!email) {
      toast.error('Please enter an email address');
      return;
    }
    
    setValidating(true);
    setResult(null);
    
    // Simulating validation with timeout
    setTimeout(() => {
      const isGmail = email.toLowerCase().endsWith('@gmail.com');
      const isValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      
      if (!isValidFormat) {
        setResult({
          valid: false,
          message: 'Invalid email format'
        });
      } else if (!isGmail) {
        setResult({
          valid: false,
          message: 'Not a Gmail address'
        });
      } else {
        setResult({
          valid: true,
          message: 'Valid Gmail address'
        });
      }
      
      setValidating(false);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      validateEmail();
    }
  };

  return (
    <div className="animate-fade-in">
      <Card className="glass-card overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Mail className="h-5 w-5 text-purple-500 mr-2" />
            <h3 className="text-xl font-medium">Single Email Validation</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Input
              type="email"
              placeholder="Enter a Gmail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button 
              onClick={validateEmail} 
              disabled={validating}
              className="bg-purple-500 hover:bg-purple-600 whitespace-nowrap"
            >
              {validating ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Validating...
                </>
              ) : (
                'Validate Email'
              )}
            </Button>
          </div>
          
          {result && (
            <div className={`p-4 rounded-lg animate-scale-in ${
              result.valid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-center">
                <div className={`rounded-full p-1 mr-3 ${
                  result.valid ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {result.valid ? (
                    <Check className="h-5 w-5 text-green-600" />
                  ) : (
                    <X className="h-5 w-5 text-red-600" />
                  )}
                </div>
                <div>
                  <p className={`font-medium ${
                    result.valid ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {result.message}
                  </p>
                  {result.valid && (
                    <p className="text-green-600 text-sm mt-1">This Gmail address is ready to use</p>
                  )}
                </div>
              </div>
            </div>
          )}
          
          <p className="text-xs text-gray-500 mt-4">
            We validate Gmail format only. We don't check if the email account exists.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleEmailValidator;
