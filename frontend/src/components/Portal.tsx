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
          <a key={link.id} href={link.url} className="box" target="_blank" rel="noopener noreferrer">
          {link.title}
      </a>
      ))}
  </div>
      
    );
};

export default Portal;
