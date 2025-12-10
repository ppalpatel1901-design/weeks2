import React from "react";

function Card({ title, description, category, tags }) {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Category:</strong> {category}</p>

      <div style={styles.tagContainer}>
        {tags.map((tag, index) => (
          <span key={index} style={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  ); 
}

const styles = {
  card: {   
    width: "260px",
    padding: "16px",
    margin: "12px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    background: "#f7f7f7",
  },
  tagContainer: {  
    marginTop: "10px",
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  },
  tag: {
    background: "#e1e1e1",
    padding: "4px 8px",
    borderRadius: "6px",
    fontSize: "12px",
  },
};

export default Card;
