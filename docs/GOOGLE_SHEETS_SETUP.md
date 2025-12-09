# Google Sheets Integration Setup

## Prerequisites
1. Create a Google Cloud project at https://console.cloud.google.com
2. Enable the Google Sheets API
3. Create a service account and download the JSON key file
4. Create a Google Spreadsheet and share it with the service account email

## Environment Variables

Create a `.env.local` file with:

```
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"your-project",...}
GOOGLE_SHEET_ID=your_spreadsheet_id_here
```

## Required Spreadsheet Tabs

Create these tabs in your Google Spreadsheet:

| Tab Name | Columns |
|----------|---------|
| Waitlist | Email, Timestamp |
| Newsletter | Email, Timestamp |
| GroupJoin | FullName, Phone, Email, DateOfBirth, DateBornAgain, Department, HasExperience, Note, Timestamp |
| Contact | Name, Email, Subject, Message, Timestamp |
| PrayerRequests | Name, Email, Request, Timestamp |

## How to Get Spreadsheet ID

The ID is in the spreadsheet URL:
```
https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
```
