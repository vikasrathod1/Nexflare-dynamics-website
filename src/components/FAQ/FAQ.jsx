// import {
//   Accordion,
//   Badge,
//   Box,
//   Button,
//   Container,
//   Grid,
//   Group,
//   Paper,
//   Stack,
//   Text,
//   ThemeIcon,
//   Title,
//   useComputedColorScheme,
// } from "@mantine/core";

// import {
//   IconHelpCircle,
//   IconMessageCircle2,
//   IconArrowRight,
// } from "@tabler/icons-react";

// import { motion } from "framer-motion";

// const MotionPaper = motion(Paper);

// const faqs = [
//   {
//     question: "What services does Nexflare Dynamics provide?",
//     answer:
//       "We provide Web Development, Mobile App Development, Custom Software Development, ERP, CRM, UI/UX Design, Cloud Solutions, DevOps, Digital Marketing, AI Integration and IT Consulting.",
//   },

//   {
//     question: "How long does a project usually take?",
//     answer:
//       "The timeline depends on project complexity. Small websites usually take 2–4 weeks, medium applications 1–3 months and enterprise software may take several months.",
//   },

//   {
//     question: "How much does software development cost?",
//     answer:
//       "Project pricing depends on features, technology stack and business requirements. We provide transparent quotations with no hidden charges.",
//   },

//   {
//     question: "Do you provide maintenance after deployment?",
//     answer:
//       "Yes. We offer maintenance, security updates, bug fixes, performance optimization and long-term technical support after project delivery.",
//   },

//   {
//     question: "Can you redesign our existing website?",
//     answer:
//       "Absolutely. We modernize outdated websites with responsive UI, improved performance, SEO optimization and better user experience.",
//   },

//   {
//     question: "Do you sign NDA before starting projects?",
//     answer:
//       "Yes. We are happy to sign a Non-Disclosure Agreement (NDA) to protect your business ideas and confidential information.",
//   },

//   {
//     question: "Which technologies do you use?",
//     answer:
//       "We work with React, Next.js, Java, Spring Boot, Node.js, MongoDB, MySQL, AWS, DigitalOcean, Docker and many modern technologies.",
//   },

//   {
//     question: "How can we start working with Nexflare Dynamics?",
//     answer:
//       "Simply contact us through our website or schedule a free consultation. We'll understand your requirements and prepare a project proposal.",
//   },
// ];

// const FAQ = () => {
//   const isDark = useComputedColorScheme("light") === "dark";

//   return (
//     <Box
//       py={{
//         base: 90,
//         md: 120,
//       }}
//       style={{
//         position: "relative",
//         overflow: "hidden",

//         background: isDark
//           ? "linear-gradient(180deg,#040816,#081120,#0F172A)"
//           : "linear-gradient(180deg,#ffffff,#F8FAFC,#EEF5FF)",
//       }}
//     >
//       {/* Background Glow */}

//       <Box
//         style={{
//           position: "absolute",
//           top: -200,
//           left: -150,
//           width: 450,
//           height: 450,
//           borderRadius: "50%",
//           filter: "blur(150px)",
//           background: "rgba(37,99,235,.15)",
//         }}
//       />

//       <Box
//         style={{
//           position: "absolute",
//           right: -180,
//           bottom: -180,
//           width: 500,
//           height: 500,
//           borderRadius: "50%",
//           filter: "blur(150px)",
//           background: "rgba(56,189,248,.14)",
//         }}
//       />

//       <Container
//         size="xl"
//         style={{
//           position: "relative",
//           zIndex: 5,
//         }}
//       >
//         {/* Heading */}

//         <Stack align="center" mb={70}>
//           <Badge
//             radius="xl"
//             size="lg"
//             variant="gradient"
//             gradient={{
//               from: "blue",
//               to: "cyan",
//             }}
//           >
//             FREQUENTLY ASKED QUESTIONS
//           </Badge>

//           <Title
//             ta="center"
//             style={{
//               fontWeight: 900,
//               fontSize: "clamp(2rem,5vw,3.8rem)",
//               color: isDark ? "#ffffff" : "#111827",
//             }}
//           >
//             Everything You Need
//             <br />
//             <span
//               style={{
//                 background: "linear-gradient(90deg,#2563EB,#38BDF8)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               To Know
//             </span>
//           </Title>

//           <Text
//             ta="center"
//             maw={760}
//             size="lg"
//             c="dimmed"
//             style={{
//               lineHeight: 1.9,
//             }}
//           >
//             Find answers to the most common questions about our software
//             development services, project process, pricing, technologies and
//             support.
//           </Text>
//         </Stack>

//         <Grid
//           gutter={{
//             base: 40,
//             md: 60,
//           }}
//           align="center"
//         >
//           {/* Left Side */}

//           <Grid.Col
//             span={{
//               base: 12,
//               lg: 4,
//             }}
//           >
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: -40,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.8,
//               }}
//             >
//               <MotionPaper
//                 radius="xl"
//                 p={35}
//                 whileHover={{
//                   y: -8,
//                 }}
//                 style={{
//                   position: "sticky",
//                   top: 120,

//                   background: isDark ? "rgba(255,255,255,.05)" : "#ffffff",

//                   border: isDark
//                     ? "1px solid rgba(255,255,255,.08)"
//                     : "1px solid rgba(37,99,235,.08)",

//                   backdropFilter: "blur(20px)",

//                   boxShadow: isDark
//                     ? "0 25px 50px rgba(0,0,0,.25)"
//                     : "0 20px 45px rgba(37,99,235,.08)",
//                 }}
//               >
//                 <ThemeIcon
//                   size={80}
//                   radius="xl"
//                   variant="gradient"
//                   gradient={{
//                     from: "blue",
//                     to: "cyan",
//                   }}
//                 >
//                   <IconHelpCircle size={42} />
//                 </ThemeIcon>

//                 <Title
//                   order={2}
//                   mt={25}
//                   style={{
//                     color: isDark ? "#fff" : "#111827",
//                   }}
//                 >
//                   Still Have Questions?
//                 </Title>

//                 <Text
//                   mt={15}
//                   c="dimmed"
//                   style={{
//                     lineHeight: 1.9,
//                   }}
//                 >
//                   Can't find the answer you're looking for? Our experts are
//                   always ready to help you with your project requirements.
//                 </Text>

//                 <Button
//                   mt={35}
//                   fullWidth
//                   size="lg"
//                   radius="xl"
//                   variant="gradient"
//                   gradient={{
//                     from: "blue",
//                     to: "cyan",
//                   }}
//                   rightSection={<IconArrowRight size={18} />}
//                 >
//                   Contact Our Team
//                 </Button>

//                 <Paper
//                   mt={35}
//                   radius="lg"
//                   p={20}
//                   bg={isDark ? "rgba(255,255,255,.04)" : "#F8FAFC"}
//                 >
//                   <Group align="center">
//                     <ThemeIcon radius="xl" color="blue" variant="light">
//                       <IconMessageCircle2 size={18} />
//                     </ThemeIcon>

//                     <div>
//                       <Text fw={700}>Average Response</Text>

//                       <Text size="sm" c="dimmed">
//                         Within 24 Hours
//                       </Text>
//                     </div>
//                   </Group>
//                 </Paper>
//               </MotionPaper>
//             </motion.div>
//           </Grid.Col>

//           {/* Right Side */}

//           <Grid.Col
//             span={{
//               base: 12,
//               lg: 8,
//             }}
//           >
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: 40,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.8,
//               }}
//             >
//               <Accordion
//                 variant="separated"
//                 radius="xl"
//                 chevronPosition="right"
//               >
//                 {faqs.map((faq, index) => (
//                   <Accordion.Item
//                     key={index}
//                     value={faq.question}
//                     style={{
//                       marginBottom: 18,

//                       background: isDark ? "rgba(255,255,255,.05)" : "#ffffff",

//                       border: isDark
//                         ? "1px solid rgba(255,255,255,.08)"
//                         : "1px solid rgba(37,99,235,.08)",

//                       backdropFilter: "blur(18px)",

//                       borderRadius: 20,

//                       overflow: "hidden",

//                       boxShadow: isDark
//                         ? "0 20px 40px rgba(0,0,0,.20)"
//                         : "0 20px 35px rgba(37,99,235,.08)",
//                     }}
//                   >
//                     <Accordion.Control
//                       icon={
//                         <ThemeIcon radius="xl" color="blue" variant="light">
//                           <IconHelpCircle size={18} />
//                         </ThemeIcon>
//                       }
//                     >
//                       <Text fw={700} size="lg">
//                         {faq.question}
//                       </Text>
//                     </Accordion.Control>

//                     <Accordion.Panel>
//                       <Text
//                         c="dimmed"
//                         style={{
//                           lineHeight: 1.9,
//                         }}
//                       >
//                         {faq.answer}
//                       </Text>
//                     </Accordion.Panel>
//                   </Accordion.Item>
//                 ))}
//               </Accordion>
//             </motion.div>
//           </Grid.Col>
//         </Grid>
//         {/* Bottom CTA */}

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <Paper
//             mt={100}
//             radius={30}
//             p={{
//               base: 35,
//               md: 60,
//             }}
//             style={{
//               position: "relative",
//               overflow: "hidden",

//               background: isDark
//                 ? "linear-gradient(135deg,#111827,#1D4ED8,#2563EB)"
//                 : "linear-gradient(135deg,#2563EB,#3B82F6,#38BDF8)",

//               color: "#fff",
//             }}
//           >
           
           

//             <Box
//               style={{
//                 position: "absolute",
//                 width: 340,
//                 height: 340,
//                 right: -140,
//                 top: -140,
//                 borderRadius: "50%",
//                 background: "rgba(255,255,255,.08)",
//               }}
//             />

//             <Grid align="center">
//               <Grid.Col
//                 span={{
//                   base: 12,
//                   md: 8,
//                 }}
//               >
//                 <Stack gap={15}>
//                   <Badge
//                     radius="xl"
//                     color="white"
//                     c="blue"
//                     variant="filled"
//                     w="fit-content"
//                   >
//                     LET'S TALK
//                   </Badge>

//                   <Title
//                     c="white"
//                     style={{
//                       fontWeight: 900,
//                       fontSize: "clamp(2rem,4vw,3.4rem)",
//                     }}
//                   >
//                     Still Have Questions?
//                   </Title>

//                   <Text
//                     style={{
//                       color: "rgba(255,255,255,.90)",
//                       lineHeight: 1.9,
//                     }}
//                   >
//                     Our experts are available to discuss your business
//                     requirements, suggest the best technology stack and provide
//                     a detailed quotation — completely free.
//                   </Text>
//                 </Stack>
//               </Grid.Col>

//               <Grid.Col
//                 span={{
//                   base: 12,
//                   md: 4,
//                 }}
//               >
//                 <Group
//                   justify={{
//                     base: "flex-start",
//                     md: "flex-end",
//                   }}
//                   mt={{
//                     base: 30,
//                     md: 0,
//                   }}
//                 >
//                   <Button
//                     size="xl"
//                     radius="xl"
//                     color="dark"
//                     rightSection={<IconArrowRight size={20} />}
//                     styles={{
//                       root: {
//                         height: 60,
//                         paddingInline: 40,
//                         fontWeight: 700,
//                       },
//                     }}
//                   >
//                     Get Free Consultation
//                   </Button>
//                 </Group>
//               </Grid.Col>
//             </Grid>
//           </Paper>
//         </motion.div>

//         {/* Statistics */}

//         {/* <Grid mt={80} gutter={25}>
//           {[
//             {
//               number: "24/7",
//               label: "Support",
//             },
//             {
//               number: "500+",
//               label: "Projects",
//             },
//             {
//               number: "250+",
//               label: "Happy Clients",
//             },
//             {
//               number: "99%",
//               label: "Client Satisfaction",
//             },
//           ].map((item) => (
//             <Grid.Col
//               key={item.label}
//               span={{
//                 base: 6,
//                 md: 3,
//               }}
//             >
//               <Paper
//                 radius="xl"
//                 p={28}
//                 ta="center"
//                 style={{
//                   background: isDark ? "rgba(255,255,255,.05)" : "#fff",

//                   border: isDark
//                     ? "1px solid rgba(255,255,255,.08)"
//                     : "1px solid rgba(37,99,235,.08)",

//                   boxShadow: isDark
//                     ? "0 20px 40px rgba(0,0,0,.20)"
//                     : "0 20px 35px rgba(37,99,235,.08)",
//                 }}
//               >
//                 <Title order={2} c="blue" fw={900}>
//                   {item.number}
//                 </Title>

//                 <Text mt={8} c="dimmed">
//                   {item.label}
//                 </Text>
//               </Paper>
//             </Grid.Col>
//           ))}
//         </Grid> */}
//       </Container>

//       {/* Internal Styles */}

//       <style>{`

//       .mantine-Accordion-item{

//         transition:.35s ease;

//       }

//       .mantine-Accordion-item:hover{

//         transform:translateY(-4px);

//         border-color:#2563EB !important;

//       }

//       .mantine-Accordion-chevron{

//         transition:.3s;

//       }

//       .mantine-Accordion-control{

//         padding:22px;

//       }

//       .mantine-Accordion-panel{

//         padding-bottom:24px;

//       }

//       @media(max-width:992px){

//         .mantine-Accordion-control{

//           padding:18px;

//         }

//       }

//       @media(max-width:768px){

//         .mantine-Accordion-control{

//           padding:16px;

//         }

//       }

//       @media(max-width:576px){

//         .mantine-Accordion-control{

//           padding:14px;

//         }

//       }

//       `}</style>
//     </Box>
//   );
// };

// export default FAQ;


import { useState } from "react";

import {
  Badge,
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

import {
  IconArrowRight,
  IconBrandWhatsapp,
  IconChevronDown,
  IconClock,
  IconMail,
  IconMessageCircle2,
  IconQuestionMark,
  IconSearch,
  IconShieldCheck,
  IconCode,
  IconDeviceMobile,
  IconCloud,
  IconBuildingStore,
} from "@tabler/icons-react";

import { motion, AnimatePresence } from "framer-motion";

// ── Category tabs ──────────────────────────────────────────
const categories = [
  { id: "all",      label: "All",         Icon: IconSearch },
  { id: "services", label: "Services",    Icon: IconBuildingStore },
  { id: "process",  label: "Process",     Icon: IconCode },
  { id: "mobile",   label: "Mobile",      Icon: IconDeviceMobile },
  { id: "cloud",    label: "Cloud & AI",  Icon: IconCloud },
  { id: "legal",    label: "Legal",       Icon: IconShieldCheck },
];

// const faqs = [
//   {
//     cat: "services",
//     question: "What services does Nexflare Dynamics provide?",
//     answer:
//       "We cover the full product stack — Web Development, Mobile Apps, Custom ERP/CRM, UI/UX Design, Cloud Infrastructure, DevOps, Digital Marketing, and AI Integration. Whether you need a single landing page or an enterprise platform, we scope and deliver.",
//   },
//   {
//     cat: "process",
//     question: "How long does a typical project take?",
//     answer:
//       "Timelines depend on scope: a polished marketing site usually ships in 2–4 weeks, a mid-size web or mobile app in 1–3 months, and a full enterprise system in 4–9+ months. We share a detailed milestone plan before we start so there are no surprises.",
//   },
//   {
//     cat: "process",
//     question: "How is project pricing determined?",
//     answer:
//       "Pricing is based on your feature list, tech stack, and team size needed. We send a transparent, itemised quotation — no hidden fees, no vague retainers. Fixed-price and time-and-material models are both available.",
//   },
//   {
//     cat: "process",
//     question: "Do you provide post-launch support?",
//     answer:
//       "Yes. Every project includes a free warranty period after go-live. After that, we offer monthly retainer plans covering security patches, performance tuning, bug fixes, and on-call technical support.",
//   },
//   {
//     cat: "services",
//     question: "Can you redesign our existing website or app?",
//     answer:
//       "Absolutely. We audit your current product, identify UX bottlenecks, and rebuild with a modern responsive UI, faster load times, and SEO improvements — without losing your existing content or brand identity.",
//   },
//   {
//     cat: "legal",
//     question: "Do you sign an NDA before discussing projects?",
//     answer:
//       "Yes, without hesitation. We sign a mutual NDA before any sensitive business details are shared. Protecting your IP and ideas is non-negotiable for us.",
//   },
//   {
//     cat: "mobile",
//     question: "Do you build for both iOS and Android?",
//     answer:
//       "Yes. We build cross-platform apps with React Native (one codebase, both stores) or native Swift/Kotlin when peak performance is critical. We handle App Store and Play Store submissions too.",
//   },
//   {
//     cat: "cloud",
//     question: "Which technologies and cloud platforms do you use?",
//     answer:
//       "Frontend: React, Next.js, Vue. Backend: Node.js, Java Spring Boot, Python. Databases: PostgreSQL, MongoDB, MySQL. Cloud: AWS, GCP, DigitalOcean, Docker, Kubernetes. AI: OpenAI, LangChain, custom model pipelines.",
//   },
//   {
//     cat: "process",
//     question: "How do we get started?",
//     answer:
//       "Book a free 30-minute discovery call through our Contact page. We'll listen to your idea, ask the right questions, and send a no-obligation proposal within 48 hours. No sales pressure — just honest advice.",
//   },
// ];
const faqs = [
  {
    cat: "services",
    question: "What industries do you specialize in for IT solutions?",
    answer:
      "We cater to healthcare, finance, e-commerce, education, and logistics. Our versatile team tailors solutions to meet sector-specific challenges and goals across all verticals.",
  },
  {
    cat: "process",
    question: "How do you ensure security of the applications you provide?",
    answer:
      "Security is a top priority. We implement encryption, secure coding practices, and compliance with global standards like GDPR, SOC 2, and ISO 27001.",
  },
  {
    cat: "process",
    question: "Can you handle large-scale enterprise cloud migrations?",
    answer:
      "Yes. We specialize in seamless enterprise-grade cloud migrations with thorough assessments, phased transitions, and minimal downtime to ensure a smooth experience.",
  },
  {
    cat: "process",
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Absolutely. Our services include continuous monitoring, updates, feature enhancements, and 24/7 support to ensure optimal performance after launch.",
  },
  {
    cat: "services",
    question: "What sets your cloud solutions apart from competitors?",
    answer:
      "Our solutions are uniquely tailored to client needs, focusing on scalability, automation, and cost-efficiency using Kubernetes, Terraform, and serverless architectures.",
  },
  {
    cat: "legal",
    question: "Can you handle end-to-end IT product development?",
    answer:
      "Yes. We manage the entire lifecycle — from ideation and design to development, deployment, and maintenance — delivering turnkey solutions for your business.",
  },
  {
    cat: "mobile",
    question: "Do you build for both iOS and Android?",
    answer:
      "Yes. We build cross-platform apps with React Native (one codebase, both stores) or native Swift/Kotlin when peak performance is critical. We handle App Store and Play Store submissions too.",
  },
  {
    cat: "cloud",
    question: "Which technologies and cloud platforms do you use?",
    answer:
      "Frontend: React, Next.js, Vue. Backend: Node.js, Java Spring Boot, Python. Databases: PostgreSQL, MongoDB, MySQL. Cloud: AWS, GCP, DigitalOcean, Docker, Kubernetes. AI: OpenAI, LangChain, custom model pipelines.",
  },
  {
    cat: "process",
    question: "How do we get started?",
    answer:
      "Book a free 30-minute discovery call through our Contact page. We'll listen to your idea, ask the right questions, and send a no-obligation proposal within 48 hours. No sales pressure — just honest advice.",
  },
];

// ── Stagger helpers ────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// ── Single FAQ row ─────────────────────────────────────────
const FAQItem = ({ faq, index, isDark }) => {
  const [open, setOpen] = useState(false);

  const cardBg     = isDark ? "rgba(255,255,255,0.04)" : "#ffffff";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(37,99,235,0.10)";
  const activeBorder = "#2563EB";

  return (
    <motion.div variants={itemVariants}>
      <Paper
        radius="xl"
        mb={14}
        style={{
          background: open
            ? isDark
              ? "rgba(37,99,235,0.10)"
              : "rgba(37,99,235,0.04)"
            : cardBg,
          border: `1.5px solid ${open ? activeBorder : cardBorder}`,
          boxShadow: open
            ? "0 12px 36px rgba(37,99,235,0.14)"
            : isDark
            ? "0 4px 20px rgba(0,0,0,0.20)"
            : "0 4px 20px rgba(37,99,235,0.05)",
          cursor: "pointer",
          transition: "all 0.28s ease",
          overflow: "hidden",
        }}
        onClick={() => setOpen((v) => !v)}
      >
        {/* Question row */}
        <Group
          p={{ base: 18, md: 24 }}
          justify="space-between"
          wrap="nowrap"
          gap={16}
        >
          <Group gap={16} wrap="nowrap" style={{ flex: 1, minWidth: 0 }}>
            {/* Number badge */}
            <Box
              style={{
                minWidth: 36,
                height: 36,
                borderRadius: "50%",
                background: open
                  ? "linear-gradient(135deg,#2563EB,#38BDF8)"
                  : isDark
                  ? "rgba(255,255,255,0.07)"
                  : "rgba(37,99,235,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "background 0.28s ease",
              }}
            >
              <Text
                size="xs"
                fw={800}
                style={{
                  color: open ? "#fff" : isDark ? "rgba(255,255,255,0.5)" : "#2563EB",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </Text>
            </Box>

            <Text
              fw={700}
              size="md"
              style={{
                color: isDark ? "#fff" : "#111827",
                lineHeight: 1.45,
              }}
            >
              {faq.question}
            </Text>
          </Group>

          {/* Chevron */}
          <Box
            style={{
              minWidth: 34,
              height: 34,
              borderRadius: "50%",
              background: open
                ? "linear-gradient(135deg,#2563EB,#38BDF8)"
                : isDark
                ? "rgba(255,255,255,0.07)"
                : "rgba(37,99,235,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "background 0.28s ease",
            }}
          >
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: "flex" }}
            >
              <IconChevronDown
                size={17}
                color={open ? "#fff" : isDark ? "rgba(255,255,255,0.55)" : "#2563EB"}
              />
            </motion.div>
          </Box>
        </Group>

        {/* Answer panel */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <Box
                px={{ base: 18, md: 24 }}
                pb={24}
                pt={0}
                style={{
                  borderTop: `1px solid ${
                    isDark ? "rgba(255,255,255,0.06)" : "rgba(37,99,235,0.08)"
                  }`,
                  paddingTop: 18,
                  marginLeft: 0,
                }}
              >
                {/* indent to align with question text */}
                <Box ml={{ base: 0, md: 52 }}>
                  <Text
                    size="sm"
                    c="dimmed"
                    style={{ lineHeight: 1.85 }}
                  >
                    {faq.answer}
                  </Text>
                </Box>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Paper>
    </motion.div>
  );
};

// ── Main component ─────────────────────────────────────────
const FAQ = () => {
  const isDark = useComputedColorScheme("light") === "dark";
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all" ? faqs : faqs.filter((f) => f.cat === activeTab);

  const bg = isDark
    ? "linear-gradient(180deg,#040816 0%,#081120 60%,#0F172A 100%)"
    : "linear-gradient(180deg,#ffffff 0%,#F3F7FF 60%,#EBF1FF 100%)";

  const cardBg     = isDark ? "rgba(255,255,255,0.04)" : "#ffffff";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(37,99,235,0.10)";
  const textCol    = isDark ? "#ffffff" : "#111827";
  const dimCol     = isDark ? "rgba(255,255,255,0.50)" : "#64748b";

  return (
    <Box
      py={{ base: 90, md: 60 }}
      style={{ position: "relative", overflow: "hidden", background: bg }}
    >
      {/* ambient glows */}
      {[
        { top: -180, left: -150, color: "rgba(37,99,235,0.15)" },
        { bottom: -180, right: -180, color: "rgba(56,189,248,0.12)" },
        { top: "45%", left: "50%", color: "rgba(99,102,241,0.07)" },
      ].map((g, i) => (
        <Box
          key={i}
          style={{
            position: "absolute", pointerEvents: "none",
            width: 500, height: 500, borderRadius: "50%",
            filter: "blur(160px)", background: g.color, ...g,
          }}
        />
      ))}

      <Container size="xl" style={{ position: "relative", zIndex: 5 }}>

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <Stack align="center" mb={16}>
            <Badge
              radius="xl"
              size="lg"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
            >
              FAQ
            </Badge>

            <Title
              ta="center"
              style={{
                fontWeight: 900,
                fontSize: "clamp(2rem,5vw,3.6rem)",
                color: textCol,
                lineHeight: 1.2,
              }}
            >
              Questions we get{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#2563EB,#38BDF8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                all the time
              </span>
            </Title>

            <Text
              ta="center"
              maw={620}
              size="lg"
              c="dimmed"
              mt={8}
              style={{ lineHeight: 1.8 }}
            >
              Straight answers about our services, process, pricing, and
              everything in between — no filler.
            </Text>
          </Stack>
        </motion.div>

        {/* ── Category filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <Group justify="center" gap={10} mb={56} wrap="wrap">
            {categories.map(({ id, label, Icon }) => {
              const active = activeTab === id;
              return (
                <Button
                  key={id}
                  size="sm"
                  radius="xl"
                  variant={active ? "gradient" : "light"}
                  gradient={active ? { from: "blue", to: "cyan" } : undefined}
                  color={active ? undefined : "blue"}
                  leftSection={<Icon size={15} />}
                  onClick={() => setActiveTab(id)}
                  style={{
                    transition: "all 0.22s ease",
                    transform: active ? "translateY(-2px)" : undefined,
                    boxShadow: active ? "0 6px 20px rgba(37,99,235,0.28)" : undefined,
                    fontWeight: active ? 700 : 500,
                  }}
                >
                  {label}
                </Button>
              );
            })}
          </Group>
        </motion.div>

        {/* ── Two-column layout ── */}
        <Grid gutter={{ base: 40, md: 56 }} align="flex-start">

          {/* ── LEFT: FAQ list ── */}
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {filtered.length === 0 ? (
                  <Text ta="center" c="dimmed" py={60}>
                    No questions in this category yet.
                  </Text>
                ) : (
                  filtered.map((faq, i) => (
                    <FAQItem
                      key={faq.question}
                      faq={faq}
                      index={i}
                      isDark={isDark}
                    />
                  ))
                )}
              </motion.div>
            </AnimatePresence>
          </Grid.Col>

          {/* ── RIGHT: contact card (sticky) ── */}
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <Box style={{ position: "sticky", top: 110 }}>

                {/* Main card */}
                <Paper
                  radius="2rem"
                  p={32}
                  mb={20}
                  style={{
                    background: isDark
                      ? "linear-gradient(145deg,rgba(37,99,235,0.18),rgba(14,165,233,0.12))"
                      : "linear-gradient(145deg,#EFF6FF,#E0F2FE)",
                    border: `1.5px solid ${
                      isDark ? "rgba(37,99,235,0.35)" : "rgba(37,99,235,0.18)"
                    }`,
                  }}
                >
                  <ThemeIcon
                    size={64}
                    radius="xl"
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan" }}
                    mb={20}
                  >
                    <IconQuestionMark size={32} />
                  </ThemeIcon>

                  <Title
                    order={3}
                    style={{ color: textCol, fontWeight: 800 }}
                  >
                    Didn't find your answer?
                  </Title>

                  <Text mt={10} c="dimmed" size="sm" style={{ lineHeight: 1.8 }}>
                    Our engineers respond to every query personally — not with
                    an auto-responder. Ask us anything.
                  </Text>

                  <Button
                    mt={24}
                    fullWidth
                    size="md"
                    radius="xl"
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan" }}
                    rightSection={<IconArrowRight size={16} />}
                    fw={700}
                  >
                    Ask Our Team
                  </Button>
                </Paper>

                {/* Contact methods */}
                <Stack gap={12}>
                  {[
                    {
                      Icon: IconMail,
                      title: "Email us",
                      sub: "enquiry@nexflaredynamics.com",
                      color: "blue",
                    },
                    {
                      Icon: IconBrandWhatsapp,
                      title: "WhatsApp",
                      sub: "+91 8237525097",
                      color: "green",
                    },
                    {
                      Icon: IconClock,
                      title: "Response time",
                      sub: "Usually within 2–4 hours",
                      color: "orange",
                    },
                  ].map(({ Icon, title, sub, color }) => (
                    <Paper
                      key={title}
                      radius="xl"
                      p={18}
                      style={{
                        background: cardBg,
                        border: `1px solid ${cardBorder}`,
                        transition: "transform 0.22s ease, box-shadow 0.22s ease",
                        cursor: "default",
                      }}
                      className="faq-contact-card"
                    >
                      <Group gap={14} wrap="nowrap">
                        <ThemeIcon
                          color={color}
                          variant="light"
                          radius="xl"
                          size={40}
                          style={{ flexShrink: 0 }}
                        >
                          <Icon size={19} />
                        </ThemeIcon>
                        <Stack gap={2}>
                          <Text
                            size="sm"
                            fw={700}
                            style={{ color: textCol }}
                          >
                            {title}
                          </Text>
                          <Text size="xs" c="dimmed">
                            {sub}
                          </Text>
                        </Stack>
                      </Group>
                    </Paper>
                  ))}
                </Stack>

              </Box>
            </motion.div>
          </Grid.Col>
        </Grid>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Paper
            mt={90}
            radius="2rem"
            p={{ base: 32, md: 56 }}
            style={{
              position: "relative",
              overflow: "hidden",
              background: isDark
                ? "linear-gradient(130deg,#0F1E4A 0%,#1D3FAA 55%,#0A2260 100%)"
                : "linear-gradient(130deg,#1D4ED8 0%,#2563EB 55%,#0EA5E9 100%)",
            }}
          >
            {/* decorative circles */}
            {[
              { width: 340, height: 340, right: -130, top: -130 },
              { width: 200, height: 200, left: -80, bottom: -80 },
            ].map((s, i) => (
              <Box
                key={i}
                style={{
                  position: "absolute", pointerEvents: "none",
                  borderRadius: "50%", background: "rgba(255,255,255,0.07)",
                  ...s,
                }}
              />
            ))}

            <Grid align="center" style={{ position: "relative", zIndex: 2 }}>
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Badge radius="xl" color="white" c="blue" mb={16}>
                  Free Consultation
                </Badge>

                <Title
                  c="white"
                  style={{
                    fontWeight: 900,
                    fontSize: "clamp(1.7rem,3.5vw,3rem)",
                    lineHeight: 1.25,
                  }}
                >
                  Ready to build something
                  <br />people actually use?
                </Title>

                <Text
                  mt={14}
                  style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.8 }}
                  maw={500}
                >
                  Book a free 30-min call. We'll scope your idea, suggest the
                  right stack, and send a clear proposal — no commitment needed.
                </Text>

                {/* trust signals */}
                <Group mt={28} gap={24} wrap="wrap">
                  {[
                    { Icon: IconShieldCheck, text: "NDA signed before we talk" },
                    { Icon: IconClock,        text: "Proposal within 48 hours" },
                    { Icon: IconMessageCircle2, text: "No sales pressure" },
                  ].map(({ Icon, text }) => (
                    <Group key={text} gap={8} wrap="nowrap">
                      <Icon size={16} color="rgba(255,255,255,0.75)" />
                      <Text size="sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                        {text}
                      </Text>
                    </Group>
                  ))}
                </Group>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 5 }}>
                <Group
                  justify={{ base: "flex-start", md: "flex-end" }}
                  mt={{ base: 30, md: 0 }}
                >
                  <Button
                    size="xl"
                    radius="xl"
                    color="white"
                    c="blue"
                    fw={800}
                    rightSection={<IconArrowRight size={20} />}
                    styles={{ root: { height: 58, paddingInline: 36 } }}
                  >
                    Book Free Call
                  </Button>
                </Group>
              </Grid.Col>
            </Grid>
          </Paper>
        </motion.div>

      </Container>

      {/* Scoped styles */}
      <style>{`
        .faq-contact-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(37,99,235,0.12) !important;
        }
        .mantine-Button-root {
          transition: transform 0.24s ease, box-shadow 0.24s ease;
        }
        .mantine-Button-root:hover {
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .mantine-Button-root { width: 100%; }
        }
      `}</style>
    </Box>
  );
};

export default FAQ;