var dateFormatter = {
    monthList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dayList: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    getShortTime: function(date){
        var hour = date.getHours();
        var minute = date.getMinutes();
        minute = (minute === 0)? minute = '00': minute;
        if (hour >= 12){
            var suffix = 'PM'
        }else {
            suffix = 'AM'
        }
        return hour + ':' + minute + ' ' + suffix;
    },
    getLongTime: function(date){
        var hour = date.getHours();
        var minute = date.getMinutes();
        minute = (minute === 0)? minute = '00': minute;
        if (hour >= 12){
            var suffix = 'PM'
        }else {
            suffix = 'AM'
        }
        var milli = date.getMilliseconds();
        return hour + ':' + minute + ':' + milli + ' ' + suffix;
    },
    getShortDate: function(date){
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        return month + '/' + day + '/' + year;
    },
    getLongDate: function(date){
        var monthi = date.getMonth();
        var month = this.monthList[monthi];
        var day = date.getDate();
        var year = date.getFullYear();
        return month + ' ' + day + ', ' + year;
    },
    getShortDateTime: function(date){
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        var hour = date.getHours();
        var minute = date.getMinutes();
        minute = (minute === 0)? minute = '00': minute;
        if (hour >= 12){
            var suffix = 'PM'
        }else {
            suffix = 'AM'
        }
        return month + '/' + day + '/' + year + ' ' + hour + ':' + minute + ' ' + suffix;
    },
    getLongDateTime: function(date){
        var monthi = date.getMonth();
        var month = this.monthList[monthi];
        var day = date.getDate();
        var year = date.getFullYear();
        var hour = date.getHours();
        var minute = date.getMinutes();
        minute = (minute === 0)? minute = '00': minute;
        if (hour >= 12){
            var suffix = 'PM'
        }else {
            suffix = 'AM'
        }
        return month + ' ' + day + ', ' + year + ' ' + hour + ':' + minute + ' ' + suffix;
    },
    getExtendedDateTime: function(date){
        var weekdayi = date.getDay();
        var weekday = this.dayList[weekdayi];
        var monthi = date.getMonth();
        var month = this.monthList[monthi];
        var day = date.getDate();
        var year = date.getFullYear();
        var hour = date.getHours();
        var minute = date.getMinutes();
        minute = (minute === 0)? minute = '00': minute;
        if (hour >= 12){
            var suffix = 'PM'
        }else {
            suffix = 'AM'
        }
        return weekday + ', ' + month + ' ' + day + ', ' + year + ' ' + hour + ':' + minute + ' ' + suffix;
    }
   
} 
// Log all options to check
    var getShortTime = dateFormatter.getShortTime(new Date());
    console.log('Get Short ' + getShortTime);

    var getLongTime = dateFormatter.getLongTime(new Date());
    console.log('Get Long ' + getLongTime);
    
    var getShortDate = dateFormatter.getShortDate(new Date());
    console.log('Get Short date ' + getShortDate);

    var getLongDate = dateFormatter.getLongDate(new Date());
    console.log('Get Long Date ' + getLongDate);

    var getShortDateTime = dateFormatter.getShortDateTime(new Date());
    console.log('Get Short Date Time ' + getShortDateTime);

    var getLongDateTime = dateFormatter.getLongDateTime(new Date());
    console.log('Get Long Date Time ' + getLongDateTime);

    var getExtendedDateTime = dateFormatter.getExtendedDateTime(new Date());
    console.log('Get Extended Date time ' + getExtendedDateTime);