// import React from "react";

// import {
//   Box,
//   Container,
//   Grid,
//   Text,
//   Title,
//   Button,
//   Group,
//   Badge,
//   Paper,
//   Stack,
// } from "@mantine/core";

// import { motion } from "framer-motion";

// import {
//   IconArrowRight,
//   IconClipboardList,
//   IconCalendarCheck,
//   IconUsersGroup,
//   IconShieldCheck,
//   IconAdjustmentsAlt,
//   IconBriefcase,
//   IconClock,
//   IconGlobe,
//   IconCheck,
// } from "@tabler/icons-react";

// // ---------------------------------------------------------------------------
// // Design tokens — warm, high-contrast "consulting" palette.
// // Background: near-black charcoal. Accent: ember orange / amber.
// // ---------------------------------------------------------------------------
// const bg = "#0a0a0c";
// const panelBg = "#111114";
// const border = "rgba(255,255,255,.08)";
// const textPrimary = "#f5f4f2";
// const textSecondary = "rgba(245,244,242,.58)";
// const textFaint = "rgba(245,244,242,.38)";
// const accent = "#ff5b2e"; // ember orange
// const accentSoft = "rgba(255,91,46,.14)";
// const amber = "#f5a524";

// const capabilities = [
//   {
//     icon: IconClipboardList,
//     title: "Resource Planning",
//     desc: "Right-size teams with developers, designers, and architects",
//   },
//   {
//     icon: IconCalendarCheck,
//     title: "Project Management",
//     desc: "Seasoned PMs ensuring on-time, on-budget delivery",
//   },
//   {
//     icon: IconUsersGroup,
//     title: "Team Augmentation",
//     desc: "Scale up or down instantly with pre-vetted professionals",
//   },
//   {
//     icon: IconShieldCheck,
//     title: "Compliance Guidance",
//     desc: "GDPR, SOC 2, and ISO 27001 frameworks supported",
//   },
//   {
//     icon: IconAdjustmentsAlt,
//     title: "Flexible Engagement",
//     desc: "Fixed price, Time & Material, or retainer models",
//   },
// ];

// // Satellites positioned evenly around a circle of radius 128, starting at
// // the top, going clockwise — precomputed so we don't run trig at render time.
// const satellites = [
//   { icon: IconClipboardList, role: "Resource Planning", color: amber, x: 0, y: -128 },
//   { icon: IconCalendarCheck, role: "Project Management", color: accent, x: 121.7, y: -39.6 },
//   { icon: IconUsersGroup, role: "Team Augmentation", color: "#ef7f3a", x: 75.2, y: 103.6 },
//   { icon: IconShieldCheck, role: "Compliance Guidance", color: "#c2410c", x: -75.2, y: 103.6 },
//   { icon: IconAdjustmentsAlt, role: "Flexible Engagement", color: "#eab308", x: -121.7, y: -39.6 },
// ];

// const RING_RADIUS = 150;
// const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
// const DELIVERY_RATE = 0.98; // 98% on-time delivery — the signature stat

// const ProjectResourceConsulting = () => {
//   return (
//     <Container size="xl" py={40}>
//       <Paper
//         radius="xl"
//         shadow="xl"
//         withBorder
//         p={0}
//         style={{
//           overflow: "hidden",
//           background: panelBg,
//           borderColor: border,
//         }}
//       >
//         <Grid gutter={0}>
//           {/* LEFT SIDE — content */}
//           <Grid.Col span={{ base: 12, md: 6 }}>
//             <Box p={{ base: 32, sm: 48, lg: 60 }}>
//               <Text
//                 size="xs"
//                 fw={700}
//                 mb={16}
//                 style={{
//                   letterSpacing: 2.5,
//                   textTransform: "uppercase",
//                   color: accent,
//                 }}
//               >
//                 Project &amp; Resource Consulting
//               </Text>

//               <Title
//                 order={2}
//                 style={{
//                   fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
//                   fontSize: "40px",
//                   fontWeight: 800,
//                   lineHeight: 1.18,
//                   color: textPrimary,
//                 }}
//               >
//                 Expert Guidance for Optimal Project Outcomes
//               </Title>

//               <Text mt="md" size="md" maw={480} style={{ color: textSecondary }}>
//                 Expert guidance and skilled professionals tailored to your
//                 needs — from resource planning to team augmentation,
//                 ensuring efficient execution at every stage of your project.
//               </Text>

//               <Stack gap="sm" mt={32}>
//                 {capabilities.map((c, i) => {
//                   const Icon = c.icon;
//                   return (
//                     <Group key={i} gap="sm" wrap="nowrap" align="flex-start">
//                       <Box
//                         style={{
//                           flexShrink: 0,
//                           width: 22,
//                           height: 22,
//                           marginTop: 2,
//                           borderRadius: 6,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           background: accentSoft,
//                           border: `1px solid rgba(255,91,46,.35)`,
//                         }}
//                       >
//                         <IconCheck size={13} color={accent} stroke={3} />
//                       </Box>
//                       <Text size="sm" style={{ color: textSecondary }}>
//                         <Text span fw={700} style={{ color: textPrimary }}>
//                           {c.title}
//                         </Text>
//                         {"  —  " + c.desc}
//                       </Text>
//                     </Group>
//                   );
//                 })}
//               </Stack>

//               <Button
//                 mt={40}
//                 size="md"
//                 radius="md"
//                 variant="subtle"
//                 rightSection={<IconArrowRight size={16} />}
//                 px={0}
//                 styles={{
//                   root: {
//                     color: accent,
//                     fontWeight: 700,
//                     "&:hover": { background: "transparent", textDecoration: "underline" },
//                   },
//                 }}
//               >
//                 Start a Consultation
//               </Button>
//             </Box>
//           </Grid.Col>

//           {/* RIGHT SIDE — signature "resource orbit + delivery ring" visual */}
//           <Grid.Col span={{ base: 12, md: 6 }}>
//             <Box
//               style={{
//                 position: "relative",
//                 height: "100%",
//                 minHeight: 580,
//                 background:
//                   "radial-gradient(circle at 50% 40%, rgba(255,91,46,.16), transparent 62%), linear-gradient(165deg, #0d0d0f, #08080a)",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 padding: "56px 32px",
//                 overflow: "hidden",
//               }}
//             >
//               {/* dot texture */}
//               <Box
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   backgroundImage: `radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px)`,
//                   backgroundSize: "22px 22px",
//                   pointerEvents: "none",
//                 }}
//               />

//               {/* top-left floating badge */}
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 style={{ position: "absolute", top: 28, left: 28, zIndex: 5 }}
//               >
//                 <Paper
//                   radius="xl"
//                   px="md"
//                   py={6}
//                   style={{
//                     background: "rgba(20,20,23,.85)",
//                     border: `1px solid ${border}`,
//                     backdropFilter: "blur(8px)",
//                   }}
//                 >
//                   <Group gap={6}>
//                     <IconClock size={14} color={amber} />
//                     <Text size="xs" fw={700} c={textPrimary}>
//                       48h avg. proposal turnaround
//                     </Text>
//                   </Group>
//                 </Paper>
//               </motion.div>

//               <Text
//                 size="xs"
//                 fw={700}
//                 mb={26}
//                 style={{
//                   letterSpacing: 2,
//                   textTransform: "uppercase",
//                   color: "rgba(245,244,242,.45)",
//                 }}
//               >
//                 The Right Team, Around Your Roadmap
//               </Text>

//               {/* orbit + delivery-ring diagram */}
//               <Box style={{ position: "relative", width: 320, height: 320 }}>
//                 {/* rotating dashed outer ring */}
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     borderRadius: "50%",
//                     border: `1.5px dashed rgba(255,91,46,.3)`,
//                   }}
//                 />

//                 {/* animated on-time-delivery progress ring (the signature element) */}
//                 <svg
//                   width="320"
//                   height="320"
//                   viewBox="0 0 320 320"
//                   style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)" }}
//                 >
//                   <circle
//                     cx="160"
//                     cy="160"
//                     r={RING_RADIUS}
//                     fill="none"
//                     stroke="rgba(255,255,255,.06)"
//                     strokeWidth="3"
//                   />
//                   <motion.circle
//                     cx="160"
//                     cy="160"
//                     r={RING_RADIUS}
//                     fill="none"
//                     stroke="url(#deliveryGradient)"
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                     strokeDasharray={RING_CIRCUMFERENCE}
//                     initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
//                     whileInView={{
//                       strokeDashoffset: RING_CIRCUMFERENCE * (1 - DELIVERY_RATE),
//                     }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 1.6, ease: "easeOut", delay: 0.3 }}
//                   />
//                   <defs>
//                     <linearGradient id="deliveryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" stopColor={amber} />
//                       <stop offset="100%" stopColor={accent} />
//                     </linearGradient>
//                   </defs>
//                 </svg>

//                 {/* center hub — the client's project */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.7 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5 }}
//                   style={{
//                     position: "absolute",
//                     left: "50%",
//                     top: "50%",
//                     transform: "translate(-50%, -50%)",
//                     width: 116,
//                     height: 116,
//                     borderRadius: "50%",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     gap: 2,
//                     background: "linear-gradient(135deg, #ff5b2e, #dc2626)",
//                     boxShadow:
//                       "0 0 0 8px rgba(255,91,46,.10), 0 10px 32px rgba(255,91,46,.4)",
//                     zIndex: 3,
//                   }}
//                 >
//                   <IconBriefcase size={24} color="#fff" />
//                   <Text size="lg" fw={800} c="#fff" ta="center" lh={1}>
//                     98%
//                   </Text>
//                   <Text size="9px" fw={600} c="rgba(255,255,255,.85)" ta="center" lh={1.1}>
//                     on-time delivery
//                   </Text>
//                 </motion.div>

//                 {/* orbiting role satellites */}
//                 {satellites.map((sat, i) => {
//                   const Icon = sat.icon;
//                   return (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, scale: 0.6 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
//                       style={{
//                         position: "absolute",
//                         left: `calc(50% + ${sat.x}px - 27px)`,
//                         top: `calc(50% + ${sat.y}px - 27px)`,
//                         zIndex: 4,
//                       }}
//                     >
//                       <motion.div
//                         animate={{ y: [0, -6, 0] }}
//                         transition={{
//                           duration: 3 + i * 0.3,
//                           repeat: Infinity,
//                           ease: "easeInOut",
//                           delay: i * 0.2,
//                         }}
//                         title={sat.role}
//                       >
//                         <motion.div whileHover={{ scale: 1.15 }}>
//                           <Box
//                             style={{
//                               width: 54,
//                               height: 54,
//                               borderRadius: "50%",
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "center",
//                               background: sat.color,
//                               border: `3px solid #0a0a0c`,
//                               boxShadow: "0 6px 16px rgba(0,0,0,.4)",
//                               cursor: "default",
//                             }}
//                           >
//                             <Icon size={22} color="#fff" />
//                           </Box>
//                         </motion.div>
//                       </motion.div>
//                     </motion.div>
//                   );
//                 })}
//               </Box>

//               {/* bottom stat pill */}
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//                 style={{ marginTop: 30, zIndex: 5 }}
//               >
//                 <Paper
//                   radius="xl"
//                   px="lg"
//                   py={8}
//                   style={{
//                     background: "rgba(20,20,23,.85)",
//                     border: `1px solid ${border}`,
//                     backdropFilter: "blur(8px)",
//                   }}
//                 >
//                   <Group gap={8}>
//                     <IconGlobe size={16} color={amber} />
//                     <Text size="xs" fw={700} c={textPrimary}>
//                       200+ consultants · 25+ countries
//                     </Text>
//                   </Group>
//                 </Paper>
//               </motion.div>
//             </Box>
//           </Grid.Col>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// };

// export default ProjectResourceConsulting;

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
