import * as m from "../lib/modernExtend";
import * as tuya from "../lib/tuya";
import type {DefinitionWithExtend} from "../lib/types";

export const definitions: DefinitionWithExtend[] = [
    {
        zigbeeModel: ["AJ-RGBCCT 5 in 1"],
        model: "Aj_Zigbee_Led_Strip",
        vendor: "Ajax Online",
        description: "LED Strip",
        extend: [m.light({colorTemp: {range: undefined}, color: true})],
    },
    {
        zigbeeModel: ["AJ_ZB30_GU10", "AJ_ZB120_GU10"],
        model: "AJ_ZB_GU10",
        vendor: "Ajax Online",
        description: "Smart Zigbee pro GU10 spotlight bulb",
        extend: [m.light({colorTemp: {range: [158, 495]}, color: true, effect: false})],
    },
    {
        zigbeeModel: ["AJ_ZBPROA60", "AJ_ZBPROA6"],
        model: "AJ_ZIGPROA60",
        vendor: "Ajax Online",
        description: "Smart Zigbee pro 12W A60 bulb",
        extend: [m.light({colorTemp: {range: [158, 495]}, color: true, turnsOffAtBrightness1: true})],
    },
    {
        zigbeeModel: ["ZB_A60_RGBCW"],
        model: "ZB_A60_RGBCW",
        vendor: "Ajax Online",
        description: "Smart Zigbee pro 12W A60 RGBCW bulb",
        extend: [m.light({colorTemp: {range: [153, 500]}, color: true})],
    },
    {
        fingerprint: tuya.fingerprint("TS0505B", ["_TZ3210_hzy4rjz3"]),
        model: "AJ_RGBCCT_CTRL",
        vendor: "Ajax Online",
        description: "Smart Zigbee LED strip RGB+CCT",
        extend: [tuya.modernExtend.tuyaLight({color: true, colorTemp: {range: [153, 500]}})],
    },
    {
        fingerprint: [{modelID: "CCT Light", manufacturerName: "ZB/Ajax Online", manufacturerID: 4137}],
        model: "ZB-CCT_Filament",
        vendor: "Ajax Online",
        description: "Zigbee LED filament light dimmable E27, edison ST64, flame 2200K",
        extend: [m.light({colorTemp: {range: [153, 454]}})],
    },
];
