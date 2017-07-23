# react-modeless

__Barebone modeless/modal dialog box component for React__

>Modeless dialog boxes, which stay on the screen and are available for use at any time but permit other user activities

>Modal dialog boxes, which require the user to respond before continuing the program

## Demo & Example

Live demo: [florinn.github.io/react-modeless](http://florinn.github.io/react-modeless/)

To build the example locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-modeless is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-modeless.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-modeless --save
```


## Usage

```javascript
import DialogBox from 'react-modeless'

<DialogBox
	isOpen={isDialogOpen}
	onClose={onClose}
	style={dialogStyle}
	containerClassName={containerClass}
	noBackdrop={!isDialogModal}
	clickBackdropToClose={false}>
	<div className='content'>
		<h2>This is a dialog box</h2>
		<button onClick={onClose}>Close dialog</button>
	</div>
</DialogBox>
```

### Properties

* __isOpen__ (bool) - visibility of the dialog
* __onClose__ (func) - handler for the close dialog event
* __className__ (string) - dialog css class
* __containerClassName__ (string) - css class for the outer `div` element, ancestor to both the dialog and backdrop
* __style__ (object) - dialog inline style 
* __noBackdrop__ (bool) - `yes` (default) means the dialog is modeless; `no` means the dialog is modal
* __clickBackdropToClose__ (bool) - controls wether the modal dialog is closed when clicking outside it
* __backdropClassName__ (string) - backdrop css class
* __backdropStyle__ (object) - backdrop inline stype


## Development (`src`, `dist` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled UMD bundle (generated with Babel) is available in `dist` for use with node.js, browserify, webpack or to be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `dist`, run `npm run watch` (this is useful if you are working with `npm link`).


## License

MIT
