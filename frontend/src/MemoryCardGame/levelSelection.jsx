import React, { useState } from "react";

const LevelSelectionModal = ({ isOpen, onClose, onSelectLevel }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target.id === "modal-background") {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      onClick={handleBackgroundClick}
      style={styles.modalBackground}
    >
      <div style={styles.modalContent}>
        <h2 style={styles.title}>Select Difficulty</h2>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={() => onSelectLevel("Easy")}>
            Easy
          </button>
          <button style={styles.button} onClick={() => onSelectLevel("Medium")}>
            Medium
          </button>
          <button style={styles.button} onClick={() => onSelectLevel("Hard")}>
            Hard
          </button>
        </div>
        <button style={styles.playButton} onClick={onClose}>
          Play
        </button>
      </div>
    </div>
  );
};

const styles = {
  modalBackground: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    background: "#1e1e2e",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    width: "300px",
  },
  title: {
    color: "#ffcc00",
    fontSize: "22px",
    marginBottom: "15px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  button: {
    background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "opacity 0.3s",
  },
  playButton: {
    marginTop: "15px",
    background: "transparent",
    border: "2px solid #ffcc00",
    padding: "10px 20px",
    borderRadius: "8px",
    color: "#ffcc00",
    fontSize: "16px",
    cursor: "pointer",
    transition: "opacity 0.3s",
  },
};

export default LevelSelectionModal;
