
# Vendease Articles News Feed

This project is an Angular application that utilizes the News API to fetch news articles and display them in a responsive page. Additionally, it allows users to bookmark articles and manage their bookmarked list.

To run this project, follow the steps below:

## Prerequisites
Before running the project, ensure that you have the following installed on your system:
- Node.js: [Download and Install Node.js](https://nodejs.org)
- Angular CLI: Install globally using npm with the command `npm install -g @angular/cli`

## Getting Started
1. Clone the repository or download the project files from GitHub.
2. Open a terminal or command prompt and navigate to the project's root directory.
3. Run `npm install` to install the project dependencies.

## Obtaining the API Key
To use the News API and fetch news articles, you need to obtain an API key from [https://newsapi.org/](https://newsapi.org/). Follow these steps to get your API key:
1. Visit [https://newsapi.org/](https://newsapi.org/) and create an account if you don't have one yet.
2. After logging in, go to the API Keys tab in your account settings.
3. Copy the API key provided.

## Configuring the API Key
Next, you need to configure the API key in the Angular project. 

1. In the project's root directory, navigate to `/src/environments/`.
2. Open the `environment.ts` file.
3. Replace `'YOUR_API_KEY'` with your actual API key obtained from News API.
4. Save the file.

## Running the Application
Once you have completed the above setup steps, you can now run the Angular application.

1. In the terminal or command prompt, navigate back to the project's root directory.
2. Run `ng serve` to start the development server.
3. Open a web browser and go to `http://localhost:4200/` to view the application.

## Usage
The Angular News Feed app provides the following features:

### Viewing the News Feed
- On the homepage, you will see a feed of news articles fetched from the News API.
- Each article card displays the article's title, description, source and image.
- Clicking on an article link will open the full article in a new tab.

### Bookmarking an Article
- To bookmark an article, click on the bookmark button located on each article card.
- The bookmarked article will be added to your list of bookmarked articles.

### Viewing Bookmarked Articles
- To view your bookmarked articles, click on the "Bookmarks" link in the navigation bar.
- You will see a list of all the articles you have bookmarked.
- Each bookmarked article card displays the same information as in the news feed.

### Removing a Bookmarked Article
- To remove a bookmarked article from the list, click on the remove bookmark icon located on each bookmarked article card.
- The article will be removed from your list of bookmarked articles.

## Technologies Used
This project utilizes the following technologies and tools:
- Angular
- HTML/CSS
- Angular Material
- News API

## Contributing
If you would like to contribute to this project, feel free to submit a pull request. However, please adhere to the project's coding style and conventions. For major changes or new features, it is recommended to open an issue first to discuss the proposed changes.

## License
This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this code as per the terms of the license.
