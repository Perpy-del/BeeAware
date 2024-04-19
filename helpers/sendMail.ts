'use server';

import nodemailer from 'nodemailer';

export async function sendMail({
  email,
  digit,
  userName,
}: {
  email: any;
  digit: number;
  userName: string | null | undefined;
}) {
  try {
    const transport = nodemailer.createTransport({
      service: process.env.NEXT_PUBLIC_NODEMAILER_SERVICE,
      port: Number(process.env.NEXT_PUBLIC_NODEMAILER_PORT),
      auth: {
        user: process.env.NEXT_PUBLIC_NODEMAILER_USER,
        pass: process.env.NEXT_PUBLIC_NODEMAILER_PASS,
      },
    });

    /* DEVELOPMENT ONLY START

      // const transport = nodemailer.createTransport({
      //   host: process.env.NEXT_PUBLIC_DEV_NODEMAILER_HOST,
      //   port: Number(process.env.NEXT_PUBLIC_DEV_NODEMAILER_PORT),
      //   auth: {
      //     user: process.env.NEXT_PUBLIC_DEV_NODEMAILER_USER,
      //     pass: process.env.NEXT_PUBLIC_DEV_NODEMAILER_PASS
      //   }
      // });
  
      DEVELOPMENT ONLY END */

    const info = await transport.sendMail({
      from: '"BeeAware" <noreply@beeaware.com>', // sender address
      to: email, // list of receivers
      subject: 'Verify your Mail', // Subject line
      html: `<div>Hello, ${userName}. Welcome to BeeAware 🎉. Kindly enter this five digit pin to verify your mail <b>${digit}</b>. This pin expires in 10 minutes.</div>`, // html body
    });

    return info;
  } catch (e) {
    console.error(e);
  }
}

export async function sendContactMail({
  email,
  firstName,
  lastName,
  detail
}: {
  email: any;
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  detail: string
}) {
  try {
    const transport = nodemailer.createTransport({
      service: process.env.NEXT_PUBLIC_NODEMAILER_SERVICE,
      port: Number(process.env.NEXT_PUBLIC_NODEMAILER_PORT),
      auth: {
        user: process.env.NEXT_PUBLIC_NODEMAILER_USER,
        pass: process.env.NEXT_PUBLIC_NODEMAILER_PASS,
      },
    });

    /* DEVELOPMENT ONLY START

      // const transport = nodemailer.createTransport({
      //   host: process.env.NEXT_PUBLIC_DEV_NODEMAILER_HOST,
      //   port: Number(process.env.NEXT_PUBLIC_DEV_NODEMAILER_PORT),
      //   auth: {
      //     user: process.env.NEXT_PUBLIC_DEV_NODEMAILER_USER,
      //     pass: process.env.NEXT_PUBLIC_DEV_NODEMAILER_PASS
      //   }
      // });
  
      DEVELOPMENT ONLY END */

    const info = await transport.sendMail({
      from: '"BeeAware" <noreply@beeaware.com>', // sender address
      to: email, // list of receivers
      subject: 'Thank you for reaching out', // Subject line
      html: `<div>Hello, ${firstName} ${lastName}. Thank you for reaching out. <div>We have recieved your mail regarding:</div> <b>${detail}</b>. <div>A BeeAware admin personnel would reach out to you as soon as possible.</div> <div>Kindly click on this link <a href="${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup">here</a> to create an account with BeeAware.</div> <div>We are excited to have you join us.</div>`, // html body
    });

    return info;
  } catch (e) {
    console.error(e);
  }
}
