// RCCG CCMZ Notification System
// 1. Go to https://script.google.com
// 2. Create a new project
// 3. Paste this code
// 4. Replace YOUR_REST_API_KEY with your OneSignal REST API Key
// 5. Set up a Time-driven trigger for checkAndSendDailyNotifications to run daily (e.g., at 8 AM or 4 PM)

const ONESIGNAL_APP_ID = "e3c169f8-de90-4f6d-954e-91c57aa73dce";
const ONESIGNAL_REST_API_KEY = "os_v2_app_4pawt6g6sbhw3fkoshcxvjz5zzgcgtlq6vdezy4ik6qi6vafro7nsum2fuhe47lsjutp4ugzd7nufkvwx372oy5mqhijgji7hnayafi";

function sendOneSignalNotification(title, message, url) {
    var headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Key " + ONESIGNAL_REST_API_KEY
    };

    var data = {
        app_id: ONESIGNAL_APP_ID,
        contents: { "en": message },
        headings: { "en": title },
        included_segments: ["All"], // Sends to all subscribed users
        url: url || "https://covenant-chapel-rccg.vercel.app/"
    };

    var options = {
        "method": "post",
        "headers": headers,
        "payload": JSON.stringify(data)
    };

    try {
        var response = UrlFetchApp.fetch("https://onesignal.com/api/v1/notifications", options);
        Logger.log("Notification sent: " + response.getContentText());
        return response.getContentText();
    } catch (e) {
        Logger.log("Error sending notification: " + e.toString());
        return e.toString();
    }
}

function checkAndSendDailyNotifications() {
    var today = new Date();
    var day = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Tuesday Service (Day 2)
    if (day === 2) {
        sendOneSignalNotification(
            "Digging Deep Today! 📖",
            "Join us this evening at 5:30 PM for Digging Deep. Let's study the Word together!",
            "https://covenant-chapel-rccg.vercel.app/"
        );
    }

    // Thursday Service (Day 4)
    else if (day === 4) {
        sendOneSignalNotification(
            "Faith Clinic Today! 🔥",
            "Don't miss Faith Clinic at 5:30 PM. Come for a time of prayer and power!",
            "https://covenant-chapel-rccg.vercel.app/"
        );
    }

    // Sunday Service (Day 0)
    else if (day === 0) {
        sendOneSignalNotification(
            "Happy Sunday! ☀️",
            "Join us for our Celebration Service starting at 9:00 AM. We can't wait to see you!",
            "https://covenant-chapel-rccg.vercel.app/"
        );
    }
}

// Run this function MANUALLY to push the Carol Service notification immediately
function sendCarolServiceNotification() {
    sendOneSignalNotification(
        "🎄 Sunday Carol Service! 🎶",
        "Join us this Sunday for our special Carol Service! Come and celebrate the joy of Christmas with songs and praise.",
        "https://covenant-chapel-rccg.vercel.app/events"
    );
}
// Run this function MANUALLY to push the Anniversary notification
function sendAnniversaryNotification() {
    sendOneSignalNotification(
        "🎉 Happy 3rd Anniversary! 🎂",
        "Celebrating 3 years of God's faithfulness! Thank you for being part of our family. Join us in thanksgiving!",
        "https://covenant-chapel-rccg.vercel.app/"
    );
}
