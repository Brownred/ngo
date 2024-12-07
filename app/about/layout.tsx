import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'About BSDC - Our Mission, Vision, and Impact in Somalia',
    description: 'Learn about Barwaqo Social Development Committee\'s journey since 2020, our core values, areas of focus, and commitment to sustainable community development in Somalia.',
    keywords: [
      'BSDC mission', 'NGO vision', 'community empowerment', 
      'Somalia development', 'humanitarian NGO', 'social impact'
    ]
  }


export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div>
           
                {children}
            
        </div>
    );
};
