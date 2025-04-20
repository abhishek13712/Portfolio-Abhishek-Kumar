const express = require("express");
const app = express();
const Contact=require("./router/Contactus")
const cors = require('cors');
const allowedOrigins = [
	"http://localhost:3000",  // local frontend
	"https://portfolio-abhishek-kumar-front-git-2a22f9-aks-projects-dc81922d.vercel.app/"  // deployed frontend
  ];
  

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST"],
  credentials: true // if you're using cookies or sessions
}));

// const database = require("./config/database");
// const cookieParser = require("cookie-parser");

const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
// database.connect();
//middlewares
app.use(express.json());

app.use("/api", Contact);


//def route

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

