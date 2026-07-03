import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useComputedColorScheme,
} from "@mantine/core";

import { motion } from "framer-motion";

import {
  IconArrowRight,
  IconSearch,
  IconBulb,
  IconCode,
  IconShieldCheck,
  IconRocket,
  IconHeadset,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

/* ===================================================
   PROCESS STEPS
=================================================== */

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Discovery",
    icon: IconSearch,
    description:
      "We understand your business, goals, challenges and technical requirements before starting development.",
  },

  {
    id: 2,
    number: "02",
    title: "Planning",
    icon: IconBulb,
    description:
      "Architecture planning, sprint roadmap, timelines and resource allocation are finalized.",
  },

  {
    id: 3,
    number: "03",
    title: "Development",
    icon: IconCode,
    description:
      "Agile software development with continuous feedback, code reviews and sprint delivery.",
  },

  {
    id: 4,
    number: "04",
    title: "Testing",
    icon: IconShieldCheck,
    description:
      "Manual & automated QA ensure performance, security and reliability before launch.",
  },

  {
    id: 5,
    number: "05",
    title: "Deployment",
    icon: IconRocket,
    description:
      "CI/CD deployment with cloud infrastructure, monitoring and production readiness.",
  },

  {
    id: 6,
    number: "06",
    title: "Support",
    icon: IconHeadset,
    description:
      "Continuous monitoring, maintenance, upgrades and feature improvements after delivery.",
  },
];

/* ===================================================
   COMPONENT
=================================================== */

const HowWeWork = () => {
  const scheme = useComputedColorScheme("light");
  const isDark = scheme === "dark";

  /* ===================================================
      SAME THEME AS ProjectResourceConsulting
  =================================================== */

  const panel = isDark ? "#0f172a" : "#ffffff";

  const pageBg = isDark
    ? "linear-gradient(180deg,#07101d,#0f172a)"
    : "linear-gradient(180deg,#f8fbff,#ffffff)";

  const textPrimary = isDark ? "#f8fafc" : "#0f172a";

  const textSecondary = isDark ? "#94a3b8" : "#64748b";

  const accent = isDark ? "#60a5fa" : "#2563eb";

  const accentSoft = isDark ? "rgba(96,165,250,.18)" : "rgba(37,99,235,.12)";

  const border = isDark ? "rgba(148,163,184,.16)" : "rgba(37,99,235,.15)";

  return (
    <Container size="xl" py={80}>
      <Box
        radius="xl"
        shadow="xl"
        withBorder
        p={0}
        style={{
          overflow: "hidden",
          borderColor: border,
        //   background: panel,
        }}
      >
        <Box
          style={{
            position: "relative",
            overflow: "hidden",
            // background: pageBg,
          }}
        >
          {/* ==========================================
                  BACKGROUND DECORATION
          ========================================== */}

          {/* Dot Pattern */}

          <Box
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `radial-gradient(${accentSoft} 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
              opacity: 0.55,
            }}
          />

          {/* Top Glow */}

          <Box
            style={{
              position: "absolute",
              width: 520,
              height: 520,
              borderRadius: "50%",
              right: -180,
              top: -180,
              filter: "blur(120px)",
            //   background: accentSoft,
            }}
          />

          {/* Bottom Glow */}

          <Box
            style={{
              position: "absolute",
              width: 420,
              height: 420,
              borderRadius: "50%",
              left: -150,
              bottom: -180,
              filter: "blur(100px)",
            //   background: accentSoft,
            }}
          />

          <Box
            px={{ base: 25, md: 60 }}
            py={70}
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* ==========================================
                    PROCESS TIMELINE TITLE
            ========================================== */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Stack align="center" mb={70}>
                <Text
                  fw={700}
                  size="xs"
                  style={{
                    color: accent,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  HOW WE WORK
                </Text>

                <Title
                  order={2}
                  ta="center"
                  style={{
                    color: textPrimary,
                    fontWeight: 800,
                  }}
                >
                  Our Proven Delivery Process
                </Title>

                <Text
                  ta="center"
                  maw={700}
                  style={{
                    color: textSecondary,
                    lineHeight: 1.8,
                  }}
                >
                  A structured, transparent approach that transforms your ideas
                  into reliable, high-performing software on time, every time.
                </Text>
              </Stack>
            </motion.div>

            {/* ==========================================
                    PROCESS TIMELINE
            ========================================== */}

            <Box
              style={{
                position: "relative",
                marginBottom: 100,
              }}
            >
              {/* Timeline Line */}

              <Box
                visibleFrom="lg"
                style={{
                  position: "absolute",
                  top: 38,
                  left: "8%",
                  right: "8%",
                  height: 2,
                //   background: `linear-gradient(90deg,
                //     transparent,
                //     ${accentSoft},
                //     ${accent},
                //     ${accentSoft},
                //     transparent)`,
                  zIndex: 0,
                }}
              />

              <Grid gutter={28} align="stretch">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <Grid.Col
                      key={step.id}
                      span={{
                        base: 12,
                        sm: 6,
                        md: 4,
                        lg: 2,
                      }}
                    >
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 40,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        whileHover={{
                          y: -12,
                        }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.08,
                        }}
                        viewport={{
                          once: true,
                        }}
                        style={{
                          height: "100%",
                        }}
                      >
                        <Box
                          style={{
                            position: "relative",
                            height: "100%",
                          }}
                        >
                          {/* Number Circle */}

                          <motion.div
                            animate={{
                              y: [0, -6, 0],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 3,
                              delay: index * 0.25,
                            }}
                          >
                            <Box
                              mx="auto"
                              mb={24}
                              style={{
                                width: 76,
                                height: 76,
                                borderRadius: "50%",
                                background: `linear-gradient(
                                  135deg,
                                  ${accent},
                                  ${isDark ? "#2563eb" : "#60a5fa"}
                                )`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#fff",
                                fontWeight: 800,
                                fontSize: 20,
                                border: `6px solid ${panel}`,
                                boxShadow: `0 18px 45px ${accentSoft}`,
                                position: "relative",
                                zIndex: 5,
                              }}
                            >
                              {step.number}
                            </Box>
                          </motion.div>

                          {/* Connector Dot */}

                          {index !== processSteps.length - 1 && (
                            <motion.div
                              visibleFrom="lg"
                              animate={{
                                opacity: [0.4, 1, 0.4],
                                scale: [1, 1.25, 1],
                              }}
                              transition={{
                                repeat: Infinity,
                                duration: 2,
                                delay: index * 0.2,
                              }}
                              style={{
                                position: "absolute",
                                top: 35,
                                right: -18,
                                width: 12,
                                height: 12,
                                borderRadius: "50%",
                                background: accent,
                                zIndex: 10,
                              }}
                            />
                          )}

                          {/* Card */}

                          <Paper
                            radius="xl"
                            withBorder
                            p="lg"
                            style={{
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                              position: "relative",
                              overflow: "hidden",
                              backdropFilter: "blur(18px)",
                              background: isDark
                                ? "rgba(15,23,42,.82)"
                                : "rgba(255,255,255,.92)",
                              borderColor: border,
                              transition: ".35s",
                            }}
                          >
                            {/* Top Gradient */}

                            <Box
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: 4,
                                background: `linear-gradient(
                                  90deg,
                                  ${accent},
                                  transparent
                                )`,
                              }}
                            />

                            {/* Background Number */}

                            <Text
                              style={{
                                position: "absolute",
                                right: 10,
                                bottom: -10,
                                fontSize: 70,
                                fontWeight: 900,
                                opacity: 0.05,
                                color: accent,
                                userSelect: "none",
                              }}
                            >
                              {step.number}
                            </Text>

                            <Stack
                              align="center"
                              gap="md"
                              style={{
                                position: "relative",
                                zIndex: 2,
                              }}
                            >
                              <ThemeIcon
                                radius="xl"
                                size={64}
                                variant="light"
                                color="blue"
                              >
                                <Icon size={30} />
                              </ThemeIcon>

                              <Title
                                order={5}
                                ta="center"
                                style={{
                                  color: textPrimary,
                                  fontWeight: 700,
                                }}
                              >
                                {step.title}
                              </Title>

                              <Text
                                ta="center"
                                size="sm"
                                style={{
                                  color: textSecondary,
                                  lineHeight: 1.8,
                                }}
                              >
                                {step.description}
                              </Text>
                            </Stack>
                          </Paper>
                        </Box>
                      </motion.div>
                    </Grid.Col>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HowWeWork;
