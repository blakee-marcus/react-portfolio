'use client';

import { Suspense } from 'react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <Suspense fallback={<div className='p-8 text-center'>Loading form...</div>}>
      <ContactForm />
    </Suspense>
  );
}
