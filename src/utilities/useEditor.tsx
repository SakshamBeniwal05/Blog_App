import React, { useRef, useState } from 'react';
import { Editor } from "primereact/editor";
import useSpotlight from './useSpotlight';
import './UseEditor.css'; // Import our hover styles

interface Position {
  x: number;
  y: number;
}

function UseEditor() {
  const [text, setText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const { x, y }: Position = useSpotlight(containerRef);

  return (
    <div
      className="card spotlight-container"
      ref={containerRef}
      style={{
        // Pass spotlight position to CSS
        ['--x' as any]: `${x}px`,
        ['--y' as any]: `${y}px`
      }}
    >
      <Editor
        id="Editor"
        value={text}
        onTextChange={(e) => setText(e.htmlValue)}
        className="spotlight-editor"
        style={{
          minHeight:"50vh",
          border:'3px solid #1e1e1e;',
        }}
      />
    </div>
  );
}

export default UseEditor;
