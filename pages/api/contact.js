import { sendMail } from "@/service/mailService";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const { fullName, email, enquiry, details } = req.body;

      await sendMail(email, enquiry, details);
      return res.status(200).json("okay");
    } catch (err) {
      return res.status(400).json({
        error_code: 400,
        msg: "your contact details has not been sent",
        message: err,
      });
    }
  }

  res.status(500).json({
    success: false,
    msg: "Wrong request, try again later",
  });
}

// {
//   status: "OK",
//   msg: "Success! email successfully sent",
//   statusCode: 200,
// }