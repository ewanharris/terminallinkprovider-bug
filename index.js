const vscode = require('vscode');

exports.activate = function active(context) {

	vscode.window.registerTerminalLinkProvider({
		provideTerminalLinks: (context) => {
			// Detect the first instance of the word "link" if it exists and linkify it
			const startIndex = context.line.indexOf('link');
			if (startIndex === -1) {
				return [];
			}
			return [
				{
					startIndex,
					length: 'link'.length,
					tooltip: 'Show a notification',
					// You can return data in this object to access inside handleTerminalLink
					data: 'Example data'
				}
			];
		},
		handleTerminalLink: (link) => {
			vscode.window.showInformationMessage('Link activated!')
		}
	});

}
