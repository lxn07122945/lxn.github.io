import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="scroll-container">
      <div className="screen screen-1">第一屏内容</div>
      <div className="screen screen-2">第二屏内容</div>
      <div className="screen screen-3">第三屏内容</div>
      <div className="screen screen-4">第四屏内容</div>
    </div>
  );
};

export default App
