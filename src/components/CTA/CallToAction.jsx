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
  IconRocket,
  IconArrowRight,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

import { motion } from "framer-motion";

const MotionPaper = motion(Paper);

const CallToAction = () => {
  const isDark = useComputedColorScheme("light") === "dark";

  return (
    <Box
      py={{
        base: 90,
        md: 130,
      }}
      style={{
        position: "relative",
        overflow: "hidden",

        background: isDark
          ? "linear-gradient(180deg,#050816,#081120,#0F172A)"
          : "linear-gradient(180deg,#F8FAFC,#EEF5FF,#FFFFFF)",
      }}
    >
      {/* Background Glow */}

      <Box
        style={{
          position: "absolute",
          top: -200,
          left: -180,
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "rgba(37,99,235,.18)",
          filter: "blur(150px)",
        }}
      />

      <Box
        style={{
          position: "absolute",
          bottom: -220,
          right: -180,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(56,189,248,.15)",
          filter: "blur(170px)",
        }}
      />

      <Container
        size="xl"
        style={{
          position: "relative",
          zIndex: 5,
        }}
      >
        <MotionPaper
          radius={32}
          p={{
            base: 35,
            sm: 45,
            md: 70,
          }}
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
            duration: 0.8,
          }}
          style={{
            position: "relative",
            overflow: "hidden",

            background: isDark
              ? "linear-gradient(135deg,#0F172A,#1E3A8A,#2563EB)"
              : "linear-gradient(135deg,#2563EB,#3B82F6,#38BDF8)",

            border: isDark
              ? "1px solid rgba(255,255,255,.08)"
              : "1px solid rgba(255,255,255,.25)",

            boxShadow: isDark
              ? "0 30px 70px rgba(0,0,0,.45)"
              : "0 30px 70px rgba(37,99,235,.22)",
          }}
        >
          {/* Decorative Circle */}

          <Box
            style={{
              position: "absolute",
              width: 420,
              height: 420,
              right: -180,
              top: -180,
              borderRadius: "50%",
              background: "rgba(255,255,255,.08)",
            }}
          />

          <Box
            style={{
              position: "absolute",
              width: 250,
              height: 250,
              left: -120,
              bottom: -120,
              borderRadius: "50%",
              background: "rgba(255,255,255,.06)",
            }}
          />

          <Grid align="center" gutter={{ base: 45, md: 70 }}>
            {/* Left Content */}

            <Grid.Col span={{ base: 12, lg: 7 }}>
              <Stack gap={25}>
                <Badge
                  radius="xl"
                  size="lg"
                  color="white"
                  c="blue"
                  variant="filled"
                  w="fit-content"
                >
                  🚀 START YOUR DIGITAL JOURNEY
                </Badge>

                <Title
                  style={{
                    color: "#fff",
                    fontWeight: 900,
                    lineHeight: 1.1,
                    fontSize: "clamp(2.3rem,5vw,4.5rem)",
                  }}
                >
                  Ready To Build
                  <br />
                  <span
                    style={{
                      color: "#CFE8FF",
                    }}
                  >
                    Something Amazing?
                  </span>
                </Title>

                <Text
                  size="lg"
                  maw={650}
                  style={{
                    color: "rgba(255,255,255,.90)",
                    lineHeight: 1.9,
                  }}
                >
                  Partner with Nexflare Dynamics to transform your ideas into
                  scalable digital products. From websites and mobile apps to
                  enterprise software and cloud solutions, our experts deliver
                  innovation that accelerates business growth.
                </Text>

                <Group mt={15}>
                  <Button
                    size="xl"
                    radius="xl"
                    color="dark"
                    leftSection={<IconRocket size={20} />}
                    rightSection={<IconArrowRight size={18} />}
                    styles={{
                      root: {
                        height: 60,
                        paddingInline: 36,
                        fontWeight: 700,
                      },
                    }}
                  >
                    Start Your Project
                  </Button>

                  <Button
                    size="xl"
                    radius="xl"
                    variant="white"
                    color="dark"
                    leftSection={<IconBrandWhatsapp size={22} />}
                    styles={{
                      root: {
                        height: 60,
                        paddingInline: 34,
                        fontWeight: 700,
                      },
                    }}
                  >
                    Chat on WhatsApp
                  </Button>
                </Group>
              </Stack>
            </Grid.Col>

            {/* Right Side */}

            <Grid.Col span={{ base: 12, lg: 5 }}>
              <Grid gutter="lg">
                {[
                  {
                    value: "500+",
                    title: "Projects Delivered",
                  },
                  {
                    value: "250+",
                    title: "Happy Clients",
                  },
                  {
                    value: "99%",
                    title: "Success Rate",
                  },
                  {
                    value: "24/7",
                    title: "Technical Support",
                  },
                ].map((item, index) => (
                  <Grid.Col span={6} key={item.title}>
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                      }}
                      whileHover={{
                        y: -8,
                        scale: 1.04,
                      }}
                    >
                      <Paper
                        radius="xl"
                        p={28}
                        style={{
                          textAlign: "center",

                          background: "rgba(255,255,255,.10)",

                          backdropFilter: "blur(20px)",

                          border: "1px solid rgba(255,255,255,.18)",

                          color: "#fff",

                          minHeight: 170,

                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <ThemeIcon
                          radius="xl"
                          size={55}
                          mb={18}
                          color="white"
                          variant="light"
                        >
                          <IconRocket size={24} />
                        </ThemeIcon>

                        <Title order={2} fw={900} c="white">
                          {item.value}
                        </Title>

                        <Text
                          mt={6}
                          style={{
                            color: "rgba(255,255,255,.90)",
                          }}
                        >
                          {item.title}
                        </Text>
                      </Paper>
                    </motion.div>
                  </Grid.Col>
                ))}
              </Grid>
            </Grid.Col>
          </Grid>
          {/* Floating Glass Cards */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            style={{
              position: "absolute",
              top: "12%",
              right: "8%",
            }}
          >
            <Paper
              radius="xl"
              px={22}
              py={16}
              style={{
                background: "rgba(255,255,255,.12)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,.18)",
              }}
            >
              <Group gap={12}>
                <ThemeIcon radius="xl" size={45} color="green">
                  ✓
                </ThemeIcon>

                <div>
                  <Text fw={700} c="white">
                    100% Secure
                  </Text>

                  <Text
                    size="sm"
                    style={{
                      color: "rgba(255,255,255,.85)",
                    }}
                  >
                    NDA Protected
                  </Text>
                </div>
              </Group>
            </Paper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 7,
            }}
            style={{
              position: "absolute",
              bottom: "10%",
              left: "6%",
            }}
          >
            <Paper
              radius="xl"
              px={20}
              py={15}
              style={{
                background: "rgba(255,255,255,.10)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,.18)",
              }}
            >
              <Group gap={10}>
                <ThemeIcon radius="xl" color="yellow">
                  ★
                </ThemeIcon>

                <div>
                  <Text fw={700} c="white">
                    5.0 Rating
                  </Text>

                  <Text
                    size="sm"
                    style={{
                      color: "rgba(255,255,255,.85)",
                    }}
                  >
                    Trusted Worldwide
                  </Text>
                </div>
              </Group>
            </Paper>
          </motion.div>
        </MotionPaper>

        {/* Internal Styles */}

        <style>{`

      @media (max-width:992px){

        .floating-card{

          display:none;

        }

      }

      button{

        transition:.35s ease;

      }

      button:hover{

        transform:translateY(-3px);

      }

      `}</style>
      </Container>
    </Box>
  );
};

export default CallToAction;
