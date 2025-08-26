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

const WorkoutPlan = () => {
  const [workoutGoal, setWorkoutGoal] = useState("");
  const [workoutWeight, setWorkoutWeight] = useState("");
  const [workoutHeight, setWorkoutHeight] = useState("");
  const [workoutNote, setWorkoutNote] = useState("");
  const [workoutTargetWeight, setWorkoutTargetWeight] = useState("");
  const [workoutType, setWorkoutType] = useState("");
  const [workoutPlan, setWorkoutPlan] = useState("");
  const [workoutLoading, setWorkoutLoading] = useState(false);

  // Memoized event handlers
  const handleGoalChange = useCallback((e) => {
    setWorkoutGoal(e.target.value);
  }, []);

  const handleWeightChange = useCallback((e) => {
    setWorkoutWeight(e.target.value);
  }, []);

  const handleHeightChange = useCallback((e) => {
    setWorkoutHeight(e.target.value);
  }, []);

  const handleNoteChange = useCallback((e) => {
    setWorkoutNote(e.target.value);
  }, []);

  const handleTargetWeightChange = useCallback((e) => {
    setWorkoutTargetWeight(e.target.value);
  }, []);

  const handleTypeChange = useCallback((e) => {
    setWorkoutType(e.target.value);
  }, []);

  const handleGenerateWorkout = useCallback(() => {
    setWorkoutLoading(true);
    setTimeout(() => {
      setWorkoutPlan(
        "Day 1: Push (Chest, Shoulders, Triceps)\nDay 2: Pull (Back, Biceps)\nDay 3: Legs & Core\n...etc for a 7-day split"
      );
      setWorkoutLoading(false);
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
              Workout Plan Generator
            </Typography>

            <TextField
              label="Goal"
              fullWidth
              margin="normal"
              value={workoutGoal}
              onChange={handleGoalChange}
              variant="outlined"
              multiline
              rows={3}
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
              label="Current Weight (kg)"
              fullWidth
              margin="normal"
              value={workoutWeight}
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
              value={workoutHeight}
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
              label="Note"
              fullWidth
              margin="normal"
              value={workoutNote}
              onChange={handleNoteChange}
              variant="outlined"
              multiline
              rows={3}
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
              value={workoutTargetWeight}
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
              label="Type of Workout (cut, bulk, lean bulk)"
              fullWidth
              margin="normal"
              value={workoutType}
              onChange={handleTypeChange}
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
              onClick={handleGenerateWorkout}
            >
              Generate Workout Plan
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
              justifyContent: workoutPlan || workoutLoading ? 'flex-start' : 'center',
              alignItems: 'center',
            }}
          >
            {workoutLoading ? (
              <Box sx={{ textAlign: "center" }}>
                <CircularProgress sx={{ color: "#1DB954" }} />
                <Typography variant="body2" mt={2} sx={{ color: "#aaa", fontFamily: "'Roboto', sans-serif" }}>
                  Generating your custom workout plan...
                </Typography>
              </Box>
            ) : workoutPlan ? (
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
                {workoutPlan}
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
                Your workout plan will appear here
              </Typography>
            )}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default WorkoutPlan;