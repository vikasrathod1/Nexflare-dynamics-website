import React from "react";
import {
  Box,
  Container,
  Grid,
  Text,
  Title,
  Button,
  Group,
  Badge,
  Paper,
  SimpleGrid,
  Tooltip,
  useComputedColorScheme,
} from "@mantine/core";

import { motion } from "framer-motion";

import {
  IconRocket,
  IconUsers,
  IconAdjustmentsHorizontal,
  IconRefresh,
  IconMessageCircle,
  IconShieldCheck,
  IconHeadset,
  IconDeviceDesktop,
  IconServer2,
  IconTestPipe,
  IconSettingsCog,
  IconUserCog,
  IconBriefcase,
  IconBolt,
  IconWorld,
} from "@tabler/icons-react";

const capabilities = [
  { icon: IconUsers, label: "Dedicated Development Teams" },
  { icon: IconAdjustmentsHorizontal, label: "Flexible Hiring Models" },
  { icon: IconRefresh, label: "Daily Agile Collaboration" },
  { icon: IconMessageCircle, label: "Transparent Communication" },
  { icon: IconShieldCheck, label: "Enterprise Security" },
  { icon: IconHeadset, label: "Long-Term Technical Support" },
];

const techStack = [
  "React",
  "Java",
  "Spring Boot",
  "Node.js",
  "Docker",
  "AWS",
  "Kubernetes",
];

// blue-themed satellites
const satellites = [
  {
    icon: IconDeviceDesktop,
    role: "Frontend",
    color: "#3b82f6",
    x: 0,
    y: -130,
  },
  { icon: IconServer2, role: "Backend", color: "#6366f1", x: 123.6, y: -40.2 },
  { icon: IconTestPipe, role: "QA", color: "#06b6d4", x: 76.4, y: 105.2 },
  {
    icon: IconSettingsCog,
    role: "DevOps",
    color: "#2563eb",
    x: -76.4,
    y: 105.2,
  },
  {
    icon: IconUserCog,
    role: "Project Manager",
    color: "#4f46e5",
    x: -123.6,
    y: -40.2,
  },
];

const SoftwareOutsourcing = () => {
  const colorScheme = useComputedColorScheme("light");
  const isDark = colorScheme === "dark";

  const textPrimary = isDark ? "#f1f5f9" : "#0f172a";
  const textSecondary = isDark ? "#94a3b8" : "#64748b";

  return (
    <Container size="xl" py={40}>
      <Paper
        radius="xl"
        shadow="xl"
        withBorder
        p={0}
        style={{
          overflow: "hidden",
          background: isDark ? "#0f172a" : "#ffffff",
        }}
      >
        <Grid gutter={0}>
          {/* LEFT SIDE */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box p={{ base: 32, sm: 48, lg: 60 }}>

              <Group gap={8}>
                <Text
                  tt="uppercase"
                  fw={700}
                  size="xs"
                  c="cyan"
                  style={{
                    letterSpacing: 2,
                  }}
                  mb={14}
                >
                  Software Outsourcing
                </Text>
              </Group>
              <Title
                order={2}
                style={{
                  fontSize: "38px",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: textPrimary,
                }}
              >
                Scale Your Team With World-Class Software Engineers
              </Title>

              <Text
                mt="md"
                size="md"
                maw={480}
                style={{ color: textSecondary }}
              >
                Extend your in-house team with experienced engineers, QA
                specialists, DevOps experts, and project managers — delivered
                with speed and transparency.
              </Text>

              <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="md" mt={32}>
                {capabilities.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Group key={i} gap="xs" wrap="nowrap" align="flex-start">
                      <Box
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 8,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: isDark
                            ? "rgba(59,130,246,.15)"
                            : "rgba(59,130,246,.1)",
                        }}
                      >
                        <Icon size={15} color="#3b82f6" />
                      </Box>
                      <Text size="sm" mt={3} style={{ color: textSecondary }}>
                        {c.label}
                      </Text>
                    </Group>
                  );
                })}
              </SimpleGrid>

              <Box mt={32}>
                <Text fw={600} mb="xs" size="sm" style={{ color: textPrimary }}>
                  Tech Stack We Use
                </Text>
                <Group gap={8}>
                  {techStack.map((tech, index) => (
                    <Badge key={index} variant="light" color="blue" radius="sm">
                      {tech}
                    </Badge>
                  ))}
                </Group>
              </Box>

              <Button
                mt={36}
                size="md"
                radius="md"
                rightSection={<IconRocket size={18} />}
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                }}
              >
                Hire Dedicated Developers
              </Button>
            </Box>
          </Grid.Col>

          {/* RIGHT SIDE */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              style={{
                position: "relative",
                minHeight: 560,
                background: isDark
                  ? "radial-gradient(circle at 50% 42%, rgba(59,130,246,.35), transparent 60%), linear-gradient(160deg, #0b1220, #111827)"
                  : "radial-gradient(circle at 50% 42%, rgba(59,130,246,.18), transparent 60%), linear-gradient(160deg, #eef2ff, #f5f7ff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "56px 32px",
                overflow: "hidden",
                flexDirection: "column",
              }}
            >
              {/* dot grid */}
              <Box
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `radial-gradient(rgba(59,130,246,.08) 1px, transparent 1px)`,
                  backgroundSize: "22px 22px",
                }}
              />

              <Text
                size="xs"
                fw={700}
                mb={28}
                style={{
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: isDark ? "rgba(203,213,225,.6)" : "rgba(71,85,105,.7)",
                }}
              >
                Cross-Functional Delivery Team
              </Text>

              {/* orbit */}
              <Box style={{ position: "relative", width: 300, height: 300 }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: "1.5px dashed rgba(59,130,246,.35)",
                  }}
                />

                {/* center */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 110,
                    height: 110,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#3b82f6,#6366f1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: "#fff",
                    fontWeight: 700,
                  }}
                >
                  <IconBriefcase size={24} />
                  <Text size="xs" c="#fff">
                    Our Team
                  </Text>
                </div>

                {/* satellites */}
                {satellites.map((sat, i) => {
                  const Icon = sat.icon;
                  return (
                    <motion.div
                      key={i}
                      style={{
                        position: "absolute",
                        left: `calc(50% + ${sat.x}px - 27px)`,
                        top: `calc(50% + ${sat.y}px - 27px)`,
                      }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    >
                      <Tooltip label={sat.role}>
                        <div
                          style={{
                            width: 54,
                            height: 54,
                            borderRadius: "50%",
                            background: sat.color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Icon size={22} color="#fff" />
                        </div>
                      </Tooltip>
                    </motion.div>
                  );
                })}
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SoftwareOutsourcing;
