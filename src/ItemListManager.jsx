import { useState } from "react";

const ItemListManager = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const styles = {
    container: {
      maxWidth: "500px",
      margin: "20px auto",
      padding: "20px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      backgroundColor: "white",
    },
    header: {
      marginBottom: "20px",
    },
    title: {
      fontSize: "24px",
      color: "#333",
      marginBottom: "16px",
    },
    inputContainer: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      flex: "1",
      padding: "8px 12px",
      fontSize: "16px",
      border: "1px solid #000",
      borderRadius: "4px",
      outline: "none",
      backgroundColor: "white",
      color: "black",
    },
    button: {
      padding: "8px 16px",
      backgroundColor: "#0066cc",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "background-color 0.2s",
    },
    buttonHover: {
      backgroundColor: "#0052a3",
    },
    listContainer: {
      border: "1px solid #000",
      borderRadius: "4px",
      padding: "16px",
      minHeight: "100px",
    },
    emptyMessage: {
      textAlign: "center",
      color: "#666",
      fontStyle: "italic",
    },
    list: {
      listStylePosition: "inside",
      paddingLeft: "20px",
    },
    listItem: {
      margin: "8px 0",
      color: "#333",
    },
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Item List Manager</h1>
      </div>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter an item"
          style={styles.input}
        />
        <button
          onClick={handleAddItem}
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = styles.button.backgroundColor;
          }}
        >
          Add Item
        </button>
      </div>

      <div style={styles.listContainer}>
        {items.length === 0 ? (
          <p style={styles.emptyMessage}>No items added yet</p>
        ) : (
          <ul style={styles.list}>
            {items.map((item, index) => (
              <li key={index} style={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ItemListManager;
