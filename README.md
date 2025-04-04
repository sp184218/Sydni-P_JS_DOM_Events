# Sydni-P_JS_DOM_Events  
**Git Push Journey: From Errors to Success 🚀**  

## The Journey of Overcoming Git Errors  
This journey began with some early mistakes and confusion, but the goal was achieved—my **index.html**, **script.js**, and now a **To-Do List** app have finally made it to GitHub! Let’s walk through the process, the errors I encountered, and what this exercise was all about.

The journey didn’t stop there, though. I also added new functionality to the project, such as a To-Do List with dynamic task management, task toggling, and Dark Mode for a more interactive user experience. Here’s the updated breakdown of what I worked on:

### Step 1: Cloning the Repository  
The first step was cloning my GitHub repository to my local machine, using the command:  
git clone https://github.com/sp184218/Sydni-P_JS_DOM_Events.git

### The First Error: Remote Origin Issues  
Right after cloning, I tried to push my changes, but encountered errors:  
fatal: 'origin' does not appear to be a git repository  
This happened because I hadn't set the remote correctly, which meant Git couldn’t find where to push my changes. After inspecting with git remote -v, I realized the remote repository hadn’t been properly configured in my local project.

### The Fix: Adding the Remote URL  
Once I added the correct remote repository URL using:  
git remote add origin https://github.com/sp184218/Sydni-P_JS_DOM_Events.git  
Git now knew where to send my files. However, I ran into the next error while trying to push:  
error: src refspec master does not match any  
This occurred because the branch name I was trying to push (master) didn’t exist locally. My local branch was called main—GitHub had recently shifted to using main as the default branch name for new repositories.

### The Fix: Pushing to the Correct Branch  
Once I verified my branch name using git branch and saw that I was on main, I used the following to push:  
git push origin main  

### The Final Error: Commit Issues  
I made another mistake when trying to push without committing my changes. Git was looking for commits to send to the remote repository, but there were none to push! This is why it kept saying:  
error: src refspec main does not match any  
After committing my files:  
git commit -am "Added DOMContentLoaded, KeyDown, and Click events"  
I was able to push successfully to GitHub.

### What I Learned From This Exercise 📚  
- **Remote Setup**: I learned how to set up the remote repository properly and how to link it to my local project using git remote add origin.  
- **Branching Confusion**: Understanding the difference between main and master branches was crucial. By default, GitHub now uses main, and it’s important to push to the correct branch.  
- **Committing Changes**: Before pushing, I had to ensure my changes were committed. Git won’t push anything if there’s no commit history to send.  
- **Error Handling**: Through all the errors, I learned the importance of reading error messages and using Git commands like git remote -v, git branch, and git status to troubleshoot.

### What the Code Does 📝  
This exercise involved two files, **index.html** and **script.js**, both of which are essential for building a small JavaScript app using DOM events.

- **index.html**: This file sets up the basic HTML structure for a webpage. It links to the **script.js** file, which contains JavaScript to interact with the page.  
- **script.js**: This script listens for DOM events like DOMContentLoaded, keydown, and click. It manipulates the DOM by adding interactivity to the page.

The goal of this exercise was to practice working with JavaScript's DOM (Document Object Model) events to make a static webpage interactive. Here's what I did in the script:

- **DOMContentLoaded event**: Ensures the JavaScript runs only after the HTML document is fully loaded.  
- **KeyDown event**: Detects when a key is pressed on the keyboard.  
- **Click event**: Listens for mouse clicks on the page.

Through this process, I reinforced my understanding of JavaScript event handling and how to manipulate HTML elements dynamically.

### New Features Added 💻  
Along with practicing DOM events, I also implemented a **To-Do List** functionality. This involved the following tasks:

- **Creating Tasks**: The user can input a new task in a text box and click "Add" to add the task to the list.  
- **Toggle Task Completion**: Each task can be toggled between completed and incomplete by clicking on the task itself. This adds interactivity and helps in tracking progress.  
- **Dark Mode**: I added a "Toggle Dark Mode" button to switch between light and dark themes, making the app more customizable for the user.

### Conclusion: Persistence Pays Off!  
Despite the errors and missteps along the way, I finally managed to get my files pushed to GitHub! It was a great learning experience, and I now have a deeper understanding of how Git works, how to interact with remote repositories, and how to deal with the various issues that can arise. Persistence and troubleshooting paid off! 🚀






