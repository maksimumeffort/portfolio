# Portfolio

## Demo & Snippets

-   Link: https://maksimumeffort.github.io/portfolio/
-   Main Page:
<img width="957" alt="Screen Shot 2023-06-08 at 4 10 11 pm" src="https://github.com/maksimumeffort/portfolio/assets/23536155/d832b7fa-84aa-4cc0-92a7-72cf81fcf365">
-   About section:
<img width="955" alt="Screen Shot 2023-06-08 at 4 10 38 pm" src="https://github.com/maksimumeffort/portfolio/assets/23536155/5cd19261-4717-4655-b025-cb4a43d07e13">
-   Stats section:
<img width="956" alt="Screen Shot 2023-06-08 at 4 10 43 pm" src="https://github.com/maksimumeffort/portfolio/assets/23536155/617eba99-eb1b-4fd6-9be6-7ecd81e0a117">

---

## Requirements / Purpose

### MVP

-   Create a single-page react app
-   Personal projects portfolio is to remain visible at all times
-   Stats section is to display live data obtained through Codewars API 
-   User should be able to view about and stats section simultaneously or one at a time 
-   Project portfolio is to have a brief outline of the project & stack and include link to project's repository

### Purpose of project

-   The focus of the project is to showcase my personal projects to users of the page as well as show my coding progress in a dashboard-like component
-   Stack: React, JavaScript, SASS

---

## Build Steps

-   After forming respository in command line run: ```npm install```
-   To deploy application on local server run: ```npm start```

---

## Design Goals / Approach

-   Flexible
-   Mobile friendly
-   Fast (which is why a single-page application approach was taken)
-   Easy to navigate

---

## Features

-   React app
-   CodeWars API integration

---

## Known issues

-   Projects don't currently have corresponding deployment links, as some of them are not yet deployed
-   Novigation bar buttons click does not render that button active so the css of that button doesn't change (UX issue)
-   Project screenshots can be difficult to see behind the project description section
-   Project language/framework filtering icons are currently not operational 
-   CodeWars stats currently take up too much height on tablet and desktop devices

---

## Future Goals

-   Include each project with deployment, notify user if project has not been deployed
-   Once clicked on deployment link, render the deployed website within the portfolio page to minimize cross-site transitioning and optimise UX
-   Update the website layout to make it look more modern
-   Include a picture of me in the about section
-   Include link to view/ download my resume
-   Include explanation and my proficiency level for every language/ framework listed
-   Add stats from HackerRank, Github and stack overflow to stats section

---

## What did you struggle with?

-   App layout, particularly getting the header to change its layout based on the size of viewport
-   Card layout, i.e making the preview of each project and their description visible to user while taking less real estate on the page

---

## Licensing Details

-   MIT

---
