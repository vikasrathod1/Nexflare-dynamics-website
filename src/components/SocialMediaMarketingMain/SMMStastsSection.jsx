import React from 'react';
import { Box, Text, Container, SimpleGrid, useComputedColorScheme } from '@mantine/core';

const SMMStastsSection = () => {
  const computedColorScheme = useComputedColorScheme('light');

  const stats = [
    {
      number: '10M+',
      label: 'Total Organic Reach',
    },
    {
      number: '500%',
      label: 'Avg. Engagement Increase',
    },
    {
      number: '200K+',
      label: 'Followers Grown for Clients',
    },
    {
      number: '88%',
      label: 'Client Satisfaction Rate',
    },
  ];

  return (
    <Box
      py={100}
      style={{
        background:
          computedColorScheme === 'dark'
            ? `
              radial-gradient(circle at top left, rgba(37,99,235,.12), transparent 40%),
              radial-gradient(circle at bottom right, rgba(6,182,212,.08), transparent 40%),
              linear-gradient(180deg, #08111f 0%, #0b1326 50%, #060d18 100%)
            `
            : `
              radial-gradient(circle at top left, rgba(37,99,235,.06), transparent 40%),
              radial-gradient(circle at bottom right, rgba(6,182,212,.05), transparent 40%),
              linear-gradient(180deg, #ffffff 0%, #f8fbff 50%, #eef7ff 100%)
            `,
      }}
    >
      <Container size="lg">
        <Box ta="center" mb={60}>
          <Text
            size="sm"
            fw={600}
            c="#14b8a6"
            style={{
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            RESULTS
          </Text>

          <Text
            size={48}
            fw={900}
            lh={1.1}
            mt={16}
            style={{
              color: computedColorScheme === 'dark' ? '#ffffff' : '#0f172a',
              fontSize: 'clamp(2.2rem, 5vw, 3rem)',
            }}
          >
            Numbers That{' '}
            <Text
              component="span"
              c="#14b8a6"
              inherit
            >
              Prove It
            </Text>
          </Text>
        </Box>

        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: 20, md: 24 }}
        >
          {stats.map((stat, index) => (
            <Box
              key={index}
              p={32}
              style={{
                backgroundColor:
                  computedColorScheme === 'dark' ? '#0f172a' : '#ffffff',
                borderRadius: '16px',
                border: computedColorScheme === 'dark'
                  ? '1px solid rgba(255,255,255,0.08)'
                  : '1px solid rgba(15,23,42,0.08)',
                boxShadow: computedColorScheme === 'dark'
                  ? '0 10px 30px -15px rgba(0,0,0,0.6)'
                  : '0 10px 30px -15px rgba(15,23,42,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: computedColorScheme === 'dark'
                    ? '0 20px 40px -10px rgba(20,184,166,0.2)'
                    : '0 20px 40px -10px rgba(20,184,166,0.15)',
                },
              }}
            >
              <Text
                size={52}
                fw={900}
                c="#14b8a6"
                style={{
                  lineHeight: 1,
                  marginBottom: '12px',
                }}
              >
                {stat.number}
              </Text>

              <Text
                size="lg"
                fw={500}
                c={computedColorScheme === 'dark' ? '#e2e8f0' : '#334155'}
                style={{
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default SMMStastsSection;