# Contact form email setup

The contact form (`/contact`) and the appointment form (`/appointment`) send
their submissions as designed HTML emails. Because the site is a static export
on GitHub Pages (there is no server of our own), sending goes through
[EmailJS](https://www.emailjs.com). The free plan covers 200 emails a month.

Each submission sends:

1. **A notification to the office** (German, `office@786.at`). It lists all
   details, the message, the visitor's language, and has "Direkt antworten" /
   "Zurückrufen" buttons. Pressing *Reply* in your mail app answers the visitor
   directly.
2. **A confirmation to the visitor**, in the language they used on the site
   (German or English). It repeats their details (not their free-text message)
   and explains the next steps. Turn it off with
   `EMAILJS_SEND_CONFIRMATION=false`.

The email designs live in `src/lib/emailTemplates.js`. Run
`npm run email:preview` to write sample emails to `email-previews/` and open
them in a browser.

Until EmailJS is configured, the forms keep working the old way: they open
the visitor's mail app with the message filled in.

## 1. Create the EmailJS service

1. Sign up at <https://dashboard.emailjs.com>.
2. **Email Services → Add New Service.** Pick *SMTP server* and enter the IONOS
   mailbox (host `smtp.ionos.de`, port `465`, SSL on, user `office@786.at`,
   plus the mailbox password). Sending from your own mailbox means the emails
   come from `office@786.at` and are less likely to land in spam.
3. Note the **Service ID** (for example `service_ab12cd3`).

## 2. Create the template (one template for all emails)

**Email Templates → Create New Template**, then set:

| Field          | Value                 |
| -------------- | --------------------- |
| Subject        | `{{subject}}`         |
| To Email       | `{{to_email}}`        |
| From Name      | `{{from_name}}`       |
| From Email     | `office@786.at` (or leave "Use Default Email Address" ticked) |
| Reply To       | `{{reply_to}}`        |

For the content, open the code editor (`<>` button) and replace everything
with exactly:

```
{{{html}}}
```

The triple braces matter: they tell EmailJS to insert the HTML unescaped.
Save and note the **Template ID** (for example `template_xy98zt`).

## 3. Get the public key and lock it down

- **Account → General → Public Key**: copy it.
- **Account → Security**: tick *Allow EmailJS API for non-browser applications*
  **off**, and add `786.at` under the allowed domains so the key only works
  from the website.

## 4. Add the values to GitHub

In the repository: **Settings → Secrets and variables → Actions → Variables
→ New repository variable**:

| Name                         | Value                    |
| ---------------------------- | ------------------------ |
| `EMAILJS_SERVICE_ID`         | your Service ID          |
| `EMAILJS_TEMPLATE_ID`        | your Template ID         |
| `EMAILJS_PUBLIC_KEY`         | your Public Key          |
| `EMAILJS_SEND_CONFIRMATION`  | `true` (optional)        |
| `CONTACT_EMAIL`              | `office@786.at` (optional) |

These are not secrets: they end up in the website's JavaScript, which is how
EmailJS is designed. The domain restriction from step 3 is what protects them.

Then re-run the *Deploy to GitHub Pages* workflow (Actions tab → *Run
workflow*) or push to `main`.

## Local development and Docker

Copy `.env.example` to `.env.local` and fill in the values, then `npm run dev`.
For Docker, export the same `NEXT_PUBLIC_…` variables before
`docker compose up --build`; they are passed in as build arguments.

## Spam protection

The forms include a hidden honeypot field that bots fill in and people never
see; those submissions are silently dropped. If spam becomes a problem, EmailJS
also supports reCAPTCHA in the template settings.
