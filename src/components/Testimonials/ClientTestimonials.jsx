import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Group,
  Paper,
  Rating,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useComputedColorScheme,
} from "@mantine/core";

import { Carousel } from "@mantine/carousel";

import { motion } from "framer-motion";

import { IconQuoteFilled, IconStarFilled } from "@tabler/icons-react";

import "@mantine/carousel/styles.css";

const MotionPaper = motion(Paper);

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    position: "CEO",
    company: "TechNova Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "Nexflare Dynamics completely transformed our business with a modern ERP solution. Their professionalism, communication and technical expertise exceeded our expectations.",
  },

  {
    id: 2,
    name: "Priya Mehta",
    position: "Founder",
    company: "FinCore Pvt. Ltd.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Outstanding experience! The team delivered our fintech platform before deadline with excellent UI/UX and enterprise-level performance.",
  },

  {
    id: 3,
    name: "John Anderson",
    position: "Director",
    company: "Global Logistics",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    review:
      "Their logistics management software streamlined our operations and increased productivity. Highly recommended for enterprise projects.",
  },

  {
    id: 4,
    name: "Sneha Patil",
    position: "CTO",
    company: "HealthBridge",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    review:
      "From planning to deployment everything was handled professionally. The healthcare platform they built is secure, scalable and incredibly fast.",
  },

  {
    id: 5,
    name: "David Wilson",
    position: "Product Manager",
    company: "EduSphere",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    rating: 5,
    review:
      "Amazing development team with excellent communication. Our LMS platform has received outstanding feedback from students and teachers.",
  },

  {
    id: 6,
    name: "Amit Kulkarni",
    position: "Managing Director",
    company: "Smart Manufacturing",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
    review:
      "Professional developers who understand business requirements perfectly. The ERP system has automated most of our manufacturing workflow.",
  },
];

const ClientTestimonials = () => {
  const isDark = useComputedColorScheme("light") === "dark";

  return (
    <Box
      py={{
        base: 90,
        md: 60,
      }}
      style={{
        position: "relative",
        overflow: "hidden",

        background: isDark
          ? "linear-gradient(180deg,#050816,#081120,#0F172A)"
          : "linear-gradient(180deg,#ffffff,#F8FAFC,#EEF5FF)",
      }}
    >
      {/* Background Glow */}

      <Box
        style={{
          position: "absolute",
          top: -200,
          left: -150,
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "rgba(37,99,235,.15)",
          filter: "blur(140px)",
        }}
      />

      <Box
        style={{
          position: "absolute",
          right: -180,
          bottom: -180,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(56,189,248,.14)",
          filter: "blur(150px)",
        }}
      />

      <Container
        size="xl"
        style={{
          position: "relative",
          zIndex: 5,
        }}
      >
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
            CLIENT TESTIMONIALS
          </Badge>

          <Title
            ta="center"
            style={{
              fontWeight: 900,
              fontSize: "clamp(2rem,5vw,3.8rem)",
              color: isDark ? "#ffffff" : "#111827",
            }}
          >
            What Our Clients
            <br />
            <span
              style={{
                background: "linear-gradient(90deg,#2563EB,#38BDF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Say About Us
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
            We believe long-term relationships are built on trust, transparency
            and delivering exceptional software solutions that help businesses
            grow faster.
          </Text>
        </Stack>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        
        >
          <Carousel
            slideSize={{
              base: "100%",
              sm: "50%",
              lg: "33.333333%",
            }}
            slideGap="xl"
            align="start"
            withIndicators
            withControls
            loop
            styles={{
              indicator: {
                width: 10,
                height: 10,
                transition: ".3s",
              },
              control: {
                width: 42,
                height: 42,
                borderRadius: "50%",
                backdropFilter: "blur(15px)",
              },
            }}
          >
            {testimonials.map((item, index) => (
              <Carousel.Slide key={item.id}>
                <MotionPaper
                  radius="xl"
                  h="100%"
                  p={35}
                  className="testimonial-card"
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  style={{
                    position: "relative",
                    overflow: "hidden",

                    background: isDark ? "rgba(255,255,255,.05)" : "#ffffff",

                    border: isDark
                      ? "1px solid rgba(255,255,255,.08)"
                      : "1px solid rgba(37,99,235,.08)",

                    backdropFilter: "blur(18px)",

                    boxShadow: isDark
                      ? "0 20px 45px rgba(0,0,0,.28)"
                      : "0 20px 45px rgba(37,99,235,.08)",
                  }}
                >
                  {/* Hover Glow */}

                  <Box
                    className="testimonial-glow"
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: 0,
                      transition: ".35s",

                      background:
                        "radial-gradient(circle at top right, rgba(37,99,235,.25), transparent 70%)",
                    }}
                  />

                  <Group justify="space-between" mb={25}>
                    <ThemeIcon
                      radius="xl"
                      size={52}
                      variant="light"
                      color="blue"
                    >
                      <IconQuoteFilled size={28} />
                    </ThemeIcon>

                    <Group gap={3}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <IconStarFilled
                          key={i}
                          size={18}
                          color="#FFC107"
                          fill="#FFC107"
                        />
                      ))}
                    </Group>
                  </Group>

                  <Text
                    c="dimmed"
                    style={{
                      lineHeight: 1.9,
                      minHeight: 180,
                      fontStyle: "italic",
                    }}
                  >
                    "{item.review}"
                  </Text>

                  <Rating value={item.rating} readOnly mt={18} color="yellow" />

                  <Group mt={30} wrap="nowrap">
                    <Avatar src={item.image} size={68} radius="xl" />

                    <Stack gap={2}>
                      <Title
                        order={4}
                        style={{
                          color: isDark ? "#fff" : "#111827",
                        }}
                      >
                        {item.name}
                      </Title>

                      <Text size="sm" c="dimmed">
                        {item.position}
                      </Text>

                      <Badge
                        radius="xl"
                        variant="light"
                        color="blue"
                        w="fit-content"
                      >
                        {item.company}
                      </Badge>
                    </Stack>
                  </Group>
                </MotionPaper>
              </Carousel.Slide>
            ))}
          </Carousel>
        </motion.div>
        {/* Bottom Statistics */}

        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Group justify="space-between" mt={90} gap={25} wrap="wrap">
            {[
              {
                number: "250+",
                title: "Happy Clients",
              },
              {
                number: "500+",
                title: "Projects Delivered",
              },
              {
                number: "99%",
                title: "Client Satisfaction",
              },
              {
                number: "24/7",
                title: "Technical Support",
              },
            ].map((item) => (
              <Paper
                key={item.title}
                radius="xl"
                p={28}
                style={{
                  flex: 1,
                  minWidth: 200,

                  background: isDark ? "rgba(255,255,255,.05)" : "#fff",

                  border: isDark
                    ? "1px solid rgba(255,255,255,.08)"
                    : "1px solid rgba(37,99,235,.08)",

                  textAlign: "center",

                  boxShadow: isDark
                    ? "0 20px 45px rgba(0,0,0,.25)"
                    : "0 20px 40px rgba(37,99,235,.08)",
                }}
              >
                <Title order={2} c="blue" fw={900}>
                  {item.number}
                </Title>

                <Text mt={8} c="dimmed">
                  {item.title}
                </Text>
              </Paper>
            ))}
          </Group>
        </motion.div> */}

        {/* CTA */}

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Paper
            radius={30}
            mt={100}
            p={{
              base: 35,
              md: 60,
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
                width: 350,
                height: 350,
                borderRadius: "50%",
                right: -140,
                top: -140,
                background: "rgba(255,255,255,.08)",
              }}
            />

            <Stack
              align="center"
              gap={25}
              ta="center"
              style={{
                position: "relative",
                zIndex: 2,
              }}
            >
              <Badge radius="xl" color="white" c="blue" variant="filled">
                LET'S BUILD TOGETHER
              </Badge>

              <Title
                c="white"
                style={{
                  fontWeight: 900,
                  fontSize: "clamp(2rem,4vw,3.5rem)",
                }}
              >
                Ready To Transform
                <br />
                Your Business?
              </Title>

              <Text
                maw={700}
                style={{
                  color: "rgba(255,255,255,.9)",
                  lineHeight: 1.9,
                }}
              >
                Join hundreds of satisfied clients who trust Nexflare Dynamics
                for innovative software, web applications, mobile apps and
                enterprise digital transformation.
              </Text>

              <Button size="xl" radius="xl" color="dark" mt={10}>
                Start Your Project
              </Button>
            </Stack>
          </Paper>
        </motion.div> */}
      </Container>

      {/* Internal Styles */}

      <style>{`

      .testimonial-card{

        transition:.35s ease;

      }

      .testimonial-card:hover{

        transform:translateY(-10px);

        border-color:#2563EB !important;

      }

      .testimonial-card:hover .testimonial-glow{

        opacity:1 !important;

      }

      @media(max-width:992px){

        .testimonial-card{

          padding:28px !important;

        }

      }

      @media(max-width:768px){

        .testimonial-card{

          padding:22px !important;

        }

      }

      @media(max-width:576px){

        .testimonial-card{

          padding:18px !important;

        }

      }

      .mantine-Carousel-indicator{

        transition:.3s;

      }

      .mantine-Carousel-indicator[data-active]{

        width:30px;

        border-radius:20px;

        background:#2563EB;

      }

      `}</style>
    </Box>
  );
};

export default ClientTestimonials;
