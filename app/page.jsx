'use client';

import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import SparkleParticles from './components/SparkleParticles';

const HomePage = () => {
  const router = useRouter();

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #191414 0%, #121212 100%)',
        textAlign: 'center',
        p: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Sparkle Particles Background */}
      <SparkleParticles
        className="sparkle-particles"
        particleCount={80}
        maxParticleSize={4}
        minParticleSize={1}
        particleColor="#1DB954"
        animationSpeed={0.3}
        sparkleOpacity={0.7}
        enableHover={true}
        enableClick={true}
        backgroundColor="transparent"
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            mb: 4,
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: { xs: '2px', sm: '3px', md: '4px' },
            fontSize: { xs: '3.5rem', sm: '5rem', md: '5rem', lg: '6rem' }, // Responsive font sizes
            background:
              'linear-gradient(to bottom, #ffffff 0%, #ffffff 5%, #000000 98%, #000000 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
          #Morphosis
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#fff',
            mb: 6,
            fontFamily: "'Roboto', sans-serif",
            opacity: 0.85,
            maxWidth: '600px',
            mx: 'auto',
            zIndex: 10,
            fontSize: { xs: '0.9rem', sm: '1.2rem', md: '1.5rem' }, // Responsive subtext size
          }}
        >
          Transform your fitness journey with AI-powered{' '}
          <Box component="span" sx={{ color: '#1DB954' }}>
            workout
          </Box>{' '}
          and{' '}
          <Box component="span" sx={{ color: '#1DB954' }}>
            diet plans
          </Box>
          . Tailored just for you.
        </Typography>
      </motion.div>

      {/* Action Buttons */}
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          flexDirection: { xs: 'column', sm: 'row' },
          zIndex: 10,
        }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1DB954',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              py: 1.5,
              px: { xs: 3, sm: 4 },
              borderRadius: '50px',
              textTransform: 'none',
              boxShadow: '0 0 15px rgba(29,185,84,0.6)',
              '&:hover': {
                backgroundColor: '#1ed760',
                boxShadow: '0 0 25px rgba(29,185,84,0.9)',
              },
            }}
            onClick={() => router.push('/workout')}
          >
            Get Curated Workout Plan
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#1DB954',
              color: '#1DB954',
              fontWeight: 'bold',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              py: 1.5,
              px: { xs: 3, sm: 4 },
              borderRadius: '50px',
              textTransform: 'none',
              boxShadow: '0 0 15px rgba(29,185,84,0.4)',
              '&:hover': {
                backgroundColor: 'rgba(29,185,84,0.1)',
                borderColor: '#1ed760',
                color: '#1ed760',
                boxShadow: '0 0 25px rgba(29,185,84,0.7)',
              },
            }}
            onClick={() => router.push('/diet')}
          >
            Get Expert Diet Plan
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default HomePage;
