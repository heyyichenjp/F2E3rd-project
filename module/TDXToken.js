const jsSHA = require('jssha');

module.exports = {


    getAuthorizationHeader : function() {
        //  填入自己 ID、KEY 開始
        //APP ID：927a8d8378864253906fb329c396b0e3
        //APP Key：AuARaXHJA_XlKJdX7j7rF7U-wCI
            let AppID = '927a8d8378864253906fb329c396b0e3';
            let AppKey = 'AuARaXHJA_XlKJdX7j7rF7U-wCI';
        //  填入自己 ID、KEY 結束
            let GMTString = new Date().toGMTString();
            let ShaObj = new jsSHA('SHA-1', 'TEXT');
            ShaObj.setHMACKey(AppKey, 'TEXT');
            ShaObj.update('x-date: ' + GMTString);
            let HMAC = ShaObj.getHMAC('B64');
            let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
            return { 'Authorization': Authorization, 'X-Date': GMTString }; 
        }
        
}