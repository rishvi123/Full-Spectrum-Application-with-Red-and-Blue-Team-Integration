# -Full-Spectrum Application with Red and Blue Team Integration
<img width="1759" height="140" alt="image" src="https://github.com/user-attachments/assets/527f5031-979b-4abc-9817-1955cfabba61" />

This project is a secure file-sharing web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It implements hybrid encryption (AES for file confidentiality, RSA for secure key exchange) to protect sensitive data during storage and transfer.

The project is developed with a DevSecOps mindset:

Phase 1 (Development): Build a functional file-sharing app with authentication (JWT), role-based access, and file upload/download APIs.

Phase 2 (Red Team): Intentionally introduce vulnerabilities (e.g., weak JWT secrets, NoSQL injection, broken access control, unrestricted file upload). Exploit these using Postman and penetration testing tools (Burp Suite, SQLMap, Hydra).

Phase 3 (Blue Team): Apply defensive mechanisms such as input validation, Helmet.js, rate limiting, WAF (ModSecurity), IDS/IPS (Suricata), and centralized logging with ELK Stack.

Phase 4 (Monitoring & Reporting): Visualize attacks and defenses via a custom React dashboard integrated with ELK, and prepare a detailed security report showing the attack–defend cycle.
