# reactSubMenu
This React submenu opens vertical content boxes when the links are hovered over. Content boxes respond based on amount of sub-menu links. 

A brief walkthrough of the relevant React code is given below:

First the components are added to the App.
```React
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
}
```

Next global context is se-up in the context.js file to make the relevant functions and states accessible throughout the application.
```React
import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = (text, coordinates) => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
```

Once the global context has been set-up and exported for use the AppProvider is imported into index.js (not shown here). Next the global context is imported into the hero.js file bringing with it the close modal functionality (sub-menu).
```React
import { useGlobalContext } from "./context";
const Hero = () => {
  const { closeModal } = useGlobalContext();

  return (
  );
};
```

Next the components are worked on, starting first with the navbar.
```React
const Navbar = () => {
  const { openSidebar, openModal, closeModal } = useGlobalContext();
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};
```

Next the <ul> links are constructed. 
```React
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
```

Next the hero component is worked on and its return created.
```React
import { useGlobalContext } from "./context";
const Hero = () => {
  const { closeModal } = useGlobalContext();

  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Get Paid like a heavyweight!</h1>
          <p>
            I make chedder cheese money for cheeder cheese fools my friend
            because everyone knows that chedder does indeed make it better and
            so therefore and whence it came to be that it was chedder which
            ruled the day with much cheese and rejoicing with chedder.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};
```

After this the sidebar was worked on - it is only displayed on small screens. Due to the nestedness of the data, there are two iterations in order to get to the inner arrays objects. This code lends functionality to the sidebar which should work after this point.
```React
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a href={url} key={index}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
```

Now work to get the submenu to display as well.
```React
const displaySubmenu = (e) => {
console.log('test');
openModal();
} return(
<nav>
  <button onMouseOver={displaySubmenu} </button>
```

This will display the submenu on hover but will not close on mouseout. Goal is to only display links belonging to the same page, to change the container size based on the # of links and for the location of the modal to also change depending on the link being hovered over.
```React
const Navbar = () => {
  const { openSidebar, openModal, closeModal } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    openSubmenu()
```

Now the location and measurement data of each header link is determined. Next the center and bottom of the buttons are found so that averages can be taken for the submenu page to open on those coordinates.
```React
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openModal(page, { center, bottom });
  };
```

Now create a way to get the page and coordinates for the page.
```React
const openSubmenu = (text, coordinates) => {
setLocation(coordinates)

const [location, setLocation] = useState({})
```

Next set up the functionality for changing the submenus location on the screen.
```React
const Submenu = () => {
  const {
    isModalOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  return (
    <aside
      className={`${isModalOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
```

Now the menu location changes. Now the modal width needs to be made to change according to the # of links in the submenu.
```React
const [page, setPage] = useState({page: "", links: []})

const openSubmenu = (text, coordinates) => {
  const page = sublinks.find((link) => link.page === text)
  setPage(page)
  setLocat...
```

Next the submenu is imported.
```React
const submenu = () => {
const {isModalOpen, location, page: {page, links}} = useGlobalContext();
```

Next the links are iterated over and the columns will be changed depending on the # of links.
```React
<h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
```

Now the modal populates but the width remains unchanged. useEffect is used to set the width of the columns as stated previous.
```React
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);
```

Now last thing is to hide the modal while not hovering the buttons or modal.
```React
  return (
    <section className="hero" onMouseOver={closeModal}>

const handleSubmenu = (e) => {
  if(!e.target.classList.contains('link-btn')){
    closeSubmenu()
    }
 }
 return(
    <nav class='nav' onMouseOver= {handleSubmit}>
 ```
 
 ***End walkthrough
    
  
