const { app, BrowserWindow } = require("electron"); //
const path = require("path");

app.whenReady().then(() => {
  createWindow(); // calls create window function

  // allows the window to be re-opened if it wasn't completely closed
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  // Quit when all windows are closed
  app.on("window-all-closed", () => {
    // Allows app to stay active until the user explicitly quits out of it through platform checking
    if (process.platform !== "darwin") app.quit();
  });
});

// createWindow function creates thew window and loads the index.html file into it
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      // enableRemoteModule: true
    },
  });

  win.loadFile("src/index.html"); // loads index.html file
};
