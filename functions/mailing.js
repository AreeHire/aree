const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");

class Mailer {
  constructor(client) {
    this.client = client;
  }

  async send(data) {
    const message = {
      to: data.to,
      from: "alberto@areehiring.com",
      subject: `New Candidate for ${data.position}: ${data.username}`,
      text: `Candidate has applied to the position ${data.position}`,
      html: `Hello! <br/><br/>We are just letting you know ${data.username} applied for the position ${data.position}
      with a score of ${data.score} out of 100. You can send a follow up email in case you want to move forward
      with the candidate to ${data.email}.<br/><br/>Regards,<br/><br/>Aree Hiring`
    };

    try {
      await this.client.send(message);
      console.log(`Email sent: ${message}`);
    } catch (error) {
      throw new Error(`Email not sent with message: ${message}`);
    }
  }
}

module.exports = () => {
  const consoleClient = { send: console.log };

  if (process.env.NODE_ENV === "test") {
    return new Mailer(consoleClient);
  }

  sgMail.setApiKey(functions.config().sendgrid.key);
  return new Mailer(sgMail);
};
