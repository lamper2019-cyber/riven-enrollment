import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, biggestStruggle, investedBefore, whyToday } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !biggestStruggle || !investedBefore || !whyToday) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Google Sheets auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    // Append row to "Leads" tab
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Leads!A:I",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            today,               // Date
            fullName,            // Full Name
            email,               // Email
            phone,               // Phone
            biggestStruggle,     // Biggest Struggle
            investedBefore,      // Invested Before
            whyToday,            // Why Today
            "enrollment page",   // Source
            3,                   // Lead Score
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    return NextResponse.json({ error: "Failed to save application" }, { status: 500 });
  }
}
