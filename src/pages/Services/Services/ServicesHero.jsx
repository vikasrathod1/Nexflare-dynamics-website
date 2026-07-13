import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Group,
  List,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import {
  IconArrowRight,
  IconCheck,
  IconCode,
  IconDeviceMobile,
  IconCloud,
  IconRobot,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const ServicesHero = () => {
  const colorScheme = useComputedColorScheme("light");

  return (
    <Box
      pt={170}
      pb={20}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Blur */}

      <Box
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            colorScheme === "dark"
              ? "rgba(37,99,235,.18)"
              : "rgba(37,99,235,.10)",
          filter: "blur(130px)",
          top: -180,
          right: -120,
        }}
      />

      <Container size="xl">
        <Grid align="center" gutter={60}>
          {/* LEFT */}

          <Grid.Col span={{ base: 12, lg: 7 }}>
            <Stack gap="xl">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Badge
                  variant="light"
                  radius="xl"
                  size="lg"
                >
                  🚀 Software Development Services
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .15 }}
              >
                <Title
                  style={{
                    fontSize: "clamp(2.8rem,5vw,4.8rem)",
                    lineHeight: 1.15,
                    fontWeight: 800,
                  }}
                >
                  Build Future-Ready
                  <Text
                    component="span"
                    inherit
                    variant="gradient"
                    gradient={{
                      from: "blue",
                      to: "cyan",
                    }}
                  >
                    {" "}
                    Digital Solutions
                  </Text>
                </Title>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .25 }}
              >
                <Text
                  size="lg"
                  c="dimmed"
                  maw={650}
                  lh={1.9}
                >
                  We design and develop secure, scalable and modern
                  software products that help startups, SMEs and
                  enterprises automate operations and accelerate
                  growth.
                </Text>
              </motion.div>

              <List
                spacing="md"
                icon={
                  <ThemeIcon
                    color="blue"
                    radius="xl"
                    size={22}
                  >
                    <IconCheck size={14} />
                  </ThemeIcon>
                }
              >
                <List.Item>Custom Software Development</List.Item>

                <List.Item>Web & Mobile Applications</List.Item>

                <List.Item>ERP • CRM • HRMS Solutions</List.Item>

                <List.Item>Cloud & AI Powered Platforms</List.Item>
              </List>

              <Group mt="md">
                <Button
                  component={Link}
                  to="/contact"
                  radius="xl"
                  size="lg"
                  rightSection={<IconArrowRight size={18} />}
                >
                  Get Free Consultation
                </Button>

                {/* <Button
                  component={Link}
                  to="/portfolio"
                  variant="outline"
                  radius="xl"
                  size="lg"
                >
                  View Portfolio
                </Button> */}
              </Group>
            </Stack>
          </Grid.Col>

          {/* RIGHT */}

          <Grid.Col span={{ base: 12, lg: 5 }}>
            <MotionBox
              initial={{
                opacity: 0,
                scale: .85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: .7,
              }}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                style={{
                  width: 430,
                  height: 430,
                  borderRadius: 40,
                  position: "relative",
                  background:
                    colorScheme === "dark"
                      ? "linear-gradient(145deg,#13233c,#0b1326)"
                      : "linear-gradient(145deg,#eef7ff,#dbeafe)",
                  border:
                    colorScheme === "dark"
                      ? "1px solid rgba(255,255,255,.08)"
                      : "1px solid #dbeafe",
                  boxShadow:
                    "0 35px 80px rgba(37,99,235,.18)",
                }}
              >
                <ThemeIcon
                  size={95}
                  radius="xl"
                  color="blue"
                  style={{
                    position: "absolute",
                    top: 50,
                    left: 50,
                  }}
                >
                  <IconCode size={45} />
                </ThemeIcon>

                <ThemeIcon
                  size={95}
                  radius="xl"
                  color="cyan"
                  style={{
                    position: "absolute",
                    top: 70,
                    right: 45,
                  }}
                >
                  <IconDeviceMobile size={45} />
                </ThemeIcon>

                <ThemeIcon
                  size={95}
                  radius="xl"
                  color="grape"
                  style={{
                    position: "absolute",
                    bottom: 70,
                    left: 70,
                  }}
                >
                  <IconCloud size={45} />
                </ThemeIcon>

                <ThemeIcon
                  size={95}
                  radius="xl"
                  color="teal"
                  style={{
                    position: "absolute",
                    bottom: 50,
                    right: 60,
                  }}
                >
                  <IconRobot size={45} />
                </ThemeIcon>

                <Box
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    style={{
                      width: 170,
                      height: 170,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg,#2563eb,#06b6d4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: 22,
                      fontWeight: 700,
                    }}
                  >
                    NFD
                  </Box>
                </Box>
              </Box>
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesHero;