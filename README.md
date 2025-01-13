MediManage

MediManage is a full-stack hospital management system designed to streamline hospital operations by providing an efficient way to manage patients, appointments, and staff. The system ensures secure access using JWT token authentication and is fully deployed for use.

Features

1. Authentication and Authorization

User login and registration.

Role-based access control (Admin, Doctor, Patient).

Secure JWT-based authentication for session management.

2. Patient Management

Add, view, update, and delete patient records.

Search and filter patient details.

3. Appointment Scheduling

Dynamic scheduling system for doctors and patients.

Real-time updates and conflict resolution for appointments.

4. Staff Management

Add and manage doctor and staff details.

Assign roles and monitor staff activity.

5. Dashboard

View hospital statistics (e.g., total patients, appointments, staff).

Display of real-time data and charts for better insights.

6. Payment Gateway Integration

Secure online payments using Razorpay.

Generate and track invoices for medical services.

Technologies Used

Frontend

ReactJS: For building a responsive and user-friendly interface.

Tailwind CSS: For styling the application.

Backend

Node.js: Server-side runtime for building RESTful APIs.

Express.js: Framework for managing routes and middleware.

Database

MongoDB: NoSQL database for storing and managing data.

Authentication

JWT (JSON Web Tokens): For secure authentication and authorization.

Payment Gateway

Razorpay: For handling secure online payments.

Deployment

Render: Hosting the backend and ensuring 24/7 availability.

Project Setup

Prerequisites

Node.js installed

MongoDB installed or access to a MongoDB cloud instance

Render account for deployment (optional)

Steps to Run Locally

Clone the repository:

git clone https://github.com/your-username/medi-manage.git

Navigate to the project directory:

cd medi-manage

Install dependencies:

npm install

Configure environment variables:

Create a .env file in the root directory.

Add the following:

MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

Start the server:

npm start

Open the frontend (if applicable) by navigating to http://localhost:3000.

API Endpoints

Authentication

POST /api/auth/register - Register a new user

POST /api/auth/login - Login and receive a JWT token

Patients

GET /api/patients - Get all patients

POST /api/patients - Add a new patient

PUT /api/patients/:id - Update patient details

DELETE /api/patients/:id - Delete a patient

Appointments

GET /api/appointments - Get all appointments

POST /api/appointments - Schedule a new appointment

DELETE /api/appointments/:id - Cancel an appointment

Payments

POST /api/payments - Initiate a payment

GET /api/payments/:id - Get payment details

Deployment

The backend is deployed on Render and can be accessed at:

<Your Render Deployment URL> 

Future Enhancements

Implement advanced analytics using charts and graphs.

Add email and SMS notifications for appointments and reminders.

Mobile app version for Android and iOS.

Contributing

Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch:

git checkout -b feature-name

Commit your changes:

git commit -m "Description of changes"

Push to the branch:

git push origin feature-name

Submit a pull request.

License

This project is licensed under the MIT License.

Contact

For any queries or feedback, please reach out at:

Email: shivangisinghpal05@gmail.com

LinkedIn: https://www.linkedin.com/in/shivangi-singh-pal-b1a78b22a/

MediManage - Simplifying Hospital Operations!