import React, { useRef, useState } from 'react';
import { Editor } from "primereact/editor";
import useSpotlight from './useSpotlight';
import './UseEditor.css';

interface Position {
  x: number;
  y: number;
}

function UseEditor({ value, onChange, ...rest }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { x, y }: Position = useSpotlight(containerRef);

  return (
    <div
      className="card spotlight-container"
      ref={containerRef}
      style={{
        ['--x' as any]: `${x}px`,
        ['--y' as any]: `${y}px`
      }}
    >
      <Editor
        id="Editor"
        value={value}
        onTextChange={(e) => onChange(e.htmlValue)}
        className="spotlight-editor"
        style={{
          minHeight: "50vh",
          border: "3px solid #1e1e1e",
          backgroundColor: "transparent"
        }}
        {...rest}
      />
    </div>
  );
}

export default UseEditor;
