import * as fs from "fs";
import * as Promise from "promise";


export interface IAthCalenderApiConfig {
    CLIENT_FILE_PATH: string;
    REHEARSAL_SPREADSHEET_ID: string;
    REHEARSAL_CALENDAR_ID: string;
}

export const load = (configFilePath: string) => {

    return new Promise<IAthCalenderApiConfig>((resolve, reject) => {
        fs.readFile(configFilePath, (err, content) => {
            if(err) {
                console.error("Could not load config file.")
                reject(err);
            }

            resolve(JSON.parse(content.toString()) as IAthCalenderApiConfig);
        });

    })
}

export const getClientSecret = (clientSecretPath: string) => {
    return new Promise((resolve, reject) => {
        fs.readFile(clientSecretPath, (err, content) => {
            if (err) {
            console.log("Error loading client secret file");
            reject(err);
            }

            resolve(JSON.parse(content.toString()));
        });
    });
}