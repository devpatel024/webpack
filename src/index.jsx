import React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css"

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1 className='text-red-400'>Hello, world</h1>);