import {Document, Page, pdfjs} from 'react-pdf'
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './App.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  return (
    <>
      <Document file="/flayer.pdf" >
        <Page pageNumber={1} renderAnnotationLayer={false} />
        <Page pageNumber={2} renderAnnotationLayer={false} />
      </Document>
    </>
  )
}

export default App
