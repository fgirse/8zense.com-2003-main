import React from "react"

const ContactEmailProps=() => {
<form
            onSubmit={handleSubmit}
            className="border-none p-0"
            data-aos="fade-down"
          >
            <input
              name="email"
              type="email"
              placeholder="your-email@mail.com"
              value={formData.email}
              onChange={handleChange}
              className="text-background w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <textarea
              name="message"
              cols={30}
              rows={5}
              placeholder="...type your message"
              value={formData.message}
              onChange={handleChange}
              className="text-background w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-primary hover:shadow-lg hover:opacity-90 text-background font-bold py-2 px-4 rounded"
            >
              {isSending && <ClipLoader color="#000" size={10} />} &nbsp; Send
              Message
            </button>
          </form>

}
          export default ContactEmailProps