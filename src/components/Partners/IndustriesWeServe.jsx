import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useComputedColorScheme,
} from "@mantine/core";

import {
  IconBuildingBank,
  IconHeartbeat,
  IconShoppingCart,
  IconSchool,
  IconTruck,
  IconBuildingFactory,
  IconHome,
  IconPlane,
  IconArrowRight,
} from "@tabler/icons-react";

import { motion } from "framer-motion";

const MotionPaper = motion(Paper);

const industries = [
  {
    title: "Healthcare",
    icon: IconHeartbeat,
    color: "#EF4444",
    description:
      "Hospital Management Systems, EMR, Telemedicine, Healthcare CRM and Digital Health Solutions.",
  },

  {
    title: "Banking & Finance",
    icon: IconBuildingBank,
    color: "#2563EB",
    description:
      "Secure Banking Applications, FinTech Platforms, Digital Payments and Financial Automation.",
  },

  {
    title: "E-Commerce",
    icon: IconShoppingCart,
    color: "#10B981",
    description:
      "Modern eCommerce Platforms, Marketplace Development and Inventory Management Systems.",
  },

  {
    title: "Education",
    icon: IconSchool,
    color: "#7C3AED",
    description:
      "LMS Platforms, Student Portals, Online Examination Systems and E-Learning Solutions.",
  },

  {
    title: "Logistics",
    icon: IconTruck,
    color: "#F59E0B",
    description:
      "Fleet Management, GPS Tracking, Warehouse Management and Supply Chain Automation.",
  },

  {
    title: "Manufacturing",
    icon: IconBuildingFactory,
    color: "#06B6D4",
    description:
      "ERP, Inventory Management, Production Planning and Smart Manufacturing Solutions.",
  },

  {
    title: "Real Estate",
    icon: IconHome,
    color: "#EC4899",
    description:
      "Property Portals, CRM, Rental Platforms and Construction Management Systems.",
  },

  {
    title: "Travel & Hospitality",
    icon: IconPlane,
    color: "#0EA5E9",
    description:
      "Travel Booking, Hotel Management, Tour Packages and Hospitality Software.",
  },
];

const IndustriesWeServe = () => {
  const isDark = useComputedColorScheme("light") === "dark";

  return (
    <Box
      py={{
        base: 80,
        md: 60,
      }}
      style={{
        position: "relative",
        overflow: "hidden",

        background: isDark
          ? "linear-gradient(180deg,#040816,#081120,#0F172A)"
          : "linear-gradient(180deg,#ffffff,#F8FAFC,#EEF4FF)",
      }}
    >
      {/* Background Glow */}

      <Box
        style={{
          position: "absolute",
          top: -200,
          right: -200,
          width: 500,
          height: 500,
          borderRadius: "50%",
          filter: "blur(150px)",
          background: "rgba(37,99,235,.15)",
        }}
      />

      <Box
        style={{
          position: "absolute",
          bottom: -200,
          left: -200,
          width: 450,
          height: 450,
          borderRadius: "50%",
          filter: "blur(150px)",
          background: "rgba(6,182,212,.15)",
        }}
      />

      <Container
        size="xl"
        style={{
          position: "relative",
          zIndex: 5,
        }}
      >
        {/* Heading */}

        <Stack align="center" mb={70}>
          <Badge
            radius="xl"
            size="lg"
            variant="gradient"
            gradient={{
              from: "blue",
              to: "cyan",
            }}
          >
            INDUSTRIES WE SERVE
          </Badge>

          <Title
            ta="center"
            style={{
              fontWeight: 900,
              fontSize: "clamp(2rem,5vw,3.8rem)",
              color: isDark ? "#ffffff" : "#111827",
            }}
          >
            Industry-Specific
            <br />
            <span
              style={{
                background: "linear-gradient(90deg,#2563EB,#38BDF8)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Digital Solutions
            </span>
          </Title>

          <Text
            ta="center"
            maw={760}
            size="lg"
            c="dimmed"
            style={{
              lineHeight: 1.9,
            }}
          >
            We empower businesses across diverse industries with secure,
            scalable and innovative software solutions tailored to their unique
            operational requirements and future growth.
          </Text>
        </Stack>

        <Grid
          gutter={{
            base: 20,
            sm: 25,
            md: 30,
            lg: 35,
          }}
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <Grid.Col
                key={industry.title}
                span={{
                  base: 12,
                  sm: 6,
                  lg: 3,
                }}
              >
                <MotionPaper
                  className="industry-card"
                  radius="xl"
                  p={{
                    base: 22,
                    sm: 25,
                    md: 30,
                  }}
                  h="100%"
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
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  style={{
                    position: "relative",
                    overflow: "hidden",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",

                    background: isDark ? "rgba(255,255,255,.05)" : "#ffffff",

                    border: isDark
                      ? "1px solid rgba(255,255,255,.08)"
                      : "1px solid rgba(37,99,235,.08)",

                    backdropFilter: "blur(18px)",

                    boxShadow: isDark
                      ? "0 20px 45px rgba(0,0,0,.28)"
                      : "0 20px 45px rgba(37,99,235,.08)",

                    transition: ".35s",
                  }}
                >
                  {/* Hover Glow */}

                  <Box
                    className="industry-glow"
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: 0,
                      transition: ".35s",

                      background: `radial-gradient(circle at top right, ${industry.color}30, transparent 70%)`,
                    }}
                  />

                  <Stack justify="space-between" h="100%">
                    <Stack gap={18}>
                      <ThemeIcon
                        size={70}
                        radius="xl"
                        variant="light"
                        color={industry.color}
                      >
                        <Icon size={34} />
                      </ThemeIcon>

                      <Title
                        order={3}
                        style={{
                          color: isDark ? "#fff" : "#111827",

                          fontWeight: 800,
                        }}
                      >
                        {industry.title}
                      </Title>

                      <Text
                        c="dimmed"
                        style={{
                          lineHeight: 1.8,
                          minHeight: 120,
                        }}
                      >
                        {industry.description}
                      </Text>
                    </Stack>

                    {/* <Button
                      mt={28}
                      variant="subtle"
                      color={industry.color}
                      rightSection={<IconArrowRight size={18} />}
                      styles={{
                        root: {
                          justifyContent: "flex-start",
                          paddingLeft: 0,
                          fontWeight: 700,
                        },
                      }}
                    >
                      Learn More
                    </Button> */}
                  </Stack>
                </MotionPaper>
              </Grid.Col>
            );
          })}
        </Grid>
        {/* Bottom Statistics */}

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
            delay: 0.2,
          }}
        >
          <Grid
            mt={{
              base: 70,
              md: 90,
            }}
            gutter={25}
          >
            {[
              {
                number: "20+",
                label: "Industries Served",
              },
              {
                number: "150+",
                label: "Projects Delivered",
              },
              {
                number: "99%",
                label: "Client Satisfaction",
              },
              {
                number: "24/7",
                label: "Support Available",
              },
            ].map((item) => (
              <Grid.Col
                key={item.label}
                span={{
                  base: 6,
                  md: 3,
                }}
              >
                <Paper
                  radius="xl"
                  p={30}
                  ta="center"
                  style={{
                    background: isDark ? "rgba(255,255,255,.04)" : "#fff",

                    border: isDark
                      ? "1px solid rgba(255,255,255,.08)"
                      : "1px solid rgba(37,99,235,.08)",

                    boxShadow: isDark
                      ? "0 20px 40px rgba(0,0,0,.25)"
                      : "0 20px 40px rgba(37,99,235,.08)",
                  }}
                >
                  <Title order={2} c="blue" fw={900}>
                    {item.number}
                  </Title>

                  <Text mt={8} c="dimmed">
                    {item.label}
                  </Text>
                </Paper>
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>

        {/* CTA */}

        {/* <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
        >
          <Paper
            mt={{
              base: 70,
              md: 100,
            }}
            radius={30}
            p={{
              base: 30,
              md: 55,
            }}
            style={{
              position: "relative",
              overflow: "hidden",

              background: isDark
                ? "linear-gradient(135deg,#111827,#1D4ED8,#2563EB)"
                : "linear-gradient(135deg,#2563EB,#3B82F6,#38BDF8)",

              color: "#fff",
            }}
          >
            <Box
              style={{
                position: "absolute",
                right: -120,
                top: -120,
                width: 320,
                height: 320,
                borderRadius: "50%",
                background: "rgba(255,255,255,.08)",
              }}
            />

            <Grid align="center">
              <Grid.Col
                span={{
                  base: 12,
                  md: 8,
                }}
              >
                <Stack gap={12}>
                  <Badge
                    radius="xl"
                    color="white"
                    variant="filled"
                    c="blue"
                    w="fit-content"
                  >
                    LET'S WORK TOGETHER
                  </Badge>

                  <Title
                    c="white"
                    style={{
                      fontWeight: 900,
                      fontSize:
                        "clamp(2rem,4vw,3.2rem)",
                    }}
                  >
                    Building Software For Every Industry
                  </Title>

                  <Text
                    style={{
                      color:
                        "rgba(255,255,255,.88)",
                      lineHeight: 1.9,
                    }}
                  >
                    No matter your industry, our experienced
                    developers build scalable, secure and
                    innovative software tailored to your
                    business goals.
                  </Text>
                </Stack>
              </Grid.Col>

              <Grid.Col
                span={{
                  base: 12,
                  md: 4,
                }}
              >
                <Box
                  ta={{
                    base: "left",
                    md: "right",
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
                        <IconArrowRight
                          size={20}
                        />
                      }
                      styles={{
                        root: {
                          paddingInline: 40,
                          height: 58,
                          fontWeight: 700,
                        },
                      }}
                    >
                      Contact Us
                    </Button>
                  </motion.div>
                </Box>
              </Grid.Col>
            </Grid>
          </Paper>
        </motion.div> */}
      </Container>

      <style>{`

        .industry-card{
            transition:.35s ease;
        }

        .industry-card:hover{

            border-color:#2563EB !important;

            transform:translateY(-10px);

        }

        .industry-card:hover .industry-glow{

            opacity:1 !important;

        }

        @media(max-width:992px){

            .industry-card{

                min-height:auto;

            }

        }

        @media(max-width:768px){

            .industry-card{

                padding:22px !important;

            }

        }

        @media(max-width:576px){

            .industry-card{

                padding:18px !important;

            }

        }

      `}</style>
    </Box>
  );
};

export default IndustriesWeServe;
