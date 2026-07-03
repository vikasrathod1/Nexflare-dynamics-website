import { useState, useEffect } from "react";

import {
  Container,
  Group,
  Burger,
  Button,
  Box,
  useMantineColorScheme,
  useComputedColorScheme,
  ActionIcon,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { IconMoon, IconSun } from "@tabler/icons-react";

import "./Navbar.css";


import logoLight from "../../assets/images/logoLight.png";
import logoDark from "../../assets/images/logoDark.png";

const Navbar = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scrolled, setScrolled] = useState(false);

  const { setColorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme("light");
  const toggleTheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  const location = useLocation();

  // const computedColorScheme = useComputedColorScheme("light");

  const logoSrc = computedColorScheme === "dark" ? logoDark : logoLight;

  useEffect(() => {
    close();
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}> */}
      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        } ${computedColorScheme}`}
      >
        <Container size="xl" h="100%">
          <Group justify="space-between" h="100%">
            {/* Logo */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="logo-link">
                <img src={logoSrc} alt="Nexflare Dynamics" className="logo" />
              </Link>
            </motion.div>

            {/* Desktop Menu */}

            <Box visibleFrom="md">
              <DesktopMenu />
            </Box>

            {/* Right Section */}

            <Group gap={15} visibleFrom="md">
              <ActionIcon
                variant="subtle"
                radius="xl"
                size="xl"
                onClick={toggleTheme}
              >
                {computedColorScheme === "dark" ? (
                  <IconSun size={22} />
                ) : (
                  <IconMoon size={22} />
                )}
              </ActionIcon>

              <Button
                component={Link}
                to="/contact"
                radius="xl"
                size="md"
                className="quote-btn"
              >
                Get Quote
              </Button>
            </Group>

            {/* Mobile Burger */}

            <Group hiddenFrom="md" gap="xs">
              <ActionIcon
                variant="subtle"
                radius="xl"
                size="lg"
                onClick={toggleTheme}
              >
                {computedColorScheme === "dark" ? (
                  <IconSun size={20} />
                ) : (
                  <IconMoon size={20} />
                )}
              </ActionIcon>

              <Burger opened={opened} onClick={toggle} size="sm"  />
            </Group>
          </Group>
        </Container>
      </header>

      {/* Mobile Drawer */}

      <MobileMenu opened={opened} close={close} />
    </>
  );
};

export default Navbar;
