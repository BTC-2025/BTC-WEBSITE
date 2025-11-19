import React from "react";
import { useParams } from "react-router-dom";

const EmployeePage = () => {
  const { id } = useParams();  // this will be like "btc001b"

  // -----------------------------
  // Employee Data (string IDs)
  // -----------------------------
  const employees = [
    {
      id: "btc001b",
      name: "Selva",
      role: "Full Stack Developer",
      email: "selva@example.com",
      phone: "9876543210",
      profile: "https://via.placeholder.com/160"
    },
    {
      id: "btc002b",
      name: "Arun",
      role: "UI/UX Designer",
      email: "arun@example.com",
      phone: "9876543211",
      profile: "https://via.placeholder.com/160"
    },
    {
      id: "btc003b",
      name: "Sathish",
      role: "Project Manager",
      email: "sathish@example.com",
      phone: "9876543212",
      profile: "https://via.placeholder.com/160"
    },
    // add remaining employees...
  ];

  // Find employee with string ID
  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Employee Not Found
      </h2>
    );
  }

  return (
    <div style={styles.container}>
      <img src={employee.profile} alt={employee.name} style={styles.image} />

      <h1>{employee.name}</h1>
      <h3>{employee.role}</h3>

      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>
    </div>
  );
};

// Styles
const styles = {
  container: {
    width: "400px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "20px",
    background: "#fafafa",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
  },
};

export default EmployeePage;
