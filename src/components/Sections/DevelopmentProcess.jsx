import {
  Badge,
  Box,
  Button,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Timeline,
  Title,
  useComputedColorScheme,
} from "@mantine/core";

import {
  IconSearch,
  IconClipboardText,
  IconBrush,
  IconCode,
  IconBug,
  IconRocket,
  IconHeadset,
  IconArrowRight,
} from "@tabler/icons-react";

import { motion } from "framer-motion";

const MotionPaper = motion(Paper);

const processSteps = [
  {
    title: "Discovery",
    icon: IconSearch,
    color: "#2563EB",
    description:
      "We understand your business goals, project requirements and define the complete roadmap before starting development.",
  },

  {
    title: "Planning",
    icon: IconClipboardText,
    color: "#7C3AED",
    description:
      "Our experts create project architecture, timelines, milestones and technology stack for smooth execution.",
  },

  {
    title: "UI / UX Design",
    icon: IconBrush,
    color: "#06B6D4",
    description:
      "Designing modern, beautiful and user-friendly interfaces focused on user experience and conversion.",
  },

  {
    title: "Development",
    icon: IconCode,
    color: "#10B981",
    description:
      "Building scalable software using React, Java, Spring Boot and modern cloud technologies.",
  },

  {
    title: "Testing",
    icon: IconBug,
    color: "#F59E0B",
    description:
      "Comprehensive testing to ensure security, performance and bug-free delivery.",
  },

  {
    title: "Deployment",
    icon: IconRocket,
    color: "#EF4444",
    description:
      "Deploying applications on DigitalOcean, VPS and Cloud with complete CI/CD support.",
  },

  {
    title: "Support",
    icon: IconHeadset,
    color: "#2563EB",
    description:
      "Continuous monitoring, updates and maintenance to keep your software running flawlessly.",
  },
];

const DevelopmentProcess = () => {
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
          width: 500,
          height: 500,
          borderRadius: "50%",
          left: -220,
          top: -220,
          filter: "blur(140px)",
          background: "rgba(37,99,235,.18)",
        }}
      />

      <Box
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          right: -180,
          bottom: -180,
          filter: "blur(140px)",
          background: "rgba(14,165,233,.18)",
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
            DEVELOPMENT PROCESS
          </Badge>

          <Title
            ta="center"
            style={{
              fontSize: "clamp(2rem,5vw,3.8rem)",
              fontWeight: 900,
              color: isDark ? "#fff" : "#111827",
            }}
          >
            From Idea To
            <br />
            <span
              style={{
                background: "linear-gradient(90deg,#2563EB,#38BDF8)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Successful Product
            </span>
          </Title>

          <Text
            ta="center"
            maw={750}
            size="lg"
            c="dimmed"
            style={{
              lineHeight: 1.9,
            }}
          >
            Every successful software product follows a structured development
            lifecycle. Our agile methodology ensures transparency, quality,
            scalability and timely delivery.
          </Text>
        </Stack>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Timeline
            active={processSteps.length}
            bulletSize={42}
            lineWidth={4}
            color="blue"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Timeline.Item
                  key={step.title}
                  bullet={
                    <ThemeIcon
                      radius="xl"
                      size={42}
                      color={step.color}
                      variant="filled"
                    >
                      <Icon size={20} />
                    </ThemeIcon>
                  }
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -40 : 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                  >
                    <MotionPaper
                      className="process-card"
                      radius="xl"
                      p={{
                        base: 22,
                        sm: 28,
                        md: 34,
                      }}
                      mt={10}
                      style={{
                        position: "relative",
                        overflow: "hidden",

                        background: isDark
                          ? "rgba(255,255,255,.05)"
                          : "#ffffff",

                        border: isDark
                          ? "1px solid rgba(255,255,255,.08)"
                          : "1px solid rgba(37,99,235,.08)",

                        backdropFilter: "blur(18px)",

                        boxShadow: isDark
                          ? "0 18px 45px rgba(0,0,0,.30)"
                          : "0 18px 40px rgba(37,99,235,.08)",

                        transition: ".35s",
                      }}
                    >
                      {/* Glow */}

                      <Box
                        className="process-glow"
                        style={{
                          position: "absolute",
                          inset: 0,
                          opacity: 0,
                          transition: ".35s",
                          background: `radial-gradient(circle at top right, ${step.color}30, transparent 70%)`,
                        }}
                      />

                      <Group
                        justify="space-between"
                        align="flex-start"
                        wrap="nowrap"
                        mb={20}
                      >
                        <Stack gap={4}>
                          <Badge radius="xl" color={step.color} variant="light">
                            STEP {index + 1}
                          </Badge>

                          <Title
                            order={3}
                            style={{
                              color: isDark ? "#ffffff" : "#111827",
                            }}
                          >
                            {step.title}
                          </Title>
                        </Stack>

                        <ThemeIcon
                          size={60}
                          radius="xl"
                          color={step.color}
                          variant="light"
                        >
                          <Icon size={30} />
                        </ThemeIcon>
                      </Group>

                      <Text
                        c="dimmed"
                        style={{
                          lineHeight: 1.9,
                          marginBottom: 24,
                        }}
                      >
                        {step.description}
                      </Text>

                      {/* <Button
                        variant="subtle"
                        color={step.color}
                        rightSection={<IconArrowRight size={18} />}
                        styles={{
                          root: {
                            paddingLeft: 0,
                            fontWeight: 700,
                          },
                        }}
                      >
                        Learn More
                      </Button> */}
                    </MotionPaper>
                  </motion.div>
                </Timeline.Item>
              );
            })}
          </Timeline>
        </motion.div>
        {/* Bottom CTA */}

        {/* <motion.div
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
            delay: 0.4,
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
              sm: 40,
              md: 55,
            }}
            style={{
              position: "relative",
              overflow: "hidden",

              background: isDark
                ? "linear-gradient(135deg,#111827,#1E3A8A,#2563EB)"
                : "linear-gradient(135deg,#2563EB,#3B82F6,#38BDF8)",

              color: "#fff",
            }}
          >

            <Box
              style={{
                position: "absolute",
                width: 320,
                height: 320,
                borderRadius: "50%",
                right: -140,
                top: -140,
                background: "rgba(255,255,255,.08)",
              }}
            />

            <Group justify="space-between" align="center" gap={40} wrap="wrap">
              <Stack maw={700}>
                <Badge
                  color="white"
                  variant="filled"
                  c="blue"
                  radius="xl"
                  w="fit-content"
                >
                  READY TO START?
                </Badge>

                <Title
                  style={{
                    fontWeight: 900,
                    fontSize: "clamp(2rem,4vw,3.3rem)",
                    color: "#fff",
                  }}
                >
                  Let's Build Something Amazing Together
                </Title>

                <Text
                  size="lg"
                  style={{
                    color: "rgba(255,255,255,.85)",
                    lineHeight: 1.9,
                  }}
                >
                  Whether you're a startup, SME or enterprise, our experienced
                  developers are ready to turn your ideas into powerful digital
                  products.
                </Text>
              </Stack>

              <motion.div
                whileHover={{
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <Button
                  size="xl"
                  radius="xl"
                  color="dark"
                  rightSection={<IconArrowRight size={20} />}
                  styles={{
                    root: {
                      paddingInline: 40,
                      height: 60,
                      fontWeight: 700,
                    },
                  }}
                >
                  Start Your Project
                </Button>
              </motion.div>
            </Group>
          </Paper>
        </motion.div> */}
      </Container>

      {/* Internal Styles */}

      <style>{`

        .process-card{

            transition:.35s ease;

        }

        .process-card:hover{

            transform:translateY(-10px);

            border-color:#2563EB !important;

        }

        .process-card:hover .process-glow{

            opacity:1 !important;

        }

        @media(max-width:992px){

            .mantine-Timeline-item{

                padding-bottom:30px;

            }

        }

        @media(max-width:768px){

            .process-card{

                padding:22px !important;

            }

        }

        @media(max-width:576px){

            .process-card{

                padding:18px !important;

            }

        }

      `}</style>
    </Box>
  );
};

export default DevelopmentProcess;
