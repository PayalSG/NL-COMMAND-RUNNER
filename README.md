Prerequisites for macOS
✅ Install Node.js + npm : brew install node
✅ Install Yeoman + VS Code Extension Generator : npm install -g yo generator-code
Install vs code

******************************************

Step-by-Step Guide (macOS-Friendly)

Step 1: Create the Extension
1. Open your terminal (iTerm or default macOS Terminal).
2. Run: yo code
3. When prompted:

Prompt	Your Answer
What type of extension?	New Extension (TypeScript)
Name?	nl-command-runner
Display name?	Natural Command Runner
Description?	Run dev commands using natural language
Enable Git?	Yes or No (your choice)
Package manager?	npm

4. Move into the new directory: cd nl-command-runner

*******************************************

Step 2: Add the Extension Logic

already added in src folder 

******************************************

Step 3: Register the Command
In your package.json, find the "contributes" and "activationEvents" sections

*******************************************

Step 4: Install Dependencies & Build
npm install

********************************************
Step 5: Run Your Extension
1. Press F5 in VS Code (this opens a new window: "Extension Development Host").
2. In the new window, press Cmd + Shift + P → Type: Run Natural Dev Command
3. In new window Type: create a git branch naming etbtests

Now you will see the below commend has been triggered
git checkout -b etbtests

*********************************************
