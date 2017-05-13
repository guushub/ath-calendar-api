/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        sheets(version: string): any;
        sheets(version: 'v4'): sheets.v4.Sheets;
    }

    namespace sheets {
        namespace v4 {
            export interface Sheets {
                spreadsheets: {
                    values: {
                        get: (request: SheetsRequest, 
                            errorCallback: ( err: Error, response: {
                                values: any[]
                            }) => void) => void;
                    }
                }
            }

            interface SheetsRequest {
                    // The ID of the spreadsheet to retrieve data from.
                    spreadsheetId: string;

                    // The A1 notation of the values to retrieve.
                    range: string;

                    // How values should be represented in the output.
                    // The default render option is ValueRenderOption.FORMATTED_VALUE.
                    valueRenderOption?: string;

                    // How dates, times, and durations should be represented in the output.
                    // This is ignored if value_render_option is
                    // FORMATTED_VALUE.
                    // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
                    dateTimeRenderOption?: string;

                    auth: oauth2.v2.Oauth2
            }
        }
    }
}