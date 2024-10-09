
# Country Information App

This project is a country information app that uses a **Next.js** frontend and an **Express.js** backend to display country details, including borders, flag, and population data over time.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or above)
- **npm** or **yarn**
- **Git**

## Project Structure

```
country-info-app/
│
├── backend/                # Express.js backend
│   ├── src/
│   └── .env                # Backend environment variables
├── frontend/               # Next.js frontend
│   ├── src/
│   └── .env.local          # Frontend environment variables
├── README.md

```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/PedroGonzalezCarretero/country-info-app.git
cd country-info-app
```

### 2. Backend Setup (Express.js)

#### a. Install Backend Dependencies

Navigate to the `backend` directory and install dependencies:

```bash
cd backend
npm install
```

#### b. Set Up Environment Variables

Create a `.env` file in the `backend/` directory:

```bash
touch .env
```

Add the following variables to the `.env` file:

```
DATE_NAGER_API_URL=https://date.nager.at/api/v3
COUNTRIES_NOW_API_URL=https://countriesnow.space/api/v0.1
PORT=3000
```

#### c. Run the Backend Server

```bash
npm run build   # Compile the TypeScript code
npm start       # Start the backend server
```

Your backend should now be running on `http://localhost:3000`.

### 3. Frontend Setup (Next.js)

#### a. Install Frontend Dependencies

Navigate to the `frontend` directory and install dependencies:

```bash
cd ../frontend
npm install
```

#### b. Set Up Environment Variables

Create a `.env.local` file in the `frontend` directory:

```bash
touch .env.local
```

Add the following variables to the `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Make sure the API URL matches your backend URL.

#### c. Run the Frontend Server

```bash
npm run dev
```

Your frontend should now be running on `http://localhost:3000`.

### 4. Access the Application

Once both servers are running, you can access the application:

- **Frontend**: Open your browser and navigate to [http://localhost:3001](http://localhost:3001) (or [http://localhost:3000](http://localhost:3000) depending on the port).
- **Backend**: The backend API is available at [http://localhost:3000](http://localhost:3000).

### Endpoints

- **Frontend Pages**:
  - `/countries`: Displays the list of countries.
  - `/countries/[code]`: Displays detailed information for the selected country.

- **Backend Endpoints**:
  - `GET /api/countries`: Fetches the list of available countries.
  - `GET /api/country/:code`: Fetches detailed information about a country, including borders, flag, and population data.

## Scripts

### Backend Scripts

- `npm run build`: Compile the TypeScript files to JavaScript.
- `npm start`: Start the backend server.
- `npm run dev`: Run the backend server in development mode with hot reloading.

### Frontend Scripts

- `npm run dev`: Run the frontend server in development mode.
- `npm run build`: Build the frontend for production.
- `npm start`: Start the frontend server in production mode after building.

## Notes

- Ensure that your backend is running on the specified port before starting the frontend. The frontend makes API calls to the backend using the `NEXT_PUBLIC_API_URL` environment variable.
- You can change the backend port in the `.env` file and update the corresponding `NEXT_PUBLIC_API_URL` in the frontend `.env.local` file.

## License

This project is licensed under the MIT License.
