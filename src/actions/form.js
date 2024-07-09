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
      service: process.env.NODEMAILER_SERVICE,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_SECRET,
      },
    });

    await transport.sendMail({
      from: process.env.NODEMAILER_EMAIL_FROM,
      to: email,
      subject: `Ihre Anfrage vom ${new Date().toLocaleDateString("de-DE")}`,
      html: `<p>Guten Tag,</p>

      <p>Ich freue mich über Ihre Kontaktanfrage</p>

      <p>Ich werde mich in Kürze mit Ihnen in Verbindung setzen,<br>
      um weitere Details zu besprechen und auf Ihre Anforderungen einzugehen.<br>
      Dabei stehen Ihre individuellen Bedürfnisse im Vordergrund.</p>

      <p>Falls in der Zwischenzeit weitere Fragen auftreten sollten,<br>
      zögern Sie bitte nicht, mich zu kontaktieren.<br>
      Ich bin gerne für Sie da und freue mich darauf, Ihnen weiterzuhelfen.</p>

      <p>Mit freundlichen Grüßen</p>

      <p>Tarek Jassine<br>
      Tarek's Tech Solutions<br>
      Classenweg 21<br>
      22391 Hamburg<br>
      USt.-IdNr.: DE355575992<br>
      Tel.: +49176/ 1426 6116<br>
      E-Mail: info@tarekstechsolutions.de<br>
      Website: www.tarekstechsolutions.de</p>`,
    });

    await transport.sendMail({
      from: process.env.NODEMAILER_EMAIL_FROM,
      to: process.env.NODEMAILER_EMAIL_TO,
      subject: `Anfrage vom ${new Date().toLocaleDateString("de-DE")}`,
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
