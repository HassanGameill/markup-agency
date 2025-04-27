import React from 'react'
import ContactC from './'
import { useLocale } from 'next-intl';



function Contact() {

    const locale = useLocale();

  return (
    <div>
      <ContactC data={{
        header: 'MARKUP',
        subheader: 'Marketing Agency',
        namePlaceholder: `${locale === "en" ? "Name" : "الاسم"}`,
        phonePlaceholder: `${locale === "en" ? "Phone" : "تليفون"}`,
        emailPlaceholder: 'Email',
        messagePlaceholder: 'Messsage',
        submitButtonText: 'Submit'
      }} />
    </div>
  )
}

export default Contact