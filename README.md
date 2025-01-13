
# MediManage

MediManage is a full-stack hospital management system designed to streamline hospital operations by providing an efficient way to manage patients, appointments, and staff. The system ensures secure access using JWT token authentication and is fully deployed for use.


## Features

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


## Installation

Install medi-manage with npm


Prerequisites

Node.js installed

MongoDB installed or access to a MongoDB cloud instance

Render account for deployment (optional)

Steps to Run Locally

Clone the repository:

git clone https://github.com/shivangisingh01/Medi-Manage.git

Navigate to the project directory:


```bash
  cd medi-manage
  
```

Install dependencies:

npm install
```bash
  npm install
  
```

Configure environment variables:

Create a .env file in the root directory.

Add the following:

MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

Start the server:

```bash
  npm start
  
```
Open the frontend (if applicable) by navigating to http://localhost:3000.


    
## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

**Database:** MongoDB

**Authentication:** JWT (JSON Web Tokens)

**Payment Gateway:** Razorpay

**Deployment:** Render
## Deployment

The backend is deployed on Render and can be accessed at:

https://medi-manage-frontend.onrender.com


## Screenshots

![App Screenshot](https://res.cloudinary.com/difquq0tf/image/upload/v1736777533/Screenshot_208_fy6kyr.png)

![App Screenshot](https://res.cloudinary.com/difquq0tf/image/upload/v1736777534/Screenshot_207_wk6dk4.png)


## License



This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.
## API Endpoints

API Endpoints

**Authentication**

POST /api/auth/register - Register a new user

POST /api/auth/login - Login and receive a JWT token

**Patients**

GET /api/patients - Get all patients

POST /api/patients - Add a new patient

PUT /api/patients/:id - Update patient details

DELETE /api/patients/:id - Delete a patient

**Appointments**

GET /api/appointments - Get all appointments

POST /api/appointments - Schedule a new appointment

DELETE /api/appointments/:id - Cancel an appointment

**Payments**

POST /api/payments - Initiate a payment

GET /api/payments/:id - Get payment details


## Future enhancements


    1. Implement advanced analytics using charts and graphs.

    2. Add SMS notifications for appointment &  
       reminders.

Contact

For any queries or feedback, please reach out at:

Email: shivangisinghpal05@gmail.com

LinkedIn: https://www.linkedin.com/in/shivangi-singh-pal-b1a78b22a/

MediManage - Simplifying Hospital Operations!