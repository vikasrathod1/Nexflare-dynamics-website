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
  IconReceipt2,
  IconChartBar,
  IconCalculator,
  IconWorld,
  IconArrowRight,
  IconPointFilled,
  IconCheck,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const features = [
  { icon: IconReceipt2,   title: "Automated Bookkeeping",   desc: "Automated tracking of transactions, invoices, and expenses with zero manual errors" },
  { icon: IconChartBar,   title: "Comprehensive Reporting", desc: "P&L statements, balance sheets, and cash flow analysis in real time" },
  { icon: IconCalculator, title: "Tax Management",          desc: "Simplify calculations, ensure compliance, and stay audit-ready always" },
  { icon: IconWorld,      title: "Multi-Currency & Cloud",  desc: "Handle global transactions and access data securely from anywhere" },
];

const bullets = [
  "Reduces errors & ensures full financial compliance",
  "Intuitive design — no accounting background needed",
  "Minimizes operational costs through automation",
  "Integrates with NEX ERP and CRM seamlessly",
];

const FinanceScreen = () => {
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

  const imgBg = isDark
    ? "linear-gradient(160deg,#20180f 0%,#160f0a 55%,#0d0906 100%)"
    : "linear-gradient(160deg,#fef3c7 0%,#fde68a 55%,#fcd34d 100%)";
  const paperColor = isDark ? "#f1f0ea" : "#ffffff";
  const paperLine  = isDark ? "rgba(15,15,15,0.15)" : "rgba(15,15,15,0.10)";
  const deviceColor = isDark ? "#0f1a2b" : "#111827";

  const dashStats = [
    { label: "Revenue (Quarter)",   value: "₹84.2L",  color: statGood    },
    { label: "Tax Compliance",      value: "100% ✓",  color: statGood    },
    { label: "Invoices Processed",  value: "2,847",   color: statNeutral },
    { label: "Cost Savings",        value: "38%",     color: statWarn    },
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
                Finance Software
              </Text>

              <Text fz={12} fw={600} style={{ color:textDim, letterSpacing:1.5, textTransform:"uppercase" }}>
                Accounting &amp; Finance Software
              </Text>

              <Title order={1} style={{
                color:textMain, fontWeight:900,
                fontSize:"clamp(1.9rem,3.5vw,2.8rem)",
                lineHeight:1.12, letterSpacing:-0.5,
              }}>
                Take Control of Your
                <br />Financial Operations
              </Title>

              <Text size="sm" lh={1.85} style={{ color:textSub, maxWidth:480 }}>
                Our Accounting &amp; Finance Software is a comprehensive
                platform tailored to meet the needs of businesses of all
                sizes. From bookkeeping and expense tracking to tax
                management and financial reporting, our software integrates
                all aspects of financial operations into a seamless,
                centralized system — giving you real-time clarity and full
                compliance at all times.
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
                        className="fn-feat-card"
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
                  className="fn-btn"
                   onClick={()=> navigate("/contact")}
                >
                  Get a Demo
                </Button>
                {/* <Button
                  size="md" radius="xl" variant="outline"
                  style={{ borderColor:btnOutline, color:btnTextOut }}
                  className="fn-btn"
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
                  {/* desk papers */}
                  {[
                    { left:"18%", top:"18%", width:130, height:90, rot:-8 },
                    { left:"30%", top:"28%", width:120, height:85, rot:4 },
                    { left:"24%", top:"14%", width:110, height:78, rot:-2 },
                  ].map((p,i)=>(
                    <Box key={i} style={{
                      position:"absolute", left:p.left, top:p.top,
                      width:p.width, height:p.height, borderRadius:6,
                      background:paperColor, transform:`rotate(${p.rot}deg)`,
                      boxShadow:"0 6px 14px rgba(0,0,0,0.25)",
                      padding:10,
                    }}>
                      {[0,1,2,3].map(l=>(
                        <Box key={l} style={{
                          height:3, borderRadius:2, marginTop:l===0?4:8,
                          width: l===3 ? "50%" : "80%",
                          background:paperLine,
                        }}/>
                      ))}
                    </Box>
                  ))}

                  {/* calculator / device */}
                  <Box style={{
                    position:"absolute", left:"46%", top:"42%",
                    width:74, height:96, borderRadius:8,
                    background:deviceColor, boxShadow:"0 6px 14px rgba(0,0,0,0.3)",
                  }}>
                    <Box style={{
                      position:"absolute", left:8, right:8, top:8, height:22,
                      borderRadius:4, background:accentDim,
                    }}/>
                    <SimpleGrid cols={3} spacing={4} style={{ position:"absolute", left:8, right:8, top:36, bottom:8 }}>
                      {Array.from({length:9}).map((_,k)=>(
                        <Box key={k} style={{
                          borderRadius:3,
                          background: isDark ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.14)",
                        }}/>
                      ))}
                    </SimpleGrid>
                  </Box>

                  {/* pen */}
                  <Box style={{
                    position:"absolute", left:"64%", top:"30%",
                    width:6, height:80, borderRadius:3,
                    background:accent, transform:"rotate(35deg)",
                  }}/>

                  {/* ambient glow */}
                  <Box style={{
                    position:"absolute", right:"8%", top:"10%",
                    width:70, height:70, borderRadius:"50%",
                    background:accentDim, filter:"blur(10px)",
                  }}/>
                </Box>

                <Box style={{
                  position:"absolute", bottom:0, left:0, right:0,
                  display:"flex", justifyContent:"space-between", alignItems:"flex-end",
                  padding:"12px 16px",
                  background:"linear-gradient(0deg,rgba(0,0,0,0.65) 0%,transparent 100%)",
                }}>
                  <Text fw={700} size="sm" c="white">Finance Suite</Text>
                  <Badge size="sm" style={{
                    background:accentDim, color:accent,
                    border:`1px solid ${accent}55`, fontWeight:700, letterSpacing:1,
                  }}>
                    ACCOUNTING
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
                      Finance Dashboard — Q2
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
        .fn-feat-card:hover {
          border-color: ${accent}55 !important;
          box-shadow: 0 8px 28px ${accentDim} !important;
        }
        .fn-btn {
          transition: transform .22s ease, box-shadow .22s ease !important;
        }
        .fn-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 28px ${accentDim} !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .fn-feat-card, .fn-btn { transition: none !important; }
        }
      `}</style>
    </Container>
  );
};

export default FinanceScreen;