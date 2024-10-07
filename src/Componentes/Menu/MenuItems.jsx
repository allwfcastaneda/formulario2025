import React from "react";
import { useState } from "react";
import { DropdownItemPadre, DropdownItems, StyledLink } from "./styled";
export const MenuItems = ({ menuItems, openMenu }) => {
  const [dropdownStates, setDropdownStates] = useState({});

  const toggleDropdown = (index) => {
    setDropdownStates({
      ...dropdownStates,
      [index]: !dropdownStates[index],
    });
  };
  return (
    <>
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          {item.dropdown ? (
            <DropdownItemPadre
              key={index}
              onClick={() => toggleDropdown(index)}
              open={dropdownStates[index]}
            >
              <div>
                <img src={item.imgSrc} alt={item.alt} />
                {item.text}
              </div>
              <img
                src="/global/icons/ChevronDown.svg"
                alt="arrowDown"
                className="flechaMenu"
              />
            </DropdownItemPadre>
          ) : (
              <StyledLink onClick={() => openMenu(false)} key={index} to={item.to}>
                <img src={item.imgSrc} alt={item.alt} />
                {item.text}
              </StyledLink>
          )}
          {item.dropdown && dropdownStates[index] && (
            <DropdownItems open={dropdownStates[index]}>
              {item.dropdownItems.map((subItem, subIndex) => (
                  <StyledLink onClick={() => openMenu(false)} fontSize='18px' lineheight='16.8px' key={subIndex} to={subItem.to}>
                    {subItem.text}
                  </StyledLink>
              ))}
            </DropdownItems>
          )}
        </React.Fragment>
      ))}
    </>
  );
};
