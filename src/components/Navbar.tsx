import * as React from 'react';
import { AguaIcon } from '../assets';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { styles } from '../styles';
import { ContextType, AppContext } from '../context';

const Navbar = () => {
  const { setSideModal, sideModal } = React.useContext(
    AppContext
  ) as ContextType;

  return (
    <nav className={styles.navBar}>
      <AguaIcon
        width="10rem"
        color={!sideModal ? '#f0efef' : '#fff'}
        gColor={!sideModal ? '#000' : '#fff'}
      />
      <Bars3Icon
        className="w-7 cursor-pointer"
        onClick={() => setSideModal(!sideModal)}
      />
    </nav>
  );
};

export default Navbar;
