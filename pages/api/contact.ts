// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { validateEmail } from "lib/contact-util";
import type { NextApiRequest, NextApiResponse } from "next";

import { getDB, saveToDB } from "@lib/db-util";

type Data = {
  message: string;
};

const db = getDB();

const contactInformation = db.contact;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);

  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !validateEmail(email) ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid input" });
    }

    // Store in db
    const newMessage = {
      email,
      name,
      message,
    };

    contactInformation.push(newMessage);
    saveToDB(db);

    console.log("Storing message in db ...", { newMessage });
    res.status(201).json({ message: "Successfully stored message!" });
  }
}
