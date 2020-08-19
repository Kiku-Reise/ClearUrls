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
* This script is responsible for some tools.
*/
import { browser } from 'webextension-polyfill-ts'

// Needed by the sha256 method
const enc = new TextEncoder()

export class Utils {
    /**
     * Checks if the current browser runs on android.
     *
     * @returns Promise with true, iff the current browser runs on android otherwise false
     */
    static async isAndroidOS() : Promise<boolean> {
        return (await browser.runtime.getPlatformInfo()).os === 'android'
    }

    /**
     * Returns the browser name.
     *
     * @returns the browser name
     */
    static getBrowser() : string {
        if (typeof InstallTrigger !== 'undefined') {
            return 'Firefox'
        }

        return 'Chrome'
    }

    /**
     * Decodes an URL, also one that is encoded multiple times.
     *
     * @see https://stackoverflow.com/a/38265168
     *
     * @param url - the url, that should be decoded
     * @returns the decoded URL
     */
    static decodeURL(url: string) : string {
        let rtn = decodeURIComponent(url)

        while (Utils.isEncodedURI(rtn)) {
            rtn = decodeURIComponent(rtn)
        }

        return rtn
    }

    /**
     * Returns true, iff the given URI is encoded
     *
     * @see https://stackoverflow.com/a/38265168
     *
     * @param uri - the URI to be checked
     * @returns true, iff the given URI is encoded otherwise false
     */
    static isEncodedURI(uri: string) : boolean {
        return uri !== decodeURIComponent(uri || '')
    }

    /**
     * This method calculates the SHA-256 hash as HEX string of the given message.
     * This method uses the native hashing implementations of the SubtleCrypto interface which is supported by all browsers
     * that implement the Web Cryptography API specification and is based on:
     * https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
     *
     * @param message - message for which the hash should be calculated
     * @returns SHA-256 of the given message
     */
    static async sha256(message: string): Promise<string> {
        const msgUint8 = enc.encode(message)
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8)
        const hashArray = Array.from(new Uint8Array(hashBuffer))

        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
    }
}