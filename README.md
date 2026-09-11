# OceanEmbed

### Satellite Embedding-Based Deep Learning Framework for Reconstruction of Subsurface Ocean Temperature

OceanEmbed is a deep-learning-based platform that reconstructs subsurface ocean temperature profiles using widely available surface ocean and atmospheric observations.

It addresses the problem of sparse subsurface ocean observations by combining satellite-derived surface variables, deep learning, ARGO validation, and an interactive web platform.

---

## Smart India Hackathon 2026

| Field | Details |
|---|---|
| **PS ID** | SIH26066 |
| **Theme** | Disaster Management |
| **Category** | Software |
| **Event** | Smart India Hackathon 2026 |
| **Problem Statement** | OceanEmbed - Satellite Embedding-Based Deep Learning Framework for Reconstruction of Subsurface Ocean Temperature from Surface Satellite Observations |

---

## Problem Statement

Satellite observations provide extensive coverage of ocean surface conditions, while direct subsurface measurements from ARGO floats and research vessels are sparse.

This makes it difficult to obtain continuous subsurface temperature information across large ocean regions.

OceanEmbed aims to bridge this gap by learning the relationship between surface observations and subsurface ocean temperature.

---

## Proposed Solution

OceanEmbed uses a **Convolutional Neural Network (CNN)** to reconstruct ocean temperature profiles from six surface variables:

- Sea Surface Salinity (SSS)
- Sea Surface Height (SSH)
- East-West Ocean Current
- North-South Ocean Current
- East-West Surface Wind
- North-South Surface Wind

The current Proof of Concept focuses on the **Bay of Bengal (10–15°N, 80–85°E)** and reconstructs temperature at **15 standardized depths from 0 to 1000 m**.

---

## Pipeline

```text
Surface Ocean & Atmospheric Data
              ↓
     Data Preprocessing
              ↓
 Spatial & Temporal Harmonization
              ↓
      Depth Standardization
              ↓
      Patch-based Training
              ↓
       CNN Reconstruction
              ↓
 Subsurface Temperature Profile
              ↓
        ARGO Validation
              ↓
       MongoDB Database
              ↓
        Backend API
              ↓
     Interactive Web Platform
```

---

## Results

The CNN model was compared with a Random Forest baseline.

| Model | RMSE |
|---|---:|
| Random Forest | ~0.60°C |
| CNN | **~0.40°C** |

The final model was independently validated using **33 ARGO float profiles** that were not used during training.

The largest reconstruction errors occur around the thermocline region, where temperature gradients are stronger.

---

## Key Features

- Interactive Bay of Bengal map
- Location and date-based reconstruction
- CNN-based temperature prediction
- Reconstruction from 0–1000 m
- 15 standardized depth levels
- CNN vs GLORYS comparison
- ARGO validation
- Interactive temperature-depth profiles
- MongoDB-based prediction storage
- Geospatial prediction lookup
- REST API
- Light and dark themes
- Publicly deployed platform

---

## Technology Stack

### Frontend

- React
- Vite
- JavaScript
- Tailwind CSS
- Leaflet
- React Leaflet
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Machine Learning

- Python
- Convolutional Neural Network (CNN)
- Random Forest
- Patch-based training
- ARGO validation

### Data Sources

- Copernicus Marine Service GLORYS12
- ERA5
- ARGO

### Deployment

- Render

---

## Study Region & Dataset

The current Proof of Concept focuses on the **Bay of Bengal**.

| Parameter | Configuration |
|---|---|
| **Latitude** | 10°N – 15°N |
| **Longitude** | 80°E – 85°E |
| **Time Period** | January – April 2023 |
| **Depth Range** | 0 – 1000 meters |
| **Standardized Depths** | 15 |

### Input Variables

| Variable | Description |
|---|---|
| SSS | Sea Surface Salinity |
| SSH | Sea Surface Height |
| U Current | East-West Ocean Current |
| V Current | North-South Ocean Current |
| U Wind | East-West Surface Wind |
| V Wind | North-South Surface Wind |

---

## Independent ARGO Validation

ARGO profiles provide independent subsurface observations for evaluating the reconstructed temperature profiles.

For the final validation:

- 33 ARGO float profiles were used.
- The profiles were not used during model training.
- Predictions were compared against observed subsurface temperature.
- Errors were analyzed across depth.

---

## Web Platform

The OceanEmbed frontend provides an interactive interface for exploring reconstructed subsurface temperature.

Users can:

1. Select a location on the map.
2. Select a date.
3. Request a reconstruction.
4. Retrieve the corresponding prediction.
5. Visualize the temperature profile from the surface to 1000 m.
6. Compare the CNN prediction with GLORYS reference data.

---

## Backend

The backend is built using **Node.js, Express.js, and MongoDB**.

### API Endpoints

```text
GET /api/meta
GET /api/predict
GET /api/results
```

The backend supports prediction retrieval using geographic coordinates and dates.

MongoDB geospatial indexing is used for efficient nearest-grid prediction lookup.

The current platform contains approximately **259,440 precomputed prediction records**.

---

## Repository Structure

```text
OceanEmbed/
├── assets/
│   └── screenshots/
├── docs/
├── public/
├── src/
│   ├── frontend/
│   └── backend/
├── submission/
├── README.md
├── package.json
├── package-lock.json
├── tailwind.config.js
└── vite.config.js
```

---

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Afta006/OceanEmbed.git
cd OceanEmbed
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd src/backend
npm install
cd ../..
```

### 4. Configure Frontend Environment

Create:

```text
src/frontend/.env.local
```

Add:

```env
VITE_API_BASE_URL=http://localhost:5000
```

### 5. Configure Backend Environment

Create:

```text
src/backend/.env
```

Use:

```text
src/backend/.env.example
```

as the reference for the required environment variables.

Do not commit passwords, API keys, database credentials, JWT secrets, or other sensitive information.

### 6. Start the Backend

```bash
cd src/backend
npm run dev
```

### 7. Start the Frontend

Open another terminal in the project root:

```bash
npm run dev
```

---

## Live Demo

### Website

https://oceanembed-website.onrender.com/

### GitHub Repository

https://github.com/Afta006/OceanEmbed

---

## Screenshots

Project screenshots are available in:

```text
assets/screenshots/
```

They include:

- Homepage
- Light mode
- Problem statement
- Complete pipeline
- Data acquisition
- Data harmonization
- Depth standardization
- Reconstruction
- Validation
- Validation results
- Live demonstration
- Interactive map

---

## Impact

OceanEmbed aims to bridge the gap between extensive surface ocean observations and limited subsurface measurements.

Potential applications include:

- Marine research
- Fisheries and ocean-resource management
- Climate monitoring
- Environmental monitoring
- Ocean forecasting
- Disaster monitoring
- Oceanographic analysis
- Marine ecosystem studies

---

## Future Scope

- Expansion to the North Indian Ocean and other ocean basins
- Larger historical datasets
- Higher spatial and temporal resolution
- Improved thermocline reconstruction
- Additional oceanographic variables
- Near-real-time reconstruction
- Operational ocean monitoring integration

---

## Team

| Team Member | Role |
|---|---|
| **MD Aftab Ansari** | Machine Learning / Frontend Development |
| **Vanshika Goyal** | Machine Learning / PPT  |
| **Anam Shoeb** | Frontend Development |
| **Varidhi Solanki** | Frontend Development |
| **Bhanwi Singh** | PPT |
| **Vamika Arya** | Backend Development / Database |

---

## Smart India Hackathon 2026

**PS ID:** SIH26066

**Problem Statement:**  
OceanEmbed - Satellite Embedding-Based Deep Learning Framework for Reconstruction of Subsurface Ocean Temperature from Surface Satellite Observations

**Theme:** Disaster Management

---

### Bringing the unseen layers of the ocean closer to observation.
