'use client';

import { useEffect } from 'react';

interface LinkedInEmbedProps {
  postUrl: string;
}

export default function LinkedInEmbed({ postUrl }: LinkedInEmbedProps) {
  useEffect(() => {
    // Load LinkedIn SDK
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="linkedin-post-embed w-full max-w-2xl mx-auto overflow-hidden rounded-lg"
      style={{ minHeight: '400px' }}
    >
      <iframe
        src={`https://www.linkedin.com/embed/feed/update/${postUrl}`}
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
        title="LinkedIn Post"
      ></iframe>
    </div>
  );
}
