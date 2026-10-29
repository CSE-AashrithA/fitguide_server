const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.get("/api/fitness", (req, res) => {
    res.send([movies]);
  });
  
  // listen for incoming requests
  app.listen(3000, () => {
    console.log("Server is running");
  });

let guides = [
    {
        "_id": 1,
        "title": "Pre-Game Fuel",
        "category": "Nutrition",
        "description": "Choose carbohydrates and lean protein before practice or competition for steady energy.",
        "best_time": "Two to three hours before activity",
        "main_image": "pre-game-fuel.jpg"
    },
    {
        "_id": 2,
        "title": "Recovery Nutrition",
        "category": "Nutrition",
        "description": "Eat a balanced meal with protein and carbohydrates after a workout to support recovery.",
        "best_time": "Within two hours after activity",
        "main_image": "recovery-meal.jpg"
    },
    {
        "_id": 3,
        "title": "Breakfast Fuel",
        "category": "Meals",
        "description": "Start busy mornings with a breakfast that includes protein, fruit, and whole grains.",
        "best_time": "Before morning classes or workouts",
        "main_image": "breakfast.jpg"
    },
    {
        "_id": 4,
        "title": "Smart Snacks",
        "category": "Meals",
        "description": "Keep easy snacks available between classes to maintain your energy throughout the day.",
        "best_time": "Between meals or before practice",
        "main_image": "snacks.jpg"
    },
    {
        "_id": 5,
        "title": "Hydration Basics",
        "category": "Hydration",
        "description": "Drink water regularly throughout the day instead of waiting until you feel thirsty.",
        "best_time": "All day",
        "main_image": "hydration.jpg"
    },
    {
        "_id": 6,
        "title": "Balanced Lunch",
        "category": "Meals",
        "description": "Build a lunch with carbohydrates, protein, vegetables, and healthy fats.",
        "best_time": "Midday",
        "main_image": "balanced-lunch.jpg"
    },
    {
        "_id": 7,
        "title": "Dinner for Recovery",
        "category": "Recovery",
        "description": "A balanced dinner helps restore energy after a long day of classes and training.",
        "best_time": "After evening practice",
        "main_image": "dinner.jpg"
    },
    {
        "_id": 8,
        "title": "Smoothie Recovery",
        "category": "Recovery",
        "description": "A fruit and protein smoothie is a quick option when you need recovery nutrition on the go.",
        "best_time": "After a workout",
        "main_image": "c"
    }
];