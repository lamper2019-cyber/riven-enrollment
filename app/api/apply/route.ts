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

    // Build notes from form answers
    const notes = `Struggle: ${biggestStruggle} | Invested before: ${investedBefore} | Why today: ${whyToday}`;

    // Columns: A=Name, B=Email, C=Phone, D=Date Entered, E=Source, F=Lead Score, G-J=blank (Call Scheduled, Call Date, Call Outcome, Follow-Up Date), K=Notes
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Leads!A:K",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            fullName,            // A - Name
            email,               // B - Email
            phone,               // C - Phone
            today,               // D - Date Entered
            "enrollment page",   // E - Source
            3,                   // F - Lead Score (1-3)
            "",                  // G - Call Scheduled (Y/N)
            "",                  // H - Call Date
            "",                  // I - Call Outcome
            "",                  // J - Follow-Up Date
            notes,               // K - Notes
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
