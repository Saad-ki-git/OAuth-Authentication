import React,{Fragment,useState} from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  ArrowRightOnRectangleIcon,
  PlusIcon
} from "@heroicons/react/24/outline";
import { Link,useNavigate,Navigate  } from "react-router-dom";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";


// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    action: "Dashboard",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    action: "editProfile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    action: "helpme",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    action:"logout_user",
    icon: PowerIcon,
  },
];
 
// For profile  to show
function ProfileMenu({logout}) {

  const [redirect,setRedirect] = useState(false)
  const logout_user = ()=>{
    logout();
      setRedirect(true)
  }

  // states for open and close
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);
  const helpme = () => {
    // Use history.push to navigate programmatically
      navigate('https://www.google.com');
  };
 

  return (
    <Fragment>
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon,action }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          const handleClick = () => {
            if (action === 'logout_user') {
              logout_user(); //taken directly as props from actions/auth
            } 
            else if (action === "helpme"){
              helpme();
            }
            else {
              closeMenu();
            }
          };
          return (
            <MenuItem
              key={label}
              onClick={handleClick}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
    {redirect ? <Navigate replace to="/" />:<Fragment></Fragment>}
    
    </Fragment>
  );
}



 
// pages dropdown
const navListMenuItems = [
  {
    title: "@saaadzaibkhan/instagram",
    description:
      "Follow me on instagram",
  },
  {
    title: "@saad-ki-git/github",
    description:
      "Full stack projects using react/django.",
  },
  {
    title: "medium/@saad_sec",
    description:
      "Learn about Internet security and how to pentrate it with me.Do some CTF(Capture the Flag)",
  },
];
 


//                                                                            NavMenu


// All about the pages in 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  // DropDown of pages
  const renderItems = navListMenuItems.map(({ title, description }) => (
    <Link to="/nowhere" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </Link>
  ));
 
  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
 



// nav list component
const navListItems = [
  {
    label: "Account",
    icon: UserCircleIcon,
  },
  {
    label: "Blocks",
    icon: CubeTransparentIcon,
  },
  {
    label: "Docs",
    icon: CodeBracketSquareIcon,
  },
];
 
function NavList() {
  return (
    <ul className=" mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Link
          key={label}
          to={`/${label.toLowerCase()}`} // Set the appropriate URL
          variant="small"
          color="blue-gray"
          className=" text-blue-gray font-normal flex items-center gap-2 lg:rounded-full"
        >
          
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
          {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
          {label}
          </MenuItem>
        </Link>
      ))}
    </ul>
  );
} 





//                                                                       main navbar

function ComplexNavbar({logout,isAuthenticated}) {
  
  const [isNavOpen, setIsNavOpen] = React.useState(false);
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 

// loging and signup
const authLinks = [
  {
    label: "SignUp",
    icon: PlusIcon,
  },
  {
    label: "Login",
    icon: ArrowRightOnRectangleIcon,
  },
  
];
  const guestLinks = () => (
    <Fragment>
       <ul className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
      {authLinks.map(({ label, icon }, key) => (
        <Link
          key={label}
          to={`/${label.toLowerCase()}`} // Set the appropriate URL
          className="text-blue-gray font-normal flex items-center gap-2 lg:rounded-full"
        >
          
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
          {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
          {label}
          </MenuItem>
        </Link>
      ))}
    </ul>
    </Fragment>
);

  return (
    <div className="bg-gray-500">
      <Navbar className="mx-auto  lg:rounded-full lg:pl-6">
      <div className="relative  mx-auto flex items-center text-blue-gray-900">
        <Link
          as="a"
          to="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          saad-ki-git
        </Link>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        {isAuthenticated  ? <ProfileMenu logout={logout} /> : guestLinks()}

      </div>
      <Collapse open={isNavOpen} className=" bg-zinc-400 overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
    </div>
  );
}
const mapStateToProps = state =>({
  isAuthenticated:state.auth.isAuthenticated,

})

const mapDispatchToProps = {
  logout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComplexNavbar);