"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Card = () => {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [audioId, setAudioId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const audioRef = useRef(null);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setAudioUrl("");
    try {
      const response = await axios.post("/api/getSpeech", { text });
      console.log("API Response:", response.data); // Debugging output

      // Extract the URL and ID from the response
      const { id, url } = response.data;

      if (url && id) {
        // Log URL for debugging
        console.log("audioUrl:", url);

        // Set the audio URL and ID to state
        setAudioUrl(url);
        setAudioId(id);
      } else {
        setError("Audio URL or ID is not available.");
      }
    } catch (err) {
      console.error(
        "Request Error:",
        err.response ? err.response.data : err.message
      );
      setError("Failed to fetch speech data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (audioRef.current && audioUrl) {
      audioRef.current.src = audioUrl; // Update the audio source
      audioRef.current.load(); // Ensure the audio element reloads the new source

      // Optionally try to play the audio automatically
      audioRef.current.play().catch((err) => {
        console.error("Audio play error:", err);
        setError("Failed to play audio. Please click the play button.");
      });
    }
  }, [audioUrl]);

  return (
    <div style={styles.container}>
      {/* Sidebar is hidden on mobile, visible on desktop */}
      <div style={styles.sidebar}>
        <h2 style={styles.title}>Text to Speech</h2>
        <button style={styles.sidebarButton}>Profile</button>
        <button style={styles.sidebarButton}>Logout</button>
      </div>

      {/* Main content always visible */}
      <div style={styles.mainContent}>
        <h2 style={styles.logo}>Text to Speech</h2>{" "}
        {/* Visible in mobile as logo */}
        <textarea
          style={styles.textInput}
          onChange={handleInputChange}
          placeholder="Enter Text..."
          value={text}
        />
        <button
          style={styles.generateButton}
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}>
          {isLoading ? "Generating..." : "Generate Speech"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div style={styles.generatedContainer}>
          <p style={styles.generatedText}>Generated Speech</p>
          <div style={styles.audioBox}>
            {audioUrl && (
              <div>
                <audio ref={audioRef} controls>
                  <source src={audioUrl} />
                  Your browser does not support the audio element.
                </audio>
                <p>Audio ID: {audioId}</p>
              </div>
            )}
            <div style={styles.audioControls}>
              <button style={styles.controlButton}>Generate more</button>
              <button style={styles.downloadButton}>Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#F4F6F7",
    "@media (max-width: 768px)": {
      // Mobile View
      flexDirection: "column", // Stack items vertically
    },
  },
  sidebar: {
    width: "20%",
    backgroundColor: "#E0E0E0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)", // shadow on the sidebar
    "@media (max-width: 768px)": {
      // Mobile View
      display: "none", // Hide sidebar in mobile view
    },
  },
  title: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "40px",
  },
  sidebarButton: {
    backgroundColor: "#C39BD3",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    marginBottom: "20px",
    cursor: "pointer",
    fontSize: "16px",
    width: "80%",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // button shadow
    transition: "box-shadow 0.3s ease",
  },
  mainContent: {
    flex: 1,
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px", // spacing between elements
    "@media (max-width: 768px)": {
      // Mobile View
      padding: "20px", // Reduce padding for mobile view
    },
  },
  logo: {
    display: "none", // Hidden on desktop
    "@media (max-width: 768px)": {
      // Mobile View
      display: "block", // Show the logo/text in mobile view
      fontSize: "24px",
      color: "#333",
      marginBottom: "20px",
    },
  },
  textInput: {
    width: "80%",
    height: "150px",
    padding: "15px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    marginBottom: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow on the text box
    color: "black",
    "@media (max-width: 768px)": {
      // Mobile View
      width: "100%", // Full width on mobile
    },
  },
  generateButton: {
    backgroundColor: "#C39BD3",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "18px",
    marginBottom: "40px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow on the button
    transition: "box-shadow 0.3s ease",
    "@media (max-width: 768px)": {
      // Mobile View
      width: "100%", // Full width on mobile
    },
  },
  generatedContainer: {
    width: "80%",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#EAECEE",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow on generated speech container
    "@media (max-width: 768px)": {
      // Mobile View
      width: "100%", // Full width on mobile
    },
  },
  generatedText: {
    marginBottom: "20px",
    fontSize: "18px",
  },
  audioBox: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow on audio box
  },
  audioControls: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    "@media (max-width: 768px)": {
      // Mobile View
      flexDirection: "column", // Stack buttons vertically on mobile
      gap: "10px", // Add spacing between buttons
    },
  },
  controlButton: {
    backgroundColor: "#C39BD3",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 4px 6px rgba(0, 0,    0.1)", // shadow on control buttons
    transition: "box-shadow 0.3s ease",
    "@media (max-width: 768px)": {
      // Mobile View
      padding: "8px 16px", // Smaller padding for mobile
      fontSize: "14px", // Smaller font size for mobile
      width: "100%", // Full width on mobile
    },
  },
  downloadButton: {
    backgroundColor: "#58D68D",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow on download button
    transition: "box-shadow 0.3s ease",
    "@media (max-width: 768px)": {
      // Mobile View
      padding: "8px 16px", // Smaller padding for mobile
      fontSize: "14px", // Smaller font size for mobile
      width: "100%", // Full width on mobile
    },
  },
};

export default Card;
