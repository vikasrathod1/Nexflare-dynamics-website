import { Container, Grid, Title, Text, Stack, Paper, ThemeIcon } from "@mantine/core";
import { IconBuildingSkyscraper } from "@tabler/icons-react";
import { motion } from "framer-motion";

const AboutCompany = () => {
  return (
    <Container size="xl">
      <Grid align="center">
        {/* Left Content */}
        <Grid.Col span={{ base: 12, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Stack gap="md">
              <Text
                fw={700}
                c="blue"
                tt="uppercase"
                size="sm"
              >
                Who We Are
              </Text>

              <Title order={2} size="h1">
                Empowering Businesses Through Innovation & Technology
              </Title>

              <Text size="lg" c="dimmed" lh={1.8}>
                Nexflare Dynamics is a leading software development company
                focused on delivering innovative digital solutions for
                startups, SMEs, and enterprises. We specialize in creating
                scalable web applications, mobile apps, ERP systems, CRM
                platforms, HRMS solutions, cloud-based applications, and
                AI-powered software products.
              </Text>

              <Text size="lg" c="dimmed" lh={1.8}>
                Our team combines technical expertise, creative thinking, and
                business understanding to develop solutions that improve
                operational efficiency, enhance customer experiences, and
                accelerate business growth.
              </Text>

              <Text size="lg" c="dimmed" lh={1.8}>
                We believe technology should simplify processes, solve real
                business challenges, and create measurable value. Every
                project we undertake is driven by innovation, quality, and a
                commitment to delivering exceptional results.
              </Text>
            </Stack>
          </motion.div>
        </Grid.Col>

        {/* Right Card */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Paper
              shadow="lg"
              radius="xl"
              p="xl"
              withBorder
            >
              <Stack align="center" gap="md">
                <ThemeIcon
                  size={80}
                  radius="xl"
                  variant="light"
                >
                  <IconBuildingSkyscraper size={42} />
                </ThemeIcon>

                <Title order={3} ta="center">
                  Trusted Technology Partner
                </Title>

                <Text ta="center" c="dimmed" lh={1.8}>
                  We help businesses transform ideas into powerful digital
                  products through strategic planning, modern technologies,
                  and customer-focused development practices.
                </Text>
              </Stack>
            </Paper>
          </motion.div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default AboutCompany;