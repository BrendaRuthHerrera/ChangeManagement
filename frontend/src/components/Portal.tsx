import '../styles/Home.css';

interface App {
  id: number;
  nombre: string;
  url:string;
  descripcion: string;
}

interface PortalProps {
  links:   App[];
}

const Portal: React.FC<PortalProps> = ({ links }) => {


  return (
    <div className='portal'>
        {links.length > 0 ? (
            links.map((link) => (
                <div key={link.id} className='portal-item'>
                    <a href={link.url} target='_blank' rel='noopener noreferrer'>
                        <h3>{link.nombre}</h3>
                        <p>{link.descripcion}</p>
                    </a>
                </div>
            ))
        ) : (
            <div>No applications found</div>
        )}
    </div>
);
};


export default Portal;
