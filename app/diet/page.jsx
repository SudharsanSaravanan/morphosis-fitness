'use client';

import React, { useState, useCallback } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Paper,
} from "@mui/material";
import { motion } from 'framer-motion';

const DietPlan = () => {
  const [dietWeight, setDietWeight] = useState("");
  const [dietHeight, setDietHeight] = useState("");
  const [dietTargetWeight, setDietTargetWeight] = useState("");
  const [dietLifestyle, setDietLifestyle] = useState("");
  const [dietWantFast, setDietWantFast] = useState("");
  const [dietAge, setDietAge] = useState("");
  const [dietGender, setDietGender] = useState("");
  const [dietAllergies, setDietAllergies] = useState("");
  const [dietPreferences, setDietPreferences] = useState("");
  const [dietPlan, setDietPlan] = useState("");
  const [dietLoading, setDietLoading] = useState(false);

  // Memoized event handlers
  const handleWeightChange = useCallback((e) => {
    setDietWeight(e.target.value);
  }, []);

  const handleHeightChange = useCallback((e) => {
    setDietHeight(e.target.value);
  }, []);

  const handleTargetWeightChange = useCallback((e) => {
    setDietTargetWeight(e.target.value);
  }, []);

  const handleLifestyleChange = useCallback((e) => {
    setDietLifestyle(e.target.value);
  }, []);

  const handleWantFastChange = useCallback((e) => {
    setDietWantFast(e.target.value);
  }, []);

  const handleAgeChange = useCallback((e) => {
    setDietAge(e.target.value);
  }, []);

  const handleGenderChange = useCallback((e) => {
    setDietGender(e.target.value);
  }, []);

  const handleAllergiesChange = useCallback((e) => {
    setDietAllergies(e.target.value);
  }, []);

  const handlePreferencesChange = useCallback((e) => {
    setDietPreferences(e.target.value);
  }, []);

  const handleGenerateDiet = useCallback(() => {
    setDietLoading(true);
    setTimeout(() => {
      setDietPlan(
        "Day 1: Breakfast: Oatmeal (200kcal)\nLunch: Grilled Chicken Salad (350kcal)\nSnack: Almonds (100kcal)\nDinner: Salmon with Veggies (400kcal)\n...etc for a 7-day plan"
      );
      setDietLoading(false);
    }, 2000);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #191414 0%, #121212 100%)",
        p: { xs: 2, sm: 4 },
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          maxWidth: 1200,
          width: '100%',
          mt: { xs: 4, sm: 6 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 3, md: 4 },
          alignItems: 'flex-start',
        }}
      >
        {/* Left Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ flex: 1, width: '100%' }}
        >
          <Box
            sx={{
              p: { xs: 3, sm: 4 },
              backgroundColor: "#1e1e1e",
              borderRadius: 4,
              boxShadow: "0 0 20px rgba(0,0,0,0.6)",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              fontWeight="bold"
              textAlign="center"
              sx={{
                color: "#1DB954",
                textShadow: "0px 0px 10px rgba(29,185,84,0.7)",
                mb: 4,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Diet Plan Generator
            </Typography>

            <TextField
              label="Current Weight (kg)"
              fullWidth
              margin="normal"
              value={dietWeight}
              onChange={handleWeightChange}
              variant="outlined"
              InputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#333" },
                  "&:hover fieldset": { borderColor: "#1DB954" },
                  "&.Mui-focused fieldset": { borderColor: "#1DB954" },
                },
              }}
            />
            <TextField
              label="Height (cm)"
              fullWidth
              margin="normal"
              value={dietHeight}
              onChange={handleHeightChange}
              variant="outlined"
              InputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#333" },
                  "&:hover fieldset": { borderColor: "#1DB954" },
                  "&.Mui-focused fieldset": { borderColor: "#1DB954" },
                },
              }}
            />
            <TextField
              label="Target Weight (kg)"
              fullWidth
              margin="normal"
              value={dietTargetWeight}
              onChange={handleTargetWeightChange}
              variant="outlined"
              InputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#333" },
                  "&:hover fieldset": { borderColor: "#1DB954" },
                  "&.Mui-focused fieldset": { borderColor: "#1DB954" },
                },
              }}
            />
            <TextField
              label="Lifestyle (sedentary, active, etc.)"
              fullWidth
              margin="normal"
              value={dietLifestyle}
              onChange={handleLifestyleChange}
              variant="outlined"
              InputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#333" },
                  "&:hover fieldset": { borderColor: "#1DB954" },
                  "&.Mui-focused fieldset": { borderColor: "#1DB954" },
                },
              }}
            />
            <TextField
              label="Do you want to fast? (yes/no, details)"
              fullWidth
              margin="normal"
              value={dietWantFast}
              onChange={handleWantFastChange}
              variant="outlined"
              InputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#333" },
                  "&:hover fieldset": { borderColor: "#1DB954" },
                  "&.Mui-focused fieldset": { borderColor: "#1DB954" },
                },
              }}
            />
            <TextField
              label="Age"
              fullWidth
              margin="normal"
              value={dietAge}
              onChange={handleAgeChange}
              variant="outlined"
              InputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#333" },
                  "&:hover fieldset": { borderColor: "#1DB954" },
                  "&.Mui-focused fieldset": { borderColor: "#1DB954" },
                },
              }}
            />
            <TextField
              label="Gender"
              fullWidth
              margin="normal"
              value={dietGender}
              onChange={handleGenderChange}
              variant="outlined"
              InputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#333" },
                  "&:hover fieldset": { borderColor: "#1DB954" },
                  "&.Mui-focused fieldset": { borderColor: "#1DB954" },
                },
              }}
            />
            <TextField
              label="Allergies"
              fullWidth
              margin="normal"
              value={dietAllergies}
              onChange={handleAllergiesChange}
              variant="outlined"
              InputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#333" },
                  "&:hover fieldset": { borderColor: "#1DB954" },
                  "&.Mui-focused fieldset": { borderColor: "#1DB954" },
                },
              }}
            />
            <TextField
              label="Preferences (vegetarian, etc.)"
              fullWidth
              margin="normal"
              value={dietPreferences}
              onChange={handlePreferencesChange}
              variant="outlined"
              InputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#333" },
                  "&:hover fieldset": { borderColor: "#1DB954" },
                  "&.Mui-focused fieldset": { borderColor: "#1DB954" },
                },
              }}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                py: 1.5,
                backgroundColor: "#1DB954",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "1.1rem",
                borderRadius: "50px",
                boxShadow: "0 0 15px rgba(29,185,84,0.6)",
                "&:hover": {
                  backgroundColor: "#1ed760",
                  boxShadow: "0 0 25px rgba(29,185,84,0.9)",
                },
              }}
              onClick={handleGenerateDiet}
            >
              Generate Diet Plan
            </Button>
          </Box>
        </motion.div>

        {/* Right Side: Output */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ flex: 1, width: '100%' }}
        >
          <Box
            sx={{
              p: { xs: 3, sm: 4 },
              backgroundColor: "#1e1e1e",
              borderRadius: 4,
              boxShadow: "0 0 20px rgba(0,0,0,0.6)",
              minHeight: { xs: '200px', md: '600px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: dietPlan || dietLoading ? 'flex-start' : 'center',
              alignItems: 'center',
            }}
          >
            {dietLoading ? (
              <Box sx={{ textAlign: "center" }}>
                <CircularProgress sx={{ color: "#1DB954" }} />
                <Typography variant="body2" mt={2} sx={{ color: "#aaa", fontFamily: "'Roboto', sans-serif" }}>
                  Generating your custom diet plan...
                </Typography>
              </Box>
            ) : dietPlan ? (
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  width: '100%',
                  borderRadius: 3,
                  backgroundColor: "#262626",
                  color: "#fff",
                  whiteSpace: "pre-wrap",
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "0.95rem",
                  maxHeight: "500px",
                  overflowY: "auto",
                  boxShadow: "0 0 15px rgba(0,0,0,0.6)",
                }}
              >
                {dietPlan}
              </Paper>
            ) : (
              <Typography
                variant="body1"
                sx={{
                  color: "#aaa",
                  fontFamily: "'Roboto', sans-serif",
                  textAlign: "center",
                }}
              >
                Your diet plan will appear here
              </Typography>
            )}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default DietPlan;