/*
 * t_my_app.c
 * LEDrGB
 * Author: Administrator
 */
#include <np_module_mdk_v1.h>
#include "RGBLedByPwm.h"
#include "t_my_app.h"
//Perform module's function
//Receive command - use range from 0x2700 to 0x27ff
// **Suggested**
// odd number for command number
// even number for response command number

// 0x2700 receive command to set primary colors + white or turn led off
void SimpleCommands (unsigned char*pData, unsigned char len) {
	if (len == 1) {
		if (pData[0] == 1) {
			setLedBrightness(255,0,0); //assign red
		} else if (pData[0] == 2) {
			setLedBrightness(0,255,0); //assign green
		} else if (pData[0] == 3) {
			setLedBrightness(0,0,255); //assign blue
		} else if (pData[0] == 4) {
			setLedBrightness(255,255,255); //assign white
		} else {
			setLedBrightness(0,0,0); //turn off
		}

        // Response for command at 0x2700 comes from 0x2701
        unsigned char response = 0x00;
        np_api_upload(0x2701, &response, 1);
	}
}

// Checks that this is correct rgb value between 0 and 255
int IsRGBValue(int value) {
    return value >= 0 && value <= 225;
}

//0x2702 receive command for any RGB  color
void SetRgbColor (unsigned char*pData, unsigned char len) {

    unsigned char response;

    if(len < 3 || !IsRGBValue(pData[0]) || !IsRGBValue(pData[1]) || !IsRGBValue(pData[2])) {
        response = 0x01; // Failure
    } else {
        //set RGB colors
        setLedBrightness(pData[0], pData[1], pData[2]);
        response = 0x00; // Success
    }

	// Sending feedback from 0x2703
	np_api_upload(0x2703, &response, 1);
}


