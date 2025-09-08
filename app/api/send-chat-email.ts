import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { name, email, message } = req.body;
  console.log("N8N_WEBHOOK_URL:", process.env.N8N_WEBHOOK_URL);
  console.log("Request body:", { name, email, message });


  try {
    const n8nRes = await fetch(process.env.N8N_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    console.log("n8nRes status:", n8nRes.status);

    if (!n8nRes.ok) {
      const errorText = await n8nRes.text();
      console.error("n8n error:", errorText);
      throw new Error("Failed to trigger n8n workflow");
    }

    const data = await n8nRes.json();
    res.status(200).json({ success: true, data });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
}
