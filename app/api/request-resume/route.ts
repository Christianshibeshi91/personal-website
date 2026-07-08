import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, fullName, organization, email, intent } = body as {
      firstName: string;
      lastName: string;
      fullName: string;
      organization: string;
      email: string;
      intent: string;
    };

    const name = fullName?.trim() || `${firstName?.trim() ?? ""} ${lastName?.trim() ?? ""}`.trim();

    if (!name || !organization?.trim() || !email?.trim() || !intent?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Christian Shibeshi <noreply@christianshibeshi.com>",
        to: "christianshibeshitech@outlook.com",
        reply_to: email,
        subject: `Resume Request from ${name} at ${organization}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9fafb;border-radius:8px;">
            <h2 style="color:#111827;margin-top:0;">New Resume Request</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;color:#6b7280;width:140px;vertical-align:top;"><strong>First Name</strong></td>
                <td style="padding:10px 0;color:#111827;">${firstName?.trim() || name.split(" ")[0]}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#6b7280;vertical-align:top;"><strong>Last Name</strong></td>
                <td style="padding:10px 0;color:#111827;">${lastName?.trim() || name.split(" ").slice(1).join(" ")}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#6b7280;vertical-align:top;"><strong>Organization</strong></td>
                <td style="padding:10px 0;color:#111827;">${organization}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#6b7280;vertical-align:top;"><strong>Email</strong></td>
                <td style="padding:10px 0;color:#111827;"><a href="mailto:${email}" style="color:#8B5CF6;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#6b7280;vertical-align:top;"><strong>Intent</strong></td>
                <td style="padding:10px 0;color:#111827;white-space:pre-wrap;">${intent}</td>
              </tr>
            </table>
            <p style="margin-top:24px;color:#6b7280;font-size:14px;">
              Reply directly to this email to send your resume to ${name} at ${email}.
            </p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Resend error:", JSON.stringify(err));
      return NextResponse.json(
        { error: `Email service error: ${err?.message || err?.name || res.status}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resume request error:", err);
    return NextResponse.json(
      { error: "Failed to send request. Please try again." },
      { status: 500 }
    );
  }
}
