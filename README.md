# DynamicWebsite

## First -> api folder

### Technologies used
* NodeJS
* Express
* MongoDB

### To run the project
1. Open a terminal in the project folder (**api folder**).
2. Download the dependencies with the command: **npm install**
3. Run the project with the command: **nodemon app.js**

### To back up the MongoDB database
* **mongodump --db dynamicwebsite --out location_where_the_backup_will_be_generated**

### Restore the MongoDB database backup
* **mongorestore --db dynamicwebsite location_where_the_backup_was_generated**

## Second -> site folder

### Technologies used
* ReactJS
* Next.js
* Bootstrap

### To run the project
1. Open a terminal in the project folder (**site folder**).
2. Download the dependencies with the command: **npm install**
3. Run the project with the command: **npm run dev**

## Third -> App folder

### Technologies used
* React-Native

### To run the project
1. Open a terminal in the project folder (**App folder**).
2. To start Metro, run inside your React Native project folder: **npx react-native start**
3. To run: **npx react-native run-android**
