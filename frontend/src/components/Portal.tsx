import React from 'react';
import '../styles/Home.css';

interface LinkData {
  id: number;
  url:string;
  title: string;
  description: string;
}

const Portal = ({ links }: { links: LinkData[] }) => {
    return(
      <div className="container">
      {links.map(link => (
          <button key={link.id} className="box" onClick={() => { window.location.href = link.url }}>
              {link.title}
          </button>
      ))}
  </div>
      
    );
};

export default Portal;
