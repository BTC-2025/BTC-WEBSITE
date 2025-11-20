import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import sridharan from "../assets/sridharan.png";

const EmployeePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const employees = [
    {
      id: "btc001a",
      name: "Shanmugavel A",
      role: "Full Stack Developer (Intern)",
      email: "shanmugavel@example.com",
      phone: "9876543210",
      dob: "12/04/2003",
      bloodgroup: "A+",
      parent: {
        parentname: "Annamalai",
        phone: "9876543000"
      },
      profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
    },
    {
      id: "btc001b",
      name: "Sridharan BR",
      role: "UI/UX Designer (Trainee)",
      email: "sridharan@example.com",
      phone: "9876543211",
      dob: "15/08/2005",
      bloodgroup: "O+",
      parent: {
        parentname: "Rameshbabu BR",
        phone: "9150902897"
      },
      profile: sridharan
    },
    {
      id: "btc002a",
      name: "Narendiran",
      role: "Project Manager (Staff)",
      email: "naren@example.com",
      phone: "9876543212",
      dob: "22/01/2002",
      bloodgroup: "B+",
      parent: {
        parentname: "Rajendiran",
        phone: "9750123456"
      },
      profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop"
    },
    {
      id: "btc002b",
      name: "Peter Pertia Jebaraj",
      role: "Backend Developer (Intern)",
      email: "peter@example.com",
      phone: "9876543213",
      dob: "09/11/2001",
      bloodgroup: "AB+",
      parent: {
        parentname: "Jebaraj",
        phone: "9898765432"
      },
      profile: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=400&fit=crop"
    }
  ];

  const employee = employees.find((emp) => emp.id === id);

  const getRoleType = (role) => {
    if (role.includes("(Intern)")) {
      return { type: "Intern", color: "#dc2626" };
    } else if (role.includes("(Trainee)")) {
      return { type: "Trainee", color: "#059669" };
    } else if (role.includes("(Staff)")) {
      return { type: "Staff", color: "#2563eb" };
    } else {
      return { type: "Employee", color: "#7c3aed" };
    }
  };

  const roleInfo = employee ? getRoleType(employee.role) : null;

  if (isLoading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingSpinner}></div>
        <p style={styles.loadingText}>Loading...</p>
      </div>
    );
  }

  if (!employee) {
    return (
      <div style={styles.errorContainer}>
        <h2 style={styles.errorTitle}>Employee Not Found</h2>
        <p style={styles.errorText}>Employee ID "{id}" not found.</p>
        <button 
          style={styles.backButton}
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <button 
            style={styles.backButton}
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
          <div style={styles.idBadge}>ID: {employee.id}</div>
        </div>

        {/* Profile Section */}
        <div style={styles.profileSection}>
          <img 
            src={employee.profile} 
            alt={employee.name} 
            style={styles.profileImage} 
          />
          <div style={styles.profileInfo}>
            <h1 style={styles.name}>{employee.name}</h1>
            <div style={styles.roleContainer}>
              <span style={styles.role}>
                {employee.role.replace(/\((Intern|Trainee|Staff)\)/, '')}
              </span>
              <span style={{
                ...styles.roleBadge,
                color: roleInfo.color,
                borderColor: roleInfo.color
              }}>
                {roleInfo.type}
              </span>
            </div>
          </div>
        </div>

        {/* Information */}
        <div style={styles.infoSection}>
          <InfoRow label="Email" value={employee.email} />
          <InfoRow label="Phone" value={employee.phone} />
          <InfoRow label="Date of Birth" value={employee.dob} />
          <InfoRow label="Blood Group" value={employee.bloodgroup} />
        </div>

        {/* Parent Info */}
        <div style={styles.parentSection}>
          <h3 style={styles.sectionTitle}>Parent / Guardian</h3>
          <div style={styles.parentInfo}>
            <InfoRow label="Name" value={employee.parent.parentname} />
            <InfoRow label="Contact" value={employee.parent.phone} />
          </div>
        </div>

        {/* Action Button */}
        <button style={styles.contactButton}>
          Contact Employee
        </button>
      </div>
    </div>
  );
};

// Reusable Components
const InfoRow = ({ label, value }) => (
  <div style={styles.infoRow}>
    <span style={styles.infoLabel}>{label}</span>
    <span style={styles.infoValue}>{value}</span>
  </div>
);

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    padding: "20px",
    marginTop:"70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    maxWidth: "660px",
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e2e8f0",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  },
  backButton: {
    padding: "8px 16px",
    backgroundColor: "transparent",
    color: "#64748b",
    border: "1px solid #e2e8f0",
    borderRadius: "6px",
    fontSize: "14px",
    cursor: "pointer",
  },
  idBadge: {
    padding: "6px 12px",
    backgroundColor: "#f1f5f9",
    color: "#475569",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "500",
  },
  profileSection: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "24px",
    paddingBottom: "24px",
    borderBottom: "1px solid #e2e8f0",
  },
  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#1e293b",
    margin: "0 0 8px 0",
  },
  roleContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexWrap: "wrap",
  },
  role: {
    fontSize: "14px",
    color: "#64748b",
  },
  roleBadge: {
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "500",
    border: "1px solid",
  },
  infoSection: {
    marginBottom: "24px",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid #f1f5f9",
  },
  infoLabel: {
    fontSize: "14px",
    color: "#64748b",
    fontWeight: "500",
  },
  infoValue: {
    fontSize: "14px",
    color: "#1e293b",
    fontWeight: "500",
  },
  parentSection: {
    marginBottom: "24px",
    padding: "16px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1e293b",
    margin: "0 0 16px 0",
  },
  parentInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  contactButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
  },
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
  },
  loadingSpinner: {
    width: "40px",
    height: "40px",
    border: "3px solid #e2e8f0",
    borderTop: "3px solid #3b82f6",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginBottom: "16px",
  },
  loadingText: {
    color: "#64748b",
    fontSize: "16px",
  },
  errorContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    padding: "20px",
    textAlign: "center",
  },
  errorTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#dc2626",
    marginBottom: "8px",
  },
  errorText: {
    fontSize: "14px",
    color: "#64748b",
    marginBottom: "20px",
  },
};

// Add CSS animation for spinner
const spinnerStyle = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

// Inject styles
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(spinnerStyle, styleSheet.cssRules.length);

export default EmployeePage;