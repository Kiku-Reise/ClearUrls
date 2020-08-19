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

export default new OptionsSync({
    defaults: {
        rules: '{}',
        rulesHash: '',
        badgedStatus: true,
        enabled: true,
        totalCount: 0,
        cleanedCount: 0,
        rulesStatus: 'error',
        loggingEnabled: false,
        log: '',
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
        (savedOptions, defaults) => {

            if (Utils.getBrowser() === 'Firefox') {
                if (savedOptions.requestTypes === '') {
                    savedOptions.requestTypes = 'font,image,imageset,main_frame,media,object,object_subrequest,other,script,stylesheet,sub_frame,websocket,xml_dtd,xmlhttprequest,xslt'
                }

                if (savedOptions.pingRequestTypes === '') {
                    savedOptions.pingRequestTypes = 'ping,beacon'
                }
            } else {
                if (savedOptions.requestTypes === '') {
                    savedOptions.requestTypes = 'main_frame,sub_frame,stylesheet,script,image,font,object,xmlhttprequest,ping,csp_report,media,websocket,other'
                }

                if (savedOptions.pingRequestTypes === '') {
                    savedOptions.pingRequestTypes = 'ping'
                }
            }
        },

        OptionsSync.migrations.removeUnused
    ],
    logging: true,
    storageName: 'clearurlsData',
})