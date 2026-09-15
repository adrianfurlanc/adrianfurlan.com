// Where the Contact form sends its messages.
//
// The form posts to Formspree (https://formspree.io). Create a form in their
// dashboard, set the receiving email there, turn off reCAPTCHA in the form's
// Settings → Spam protection (JavaScript submissions need it off), and paste
// the form's ID — the part after /f/ in the address they show — below.
// The ID is a public identifier meant to appear in the page's HTML.
export const contactForm = {
  endpoint: "https://formspree.io/f/xjykbkgr",
};
