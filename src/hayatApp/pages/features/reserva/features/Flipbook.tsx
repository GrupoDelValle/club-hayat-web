import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from './aaaa.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Flipbook: React.FC = () => {
    const [numPages, setNumPages] = useState<number | undefined>(undefined);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <div className='h-screen w-screen flex flex-col gap-5 justify-center items-center bg-gray-900 overflow-hidden'>
            <HTMLFlipBook width={570} height={400}>
                {
                    [...Array(numPages)].map((_, pNum) => (
                        <div key={pNum} className="demoPage">
                            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                                <Page pageNumber={pNum + 1} width={400} renderAnnotationLayer={false} renderTextLayer={false} />
                            </Document>
                        </div>
                    ))
                }
            </HTMLFlipBook>
        </div>
    );
}

export default Flipbook;