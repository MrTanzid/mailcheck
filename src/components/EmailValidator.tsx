
import React, { useRef } from 'react';
import SingleEmailValidator from './SingleEmailValidator';
import BulkEmailValidator from './BulkEmailValidator';

const EmailValidator: React.FC = () => {
  const validatorRef = useRef<HTMLDivElement>(null);

  return (
    <section id="validation" ref={validatorRef} className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Gmail Validator Tool</h2>
        <p className="text-gray-600">
          Check if your Gmail addresses are valid using our simple tools.
          Validate a single email or process them in bulk.
        </p>
      </div>

      <SingleEmailValidator />
      <BulkEmailValidator />
    </section>
  );
};

export default EmailValidator;
