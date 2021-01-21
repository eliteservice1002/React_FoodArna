import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/icons/List';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Hidden from '@material-ui/core/Hidden';
import clsx from 'clsx';
import './style.css';
const styles = theme => ({
    root: {
        display: 'flex'
    },
    appBar: {
        position: '',
        backgroundColor: '#12284C',
        width: "100%",
        padding: '8px 0px',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    grow: {
        flexGrow: 1,
    },
    logo: {
        width: '280px',
        cursor: 'pointer'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
        },
    },
    avatar: {
        marginTop: '3px',
        borderRadius: '5px',
    },
    profilebtn: {
        color: "white",
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    topmenu: {
        fontSize: '20px',
        marginLeft: '20px',
    },
    topmenuitem: {
        paddingLeft: '30px',
        color: 'white',
    },
    topdevider: {
        backgroundColor: '#2D3E5B',
        minWidth: '5px',
        padding: '6px 3px',
        margin: '0px 15px',
        borderRadius: '3px',
    },
    topbadge: {
        fontSize: '8px',
    },
    listicon: {
        color: "white",
    },
    moreMenu: {
        left: 0,
    },
    menuitem: {
        padding: "20px 100px 30px 28px",
        fontSize: 25,
        color: "#334665",
    },
    menuitemwith: {
        color: "#334665",
        fontSize: 25,
        padding: "20px 100px 30px 28px",
    },
    profilemenuitem: {
        color: "#334665",
        fontSize: 25,
        padding: "20px 28px 20px 100px",
    },
    menufont: {
        fontFamily: 'Sentinel-Black',
        src: ('../assets/fonts/Sentinel-Black.otf')
    }
})

const Header = ({ history, classes }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreMenu, setMobileMoreMenu] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreMenu);

    function handleProfileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleMobileMenuClose() {
        setMobileMoreMenu(null);
    }

    function handleMenuClose() {
        setAnchorEl(null);
        handleMobileMenuClose();
    }

    function handleMobileMoreMenuOpen(event) {
        setMobileMoreMenu(event.currentTarget);
    }

    const renderProfileMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem className={classes.profilemenuitem} style={{color: "#11274B", fontWeight: "bold"}}><div className={classes.grow} />View My Profile</MenuItem>
            <MenuItem className={classes.profilemenuitem} onClick={handleMenuClose}><div className={classes.grow} />Privacy Settings</MenuItem>
            <MenuItem className={classes.profilemenuitem} onClick={handleMenuClose}><div className={classes.grow} />Contact Info</MenuItem>
            <MenuItem className={classes.profilemenuitem} onClick={handleMenuClose}><div className={classes.grow} />Memberships</MenuItem>
            <MenuItem className={classes.profilemenuitem} onClick={handleMenuClose}><div className={classes.grow} />Bio & Careea</MenuItem>
            <MenuItem className={classes.profilemenuitem} onClick={handleMenuClose}><div className={classes.grow} />Recent Activity</MenuItem>
            <MenuItem className={classes.profilemenuitem} onClick={handleMenuClose}><div className={classes.grow} />Courses played</MenuItem>
            <MenuItem className={classes.profilemenuitem} onClick={handleMenuClose}><div className={classes.grow} />Wishlist</MenuItem>
            <MenuItem className={classes.profilemenuitem} onClick={handleMenuClose}><div className={classes.grow} />Gear</MenuItem>
            <MenuItem className={classes.profilemenuitem} onClick={handleMenuClose} style={{color: "#11274B"}}><div className={classes.grow} />Sign Out</MenuItem>
        </Menu>
    );
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreMenu}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem className={classes.menuitem} style={{ color: "#334665", fontSize: 23, width: 275 }}>
                Menu
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose} className={classes.menuitem}>
                Home
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose} className={classes.menuitem}>
                Members
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose} className={classes.menuitem}>
                Courses
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose} className={classes.menuitem}>
                Groups
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose} className={classes.menuitem}>
                Play Golf
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose} className={classes.menuitemwith}>
                <IconButton aria-label="Show 11 new notifications" color="inherit">
                    <Badge badgeContent={2} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                Notifications(2)
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose} className={classes.menuitemwith}>
                <IconButton aria-label="Show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                Messages
            </MenuItem>
        </Menu>
    );
    return (
        <div className={classes.root}>
            <AppBar elevation={0} position="static" className={classes.appBar}>
                <Toolbar>
                    <Button onClick={handleMobileMoreMenuOpen} aria-controls="simple-menu" aria-haspopup="true" className={clsx(classes.sectionMobile, classes.listicon)} >
                        <List style={{ fontSize: "40px" }} />
                    </Button>
                    <img alt="Captain's Club" onClick={() => history.push('/')} className={classes.logo} src={require('../assets/images/logo_long.svg')} />
                    <Hidden mdDown>
                        <div className={classes.topmenu}>
                            <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.topmenuitem} >
                                Home
                            </Button>
                                <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.topmenuitem}>
                                    Members
                            </Button>
                                <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.topmenuitem}>
                                    Courses
                            </Button>
                                <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.topmenuitem}>
                                    Groups
                            </Button>
                                <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.topmenuitem}>
                                    Play Golf
                            </Button>
                        </div>
                    </Hidden>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Avatar alt="Captin" src={require('../assets/images/profile_pic.png')} className={classes.avatar} />
                        <Button aria-controls="simple-menu" onClick={handleProfileMenuOpen} aria-haspopup="true" className={classes.profilebtn}>
                            Captain
                            <ArrowDropDown />
                        </Button>
                        <Hidden mdDown>
                            <div className={classes.topdevider}></div>
                            <IconButton aria-label="Show 17 new notifications">
                                <Badge badgeContent={1} color="primary">
                                    <NotificationsIcon style={{ color: 'white' }} />
                                </Badge>
                            </IconButton>
                            <IconButton aria-label="Show 4 new mails">
                                <Badge badgeContent={4} color="primary" className={classes.topbadge}>
                                    <MailIcon style={{ color: 'white' }} />
                                </Badge>
                            </IconButton>
                        </Hidden>
                    </div>
                    <div className={classes.sectionMobile}>
                        <Avatar alt="Captin" src={require('../assets/images/profile_pic.png')} className={classes.avatar} />
                        <Button aria-controls="simple-menu" onClick={handleProfileMenuOpen} aria-haspopup="true" className={classes.profilebtn}>
                            Captain
                            <ArrowDropDown />
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderProfileMenu}
        </div>
    )
}

export default withRouter(withStyles(styles)(Header))