1- netstat -ano | findstr :5000

then show example - TCP    [::]:5000              [::]:0               LISTENING       1234

2 - taskkill /PID 1234 /F







# Driver Hiring Application

A simple web-based application for hiring drivers, built with JavaScript (Node.js, React, etc.). This platform allows users to find available drivers, request rides, and make bookings.

## Features

- **User Registration/Login**: Allow users to register and log in to the platform.
- **Driver Profiles**: Drivers can create profiles with their details, including availability and pricing.
- **Booking System**: Users can book a driver based on their needs.
- **Payment Integration**: Seamless integration of payment methods for booking rides.
- **Real-time Tracking**: Users can track their booked drivers in real-time.

## Technologies Used

- **Frontend**: React.js, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment**: Stripe API (or any other payment integration)

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- MongoDB for database management.
- A Stripe account (for payment integration).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/driver-hiring-app.git
