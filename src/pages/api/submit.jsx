import { google } from "googleapis";

export default async function handler(req, res) {

    var _a;
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only POST requests allowed' });
    }
    const body = req.body;
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                // client_email: process.env.GOOGLE_CLIENT_EMAIL,
                client_email:"spreadsheet@rightwork-inbound-leads.iam.gserviceaccount.com",
                // private_key: (_a = process.env.GOOGLE_PRIVATE_KEY) === null || _a === void 0 ? void 0 : _a.replace(/\\n/g, '\n')
                private_key: (_a = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDRBSSRdO5RRcWB\nUjrkcTWpWEUS4/enJwDO0IQTzk0YE+yrMb5VDYM4IhDOKvQ+MbHbqYJEc/JYNWSH\nvperXq35eFrEAbvdxdjmrlzjcp9rHUs7CC3PIsmscM03kBgQnvek255DDBZP9jEB\nToe8oUAtV80RTo/ovsLPbXqiAQOmbBpU89dxBS/ssKCcZVIfJGaj2VbPf+pCwVFl\nyDF4IqZaokEDovcOJrb7Qp/Zl4wC0NOEKakwDQeb7ZrDkGZVl7j4C3aEOhyF2Y2D\nWJo9nxCvCWOnZhzD2NlVXF7OTXyWHS9MVfxzqnk3hjqfj3PIXnz1ZkeD7NGe1Hd+\nQLfiGFeTAgMBAAECggEATR17n1qnrj5ynsKqzati4+aYHV8T+IxwRN0zTWdYlCCN\nuZ9xnEmO9v/CeX3pfKSy/NruH7kzWQ3h2B8eL/CPeTHJMvV8zVZ4Lqt3w8Z/QHKf\nVdkvpXMtOrynSe+UoVU1ApKwMgZcmQW4kMXbWGGZnuD83HzCpVjz4LmAfBKpuRUQ\nUgto/wffWdn0mJudUoNSxlQFDq91QsBX1RWUPBBA3cugHqAirlLi24gwj7nQO75l\nkUF7grC9dyO5BJvlEQ9bfAIbyrByAR80demcS25uLlqoZlFVLBVfOBWkjlY3z2q2\n8NkUDQB6f+67WtqVEKOYhMz0uECzZLkIxrMyQQfXIQKBgQDw4b4iJPUZXivzRGTF\n1aAgBGD+Nv0yAxZeigenzep3OEucvR+50TBIZjhi16bF1ZZQMjMxAyWAl3BtO33h\nFon7bywQnf8qldgYMpoPAlbQciAt9kDTZZA0YUo7guOUOCyFqMEvzcfILveiO05Y\nMpFrAseVCmW4VzrusRUXOSWaMQKBgQDeI3oHunDl41KPkK+7mi10JKT1ZGHFeHQs\nHLbAV/VdqqOoU+9mYIgCy4NhvLmJ3P0Bdzhpf8AhAZ4ivTk40yOsHTCAf26IFhZi\nTHSeTLD6XIRX4/gthKtD/IVzyweWt+4TUcfNKnryrD2LG8LRiwQKLsjnoiM/+Sak\nV8Y4FTTZAwKBgQCSdyCuEDy77QfaRibkKA3SCfeT+4me5EOwvksDXHCJh0BqkJB+\n4tRx4T291BSCzGk2YB/CWIBwHSTuNjNHLvY9XQ61F+y0TyJzLCmCoNB6tDoe2FH4\neBPj1ZhWcTLByBpCNycoUv58GRrXmSn89Np479q9I/JP0TJzOldxpHzZsQKBgQC/\nib2F/mesgWdF7Q7p5xX8SECIaua2+5bIFnYpwW4LNsBouv74upFsP4jodG9TBV6O\nrfrRVNsYWqm88IXvjnb6yCxzD+4Bn3Hrjlsbx6ruJWnj0ujCbtuyAoIbhtvjRHMe\n62wpZtCegI+MbAJ+5aw1D4Qh3jcgyTddi2WaJAbuewKBgBUwNJkx0X3OoefvMBJw\nyLbe72MBeXX2IXG2HpGvzxnnGmp+/98y6Gf/rjwNu54AkVpt5ppTyxfhX+a/kuCm\nak2r6Avcpr6OZYrATO9z0yqMcp1ZRH+QO7PkZt4YAGo0RFJROsGcXgv8/99UQjVF\nrAaaFdWEX4Hm1kciK+qcV0Ye\n-----END PRIVATE KEY-----\n") === null || _a === void 0 ? void 0 : _a.replace(/\\n/g, '\n')
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
            // spreadsheetId: process.env.GOOGLE_SHEET_ID,
            spreadsheetID: "1vq2j_ESBIsJ7FFwb8Si1qWd0diyhwlqlvIXF-pUlsQQ",
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
