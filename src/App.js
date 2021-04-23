import React, { useState } from "react";
import "./index.css";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [theme, setTheme] = useState("Dark");

  const themeToggle = () => {
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
    if (theme === "Dark") {
      document.body.classList.add("DarkTheme");
    } else {
      document.body.classList.remove("DarkTheme");
    }
  };

  return (
    <div className="App">
      <Title />
      <ThemeButton theme={theme} themeToggle={themeToggle} />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Footer />
    </div>
  );
}

export default App;
