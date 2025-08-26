'use client';

import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

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
        background: 'linear-gradient(135deg, #191414 0%, #121212 100%)', // Spotify dark background
        textAlign: 'center',
        p: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Moving Background Shapes */}
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Small Circular Dots */}
        {[...Array(50)].map((_, i) => (
          <Box
            key={`dot-${i}`}
            sx={{
              position: 'absolute',
              width: '3px',
              height: '3px',
              backgroundColor: '#1DB954',
              borderRadius: '50%',
              opacity: 0.4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `drift-slow ${Math.random() * 20 + 20}s linear infinite`,
              animationDelay: `${Math.random() * 20}s`,
            }}
          />
        ))}
        {/* Diamond Shapes */}
        {[...Array(30)].map((_, i) => (
          <Box
            key={`diamond-${i}`}
            sx={{
              position: 'absolute',
              color: '#1ed760',
              opacity: 0.3,
              fontSize: `${Math.random() * 6 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `drift-reverse ${Math.random() * 25 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 25}s`,
            }}
          >
            ◆
          </Box>
        ))}
        {/* Plus Signs */}
        {[...Array(25)].map((_, i) => (
          <Box
            key={`plus-${i}`}
            sx={{
              position: 'absolute',
              color: '#1DB954',
              opacity: 0.35,
              fontSize: `${Math.random() * 5 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `drift-diagonal ${Math.random() * 18 + 18}s linear infinite`,
              animationDelay: `${Math.random() * 18}s`,
            }}
          >
            ✦
          </Box>
        ))}
      </Box>

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
            letterSpacing: '4px',
            background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 5%, #000000 98%, #000000 100%)', // white → black gradient
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
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
        }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1DB954', // Spotify green
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              py: 1.5,
              px: 4,
              borderRadius: '50px',
              textTransform: 'none',
              boxShadow: '0 0 15px rgba(29,185,84,0.6)',
              '&:hover': {
                backgroundColor: '#1ed760', // lighter green
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
              fontSize: '1.1rem',
              py: 1.5,
              px: 4,
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

      <style jsx>{`
        @keyframes drift-slow {
          0% { transform: translate(0, 0); }
          25% { transform: translate(15px, -20px); }
          50% { transform: translate(-10px, -15px); }
          75% { transform: translate(-20px, 10px); }
          100% { transform: translate(0, 0); }
        }
        
        @keyframes drift-reverse {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-25px, 35px) rotate(-120deg); }
          66% { transform: translate(25px, -25px) rotate(-240deg); }
          100% { transform: translate(0, 0) rotate(-360deg); }
        }
        
        @keyframes drift-diagonal {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          50% { transform: translate(40px, -40px) rotate(180deg) scale(1.2); }
          100% { transform: translate(0, 0) rotate(360deg) scale(1); }
        }
      `}</style>
    </Container>
  );
};

export default HomePage;