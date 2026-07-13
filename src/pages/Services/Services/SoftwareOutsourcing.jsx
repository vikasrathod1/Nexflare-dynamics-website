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
//   SimpleGrid,
//   Tooltip,
//   useComputedColorScheme,
// } from "@mantine/core";

// import { motion } from "framer-motion";

// import {
//   IconRocket,
//   IconUsers,
//   IconAdjustmentsHorizontal,
//   IconRefresh,
//   IconMessageCircle,
//   IconShieldCheck,
//   IconHeadset,
//   IconDeviceDesktop,
//   IconServer2,
//   IconTestPipe,
//   IconSettingsCog,
//   IconUserCog,
//   IconBriefcase,
//   IconBolt,
//   IconWorld,
// } from "@tabler/icons-react";

// const capabilities = [
//   { icon: IconUsers, label: "Dedicated Development Teams" },
//   { icon: IconAdjustmentsHorizontal, label: "Flexible Hiring Models" },
//   { icon: IconRefresh, label: "Daily Agile Collaboration" },
//   { icon: IconMessageCircle, label: "Transparent Communication" },
//   { icon: IconShieldCheck, label: "Enterprise Security" },
//   { icon: IconHeadset, label: "Long-Term Technical Support" },
// ];

// const techStack = ["React", "Java", "Spring Boot", "Node.js", "Docker", "AWS", "Kubernetes"];

// // Positioned evenly around a circle of radius 130, starting at the top,
// // going clockwise. Precomputed so we don't run trig at render time.
// const satellites = [
//   { icon: IconDeviceDesktop, role: "Frontend", color: "#3b82f6", x: 0, y: -130 },
//   { icon: IconServer2, role: "Backend", color: "#6366f1", x: 123.6, y: -40.2 },
//   { icon: IconTestPipe, role: "QA", color: "#0ea5e9", x: 76.4, y: 105.2 },
//   { icon: IconSettingsCog, role: "DevOps", color: "#22c55e", x: -76.4, y: 105.2 },
//   { icon: IconUserCog, role: "Project Manager", color: "#f59e0b", x: -123.6, y: -40.2 },
// ];

// const SoftwareOutsourcing = () => {
//   const colorScheme = useComputedColorScheme("light");
//   const isDark = colorScheme === "dark";

//   const textPrimary = isDark ? "#f1f5f9" : "#0f172a";
//   const textSecondary = isDark ? "#94a3b8" : "#64748b";

//   return (
//     <Container size="xl" py={40}>
//       <Paper
//         radius="xl"
//         shadow="xl"
//         withBorder
//         p={0}
//         style={{
//           overflow: "hidden",
//           background: isDark ? "#0f172a" : "#ffffff",
//         }}
//       >
//         <Grid gutter={0}>
//           {/* LEFT SIDE — content */}
//           <Grid.Col span={{ base: 12, md: 6 }}>
//             <Box p={{ base: 32, sm: 48, lg: 60 }}>
//               <Badge variant="light" color="blue" radius="sm" mb={14}>
//                 Software Outsourcing
//               </Badge>

//               <Title
//                 order={2}
//                 style={{
//                   fontSize: "38px",
//                   fontWeight: 800,
//                   lineHeight: 1.2,
//                   color: textPrimary,
//                 }}
//               >
//                 Scale Your Team With World-Class Software Engineers
//               </Title>

//               <Text mt="md" size="md" maw={480} style={{ color: textSecondary }}>
//                 Extend your in-house team with experienced engineers, QA
//                 specialists, DevOps experts, and project managers — matched
//                 fast, embedded deeply, and managed with full transparency.
//               </Text>

//               <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="md" mt={32}>
//                 {capabilities.map((c, i) => {
//                   const Icon = c.icon;
//                   return (
//                     <Group key={i} gap="xs" wrap="nowrap" align="flex-start">
//                       <Box
//                         style={{
//                           flexShrink: 0,
//                           width: 28,
//                           height: 28,
//                           borderRadius: 8,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           background: isDark ? "rgba(59,130,246,.15)" : "rgba(59,130,246,.1)",
//                         }}
//                       >
//                         <Icon size={15} color="#3b82f6" />
//                       </Box>
//                       <Text size="sm" mt={3} style={{ color: textSecondary }}>
//                         {c.label}
//                       </Text>
//                     </Group>
//                   );
//                 })}
//               </SimpleGrid>

//               <Box mt={32}>
//                 <Text fw={600} mb="xs" size="sm" style={{ color: textPrimary }}>
//                   Tech Stack We Use
//                 </Text>
//                 <Group gap={8}>
//                   {techStack.map((tech, index) => (
//                     <Badge key={index} variant="light" color="indigo" radius="sm">
//                       {tech}
//                     </Badge>
//                   ))}
//                 </Group>
//               </Box>

//               <Button
//                 mt={36}
//                 size="md"
//                 radius="md"
//                 rightSection={<IconRocket size={18} />}
//                 style={{
//                   background: "linear-gradient(135deg, #3b82f6, #6366f1)",
//                 }}
//               >
//                 Hire Dedicated Developers
//               </Button>
//             </Box>
//           </Grid.Col>

//           {/* RIGHT SIDE — edge-to-edge orbit visual */}
//           <Grid.Col span={{ base: 12, md: 6 }}>
//             <Box
//               style={{
//                 position: "relative",
//                 height: "100%",
//                 minHeight: 560,
//                 background: isDark
//                   ? "radial-gradient(circle at 50% 42%, rgba(99,102,241,.35), transparent 60%), linear-gradient(160deg, #0b1220, #111827)"
//                   : "radial-gradient(circle at 50% 42%, rgba(99,102,241,.16), transparent 60%), linear-gradient(160deg, #eef2ff, #f5f7ff)",
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
//                   backgroundImage: `radial-gradient(${
//                     isDark ? "rgba(255,255,255,.07)" : "rgba(15,23,42,.07)"
//                   } 1px, transparent 1px)`,
//                   backgroundSize: "22px 22px",
//                   pointerEvents: "none",
//                 }}
//               />

//               {/* top-right floating badge */}
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 style={{ position: "absolute", top: 28, right: 28, zIndex: 5 }}
//               >
//                 <Paper
//                   radius="xl"
//                   px="md"
//                   py={6}
//                   style={{
//                     background: isDark ? "rgba(30,41,59,.85)" : "rgba(255,255,255,.9)",
//                     border: `1px solid ${isDark ? "rgba(148,163,184,.2)" : "rgba(148,163,184,.3)"}`,
//                     backdropFilter: "blur(8px)",
//                   }}
//                 >
//                   <Group gap={6}>
//                     <IconBolt size={14} color="#f59e0b" />
//                     <Text size="xs" fw={700} style={{ color: textPrimary }}>
//                       72h avg. match time
//                     </Text>
//                   </Group>
//                 </Paper>
//               </motion.div>

//               <Text
//                 size="xs"
//                 fw={700}
//                 mb={28}
//                 style={{
//                   letterSpacing: 2,
//                   textTransform: "uppercase",
//                   color: isDark ? "rgba(203,213,225,.6)" : "rgba(71,85,105,.7)",
//                 }}
//               >
//                 Cross-Functional Delivery Team
//               </Text>

//               {/* orbit diagram */}
//               <Box style={{ position: "relative", width: 300, height: 300 }}>
//                 {/* orbit path */}
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     borderRadius: "50%",
//                     border: `1.5px dashed ${isDark ? "rgba(148,163,184,.3)" : "rgba(99,102,241,.3)"}`,
//                   }}
//                 />

//                 {/* inner faint ring */}
//                 <Box
//                   style={{
//                     position: "absolute",
//                     inset: 58,
//                     borderRadius: "50%",
//                     border: `1px solid ${isDark ? "rgba(148,163,184,.15)" : "rgba(99,102,241,.15)"}`,
//                   }}
//                 />

//                 {/* center hub — the client's product */}
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
//                     width: 108,
//                     height: 108,
//                     borderRadius: "50%",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     gap: 4,
//                     background: "linear-gradient(135deg, #3b82f6, #6366f1)",
//                     boxShadow: isDark
//                       ? "0 0 0 8px rgba(99,102,241,.12), 0 8px 30px rgba(99,102,241,.45)"
//                       : "0 0 0 8px rgba(99,102,241,.1), 0 8px 24px rgba(99,102,241,.35)",
//                     zIndex: 3,
//                   }}
//                 >
//                   <IconBriefcase size={26} color="#fff" />
//                   <Text size="xs" fw={700} c="#fff" ta="center" lh={1.1}>
//                     Our
//                     <br />
//                     Team
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
//                       >
//                         <Tooltip label={sat.role} withArrow position="top">
//                           <motion.div whileHover={{ scale: 1.15 }}>
//                             <Box
//                               style={{
//                                 width: 54,
//                                 height: 54,
//                                 borderRadius: "50%",
//                                 display: "flex",
//                                 alignItems: "center",
//                                 justifyContent: "center",
//                                 background: sat.color,
//                                 border: `3px solid ${isDark ? "#0b1220" : "#f5f7ff"}`,
//                                 boxShadow: "0 6px 16px rgba(0,0,0,.25)",
//                                 cursor: "default",
//                               }}
//                             >
//                               <Icon size={22} color="#fff" />
//                             </Box>
//                           </motion.div>
//                         </Tooltip>
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
//                 style={{ marginTop: 32, zIndex: 5 }}
//               >
//                 <Paper
//                   radius="xl"
//                   px="lg"
//                   py={8}
//                   style={{
//                     background: isDark ? "rgba(30,41,59,.85)" : "rgba(255,255,255,.9)",
//                     border: `1px solid ${isDark ? "rgba(148,163,184,.2)" : "rgba(148,163,184,.3)"}`,
//                     backdropFilter: "blur(8px)",
//                   }}
//                 >
//                   <Group gap={8}>
//                     <IconWorld size={16} color="#6366f1" />
//                     <Text size="xs" fw={700} style={{ color: textPrimary }}>
//                       150+ engineers · 30+ countries
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

// export default SoftwareOutsourcing;

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
