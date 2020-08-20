/*
 * ClearURLs
 * Copyright (c) 2017-2020 Kevin Röbert
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*jshint esversion: 6 */
/*
* This script is responsible for the storage.
*
* Note: this script also includes some code for backward-compatibility.
*/

import OptionsSync from 'webext-options-sync'
import { Utils } from '../utils/utils'

/**
 * Saves all options in sync storage.
 */
export const syncStorage = new OptionsSync({
    defaults: {
        rulesHash: '',
        badgedStatus: true,
        enabled: true,
        totalCount: 0,
        cleanedCount: 0,
        rulesStatus: 'error',
        loggingEnabled: false,
        logLimit: 100,
        statisticsEnabled: true,
        badgedColor: '#ffa500',
        hashURL: 'https://kevinroebert.gitlab.io/ClearUrls/data/rules.minify.hash',
        rulesURL: 'https://kevinroebert.gitlab.io/ClearUrls/data/data.minify.json',
        contextMenuEnabled: true,
        historyListenerEnabled: true,
        localHostsSkippingEnabled: true,
        allowReferralMarketingEnabled: false,
        domainBlockingEnabled: true,
        pingBlockingEnabled: true,
        eTagFilteringEnabled: true,
        watchDogErrorCount: 0,
        requestTypes: '',
        pingRequestTypes: '',
    },
    migrations: [
        // Secound param is normaly "defaults", but currently not used
        (savedOptions, _) => {
            if (Utils.getBrowser() === 'Firefox') {
                if (savedOptions.requestTypes === '') {
                    savedOptions.requestTypes = Object.values(FirefoxRequestTypes).join(',')
                }

                if (savedOptions.pingRequestTypes === '') {
                    savedOptions.pingRequestTypes = Object.values(FirefoxPingRequestTypes).join(',')
                }
            }
            else {
                if (savedOptions.requestTypes === '') {
                    savedOptions.requestTypes = Object.values(ChromeRequestTypes).join(',')
                }

                if (savedOptions.pingRequestTypes === '') {
                    savedOptions.pingRequestTypes = Object.values(ChromePingRequestTypes).join(',')
                }
            }
        },

        OptionsSync.migrations.removeUnused
    ],
    logging: true,
    storageName: 'clearurlsData',
})

/**
 * Saves rules and logs on local storage.
 */
/* export class LocalStorage {
    private _rules: {}
    private _log: Log

    public constructor() {
        this._rules = {}
        this._log = new Log()
    }
} */

/**
 * Models the supported request types of Firefox.
 */
export enum FirefoxRequestTypes {
    FONT = 'font',
    IMAGE = 'image',
    IMAGESET = 'imageset',
    MAIN_FRAME = 'main_frame',
    MEDIA = 'media',
    OBJECT = 'object',
    OBJECT_SUBREQUEST = 'object_subrequest',
    OTHER = 'other',
    SCRIPT = 'script',
    STYLESHEET = 'stylesheet',
    SUB_FRAME = 'sub_frame',
    WEBSOCKET = 'websocket',
    XML_DTD = 'xml_dtd',
    XMLHTTPREQUEST = 'xmlhttprequest',
    XSLT = 'xslt',
}

/**
 * Models the supported ping request types of Firefox.
 */
export enum FirefoxPingRequestTypes {
    PING = 'ping',
    BEACON = 'beacon',
}

/**
 * Models the supported request types of Chrome.
 */
export enum ChromeRequestTypes {
    MAIN_FRAME = 'main_frame',
    SUB_FRAME = 'sub_frame',
    STYLESHEET = 'stylesheet',
    SCRIPT = 'script',
    IMAGE = 'image',
    FONT = 'font',
    OBJECT = 'object',
    XMLHTTPREQUEST = 'xmlhttprequest',
    CSP_REPORT = 'csp_report',
    MEDIA = 'media',
    WEBSOCKET = 'websocket',
    OTHER = 'other',
}

/**
 * Models the supported ping request types of Chrome.
 */
export enum ChromePingRequestTypes {
    PING = 'ping',
}
