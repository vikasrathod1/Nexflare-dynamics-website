import { Drawer, Stack, Accordion, Button, Divider } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import navLinks from "./NavLinks";

const MobileMenu = ({ opened, close }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <Drawer
      opened={opened}
      onClose={close}
      position="right"
      size="85%"
      padding="lg"
      title="Menu"
      zIndex={9999}
    >
      <Stack gap="xs">
        {navLinks.map((item) => {
          if (item.children) {
            return (
              <Accordion key={item.label} variant="contained" radius="md">
                <Accordion.Item value={item.label}>
                  <Accordion.Control>{item.label}</Accordion.Control>

                  <Accordion.Panel>
                    <Stack gap={4}>
                      {item.children.map((child) => {
                        // Child HAS subchildren → another nested Accordion
                        if (child.children) {
                          return (
                            <Accordion
                              key={child.label}
                              variant="filled"
                              radius="md"
                            >
                              <Accordion.Item value={child.label}>
                                <Accordion.Control
                                  style={{ fontSize: 14, paddingLeft: 8 }}
                                >
                                  {child.label}
                                </Accordion.Control>

                                <Accordion.Panel>
                                  <Stack gap={6} pl={8}>
                                    {child.children.map((sub) => (
                                      <Link
                                        key={sub.label}
                                        to={sub.path}
                                        onClick={close}
                                        className={`mobile-link ${
                                          isActive(sub.path) ? "mobile-active" : ""
                                        }`}
                                        style={{ fontSize: 13 }}
                                      >
                                        {sub.label}
                                      </Link>
                                    ))}
                                  </Stack>
                                </Accordion.Panel>
                              </Accordion.Item>
                            </Accordion>
                          );
                        }

                        // No subchildren → plain link
                        return (
                          <Link
                            key={child.label}
                            to={child.path}
                            onClick={close}
                            className={`mobile-link ${
                              isActive(child.path) ? "mobile-active" : ""
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            );
          }

          return (
            <Link
              key={item.label}
              to={item.path}
              onClick={close}
              className={`mobile-link ${
                isActive(item.path) ? "mobile-active" : ""
              }`}
            >
              {item.label}
            </Link>
          );
        })}

        <Divider my="md" />

        <Button
          component={Link}
          to="/contact"
          onClick={close}
          radius="xl"
          fullWidth
          size="md"
          className="quote-btn"
        >
          Get Quote
        </Button>
      </Stack>
    </Drawer>
  );
};

export default MobileMenu;