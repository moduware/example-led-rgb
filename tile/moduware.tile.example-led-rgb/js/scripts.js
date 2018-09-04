/**
 * Actions when html and all external files are loaded
 */
document.addEventListener('DOMContentLoaded', function(event) {
	// Creating header on top of tile
  WebViewTileHeader.create('RGB LED');

	// Actions when turn OFF
	document.getElementById('offbutton').addEventListener('click', turnLedOff);

	// Actions when turn on red
	document.getElementById('redb').addEventListener('click', setRed);

	// Actions when turn on green
	document.getElementById('greenb').addEventListener('click', setGreen);

	// Actions when turn on blue
	document.getElementById('blueb').addEventListener('click', setBlue);

	// Actions when turn on white
	document.getElementById('whiteb').addEventListener('click', setWhite);

	// Actions when changing to any RGB color
	document.getElementById('rgb_button').addEventListener('click', getRGB);

});

/**
 * Actions when nexpaq API completely initialized 
 * and we can start working with it
 */
document.addEventListener('WebViewApiReady', function() {

	/**
   * We also may want to perform some actions when user leaves tile,
   * turn of module sensor for example to cut power use.
   * You can remove it if you don't need to do anything on exit.
   */
  Moduware.v0.API.addEventListener('BeforeExit', beforeExitActions);
});

/**
 * Handles tile exit event and perfoms last actions
 */
function beforeExitActions() {
  turnLedOff();
}

/**
 * Turn off RGB LED
 * 
 */
function turnLedOff() {
	/**
   * As API ready and we are listening for events we can send some initial commands
   * for our module if required. We can turn on sensor for example.
   * There are 3 arguments passed when app runs tile:
   * - Target module UUID
   * - Target module slot in gateway
   * - Target module type (i.e. nexpaq.module.laser)
   */
	Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'TurnOff', []);
};

/**
 * Turn RGB LED to red color
 * 
 */
function setRed() {
	Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRed', []);
};

/**
 * Turn RGB LED to green color
 * 
 */
function setGreen() {
	Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetGreen', []);
};

/**
 * Turn RGB LED to blue color
 * 
 */
function setBlue() {
	Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetBlue', []);
};

/**
 * Turn RGB LED to white color
 * 
 */
function setWhite() {
	Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetWhite', []);
};

/**
 * Show entered rgb color
 */
function getRGB() {
	// collect values
	var R=parseInt(document.getElementById('R_value').value);
	var G=parseInt(document.getElementById('G_value').value);
	var B=parseInt(document.getElementById('B_value').value);

	// filter incorrect values
	if(R < 0 || G < 0 || B < 0) return;
	if(R > 255 || G > 255 || B > 255) return;

	// send command to module
	Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [R, G, B]);
};
