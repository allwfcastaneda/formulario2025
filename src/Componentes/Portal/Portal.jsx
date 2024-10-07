import ReactDOM from 'react-dom';

export const Portal = ({ children }) => {
  const portalRoot = document.getElementById('portal-root'); // Asegúrate de tener este elemento en tu HTML
  return ReactDOM.createPortal(children, portalRoot);
};

