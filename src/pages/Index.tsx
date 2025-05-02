
import React, { useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EmailValidator from '@/components/EmailValidator';
import Footer from '@/components/Footer';
import { Info, Book, Check } from 'lucide-react';

const Index = () => {
  const validatorRef = useRef<HTMLElement>(null);

  const scrollToValidator = () => {
    validatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero onScrollToValidate={scrollToValidator} />
        <section id="validation" ref={validatorRef}>
          <EmailValidator />
        </section>
        
        {/* Learning Section moved from Learn.tsx */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-full mb-4">
                <Book className="h-6 w-6 text-purple-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Understanding Gmail Validation
              </h1>
              <p className="text-lg text-gray-600">
                Learn why validating Gmail addresses is crucial for your email campaigns
              </p>
            </div>

            <div className="space-y-12">
              <section className="glass-card p-8 rounded-xl animate-fade-in">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <Info className="mr-2 h-5 w-5 text-purple-500" />
                  Why Validate Gmail Addresses?
                </h2>
                <div className="prose max-w-none">
                  <p>
                    Email validation is a crucial step in maintaining a healthy email list. For Gmail addresses specifically, validation helps you:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Reduce bounce rates in your email campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Protect your sender reputation with email providers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Prevent wasted resources on invalid email addresses</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Improve overall engagement metrics</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="glass-card p-8 rounded-xl animate-fade-in">
                <h2 className="text-2xl font-semibold mb-4">How MailCheck Works</h2>
                <div className="prose max-w-none">
                  <p>
                    Our Gmail validation system checks several aspects of an email address to determine its validity:
                  </p>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/50 p-6 rounded-lg border border-purple-100">
                      <h3 className="text-lg font-medium mb-2">Syntax Check</h3>
                      <p className="text-gray-600 text-sm">
                        Verifies that the email follows the proper format for Gmail addresses
                        (username@gmail.com) with correct characters and length.
                      </p>
                    </div>
                    
                    <div className="bg-white/50 p-6 rounded-lg border border-purple-100">
                      <h3 className="text-lg font-medium mb-2">Domain Verification</h3>
                      <p className="text-gray-600 text-sm">
                        Confirms that the domain is valid and properly formatted as a Gmail domain.
                      </p>
                    </div>
                    
                    <div className="bg-white/50 p-6 rounded-lg border border-purple-100">
                      <h3 className="text-lg font-medium mb-2">Pattern Recognition</h3>
                      <p className="text-gray-600 text-sm">
                        Identifies common Gmail patterns and checks for Gmail-specific rules
                        like period (.) placement having no effect on delivery.
                      </p>
                    </div>
                    
                    <div className="bg-white/50 p-6 rounded-lg border border-purple-100">
                      <h3 className="text-lg font-medium mb-2">Format Normalization</h3>
                      <p className="text-gray-600 text-sm">
                        Normalizes variations in Gmail addresses to their canonical form,
                        removing periods and handling plus-addressing.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="glass-card p-8 rounded-xl animate-fade-in">
                <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
                <div className="prose max-w-none">
                  <p>
                    To maintain a healthy email list, consider these best practices:
                  </p>
                  
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span><strong>Regular Validation:</strong> Validate your email list quarterly to keep it clean.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span><strong>Double Opt-in:</strong> Use double opt-in to ensure subscribers provide valid emails.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span><strong>Monitor Bounce Rates:</strong> Keep track of bounced emails and remove them promptly.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span><strong>Segment Your List:</strong> Separate validated emails for better campaign performance.</span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
