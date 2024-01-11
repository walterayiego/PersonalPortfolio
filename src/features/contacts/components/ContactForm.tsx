import * as React from "react";
import Dialog from "@mui/material/Dialog";

function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/walterayiego@gmail.com"
      method="POST"
      className="h-[90vh] w-[50vw] p-3 bg-white rounded-xl col"
      // encType='multipart/form-data'
    >
      <input type="hidden" name="_captcha" value="false"></input>

      <div className="grid md:grid-cols-2 gap-4 w-full py-2">
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Name</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="name"
            required
          />
        </div>
        <div className="col">
          <label className="uppercase text-sm py-2">Phone Number</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="phone"
            required
          />
        </div>
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Email</label>
        <input
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="email"
          name="email"
          required
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Subject</label>
        <input
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="text"
          name="subject"
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Message</label>
        <textarea
          className="border-2 rounded-lg p-3 border-gray-300"
          rows={5}
          name="message"
          required
        ></textarea>
      </div>
      <button className="w-full bg-brown p-4 rounded-md text-gray-100 mt-4">Send Message</button>
    </form>
  );
}

export default ContactForm;
