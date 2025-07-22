# FlavorAI

## Run

Navigate to [backend/](./backend) and [frontend/](./frontend) folders and read README.md

## Features

- **User Authentication**: Create an account and log in to access personalized features.
- **Recipe Management**: Add your own recipes with detailed information including ingredients, cooking instructions, and other basic details.
- **Discover Recipes**: Browse and search for recipes by their name.
- **Recipe-sepcific pages**: Every recipe has its own page.
- **Rate Recipes**: Users can rate recipes on a scale of 1 to 5 stars.
- **Personal Recipe Book**: View and manage your own created recipes separately from the public collection.

## Architecture

The application is built with a modern architecture, separating concerns for maintainability and scalability.

### Frontend

The frontend follows a Simple Evolution Design, inspired by Feature-Sliced Design (FSD). It is organized into three main layers:

- `app`: The application-wide setup, including routing, global styles, and providers.
- `features`: Specific application features, like user authentication or recipe creation. Each feature is a self-contained module.
- `shared`: Reusable components, utilities, and UI elements that are used across multiple features and layers.

### Backend

The backend uses a default modular architecture with two primary layers:

- `api`: This layer handles the API endpoints, request handling, and responses. It's the entry point for all client-server communication.
- `shared`: Contains shared logic, utilities, and modules that can be used by different parts of the API layer, such as database models or authentication services.

## React Code Styles

To maintain consistency and readability across the React codebase, all files (components, hooks, and others) share the same naming convention: `name-of-file.ts`.

## AI Integrations

The project integrates with AI models through OpenRouter to provide enhanced features. The implementation details for the OpenRouter integration can be found in the `backend/src/shared/ai` directory. This integration can be used for features like recipe suggestions, ingredient analysis, or generating cooking tips.

But I did not have time to integrate AI with the frontend and implement specific functionality
