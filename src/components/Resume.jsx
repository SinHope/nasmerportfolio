'use client'

import { useState } from 'react';
import Image from 'next/image';
import pdficon from '@/images/pdficon.png';

export function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    setIsDownloading(true);

    setTimeout(() => {
      // Create a new link element, set the href and download attributes, and click it programmatically
      const link = document.createElement('a');
      link.href = "/Resume.pdf";
      link.download = "Nasmer_Resume.pdf";
      document.body.appendChild(link); // Append to the document
      link.click(); // Trigger download
      document.body.removeChild(link); // Clean up

      setIsDownloading(false);
    }, 3000); // Delay download by 3 seconds
  };

  return (
    <>
      {isDownloading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <p className="text-white text-lg">Your download will start in 3 seconds...</p>
        </div>
      )}
      <a href="/Resume.pdf" download="Nasmer_Resume.pdf" onClick={handleDownloadClick}>
        <Image src={pdficon} alt="Download Resume" width={48} height={48} className="w-12 mt-3 hover:shadow-[0_0_10px_2px_rgba(8,145,178,0.5)] hover:opacity-80" />
      </a>
    </>
  );
}