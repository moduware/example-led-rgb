# LED RGB via PWM Example
Example of module breadboard prototype with RGB LED, including firmware, module driver and tile. 

## Hardware required
- 1 smartphone (iOS or Android based)
- 1 x Moduware MSP430 Developer's Module
- 1 x Moduware Modpack
- 1 x MSP-EXP430G2 LaunchPad (required to flash MSP430 module)
- 1 x Breadboard
- male – female connectors and jumper wires
- 1 x LED RGB WS2812B
- 3 x 1k ohm ¼ W 1% resistor

## Software required
- [Code Composer Studion IDE][ccs] for firmware
- Any code editor (like [Atom][atom], [Visual Studio Code][vscode], [Sublime Text][sublime], [Brackets][brackets], etc..) for tile
- [Moduware app][moduwareapp] on your smartphone

## Breadboard configuration
![breadboard]

## Useful links
- [Platform communication explanation][platform-comm-explanation]
- [MSP430 Firmware template][msp430-firmware-template]
- [Flashing firmware to MSP430 developer's module][msp430-firmware-flashing]
- [WebView Tile boilerplate][webview-boilerplate]
- [Installing webview tile onto your smartphone in developer's mode][tile-devmod-installation]

[moduwareapp]: https://moduware.com/app/

[ccs]: http://www.ti.com/tool/CCSTUDIO
[atom]: https://atom.io/
[vscode]: https://code.visualstudio.com/
[sublime]: https://www.sublimetext.com/
[brackets]: http://brackets.io/

[breadboard]: https://github.com/nexpaq/example-led-rgb/raw/master/breadboard/led-rgb-example_bb.png "LED RGB Example"

[platform-comm-explanation]: https://github.com/moduware/developer-documentation/blob/master/Platform%20communication.md
[webview-boilerplate]: https://github.com/moduware/webview-tile-boilerplate
[msp430-firmware-template]: https://github.com/moduware/msp430-firmware-template
[msp430-firmware-flashing]: https://github.com/moduware/msp430-firmware-template/blob/master/Flashing.md
[tile-devmod-installation]: https://github.com/moduware/webview-tile-boilerplate/blob/master/WEBVIEW-TILE-INSTALL-INSTRUCTIONS.md