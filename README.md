# NavigateIQ

NavigateIQ is a modern, user-friendly travel advisory application designed to help users explore hotels, restaurants, and famous landmarks globally. The app integrates real-time location and mapping capabilities, leveraging the power of RapidAPI and Google Maps API.

---

## Features
- **Interactive Map**: Displays nearby places such as restaurants, hotels, and attractions with markers.
![image](https://github.com/user-attachments/assets/0ed1e2ea-952c-45b6-b10e-3a012b0e77f5)

- **Location Detection**: Automatically detects user's current location using Geolocation.
- **Place Details**: Includes detailed information about each place, such as ratings, reviews, awards, price level, and contact information.
- ![image](https://github.com/user-attachments/assets/d1dd821e-a0d2-4993-86d0-15046d6d16e8)

- 
- **Responsive Design**: Adapts seamlessly to different screen sizes.
- **Filters**: Filter places by rating and type (e.g., restaurants, hotels, attractions).
- **Loading State**: Indicates data loading with a stylish loader.

---

## Tech Stack

### Frontend
- **React**: Component-based UI development.
- **Material-UI**: Modern UI components and styling.
- **Google Map React**: Interactive map integration.

### API Integration
- **RapidAPI**: Fetches data for restaurants, hotels, and attractions.
- **Google Maps API**: Provides map functionality and marker placement.

---

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/navigateiq.git
   ```
2. Navigate into the project directory:
   ```bash
   cd navigateiq
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your Google Maps API key:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and visit `http://localhost:3000`.

---

## Project Structure
- **`/src/components`**:
  - `Map`: Displays an interactive map with markers for places.
  - `List`: Sidebar with filters and list of places.
  - `Header`: Contains the app's navigation and search.
  - `Placedetail`: Displays detailed information about a selected place.
- **`/src/utils`**: Utility functions such as API requests.
- **`/src/App.js`**: Root component where the main logic resides.

---

## API Integration
### 1. RapidAPI
Used to fetch details about restaurants, hotels, and attractions.
- Example: `getplacesdata(type, sw, ne)`

### 2. Google Maps API
Handles the interactive map and place markers.

---

## Future Enhancements
1. **User Authentication**: Allow users to log in and save their favorite places.
2. **Weather Information**: Display weather data for the selected location.
3. **Multi-Language Support**: Support for multiple languages to reach a broader audience.
4. **Dark Mode**: Improve user experience with a dark theme.

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the project.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature/fix bug"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments
- **React**: Framework for building the application.
- **Material-UI**: For beautiful UI components.
- **RapidAPI**: For data APIs.
- **Google Maps API**: For mapping and geolocation.

---

## Contact
If you have any questions or suggestions, feel free to reach out:
- Portfolio: [Abhikhokhar.live](https://abhikhokhar.live)
- GitHub: [Your GitHub Profile](https://github.com/abhikhokhar)

