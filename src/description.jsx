import { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Include Quill styles

const DescriptionEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const quillInstanceRef = useRef(null); // Ref to store Quill instance

  useEffect(() => {
    if (!quillInstanceRef.current) {
      quillInstanceRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
          ],
        },
      });

      quillInstanceRef.current.on('text-change', () => {
        // Use getText() instead of root.innerHTML to get plain text
        onChange(quillInstanceRef.current.getText().trim());
      });
    }

    // Safely set the initial content as plain text
    if (
      quillInstanceRef.current &&
      quillInstanceRef.current.getText().trim() !== value
    ) {
      quillInstanceRef.current.setText(value); // Set initial content safely
    }
  }, []); // Empty dependency array ensures this only runs once

  useEffect(() => {
    if (
      quillInstanceRef.current &&
      quillInstanceRef.current.getText().trim() !== value
    ) {
      quillInstanceRef.current.setText(value); // Safely update content
    }
  }, [value]);

  return <div id='description-work' ref={editorRef} className='quill' />;
};

export default DescriptionEditor;
