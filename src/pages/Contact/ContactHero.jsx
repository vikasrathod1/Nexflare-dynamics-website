// import React from "react";
// import { motion } from "framer-motion";
// import { Container, Button, Badge, Group } from "@mantine/core";
// import { IconArrowDown, IconMail, IconBrandWhatsapp } from "@tabler/icons-react";

// const styles = `
//   .contact-hero {
//     position: relative;
//     min-height: 100vh;
//     display: flex;
//     align-items: center;
//     overflow: hidden;
//     background: #050d1a;
//   }

//   .hero-grid {
//     position: absolute;
//     inset: 0;
//     background-image:
//       linear-gradient(rgba(0, 212, 255, 0.04) 1px, transparent 1px),
//       linear-gradient(90deg, rgba(0, 212, 255, 0.04) 1px, transparent 1px);
//     background-size: 60px 60px;
//     mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%);
//   }

//   .glow-orb {
//     position: absolute;
//     border-radius: 50%;
//     filter: blur(90px);
//     pointer-events: none;
//     animation: pulse-glow 6s ease-in-out infinite alternate;
//   }

//   .glow-orb--left {
//     width: 500px;
//     height: 500px;
//     top: -80px;
//     left: -150px;
//     background: radial-gradient(circle, rgba(0, 212, 255, 0.18) 0%, transparent 70%);
//     animation-delay: 0s;
//   }

//   .glow-orb--right {
//     width: 400px;
//     height: 400px;
//     bottom: -60px;
//     right: -100px;
//     background: radial-gradient(circle, rgba(99, 51, 255, 0.2) 0%, transparent 70%);
//     animation-delay: 2s;
//   }

//   @keyframes pulse-glow {
//     from { opacity: 0.6; transform: scale(1); }
//     to   { opacity: 1;   transform: scale(1.12); }
//   }

//   .particle {
//     position: absolute;
//     width: 4px;
//     height: 4px;
//     border-radius: 50%;
//     background: #00d4ff;
//     opacity: 0.5;
//     animation: float-particle linear infinite;
//   }

//   .particle--1 { top: 20%; left: 10%;  animation-duration: 8s;  animation-delay: 0s;   width: 3px; height: 3px; }
//   .particle--2 { top: 60%; left: 80%;  animation-duration: 10s; animation-delay: 1s;   background: #a78bfa; }
//   .particle--3 { top: 35%; left: 55%;  animation-duration: 7s;  animation-delay: 2.5s; width: 5px; height: 5px; }
//   .particle--4 { top: 75%; left: 25%;  animation-duration: 9s;  animation-delay: 0.8s; background: #a78bfa; width: 3px; height: 3px; }
//   .particle--5 { top: 15%; left: 70%;  animation-duration: 11s; animation-delay: 3s; }
//   .particle--6 { top: 85%; left: 60%;  animation-duration: 6s;  animation-delay: 1.5s; background: #a78bfa; width: 6px; height: 6px; }

//   @keyframes float-particle {
//     0%   { transform: translateY(0); opacity: 0.5; }
//     50%  { transform: translateY(-30px); opacity: 1; }
//     100% { transform: translateY(0); opacity: 0.5; }
//   }

//   .hero-container {
//     position: relative;
//     z-index: 2;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding-top: 120px;
//     padding-bottom: 80px;
//   }

//   .hero-content {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//     gap: 28px;
//     max-width: 780px;
//   }

//   .hero-badge {
//     border-color: rgba(0, 212, 255, 0.4) !important;
//     color: #00d4ff !important;
//     background: rgba(0, 212, 255, 0.08) !important;
//     font-size: 13px;
//     letter-spacing: 0.5px;
//     padding: 6px 16px;
//   }

//   .badge-dot {
//     display: inline-block;
//     width: 7px;
//     height: 7px;
//     border-radius: 50%;
//     background: #00d4ff;
//     animation: blink 1.4s ease-in-out infinite;
//   }

//   @keyframes blink {
//     0%, 100% { opacity: 1; }
//     50%       { opacity: 0.2; }
//   }

//   .hero-heading {
//     font-size: clamp(2.4rem, 6vw, 4.2rem);
//     font-weight: 800;
//     color: #f0f6ff;
//     line-height: 1.1;
//     letter-spacing: -1px;
//     margin: 0;
//   }

//   .heading-accent {
//     display: inline-block;
//     background: linear-gradient(135deg, #00d4ff 0%, #a78bfa 100%);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     background-clip: text;
//   }

//   .hero-subtext {
//     font-size: clamp(1rem, 2.2vw, 1.2rem);
//     color: rgba(180, 200, 230, 0.75);
//     line-height: 1.7;
//     max-width: 560px;
//     margin: 0;
//   }

//   .hero-cta-group {
//     flex-wrap: wrap;
//     justify-content: center;
//   }

//   .cta-primary {
//     background: linear-gradient(135deg, #00d4ff, #0099cc) !important;
//     color: #050d1a !important;
//     font-weight: 700 !important;
//     border: none !important;
//     transition: transform 0.2s, box-shadow 0.2s !important;
//   }

//   .cta-primary:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 0 28px rgba(0, 212, 255, 0.45) !important;
//   }

//   .cta-secondary {
//     border-color: rgba(0, 212, 255, 0.45) !important;
//     color: #00d4ff !important;
//     background: rgba(0, 212, 255, 0.06) !important;
//     font-weight: 600 !important;
//     transition: transform 0.2s, box-shadow 0.2s, background 0.2s !important;
//   }

//   .cta-secondary:hover {
//     background: rgba(0, 212, 255, 0.14) !important;
//     transform: translateY(-2px);
//     box-shadow: 0 0 20px rgba(0, 212, 255, 0.2) !important;
//   }

//   .hero-stats {
//     display: flex;
//     gap: 40px;
//     margin-top: 8px;
//     padding-top: 28px;
//     border-top: 1px solid rgba(0, 212, 255, 0.12);
//     width: 100%;
//     justify-content: center;
//     flex-wrap: wrap;
//   }

//   .stat-item {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 4px;
//   }

//   .stat-value {
//     font-size: 1.9rem;
//     font-weight: 800;
//     background: linear-gradient(135deg, #00d4ff, #a78bfa);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     background-clip: text;
//     line-height: 1;
//   }

//   .stat-label {
//     font-size: 0.78rem;
//     color: rgba(180, 200, 230, 0.55);
//     text-transform: uppercase;
//     letter-spacing: 1px;
//   }

//   .scroll-cue {
//     margin-top: 56px;
//     background: none;
//     border: 1px solid rgba(0, 212, 255, 0.3);
//     border-radius: 50%;
//     width: 44px;
//     height: 44px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #00d4ff;
//     cursor: pointer;
//     transition: border-color 0.2s, background 0.2s;
//   }

//   .scroll-cue:hover {
//     background: rgba(0, 212, 255, 0.1);
//     border-color: #00d4ff;
//   }

//   @media (max-width: 600px) {
//     .hero-container {
//       padding-top: 100px;
//       padding-bottom: 60px;
//     }
//     .hero-stats { gap: 24px; }
//     .stat-value { font-size: 1.5rem; }
//     .hero-cta-group { gap: 12px; }
//   }
// `;

// const ContactHero = () => {
//   // Inject styles once
//   React.useEffect(() => {
//     const id = "contact-hero-styles";
//     if (!document.getElementById(id)) {
//       const tag = document.createElement("style");
//       tag.id = id;
//       tag.innerHTML = styles;
//       document.head.appendChild(tag);
//     }
//     return () => {
//       const tag = document.getElementById(id);
//       if (tag) tag.remove();
//     };
//   }, []);
//   const scrollToForm = () => {
//     const formSection = document.getElementById("contact-form");
//     if (formSection) {
//       formSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="contact-hero">
//       {/* Animated background grid */}
//       <div className="hero-grid" aria-hidden="true" />

//       {/* Glow orbs */}
//       <div className="glow-orb glow-orb--left" aria-hidden="true" />
//       <div className="glow-orb glow-orb--right" aria-hidden="true" />

//       {/* Floating particles */}
//       {[...Array(6)].map((_, i) => (
//         <div key={i} className={`particle particle--${i + 1}`} aria-hidden="true" />
//       ))}

//       <Container size="xl" className="hero-container">
//         <motion.div
//           className="hero-content"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.85 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.15, duration: 0.5 }}
//           >
//             <Badge
//               variant="outline"
//               size="lg"
//               className="hero-badge"
//               leftSection={<span className="badge-dot" />}
//             >
//               Available for new projects
//             </Badge>
//           </motion.div>

//           {/* Main heading */}
//           <motion.h1
//             className="hero-heading"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.25, duration: 0.6 }}
//           >
//             Let's Build Something
//             <span className="heading-accent"> Extraordinary</span>
//           </motion.h1>

//           {/* Subtext */}
//           <motion.p
//             className="hero-subtext"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//           >
//             Have a project in mind? We turn complex challenges into sleek digital
//             solutions — from web platforms to enterprise software.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.55, duration: 0.5 }}
//           >
//             <Group gap="md" className="hero-cta-group">
//               <Button
//                 size="lg"
//                 radius="xl"
//                 className="cta-primary"
//                 leftSection={<IconMail size={18} />}
//                 onClick={scrollToForm}
//               >
//                 Send a Message
//               </Button>
//               <Button
//                 size="lg"
//                 radius="xl"
//                 variant="outline"
//                 className="cta-secondary"
//                 leftSection={<IconBrandWhatsapp size={18} />}
//                 component="a"
//                 href="https://wa.me/your-number"
//                 target="_blank"
//               >
//                 WhatsApp Us
//               </Button>
//             </Group>
//           </motion.div>

//           {/* Stats row */}
//           <motion.div
//             className="hero-stats"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.75, duration: 0.6 }}
//           >
//             {[
//               { value: "150+", label: "Projects Delivered" },
//               { value: "98%", label: "Client Satisfaction" },
//               { value: "24h", label: "Response Time" },
//             ].map((stat) => (
//               <div key={stat.label} className="stat-item">
//                 <span className="stat-value">{stat.value}</span>
//                 <span className="stat-label">{stat.label}</span>
//               </div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Scroll cue */}
//         <motion.button
//           className="scroll-cue"
//           onClick={scrollToForm}
//           aria-label="Scroll to contact form"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.5 }}
//         >
//           <motion.div
//             animate={{ y: [0, 8, 0] }}
//             transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
//           >
//             <IconArrowDown size={20} />
//           </motion.div>
//         </motion.button>
//       </Container>
//     </section>
//   );
// };

// export default ContactHero;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Container,
//   Title,
//   Text,
//   Button,
//   Badge,
//   Group,
//   Stack,
//   TextInput,
//   Select,
//   Textarea,
// } from "@mantine/core";
// import {
//   IconArrowDown,
//   IconMail,
//   IconBrandWhatsapp,
// } from "@tabler/icons-react";

// const ContactHero = () => {
//   const [loading, setLoading] = useState(false);

//   const scrollToForm = () => {
//     document
//       .getElementById("contact-form")
//       ?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <>
//       {/* ================= HERO SECTION ================= */}

//       <section
//         style={{
//           position: "relative",
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           overflow: "hidden",
//           background:
//             "linear-gradient(135deg,#041320 0%,#071A2F 45%,#0A2F52 100%)",
//         }}
//       >
//         {/* Glow 1 */}

//         <div
//           style={{
//             position: "absolute",
//             width: 420,
//             height: 420,
//             borderRadius: "50%",
//             background: "#00D4FF",
//             filter: "blur(180px)",
//             opacity: 0.15,
//             top: -120,
//             left: -120,
//           }}
//         />

//         {/* Glow 2 */}

//         <div
//           style={{
//             position: "absolute",
//             width: 350,
//             height: 350,
//             borderRadius: "50%",
//             background: "#4F46E5",
//             filter: "blur(160px)",
//             opacity: 0.18,
//             bottom: -100,
//             right: -100,
//           }}
//         />

//         {/* Grid */}

//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
//             backgroundSize: "60px 60px",
//             opacity: 0.35,
//           }}
//         />

//         <Container size="xl">
//           <motion.div
//             initial={{ opacity: 0, y: 70 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <Stack align="center" gap="xl">
//               <Badge size="lg" radius="xl" variant="light" color="cyan">
//                 Available for New Projects
//               </Badge>

//               <Title
//                 order={1}
//                 ta="center"
//                 c="white"
//                 style={{
//                   fontSize: "clamp(2.5rem,6vw,5rem)",
//                   lineHeight: 1.1,
//                   fontWeight: 800,
//                 }}
//               >
//                 Let's Build Something
//                 <br />
//                 <span
//                   style={{
//                     background: "linear-gradient(90deg,#00D4FF,#7C3AED)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   Extraordinary
//                 </span>
//               </Title>

//               <Text
//                 c="gray.3"
//                 ta="center"
//                 maw={700}
//                 size="lg"
//                 style={{
//                   lineHeight: 1.8,
//                 }}
//               >
//                 Have an idea, product, or enterprise project? We help startups
//                 and businesses build scalable, secure and modern software
//                 solutions that create real impact.
//               </Text>

//               <Group>
//                 <Button
//                   size="lg"
//                   radius="xl"
//                   leftSection={<IconMail size={18} />}
//                   onClick={scrollToForm}
//                   styles={{
//                     root: {
//                       background: "linear-gradient(90deg,#00D4FF,#2563EB)",
//                     },
//                   }}
//                 >
//                   Send Message
//                 </Button>

//                 <Button
//                   component="a"
//                   href="https://wa.me/919876543210"
//                   target="_blank"
//                   size="lg"
//                   radius="xl"
//                   variant="outline"
//                   color="cyan"
//                   leftSection={<IconBrandWhatsapp size={18} />}
//                 >
//                   WhatsApp
//                 </Button>
//               </Group>

//               {/* Stats */}

//               <Group mt={40} gap={60} justify="center">
//                 <div style={{ textAlign: "center" }}>
//                   <Title c="cyan">150+</Title>
//                   <Text c="gray.5">Projects</Text>
//                 </div>

//                 <div style={{ textAlign: "center" }}>
//                   <Title c="cyan">98%</Title>
//                   <Text c="gray.5">Client Satisfaction</Text>
//                 </div>

//                 <div style={{ textAlign: "center" }}>
//                   <Title c="cyan">24 Hrs</Title>
//                   <Text c="gray.5">Response Time</Text>
//                 </div>
//               </Group>

//               {/* Scroll Button */}

//               <motion.div
//                 animate={{
//                   y: [0, 10, 0],
//                 }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 1.5,
//                 }}
//               >
//                 <Button
//                   mt={30}
//                   variant="subtle"
//                   color="cyan"
//                   radius="xl"
//                   onClick={scrollToForm}
//                 >
//                   <IconArrowDown />
//                 </Button>
//               </motion.div>
//             </Stack>
//           </motion.div>
//         </Container>
//       </section>

//       {/* ================= CONTACT FORM START ================= */}

//       <section
//         id="contact-form"
//         style={{
//           padding: "100px 0",
//           background: "#07111F",
//         }}
//       >
//         <Container size="xl">
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr",
//               gap: "50px",
//               alignItems: "flex-start",
//             }}
//           >
//             {/* Left Side */}

//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <Badge color="cyan" variant="light" radius="xl" mb="md">
//                 Get In Touch
//               </Badge>

//               <Title order={2} c="white" mb="md">
//                 We'd love to hear
//                 <br />
//                 about your project
//               </Title>

//               <Text c="gray.4" mb={40} style={{ lineHeight: 1.8 }}>
//                 Whether you need custom software, enterprise applications,
//                 mobile apps, UI/UX design or cloud solutions, our team is ready
//                 to help.
//               </Text>

//               {/* Contact Cards */}

//               <Stack gap="lg">
//                 <div
//                   style={{
//                     padding: 20,
//                     borderRadius: 18,
//                     background: "rgba(255,255,255,.03)",
//                     border: "1px solid rgba(255,255,255,.08)",
//                   }}
//                 >
//                   <Text fw={700} c="cyan">
//                     📧 Email
//                   </Text>

//                   <Text c="gray.3">contact@nexflare.com</Text>
//                 </div>

//                 <div
//                   style={{
//                     padding: 20,
//                     borderRadius: 18,
//                     background: "rgba(255,255,255,.03)",
//                     border: "1px solid rgba(255,255,255,.08)",
//                   }}
//                 >
//                   <Text fw={700} c="cyan">
//                     📞 Phone
//                   </Text>

//                   <Text c="gray.3">+91 98765 43210</Text>
//                 </div>

//                 <div
//                   style={{
//                     padding: 20,
//                     borderRadius: 18,
//                     background: "rgba(255,255,255,.03)",
//                     border: "1px solid rgba(255,255,255,.08)",
//                   }}
//                 >
//                   <Text fw={700} c="cyan">
//                     📍 Office
//                   </Text>

//                   <Text c="gray.3">
//                     Pune, Maharashtra
//                     <br />
//                     India
//                   </Text>
//                 </div>

//                 <div
//                   style={{
//                     padding: 20,
//                     borderRadius: 18,
//                     background: "rgba(255,255,255,.03)",
//                     border: "1px solid rgba(255,255,255,.08)",
//                   }}
//                 >
//                   <Text fw={700} c="cyan">
//                     🕒 Working Hours
//                   </Text>

//                   <Text c="gray.3">
//                     Monday - Friday
//                     <br />
//                     9:30 AM - 6:30 PM
//                   </Text>
//                 </div>
//               </Stack>
//             </motion.div>

//             {/* Right Side */}

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <div
//                 style={{
//                   padding: 35,
//                   borderRadius: 25,
//                   background: "rgba(255,255,255,.03)",
//                   border: "1px solid rgba(255,255,255,.08)",
//                   backdropFilter: "blur(20px)",
//                 }}
//               >
//                 <Title order={3} c="white" mb="xl">
//                   Send us a Message
//                 </Title>

//                 <Stack>
//                   <TextInput
//                     label="Full Name"
//                     placeholder="John Doe"
//                     radius="md"
//                   />

//                   <TextInput
//                     label="Email Address"
//                     placeholder="john@email.com"
//                     radius="md"
//                   />

//                   <TextInput
//                     label="Phone Number"
//                     placeholder="+91 XXXXX XXXXX"
//                     radius="md"
//                   />

//                   <Select
//                     label="Service"
//                     placeholder="Select Service"
//                     radius="md"
//                     data={[
//                       "Website Development",
//                       "Mobile App Development",
//                       "Custom Software",
//                       "Cloud Services",
//                       "UI / UX Design",
//                       "Digital Marketing",
//                       "Other",
//                     ]}
//                   />

//                   <Textarea
//                     label="Message"
//                     placeholder="Tell us about your project..."
//                     minRows={6}
//                     radius="md"
//                   />

//                   <Button
//                     size="lg"
//                     radius="xl"
//                     mt="md"
//                     leftSection={<IconMail size={18} />}
//                     styles={{
//                       root: {
//                         background: "linear-gradient(90deg,#00D4FF,#2563EB)",
//                       },
//                     }}
//                   >
//                     Send Message
//                   </Button>
//                 </Stack>
//               </div>
//             </motion.div>
//           </div>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default ContactHero;


import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Textarea,
  Select,
  ThemeIcon,
  Title,
  Accordion,
  Anchor,
  useComputedColorScheme,
} from "@mantine/core";

import {
  IconArrowDown,
  IconArrowRight,
  IconBrandWhatsapp,
  IconBuilding,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSend,
  IconStarFilled,
} from "@tabler/icons-react";

const ContactHero = () => {
  const colorScheme = useComputedColorScheme("light");

  const dark = colorScheme === "dark";

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (field) => (value) => {
    setForm((prev) => ({
      ...prev,
      [field]:
        typeof value === "string"
          ? value
          : value?.target?.value || "",
    }));
  };

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  const scrollToForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <Box
      style={{
        width: "100%",
        overflowX: "hidden",
        background: dark
          ? "#06111F"
          : "#F8FAFC",
      }}
    >
      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}

      <Box
        pos="relative"
        py={140}
        style={{
          overflow: "hidden",
          background: dark
            ? "linear-gradient(135deg,#041320,#071A2F,#0A2F52)"
            : "linear-gradient(135deg,#F8FBFF,#EEF7FF,#E8F5FF)",
        }}
      >
        {/* Glow Left */}

        <Box
          style={{
            position: "absolute",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "#00D4FF",
            filter: "blur(170px)",
            opacity: .15,
            left: "-10%",
            top: -100,
          }}
        />

        {/* Glow Right */}

        <Box
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "#4F46E5",
            filter: "blur(170px)",
            opacity: .18,
            right: "-10%",
            bottom: -100,
          }}
        />

        {/* Grid */}

        <Box
          style={{
            position: "absolute",
            inset: 0,
            opacity: .25,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <Container size="xl">

          <Stack
            align="center"
            gap={35}
          >

            <motion.div
              initial={{
                opacity:0,
                y:40
              }}
              animate={{
                opacity:1,
                y:0
              }}
              transition={{
                duration:.6
              }}
            >

              <Badge
                size="xl"
                radius="xl"
                color="cyan"
                variant="light"
              >
                🚀 Trusted by Startups & Enterprises
              </Badge>

            </motion.div>

            <motion.div
              initial={{
                opacity:0,
                y:40
              }}
              animate={{
                opacity:1,
                y:0
              }}
              transition={{
                delay:.2,
                duration:.6
              }}
            >

              <Title
                ta="center"
                fw={900}
                style={{
                  fontSize:"clamp(2.4rem,6vw,5rem)",
                  lineHeight:1.1,
                  maxWidth:900,
                  margin:"0 auto",
                  color:dark ? "#fff" : "#111827"
                }}
              >
                Let's Build
                <br />

                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{
                    from:"cyan",
                    to:"blue"
                  }}
                >
                  Something Amazing Together
                </Text>

              </Title>

            </motion.div>

            <motion.div
              initial={{
                opacity:0,
                y:30
              }}
              animate={{
                opacity:1,
                y:0
              }}
              transition={{
                delay:.4
              }}
            >

              <Text
                ta="center"
                maw={760}
                size="lg"
                c="dimmed"
                lh={1.9}
              >
                Transform your ideas into scalable digital
                products with our experienced team of
                designers, developers and technology experts.
                We deliver enterprise-grade software,
                websites, mobile apps and cloud solutions.
              </Text>

            </motion.div>
                        <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
              }}
            >
              <Group
                justify="center"
                gap="md"
                wrap="wrap"
              >
                <Button
                  size="lg"
                  radius="xl"
                  px={34}
                  h={56}
                  loading={loading}
                  leftSection={<IconSend size={18} />}
                  onClick={scrollToForm}
                  variant="gradient"
                  gradient={{
                    from: "cyan",
                    to: "blue",
                  }}
                >
                  Start Your Project
                </Button>

                <Button
                  component="a"
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  radius="xl"
                  h={56}
                  px={34}
                  color="green"
                  variant="light"
                  leftSection={
                    <IconBrandWhatsapp size={20} />
                  }
                >
                  WhatsApp Us
                </Button>
              </Group>
            </motion.div>

            {/* ===================== */}
            {/* STATS */}
            {/* ===================== */}

            <SimpleGrid
              cols={{
                base: 1,
                xs: 2,
                md: 4,
              }}
              spacing="lg"
              mt={40}
              w="100%"
            >
              {[
                {
                  number: "250+",
                  label: "Projects Delivered",
                },
                {
                  number: "50+",
                  label: "Happy Clients",
                },
                {
                  number: "5+",
                  label: "Years Experience",
                },
                {
                  number: "24/7",
                  label: "Support",
                },
              ].map((item) => (
                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  key={item.label}
                >
                  <Paper
                    p="xl"
                    radius="xl"
                    withBorder
                    shadow="md"
                    bg={
                      dark
                        ? "rgba(255,255,255,.04)"
                        : "white"
                    }
                    style={{
                      backdropFilter:
                        "blur(14px)",
                      textAlign: "center",
                      height: "100%",
                    }}
                  >
                    <Title
                      order={2}
                      c="cyan"
                    >
                      {item.number}
                    </Title>

                    <Text
                      mt={8}
                      c="dimmed"
                    >
                      {item.label}
                    </Text>
                  </Paper>
                </motion.div>
              ))}
            </SimpleGrid>

            {/* ===================== */}
            {/* SCROLL BUTTON */}
            {/* ===================== */}

            {/* <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
            >
              <ActionIcon
                radius="xl"
                size={52}
                variant="gradient"
                gradient={{
                  from: "cyan",
                  to: "blue",
                }}
                onClick={scrollToForm}
              >
                <IconArrowDown size={24} />
              </ActionIcon>
            </motion.div> */}
          </Stack>
        </Container>
      </Box>

      {/* ======================================= */}
      {/* CONTACT SECTION */}
      {/* ======================================= */}

      <Box
        id="contact-form"
        py={{
          base: 70,
          md: 110,
        }}
        bg={dark ? "#07111F" : "#F8FAFC"}
      >
        <Container size="xl">
          <Grid gutter={40}>
            {/* ======================================= */}
            {/* LEFT SIDE */}
            {/* ======================================= */}

            <Grid.Col
              span={{
                base: 12,
                md: 5,
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
              >
                <Badge
                  size="lg"
                  radius="xl"
                  color="cyan"
                  variant="light"
                >
                  Contact Information
                </Badge>

                <Title
                  mt="md"
                  mb="lg"
                  order={2}
                >
                  Let's discuss
                  <br />
                  your next project.
                </Title>

                <Text
                  c="dimmed"
                  mb={35}
                  lh={1.8}
                >
                  Whether you need a
                  website, enterprise
                  software, mobile
                  application or cloud
                  solution, we're here
                  to help.
                </Text>

                <Stack gap="lg">
                  {[
                    {
                      icon: (
                        <IconMail
                          size={22}
                        />
                      ),
                      title: "Email",
                      value:
                        "contact@nexflare.com",
                    },
                    {
                      icon: (
                        <IconPhone
                          size={22}
                        />
                      ),
                      title: "Phone",
                      value:
                        "+91 98765 43210",
                    },
                    {
                      icon: (
                        <IconMapPin
                          size={22}
                        />
                      ),
                      title: "Office",
                      value:
                        "Pune, Maharashtra",
                    },
                    {
                      icon: (
                        <IconClock
                          size={22}
                        />
                      ),
                      title:
                        "Business Hours",
                      value:
                        "Mon - Fri | 9:30 AM - 6:30 PM",
                    },
                  ].map((item) => (
                    <Paper
                      key={item.title}
                      radius="xl"
                      p="lg"
                      withBorder
                      shadow="sm"
                    >
                      <Group
                        align="flex-start"
                        wrap="nowrap"
                      >
                        <ThemeIcon
                          radius="xl"
                          size={50}
                          variant="gradient"
                          gradient={{
                            from: "cyan",
                            to: "blue",
                          }}
                        >
                          {item.icon}
                        </ThemeIcon>

                        <div>
                          <Text
                            fw={700}
                          >
                            {item.title}
                          </Text>

                          <Text
                            c="dimmed"
                            mt={4}
                          >
                            {item.value}
                          </Text>
                        </div>
                      </Group>
                    </Paper>
                  ))}
                </Stack>
              </motion.div>
            </Grid.Col>
                        {/* ======================================= */}
            {/* RIGHT SIDE - CONTACT FORM */}
            {/* ======================================= */}

            <Grid.Col
              span={{
                base: 12,
                md: 7,
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <Paper
                  radius={28}
                  p={{
                    base: "lg",
                    sm: "xl",
                    md: 40,
                  }}
                  shadow="xl"
                  withBorder
                  bg={
                    dark
                      ? "rgba(255,255,255,.04)"
                      : "white"
                  }
                  style={{
                    backdropFilter: "blur(18px)",
                  }}
                >
                  <Group
                    justify="space-between"
                    mb="xl"
                    wrap="wrap"
                  >
                    <div>
                      <Title order={2}>
                        Send us a Message
                      </Title>

                      <Text
                        c="dimmed"
                        mt={5}
                      >
                        We'll get back to you within
                        24 hours.
                      </Text>
                    </div>

                    <Badge
                      size="lg"
                      radius="xl"
                      color="green"
                      variant="light"
                    >
                      Free Consultation
                    </Badge>
                  </Group>

                  <Grid gutter="md">
                    <Grid.Col
                      span={{
                        base: 12,
                        sm: 6,
                      }}
                    >
                      <TextInput
                        label="Full Name"
                        placeholder="John Doe"
                        radius="lg"
                        size="md"
                        value={form.name}
                        onChange={handleChange("name")}
                        required
                      />
                    </Grid.Col>

                    <Grid.Col
                      span={{
                        base: 12,
                        sm: 6,
                      }}
                    >
                      <TextInput
                        label="Email"
                        placeholder="john@example.com"
                        radius="lg"
                        size="md"
                        value={form.email}
                        onChange={handleChange("email")}
                        required
                      />
                    </Grid.Col>

                    <Grid.Col
                      span={{
                        base: 12,
                        sm: 6,
                      }}
                    >
                      <TextInput
                        label="Phone Number"
                        placeholder="+91 9876543210"
                        radius="lg"
                        size="md"
                        value={form.phone}
                        onChange={handleChange("phone")}
                      />
                    </Grid.Col>

                    <Grid.Col
                      span={{
                        base: 12,
                        sm: 6,
                      }}
                    >
                      <Select
                        label="Service"
                        placeholder="Choose Service"
                        radius="lg"
                        size="md"
                        value={form.service}
                        onChange={(value) =>
                          setForm({
                            ...form,
                            service: value,
                          })
                        }
                        data={[
                          "Website Development",
                          "Custom Software",
                          "React Development",
                          "Mobile App",
                          "Cloud Solutions",
                          "UI / UX Design",
                          "Digital Marketing",
                          "Other",
                        ]}
                      />
                    </Grid.Col>

                    <Grid.Col span={12}>
                      <Textarea
                        label="Project Details"
                        placeholder="Tell us about your project..."
                        minRows={7}
                        radius="lg"
                        autosize
                        value={form.message}
                        onChange={handleChange("message")}
                      />
                    </Grid.Col>

                    <Grid.Col span={12}>
                      <Group
                        justify="space-between"
                        mt="sm"
                        wrap="wrap"
                      >
                        <Group gap="xs">
                          <IconStarFilled
                            size={16}
                            color="#FFD43B"
                          />

                          <Text size="sm">
                            Rated 4.9/5 by clients
                          </Text>
                        </Group>

                        <Text
                          size="sm"
                          c="dimmed"
                        >
                          Response within 24 Hours
                        </Text>
                      </Group>
                    </Grid.Col>

                    <Grid.Col span={12}>
                      <Button
                        fullWidth
                        h={56}
                        radius="xl"
                        mt="md"
                        loading={loading}
                        leftSection={
                          <IconSend size={20} />
                        }
                        variant="gradient"
                        gradient={{
                          from: "cyan",
                          to: "blue",
                        }}
                        onClick={handleSubmit}
                      >
                        Send Message
                      </Button>
                    </Grid.Col>
                  </Grid>

                  <Divider my="xl" />

                  <SimpleGrid
                    cols={{
                      base: 1,
                      sm: 3,
                    }}
                    spacing="md"
                  >
                    <Paper
                      p="md"
                      radius="lg"
                      withBorder
                    >
                      <Center mb={8}>
                        <ThemeIcon
                          size={46}
                          radius="xl"
                          color="cyan"
                          variant="light"
                        >
                          <IconBuilding
                            size={22}
                          />
                        </ThemeIcon>
                      </Center>

                      <Text
                        ta="center"
                        fw={700}
                      >
                        Enterprise
                      </Text>

                      <Text
                        ta="center"
                        size="sm"
                        c="dimmed"
                      >
                        Custom scalable solutions
                      </Text>
                    </Paper>

                    <Paper
                      p="md"
                      radius="lg"
                      withBorder
                    >
                      <Center mb={8}>
                        <ThemeIcon
                          size={46}
                          radius="xl"
                          color="green"
                          variant="light"
                        >
                          <IconClock
                            size={22}
                          />
                        </ThemeIcon>
                      </Center>

                      <Text
                        ta="center"
                        fw={700}
                      >
                        Fast Delivery
                      </Text>

                      <Text
                        ta="center"
                        size="sm"
                        c="dimmed"
                      >
                        Agile development process
                      </Text>
                    </Paper>

                    <Paper
                      p="md"
                      radius="lg"
                      withBorder
                    >
                      <Center mb={8}>
                        <ThemeIcon
                          size={46}
                          radius="xl"
                          color="violet"
                          variant="light"
                        >
                          <IconMail
                            size={22}
                          />
                        </ThemeIcon>
                      </Center>

                      <Text
                        ta="center"
                        fw={700}
                      >
                        Support
                      </Text>

                      <Text
                        ta="center"
                        size="sm"
                        c="dimmed"
                      >
                        Dedicated technical support
                      </Text>
                    </Paper>
                  </SimpleGrid>
                </Paper>
              </motion.div>
            </Grid.Col>

          </Grid>
        </Container>
      </Box>
            {/* ===================================================== */}
      {/* GOOGLE MAP SECTION */}
      {/* ===================================================== */}

      <Box
        py={100}
        bg={dark ? "#08131F" : "#F4F8FC"}
      >
        <Container size="xl">

          <Stack
            align="center"
            mb={60}
          >
            <Badge
              color="cyan"
              variant="light"
              radius="xl"
              size="lg"
            >
              Visit Our Office
            </Badge>

            <Title
              ta="center"
              order={2}
            >
              We'd Love To Meet You
            </Title>

            <Text
              ta="center"
              maw={700}
              c="dimmed"
            >
              Schedule a meeting with our experts or
              visit our office to discuss your next
              digital transformation project.
            </Text>
          </Stack>

          <Paper
            radius={30}
            shadow="xl"
            withBorder
            style={{
              overflow: "hidden",
            }}
          >
            <Box
              component="iframe"
            //   src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4559990416305!2d73.94700722519244!3d18.55346963254647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c4ea36a8f7%3A0xf585434dc33ce581!2sGLOBAL%20BUSINESS%20HUB%2C%20EON%20Free%20Zone%2C%20Kharadi%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1782739966793!5m2!1sen!2sin"
              w="100%"
              h={500}
              style={{
                border: 0,
              }}
            />
          </Paper>

        </Container>
      </Box>

      {/* ===================================================== */}
      {/* FAQ */}
      {/* ===================================================== */}

      <Box
        py={100}
        bg={dark ? "#06111F" : "white"}
      >
        <Container size="md">

          <Stack
            align="center"
            mb={60}
          >
            <Badge
              color="cyan"
              variant="light"
              radius="xl"
            >
              Frequently Asked Questions
            </Badge>

            <Title ta="center">
              Everything You Need To Know
            </Title>

            <Text
              ta="center"
              maw={650}
              c="dimmed"
            >
              Here are answers to the most commonly
              asked questions by our clients.
            </Text>
          </Stack>

          <Accordion
            variant="separated"
            // radius="xl"

          >
            <Accordion.Item value="1">
              <Accordion.Control>
                How long does a project usually take?
              </Accordion.Control>

              <Accordion.Panel>
                Small projects usually take 2–4 weeks,
                while enterprise applications may take
                2–6 months depending on complexity.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="2">
              <Accordion.Control>
                Do you sign NDA?
              </Accordion.Control>

              <Accordion.Panel>
                Yes. We sign Non-Disclosure Agreements
                before discussing confidential business
                ideas.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="3">
              <Accordion.Control>
                Do you provide maintenance?
              </Accordion.Control>

              <Accordion.Panel>
                Absolutely. We offer long-term
                maintenance, security updates,
                monitoring and feature enhancements.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="4">
              <Accordion.Control>
                Which technologies do you use?
              </Accordion.Control>

              <Accordion.Panel>
                React, Next.js, Java, Spring Boot,
                Node.js, Flutter, AWS, Azure,
                PostgreSQL, MySQL and many more.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

        </Container>
      </Box>

      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <Box
        py={120}
        style={{
          background:
            "linear-gradient(135deg,#071A2F,#0B3D91,#155EEF)",
        }}
      >
        <Container size="lg">

          <motion.div
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            initial={{
              opacity: 0,
              y: 50,
            }}
            transition={{
              duration: .6,
            }}
          >

            <Stack
              align="center"
              gap="xl"
            >
              <Badge
                size="xl"
                radius="xl"
                color="cyan"
                variant="white"
              >
                Let's Build Together 🚀
              </Badge>

              <Title
                ta="center"
                c="white"
                style={{
                  fontSize:
                    "clamp(2rem,5vw,4rem)",
                }}
              >
                Ready To Start
                <br />
                Your Dream Project?
              </Title>

              <Text
                ta="center"
                c="gray.2"
                maw={720}
                size="lg"
              >
                Whether you're building a startup,
                enterprise platform or digital product,
                our experts are ready to turn your
                vision into reality.
              </Text>

              <Group
                justify="center"
                gap="md"
                wrap="wrap"
              >
                <Button
                  size="xl"
                  radius="xl"
                  color="white"
                  c="dark"
                  rightSection={
                    <IconArrowRight size={18} />
                  }
                  onClick={scrollToForm}
                >
                  Start Your Project
                </Button>

                <Button
                  component="a"
                  href="mailto:contact@nexflare.com"
                  size="xl"
                  radius="xl"
                  variant="outline"
                  color="white"
                >
                  Contact Us
                </Button>
              </Group>
            </Stack>

          </motion.div>

        </Container>
      </Box>

    </Box>
  );
};

export default ContactHero;