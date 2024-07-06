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
      service: "gmail",
      auth: {
        user: "tarekjassine@gmail.com",
        pass: "wonoytjxbqgxhjtm",
      },
    });

    await transport.sendMail({
      from: "tarekjassine@gmail.com",
      to: email,
      subject: `Ihre Anfrage vom ${new Date().toLocaleDateString("de-DE")}`,
      html: `<p>Hallo,</p>

      <p>Wir freuen uns über Ihre Kontaktanfrage</p>

      <p>Wir werden uns in Kürze mit Ihnen in Verbindung setzen,<br>
      um weitere Details zu besprechen und auf Ihre Anforderungen einzugehen.<br>
      Dabei stehen Ihre individuellen Bedürfnisse im Vordergrund.</p>

      <p>Falls in der Zwischenzeit weitere Fragen auftreten sollten,<br>
      zögern Sie bitte nicht, uns zu kontaktieren.<br>
      Wir sind gerne für Sie da und freuen uns darauf, Ihnen weiterzuhelfen.</p>

      <p>Liebe Grüße</p>

      <p>Firmenname</p>

      <p>Firmenname<br>
      Classenweg 21<br>
      22391 Hamburg<br>
      USt.-IdNr.: DE355575992<br>
      Tel.: +49151/ 2525 8758<br>
      E-Mail: tarekjassine@gmail.com</p>`,
    });

    await transport.sendMail({
      from: "tarekjassine@gmail.com",
      to: "tarekjassine@gmail.com",
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
