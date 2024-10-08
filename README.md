website link - https://crud-blue.vercel.app/
# React Campaign Management

This is a React project for managing campaigns. The project includes functionalities to view, create, edit, and delete campaigns. It fetches data from an external API and displays it in a table format. Users can interact with the campaigns through a user-friendly interface.

## Features

- **View Campaigns**: List all campaigns with details such as name, start date, and status.
- **Create Campaign**: Add new campaigns using a form.
- **Edit Campaign**: Modify existing campaign details.
- **Delete Campaign**: Remove campaigns from the list.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Styled Components**: For styling React components.
- **Axios**: For making HTTP requests.
- **React Router**: For navigation and routing within the application.

## Getting Started

### Prerequisites

- Node.js (>=12.x)
- npm (>=6.x) or yarn (>=1.x)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Ehieduebube/CRUD-App
    ```

2. Navigate to the project directory:

    ```sh
    cd react-Campaign
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

    or

    ```sh
    yarn install
    ```

### Running the Application

1. Start the development server:

    ```sh
    npm run dev
    ```

    or

    ```sh
    yarn start
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the application running.


## API

The project interacts with the following API endpoint:

- `GET https://infinion-test-int-test.azurewebsites.net/api/Campaign`: Fetch all campaigns.
- `POST https://infinion-test-int-test.azurewebsites.net/api/Campaign`: Create a new campaign.
- `DELETE https://infinion-test-int-test.azurewebsites.net/api/Campaign/:id`: Delete a campaign by ID.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.


## Acknowledgements

- Special thanks to the creators of React, Styled Components, Axios, and React Router.
- The API is provided by [Infinion Test](https://infinion-test-int-test.azurewebsites.net/index.html).

