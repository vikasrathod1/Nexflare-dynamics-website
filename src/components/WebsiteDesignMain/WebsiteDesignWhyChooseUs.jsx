import { Box, Container, SimpleGrid, Stack, Text, useComputedColorScheme } from "@mantine/core";

const features = [
  "Dedicated designer assigned to your project",
  "Full brand alignment — every page feels like you",
  "Mobile-first approach for all designs",
  "2 rounds of revisions included as standard",
  "Delivered with a Figma design system file",
  "Accessibility compliant (WCAG 2.1)",
];

const WebsiteDesignWhyChooseUs = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Added this function
  const handleStartProject = () => {
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Redirect if contact form is on another page
      window.location.href = "/contact"; // Change this if your contact page route is different
    }
  };

  return (
    <Box component="section" py={{ base: 60, md: 90 }}>
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 40, md: 60 }}>
          {/* Left image */}
          <Box
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: isDark
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid rgba(11,19,38,0.08)",
              minHeight: 320,
            }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1661389425744-c31ddd55c7b6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
              alt="Design swatches, iPad sketches, and creative workspace"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>

          {/* Right content */}
          <Box>
            {/* Label */}
            <Text
              fw={700}
              size="sm"
              mb={8}
              style={{
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#06b6d4",
              }}
            >
              Why Choose Us
            </Text>

            {/* Heading */}
            <Text
              fw={800}
              mb={20}
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                lineHeight: 1.2,
                color: isDark ? "#ffffff" : "#0b1326",
              }}
            >
              Design That{" "}
              <Text
                component="span"
                inherit
                style={{
                  background: "linear-gradient(90deg, #2563eb, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Drives Results
              </Text>
            </Text>

            {/* Subtitle */}
            <Text
              mb={28}
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: isDark ? "rgba(255,255,255,0.65)" : "rgba(11,19,38,0.65)",
              }}
            >
              We don't just make websites look good — we design them to perform. Every decision is backed by data, strategy, and deep UX expertise.
            </Text>

            {/* Feature list */}
            <Stack gap={16} mb={36}>
              {features.map((feature, index) => (
                <Box
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                  }}
                >
                  <Text
                    fw={700}
                    style={{
                      color: "#06b6d4",
                      fontSize: 15,
                      lineHeight: 1.6,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </Text>
                  <Text
                    style={{
                      fontSize: 15.5,
                      lineHeight: 1.6,
                      color: isDark ? "rgba(255,255,255,0.75)" : "rgba(11,19,38,0.75)",
                    }}
                  >
                    {feature}
                  </Text>
                </Box>
              ))}
            </Stack>

            {/* Button */}
            <Box
              component="button"
              style={{
                padding: "16px 32px",
                borderRadius: 999,
                border: "none",
                background: "linear-gradient(90deg, #2563eb, #06b6d4)",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(6,182,212,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onClick={handleStartProject}
            >
              Start Your Project
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default WebsiteDesignWhyChooseUs;