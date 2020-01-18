import React from "react"
import IFAQ from "../types/faq";

const e = (...props: Array<React.ReactNode>): JSX.Element => {
  return <React.Fragment>{props}</React.Fragment>
}

const data: Array<IFAQ> = [
  {
    question: "Making a trip to Dallas?",
    answer: e(
      <p>EarthxHack takes place from April 24-26 and is a 36-hour event. You can arrive Friday anytime after 12pm to attend Learn, Dream, or Build. Dream starts at 6pm Friday and goes until 10am Saturday, and Build starts at 9am Saturday. Stay tuned on our social media pages!</p>
    )
  },
  {
    question: "What should I bring?",
    answer: e(
      <p>Laptops, chargers, cell phones, and of course passion are helpful. Other useful items include: toiletries, a change of clothes, a pillow, some earplugs, an eye mask, a jacket, and...deodorant</p>,
      <br/>,
      <p><i>Knives, firearms, and other dangerous things are not permitted at the event.</i></p>
    )
  },
  {
    question: "Who can attend?",
    answer: e(
      <p>All creators are welcome! This includes high schoolers, undergraduate students, graduate students, and professionals!</p>,
      <br/>,
      <p><i><b>If you’re under 18, you need a signed physical waiver from your parent or legal guardian to attend. We’ll send this to you before the event.</b></i></p>,
    )
  },
  {
    question: "How big are the teams?",
    answer: e(
      <p>Teams are composed of 2-5 people. We recommend a finding teammates with diverse skill sets to cover all the bases of a great idea.</p>,
      <br/>,
      <p>If you’re participating in Dream and Build, you can have a team of up to 8, with a maximum of 5 team members who didn’t participate in both.</p>
    )
  },
  {
    question: "What if I don't have teammates?",
    answer: e(
      <p>We'll have a scheduled time where people can form teams after the opening ceremony. Before then, join us at the Asterisk Attendees Page!</p>
    )
  },
  {
    question: "How much does this event cost to attend?",
    answer: e(
      <p>EarthxHack is 100% free. We want you to feel welcomed and provide everything you need for an amazing weekend!</p>
    )
  },
  {
    question: "Will EarthxHack provide travel reimbursements?",
    answer: e(
      <p>We are pleased to be able to provide travel reimbursements this year to our out of town visitors. You will need to apply for travel reimbursement in your application.</p>,
      <br/>,
      <p><b><u>⚠ Reimbursement is not guaranteed unless we explicitly tell you that you are eligible. ⚠</u></b></p>,
      <br/>,
      <p>Please only apply for travel reimbursement if you cannot attend without it - we want to enable as many people as possible to join us.</p>,
      <br/>,
      <p>Your reimbursement amount and method will be determined by your distance to the event. In an effort to be environmentally friendly, if selected to receive reimbursement, we will reimburse carpools within 500 miles of driving distance (minimum of 2 participants in the car) and flights for distances over 500 miles. Don’t have a car? The bus is OK too. Somehow found a train in Texas? That’s cool too!</p>,
      <br/>,
      <p>Unfortunately, we cannot reimburse accommodation or meals/other expenses beyond your primary transportation ticket or gas receipts. In addition, the maximum reimbursement amount under any circumstance is $250 (but we will communicate your limit to you individually). International visitors are more than welcome and we can provide letters for visa purposes, but unfortunately we cannot offer you any more than $250 under any circumstances.</p>
    )
  },
  {
    question: "Are we allowed to build on past projects?",
    answer: e(
      <p>A hackathon is an experience to build something new within a set amount of time. Therefore, you cannot work on past projects. However, using your own open-source or third party libraries is fine, so long as the project is new.</p>
    )
  },
  {
    question: "What kind of hardware will you have?",
    answer: e(
      <p>What kind of hardware will you have? We will have a variety of hardware available for use. A full hardware list is <a href="https://astr.sk/earthxhack-hardware"><b>Here</b></a>! If you would like to suggest/request hardware you would like to see at the event we encourage you to fill out <a href="https://astr.sk/hardware-suggestions"><b>this form</b></a>. We also encourage you to bring your own hardware to the event. Hardware will be distributed on a first come first serve basis.</p>
    )
  },
  {
    question: "What can I win?",
    answer: e(
      <p>We offer a prize pool of over $10,000 for this event. Prizes can be won at Dream and Build. If you are a participant at Dream and you carry over your idea to Build, everyone on your final team for Build is eligible for additional “Dream + Build” prizes. In addition, sponsors and partners may offer their own challenges - check back soon for more.</p>
    )
  },
  {
    question: "",
    answer: e(
      <p className="-mt-2"></p>
    )
  },
  {
    question: "Will there be buses to EarthxHack?",
    answer: e(
      <p>No, unfortunately we will not be providing buses to any regions for EarthxHack this year. However, travel reimbursements are available!</p>
    )
  },
]

export default data;