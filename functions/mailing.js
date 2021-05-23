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

// const mailer = new Mailer();
// mailer.send({
//   to: "aromeronavia@gmail.com",
//   position: "Software Engineer",
//   username: "Alberto Romero",
//   score: 95,
//   email: "aromeronavia@gmail.com"
// });

module.exports = () => {
  const consoleClient = { send: console.log };

  console.log(process.env);
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "test") {
    return new Mailer(consoleClient);
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  return new Mailer(sgMail);
};
