import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import {
  IconDeviceDesktop,
  IconBuilding,
  IconCloud,
  IconRefresh,
  IconDeviceMobile,
  IconTool,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
const MotionCard = motion.create(Card);
const services = [
  {
    title: "Custom Application Development",
    description:
      "From concept to deployment, we develop bespoke applications tailored to your business — ensuring functionality, user-friendliness, and efficiency at every step.",
    icon: IconDeviceDesktop,
  },
  {
    title: "Enterprise Software Solutions",
    description:
      "Streamline operations with enterprise-grade custom software — ERP, CRM, accounting, and other mission-critical systems built specifically for your organization.",
    icon: IconBuilding,
  },
  {
    title: "Cloud-Based Custom Software",
    description:
      "Leverage the power of the cloud with secure, scalable software solutions that enhance accessibility and operational efficiency for teams anywhere.",
    icon: IconCloud,
  },
  {
    title: "Integration & Automation",
    description:
      "Integrate custom tools seamlessly into your existing systems and automate repetitive tasks — saving time, reducing errors, and boosting productivity.",
    icon: IconRefresh,
  },
  {
    title: "Mobile Application Development",
    description:
      "Android and iOS apps with intuitive interfaces, cross-platform compatibility, real-time notifications, and offline mode support — built for your audience.",
    icon: IconDeviceMobile,
  },
  {
    title: "Software Consulting & Maintenance",
    description:
      "Expert advice and ongoing support to ensure your custom software remains cutting-edge, reliable, and optimized as your business evolves.",
    icon: IconTool,
  },
];
const WhatWeBuild = () => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const isDark = colorScheme === "dark";
  return (
    <Box
      py={120}
      style={{
        position: "relative",
        overflow: "hidden",
        background: isDark ? "transparent" : theme.colors.gray[0],
      }}
    >
      {/* Left Glow - Only in Dark Mode */}
      {isDark && (
        <Box
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(20,184,166,.14), transparent 70%)",
            top: 80,
            left: -180,
            filter: "blur(80px)",
          }}
        />
      )}
      {/* Right Glow - Only in Dark Mode */}
      {isDark && (
        <Box
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,.14), transparent 70%)",
            bottom: 0,
            right: -180,
            filter: "blur(90px)",
          }}
        />
      )}
      <Container size="xl">
        {/* Heading */}
        <Stack gap="md" mb={70}>
          <Text
            fw={700}
            c="teal"
            tt="uppercase"
            style={{ letterSpacing: 3, fontSize: 15 }}
          >
            WHAT WE BUILD
          </Text>
          <Title
            style={{
              fontSize: "clamp(2.8rem,5vw,4.5rem)",
              fontWeight: 900,
              lineHeight: 1.15,
            }}
          >
            Custom Software{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "#22d3ee", to: "#14b8a6" }}
            >
              Built Around You
            </Text>
          </Title>
          <Text
            maw={760}
            style={{
              fontSize: 20,
              lineHeight: 1.9,
              color: isDark ? "rgba(255,255,255,.72)" : theme.colors.gray[7],
            }}
          >
            From concept to deployment, we build bespoke applications that
            cater to your business needs — ensuring functionality,
            user-friendliness, and long-term efficiency.
          </Text>
        </Stack>
        {/* Cards */}
        <Grid gutter={30}>
          {services.map((item, index) => (
            <Grid.Col
              key={item.title}
              span={{ base: 12, sm: 6, lg: 4 }}
            >
              <MotionCard
                p={40}
                radius={24}
                h="100%"
                withBorder
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                style={{
                  background: isDark
                    ? "rgba(18, 26, 36, 0.92)"
                    : theme.white,
                  border: isDark
                    ? "1px solid rgba(255,255,255,.08)"
                    : `1px solid ${theme.colors.gray[3]}`,
                  backdropFilter: isDark ? "blur(18px)" : "none",
                  boxShadow: isDark
                    ? "0 20px 60px rgba(0,0,0,.35)"
                    : "0 10px 30px rgba(0,0,0,.08)",
                  cursor: "pointer",
                  transition: "all .35s ease",
                }}
              >
                <Stack gap={26}>
                  <ThemeIcon
                    size={66}
                    radius={18}
                    color="teal"
                    variant="light"
                    style={{
                      background: isDark
                        ? "rgba(13,148,136,.15)"
                        : theme.colors.teal[0],
                    }}
                  >
                    <item.icon size={32} stroke={1.8} />
                  </ThemeIcon>
                  <Title
                    order={3}
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      lineHeight: 1.55,
                      color: isDark ? theme.white : theme.black,
                    }}
                  >
                    {item.title}
                  </Title>
                  <Text
                    style={{
                      fontSize: 18,
                      lineHeight: 1.9,
                      color: isDark
                        ? "rgba(255,255,255,.72)"
                        : theme.colors.gray[7],
                    }}
                  >
                    {item.description}
                  </Text>
                </Stack>
              </MotionCard>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default WhatWeBuild;