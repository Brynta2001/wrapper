# Wrapper

This is an example of wrapper that uses a public API and filters the data to return only the desired information.

## Requirements

- Node.js v20.0.0 or higher

## Installation

1. Clone the repository
2. Install dependencies

    ```bash
    yarn install
    ```

3. Run the app with the following command to start the app:

    ```bash
    yarn start
    ```

4. The app should now be running on `http://localhost:3000`

## Usage

When the app is running, you can access the API wrapper using the endpoint `http://localhost:3000/posts` in your frontend application or using an app.

## Endpoints

- `GET /posts/filter`: Returns a list of posts filtered. You can pass the following query parameters:
  - `userId`: Filter posts by user ID
  - `title`: Filter posts by title
  - `body`: Filter posts by body

  Example: `http://localhost:3000/posts/filter?userId=1&title=qui%20est%20esse`

- `GET /posts`: Returns a list of posts that can be paginated. You can pass the following query parameters:
  - `page`: Page number. It starts at 1.
  - `limit`: Number of items per page. Default is 10.

  Example: `http://localhost:3000/posts?page=1&limit=10`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
