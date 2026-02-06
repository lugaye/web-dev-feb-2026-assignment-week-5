# 💡 Week 5: Introduction to JavaScript and DOM Manipulation
"Bringing Your Pages to Life"
Welcome to the most exciting pivot in the course! Up until now, your websites have been beautiful but "static"—they just sit there. This week, we introduce JavaScript, the engine of the web. You will learn to manipulate the Document Object Model (DOM) to make elements react when a user interacts with them.

## 🎯 The Mission Objective
Create a "Dark Mode" toggle. You will build a page with a button that, when clicked, changes the look and feel of the entire site dynamically.

### 🏗️ Requirements (The "Must-Haves")
To pass the automated grader, your project must include:
- Script Linking: An external script.js file linked at the bottom of your index.html.
- The Trigger: A `<button>` with a specific id (e.g., id="mode-toggle").
- DOM Selection: In your JS, select the button and the body using `document.getElementById` or `document.querySelector`.
- The Action: A function that changes the style.backgroundColor of the body.
- State Change: The text inside the button should change (e.g., from "Switch to Dark Mode" to "Switch to Light Mode") when clicked.

### 🛠️ Step-by-Step Instructions
#### Step 1: The Setup
- Create your script.js file. Link it in your HTML right before the closing `</body>` tag.

Why? This ensures the browser loads all the HTML elements before the JavaScript tries to find them.

#### Step 2: The Logic
Think like a programmer:
- Find the button in the HTML.
- Listen for a "click".
- Change the CSS of the body.

#### Step 3: Debugging
Use console.log("Button was clicked!") inside your function. 

Open your browser, right-click, select Inspect, and go to the Console tab. If you see your message, your "wiring" is correct!

### 🌟 Going Above and Beyond (Bonus)
- CSS Classes: Instead of changing styles directly in JS, try body.classList.toggle('dark-theme'). This is the professional way!
- Persistence: Research localStorage. Can you make the site "remember" the user's choice even after they refresh the page?
