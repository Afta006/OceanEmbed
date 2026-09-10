# OceanEmbed – SIH 2026

### Satellite Embedding-Based Deep Learning for Subsurface Ocean Temperature Reconstruction

---

## 1. Project Information

- **Project Title:** OceanEmbed - Satellite Embedding-Based Deep Learning Framework for Reconstruction of Subsurface Ocean Temperature from Surface Satellite Observations
- **PS ID:** SIH26066
- **PS Title:** OceanEmbed - Satellite Embedding-Based Deep Learning Framework for Reconstruction of Subsurface Ocean Temperature from Surface Satellite Observations.
- **Category:** Software
- **Theme:** Disaster Management

---

## 2. Problem Statement

Satellite observations provide extensive coverage of the ocean surface, but direct observations of subsurface ocean conditions remain sparse.

ARGO floats and research vessels provide valuable subsurface measurements, but their spatial coverage is limited across the vast ocean. This creates a major gap between the availability of large-scale surface observations and our ability to understand the temperature structure beneath the ocean surface.

OceanEmbed addresses this challenge by using widely available surface ocean and atmospheric observations with deep learning to reconstruct subsurface ocean temperature profiles over large areas.

---

## 3. Proposed Solution

OceanEmbed is a CNN-based deep learning platform that reconstructs subsurface ocean temperature profiles using surface ocean and atmospheric observations.

The current Proof of Concept focuses on the Bay of Bengal and reconstructs temperature at 15 standardized depths from the surface down to 1000 meters.

The model uses six surface variables:

- Sea Surface Salinity (SSS)
- Sea Surface Height (SSH)
- East-West Ocean Current
- North-South Ocean Current
- East-West Surface Wind
- North-South Surface Wind

Our CNN-based approach achieves approximately 0.40°C RMSE, outperforming the Random Forest baseline of approximately 0.60°C RMSE. The model was also independently evaluated against 33 ARGO float profiles that were not used during training.

The platform provides an interactive web interface where users can select a location and date and visualize the reconstructed subsurface temperature profile. Users can also compare the CNN prediction with GLORYS reference data.

---

## 4. Key Features

- Interactive Bay of Bengal map
- Location selection through map
- Manual latitude and longitude selection
- Date-based reconstruction
- CNN-based subsurface temperature prediction
- Temperature profile visualization up to 1000 meters
- CNN prediction vs GLORYS reference comparison
- Independent validation using ARGO profiles
- Random Forest baseline comparison
- Interactive web-based platform
- Backend API
- MongoDB prediction database
- Geospatial prediction lookup
- Precomputed prediction retrieval
- Responsive web interface
- Light and dark theme support
- Deployed web application

---

## 5. Technology Stack

- Frontend: React, JavaScript, Vite
- Styling: CSS, Tailwind CSS
- Visualization: Leaflet, Recharts
- Backend: Node.js, Express.js
- Database: MongoDB
- AI/ML: Python, Convolutional Neural Network (CNN), Random Forest
- Data Sources: Copernicus Marine Service GLORYS12, ERA5, ARGO
- Deployment: Vercel
- Development Tools: Git, GitHub, VS Code

---

## 6. System Architecture

The OceanEmbed system follows a complete pipeline from oceanographic data acquisition to interactive visualization.

    Surface Ocean & Atmospheric Data
                  |
                  v
         Data Preprocessing
                  |
                  v
       Spatial & Temporal Alignment
                  |
                  v
          Patch-based Training
                  |
                  v
         CNN Reconstruction Model
                  |
                  v
     Subsurface Temperature Profile
              0 – 1000 m
                  |
                  v
            ARGO Validation
                  |
                  v
         Prediction Database
              MongoDB
                  |
                  v
             Backend API
                  |
                  v
           React Frontend
                  |
                  v
         Interactive Visualization

Detailed architecture documentation is available in:

docs/architecture.md

---

## 7. Repository Structure

    OceanEmbed/
    │
    ├── backend/
    │   ├── scripts/
    │   ├── src/
    │   ├── uploads/
    │   ├── .env.example
    │   ├── .gitignore
    │   ├── README.md
    │   ├── package.json
    │   ├── package-lock.json
    │   └── server.js
    │
    ├── public/
    │
    ├── src/
    │   ├── api/
    │   ├── assets/
    │   ├── components/
    │   ├── context/
    │   ├── data/
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   └── theme.js
    │
    ├── assets/
    │   └── screenshots/
    │
    ├── docs/
    │   └── architecture.md
    │
    ├── submission/
    │   ├── DEMO.md
    │   └── PRESENTATION.md
    │
    ├── .gitignore
    ├── README.md
    ├── SUBMISSION_GUIDE.md
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    ├── eslint.config.js
    ├── postcss.config.js
    └── tailwind.config.js

### What Goes Where?

| Item | Location |
|---|---|
| Frontend source code | src/ |
| Backend source code | backend/ |
| Public assets | public/ |
| Technical documentation | docs/ |
| Project screenshots | assets/screenshots/ |
| Final presentation | submission/ |
| Demo video information | submission/DEMO.md |
| Project overview | README.md |
| SIH submission checklist | SUBMISSION_GUIDE.md |

---

## 8. Data & Study Region

The current Proof of Concept focuses on the Bay of Bengal.

| Parameter | Configuration |
|---|---|
| Latitude | 10°N – 15°N |
| Longitude | 80°E – 85°E |
| Time Period | January – April 2023 |
| Depth Range | 0 – 1000 meters |
| Standardized Depths | 15 |

### Input Variables

The model uses six surface variables:

1. Sea Surface Salinity (SSS)
2. Sea Surface Height (SSH)
3. East-West Ocean Current
4. North-South Ocean Current
5. East-West Surface Wind
6. North-South Surface Wind

### Data Sources

- Copernicus Marine Service GLORYS12
- ERA5
- ARGO observations

---

## 9. Model Development

The initial CNN model was limited by the relatively small number of available daily observations.

To address this limitation, OceanEmbed uses a patch-based training approach to generate a much larger number of spatial training samples from the available observations.

This allows the CNN to learn spatial relationships between surface ocean conditions and subsurface temperature structure more effectively.

The trained model reconstructs temperature profiles at 15 standardized depths extending from the surface to 1000 meters.

A Random Forest model was also implemented as a baseline for comparison.

---

## 10. Model Performance

The CNN-based approach was compared against the Random Forest baseline.

| Model | RMSE |
|---|---:|
| Random Forest | ~0.60°C |
| CNN | ~0.40°C |

The CNN achieves approximately 0.40°C RMSE, improving upon the Random Forest baseline of approximately 0.60°C RMSE.

The final model was independently evaluated against 33 ARGO float profiles that were not used during training.

The reconstruction generally shows strong agreement with the reference temperature profiles, with the largest errors occurring around the thermocline region where temperature gradients are stronger.

---

## 11. Prediction & Visualization Workflow

A user can interact with the deployed platform through the following workflow:

    Select Location
          |
          v
    Select Date
          |
          v
    Request Reconstruction
          |
          v
    Backend API
          |
          v
    Nearest Grid Prediction Lookup
          |
          v
    Subsurface Temperature Profile
          |
          v
    Interactive Visualization

The platform displays the reconstructed temperature profile down to 1000 meters and allows comparison between the CNN prediction and the GLORYS reference profile.

---

## 12. Backend

The OceanEmbed backend is built using Node.js and Express.js.

The backend handles communication between the frontend and the prediction database.

Core functionality includes:

- Project metadata retrieval
- Location-based prediction lookup
- Date-based prediction lookup
- Geospatial nearest-grid retrieval
- Validation result retrieval
- Communication with MongoDB

The backend stores and retrieves precomputed prediction results for fast visualization in the web application.

---

## 13. Database

OceanEmbed uses MongoDB as its prediction database.

The database stores:

- Prediction profiles
- Geographic coordinates
- Dates
- Temperature values
- Reference profiles
- Validation-related information

Geospatial indexing enables efficient retrieval of the prediction closest to a user-selected location.

---

## 14. Web Platform

The frontend is developed using React and Vite.

The platform provides:

- Interactive map-based location selection
- Manual coordinate input
- Date selection
- Temperature profile reconstruction
- CNN vs GLORYS comparison
- Interactive depth-temperature visualization
- Responsive interface
- Light and dark themes

The platform converts the underlying machine-learning output into an accessible visual interface for researchers and other potential users.

---

## 15. Final Presentation

The final SIH 2026 presentation is provided in:

submission/PRESENTATION.md

The presentation covers:

- Problem statement
- Proposed solution
- Data and methodology
- Machine learning approach
- System architecture
- Model performance
- Validation
- Impact
- Scalability
- Future scope
- Conclusion

---

## 16. Demo Video

The OceanEmbed demonstration video is available through:

submission/DEMO.md

The demonstration covers the working platform, including:

1. Introduction to the problem
2. OceanEmbed solution
3. Interactive map
4. Location selection
5. Date selection
6. Temperature reconstruction
7. CNN prediction
8. GLORYS reference comparison
9. Temperature profile visualization
10. Impact and scalability

---

## 17. Screenshots / Prototype

Important screenshots of the OceanEmbed platform are available in:

assets/screenshots/

Recommended screenshots include:

- Homepage
- Live reconstruction demo
- Bay of Bengal map
- Location selection
- Manual coordinate selection
- Date selection
- Reconstruction result
- Temperature profile
- CNN vs GLORYS comparison
- Validation results

See:

assets/screenshots/README.md

---

## 18. Installation

Clone the repository:

    git clone https://github.com/Afta006/OceanEmbed.git
    cd OceanEmbed

Install frontend dependencies:

    npm install

Install backend dependencies:

    cd backend
    npm install
    cd ..

### Environment Configuration

The backend uses environment variables for configuration.

Create the required environment file inside the backend directory based on:

    backend/.env.example

Do not commit actual passwords, API keys, database credentials, or other secrets.

---

## 19. Running the Project

### Start the Frontend

From the project root:

    npm run dev

The Vite development server will start the OceanEmbed frontend.

### Start the Backend

Open a separate terminal:

    cd backend
    npm run dev

If the backend project uses a different configured start command, refer to:

    backend/package.json

The frontend communicates with the backend API to retrieve the required prediction and validation data.

---

## 20. Deployment

The OceanEmbed web platform is deployed using Vercel.

### Live Platform

OceanEmbed Live Platform:

[ADD YOUR DEPLOYED WEBSITE LINK HERE]

Make sure the deployed application is publicly accessible to SIH reviewers.

---

## 21. Impact

OceanEmbed aims to bridge the gap between extensive surface ocean observations and limited subsurface measurements.

By using surface observations to reconstruct subsurface temperature profiles, the platform can complement sparse physical observations such as ARGO floats.

Potential applications include:

- Marine research
- Fisheries and ocean-resource management
- Climate monitoring
- Environmental monitoring
- Ocean forecasting
- Disaster monitoring
- Oceanographic analysis

The interactive platform also makes subsurface ocean information easier to explore and interpret.

---

## 22. Scalability

The current implementation is a Proof of Concept for the Bay of Bengal.

The architecture can be extended with additional data and computational resources to support:

- Larger regions of the Bay of Bengal
- The North Indian Ocean
- Other ocean basins
- Longer historical periods
- Higher spatial resolution
- Higher temporal resolution
- Additional oceanographic variables
- More extensive independent validation

The modular separation of data processing, machine learning, backend services, database storage, and frontend visualization provides a foundation for future scaling.

---

## 23. Future Scope

Future development of OceanEmbed can include:

- Expansion to the North Indian Ocean
- Extension to other ocean basins
- Longer historical datasets
- Improved reconstruction around the thermocline
- Additional surface and subsurface variables
- Higher spatial and temporal resolution
- Near-real-time reconstruction
- Additional ARGO validation
- Integration with operational oceanographic systems
- Improved uncertainty estimation

---

## 24. Security & Data Handling

The repository does not include private credentials or authentication secrets.

Sensitive configuration values should be stored using environment variables.

Files such as .env and other secret-containing configuration files should not be committed to the repository.

The .gitignore files are used to prevent sensitive or unnecessary files from being committed.

---

## 25. Team

Developed as part of:

Smart India Hackathon 2026 – Internal Round

Team members and their respective roles will be provided as required in the official SIH submission.

---

## 26. Conclusion

OceanEmbed addresses the challenge of limited subsurface ocean observations by using widely available surface ocean and atmospheric observations to reconstruct subsurface temperature profiles.

Our CNN-based approach achieves approximately 0.40°C RMSE, outperforming the Random Forest baseline of approximately 0.60°C RMSE, and was independently evaluated against 33 ARGO float profiles.

The project combines:

- Oceanographic datasets
- Deep learning
- Spatial data processing
- Backend APIs
- Geospatial database retrieval
- Interactive mapping
- Temperature profile visualization

into a single web-based platform.

The current Proof of Concept demonstrates subsurface temperature reconstruction across the Bay of Bengal from the surface to 1000 meters, while providing a foundation for future expansion to larger ocean regions.

**OceanEmbed — Bringing the unseen layers of the ocean closer to observation.**
