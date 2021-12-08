### How to debug JavaScript with VSCode
* Clone this repo to your computer
* Install live-server
    * npm install -g live-server
* Open project in VS Code
* Server project with live-server
    * live-server .
* Add debug configuration
    * Debug -> Add Configuration -> Chrome: Launch
* Restart VS Code
    * This assures the debug configuration is available
* Run Debugger
    * Debug -> Start Debugger  
    * In VS Code:
        * Debug sidebar will open 
        * Debug toolbar will show at top of VS Code  
    * VS Code will open a new Chrome window with debugging enabled
        
### Debug Toolbar:  
![Debug Toolbar](/img/debug-toolbar.png)
* Handle - Allows you to move the toolbar
* (![Pause](/img/debug-toolbar-pause.png)/![Pause](/img/debug-toolbar-continue.png)) Pause/Continue - Pause/Continue the debugger, continue will run the application till it hits the next breakpoint
* (![Step Over](/img/debug-toolbar-stepover.png)) Step Over - Run the code without inspecting
* (![Step Into](/img/debug-toolbar-stepinto.png)) Step Into - Run the code and "dive" into any functions
* (![Step Out Of](/img/debug-toolbar-stepoutof.png)) Step Out Of - Run code till out of the current function
* (![Restart](/img/debug-toolbar-restart.png)) Restart - Restart the debugging section (refreshes the browser)
* (![Stop](/img/debug-toolbar-stop.png)) Stop - End the debugger session

### Console Commands
* [debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
    * Invoke the debugger at any time from the browser
* [console](https://developer.mozilla.org/en-US/docs/Web/API/Console)
    * The log function is just the beginning

### Parcel debug configuration
```javascript
{
    "type": "chrome",
    "request": "launch",
    "name": "Launch Chrome w/Parcel",
    "url": "http://localhost:1234",
    "webRoot": "${workspaceFolder}",
    "trace": true,
    "breakOnLoad": true,
    "sourceMapPathOverrides": {
        "*": "${webroot}/src/*"
    }
}
```

