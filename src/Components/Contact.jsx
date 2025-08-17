import React, { useEffect } from "react";
import Footer from "../Components/Footer";

function Contact() {
  useEffect(() => {
    const form = document.getElementById("form");
    const result = document.getElementById("result");

    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      var object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      result.innerHTML = "Please wait...";

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
        .then(async (response) => {
          let json = await response.json();
          if (response.status === 200) {
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-green-500");
          } else {
            console.log(response);
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-red-500");
          }
        })
        .catch((error) => {
          console.log(error);
          result.innerHTML = "Something went wrong!";
        })
        .then(() => {
          form.reset();
          setTimeout(() => {
            result.style.display = "none";
          }, 5000);
        });
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <>
      <div className="flex items-center min-h-screen  bg-[#e3e6f3] pb-10">
        <div className="container mx-auto mt-20 ">
          <div className="max-w-md ml-4 mr-7 md:mx-auto my-10 bg-[#e3e6f3] border-gray-600 border p-5 rounded-md shadow-sm">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Contact Us
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Fill up the form below to send us a message.
              </p>
            </div>
            <div className="m-7">
              <form action="https://api.web3forms.com/submit" method="POST" id="form">
                <input type="hidden" name="access_key" value="02fcc4d3-48a2-4958-8708-beae7f05ba1b" />
                <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />

                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400 font-medium">Full Name</label>
                  <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400 font-medium">Email Address</label>
                  <input type="email" name="email" id="email" placeholder="you@company.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="text-sm text-gray-600 dark:text-gray-400 font-medium">Phone Number</label>
                  <input type="text" name="phone" id="phone" placeholder="+91 0000000000" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400 font-medium">Your Message</label>
                  <textarea rows="5" name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                </div>
                <div className="mb-6">
                  <button type="submit" className="w-full px-3 py-4 text-white bg-blue-600 rounded-md focus:bg-indigo-600 focus:outline-none">
                    Send Message
                  </button>
                </div>
                <p className="text-base text-center text-gray-400" id="result"></p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
