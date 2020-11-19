'use strict';

module.exports = function getTimeZoneName() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
};