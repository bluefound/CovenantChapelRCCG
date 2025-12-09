// RCCG CCMZ Form Handler - Paste this ENTIRE code in Apps Script
// Go to Extensions > Apps Script, delete everything, paste this, save, and redeploy

function doGet(e) {
    return ContentService.createTextOutput(JSON.stringify({
        status: 'OK',
        message: 'RCCG CCMZ Form Handler is running'
    })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
    try {
        var data = JSON.parse(e.postData.contents);
        var type = data.type;
        var formData = data.data;
        var timestamp = new Date().toLocaleString();

        var ss = SpreadsheetApp.getActiveSpreadsheet();
        var sheet;
        var row;

        if (type === 'waitlist') {
            sheet = ss.getSheetByName('Waitlist');
            row = [formData.email, timestamp];
        } else if (type === 'newsletter') {
            sheet = ss.getSheetByName('Newsletter');
            row = [formData.email, timestamp];
        } else if (type === 'group-join') {
            sheet = ss.getSheetByName('GroupJoin');
            row = [
                formData.fullName || '',
                formData.phone || '',
                formData.email || '',
                formData.dateOfBirth || '',
                formData.dateBornAgain || '',
                formData.department || '',
                formData.hasExperience || '',
                formData.note || '',
                timestamp
            ];
        } else if (type === 'contact') {
            sheet = ss.getSheetByName('Contact');
            row = [
                formData.name || '',
                formData.email || '',
                formData.subject || '',
                formData.message || '',
                timestamp
            ];
        } else if (type === 'prayer-request') {
            sheet = ss.getSheetByName('PrayerRequests');
            row = [
                formData.name || '',
                formData.email || '',
                formData.request || '',
                timestamp
            ];
        } else {
            return ContentService.createTextOutput(JSON.stringify({
                success: false,
                error: 'Invalid type: ' + type
            })).setMimeType(ContentService.MimeType.JSON);
        }

        if (sheet) {
            sheet.appendRow(row);
            return ContentService.createTextOutput(JSON.stringify({
                success: true,
                message: 'Data saved'
            })).setMimeType(ContentService.MimeType.JSON);
        } else {
            return ContentService.createTextOutput(JSON.stringify({
                success: false,
                error: 'Sheet not found for type: ' + type
            })).setMimeType(ContentService.MimeType.JSON);
        }

    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({
            success: false,
            error: error.toString()
        })).setMimeType(ContentService.MimeType.JSON);
    }
}
