import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { logout } from "../../../actions/userAction";

import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import CloseIcon from "@material-ui/icons/Close";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { useAlert } from "react-alert";
import logo from "../../../images/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
  { label: "About", to: "/about" },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const location = useLocation();

  // ✅ auto-close drawer on route change
  React.useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const alert = useAlert();

  // Avatar menu state
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);

  const openUserMenu = (e) => setAnchorEl(e.currentTarget);
  const closeUserMenu = () => setAnchorEl(null);

  const go = (path) => {
    closeUserMenu();
    history.push(path);
  };

  const logoutUser = () => {
    closeUserMenu();
    dispatch(logout());
    alert.success("Logout Successfully");
    history.push("/");
  };

  const avatarSrc =
    user?.avatar?.url || user?.avatar?.secure_url || "/Profile.png";

  return (
    <>
      <AppBar
        position="sticky"
        style={{
          background: "white",
          color: "rgba(35,35,35,0.9)",
          boxShadow: "none",
        }}
      >
        <Toolbar style={{ display: "flex", gap: 12 }}>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img src={logo} alt="logo" style={{ height: 62, marginRight: 10 }} />
            <Typography variant="h6" style={{ fontWeight: 700 }}>
              iStore
            </Typography>
          </Link>

          <div style={{ flex: 1 }} />

          {/* Desktop nav */}
          <div
            className="desktopNav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                style={{
                  textDecoration: "none",
                  color: "rgba(35,35,35,0.8)",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Link>
            ))}

            <Link to="/search" style={{ color: "rgba(35,35,35,0.8)" }}>
              <SearchIcon />
            </Link>

            <Link to="/cart" style={{ color: "rgba(35,35,35,0.8)" }}>
              <ShoppingCartIcon />
            </Link>

            {/* ✅ Avatar INSIDE tabbar */}
            {isAuthenticated ? (
              <>
                <IconButton
                  onClick={openUserMenu}
                  style={{ padding: 4 }}
                  aria-controls={menuOpen ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={menuOpen ? "true" : undefined}
                >
                  <Avatar
                    src={avatarSrc}
                    alt="Profile"
                    style={{
                      width: 34,
                      height: 34,
                      border: "2px solid rgba(0,0,0,0.08)",
                    }}
                  />
                </IconButton>

                <Menu
                  id="account-menu"
                  anchorEl={anchorEl}
                  open={menuOpen}
                  onClose={closeUserMenu}
                  keepMounted
                  getContentAnchorEl={null}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <MenuItem disabled>
                    <Typography variant="body2" style={{ fontWeight: 600 }}>
                      {user?.name || "Account"}
                    </Typography>
                  </MenuItem>
                  <Divider />

                  {user?.role === "admin" && (
                    <MenuItem onClick={() => go("/admin/dashboard")}>
                      <DashboardIcon style={{ marginRight: 10 }} />
                      Dashboard
                    </MenuItem>
                  )}

                  <MenuItem onClick={() => go("/orders")}>
                    <ListAltIcon style={{ marginRight: 10 }} />
                    Orders
                  </MenuItem>

                  <MenuItem onClick={() => go("/account")}>
                    <PersonIcon style={{ marginRight: 10 }} />
                    Profile
                  </MenuItem>

                  <Divider />

                  <MenuItem onClick={logoutUser}>
                    <ExitToAppIcon style={{ marginRight: 10 }} />
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Link to="/login" style={{ color: "rgba(35,35,35,0.8)" }}>
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            style={{ marginLeft: 8 }}
            className="mobileMenuBtn"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div style={{ width: 280 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 16,
            }}
          >
            <Typography variant="h6" style={{ fontWeight: 700 }}>
              Menu
            </Typography>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>

          <Divider />

          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.to}
                component={Link}
                to={item.to}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
            <ListItem button component={Link} to="/search" onClick={() => setDrawerOpen(false)}>
              <SearchIcon style={{ marginRight: 12 }} />
              <ListItemText primary="Search" />
            </ListItem>

            <ListItem button component={Link} to="/cart" onClick={() => setDrawerOpen(false)}>
              <ShoppingCartIcon style={{ marginRight: 12 }} />
              <ListItemText primary="Cart" />
            </ListItem>

            {isAuthenticated ? (
              <>
                {user?.role === "admin" && (
                  <ListItem
                    button
                    component={Link}
                    to="/admin/dashboard"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <DashboardIcon style={{ marginRight: 12 }} />
                    <ListItemText primary="Dashboard" />
                  </ListItem>
                )}

                <ListItem button component={Link} to="/orders" onClick={() => setDrawerOpen(false)}>
                  <ListAltIcon style={{ marginRight: 12 }} />
                  <ListItemText primary="Orders" />
                </ListItem>

                <ListItem button component={Link} to="/account" onClick={() => setDrawerOpen(false)}>
                  <PersonIcon style={{ marginRight: 12 }} />
                  <ListItemText primary="Profile" />
                </ListItem>

                <ListItem
                  button
                  onClick={() => {
                    setDrawerOpen(false);
                    logoutUser();
                  }}
                >
                  <ExitToAppIcon style={{ marginRight: 12 }} />
                  <ListItemText primary="Logout" />
                </ListItem>
              </>
            ) : (
              <ListItem button component={Link} to="/login" onClick={() => setDrawerOpen(false)}>
                <ListItemText primary="Login" />
              </ListItem>
            )}
          </List>
        </div>
      </Drawer>

      {/* Responsive CSS */}
      <style>
        {`
          .mobileMenuBtn { display: none; }
          @media (max-width: 900px) {
            .desktopNav { display: none !important; }
            .mobileMenuBtn { display: inline-flex !important; }
          }
          a:hover { color: #eb4034; }
        `}
      </style>
    </>
  );
};

export default Header;