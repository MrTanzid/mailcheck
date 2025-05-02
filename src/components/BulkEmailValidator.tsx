import React, { useState } from 'react';
import { Mail, Loader, Check, X, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

interface ValidationResult {
  email: string;
  valid: boolean;
  message: string;
}

const BulkEmailValidator: React.FC = () => {
  const [emails, setEmails] = useState('');
  const [validating, setValidating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<ValidationResult[]>([]);

  // Helper function to validate a single Gmail address
  const validateGmailAddress = (email: string): ValidationResult => {
    const isGmail = email.toLowerCase().endsWith('@gmail.com');
    
    // Enhanced Gmail validation regex
    // - Must end with @gmail.com
    // - Username must be 6-30 characters
    // - Username can only contain letters, numbers, periods, and underscores
    // - Username cannot start or end with a period
    // - No consecutive periods
    const gmailRegex = /^[a-zA-Z0-9](([a-zA-Z0-9]|[._](?![._]))){4,28}[a-zA-Z0-9]@gmail\.com$/;
    const isValidFormat = gmailRegex.test(email.toLowerCase());
    
    if (!email.includes('@')) {
      return {
        email,
        valid: false,
        message: 'Missing @ symbol'
      };
    } else if (!isGmail) {
      return {
        email,
        valid: false,
        message: 'Not Gmail'
      };
    } else if (!isValidFormat) {
      return {
        email,
        valid: false,
        message: 'Invalid format'
      };
    } else {
      return {
        email,
        valid: true,
        message: 'Valid Gmail'
      };
    }
  };

  const validateEmails = () => {
    if (!emails.trim()) {
      toast.error('Please enter at least one email address');
      return;
    }
    
    // Split by newlines, commas, or semicolons and trim whitespace
    const emailList = emails
      .split(/[\n,;]/)
      .map(e => e.trim())
      .filter(e => e);
    
    if (emailList.length === 0) {
      toast.error('No valid email addresses found');
      return;
    }
    
    setValidating(true);
    setProgress(0);
    setResults([]);
    
    let processed = 0;
    const newResults: ValidationResult[] = [];
    
    // Simulating batch processing with timeouts
    const processNextBatch = (startIdx: number, batchSize: number) => {
      const endIdx = Math.min(startIdx + batchSize, emailList.length);
      const batch = emailList.slice(startIdx, endIdx);
      
      setTimeout(() => {
        batch.forEach(email => {
          const result = validateGmailAddress(email);
          newResults.push(result);
        });
        
        processed += batch.length;
        const newProgress = Math.round((processed / emailList.length) * 100);
        setProgress(newProgress);
        setResults([...newResults]);
        
        if (processed < emailList.length) {
          processNextBatch(endIdx, batchSize);
        } else {
          setValidating(false);
          toast.success(`Validated ${emailList.length} email addresses`);
        }
      }, 300);
    };
    
    processNextBatch(0, 5); // Process in batches of 5 emails
  };

  const copyValidEmails = () => {
    const validEmails = results.filter(r => r.valid).map(r => r.email).join('\n');
    if (!validEmails) {
      toast.error('No valid emails to copy');
      return;
    }
    
    navigator.clipboard.writeText(validEmails)
      .then(() => toast.success('Valid emails copied to clipboard'))
      .catch(() => toast.error('Failed to copy to clipboard'));
  };
  
  const validCount = results.filter(r => r.valid).length;
  const invalidCount = results.length - validCount;

  return (
    <div className="mt-8 animate-fade-in">
      <Card className="glass-card overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Mail className="h-5 w-5 text-purple-500 mr-2" />
            <h3 className="text-xl font-medium">Bulk Email Validation</h3>
          </div>
          
          <Textarea
            placeholder="Enter multiple Gmail addresses (one per line or separated by commas)"
            value={emails}
            onChange={(e) => setEmails(e.target.value)}
            className="min-h-[120px] mb-4"
            disabled={validating}
          />
          
          {validating ? (
            <div className="mb-4 animate-fade-in">
              <div className="flex justify-between text-sm mb-1">
                <span>Validating emails...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          ) : (
            <div className="flex justify-between mb-6">
              <Button 
                onClick={validateEmails} 
                className="bg-purple-500 hover:bg-purple-600"
                disabled={validating}
              >
                Validate All Emails
              </Button>
              
              {results.length > 0 && (
                <Button
                  variant="outline"
                  onClick={copyValidEmails}
                  className="border-purple-300 text-purple-500 hover:bg-purple-50"
                >
                  <Copy className="h-4 w-4 mr-1" />
                  Copy Valid Emails
                </Button>
              )}
            </div>
          )}
          
          {results.length > 0 && (
            <div className="animate-scale-in">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">Results</h4>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                    <span>Valid: {validCount}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                    <span>Invalid: {invalidCount}</span>
                  </div>
                </div>
              </div>
              
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="all">All ({results.length})</TabsTrigger>
                  <TabsTrigger value="valid">Valid ({validCount})</TabsTrigger>
                  <TabsTrigger value="invalid">Invalid ({invalidCount})</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-0">
                  <div className="max-h-[300px] overflow-y-auto border rounded-md">
                    {results.map((result, index) => (
                      <div 
                        key={index}
                        className={`flex items-center justify-between p-3 text-sm border-b last:border-b-0 ${
                          result.valid ? 'bg-green-50' : 'bg-red-50'
                        }`}
                      >
                        <div className="flex items-center">
                          {result.valid ? (
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                          ) : (
                            <X className="h-4 w-4 text-red-500 mr-2" />
                          )}
                          <span className="font-medium">{result.email}</span>
                        </div>
                        <span className={result.valid ? 'text-green-600' : 'text-red-600'}>
                          {result.message}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="valid" className="mt-0">
                  <div className="max-h-[300px] overflow-y-auto border rounded-md">
                    {results.filter(r => r.valid).map((result, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-3 text-sm border-b last:border-b-0 bg-green-50"
                      >
                        <div className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                          <span className="font-medium">{result.email}</span>
                        </div>
                        <span className="text-green-600">{result.message}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="invalid" className="mt-0">
                  <div className="max-h-[300px] overflow-y-auto border rounded-md">
                    {results.filter(r => !r.valid).map((result, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-3 text-sm border-b last:border-b-0 bg-red-50"
                      >
                        <div className="flex items-center">
                          <X className="h-4 w-4 text-red-500 mr-2" />
                          <span className="font-medium">{result.email}</span>
                        </div>
                        <span className="text-red-600">{result.message}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BulkEmailValidator;
