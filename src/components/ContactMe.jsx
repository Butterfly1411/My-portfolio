import React, { useState } from 'react'
import axios from 'axios'

const ContactMe = () => {
  const BOT_TOKEN = "8484254930:AAE0vcPm0BXrZWFEDboaaAjgAs0mDL0ppHQ"
  const CHAT_ID = "7066792889"

  const [message, setMessage] = useState("")

  const sendMessage = async () => {
    if (!message.trim()) {
      alert("Xabar bo‘sh ❗")
      return
    }

    try {
      await axios.post(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          chat_id: CHAT_ID,
          text: message,
        }
      )

      alert("Yuborildi ✅")
      setMessage("")
    } catch (error) {
      console.error(error)
      alert("Xatolik ❌")
    }
  }

  return (
    <section className='container' aria-labelledby="contact-heading">
      {/* Text */}
      <div className='text-center'>
        <p className='text-[20px] text-gray-600 uppercase'>Get in Touch</p>
        <h2 id="contact-heading" className='text-2xl'>
          Contact <span>me</span>.
        </h2>
        <p className='text-[19px] mt-3 lg:text-[22px] text-gray-600'>
          I am currently open to full-time, contract or part-time opportunities in <br />
          Front End Development.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 mt-4 lg:items-center lg:gap-8'>
        <div className='grid gap-10 lg:mb-30'>
          <div className='text-[18px] lg:text-3xl'>
            <p>
              Have an awesome project idea? <br />
              <span>Let's Discuss</span>.
            </p>
          </div>

          <ul className='grid gap-8'>
            <li className='flex items-center gap-4'>
              <div className='w-14 h-14 flex justify-center rounded-full bg-blue-200'>
                <i className="bi bi-telephone mt-3 text-black text-2xl"></i>
              </div>
              <a href="tel:+998949798494">+99894-979-84-94</a>
            </li>

            <li className='flex items-center gap-4'>
              <div className='w-14 h-14 flex justify-center rounded-full bg-blue-200'>
                <i className="bi bi-envelope-open mt-3 text-black text-2xl"></i>
              </div>
              <a
                className='md:text-[10px] lg:text-xl'
                href="mailto:sabohattoshpolatova72@gmail.com"
              >
                sabohattoshpolatova72@gmail.com
              </a>
            </li>

            <li className='flex items-center gap-4'>
              <div className='w-14 h-14 flex justify-center rounded-full bg-blue-200'>
                <i className="bi bi-geo-alt mt-3 text-black text-2xl"></i>
              </div>
              <span> Olmoliq, Toshkent</span>
            </li>
          </ul>
        </div>

        <div className='w-full min-h-screen text-white flex justify-center items-center px-4'>
          <form
            className="w-full max-w-xl space-y-6"
            aria-label="Contact form"
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage()
            }}
          >
            <div>
              <label htmlFor="name" className="block mb-2 text-lg font-semibold">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                required
                className="w-full border border-gray-700 rounded-xl py-4 px-5 bg-gray-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-lg font-semibold">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                required
                className="w-full border border-gray-700 rounded-xl py-4 px-5 bg-gray-900"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-lg font-semibold">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter message"
                className="w-full border border-gray-700 rounded-xl py-4 px-5 bg-gray-900 resize-none"
              />
            </div>

            <button
              type='submit'
              className='text-gray-800 bg-[#5ed5ea] mt-4 flex gap-[7px] rounded-2xl w-[180px] h-[55px] p-4 hover:bg-[#4fc4d9]'
            >
              <p className='text-[18px]'>Send Message</p>
              <i className="bi bi-briefcase text-[19px]"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactMe
