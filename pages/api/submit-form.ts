import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end("Method Not Allowed");
  }

  const formEndpoint = process.env.FORMSPREE_ENDPOINT;

  if (!formEndpoint) {
    return res.status(500).json({ error: "Formspree endpoint URL is not configured" });
  }

  try {
    const response = await fetch(formEndpoint, {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      return res.status(200).json({ message: "Form submitted successfully" });
    
    } else {
     return res.status(500).json({ error: `Error from Formspree: ${response.statusText}` });
    }
    
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
}

