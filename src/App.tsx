import { useState, useEffect, useContext } from 'react';
import { Loader, Navbar, SideModal } from './components';
import { Home } from './pages';
import { ContextType, AppContext } from './context';

function App() {
  const { sideModal } = useContext(AppContext) as ContextType;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sideModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [sideModal]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="h-screen">
          {sideModal && <SideModal />}
          <Navbar />
          <Home />
        </div>
      )}
    </>
  );
}

export default App;
