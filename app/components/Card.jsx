// // components/Card.jsx

// "use client";

// import axios from "axios";
// import { useState } from "react";

// const Card = () => {
//   const [text, setText] = useState("");
//   const [audioUrl, setAudioUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleInputChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     try {
//       const response = await axios.post("/api/getSpeech", { text });
//       console.log("API Response:", response.data); // Debugging output
//       setAudioUrl(response.data.audioUrl);
//     } catch (err) {
//       console.error(
//         "Request Error:",
//         err.response ? err.response.data : err.message
//       );
//       setError("Failed to fetch speech data. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={text}
//           onChange={handleInputChange}
//           rows="4"
//           cols="50"
//           placeholder="Enter text here..."
//         />
//         <br />
//         <button type="submit" disabled={loading}>
//           {loading ? "Generating..." : "Generate Speech"}
//         </button>
//       </form>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {audioUrl && (
//         <div>
//           <h3>Generated Speech:</h3>
//           <audio controls>
//             <source src={audioUrl} type="audio/mpeg" />
//             Your browser does not support the audio element.
//           </audio>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Card;

// components/Card.jsx

// components / Card.jsx;

// components/Card.jsx

// "use client";

// import axios from "axios";
// import { useEffect, useRef, useState } from "react";

// const Card = () => {
//   const [text, setText] = useState("");
//   const [audioUrl, setAudioUrl] = useState("");
//   const [audioId, setAudioId] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const audioRef = useRef(null);
//   const [showModal, setShowModal] = useState(false);
//   const [model, setModel] = useState(""); // Add model state if needed

//   const handleInputChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");
//     setAudioUrl("");
//     try {
//       const response = await axios.post("/api/getSpeech", { text });
//       console.log("API Response:", response.data); // Debugging output

//       // Extract the URL and ID from the response
//       const { id, url } = response.data;

//       if (url && id) {
//         // Log URL for debugging
//         console.log("Audio URL:", url);

//         // Set the audio URL and ID to state
//         setAudioUrl(url);
//         setAudioId(id);
//       } else {
//         setError("Audio URL or ID is not available.");
//       }
//     } catch (err) {
//       console.error(
//         "Request Error:",
//         err.response ? err.response.data : err.message
//       );
//       setError("Failed to fetch speech data. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (audioRef.current && audioUrl) {
//       audioRef.current.load(); // Ensure the audio element reloads the new source

//       // Try to play the audio automatically
//       audioRef.current.play().catch((err) => {
//         console.error("Audio play error:", err);
//         setError("Failed to play audio. Please click the play button.");
//       });
//     }
//   }, [audioUrl]);

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={text}
//           onChange={handleInputChange}
//           rows="4"
//           cols="50"
//           placeholder="Enter text here..."
//         />
//         <br />
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? "Generating..." : "Generate Speech"}
//         </button>
//       </form>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {audioUrl && (
//         <div>
//           <h3>Generated Speech:</h3>
//           <audio ref={audioRef} controls>
//             <source src={audioUrl} type="audio/mp3" />
//             Your browser does not support the audio element.
//           </audio>
//           <p>Audio ID: {audioId}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Card;

// "use client";

// import axios from "axios";
// import { useEffect, useRef, useState } from "react";

// const Card = () => {
//   const [text, setText] = useState("");
//   const [audioUrl, setAudioUrl] = useState("");
//   const [audioId, setAudioId] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const audioRef = useRef(null);

//   const handleInputChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");
//     setAudioUrl("");
//     try {
//       const response = await axios.post("/api/getSpeech", { text });
//       console.log("API Response:", response.data); // Debugging output

//       // Extract the URL and ID from the response
//       const { id, url } = response.data;

//       if (url && id) {
//         // Log URL for debugging
//         console.log("audioUrl:", url);

//         // Set the audio URL and ID to state
//         setAudioUrl(url);
//         setAudioId(id);
//       } else {
//         setError("Audio URL or ID is not available.");
//       }
//     } catch (err) {
//       console.error(
//         "Request Error:",
//         err.response ? err.response.data : err.message
//       );
//       setError("Failed to fetch speech data. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (audioRef.current && audioUrl) {
//       audioRef.current.load(); // Ensure the audio element reloads the new source

//       // Try to play the audio automatically
//       audioRef.current.play().catch((err) => {
//         console.error("Audio play error:", err);
//         setError("Failed to play audio. Please click the play button.");
//       });
//     }
//   }, [audioUrl]);

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={text}
//           onChange={handleInputChange}
//           rows="4"
//           cols="50"
//           placeholder="Enter text here..."
//         />
//         <br />
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? "Generating..." : "Generate Speech"}
//         </button>
//       </form>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {audioUrl && (
//         <div>
//           <h3>Generated Speech:</h3>
//           <audio ref={audioRef} controls>
//             <source src={audioUrl} type="audio/mpeg" />
//             Your browser does not support the audio element.
//           </audio>
//           <p>Audio ID: {audioId}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Card;

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
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={handleInputChange}
          rows="4"
          cols="50"
          color="black"
          placeholder="Enter text here..."
        />
        <br />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Generating..." : "Generate Speech"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {audioUrl && (
        <div>
          <h3>Generated Speech:</h3>
          <audio ref={audioRef} controls>
            <source src={audioUrl} />
            Your browser does not support the audio element.
          </audio>
          <p>Audio ID: {audioId}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
