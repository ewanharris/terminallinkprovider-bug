# 

This repo outlines an issue with VS Code, TerminalLinkProvider and Tasks that reuse a terminal. To reproduce:

1. clone this repo
2. Debug the extension
3. Add the below task to the folder you are debugging in
```json
{
	"version": "2.0.0",
	"tasks": [
		{
			"command": "node -e \"console.log('link')\"",
			"label": "Test",
			"type": "shell",
			"problemMatcher": [],
			"group": {
				"kind": "build",
				"isDefault": true
			}
		}
	]
}
```
4. Open command palette and `Tasks: Run Build Task`
5. Click `link` in the terminal, a notification shows
6. Open command palette and `Tasks: Run Build Task` (make sure to leave the terminal open)
7. Click `link` in the terminal, no notification shows
   * `link` is identified and underlined correctly, but `handleTerminalLink` is just never called
