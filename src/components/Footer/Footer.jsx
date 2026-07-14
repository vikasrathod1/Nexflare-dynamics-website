// import {
//   ActionIcon,
//   Anchor,
//   Box,
//   Button,
//   Container,
//   Divider,
//   Grid,
//   Group,
//   Image,
//   Stack,
//   Text,
//   useComputedColorScheme,
// } from "@mantine/core";

// import {
//   IconArrowUp,
//   IconBrandFacebook,
//   IconBrandGithub,
//   IconBrandInstagram,
//   IconBrandLinkedin,
//   IconBrandX,
//   IconMail,
//   IconMapPin,
//   IconPhone,
//   IconSend,
//   IconChevronRight,
// } from "@tabler/icons-react";

// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// import logoLight   from "../../assets/images/logo.png";
// import logoDark    from "../../assets/images/logo1.png";

// const quickLinks = [
//   { label:"Blog",     link:"/blogs" },
//   { label:"Privacy Policy",    link:"/privacy-policy" },
//   { label:"About Us", link:"/about" },
//   { label:"Contact Us", link:"/contact" },
//   { label:"Terms & Conditions",    link:"/terms-and-conditions" },
//   { label:"Refund Policy",  link:"/refund-policy" },
// ];

// const services = [
//   { label:"Search Engine Optimization", link:"/services" },
//   { label:"Pay Per Click Advertising",     link:"/services" },
//   { label:"Social Media Marketing", link:"/services" },
//   { label:"Web Design & Development",    link:"/services" },
//   { label:"App Development", link:"/services" },
//   { label:"CRM Services",    link:"/services" },
// ];

// const socialLinks = [
//   { Icon:IconBrandFacebook,  href:"https://www.facebook.com/NexflareDynamics", label:"Facebook",  color:"#1877F2" },
//   { Icon:IconBrandInstagram, href:"https://www.instagram.com/nexflare_dynamics/", label:"Instagram", color:"#E1306C" },
//   { Icon:IconBrandLinkedin,  href:"https://www.linkedin.com/company/nexflare-dynamics/", label:"LinkedIn",  color:"#0A66C2" },
//   { Icon:IconBrandX,         href:"https://twitter.com/NexflareDynamics", label:"X",         color:"#1DA1F2" },
//   // { Icon:IconBrandGithub,    href:"https://github.com/NexflareDynamics", label:"GitHub",    color:"#7C3AED" },
// ];

// const contacts = [
//   { Icon:IconMapPin, text:"Global Business Hub, EON Free Zone, Kharadi, Pune, Maharashtra 411014",      color:"#3B82F6" },
//   { Icon:IconPhone,  text:"+91-8237525097",                color:"#10B981" },
//   { Icon:IconMail,   text:"enquiry@nexflaredynamics.com",  color:"#8B5CF6" },
// ];

// const Footer = () => {
//   const isDark  = useComputedColorScheme("light") === "dark";
//   const logoSrc = isDark ? logoDark : logoLight;

//   const bg         = isDark ? "#080E1C" : "#EEF4FF";
//   const cardBg     = isDark ? "rgba(255,255,255,0.04)" : "#ffffff";
//   const cardBorder = isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(37,99,235,0.12)";
//   const dimCol     = isDark ? "rgba(255,255,255,0.50)" : "#64748b";

//   return (
//     <Box style={{ background:bg, position:"relative", overflow:"hidden" }}>

//       {/* ambient glows */}
//       <Box style={{ position:"absolute", width:500, height:500, borderRadius:"50%",
//         left:-220, top:-220, background:"rgba(37,99,235,0.12)",
//         filter:"blur(160px)", pointerEvents:"none" }} />
//       <Box style={{ position:"absolute", width:400, height:400, borderRadius:"50%",
//         right:-180, bottom:-180, background:"rgba(56,189,248,0.09)",
//         filter:"blur(140px)", pointerEvents:"none" }} />

//       {/* animated top line */}
//       <Box style={{
//         height:3,
//         background:"linear-gradient(90deg,#2563EB,#8B5CF6,#38BDF8,#2563EB)",
//         backgroundSize:"200% 100%",
//         animation:"shimmer 4s linear infinite",
//       }} />

//       <Container size="xl" py={40}>
//         <motion.div
//           initial={{ opacity:0, y:22 }}
//           whileInView={{ opacity:1, y:0 }}
//           viewport={{ once:true }}
//           transition={{ duration:0.55 }}
//         >
//           <Grid gutter={{ base:28, md:36 }} align="flex-start">

//             {/* ── Brand ── */}
//             <Grid.Col span={{ base:12, sm:6, lg:4 }}>
//               <Stack gap={12}>
//                 <Image src={logoSrc} w={170} />
//                 <Text size="sm" lh={1.75} style={{ color:dimCol, maxWidth:300 }}>
//                   Our mission is to understand the unique challenges faced by our clients and deliver tailored solutions that drive efficiency, productivity, and growth.
//                 </Text>
//                 <Group gap={8} mt={2}>
//                   {socialLinks.map(({ Icon, href, label, color }) => (
//                     <ActionIcon
//                       key={label}
//                       component="a"
//                       href={href}
//                       aria-label={label}
//                       size={38}
//                       radius="xl"
//                       className="f-social"
//                       style={{
//                         background:`${color}14`,
//                         border:`1px solid ${color}28`,
//                         color:color,
//                       }}
//                     >
//                       <Icon size={17} />
//                     </ActionIcon>
//                   ))}
//                 </Group>
//               </Stack>
//             </Grid.Col>

//             {/* ── Company ── */}
//             <Grid.Col span={{ base:6, sm:3, lg:2 }}>
//               <Stack gap={0}>
//                 <Text size="xs" fw={700} tt="uppercase"
//                   style={{ color:"#3B82F6", letterSpacing:2 }} mb={14}>
//                   Company
//                 </Text>
//                 {quickLinks.map(({ label, link }) => (
//                   <Anchor key={label} component={Link} to={link}
//                     underline="never" size="sm" mb={10} className="f-link"
//                     style={{ color:dimCol, display:"flex", alignItems:"center", gap:4 }}>
//                     <IconChevronRight size={12} style={{ opacity:0.45, flexShrink:0 }} />
//                     {label}
//                   </Anchor>
//                 ))}
//               </Stack>
//             </Grid.Col>

//             {/* ── Services ── */}
//             <Grid.Col span={{ base:6, sm:3, lg:2 }}>
//               <Stack gap={0}>
//                 <Text size="xs" fw={700} tt="uppercase"
//                   style={{ color:"#3B82F6", letterSpacing:2 }} mb={14}>
//                   Services
//                 </Text>
//                 {services.map(({ label, link }) => (
//                   <Anchor key={label} component={Link} to={link}
//                     underline="never" size="sm" mb={10} className="f-link"
//                     style={{ color:dimCol, display:"flex", alignItems:"center", gap:4 }}>
//                     <IconChevronRight size={12} style={{ opacity:0.45, flexShrink:0 }} />
//                     {label}
//                   </Anchor>
//                 ))}
//               </Stack>
//             </Grid.Col>

//             {/* ── Contact card ── */}
//             <Grid.Col span={{ base:12, sm:6, lg:4 }}>
//               <Box style={{
//                 background:cardBg, border:cardBorder,
//                 borderRadius:20, padding:"22px 22px 18px",
//                 position:"relative", overflow:"hidden",
//                 boxShadow: isDark
//                   ? "0 10px 36px rgba(0,0,0,0.24)"
//                   : "0 10px 36px rgba(37,99,235,0.08)",
//               }}>
//                 {/* top accent */}
//                 <Box style={{
//                   position:"absolute", top:0, left:0, right:0, height:3,
//                   background:"linear-gradient(90deg,#2563EB,#8B5CF6,#38BDF8)",
//                 }} />

//                 <Text size="xs" fw={700} tt="uppercase"
//                   style={{ color:dimCol, letterSpacing:2 }} mb={16}>
//                   Get in Touch
//                 </Text>

//                 <Stack gap={12}>
//                   {contacts.map(({ Icon, text, color }) => (
//                     <Group key={text} gap={10} wrap="nowrap" align="flex-start">
//                       <Box style={{
//                         width:32, height:32, borderRadius:9, flexShrink:0,
//                         background:`${color}14`,
//                         display:"flex", alignItems:"center", justifyContent:"center",
//                       }}>
//                         <Icon size={15} color={color} />
//                       </Box>
//                       <Text size="sm" style={{ color:dimCol, lineHeight:1.55, paddingTop:5 }}>
//                         {text}
//                       </Text>
//                     </Group>
//                   ))}
//                 </Stack>

//                 <Button mt={18} radius="xl" size="sm" fullWidth
//                   variant="gradient" gradient={{ from:"blue", to:"cyan" }}
//                   rightSection={<IconSend size={14} />}
//                   fw={600} style={{ height:40 }} className="f-btn">
//                   Request a Free Quote
//                 </Button>
//               </Box>
//             </Grid.Col>

//           </Grid>
//         </motion.div>

//         {/* bottom bar */}
//         <Divider mt={32} mb={18} color={isDark ? "rgba(255,255,255,0.07)" : "#E2E8F0"} />

//         <motion.div
//           initial={{ opacity:0 }}
//           whileInView={{ opacity:1 }}
//           viewport={{ once:true }}
//           transition={{ duration:0.4, delay:0.1 }}
//         >
//           <Group justify="space-between" align="center" wrap="wrap" gap={10}>
//             <Stack gap={3}>
//               <Text size="xs" style={{ color:dimCol }}>
//                 © {new Date().getFullYear()} Nexflare Dynamics. All rights reserved.
//               </Text>
//               <Group gap={12}>
//                 {[
//                   { label:"Privacy Policy",   to:"/privacy-policy" },
//                   { label:"Terms of Service", to:"/terms" },
//                   { label:"Cookie Policy",    to:"/cookies" },
//                 ].map(({ label, to }) => (
//                   <Anchor key={label} component={Link} to={to}
//                     underline="never" size="xs"
//                     style={{ color:dimCol }} className="f-link">
//                     {label}
//                   </Anchor>
//                 ))}
//               </Group>
//             </Stack>

//             <Group gap={10} align="center">
//               <Text size="xs" style={{ color:dimCol }}>Made with ❤️ in India</Text>
//               <ActionIcon radius="xl" size={40} variant="gradient"
//                 gradient={{ from:"blue", to:"cyan" }}
//                 aria-label="Back to top" className="f-social"
//                 onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}>
//                 <IconArrowUp size={17} />
//               </ActionIcon>
//             </Group>
//           </Group>
//         </motion.div>
//       </Container>

//       <style>{`
//         @keyframes shimmer {
//           0%   { background-position: 0% 0; }
//           100% { background-position: 200% 0; }
//         }
//         .f-link {
//           transition: color .2s ease, transform .2s ease;
//         }
//         .f-link:hover {
//           color: #2563EB !important;
//           transform: translateX(4px);
//         }
//         .f-social {
//           transition: transform .22s ease, box-shadow .22s ease !important;
//         }
//         .f-social:hover {
//           transform: translateY(-4px) scale(1.12) !important;
//           box-shadow: 0 8px 20px rgba(37,99,235,0.26) !important;
//         }
//         .f-btn {
//           transition: transform .22s ease, box-shadow .22s ease !important;
//         }
//         .f-btn:hover {
//           transform: translateY(-2px) !important;
//           box-shadow: 0 8px 24px rgba(37,99,235,0.28) !important;
//         }
//         @media (max-width: 768px) {
//           .f-btn { width: 100%; }
//         }
//       `}</style>
//     </Box>
//   );
// };

// export default Footer;


import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import {
  IconArrowUp,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSend,
  IconChevronRight,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoLight from "../../assets/images/logo.png";
import logoDark from "../../assets/images/logo1.png";
const quickLinks = [
  { label: "Blog", link: "/blogs" },
  { label: "Privacy Policy", link: "/privacy-policy" },
  { label: "About Us", link: "/about" },
  { label: "Contact Us", link: "/contact" },
  { label: "Terms & Conditions", link: "/terms-conditions" },
  { label: "Refund Policy", link: "/refund-policy" },
];
const services = [
  { label: "Search Engine Optimization", link: "/services" },
  { label: "Pay Per Click Advertising", link: "/services" },
  { label: "Social Media Marketing", link: "/services" },
  { label: "Web Design & Development", link: "/services" },
  { label: "App Development", link: "/services" },
  { label: "CRM Services", link: "/services" },
];
const socialLinks = [
  { Icon: IconBrandFacebook, href: "https://www.facebook.com/NexflareDynamics", label: "Facebook", color: "#1877F2" },
  { Icon: IconBrandInstagram, href: "https://www.instagram.com/nexflare_dynamics/", label: "Instagram", color: "#E1306C" },
  { Icon: IconBrandLinkedin, href: "https://www.linkedin.com/company/nexflare-dynamics/", label: "LinkedIn", color: "#0A66C2" },
  { Icon: IconBrandX, href: "https://twitter.com/NexflareDynamics", label: "X", color: "#1DA1F2" },
  // { Icon:IconBrandGithub,    href:"https://github.com/NexflareDynamics", label:"GitHub",    color:"#7C3AED" },
];
const contacts = [
  { Icon: IconMapPin, text: "Global Business Hub, Eon Free Zone, Kharadi, Pune, Maharashtra 411014", color: "#3B82F6" },
  { Icon: IconPhone, text: "+91-8237525097", color: "#10B981" },
  { Icon: IconMail, text: "enquiry@nexflaredynamics.com", color: "#8B5CF6" },
];
const Footer = () => {
  const isDark = useComputedColorScheme("light") === "dark";
  const logoSrc = isDark ? logoDark : logoLight;
  const bg = isDark ? "#080E1C" : "#EEF4FF";
  const cardBg = isDark ? "rgba(255,255,255,0.04)" : "#ffffff";
  const cardBorder = isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(37,99,235,0.12)";
  const dimCol = isDark ? "rgba(255,255,255,0.50)" : "#64748b";
  return (
    <Box style={{ background: bg, position: "relative", overflow: "hidden" }}>
      {/* ambient glows */}
      <Box style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        left: -220, top: -220, background: "rgba(37,99,235,0.12)",
        filter: "blur(160px)", pointerEvents: "none"
      }} />
      <Box style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        right: -180, bottom: -180, background: "rgba(56,189,248,0.09)",
        filter: "blur(140px)", pointerEvents: "none"
      }} />
      {/* animated top line */}
      <Box style={{
        height: 3,
        background: "linear-gradient(90deg,#2563EB,#8B5CF6,#38BDF8,#2563EB)",
        backgroundSize: "200% 100%",
        animation: "shimmer 4s linear infinite",
      }} />
      <Container size="xl" py={40}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <Grid gutter={{ base: 28, md: 36 }} align="flex-start" style={{ flexWrap: "nowrap" }}>
            {/* ── Brand ── */}
            <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
              <Stack gap={0}>
                <Box style={{ height: 90, display: "flex", alignItems: "center", overflow: "hidden", marginBottom: -10 }}>
                  <Image src={logoSrc} w={220} fit="contain" style={{ display: "block" }} />
                </Box>
                <Text size="md" fw={500} lh={1.75} style={{ color: dimCol, maxWidth: 320 }}>
                  Our mission is to understand the unique challenges faced by our clients and deliver tailored solutions that drive efficiency, productivity, and growth.
                </Text>
                <Group gap={8} mt={10}>
                  {socialLinks.map(({ Icon, href, label, color }) => (
                    <ActionIcon
                      key={label}
                      component="a"
                      href={href}
                      aria-label={label}
                      size={38}
                      radius="xl"
                      className="f-social"
                      style={{
                        background: `${color}14`,
                        border: `1px solid ${color}28`,
                        color: color,
                      }}
                    >
                      <Icon size={17} />
                    </ActionIcon>
                  ))}
                </Group>
              </Stack>
            </Grid.Col>
            {/* ── Company ── */}
            <Grid.Col span={{ base: 6, sm: 3, lg: 2 }}>
              <Stack gap={0}>
                <Text size="xs" fw={700} tt="uppercase"
                  style={{ color: "#3B82F6", letterSpacing: 2 }} mb={14}>
                  Company
                </Text>
                {quickLinks.map(({ label, link }) => (
                  <Anchor key={label} component={Link} to={link}
                    underline="never" size="sm" mb={10} className="f-link"
                    style={{ color: dimCol, display: "flex", alignItems: "center", gap: 4 }}>
                    <IconChevronRight size={12} style={{ opacity: 0.45, flexShrink: 0 }} />
                    {label}
                  </Anchor>
                ))}
              </Stack>
            </Grid.Col>
            {/* ── Services ── */}
            <Grid.Col span={{ base: 6, sm: 3, lg: 2 }}>
              <Stack gap={0}>
                <Text size="xs" fw={700} tt="uppercase"
                  style={{ color: "#3B82F6", letterSpacing: 2 }} mb={14}>
                  Services
                </Text>
                {services.map(({ label, link }) => (
                  <Anchor key={label} component={Link} to={link}
                    underline="never" size="sm" mb={10} className="f-link"
                    style={{ color: dimCol, display: "flex", alignItems: "center", gap: 4 }}>
                    <IconChevronRight size={12} style={{ opacity: 0.45, flexShrink: 0 }} />
                    {label}
                  </Anchor>
                ))}
              </Stack>
            </Grid.Col>
            {/* ── Contact card ── */}
            <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
              <Box style={{
                background: cardBg, border: cardBorder,
                borderRadius: 20, padding: "22px 22px 18px",
                position: "relative", overflow: "hidden",
                boxShadow: isDark
                  ? "0 10px 36px rgba(0,0,0,0.24)"
                  : "0 10px 36px rgba(37,99,235,0.08)",
              }}>
                {/* top accent */}
                <Box style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: "linear-gradient(90deg,#2563EB,#8B5CF6,#38BDF8)",
                }} />
                <Text size="xs" fw={700} tt="uppercase"
                  style={{ color: dimCol, letterSpacing: 2 }} mb={16}>
                  Get in Touch
                </Text>
                <Stack gap={12}>
                  {contacts.map(({ Icon, text, color }) => (
                    <Group key={text} gap={10} wrap="nowrap" align="flex-start">
                      <Box style={{
                        width: 32, height: 32, borderRadius: 9, flexShrink: 0,
                        background: `${color}14`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <Icon size={15} color={color} />
                      </Box>
                      <Text size="sm" style={{ color: dimCol, lineHeight: 1.55, paddingTop: 5 }}>
                        {text}
                      </Text>
                    </Group>
                  ))}
                </Stack>
                {/* <Button mt={18} radius="xl" size="sm" fullWidth
                  variant="gradient" gradient={{ from: "blue", to: "cyan" }}
                  rightSection={<IconSend size={14} />}
                  fw={600} style={{ height: 40 }} className="f-btn">
                  Request a Free Quote
                </Button> */}
              </Box>
            </Grid.Col>
          </Grid>
        </motion.div>
        {/* bottom bar */}
        <Divider mt={32} mb={18} color={isDark ? "rgba(255,255,255,0.07)" : "#E2E8F0"} />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Box pos="relative">
            <Text
              ta="center"
              size="md"
              fw={600}
              style={{ color: dimCol }}
            >
              © {new Date().getFullYear()} Nexflare Dynamics. All rights reserved.
            </Text>
            <Group
              gap={10}
              align="center"
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              
              <ActionIcon
                radius="xl"
                size={40}
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
                aria-label="Back to top"
                className="f-social"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <IconArrowUp size={17} />
              </ActionIcon>
            </Group>
          </Box>
        </motion.div>
      </Container>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
        .f-link {
          transition: color .2s ease, transform .2s ease;
        }
        .f-link:hover {
          color: #2563EB !important;
          transform: translateX(4px);
        }
        .f-social {
          transition: transform .22s ease, box-shadow .22s ease !important;
        }
        .f-social:hover {
          transform: translateY(-4px) scale(1.12) !important;
          box-shadow: 0 8px 20px rgba(37,99,235,0.26) !important;
        }
        .f-btn {
          transition: transform .22s ease, box-shadow .22s ease !important;
        }
        .f-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(37,99,235,0.28) !important;
        }
        @media (max-width: 768px) {
          .f-btn { width: 100%; }
        }
      `}</style>
    </Box>
  );
};
export default Footer;