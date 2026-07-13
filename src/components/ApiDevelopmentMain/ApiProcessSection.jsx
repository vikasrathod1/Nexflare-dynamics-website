import React from "react";
import {
  Box,
  Container,
  Text,
  Title,
  Grid,
  Stack,
  Group,
  Paper,
  useComputedColorScheme,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
const STANDARDS = [
  "RESTful design principles & correct HTTP status codes",
  "OpenAPI 3.0 spec & auto-generated interactive docs",
  "API versioning strategy (v1, v2) from day one",
  "Consistent JSON response structure & error formats",
  "Rate limiting, throttling & DDoS abuse prevention",
  "Full test coverage — unit, integration & load testing",
  "Webhook support & real-time event-driven architecture",
];
const TECH_STACK = [
  "Node.js",
  "Python / FastAPI",
  "Laravel / PHP",
  "GraphQL",
  "OAuth 2.0",
  "JWT",
  "Swagger / OpenAPI",
  "Postman",
];
const CodeLine = ({ children }) => (
  <Text
    component="div"
    style={{
      fontFamily:
        "ui-monospace, SFMono-Regular, 'JetBrains Mono', Menlo, monospace",
      fontSize: 14.5,
      lineHeight: 1.9,
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
    }}
  >
    {children}
  </Text>
);
const Key = ({ children }) => <span style={{ color: "#5eead4" }}>{children}</span>;
const Str = ({ children }) => <span style={{ color: "#4ade80" }}>{children}</span>;
const Num = ({ children }) => <span style={{ color: "#facc15" }}>{children}</span>;
const Punc = ({ children }) => (
  <span style={{ color: "rgba(226,232,240,0.5)" }}>{children}</span>
);
const ApiProcessSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  const textColor = isDark ? "#f8fafc" : "#0f172a";
  const mutedColor = isDark ? "rgba(226,232,240,0.75)" : "rgba(15,23,42,0.65)";
  return (
    <Box component="section" py={80}>
      <Container size="xl">
        <Grid gutter={48} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title
              order={2}
              fz={{ base: 30, sm: 40 }}
              fw={800}
              mb={20}
              style={{ lineHeight: 1.2 }}
            >
              <Text component="span" inherit style={{ color: textColor }}>
                APIs Built to{" "}
              </Text>
              <Text component="span" inherit style={{ color: "#14b8a6" }}>
                Industry Standards
              </Text>
            </Title>
            <Text fz={16} mb={32} style={{ color: mutedColor, lineHeight: 1.75 }}>
              Poor API design creates technical debt that compounds fast.
              Every API we build follows strict standards so future
              developers — including your own team — can work with it
              confidently.
            </Text>
            <Stack gap={16} mb={36}>
              {STANDARDS.map((item) => (
                <Group key={item} gap={12} wrap="nowrap" align="flex-start">
                  <IconCheck
                    size={18}
                    stroke={3}
                    color="#14b8a6"
                    style={{ marginTop: 3, flexShrink: 0 }}
                  />
                  <Text fz={15.5} style={{ color: mutedColor }}>
                    {item}
                  </Text>
                </Group>
              ))}
            </Stack>
            <Group gap={10}>
              {TECH_STACK.map((tech) => (
                <Box
                  key={tech}
                  px={18}
                  py={8}
                  style={{
                    borderRadius: 999,
                    fontSize: 14,
                    color: "#5eead4",
                    background: "rgba(20,184,166,0.08)",
                    border: "1px solid rgba(20,184,166,0.35)",
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Paper
              p={28}
              radius={16}
              style={{
                background: isDark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(15,23,42,0.03)",
                border: `1px solid ${
                  isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"
                }`,
              }}
            >
              <CodeLine>
                <span style={{ color: "rgba(226,232,240,0.4)" }}>
                  // Sample REST API Response — Nexflare Standard
                </span>
                {"\n"}
                <Punc>{"{ "}</Punc>
                <Key>&quot;status&quot;</Key>
                <Punc>{": "}</Punc>
                <Str>&quot;success&quot;</Str>
                <Punc>{", "}</Punc>
                <Key>&quot;code&quot;</Key>
                <Punc>{": "}</Punc>
                <Num>200</Num>
                <Punc>{", "}</Punc>
                <Key>&quot;data&quot;</Key>
                <Punc>{": { "}</Punc>
                <Key>&quot;id&quot;</Key>
                <Punc>{": "}</Punc>
                <Str>&quot;usr_4829&quot;</Str>
                <Punc>{", "}</Punc>
                <Key>&quot;name&quot;</Key>
                <Punc>{": "}</Punc>
                <Str>&quot;Arjun Shah&quot;</Str>
                <Punc>{", "}</Punc>
                <Key>&quot;email&quot;</Key>
                <Punc>{": "}</Punc>
                <Str>&quot;arjun@company.com&quot;</Str>
                <Punc>{", "}</Punc>
                <Key>&quot;role&quot;</Key>
                <Punc>{": "}</Punc>
                <Str>&quot;admin&quot;</Str>
                <Punc>{", "}</Punc>
                <Key>&quot;created_at&quot;</Key>
                <Punc>{": "}</Punc>
                <Str>&quot;2024-01-15T09:30:00Z&quot;</Str>
                <Punc>{" }, "}</Punc>
                <Key>&quot;meta&quot;</Key>
                <Punc>{": { "}</Punc>
                <Key>&quot;response_time&quot;</Key>
                <Punc>{": "}</Punc>
                <Str>&quot;42ms&quot;</Str>
                <Punc>{", "}</Punc>
                <Key>&quot;version&quot;</Key>
                <Punc>{": "}</Punc>
                <Str>&quot;v2.1&quot;</Str>
                <Punc>{", "}</Punc>
                <Key>&quot;request_id&quot;</Key>
                <Punc>{": "}</Punc>
                <Str>&quot;req_7f3a9c&quot;</Str>
                <Punc>{" } }"}</Punc>
              </CodeLine>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
export default ApiProcessSection;