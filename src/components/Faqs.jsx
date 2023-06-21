import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Is there a trial period?',
      answer: 'Yes, after the technical assessment period, you will engage a pilot, typically ranging from 1 to 2 months, that enables you to evaluate the product before deciding on a full rollout. This is where our team performs an initial consultation, data discovery process, and onboards actual stores into the tool for testing. Due to the work required in this pilot, we charge a fee.'
    },
    {
      question: 'Is RightWork actually tailored to my company?',
      answer: 'The modeling our team does uses data inputs that are specific to not only each company, but also each store within each company. Also, our data science team works closely with your subject matter experts to refine the models and ensure that the schedules are accurate so your teams can use them with confidence.'
    }
  ],
  [
    {
      question: 'What is auto-scheduling and how does it work?',
      answer: 'Auto-scheduling is the process of running an algorithm to match schedules to forecasted sales as efficiently as possible. Unlike most auto-scheduling software, RightWork uses a bottoms-up approach, where we breakdown the forecast all the way to the product and channel levels. This ensures that when we map the required work to potential shifts, the results are as accurate as possible.'
    },
    {
      question: 'Does RightWork optimize schedules for companies outside of the restaurant industry?',
      answer: 'Yes, RightWork can help any company in the service industry that deploys hourly workers optimize their labor. Right now, we are working with restaurants, hotels, and retail chains.'
    }
  ],
  [
    {
      question: 'How does RightWork help reduce labor costs?',
      answer: 'By creating schedules using demand-based scheduling. Demand-based scheduling helps match labor with forecasted sales to avoid over or understaffing, and can also be used to choose the best employees for shifts based on hourly rates, qualifications, preferences, and overtime risk.'
    },
    {
      question: 'What data is necessary during the technical assessment period?',
      answer: 'Data like time standards, is helpful but not required, as we have the ability to collect this if needed. We also help to structure a lot of the other information necessary by working closely with your team. Access to sales and time clocking data is required, but we offer integrations to popular tools like Toast, 7shifts, and Restaurant365 to make this easy.'
    }

  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt="A background gradient image with shades of pink and light blue."
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, please contact our sales team.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
