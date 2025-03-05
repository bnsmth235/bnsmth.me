import React, { useEffect, useRef } from "react";
import resume from "../../assets/resume.pdf";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
//import "pdfjs-dist/build/pdf.worker";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const Resume: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const renderThumbnail = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(resume).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1 });
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");

        if (canvas && context) {
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          context.setTransform(1, 0, 0, -1, 0, viewport.height); // Flip the image vertically
          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          await page.render(renderContext).promise;
        }
      } catch (error) {
        console.error("Error rendering PDF thumbnail:", error);
      }
    };

    renderThumbnail();
  }, []);

  return (
    <div className="about-section p-4 md:p-8 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
      <p className="text-base md:text-lg mb-4">
        {/* Add your about me description here */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>
      <canvas ref={canvasRef} className="mb-4 w-1/4 max-w-full"></canvas>
      <a href={resume} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
