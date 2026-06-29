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
  Badge,
  useComputedColorScheme,
} from "@mantine/core";

import {
  IconArrowRight,
  IconCode,
  IconDeviceMobile,
  IconPalette,
  IconCloudComputing,
  IconRobot,
  IconBrandGoogle,
} from "@tabler/icons-react";

import { motion } from "framer-motion";

const MotionPaper = motion(Paper);

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored solutions that align perfectly with your unique business goals — web, mobile, or enterprise. Our expert team leverages agile methodologies to deliver high-quality, innovative products that drive success.",
    icon: IconCode,
    color: "#2563EB",
    badge: "Popular",
  },
  // {
  //   title: "Customized Software Development",
  //   description:
  //     "Custom software applications built to meet your unique business requirements with scalability, security, and performance in mind.",
  //   icon: IconCode,
  //   color: "#2563EB",
  //   badge: "Popular",
  // },

  {
    title: "Digital Marketing",
    description:
      "SEO, Social Media Marketing, Google Ads and complete digital growth strategies.",
    icon: IconBrandGoogle,
    color: "#EF4444",
    badge: "Growth",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform Android & iOS applications with exceptional performance and user experience.",
    icon: IconDeviceMobile,
    color: "#06B6D4",
    badge: "Trending",
  },
  {
    title: "Software Outsourcing",
    description:
      "End-to-end development solutions tailored to your business needs. High-quality, scalable, and cost-effective solutions using a global talent pool — from custom application development to maintenance and support.",
    icon: IconPalette,
    color: "#8B5CF6",
    badge: "Creative",
  },
  {
    title: "AI & Automation",
    description:
      "Automate business processes with Artificial Intelligence, chatbots and smart workflows.",
    icon: IconRobot,
    color: "#F59E0B",
    badge: "AI",
  },
  {
    title: "Dev Ops",
    description:
      "Streamline your software lifecycle by integrating development and operations. We leverage CI/CD pipelines, infrastructure as code, and automated monitoring for seamless deployments, scalability, and reliability.",
    icon: IconCloudComputing,
    color: "#10B981",
    badge: "Cloud",
  },
  

];

const OurServices = () => {
  const isDark = useComputedColorScheme("light") === "dark";

  return (
    <Box
      py={{ base: 70, sm: 90, md: 60 }}
      style={{
        position: "relative",
        overflow: "hidden",
        background: isDark
          ? "linear-gradient(180deg,#050816,#081120,#0F172A)"
          : "linear-gradient(180deg,#F8FAFC,#FFFFFF,#F1F5F9)",
      }}
    >
      {/* Background Glow */}

      <Box
        style={{
          position: "absolute",
          top: -250,
          right: -250,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(37,99,235,.15)",
          filter: "blur(140px)",
        }}
      />

      <Box
        style={{
          position: "absolute",
          bottom: -250,
          left: -250,
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "rgba(6,182,212,.15)",
          filter: "blur(140px)",
        }}
      />

      <Container size="xl" style={{ position: "relative", zIndex: 2 }}>
        {/* Heading */}

        <Stack
          align="center"
          gap="md"
          mb={{ base: 50, md: 80 }}
        >
          <Badge
            size="lg"
            radius="xl"
            variant="gradient"
            gradient={{
              from: "blue",
              to: "cyan",
            }}
          >
            OUR SERVICES
          </Badge>

          <Title
            ta="center"
            style={{
              fontWeight: 900,
              lineHeight: 1.15,
              fontSize: "clamp(2rem,5vw,3.8rem)",
              color: isDark ? "#fff" : "#111827",
            }}
          >
            High-Quality
            <br />

            <span
              style={{
                background:
                  "linear-gradient(90deg,#2563EB,#38BDF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Software Services
            </span>
          </Title>

          <Text
            ta="center"
            maw={760}
            size="lg"
            c="dimmed"
            style={{
              lineHeight: 1.8,
            }}
          >
           Dedicated to delivering excellence through advanced technologies and expert craftsmanship, ensuring every solution drives real business value.
          </Text>
        </Stack>

        <Grid
  gutter={{ base: 20, sm: 25, md: 30, lg: 35 }}
>
  {services.map((service, index) => {
    const Icon = service.icon;

    return (
      <Grid.Col
        key={service.title}
        span={{
          base: 12,
          sm: 6,
          lg: 4,
        }}
      >
        <MotionPaper
         className="service-card"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.12,
          }}
          whileHover={{
            y: -12,
            scale: 1.02,
          }}
          radius="xl"
          p={30}
          h="100%"
          style={{
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",

            background: isDark
              ? "rgba(255,255,255,.05)"
              : "#ffffff",

            border: isDark
              ? "1px solid rgba(255,255,255,.08)"
              : "1px solid rgba(37,99,235,.08)",

            backdropFilter: "blur(20px)",

            boxShadow: isDark
              ? "0 20px 50px rgba(0,0,0,.30)"
              : "0 20px 45px rgba(37,99,235,.08)",

            transition: ".35s",
          }}
        >
          {/* Hover Glow */}

          <Box
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0,
              transition: ".35s",
              background: `radial-gradient(circle at top right, ${service.color}25, transparent 70%)`,
            }}
            className="service-glow"
          />

          <Stack
            justify="space-between"
            h="100%"
          >
            {/* Top */}

            <Stack gap={20}>
              <Group justify="space-between">
                <ThemeIcon
                  size={70}
                  radius="xl"
                  variant="light"
                  color={service.color}
                >
                  <Icon size={34} />
                </ThemeIcon>

                <Badge
                  radius="xl"
                  color={service.color}
                  variant="light"
                >
                  {service.badge}
                </Badge>
              </Group>

              <Title
                order={3}
                style={{
                  color: isDark
                    ? "#ffffff"
                    : "#111827",
                  fontWeight: 800,
                }}
              >
                {service.title}
              </Title>

              <Text
                c="dimmed"
                style={{
                  lineHeight: 1.8,
                  minHeight: 95,
                }}
              >
                {service.description}
              </Text>
            </Stack>

            {/* Bottom */}

            <Button
              mt={35}
              variant="subtle"
              color={service.color}
              rightSection={
                <IconArrowRight
                  size={18}
                />
              }
              styles={{
                root: {
                  justifyContent: "flex-start",
                  paddingLeft: 0,
                  fontWeight: 700,
                },
              }}
            >
              Learn More
            </Button>
          </Stack>
        </MotionPaper>
      </Grid.Col>
    );
  })}
</Grid>
        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          <Paper
            mt={{ base: 60, md: 90 }}
            radius={30}
            p={{ base: 30, md: 55 }}
            style={{
              background: isDark
                ? "linear-gradient(135deg,#111827,#1E3A8A)"
                : "linear-gradient(135deg,#2563EB,#38BDF8)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Background Circle */}

            <Box
              style={{
                position: "absolute",
                right: -120,
                top: -120,
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "rgba(255,255,255,.08)",
              }}
            />

            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 8 }}>
                <Stack gap={10}>
                  <Text
                    fw={700}
                    c="white"
                    tt="uppercase"
                    style={{
                      letterSpacing: 2,
                    }}
                  >
                    Ready To Build Something Amazing?
                  </Text>

                  <Title
                    c="white"
                    style={{
                      fontSize: "clamp(2rem,4vw,3rem)",
                      fontWeight: 900,
                    }}
                  >
                    Let's Transform Your Business
                  </Title>

                  <Text
                    c="rgba(255,255,255,.85)"
                    maw={650}
                    style={{
                      lineHeight: 1.8,
                    }}
                  >
                    Whether you're launching a startup, scaling an
                    enterprise, or modernizing existing software,
                    Nexflare Dynamics is ready to help you achieve
                    your goals.
                  </Text>
                </Stack>
              </Grid.Col>

              <Grid.Col
                span={{ base: 12, md: 4 }}
              >
                <Group
                  justify={{
                    base: "center",
                    md: "flex-end",
                  }}
                  mt={{
                    base: 30,
                    md: 0,
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: .95,
                    }}
                  >
                    <Button
                      size="xl"
                      radius="xl"
                      color="dark"
                      rightSection={
                        <IconArrowRight size={20} />
                      }
                      styles={{
                        root: {
                          paddingInline: 36,
                          height: 58,
                          fontWeight: 700,
                        },
                      }}
                    >
                      Get Free Consultation
                    </Button>
                  </motion.div>
                </Group>
              </Grid.Col>
            </Grid>
          </Paper>
        </motion.div>
      </Container>

      {/* Internal Hover Style */}

      <style>{`
        .service-card:hover{
            border-color:#2563EB !important;
            transform:translateY(-10px);
        }

        .service-card:hover .service-glow{
            opacity:1 !important;
        }

        @media(max-width:768px){

            .service-card{
                padding:24px !important;
            }

        }

      `}</style>

    </Box>
  );
};

export default OurServices;