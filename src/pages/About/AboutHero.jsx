import { Container, Title, Text, Button, Stack, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <Container size="xl" py={120}>
      <Stack align="center" gap="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Text
            ta="center"
            fw={700}
            c="blue"
            size="sm"
            tt="uppercase"
          >
            About Nexflare Dynamics
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title
            order={1}
            ta="center"
            maw={900}
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.2,
            }}
          >
            Transforming Ideas Into Powerful Digital Solutions
          </Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Text
            ta="center"
            c="dimmed"
            maw={800}
            size="lg"
            lh={1.8}
          >
            At Nexflare Dynamics, we help businesses accelerate growth through
            innovative software solutions, custom application development, and
            digital transformation services. We deliver scalable, secure, and
            user-centric technology that empowers organizations to achieve
            their goals.
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <Group justify="center">
            <Button
              component={Link}
              to="/contact"
              size="lg"
              radius="xl"
            >
              Get Started
            </Button>

            <Button
              component={Link}
              to="/services"
              variant="outline"
              size="lg"
              radius="xl"
            >
              Explore Services
            </Button>
          </Group>
        </motion.div>
      </Stack>
    </Container>
  );
};

export default AboutHero;