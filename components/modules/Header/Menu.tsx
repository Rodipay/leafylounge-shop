import { $menuIsOpen, closeMenu } from "@/context/modals";
import { useLang } from "@/hooks/useLang";
import { removeOverflowHiddenFromBody } from "@/lib/utils/common";
import { useUnit } from "effector-react";
import { useState } from "react";

const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyersList, setShowBuyersList] = useState(false)
  const [showContactsList, setShowContactsList] = useState(false)
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, translations } = useLang()

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeMenu()
  }

  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <button 
        className={`btn-reset nav-menu__close ${menuIsOpen ? 'open' : ''}`} 
        onClick={handleCloseMenu}
      />
      <h1>Menu</h1>
    </nav>
  );
};

export default Menu;