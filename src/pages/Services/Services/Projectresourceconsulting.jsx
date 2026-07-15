import React from "react";
import {
  Box,
  Container,
  Grid,
  Text,
  Title,
  Button,
  Group,
  Paper,
  Stack,
  useComputedColorScheme,
  Progress,
  ThemeIcon,
  SimpleGrid,
} from "@mantine/core";

import { motion } from "framer-motion";

import {
  IconArrowRight,
  IconClipboardList,
  IconCalendarCheck,
  IconUsersGroup,
  IconShieldCheck,
  IconAdjustmentsAlt,
  IconBriefcase,
  IconClock,
  IconGlobe,
  IconCheck,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const capabilities = [
  {
    icon: IconClipboardList,
    title: "Resource Planning",
    desc: "Right-size teams with developers, designers, and architects",
  },
  {
    icon: IconCalendarCheck,
    title: "Project Management",
    desc: "Seasoned PMs ensuring on-time, on-budget delivery",
  },
  {
    icon: IconUsersGroup,
    title: "Team Augmentation",
    desc: "Scale up or down instantly with pre-vetted professionals",
  },
  {
    icon: IconShieldCheck,
    title: "Compliance Guidance",
    desc: "GDPR, SOC 2, and ISO 27001 frameworks supported",
  },
  {
    icon: IconAdjustmentsAlt,
    title: "Flexible Engagement",
    desc: "Fixed price, Time & Material, or retainer models",
  },
];

// orbit positions (unchanged)
const satellites = [
  { icon: IconClipboardList, role: "Resource Planning", x: 0, y: -128 },
  { icon: IconCalendarCheck, role: "Project Management", x: 121.7, y: -39.6 },
  { icon: IconUsersGroup, role: "Team Augmentation", x: 75.2, y: 103.6 },
  { icon: IconShieldCheck, role: "Compliance Guidance", x: -75.2, y: 103.6 },
  {
    icon: IconAdjustmentsAlt,
    role: "Flexible Engagement",
    x: -121.7,
    y: -39.6,
  },
];

const ProjectResourceConsulting = () => {
  const scheme = useComputedColorScheme("light");
  const isDark = scheme === "dark";

  const navigate = useNavigate();

  // 🎯 THEME TOKENS (NO HARD CODED PALETTE)
  const bg = isDark ? "#0b1220" : "#ffffff";
  const panel = isDark ? "#0f172a" : "#ffffff";
  const textPrimary = isDark ? "#f1f5f9" : "#0f172a";
  const textSecondary = isDark ? "#94a3b8" : "#64748b";

  const accent = isDark ? "#60a5fa" : "#3b82f6"; // primary blue
  const accentSoft = isDark ? "rgba(96,165,250,.15)" : "rgba(59,130,246,.10)";

  const border = isDark ? "rgba(148,163,184,.18)" : "rgba(148,163,184,.25)";

  return (
    <Container size="xl" py={40}>
      <Paper
        radius="xl"
        shadow="xl"
        withBorder
        p={0}
        style={{
          overflow: "hidden",
          background: panel,
          borderColor: border,
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
                  Project & Resource Consulting
                </Text>
              </Group>
              <Title
                order={2}
                style={{
                  fontSize: "40px",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: textPrimary,
                }}
              >
                Expert Guidance for Optimal Project Outcomes
              </Title>

              <Text
                mt="md"
                size="md"
                maw={480}
                style={{ color: textSecondary }}
              >
                Expert guidance and skilled professionals tailored to your needs
                — ensuring efficient execution at every stage of your project.
              </Text>

              <Stack gap="sm" mt={32}>
                {capabilities.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Group key={i} gap="sm" wrap="nowrap" align="flex-start">
                      <Box
                        style={{
                          width: 22,
                          height: 22,
                          marginTop: 2,
                          borderRadius: 6,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: accentSoft,
                          border: `1px solid ${border}`,
                        }}
                      >
                        <IconCheck size={13} color={accent} stroke={3} />
                      </Box>

                      <Text size="sm" style={{ color: textSecondary }}>
                        <Text span fw={700} style={{ color: textPrimary }}>
                          {c.title}
                        </Text>
                        {" — " + c.desc}
                      </Text>
                    </Group>
                  );
                })}
              </Stack>

              <Button
                mt={40}
                size="md"
                radius="md"
                rightSection={<IconArrowRight size={16} />}
                style={{
                  background: `linear-gradient(135deg, ${accent}, ${
                    isDark ? "#4f46e5" : "#6366f1"
                  })`,
                }}
                onClick={()=>navigate("/contact")}
              >
                Start a Consultation
              </Button>
            </Box>
          </Grid.Col>

          {/* RIGHT SIDE */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              style={{
                position: "relative",
                minHeight: 580,
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 40,
                background: isDark
                  ? "linear-gradient(135deg,#071322,#0f172a,#16213b)"
                  : "linear-gradient(135deg,#f8fbff,#eef5ff,#f5f9ff)",
              }}
            >
              {/* Background circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  width: 520,
                  height: 520,
                  borderRadius: "50%",
                  border: `1px dashed ${accentSoft}`,
                }}
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 80,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  width: 380,
                  height: 380,
                  borderRadius: "50%",
                  border: `1px dashed ${accentSoft}`,
                }}
              />

              {/* Dashboard */}
              <Paper
                shadow="xl"
                radius="xl"
                p={28}
                style={{
                  width: 470,
                  backdropFilter: "blur(18px)",
                  background: isDark
                    ? "rgba(15,23,42,.88)"
                    : "rgba(255,255,255,.88)",
                  border: `1px solid ${border}`,
                  zIndex: 5,
                }}
              >
                <Group justify="space-between" mb="lg">
                  <div>
                    <Text
                      size="xs"
                      fw={700}
                      c="cyan"
                      tt="uppercase"
                      style={{ letterSpacing: 2 }}
                    >
                      Live Project Overview
                    </Text>

                    <Title order={3} c={textPrimary}>
                      Delivery Dashboard
                    </Title>
                  </div>

                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                  >
                    <ThemeIcon
                      radius="xl"
                      size={52}
                      variant="light"
                      color="blue"
                    >
                      <IconBriefcase size={28} />
                    </ThemeIcon>
                  </motion.div>
                </Group>

                <Stack gap="lg">
                  {/* Progress */}

                  <Paper
                    radius="lg"
                    p="md"
                    style={{
                      background: accentSoft,
                    }}
                  >
                    <Group justify="space-between" mb={6}>
                      <Text fw={600}>Project Progress</Text>

                      <Text fw={700} c={accent}>
                        86%
                      </Text>
                    </Group>

                    <Progress value={86} radius="xl" size="lg" color="blue" />
                  </Paper>

                  {/* Statistics */}

                  <SimpleGrid cols={2}>
                    {[
                      {
                        title: "Projects",
                        value: "120+",
                        icon: IconClipboardList,
                      },
                      {
                        title: "Resources",
                        value: "250+",
                        icon: IconUsersGroup,
                      },
                      {
                        title: "Delivery",
                        value: "98%",
                        icon: IconCalendarCheck,
                      },
                      {
                        title: "Countries",
                        value: "15+",
                        icon: IconGlobe,
                      },
                    ].map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={index}
                          whileHover={{
                            y: -6,
                          }}
                        >
                          <Paper
                            radius="lg"
                            p="md"
                            withBorder
                            style={{
                              background: isDark ? "#111c31" : "#ffffff",
                            }}
                          >
                            <Group>
                              <ThemeIcon
                                radius="md"
                                size={44}
                                color="blue"
                                variant="light"
                              >
                                <Icon size={22} />
                              </ThemeIcon>

                              <div>
                                <Text size="xs" c="dimmed">
                                  {item.title}
                                </Text>

                                <Title order={4}>{item.value}</Title>
                              </div>
                            </Group>
                          </Paper>
                        </motion.div>
                      );
                    })}
                  </SimpleGrid>

                  {/* Workflow */}

                  <Paper radius="lg" p="md" withBorder>
                    <Text fw={700} mb="md">
                      Project Workflow
                    </Text>

                    <Group justify="space-between">
                      {[
                        "Planning",
                        "Resources",
                        "Development",
                        "QA",
                        "Delivery",
                      ].map((step, index) => (
                        <React.Fragment key={step}>
                          <Stack gap={6} align="center">
                            <motion.div
                              animate={{
                                scale: [1, 1.08, 1],
                              }}
                              transition={{
                                repeat: Infinity,
                                delay: index * 0.25,
                                duration: 2,
                              }}
                            >
                              <ThemeIcon radius="xl" color="blue" size={42}>
                                <IconCheck size={18} />
                              </ThemeIcon>
                            </motion.div>

                            <Text size="10px" ta="center">
                              {step}
                            </Text>
                          </Stack>

                          {index !== 4 && (
                            <Box
                              style={{
                                flex: 1,
                                height: 2,
                                background: accentSoft,
                              }}
                            />
                          )}
                        </React.Fragment>
                      ))}
                    </Group>
                  </Paper>
                </Stack>
              </Paper>
            </Box>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProjectResourceConsulting;
