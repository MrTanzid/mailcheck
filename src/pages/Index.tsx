
import React, { useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EmailValidator from '@/components/EmailValidator';
import Footer from '@/components/Footer';

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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
