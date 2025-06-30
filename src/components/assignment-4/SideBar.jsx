'use client';

import React, { useState, useEffect } from 'react';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const drawerWidth = 280;

// Generate your question links data
const data = Array.from({ length: 14 }, (_, i) => ({
  link: `/assignment-4/question-${i + 1}`,
  text: `Q ${i + 1}`,
}));

// Add additional navigation items if needed
const navigationItems = [
  { link: '/', text: 'Home' },
  ...data,
];

export default function Sidebar({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // New state to check if client-side rendering
  const theme = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true); // Set to true after the component has mounted on the client side
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography variant="h6" component="h1">
          Assignment 4
        </Typography>
        <IconButton 
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ flexGrow: 1, py: 1 }}>
        {navigationItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link
              href={item.link}
              style={{ textDecoration: 'none', width: '100%' }}
            >
              <ListItemButton
                onClick={handleLinkClick}
                selected={pathname === item.link}
              >
                <ListItemText
                  primary={item.text}
                  sx={{
                    color: pathname === item.link ? 'primary.main' : 'text.primary',
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  if (!isClient) {
    return null; // Avoid rendering until client-side
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* App Bar - Show on mobile */}
      <AppBar
        position="fixed"
        sx={{
          width: '100%',
          zIndex: theme.zIndex.drawer + 1,
          display: { xs: 'block', md: 'none' },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Assignment 4
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Navigation */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              position: 'relative',
              height: '100vh',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: { xs: 8, md: 0 }, // Account for mobile app bar
          minHeight: '100vh',
        }}
      >
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
