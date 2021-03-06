goog.provide('phoneformat.start');

goog.require('goog.dom');
goog.require('goog.json');
goog.require('goog.proto2.ObjectSerializer');
goog.require('goog.string.StringBuffer');
goog.require('i18n.phonenumbers.AsYouTypeFormatter');
goog.require('i18n.phonenumbers.PhoneNumberFormat');
goog.require('i18n.phonenumbers.PhoneNumberType');
goog.require('i18n.phonenumbers.PhoneNumberUtil');
goog.require('i18n.phonenumbers.PhoneNumberUtil.ValidationResult');

/**
 * @license
 * Copyright (C) Alan Beebe (alan.beebe@gmail.com).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

window['PhoneNumberUtil'] = i18n.phonenumbers.PhoneNumberUtil;
PhoneNumberUtil.prototype['parse'] = i18n.phonenumbers.PhoneNumberUtil.prototype.parse;
PhoneNumberUtil.prototype['parseAndKeepRawInput'] = i18n.phonenumbers.PhoneNumberUtil.prototype.parseAndKeepRawInput;
PhoneNumberUtil.prototype['getRegionCodeForNumber'] = i18n.phonenumbers.PhoneNumberUtil.prototype.getRegionCodeForNumber;


// -------------------------------------------------------------------------
function countryForE164Number(phone) {
	/*

	Return the country code for an e164 formatted number

	phone (String) phone number in e164 format to return the country code for

	*/
	try {
		var phone = cleanPhone(phone);
		var phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
		var number = phoneUtil.parseAndKeepRawInput(phone,null);
	    var output = new goog.string.StringBuffer();
	    output = phoneUtil.getRegionCodeForNumber(number);
    	return output.toString();
    } catch (e) {
    	return "";
    }
}
window['countryForE164Number'] = countryForE164Number;

// -------------------------------------------------------------------------
function isValidNumber(phone, country) {
        /*

        Tests whether a phone number matches a valid pattern. Note this doesn't
        verify the number is actually in use, which is impossible to tell by just
        looking at a number itself.

        */

        try {
                var phone = cleanPhone(phone);
                var phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
                var number = phoneUtil.parseAndKeepRawInput(phone, country);
            return phoneUtil.isValidNumber(number);
    } catch (e) {
            return false;
    }
}
window['isValidNumber'] = isValidNumber;

// -------------------------------------------------------------------------
function getTypeForNumber(phone, country) {
        /*

        Tests whether a phone number is a mobile number


        */

        //try {
                var phone = cleanPhone(phone);
                var phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
                var number = phoneUtil.parseAndKeepRawInput(phone, country);
                var type = phoneUtil.getNumberType(number);
                return type;
    //} catch (e) {
    //        return false;
    //}
}
window['getTypeForNumber'] = getTypeForNumber;

// -------------------------------------------------------------------------
function formatE164(country, phone) {
	/*

	Return the phone number in e164 format

	country (String) 2 digit country code
	phone (String) phone number to format

	*/

	try {
		var phone = cleanPhone(phone);
		var phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
		var number = phoneUtil.parseAndKeepRawInput(phone, country);
		var PNF = i18n.phonenumbers.PhoneNumberFormat;
	    var output = new goog.string.StringBuffer();
	    output = phoneUtil.format(number, PNF.E164);
    	return output.toString();
    } catch (e) {
    	return phone
    }
}
window['formatE164'] = formatE164;

// -------------------------------------------------------------------------
function formatInternational(country, phone) {
	/*

	Return the phone number in international format

	country (String) 2 digit country code
	phone (String) phone number to format

	*/

	try {
		var phone = cleanPhone(phone);
	    var formatter = new i18n.phonenumbers.AsYouTypeFormatter(country);
	    var output = new goog.string.StringBuffer();
	    for (var i = 0; i < phone.length; ++i) {
			var inputChar = phone.charAt(i);
			output = (formatter.inputDigit(inputChar));
		}
    	return output.toString();
    } catch (e) {
    	return phone;
    }
}
window['formatInternational'] = formatInternational;

// -------------------------------------------------------------------------
function cleanPhone(phone) {
	/*

	Remove any non numeric characters from the phone number but leave any plus sign at the beginning

	phone (String) phone number to clean

	*/

	phone = phone.replace(/[^\d\+]/g,'');
	if (phone.substr(0, 1) == "+") {
		phone = "+" + phone.replace(/[^\d]/g,'');
	} else {
		phone = phone.replace(/[^\d]/g,'');
	}
	return phone;
}
window['cleanPhone'] = cleanPhone;

// -------------------------------------------------------------------------
function countryCodeToName(countryCode) {
        /*

        Convert the country code to a name

        country (String) 2 digit country code

        */

        var arrCountry = new Array();
        arrCountry['AT'] = "Austria";
        arrCountry['DE'] = "Germany";
        arrCountry['CH'] = "Switzerland";

        var name = arrCountry[countryCode.toUpperCase()];
        if (name === undefined) {
                return "";
        } else {
                return name;
        }
}
window['countryCodeToName'] = countryCodeToName;