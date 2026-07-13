// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   Group,
//   Image,
//   List,
//   Stack,
//   Text,
//   ThemeIcon,
//   Title,
//   useMantineColorScheme,
//   useComputedColorScheme,
// } from "@mantine/core";

// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// import { IconCheck, IconArrowRight } from "@tabler/icons-react";

// // import service from "../../assets/images/serviceIllustration.png";
// // import serviceIllustration from "../../../assets/images/NEWONE.png";
// import logoLight from "../../../assets/images/Service-dark-mode.png";
// import logoDark from "../../../assets/images/Service-light-mode.png";

// const MotionBox = motion.create(Box);

// const features = [
//   "Custom Software Development",
//   "Website Design & Development",
//   "Mobile App Development",
//   "ERP & CRM Solutions",
//   "AI & Machine Learning Solutions",
//   "Cloud & DevOps Services",
// ];

// const ServicesOverview = () => {
//   const computedColorScheme = useComputedColorScheme("light");
//   const toggleTheme = () => {
//     setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
//   };

//   const logoSrc = computedColorScheme === "dark" ? logoDark : logoLight;

//   return (
//     <Container size="xl" py={120}>
//       <Grid align="center" gutter={80}>
//         {/* Left Side */}

//         <Grid.Col span={{ base: 12, lg: 6 }}>
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             <MotionBox
//               whileHover={{
//                 y: -10,
//               }}
//               transition={{
//                 duration: 0.3,
//               }}
//             >
//               <Image src={logoSrc} alt="Services Overview" />
//             </MotionBox>
//           </motion.div>
//         </Grid.Col>

//         {/* Right Side */}

//         <Grid.Col span={{ base: 12, lg: 6 }}>
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <Stack gap="lg">
//   <Text
//     fw={700}
//     size="sm"
//     c="blue"
//     tt="uppercase"
//   >
//     Our Core Services
//   </Text>

//   <Title
//     order={1}
//     style={{
//       fontSize: "clamp(2.2rem,4vw,3.8rem)",
//       lineHeight: 1.2,
//     }}
//   >
//     Comprehensive Digital Solutions For Modern Businesses
//   </Title>

//   <Text
//     c="dimmed"
//     size="lg"
//     lh={1.9}
//   >
//     At Nexflare Dynamics, we provide a complete suite of technology
//     services that empower businesses to innovate, scale, and stay ahead
//     in the digital era. Our experienced team combines creativity,
//     strategy, and cutting-edge technologies to build secure, scalable,
//     and high-performing digital products tailored to your business
//     objectives.
//   </Text>

//   <Text
//     c="dimmed"
//     size="lg"
//     lh={1.9}
//   >
//     Whether you're a startup launching your first product or an
//     enterprise modernizing legacy systems, our end-to-end development
//     services ensure exceptional user experiences, faster delivery, and
//     long-term business growth.
//   </Text>

//   <List
//     spacing="md"
//     mt="md"
//     icon={
//       <ThemeIcon
//         radius="xl"
//         color="blue"
//         size={24}
//       >
//         <IconCheck size={14} />
//       </ThemeIcon>
//     }
//   >
//     {features.map((item) => (
//       <List.Item key={item}>
//         <Text fw={600}>
//           {item}
//         </Text>
//       </List.Item>
//     ))}
//   </List>

//   <Group mt="xl">
//     <Button
//       component={Link}
//       to="/services"
//       size="lg"
//       radius="xl"
//       rightSection={<IconArrowRight size={18} />}
//       variant="gradient"
//       gradient={{ from: "blue", to: "cyan" }}
//     >
//       Explore All Services
//     </Button>
//   </Group>
// </Stack>
//           </motion.div>
//         </Grid.Col>
//       </Grid>
//     </Container>
//   );
// };

// export default ServicesOverview;


import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useComputedColorScheme,
} from "@mantine/core";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  IconCode,
  IconDeviceMobile,
  IconCloud,
  IconBrain,
  IconArrowRight,
} from "@tabler/icons-react";

const MotionCard = motion.create(Card);

const services = [
  {
    number: "01",
    title: "Dev Ops",
    description:
      "CI/CD pipelines, infrastructure as code, automated monitoring. Seamless deployments with enterprise-grade reliability.",
    icon: IconCloud,
    color: "#2563eb",
  },
  {
    number: "02",
    title: "Software Outsourcing",  
    description:
      "End-to-end development using a global talent pool. High quality, cost-effective, and fully managed from discovery to launch.",
    icon: IconDeviceMobile,
    color: "#06b6d4",
  },
  {
    number: "03",
    title: "Project & Resource Consulting",
    description:
      "Expert guidance, team augmentation, and strategic technology advisory for optimal project outcomes at every scale.",
    icon: IconCloud,
    color: "#8b5cf6",
  },
  {
    number: "04",
    title: "Custom Software Development",
    description:
      "Tailored web, mobile, and enterprise products built with agile methodology — aligned perfectly to your unique business goals.",
    // icon: IconBrain,
    icon: IconCode,
    color: "#10b981",
  },
];

const ServicesOverview = () => {
  const scheme = useComputedColorScheme("light");

  return (
    <Container size="xl" py={120}>
      {/* Top Section */}

      <Grid mb={70} align="center">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="md">
            <Text
              fw={700}
              c="blue"
              tt="uppercase"
              size="sm"
            >
              OUR CORE SERVICES
            </Text>

            <Title
              order={1}
              style={{
                fontSize: "clamp(2.5rem,4vw,4rem)",
                lineHeight: 1.1,
              }}
            >
              Technology Solutions
              <br />
              Built For Modern
              <br />
              Businesses
            </Title>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="xl">
            <Text
              size="lg"
              c="dimmed"
              lh={1.9}
            >
              We deliver end-to-end digital solutions that help startups,
              enterprises, and growing businesses accelerate innovation,
              improve operational efficiency, and build future-ready software
              products.
            </Text>

            <Button
              component={Link}
              to="/contact"
              radius="xl"
              size="md"
              w={200}
              rightSection={<IconArrowRight size={18} />}
            >
              Get Free Quote
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>

      {/* Cards */}

      <Grid gutter={0}>
        {services.map((service, index) => (
          <Grid.Col
            key={service.number}
            span={{ base: 12, sm: 6, lg: 3 }}
          >
            <MotionCard
              withBorder
              radius={0}
              p={35}
              h="100%"
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              style={{
                background:
                  scheme === "dark"
                    ? "#0f172a"
                    : "#ffffff",

                borderColor:
                  scheme === "dark"
                    ? "#1e293b"
                    : "#e5e7eb",

                cursor: "pointer",

                transition: ".3s",
              }}
            >
              <Stack
                justify="space-between"
                h="100%"
              >
                <Stack gap="lg">
                  <Text
                    size="xs"
                    fw={700}
                    c="dimmed"
                  >
                    {service.number}
                  </Text>

                  <ThemeIcon
                    size={70}
                    radius="xl"
                    variant="light"
                    color="blue"
                  >
                    <service.icon
                      size={34}
                      color={service.color}
                    />
                  </ThemeIcon>

                  <Title order={3}>
                    {service.title}
                  </Title>

                  <Text
                    c="dimmed"
                    size="sm"
                    lh={1.8}
                  >
                    {service.description}
                  </Text>
                </Stack>

                <Button
                  variant="subtle"
                  p={0}
                  justify="start"
                  color="blue"
                  rightSection={
                    <IconArrowRight size={16} />
                  }
                >
                  Explore
                </Button>
              </Stack>
            </MotionCard>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesOverview;