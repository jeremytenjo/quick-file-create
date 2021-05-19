const handleFolderCreation = require('./handleFolderCreation')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate() {
  handleFolderCreation()
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate
}
