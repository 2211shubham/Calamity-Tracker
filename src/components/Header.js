import { Icon } from '@iconify/react'
import warningIcon from "@iconify/icons-mdi/warning-octagon"; 

const Header = () => {
  return (
    <header className="header">
      <h1> <Icon icon={warningIcon} /> Calamity Tracker</h1>
    </header>
  );
};

export default Header;
