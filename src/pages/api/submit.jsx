import { google } from "googleapis";

if (!process.env.NETLIFY) {
  // get local env vars if not in CI
  // if in CI i expect its already set via the Netlify UI
  require('dotenv').config();
}
// required env vars
if (!process.env.GOOGLE_CLIENT_EMAIL)
  throw new Error('no GOOGLE_SERVICE_ACCOUNT_EMAIL env var set');
if (!process.env.GOOGLE_PRIVATE_KEY)
  throw new Error('no GOOGLE_PRIVATE_KEY env var set');
if (!process.env.GOOGLE_SHEET_ID)
  // spreadsheet key is the long id in the sheets URL
  throw new Err

export default async function handler(req, res) {

    var _a;
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only POST requests allowed' });
    }
    const body = req.body;
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: (_a = process.env.GOOGLE_PRIVATE_KEY) === null || _a === void 0 ? void 0 : _a.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });
        const sheets = google.sheets({
            auth,
            version: 'v4'
        });
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:E1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.firstName, body.lastName, body.company, body.phone, body.email]
                ]
            }
        });
        return res.status(201).json({
            data: response.data
        });
    }
    catch (e) {
        return res.status(e.code).send({ message: e.message });
    }
}
