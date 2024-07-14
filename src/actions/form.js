"use server";

import nodemailer from "nodemailer";

export const handleFormData = async (data) => {
  try {
    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const phone = data.phone;
    const subject = data.subject;
    const message = data.message;
    const dataPolicy = data.dataPolicy;

    const transport = nodemailer.createTransport({
      host: process.env.NODEMAILER_SERVICE,
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    await transport.sendMail({
      from: process.env.NODEMAILER_USER,
      to: email,
      subject: `Deine Anfrage an Tarek's Tech Solutions`,
      html: `
    <div
      style="
        font-family: Arial, Helvetica, sans-serif;
        max-width: 400px;
        color: #252525;
      ">
      <h3>Hallo ${firstName} ${lastName},</h3>

      <p style="font-size: 15px">Ich freue mich über deine Kontaktanfrage.</p>

      <p style="font-size: 15px">
        Ich werde mich in Kürze mit die in Verbindung setzen,<br />
        um weitere Details zu besprechen und um auf deine Wünsche einzugehen.<br />
      </p>

      <p style="font-size: 15px">Freundliche Grüße</p>
      <p style="font-size: 15px">Tarek Jassine</p>

      <div style="margin-bottom: 15px">
        <span style="margin-bottom: 3px">Tarek's Tech Solutions</span><br />
        <span style="margin-bottom: 3px">Classenweg 21, 22391 Hamburg</span
        ><br />
        <span style="margin-bottom: 3px">USt.-IdNr.: DE355575992 </span>
      </div>

      <span style="margin-bottom: 3px">Tel.: +49 176/ 1426 6116</span><br />
      <span style="margin-bottom: 3px">E-Mail: info@tarekstechsolutions.de</span
      ><br />
      <span style="margin-bottom: 3px">Web: www.tarekstechsolutions.de</span>
    </div>
      `,
    });

    await transport.sendMail({
      from: process.env.NODEMAILER_USER,
      to: process.env.NODEMAILER_USER,
      subject: `Kundenanfrage`,
      html: `<p>Vorname: ${firstName}</p>
            <p>Nachname: ${lastName}</p>
            <p>E-Mail: ${email}</p>
            <p>Telefon: ${phone}</p>
            <p>Thema: ${subject}</p>
            <p>Nachricht: ${message}</p>
            <p>DSGVO: ${dataPolicy ? "akzeptiert" : "nicht akzeptiert"}</p>
            `,
    });
  } catch (error) {
    console.log(`Error sending form data${error}`);
  }
};
