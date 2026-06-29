import {
  Accordion,
  Box,
  Container,
  Stack,
  Text,
  Title,
  ThemeIcon,
} from "@mantine/core";
import { IconHelpCircle } from "@tabler/icons-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I apply for a job at Nexflare Dynamics?",
    answer:
      "Browse our current openings, select the role that matches your skills, and click the 'Apply Now' button. Fill out the application form and upload your latest resume.",
  },
  {
    question: "What does the hiring process look like?",
    answer:
      "Our hiring process includes application screening, an HR discussion, a technical interview, a final interview with the hiring manager, and an offer for selected candidates.",
  },
  {
    question: "Do you offer internships?",
    answer:
      "Yes. We regularly offer internship opportunities for students and fresh graduates who are passionate about software development, UI/UX design, QA, and digital marketing.",
  },
  {
    question: "Do you provide remote or hybrid work opportunities?",
    answer:
      "Depending on the role and project requirements, we offer onsite, hybrid, and remote opportunities to ensure flexibility for our team members.",
  },
  {
    question: "What employee benefits do you offer?",
    answer:
      "Our employees enjoy competitive salaries, career growth opportunities, learning programs, flexible work culture, recognition programs, and a collaborative environment.",
  },
  {
    question: "How long does the hiring process take?",
    answer:
      "The hiring process usually takes between one and three weeks, depending on the position and interview availability.",
  },
];

const CareerFAQ = () => {
  return (
    <Box py={90}>
      <Container size="lg">
        <Stack align="center" gap="md" mb={50}>
          <ThemeIcon
            size={70}
            radius="xl"
            color="blue"
            variant="light"
          >
            <IconHelpCircle size={36} />
          </ThemeIcon>

          <Text
            c="blue"
            fw={700}
            tt="uppercase"
            size="sm"
          >
            Frequently Asked Questions
          </Text>

          <Title
            order={2}
            ta="center"
          >
            Have Questions? We've Got Answers
          </Title>

          <Text
            ta="center"
            maw={700}
            c="dimmed"
            size="lg"
          >
            Find answers to the most common questions about our recruitment
            process, work culture, internships, and career opportunities.
          </Text>
        </Stack>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion
            variant="separated"
            radius="lg"
            chevronPosition="right"
          >
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`faq-${index}`}
              >
                <Accordion.Control>
                  <Text fw={600}>{faq.question}</Text>
                </Accordion.Control>

                <Accordion.Panel>
                  <Text
                    c="dimmed"
                    lh={1.8}
                  >
                    {faq.answer}
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CareerFAQ;