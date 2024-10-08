// "use client";

// import axios from "axios";
// import { useState } from "react";

// const TextToSpeech = () => {
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
//       const response = await axios.post("/api/text-to-speech", { text });
//       // Assuming the API returns an audio URL in response.data.audioUrl
//       setAudioUrl(response.data.audioUrl);
//     } catch (err) {
//       setError("Failed to fetch speech data");
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

// export default TextToSpeech;

const Header = () => {
  return <div>Header</div>;
};

export default Header;
