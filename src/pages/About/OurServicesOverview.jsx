import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Paper,
  ThemeIcon,
  Stack,
  Badge,
} from "@mantine/core";
import {
  IconWorld,
  IconDeviceMobile,
  IconBuilding,
  IconUsersGroup,
  IconBriefcase,
  IconRobot,
  IconCloud,
  IconBrandGoogle,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionPaper = motion.create(Paper);

const services = [
  {
    title: "Web Development",
    description:
      "Modern, scalable, and responsive web applications built using the latest technologies to deliver exceptional user experiences.",
    icon: IconWorld,
    color: "blue",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform and native mobile applications designed to engage users and accelerate business growth.",
    icon: IconDeviceMobile,
    color: "cyan",
  },
  {
    title: "ERP Development",
    description:
      "Enterprise resource planning solutions that streamline operations and improve business efficiency.",
    icon: IconBuilding,
    color: "indigo",
  },
  {
    title: "CRM Development",
    description:
      "Customer relationship management systems that enhance customer engagement and sales performance.",
    icon: IconUsersGroup,
    color: "grape",
  },
  {
    title: "HRMS Solutions",
    description:
      "Comprehensive HR software for employee management, payroll, attendance, and workforce optimization.",
    icon: IconBriefcase,
    color: "teal",
  },
  {
    title: "AI Solutions",
    description:
      "AI-powered applications and automation tools that improve decision-making and operational efficiency.",
    icon: IconRobot,
    color: "violet",
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure and scalable cloud infrastructure services that support modern digital transformation initiatives.",
    icon: IconCloud,
    color: "sky",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies to increase visibility, generate leads, and strengthen your online presence.",
    icon: IconBrandGoogle,
    color: "orange",
  },
];

const OurServicesOverview = () => {
  return (
    <Container size="xl" >
      <Stack align="center" gap="md" mb={60}>
        <Text
          fw={700}
          c="blue"
          tt="uppercase"
          size="sm"
        >
          Our Services
        </Text>

        <Title
          order={2}
          ta="center"
          maw={700}
        >
          Comprehensive Technology Solutions
        </Title>

        <Text
          ta="center"
          c="dimmed"
          size="lg"
          maw={850}
        >
          From custom software development to AI-powered solutions,
          we provide end-to-end technology services that help
          businesses innovate, scale, and succeed in the digital era.
        </Text>
      </Stack>

      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing="xl"
      >
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <MotionPaper
              key={service.title}
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
                  size={65}
                  radius="xl"
                  variant="light"
                  color={service.color}
                >
                  <Icon size={32} />
                </ThemeIcon>

                <Badge
                  variant="light"
                  color={service.color}
                  w="fit-content"
                >
                  Service
                </Badge>

                <Title order={4}>
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
            </MotionPaper>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default OurServicesOverview;