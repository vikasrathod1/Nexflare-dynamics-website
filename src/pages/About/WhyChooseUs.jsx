import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Paper,
  ThemeIcon,
  Stack,
} from "@mantine/core";
import {
  IconBulb,
  IconCode,
  IconUsers,
  IconShieldCheck,
  IconRocket,
  IconHeadset,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionPaper = motion.create(Paper);

const features = [
  {
    icon: IconBulb,
    title: "Innovative Solutions",
    description:
      "We leverage modern technologies and creative thinking to build future-ready digital solutions tailored to your business needs.",
  },
  {
    icon: IconCode,
    title: "Expert Development Team",
    description:
      "Our skilled developers, designers, and engineers bring deep technical expertise and industry experience to every project.",
  },
  {
    icon: IconUsers,
    title: "Client-Centric Approach",
    description:
      "We focus on understanding your business goals and delivering solutions that create measurable value and long-term success.",
  },
  {
    icon: IconShieldCheck,
    title: "Secure & Scalable",
    description:
      "Our applications are designed with security, performance, and scalability in mind to support your growing business.",
  },
  {
    icon: IconRocket,
    title: "Agile Delivery",
    description:
      "Using agile methodologies, we ensure faster development cycles, transparency, and continuous improvement throughout the project.",
  },
  {
    icon: IconHeadset,
    title: "Dedicated Support",
    description:
      "From planning to deployment and beyond, our team provides ongoing support and maintenance to ensure smooth operations.",
  },
];

const WhyChooseUs = () => {
  return (
    <Container size="xl" py={90}>
      <Stack align="center" gap="md" mb={60}>
        <Text
          fw={700}
          c="blue"
          tt="uppercase"
          size="sm"
        >
          Why Choose Us
        </Text>

        <Title
          order={2}
          ta="center"
          maw={700}
        >
          Why Choose Nexflare Dynamics
        </Title>

        <Text
          ta="center"
          size="lg"
          c="dimmed"
          maw={800}
        >
          We combine innovation, technology, and industry expertise
          to deliver digital solutions that help businesses grow,
          optimize operations, and stay ahead of the competition.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <MotionPaper
              key={feature.title}
              p="xl"
              radius="xl"
              withBorder
              shadow="sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              style={{
                cursor: "pointer",
                height: "100%",
              }}
            >
              <Stack gap="md">
                <ThemeIcon
                  size={70}
                  radius="xl"
                  variant="light"
                  color="blue"
                >
                  <Icon size={34} />
                </ThemeIcon>

                <Title order={4}>
                  {feature.title}
                </Title>

                <Text
                  c="dimmed"
                  lh={1.8}
                >
                  {feature.description}
                </Text>
              </Stack>
            </MotionPaper>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default WhyChooseUs;