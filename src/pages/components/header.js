import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SlMenu } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";

import { IoIosArrowForward } from "react-icons/io";

import subItem from "../../utils/infoHeader";
const items = ["courses", "study material", "results", "more"];
function BooksCard(props) {
  return (
    <div
      className={`${
        props.svgPresent === null ? "" : "ml-20"
      }text-base  grid grid-cols-2 text-black gap-2 `}
    >
      {props.data?.map((item, index) => (
        <div key={index} className=" rounded-lg hover:bg-blue-200   p-1 ">
          {item}
        </div>
      ))}
    </div>
  );
}
function SubItemCard(props) {
  const handleClick = () => {
    if (props.subItem) {
      props.onSubMenuToggle(props.index, props.subIndex);
    }
    if (props.onDoubtClick) {
      props.onDoubtClick();
    }
  };
  return (
    <div
      className=" items-center hover:bg-blue-200 w-80 h-20 text-black bg-white flex rounded-lg"
      onClick={handleClick}
    >
      {props.data.listHeading === true ? (
        <div className="text-left px-4">{props.data.name}</div>
      ) : (
        <div>
          {props.data.svg !== "null" && (
            <Image
              src={props.data.svg}
              height={40}
              width={40}
              alt="SubItemCard image"
            />
          )}
        </div>
      )}
      {props.data.listHeading === true ? (
        <div />
      ) : (
        <div className="flex-grow flex items-center justify-between">
          <div className="px-8 items-start flex flex-col flex-grow">
            <div className="text-left flex-grow">{props.data.name}</div>
            <div className="text-sm opacity-50 text-left">
              {props.data.subItemAbout}
            </div>
          </div>
          {props.data.listPresent === "true" && <IoIosArrowForward />}
        </div>
      )}
    </div>
  );
}
function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState([false, false]);
  const [foundItem, setFoundItem] = useState(null);
  const [foundSubItem, setFoundSubItem] = useState(null);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  useEffect(() => {
    // Whenever activeItem changes, update foundItem
    if (activeItem !== null) {
      const item = subItem.find((item) => item.id === activeItem);
      setFoundItem(item);
    } else {
      setFoundItem(null);
    }
  }, [activeItem]);

  useEffect(() => {
    // Whenever activeItem changes, update foundItem
    if (activeSubItem !== null && activeItem !== null) {
      // const item = foundItem.subItems?.find(
      //   (item) => item.id === activeSubItem
      // );
      const item = subItem.find((item) => item.id === activeSubItem[0]);
      const tryy = item.subItems?.find((item) => item.id === activeSubItem[1]);
      setFoundSubItem(tryy?.lists);
    } else {
      setFoundSubItem(null);
    }
  }, [activeSubItem]);

  const toggleSubMenu = (index) => {
    setActiveItem(index === activeItem ? null : index);
    setActiveSubItem(null);
  };
  const toggleSubMenuItems = (index, subItem) => {
    setActiveSubItem([index, subItem]);
  };
  // const hoverHandler1 = (index) => {
  //   setActiveItem(index === activeItem ? null : index);
  // };
  // const hoverHandler2 = (index) => {
  //   setActiveSubItem(activeSubItem != null ? index : null);
  // };
  // console.log("active Item", activeItem);

  // console.log("active SubItem", activeSubItem);

  // console.log("foundItem", foundItem);
  // console.log("foundSubItem", foundSubItem);
  const [visibleBooksCards, setVisibleBooksCards] = useState([]);

  const toggleBooksCardVisibility = (index) => {
    if (visibleBooksCards.includes(index)) {
      // Hide the BooksCard
      setVisibleBooksCards((prev) => prev.filter((i) => i !== index));
    } else {
      // Show the BooksCard
      setVisibleBooksCards((prev) => [...prev, index]);
    }
  };
  return (
    <div>
      <nav className={`bg-blue-500 px-14 w-screen border-b-2`}>
        <div className="flex items-center">
          <Image
            className="mx-6 max-md:hidden"
            src="./logo/logo.svg"
            alt="My Logo"
            width={230}
            height={64}
          />

          <div className="md:hidden">
            <SlMenu />
          </div>
          <div className="flex-grow">
            <ul className="flex justify-evenly">
              {items.map((item, index) => (
                <div key={index} className="relative">
                  <li
                    className={`flex px-7 items-center group hover:bg-blue-400 hover:border-white hover:border-2  hover:rounded-3xl p-1 `}
                    onClick={() => toggleSubMenu(index)}
                    // onMouseEnter={() => hoverHandler1(index)}
                  >
                    <div className="px-2">{item}</div>
                    <IoIosArrowDown size={15} />
                  </li>
                  {index === activeItem && foundItem && (
                    <ul className="absolute w-fit  left-0 mt-2 bg-white  text-white border-white border-2 rounded-lg">
                      {foundItem?.subItems.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="px-4 py-2 "
                          // onClick={() => toggleSubMenuItems(index, subItem.id)}
                          // onMouseEnter={() => hoverHandler2(index)}
                        >
                          <SubItemCard
                            data={subItem}
                            subItem={true}
                            index={index}
                            subIndex={subItem.id}
                            onSubMenuToggle={toggleSubMenuItems}
                          />
                          {activeSubItem != null && (
                            <ul className=" rounded-lg absolute w-fit bg-white  border-white border-2 top-0 left-full flex flex-col  ">
                              {foundSubItem?.map((subItem, listItemIndex) => (
                                <div
                                  key={listItemIndex}
                                  className="flex items-center flex-col"
                                >
                                  <div
                                    // onClick={() =>
                                    //   toggleBooksCardVisibility(listItemIndex)
                                    // }
                                    className=" doubt "
                                  >
                                    <SubItemCard
                                      data={subItem}
                                      onDoubtClick={() =>
                                        toggleBooksCardVisibility(listItemIndex)
                                      }
                                    />
                                  </div>
                                  {visibleBooksCards.includes(
                                    listItemIndex
                                  ) && (
                                    <BooksCard
                                      data={subItem.books}
                                      svgPresent={subItem.svg}
                                    />
                                  )}
                                </div>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className="flex mx-7">
            <Image src="./call.svg" width={50} height={50} alt="call.svg" />
            <div className="flex flex-col">
              <div className="text-yellow-300">need help? talk to experts</div>
              <div className="text-yellow-300">1800-419-427</div>
            </div>
          </div>
          <button className="rounded-xl bg-white" style={{ height: 32 }}>
            <p className="text-blue-500 px-5">sign-in</p>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
