// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "subwaysurfersembedded" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('subwaysurfersembedded.play', () => {
		// webview using own html file
		const panel = vscode.window.createWebviewPanel(
			'SubwaySurfersEmbedded',
			'Subway Surfers Embedded',
			vscode.ViewColumn.One,
			{
				enableScripts: true
			}
		);

		panel.webview.html = "<!DOCTYPE html>" +
		"<html lang=\"en\">" +
		"<head>" +
		"	 <meta charset=\"UTF-8\">" +
		"	 <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"+
		"	 <title>Document</title>"+
		"    <style>" +
		"        #iframehtml5 {" +
		"            width: 100vw;" +
		"            height: 100vh;" +
		"            margin: 0;" +
		"            transform: translate(-1.2rem);" +
		"        }" +
		"    </style>" +
		"</head>"+
		"<body style=\"margin: 0;width: 100vw;height: 100vh;overflow: hidden;\">"+
		"	 <iframe name=\"Subway Surfers Frame\" id=\"iframehtml5\" width=\"100%\" height=\"100%\" src=\"https://szhong.4399.com/4399swf//upload_swf/ftp35/liuxinyu/20210324/jj01/index.html\" frameborder=\"0\" border=\"0\" scrolling=\"auto\" class=\"iframe-default\" allowfullscreen=\"\"></iframe>" +
		"</body>"+
		"</html>";

		panel.onDidDispose(
			() => {
				console.log("Webview disposed");
			},
			null,
			context.subscriptions
		);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
