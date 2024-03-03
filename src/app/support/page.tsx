import { Stack, Typography, Box, TextField } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import "../index.css";
export default function Support() {
  return (
    <body className="support">
      <div>
        <div>
          <nav className="supportnav"></nav>
        </div>
        <div className="supportmain">
          <main>
            <ol>
              <h1>
                <b>Support Page</b>
              </h1>
            </ol>
            <b>Welcome to Our Support Page</b>
            <li>
              Thank you for choosing our app! We&apos;re here to help you with
              any questions or issues you may have. Our support page is designed
              to provide you with the resources you need to make the most of our
              app.
            </li>
            <li>
              If you can&apos;t find what you&apos;re looking for, feel free to
              contact our support team.
            </li>
            <ol>
              <h1>
                <b>Categories</b>
              </h1>
            </ol>
            <b>Browse our categories to find articles on common topics:</b>
            <li>Getting Started</li> <li>Troubleshooting</li> <li>Features</li>
            <li>Account Management</li> <li>Billing</li>
            <ol>
              <h1>
                <b>Contact Support</b>
              </h1>
            </ol>
            <li>
              If you can&apos;t find the answer you&apos;re looking for, please
              don&apos;t hesitate to contact our support team. We&apos;re here
              to help you 24/7.
            </li>
            <ol>
              <h1>
                <b>Feedback</b>
              </h1>
            </ol>
            <li>
              We value your feedback and suggestions. If you have any ideas on
              how we can improve our app or support page, please let us know.
            </li>
            <ol>
              <h1>
                <b>Community</b>
              </h1>
            </ol>
            <li>
              Join our community to connect with other users and share your
              experiences. You can also ask questions and get help from fellow
              users.
            </li>
            <ol>
              <h1>
                <b>Stay Updated</b>
              </h1>
            </ol>
            <li>
              Keep an eye on our blog for the latest updates, news, and tips on
              using our app.
            </li>
            <ol>
              <h1>
                <b>Thank You</b>
              </h1>
            </ol>
            <li>
              Thank you for choosing our app. We&apos;re here to help you every
              step of the way.
            </li>
          </main>
        </div>
      </div>
    </body>
  );
}
