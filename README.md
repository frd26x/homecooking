
### Files to add

You should have a `server/.env` file, with for example the following values:
```
PORT=5000
SESSION_SECRET=anyValue
MONGODB_URI=......
CLOUDINARY_CLOUD_NAME=......
CLOUDINARY_API_KEY=......
CLOUDINARY_API_SECRET=......
```


**To install all the packages**
```sh
# Install server and client packages + build the React applicatin
$ npm install

# OR you can install manually the server and client packages
$ (cd server && npm install)
$ (cd client && npm install)
```

**To install a package for the server**
```sh
$ cd server
$ npm install axios
```

**To install a package for the client**
```sh
$ cd client
$ npm install axios
```

**To run the server and the client**
```sh
# Open a first terminal
$ npm run dev:server
# Run the server on http://localhost:5000/

# Open a second terminal
$ npm run dev:client
# Run the client on http://localhost:3000/
```
