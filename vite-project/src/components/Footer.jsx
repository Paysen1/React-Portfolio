import React from 'react';

function Footer() {
    return (
      <footer className="bg-dark text-light py-3"  style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        <div className="container text-center"> 
          <a href="https://github.com/Paysen1" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            LinkedIn
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            Twitter
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;