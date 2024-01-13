import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      // Use the environment variable for the Formspree URL
      const formEndpoint = process.env.FORMSPREE_ENDPOINT;

      // Check if the Formspree endpoint URL is set
      if (!formEndpoint) {
        throw new Error("Formspree endpoint URL is not set in environment variables");
      }

      const response = await fetch(formEndpoint, {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error from Formspree: ${response.statusText}`);
      }

      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error in API Route:", error);
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}