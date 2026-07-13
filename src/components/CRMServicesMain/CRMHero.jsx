import {
  Badge,
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";
const MotionBox = motion.create(Box);
const stats = [
  { value: "50+", label: "CRMs Built" },
  { value: "40%", label: "Avg. Sales Productivity Lift" },
  { value: "100%", label: "Custom-Fit" },
];
const CrmHero = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  // Added this function
  const handleFreeCrmConsultation = () => {
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.location.href = "/contact"; // Change this if your contact page route is different
    }
  };
  return (
    <Box
      component="section"
      py={180}
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "88vh",
        // display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background image */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: isDark ? "brightness(0.5)" : "brightness(0.95)",
        }}
      />
      {/* Theme-aware overlay */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? `
              linear-gradient(90deg, rgba(4,10,18,0.94) 0%, rgba(4,10,18,0.85) 42%, rgba(4,10,18,0.6) 68%, rgba(4,10,18,0.4) 100%),
              radial-gradient(circle at 15% 20%, rgba(20,184,166,.12), transparent 40%)
            `
            : `
              linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.9) 42%, rgba(255,255,255,0.65) 68%, rgba(255,255,255,0.4) 100%),
              radial-gradient(circle at 15% 20%, rgba(20,184,166,.08), transparent 40%)
            `,
        }}
      />
      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          maw={640}
        >
          <Stack gap={30}>
            {/* Badge */}
            <Badge
              radius="xl"
              size="xl"
              color="teal"
              variant={isDark ? "light" : "outline"}
              px={22}
              py={14}
              style={{
                width: "fit-content",
                letterSpacing: 1,
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              ● Custom Software Development
            </Badge>
            {/* Heading */}
            <Title
              style={{
                fontSize: "clamp(2.8rem, 6vw, 4.2rem)",
                lineHeight: 1.05,
                fontWeight: 900,
                color: isDark ? "#ffffff" : "#0b1326",
              }}
            >
              CRM{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "#0d9488", to: "#14b8a6" }}
              >
                Development
              </Text>
            </Title>
            {/* Description */}
            <Text
              lh={1.8}
              style={{
                fontSize: 18,
                color: isDark ? "rgba(255,255,255,.75)" : "rgba(11,19,38,.75)",
              }}
            >
              Build a CRM that fits your sales process exactly — not the
              other way around. From lead tracking to automated
              follow-ups, we build systems your team will actually use.
            </Text>
            {/* Buttons */}
            <Group mt={10}>
              <Button 
                size="lg" 
                radius="xl" 
                color="teal" 
                h={54} 
                px={34}
                onClick={handleFreeCrmConsultation}   
              >
                Get Free CRM Consultation
              </Button>
              {/* <Button size="lg" radius="xl" variant="default" h={54} px={30}>
                Explore Features
              </Button> */}
            </Group>
            {/* Stats */}
            <Group mt={30} gap={48}>
              {stats.map((stat, index) => (
                <Box key={index}>
                  <Title
                    order={1}
                    c="teal"
                    fw={900}
                    style={{
                      fontSize: "clamp(26px, 3vw, 34px)",
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.value}
                  </Title>
                  <Text
                    tt="uppercase"
                    size="xs"
                    fw={600}
                    style={{
                      letterSpacing: 1,
                      color: isDark
                        ? "rgba(255,255,255,0.6)"
                        : "rgba(11,19,38,0.6)",
                    }}
                  >
                    {stat.label}
                  </Text>
                </Box>
              ))}
            </Group>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
};
export default CrmHero;