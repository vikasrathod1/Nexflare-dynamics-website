import React from "react";
import {
  Box,
  Badge,
  Button,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconDeviceMobile,
  IconLayoutGrid,
  IconBellRinging,
  IconShieldLock,
  IconArrowRight,
  IconPointFilled,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const features = [
  { icon: IconDeviceMobile,  title: "Cross-Platform Builds",     desc: "Single codebase for both Android and iOS using React Native" },
  { icon: IconLayoutGrid,    title: "Intuitive UI/UX Design",    desc: "Pixel-perfect interfaces that users love from the very first tap" },
  { icon: IconBellRinging,   title: "Push Notifications",        desc: "Real-time alerts and smart notifications to keep users engaged" },
  { icon: IconShieldLock,    title: "Offline Mode & Security",   desc: "Works without internet; encrypted data storage and secure APIs" },
];

const bullets = [
  "From design to Play Store / App Store in one engagement",
  "4.8★ average user rating across deployed apps",
  "50,000+ downloads across client applications",
  "Post-launch maintenance & feature updates included",
];

const MobileAppScreen = () => {
  const navigate = useNavigate();
  const isDark = useComputedColorScheme("light") === "dark";

  const accent      = isDark ? "#00D4C8"                    : "#0891B2";
  const accentDim   = isDark ? "rgba(0,212,200,0.12)"       : "rgba(8,145,178,0.10)";
  const surface     = isDark ? "rgba(255,255,255,0.04)"      : "rgba(255,255,255,0.85)";
  const surface2    = isDark ? "rgba(255,255,255,0.06)"      : "rgba(255,255,255,0.95)";
  const border      = isDark ? "rgba(255,255,255,0.08)"      : "rgba(37,99,235,0.12)";
  const textMain    = isDark ? "#ffffff"                    : "#0f172a";
  const textSub     = isDark ? "rgba(255,255,255,0.75)"      : "#334155";
  const textDim     = isDark ? "rgba(255,255,255,0.45)"      : "#64748b";
  const statGood    = isDark ? "#00D4C8"                    : "#0891B2";
  const statWarn    = isDark ? "#f87171"                    : "#ef4444";
  const statNeutral = isDark ? "rgba(255,255,255,0.75)"      : "#475569";
  const barEmpty    = isDark ? "rgba(255,255,255,0.10)"      : "rgba(37,99,235,0.10)";
  const btnOutline  = isDark ? "rgba(255,255,255,0.22)"      : "rgba(37,99,235,0.35)";
  const btnTextOut  = isDark ? "#ffffff"                    : "#1e40af";
  const btnPrimCol  = isDark ? "#0a0f1e"                    : "#ffffff";

  const imgBg    = isDark
    ? "linear-gradient(160deg,#162032 0%,#0a1520 60%,#071018 100%)"
    : "linear-gradient(160deg,#dbeafe 0%,#bfdbfe 60%,#93c5fd 100%)";
  const phoneBody   = isDark ? "#0f1a2b" : "#e2e8f0";
  const phoneScreen = isDark ? "#0a1420" : "#f8fafc";
  const botColor    = isDark ? "#00D4C8" : "#0891B2";

  const dashStats = [
    { label: "Total Downloads",    value: "50K+",  color: statGood    },
    { label: "Play Store Rating",  value: "4.8★",  color: statGood    },
    { label: "Daily Active Users", value: "8,200", color: statNeutral },
    { label: "Crash Rate",         value: "0.02%", color: statWarn    },
  ];

  return (
    <Container size="xl" py={{ base:50, md:80 }}>
      <Grid gutter={{ base:40, md:60 }} align="flex-start">

        {/* ══════════ LEFT — content ══════════ */}
        <Grid.Col span={{ base:12, md:6 }}>
          <motion.div
            initial={{ opacity:0, x:-30 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.7 }}
          >
            <Stack gap={20}>

              <Text fz={11} fw={700} style={{ color:accent, letterSpacing:2.5, textTransform:"uppercase" }}>
                Mobile Application
              </Text>

              <Text fz={12} fw={600} style={{ color:textDim, letterSpacing:1.5, textTransform:"uppercase" }}>
                Android &amp; iOS Development
              </Text>

              <Title order={1} style={{
                color:textMain, fontWeight:900,
                fontSize:"clamp(1.9rem,3.5vw,2.8rem)",
                lineHeight:1.12, letterSpacing:-0.5,
              }}>
                Turning Ideas Into Reality —
                <br />Mobile Apps
              </Title>

              <Text size="sm" lh={1.85} style={{ color:textSub, maxWidth:480 }}>
                We help you turn your ideas into reality with our application
                development services tailored to your business needs. From
                design to deployment, we deliver innovative and scalable
                solutions for every platform. Our apps combine beautiful
                interfaces with rock-solid performance, featuring
                cross-platform compatibility, real-time push notifications,
                and offline mode — built to scale from day one.
              </Text>

              <SimpleGrid cols={2} spacing={12} mt={4}>
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity:0, y:20 }}
                      animate={{ opacity:1, y:0 }}
                      transition={{ delay:0.15 + i*0.08, duration:0.5 }}
                    >
                      <Box
                        className="ma-feat-card"
                        style={{
                          background:surface, border:`1px solid ${border}`,
                          borderRadius:12, padding:"16px 14px", height:"100%",
                          backdropFilter:"blur(12px)",
                          transition:"border-color .25s, box-shadow .25s",
                        }}
                      >
                        <Group gap={8} mb={8} wrap="nowrap">
                          <Box style={{
                            width:28, height:28, borderRadius:8, background:accentDim,
                            display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
                          }}>
                            <Icon size={15} color={accent} />
                          </Box>
                          <Text size="xs" fw={700} style={{ color:textMain, lineHeight:1.3 }}>
                            {f.title}
                          </Text>
                        </Group>
                        <Text size="xs" lh={1.7} style={{ color:textDim }}>{f.desc}</Text>
                      </Box>
                    </motion.div>
                  );
                })}
              </SimpleGrid>

              <Stack gap={8} mt={4}>
                {bullets.map((b, i) => (
                  <Group key={i} gap={8} wrap="nowrap" align="flex-start">
                    <IconPointFilled size={10} color={accent} style={{ flexShrink:0, marginTop:5 }} />
                    <Text size="sm" style={{ color:textSub }}>{b}</Text>
                  </Group>
                ))}
              </Stack>

              <Group gap={12} mt={8}>
                <Button
                  size="md" radius="xl"
                  rightSection={<IconArrowRight size={16}/>}
                  style={{ background:accent, color:btnPrimCol, fontWeight:700, border:"none" }}
                  className="ma-btn"
                   onClick={()=> navigate("/contact")}
                >
                  Discuss Your App
                </Button>
                {/* <Button
                  size="md" radius="xl" variant="outline"
                  style={{ borderColor:btnOutline, color:btnTextOut }}
                  className="ma-btn"
                >
                  Learn More
                </Button> */}
              </Group>

            </Stack>
          </motion.div>
        </Grid.Col>

        {/* ══════════ RIGHT — visuals ══════════ */}
        <Grid.Col span={{ base:12, md:6 }}>
          <motion.div
            initial={{ opacity:0, x:30 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.7, delay:0.1 }}
          >
            <Stack gap={16}>

              {/* Hero image card */}
              <Box style={{
                borderRadius:16, overflow:"hidden", position:"relative",
                border:`1px solid ${border}`, height:240,
              }}>
                <Box style={{ position:"absolute", inset:0, background:imgBg }}>
                  {/* phone silhouette */}
                  <Box style={{
                    position:"absolute", left:"58%", bottom:"6%",
                    width:110, height:190, borderRadius:16,
                    background:phoneBody, border:`4px solid ${phoneBody}`,
                  }}>
                    <Box style={{
                      position:"absolute", inset:6, borderRadius:10,
                      background:phoneScreen,
                    }}>
                      {/* app grid icons */}
                      {[0,1,2,3,4,5].map(i=>(
                        <Box key={i} style={{
                          position:"absolute",
                          left:`${14 + (i%2)*46}%`, top:`${12 + Math.floor(i/2)*26}%`,
                          width:"32%", height:"18%", borderRadius:6,
                          background: i%3===0 ? accentDim : (isDark ? "rgba(255,255,255,0.06)" : "rgba(37,99,235,0.08)"),
                        }}/>
                      ))}
                    </Box>
                  </Box>

                  {/* android bot */}
                  <Box style={{
                    position:"absolute", left:"20%", bottom:0,
                    width:70, height:88, borderRadius:"30px 30px 8px 8px",
                    background:botColor,
                  }}>
                    <Box style={{
                      position:"absolute", top:-14, left:14,
                      width:4, height:16, background:botColor,
                      transform:"rotate(-20deg)", borderRadius:2,
                    }}/>
                    <Box style={{
                      position:"absolute", top:-14, right:14,
                      width:4, height:16, background:botColor,
                      transform:"rotate(20deg)", borderRadius:2,
                    }}/>
                    <Box style={{
                      position:"absolute", top:14, left:16, width:8, height:8,
                      borderRadius:"50%", background: isDark ? "#0a1420" : "#ffffff",
                    }}/>
                    <Box style={{
                      position:"absolute", top:14, right:16, width:8, height:8,
                      borderRadius:"50%", background: isDark ? "#0a1420" : "#ffffff",
                    }}/>
                  </Box>

                  {/* ambient glow */}
                  <Box style={{
                    position:"absolute", right:"6%", top:"8%",
                    width:70, height:70, borderRadius:"50%",
                    background: accentDim, filter:"blur(10px)",
                  }}/>
                  <Box style={{
                    position:"absolute", left:"4%", top:"10%",
                    width:50, height:50, borderRadius:"50%",
                    background: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.4)",
                    filter:"blur(8px)",
                  }}/>
                </Box>

                <Box style={{
                  position:"absolute", bottom:0, left:0, right:0,
                  display:"flex", justifyContent:"space-between", alignItems:"flex-end",
                  padding:"12px 16px",
                  background:"linear-gradient(0deg,rgba(0,0,0,0.65) 0%,transparent 100%)",
                }}>
                  <Text fw={700} size="sm" c="white">Mobile Apps</Text>
                  <Badge size="sm" style={{
                    background:accentDim, color:accent,
                    border:`1px solid ${accent}55`, fontWeight:700, letterSpacing:1,
                  }}>
                    ANDROID + IOS
                  </Badge>
                </Box>
              </Box>

              {/* Dashboard card */}
              <motion.div
                initial={{ opacity:0, y:20 }}
                animate={{ opacity:1, y:0 }}
                transition={{ delay:0.35, duration:0.55 }}
              >
                <Box style={{
                  background:surface2, border:`1px solid ${border}`,
                  borderRadius:16, padding:"20px 20px 16px",
                  position:"relative", overflow:"hidden", backdropFilter:"blur(12px)",
                }}>
                  <Box style={{
                    position:"absolute", top:0, left:0, right:0, height:2,
                    background:`linear-gradient(90deg,${accent},#6366F1)`,
                  }}/>

                  <Group justify="space-between" mb={18} align="center">
                    <Group gap={6}>
                      {["#ef4444","#f59e0b","#22c55e"].map((c,i)=>(
                        <Box key={i} style={{ width:10, height:10, borderRadius:"50%", background:c }}/>
                      ))}
                    </Group>
                    <Text fz={11} style={{ color:textDim, letterSpacing:1 }}>
                      App Analytics — Live
                    </Text>
                  </Group>

                  <Stack gap={10}>
                    {dashStats.map(({ label, value, color }, i) => (
                      <Group key={i} justify="space-between" align="center">
                        <Text size="xs" style={{ color:textDim }}>{label}</Text>
                        <Text size="xs" fw={700} style={{ color }}>{value}</Text>
                      </Group>
                    ))}
                  </Stack>

                  <Group gap={8} mt={18} wrap="nowrap">
                    {[true,false,true,true,false].map((fill, i) => (
                      <Box key={i} style={{
                        flex:`${[26,14,24,20,16][i]}%`, height:8, borderRadius:4, minWidth:8,
                        background: fill ? accent : barEmpty,
                      }}/>
                    ))}
                  </Group>
                </Box>
              </motion.div>

            </Stack>
          </motion.div>
        </Grid.Col>

      </Grid>

      <style>{`
        .ma-feat-card:hover {
          border-color: ${accent}55 !important;
          box-shadow: 0 8px 28px ${accentDim} !important;
        }
        .ma-btn {
          transition: transform .22s ease, box-shadow .22s ease !important;
        }
        .ma-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 28px ${accentDim} !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .ma-feat-card, .ma-btn { transition: none !important; }
        }
      `}</style>
    </Container>
  );
};

export default MobileAppScreen;