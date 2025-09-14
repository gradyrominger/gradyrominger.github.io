import React from 'react';

export default function CertCard({ cert }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{cert.title}</h2>
      <p><strong>Date:</strong> {cert.date}</p>

      <section>
        <h3>🛠️ Skills Practiced</h3>
        <ul>
          {cert.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>🔍 Strategic Impact</h3>
        <ul>
          {cert.impact.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>📌 Next Steps</h3>
        <ul>
          {cert.nextSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1.5rem',
    backgroundColor: '#f9f9f9',
    maxWidth: '700px',
    margin: '2rem auto',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif'
  },
  title: {
    marginBottom: '0.5rem',
    color: '#333'
  }
};
