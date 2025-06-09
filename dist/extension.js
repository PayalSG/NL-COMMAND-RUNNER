/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(__webpack_require__(1));
function activate(context) {
    const disposable = vscode.commands.registerCommand('extension.runNaturalCommand', async () => {
        const userInput = await vscode.window.showInputBox({
            prompt: "Enter a Git-related command (e.g., 'initialize a git repo', 'add file', 'push changes')"
        });
        if (!userInput) {
            vscode.window.showErrorMessage("No input provided.");
            return;
        }
        const command = parseGitCommand(userInput);
        if (!command) {
            vscode.window.showErrorMessage("Sorry, I couldn't understand your command.");
            return;
        }
        const terminal = vscode.window.activeTerminal || vscode.window.createTerminal("Git Assistant");
        terminal.show(true);
        terminal.sendText(command);
    });
    context.subscriptions.push(disposable);
}
function parseGitCommand(input) {
    const text = input.toLowerCase();
    // Basic Git
    if (text.includes("init"))
        return "git init";
    if (text.includes("clone"))
        return "git clone <repo>";
    if (text.includes("status"))
        return "git status";
    if (text.startsWith("add "))
        return "git add <file>";
    if (text.includes("commit"))
        return 'git commit -m "Your message here"';
    if (text.includes("push"))
        return "git push";
    if (text.includes("pull") && !text.includes("stash"))
        return "git pull";
    if (text.includes("fetch"))
        return "git fetch";
    // Branching and Merging
    if (text.includes("list branches"))
        return "git branch";
    if (text.startsWith("create branch"))
        return "git branch <branch-name>";
    if (text.startsWith("switch to branch"))
        return "git checkout <branch>";
    if (text.includes("create and switch"))
        return "git checkout -b <branch>";
    if (text.includes("merge"))
        return "git merge <branch>";
    if (text.includes("delete branch"))
        return "git branch -d <branch>";
    if (text.includes("rebase"))
        return "git rebase <branch>";
    // Viewing History
    if (text.includes("log oneline"))
        return "git log --oneline";
    if (text.includes("log"))
        return "git log";
    if (text.includes("diff"))
        return "git diff";
    if (text.includes("show commit"))
        return "git show <commit>";
    // Undoing Changes
    if (text.includes("unstage file"))
        return "git reset <file>";
    if (text.includes("reset hard"))
        return "git reset --hard <commit>";
    if (text.includes("discard changes"))
        return "git checkout -- <file>";
    if (text.includes("revert commit"))
        return "git revert <commit>";
    // Remotes
    if (text.includes("list remotes"))
        return "git remote -v";
    if (text.includes("add remote"))
        return "git remote add <name> <url>";
    if (text.includes("remove remote"))
        return "git remote remove <name>";
    if (text.includes("push to remote"))
        return "git push <remote> <branch>";
    if (text.includes("pull from remote"))
        return "git pull <remote> <branch>";
    // Stashing
    if (text.includes("stash pop"))
        return "git stash pop";
    if (text.includes("stash apply"))
        return "git stash apply";
    if (text.includes("stash list"))
        return "git stash list";
    if (text.includes("stash drop"))
        return "git stash drop <stash>";
    if (text.includes("stash"))
        return "git stash";
    // Tagging
    if (text.includes("list tags"))
        return "git tag";
    if (text.includes("create tag"))
        return "git tag <tagname>";
    if (text.includes("delete tag"))
        return "git tag -d <tagname>";
    if (text.includes("push tag"))
        return "git push <remote> <tagname>";
    // Config & Help
    if (text.includes("set username"))
        return 'git config --global user.name "Name"';
    if (text.includes("set email"))
        return 'git config --global user.email "email@example.com"';
    if (text.includes("list config"))
        return "git config --list";
    if (text.includes("help"))
        return "git help <command>";
    return null;
}
function deactivate() { }


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=extension.js.map