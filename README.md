# ChatGPT Tab Opener Chrome Extension

## Description

The ChatGPT Tab Opener is a simple Chrome extension that allows users to quickly open a new tab to the ChatGPT website (https://chat.openai.com) with a single click.

## Features

- Adds a button to the Chrome toolbar
- Opens a new tab to ChatGPT when clicked
- Lightweight and easy to use

## Installation

To install this extension in Chrome, follow these steps:

1. Download or clone this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner of the page.
4. Click on the "Load unpacked" button that appears after enabling Developer mode.
5. Select the directory containing the extension files (`manifest.json` and `background.js`).
6. The extension should now appear in your list of installed extensions and in the Chrome toolbar.

## Usage

After installation, using the extension is simple:

1. Click on the extension icon in the Chrome toolbar (it will be visible next to the address bar).
2. A new tab will open, navigating directly to https://chat.openai.com.

## Files

This extension consists of two main files:

- `manifest.json`: Contains metadata about the extension and its capabilities.
- `background.js`: Contains the JavaScript code that opens the new tab to ChatGPT.

## Customization

If you want to modify the extension:

- To change the website opened, edit the URL in `background.js`.
- To change the extension's name or description, edit the corresponding fields in `manifest.json`.

## Troubleshooting

If the extension doesn't work as expected:

1. Ensure it's properly installed and enabled in `chrome://extensions/`.
2. Try reloading the extension by clicking the refresh icon on its card in `chrome://extensions/`.
3. If problems persist, uninstall and reinstall the extension.

## Privacy

This extension does not collect or transmit any user data. It simply opens a new tab to a specified URL.

## License

This project is open source and available under the MIT License.

## Support

For support, please open an issue in the GitHub repository or contact the extension author.
