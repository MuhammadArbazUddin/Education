import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className=" sm:p-10 sm:px-40 m-6 sm:py-32">
      <h1 className="text-5xl  font-bold pb-6 text-center">Privacy Policy</h1>

      <p className="pb-6 font-thin text-lg border-b-2 ">
        Welcome to our Privacy Policy! This document elucidates how your
        personal information is collected, utilized, and shared when you visit{" "}
        <a
          href="https://.com"
          className="underline hover:text-blue-800"
        >
          https://avc.com
        </a>{" "}
        (the “Site”). Here, we detail the types of personal information we
        gather, how we leverage this information to enhance your experience on
        the Site, and the robust measures we implement to safeguard your
        privacy.
      </p>

      <h2 className="text-2xl  font-bold pb-4 mt-4 ">
        Personal Information We Collect
      </h2>

      <p className="pb-6  font-thin text-lg">
        Upon visiting the Site, we automatically gather specific details about
        your device, including your web browser, IP address, time zone, and
        certain cookies installed on your device. As you navigate through the
        Site, we also collect information regarding the specific web pages or
        products you view, the websites or search terms that directed you to the
        Site, and your interactions with the Site. We refer to this
        automatically collected data as “Device Information.”
      </p>

      <p className="pb-6  font-thin text-lg">
        When you make a purchase or attempt to do so on the Site, we collect
        certain details from you, such as your name, billing and shipping
        addresses, payment information, email, and phone number. This is
        referred to as “Order Information.”
      </p>

      <p className="pb-6  font-thin text-lg border-b-2">
        Throughout this Privacy Policy, the term “Personal Information”
        encompasses both Device Information and Order Information.
      </p>

      <h2 className="text-2xl  font-bold pb-4 mt-4">
        How Do We Use Your Personal Information?
      </h2>

      <p className="pb-6  font-thin text-lg">
        We primarily utilize the Order Information we collect to fulfill orders
        placed through the Site, which includes processing your payment,
        arranging shipping, and sending you invoices or order confirmations.
        Additionally, we use this information to:
      </p>

      <ul className="list-disc pl-5  font-thin text-lg pb-6">
        <li>Communicate with you effectively</li>
        <li>Screen orders for potential risks or fraudulent activity</li>
        <li>
          Provide you with tailored product or service updates and promotions,
          based on the preferences you’ve shared with us.
        </li>
      </ul>

      <p className="pb-6  font-thin text-lg border-b-2">
        Regarding Device Information, we use it to help identify and prevent
        potential risks or fraud (especially by monitoring your IP address), and
        more broadly, to enhance our Site. This includes generating analytics to
        understand how customers interact with the Site and evaluating the
        effectiveness of our marketing and advertising efforts.
      </p>

      <h2 className="text-2xl  font-bold pb-4 mt-4">Data Retention</h2>

      <p className="pb-6  font-thin text-lg border-b-2">
        When you place an order through the Site, we will retain your Order
        Information for our records unless you request its deletion.
      </p>

      <h2 className="text-2xl  font-bold pb-4 mt-4">Changes</h2>

      <p className="pb-6  font-thin text-lg border-b-2">
        We may update this privacy policy periodically to reflect changes to our
        practices or for other operational, legal, or regulatory reasons.
      </p>

      <h2 className="text-2xl  font-bold pb-4 mt-4">Contact Us</h2>

      <p className="pb-6  font-thin text-lg">
        For more information about our privacy practices, if you have questions,
        or if you would like to make a complaint, please reach out to us via
        email at{" "}
        <a
          href="mailto:support@.com"
          className="underline hover:text-blue-800"
        >
          support@.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
