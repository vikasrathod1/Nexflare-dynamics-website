
import { Group, Menu } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import navLinks from "./NavLinks";

const DesktopMenu = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <Group gap={30}>
      {navLinks.map((item) => {
        if (item.children) {
          return (
            <Menu
              key={item.label}
              trigger="hover"
              openDelay={100}
              closeDelay={150}
              shadow="md"
              width={260}
              withinPortal
              zIndex={9999}
            >
              <Menu.Target>
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname.startsWith(item.path) ? "nav-active" : ""
                  }`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                  <IconChevronDown size={16} />
                </Link>
              </Menu.Target>

              <Menu.Dropdown>
                {item.children.map((child) => {
                  // Child HAS subchildren → nested Menu
                  if (child.children) {
                    return (
                      <Menu.Sub key={child.label}>
                        <Menu.Sub.Target>
                          <Menu.Sub.Item
                            rightSection={<IconChevronRight size={14} />}
                            className={
                              location.pathname.startsWith(child.path)
                                ? "dropdown-active"
                                : ""
                            }
                          >
                            {child.label}
                          </Menu.Sub.Item>
                        </Menu.Sub.Target>

                        <Menu.Sub.Dropdown>
                          {child.children.map((sub) => (
                            <Menu.Item
                              key={sub.label}
                              component={Link}
                              to={sub.path}
                              className={
                                isActive(sub.path) ? "dropdown-active" : ""
                              }
                            >
                              {sub.label}
                            </Menu.Item>
                          ))}
                        </Menu.Sub.Dropdown>
                      </Menu.Sub>
                    );
                  }

                  // No subchildren → plain item
                  return (
                    <Menu.Item
                      key={child.label}
                      component={Link}
                      to={child.path}
                      className={isActive(child.path) ? "dropdown-active" : ""}
                    >
                      {child.label}
                    </Menu.Item>
                  );
                })}
              </Menu.Dropdown>
            </Menu>
          );
        }

        return (
          <Link
            key={item.label}
            to={item.path}
            className={`nav-link ${isActive(item.path) ? "nav-active" : ""}`}
          >
            {item.label}
          </Link>
        );
      })}
    </Group>
  );
};

export default DesktopMenu;
