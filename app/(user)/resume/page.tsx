import SectionContainer from "@/components/utils/SectionContainer";
import { Viewer } from '@react-pdf-viewer/core';
import PdfViewer from "@/components/ui/PdfViewer";

import TitleSectionPageContainer from "@/components/utils/TitleSectionPageContainer";

const Resume = () => (
  <SectionContainer >
    <div className='w-full flex flex-col items-center gap-8' style={{width: '100%', height: '100vh' }}>
      <TitleSectionPageContainer title='Resume' />
       {/* <div className="w-full h-screen">
            <iframe  
              src="/resume/TranQuocTrung_Resume.pdf" 
              style={{overflow: 'hidden', width: '100%', height: '100%' }}
              allowFullScreen={true}
             />
      </div>  */}
      <PdfViewer url={"/resume/TranQuocTrung_Resume.pdf"} />
    </div>

  </SectionContainer >
);

export default Resume;