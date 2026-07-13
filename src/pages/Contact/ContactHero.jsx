// import React, { useState } from "react";
// import { motion } from "framer-motion";

// import {
//   ActionIcon,
//   Badge,
//   Box,
//   Button,
//   Card,
//   Center,
//   Container,
//   Divider,
//   Grid,
//   Group,
//   Paper,
//   SimpleGrid,
//   Stack,
//   Text,
//   TextInput,
//   Textarea,
//   Select,
//   ThemeIcon,
//   Title,
//   Accordion,
//   Anchor,
//   useComputedColorScheme,
// } from "@mantine/core";

// import {
//   IconArrowDown,
//   IconArrowRight,
//   IconBrandWhatsapp,
//   IconBuilding,
//   IconClock,
//   IconMail,
//   IconMapPin,
//   IconPhone,
//   IconSend,
//   IconStarFilled,
// } from "@tabler/icons-react";

// const ContactHero = () => {
//   const colorScheme = useComputedColorScheme("light");

//   const dark = colorScheme === "dark";

//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   const handleChange = (field) => (value) => {
//     setForm((prev) => ({
//       ...prev,
//       [field]: typeof value === "string" ? value : value?.target?.value || "",
//     }));
//   };

//   const handleSubmit = () => {
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);

//       alert("Message sent successfully!");

//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         service: "",
//         message: "",
//       });
//     }, 1500);
//   };

//   const scrollToForm = () => {
//     document.getElementById("contact-form")?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   return (
//     <Box
//       style={{
//         width: "100%",
//         overflowX: "hidden",
//         background: dark ? "#06111F" : "#F8FAFC",
//       }}
//     >
//       {/* ================================================= */}
//       {/* HERO SECTION */}
//       {/* ================================================= */}

//       <Box
//         pos="relative"
//         py={140}
//         style={{
//           overflow: "hidden",
//           background: dark
//             ? "linear-gradient(135deg,#041320,#071A2F,#0A2F52)"
//             : "linear-gradient(135deg,#F8FBFF,#EEF7FF,#E8F5FF)",
//         }}
//       >
//         {/* Glow Left */}

//         <Box
//           style={{
//             position: "absolute",
//             width: 350,
//             height: 350,
//             borderRadius: "50%",
//             background: "#00D4FF",
//             filter: "blur(170px)",
//             opacity: 0.15,
//             left: "-10%",
//             top: -100,
//           }}
//         />

//         {/* Glow Right */}

//         <Box
//           style={{
//             position: "absolute",
//             width: 300,
//             height: 300,
//             borderRadius: "50%",
//             background: "#4F46E5",
//             filter: "blur(170px)",
//             opacity: 0.18,
//             right: "-10%",
//             bottom: -100,
//           }}
//         />

//         {/* Grid */}

//         <Box
//           style={{
//             position: "absolute",
//             inset: 0,
//             opacity: 0.25,
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
//             backgroundSize: "60px 60px",
//           }}
//         />

//         <Container size="xl">
//           <Stack align="center" gap={35}>
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 40,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.6,
//               }}
//             >
//               <Badge size="xl" radius="xl" color="cyan" variant="light">
//                 🚀 Trusted by Startups & Enterprises
//               </Badge>
//             </motion.div>

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 40,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 delay: 0.2,
//                 duration: 0.6,
//               }}
//             >
//               <Title
//                 ta="center"
//                 fw={900}
//                 style={{
//                   fontSize: "clamp(2.4rem,6vw,5rem)",
//                   lineHeight: 1.1,
//                   maxWidth: 900,
//                   margin: "0 auto",
//                   color: dark ? "#fff" : "#111827",
//                 }}
//               >
//                 Let's Build
//                 <br />
//                 <Text
//                   component="span"
//                   inherit
//                   variant="gradient"
//                   gradient={{
//                     from: "cyan",
//                     to: "blue",
//                   }}
//                 >
//                   Something Amazing Together
//                 </Text>
//               </Title>
//             </motion.div>

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 delay: 0.4,
//               }}
//             >
//               <Text ta="center" maw={760} size="lg" c="dimmed" lh={1.9}>
//                 Transform your ideas into scalable digital products with our
//                 experienced team of designers, developers and technology
//                 experts. We deliver enterprise-grade software, websites, mobile
//                 apps and cloud solutions.
//               </Text>
//             </motion.div>
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 delay: 0.6,
//               }}
//             >
//               <Group justify="center" gap="md" wrap="wrap">
//                 <Button
//                   size="lg"
//                   radius="xl"
//                   px={34}
//                   h={56}
//                   loading={loading}
//                   leftSection={<IconSend size={18} />}
//                   onClick={scrollToForm}
//                   variant="gradient"
//                   gradient={{
//                     from: "cyan",
//                     to: "blue",
//                   }}
//                 >
//                   Start Your Project
//                 </Button>

//                 <Button
//                   component="a"
//                   href="https://wa.me/919876543210"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   size="lg"
//                   radius="xl"
//                   h={56}
//                   px={34}
//                   color="green"
//                   variant="light"
//                   leftSection={<IconBrandWhatsapp size={20} />}
//                 >
//                   WhatsApp Us
//                 </Button>
//               </Group>
//             </motion.div>

//             {/* ===================== */}
//             {/* STATS */}
//             {/* ===================== */}

//             <SimpleGrid
//               cols={{
//                 base: 1,
//                 xs: 2,
//                 md: 4,
//               }}
//               spacing="lg"
//               mt={40}
//               w="100%"
//             >
//               {[
//                 {
//                   number: "250+",
//                   label: "Projects Delivered",
//                 },
//                 {
//                   number: "50+",
//                   label: "Happy Clients",
//                 },
//                 {
//                   number: "5+",
//                   label: "Years Experience",
//                 },
//                 {
//                   number: "24/7",
//                   label: "Support",
//                 },
//               ].map((item) => (
//                 <motion.div
//                   whileHover={{
//                     y: -8,
//                   }}
//                   key={item.label}
//                 >
//                   <Paper
//                     p="xl"
//                     radius="xl"
//                     withBorder
//                     shadow="md"
//                     bg={dark ? "rgba(255,255,255,.04)" : "white"}
//                     style={{
//                       backdropFilter: "blur(14px)",
//                       textAlign: "center",
//                       height: "100%",
//                     }}
//                   >
//                     <Title order={2} c="cyan">
//                       {item.number}
//                     </Title>

//                     <Text mt={8} c="dimmed">
//                       {item.label}
//                     </Text>
//                   </Paper>
//                 </motion.div>
//               ))}
//             </SimpleGrid>

//             {/* ===================== */}
//             {/* SCROLL BUTTON */}
//             {/* ===================== */}

//             {/* <motion.div
//               animate={{
//                 y: [0, 12, 0],
//               }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 1.8,
//               }}
//             >
//               <ActionIcon
//                 radius="xl"
//                 size={52}
//                 variant="gradient"
//                 gradient={{
//                   from: "cyan",
//                   to: "blue",
//                 }}
//                 onClick={scrollToForm}
//               >
//                 <IconArrowDown size={24} />
//               </ActionIcon>
//             </motion.div> */}
//           </Stack>
//         </Container>
//       </Box>

//       {/* ======================================= */}
//       {/* CONTACT SECTION */}
//       {/* ======================================= */}

//       <Box
//         id="contact-form"
//         py={{
//           base: 70,
//           md: 110,
//         }}
//         bg={dark ? "#07111F" : "#F8FAFC"}
//       >
//         <Container size="xl">
//           <Grid gutter={40}>
//             {/* ======================================= */}
//             {/* LEFT SIDE */}
//             {/* ======================================= */}

//             <Grid.Col
//               span={{
//                 base: 12,
//                 md: 5,
//               }}
//             >
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   x: -40,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//               >
//                 <Badge size="lg" radius="xl" color="cyan" variant="light">
//                   Contact Information
//                 </Badge>

//                 <Title mt="md" mb="lg" order={2}>
//                   Let's discuss
//                   <br />
//                   your next project.
//                 </Title>

//                 <Text c="dimmed" mb={35} lh={1.8}>
//                   Whether you need a website, enterprise software, mobile
//                   application or cloud solution, we're here to help.
//                 </Text>

//                 <Stack gap="lg">
//                   {[
//                     {
//                       icon: <IconMail size={22} />,
//                       title: "Email",
//                       value: "contact@nexflare.com",
//                     },
//                     {
//                       icon: <IconPhone size={22} />,
//                       title: "Phone",
//                       value: "+91 98765 43210",
//                     },
//                     {
//                       icon: <IconMapPin size={22} />,
//                       title: "Office",
//                       value: "Pune, Maharashtra",
//                     },
//                     {
//                       icon: <IconClock size={22} />,
//                       title: "Business Hours",
//                       value: "Mon - Fri | 9:30 AM - 6:30 PM",
//                     },
//                   ].map((item) => (
//                     <Paper
//                       key={item.title}
//                       radius="xl"
//                       p="lg"
//                       withBorder
//                       shadow="sm"
//                     >
//                       <Group align="flex-start" wrap="nowrap">
//                         <ThemeIcon
//                           radius="xl"
//                           size={50}
//                           variant="gradient"
//                           gradient={{
//                             from: "cyan",
//                             to: "blue",
//                           }}
//                         >
//                           {item.icon}
//                         </ThemeIcon>

//                         <div>
//                           <Text fw={700}>{item.title}</Text>

//                           <Text c="dimmed" mt={4}>
//                             {item.value}
//                           </Text>
//                         </div>
//                       </Group>
//                     </Paper>
//                   ))}
//                 </Stack>
//               </motion.div>
//             </Grid.Col>
//             {/* ======================================= */}
//             {/* RIGHT SIDE - CONTACT FORM */}
//             {/* ======================================= */}

//             <Grid.Col
//               span={{
//                 base: 12,
//                 md: 7,
//               }}
//             >
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   x: 40,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   duration: 0.6,
//                 }}
//               >
//                 <Paper
//                   radius={28}
//                   p={{
//                     base: "lg",
//                     sm: "xl",
//                     md: 40,
//                   }}
//                   shadow="xl"
//                   withBorder
//                   bg={dark ? "rgba(255,255,255,.04)" : "white"}
//                   style={{
//                     backdropFilter: "blur(18px)",
//                   }}
//                 >
//                   <Group justify="space-between" mb="xl" wrap="wrap">
//                     <div>
//                       <Title order={2}>Send us a Message</Title>

//                       <Text c="dimmed" mt={5}>
//                         We'll get back to you within 24 hours.
//                       </Text>
//                     </div>

//                     <Badge size="lg" radius="xl" color="green" variant="light">
//                       Free Consultation
//                     </Badge>
//                   </Group>

//                   <Grid gutter="md">
//                     <Grid.Col
//                       span={{
//                         base: 12,
//                         sm: 6,
//                       }}
//                     >
//                       <TextInput
//                         label="Full Name"
//                         placeholder="John Doe"
//                         radius="lg"
//                         size="md"
//                         value={form.name}
//                         onChange={handleChange("name")}
//                         required
//                       />
//                     </Grid.Col>

//                     <Grid.Col
//                       span={{
//                         base: 12,
//                         sm: 6,
//                       }}
//                     >
//                       <TextInput
//                         label="Email"
//                         placeholder="john@example.com"
//                         radius="lg"
//                         size="md"
//                         value={form.email}
//                         onChange={handleChange("email")}
//                         required
//                       />
//                     </Grid.Col>

//                     <Grid.Col
//                       span={{
//                         base: 12,
//                         sm: 6,
//                       }}
//                     >
//                       <TextInput
//                         label="Phone Number"
//                         placeholder="+91 9876543210"
//                         radius="lg"
//                         size="md"
//                         value={form.phone}
//                         onChange={handleChange("phone")}
//                       />
//                     </Grid.Col>

//                     <Grid.Col
//                       span={{
//                         base: 12,
//                         sm: 6,
//                       }}
//                     >
//                       <Select
//                         label="Service"
//                         placeholder="Choose Service"
//                         radius="lg"
//                         size="md"
//                         value={form.service}
//                         onChange={(value) =>
//                           setForm({
//                             ...form,
//                             service: value,
//                           })
//                         }
//                         data={[
//                           "Website Development",
//                           "Custom Software",
//                           "React Development",
//                           "Mobile App",
//                           "Cloud Solutions",
//                           "UI / UX Design",
//                           "Digital Marketing",
//                           "Other",
//                         ]}
//                       />
//                     </Grid.Col>

//                     <Grid.Col span={12}>
//                       <Textarea
//                         label="Project Details"
//                         placeholder="Tell us about your project..."
//                         minRows={7}
//                         radius="lg"
//                         autosize
//                         value={form.message}
//                         onChange={handleChange("message")}
//                       />
//                     </Grid.Col>

//                     <Grid.Col span={12}>
//                       <Group justify="space-between" mt="sm" wrap="wrap">
//                         <Group gap="xs">
//                           <IconStarFilled size={16} color="#FFD43B" />

//                           <Text size="sm">Rated 4.9/5 by clients</Text>
//                         </Group>

//                         <Text size="sm" c="dimmed">
//                           Response within 24 Hours
//                         </Text>
//                       </Group>
//                     </Grid.Col>

//                     <Grid.Col span={12}>
//                       <Button
//                         fullWidth
//                         h={56}
//                         radius="xl"
//                         mt="md"
//                         loading={loading}
//                         leftSection={<IconSend size={20} />}
//                         variant="gradient"
//                         gradient={{
//                           from: "cyan",
//                           to: "blue",
//                         }}
//                         onClick={handleSubmit}
//                       >
//                         Send Message
//                       </Button>
//                     </Grid.Col>
//                   </Grid>

//                   <Divider my="xl" />

//                   <SimpleGrid
//                     cols={{
//                       base: 1,
//                       sm: 3,
//                     }}
//                     spacing="md"
//                   >
//                     <Paper p="md" radius="lg" withBorder>
//                       <Center mb={8}>
//                         <ThemeIcon
//                           size={46}
//                           radius="xl"
//                           color="cyan"
//                           variant="light"
//                         >
//                           <IconBuilding size={22} />
//                         </ThemeIcon>
//                       </Center>

//                       <Text ta="center" fw={700}>
//                         Enterprise
//                       </Text>

//                       <Text ta="center" size="sm" c="dimmed">
//                         Custom scalable solutions
//                       </Text>
//                     </Paper>

//                     <Paper p="md" radius="lg" withBorder>
//                       <Center mb={8}>
//                         <ThemeIcon
//                           size={46}
//                           radius="xl"
//                           color="green"
//                           variant="light"
//                         >
//                           <IconClock size={22} />
//                         </ThemeIcon>
//                       </Center>

//                       <Text ta="center" fw={700}>
//                         Fast Delivery
//                       </Text>

//                       <Text ta="center" size="sm" c="dimmed">
//                         Agile development process
//                       </Text>
//                     </Paper>

//                     <Paper p="md" radius="lg" withBorder>
//                       <Center mb={8}>
//                         <ThemeIcon
//                           size={46}
//                           radius="xl"
//                           color="violet"
//                           variant="light"
//                         >
//                           <IconMail size={22} />
//                         </ThemeIcon>
//                       </Center>

//                       <Text ta="center" fw={700}>
//                         Support
//                       </Text>

//                       <Text ta="center" size="sm" c="dimmed">
//                         Dedicated technical support
//                       </Text>
//                     </Paper>
//                   </SimpleGrid>
//                 </Paper>
//               </motion.div>
//             </Grid.Col>
//           </Grid>
//         </Container>
//       </Box>
//       {/* ===================================================== */}
//       {/* GOOGLE MAP SECTION */}
//       {/* ===================================================== */}

//       <Box py={100} bg={dark ? "#08131F" : "#F4F8FC"}>
//         <Container size="xl">
//           <Stack align="center" mb={60}>
//             <Badge color="cyan" variant="light" radius="xl" size="lg">
//               Visit Our Office
//             </Badge>

//             <Title ta="center" order={2}>
//               We'd Love To Meet You
//             </Title>

//             <Text ta="center" maw={700} c="dimmed">
//               Schedule a meeting with our experts or visit our office to discuss
//               your next digital transformation project.
//             </Text>
//           </Stack>

//           <Paper
//             radius={30}
//             shadow="xl"
//             withBorder
//             style={{
//               overflow: "hidden",
//             }}
//           >
//             <Box
//               component="iframe"
//               //   src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4559990416305!2d73.94700722519244!3d18.55346963254647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c4ea36a8f7%3A0xf585434dc33ce581!2sGLOBAL%20BUSINESS%20HUB%2C%20EON%20Free%20Zone%2C%20Kharadi%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1782739966793!5m2!1sen!2sin"
//               w="100%"
//               h={500}
//               style={{
//                 border: 0,
//               }}
//             />
//           </Paper>
//         </Container>
//       </Box>

//       {/* ===================================================== */}
//       {/* FAQ */}
//       {/* ===================================================== */}

//       <Box py={100} bg={dark ? "#06111F" : "white"}>
//         <Container size="md">
//           <Stack align="center" mb={60}>
//             <Badge color="cyan" variant="light" radius="xl">
//               Frequently Asked Questions
//             </Badge>

//             <Title ta="center">Everything You Need To Know</Title>

//             <Text ta="center" maw={650} c="dimmed">
//               Here are answers to the most commonly asked questions by our
//               clients.
//             </Text>
//           </Stack>

//         {/* ====================THIS IS DROPDOWN=================================  */}

//           <Accordion
//             variant="separated"
//             styles={(theme) => ({
//               item: {
//                 background: "#2F2F2F",
//                 border: "1px solid #444",
//                 borderRadius: 12,
//                 overflow: "hidden",
//                 marginBottom: 16,
//               },

//               control: {
//                 background: "#2F2F2F",
//                 color: "#fff",
//                 fontWeight: 500,
//                 transition: "all .25s ease",

//                 "&:hover": {
//                   background: "#3A3A3A", // Dark hover instead of white
//                   color: "#fff",
//                 },
//               },

//               panel: {
//                 background: "#2F2F2F",
//                 color: "#ddd",
//                 paddingTop: 0,
//               },

//               chevron: {
//                 color: "#fff",
//               },
//             })}
//           >
//             <Accordion.Item value="1">
//               <Accordion.Control>
//                 How long does a project usually take?
//               </Accordion.Control>

//               <Accordion.Panel>
//                 Small projects usually take 2–4 weeks, while enterprise
//                 applications may take 2–6 months depending on complexity.
//               </Accordion.Panel>
//             </Accordion.Item>

//             <Accordion.Item value="2">
//               <Accordion.Control>Do you sign NDA?</Accordion.Control>

//               <Accordion.Panel>
//                 Yes. We sign Non-Disclosure Agreements before discussing
//                 confidential business ideas.
//               </Accordion.Panel>
//             </Accordion.Item>

//             <Accordion.Item value="3">
//               <Accordion.Control>Do you provide maintenance?</Accordion.Control>

//               <Accordion.Panel>
//                 Absolutely. We offer long-term maintenance, security updates,
//                 monitoring and feature enhancements.
//               </Accordion.Panel>
//             </Accordion.Item>

//             <Accordion.Item value="4">
//               <Accordion.Control>
//                 Which technologies do you use?
//               </Accordion.Control>

//               <Accordion.Panel>
//                 React, Next.js, Java, Spring Boot, Node.js, Flutter, AWS, Azure,
//                 PostgreSQL, MySQL and many more.
//               </Accordion.Panel>
//             </Accordion.Item>
//           </Accordion>
//         </Container>
//       </Box>

//       {/* ===================================================== */}
//       {/* CTA */}
//       {/* ===================================================== */}

//       <Box
//         py={120}
//         style={{
//           background: "linear-gradient(135deg,#071A2F,#0B3D91,#155EEF)",
//         }}
//       >
//         <Container size="lg">
//           <motion.div
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             initial={{
//               opacity: 0,
//               y: 50,
//             }}
//             transition={{
//               duration: 0.6,
//             }}
//           >
//             <Stack align="center" gap="xl">
//               <Badge size="xl" radius="xl" color="cyan" variant="white">
//                 Let's Build Together 🚀
//               </Badge>

//               <Title
//                 ta="center"
//                 c="white"
//                 style={{
//                   fontSize: "clamp(2rem,5vw,4rem)",
//                 }}
//               >
//                 Ready To Start
//                 <br />
//                 Your Dream Project?
//               </Title>

//               <Text ta="center" c="gray.2" maw={720} size="lg">
//                 Whether you're building a startup, enterprise platform or
//                 digital product, our experts are ready to turn your vision into
//                 reality.
//               </Text>

//               <Group justify="center" gap="md" wrap="wrap">
//                 <Button
//                   size="xl"
//                   radius="xl"
//                   color="white"
//                   c="dark"
//                   rightSection={<IconArrowRight size={18} />}
//                   onClick={scrollToForm}
//                 >
//                   Start Your Project
//                 </Button>

//                 <Button
//                   component="a"
//                   href="mailto:contact@nexflare.com"
//                   size="xl"
//                   radius="xl"
//                   variant="outline"
//                   color="white"
//                 >
//                   Contact Us
//                 </Button>
//               </Group>
//             </Stack>
//           </motion.div>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default ContactHero;


import { Box, Container, Text, Title, Stack, Group, SimpleGrid, useComputedColorScheme } from "@mantine/core";
import { Phone, Mail, MapPin } from "lucide-react";

const aqua = "aqua";
const teal = "#06b6d4";

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["+91-8237525097"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["enquiry@nexflaredynamics.com", "contact-us@nexflaredynamics.com"],
  },
  {
    icon: MapPin,
    label: "Office Address",
    lines: ["GLOBAL BUSINESS HUB, EON Free Zone,", "Kharadi, Pune, Maharashtra 411014"],
    bold: true,
  },
];

const stats = [
  { value: "24", suffix: "h", label: "Response Time" },
  { value: "50", suffix: "+", label: "Happy Clients" },
  { value: "100", suffix: "%", label: "Satisfaction" },
];

const GetInTouchScreen = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const headingColor = isDark ? "#f8fafc" : "#0b1326";
  const bodyColor = isDark ? "rgba(226,232,240,0.6)" : "rgba(11,19,38,0.65)";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.7)";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";
  const iconBg = isDark ? "rgba(6,182,212,0.14)" : "rgba(6,182,212,0.1)";
  const labelColor = isDark ? "rgba(226,232,240,0.45)" : "rgba(15,23,42,0.5)";
  const statLabelColor = isDark ? "rgba(226,232,240,0.55)" : "rgba(15,23,42,0.55)";

  return (
    <Box component="section" py={{ base: 56, md: 88 }}>
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 40, md: 60 }} py={60}>
          {/* Left column */}
          <Stack gap={0}>
            <Box   
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                alignSelf: "flex-start",
                padding: "8px 16px",
                borderRadius: 999,
                border: `1px solid ${teal}55`,
                background: isDark ? "rgba(6,182,212,0.08)" : "rgba(6,182,212,0.06)",
                marginBottom: 22,
              }}
            >
              <Box style={{ width: 6, height: 6, borderRadius: 999, background: teal }} />
              <Text fw={700} size="xs" style={{ color: teal, letterSpacing: 1, textTransform: "uppercase" }}>
                Get In Touch
              </Text>
            </Box>

            <Title
              order={2}
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 600,
                fontSize: "clamp(2rem, 4vw, 2.9rem)",
                lineHeight: 1.15,
                color: headingColor,
              }}
            >
              Let's Build <span style={{ color: teal }}>Your</span>
              <br />
              <span style={{ color: teal }}>Vision</span> Together
            </Title>

            <Text mt={22} size="md" maw={440} style={{ color: bodyColor, lineHeight: 1.75 }}>
              At Nexflare Dynamics, we value communication and collaboration.
              Reach out for project discussions, service enquiries, or expert
              consultations — our team is ready to assist at every step.
            </Text>

            <Group mt={36} gap={44}>
              {stats.map(({ value, suffix, label }) => (
                <Stack key={label} gap={4}>
                  <Text
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontWeight: 700,
                      fontSize: 32,
                      color: headingColor,
                      lineHeight: 1,
                    }}
                  >
                    {value}
                    <Text component="span" style={{ color: teal, fontSize: 16, fontWeight: 700 }}>
                      {suffix}
                    </Text>
                  </Text>
                  <Text size="xs" style={{ color: statLabelColor }}>
                    {label}
                  </Text>
                </Stack>
              ))}
            </Group>
          </Stack>

          {/* Right column */}
          <Stack gap={16}>
            {contactCards.map(({ icon: Icon, label, lines }) => (
              <Box
                key={label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: 14,
                  padding: "22px 24px",
                }}
              >
                <Box
                  style={{
                    width: 38,
                    height: 38,
                    minWidth: 38,
                    borderRadius: 10,
                    background: iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={17} color={teal} strokeWidth={1.8} />
                </Box>

                <Stack gap={4}>
                  <Text
                    fw={600}
                    size="xs"
                    style={{ color: labelColor, letterSpacing: 1, textTransform: "uppercase" }}
                  >
                    {label}
                  </Text>
                  {lines.map((line) => (
                    <Text
                      key={line}
                      size="sm"
                      fw={600}
                      style={{
                        color: label === "Office Address" ? headingColor : teal,
                        lineHeight: 1.5,
                      }}
                    >
                      {line}
                    </Text>
                  ))}
                </Stack>
              </Box>
            ))}

            <Box
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 18px",
                borderRadius: 999,
                border: `1px solid ${teal}55`,
                background: isDark ? "rgba(6,182,212,0.08)" : "rgba(6,182,212,0.06)",
              }}
            >
              <Box style={{ width: 6, height: 6, borderRadius: 999, background: teal }} />
              <Text size="xs" fw={600} style={{ color: teal }}>
                We're open Mon–Sat · 9 AM – 7 PM IST
              </Text>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default GetInTouchScreen;