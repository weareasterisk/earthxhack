import React from "react"
import IFAQ from "../types/faq";

const e = (...props: Array<React.ReactNode>): JSX.Element => {
  return <React.Fragment>{props}</React.Fragment>
}

const data: Array<IFAQ> = [
  // {
  //   question: "Making a trip to Dallas?",
  //   answer: e(
  //     <p>EarthxHack takes place from April 24-26 and is a 36-hour event. You can arrive Friday anytime after 12pm to attend Learn, Dream, or Build. Dream starts at 6pm Friday and goes until 10am Saturday, and Build starts at 9am Saturday. Stay tuned on our social media pages!</p>
  //   )
  // },
  // {
  //   question: "What should I bring?",
  //   answer: e(
  //     <p>Laptops, chargers, cell phones, and of course passion are helpful. Other useful items include: toiletries, a change of clothes, a pillow, some earplugs, an eye mask, a jacket, and...deodorant</p>,
  //     <br/>,
  //     <p><i>Knives, firearms, and other dangerous things are not permitted at the event.</i></p>
  //   )
  // },
  {
    question: "Who can attend?",
    answer: e(
      <p>All creators are welcome! This includes high schoolers, undergraduate students, graduate students, and professionals! We are happy to accept international participants, but please be aware that the tax people will keep 30% of your winnings, should you win a prize.</p>,
      <br/>,
      <p><i><b>If you’re under 18, you need a signed waiver from your parent or legal guardian to win a prize. We’ll send this to you if necessary.</b></i></p>,
    )
  },
  {
    question: "How big are the teams?",
    answer: e(
      <p>Teams are composed of 2-5 people. We recommend a finding teammates with diverse skill sets to cover all the bases of a great idea.</p>
    )
  },
  {
    question: "What if I don't have teammates?",
    answer: e(
      <p>There will be a text channel on Discord for people to discuss project ideas, get to know one another, and form teams. We’ll also be hosting a live brainstorming and team-matching session. See the schedule for more details!</p>
    )
  },
  {
    question: "How much does this event cost to attend?",
    answer: e(
      <p>EarthxHack is 100% free. All you have to do is join us online!</p>
    )
  },
  // {
  //   question: "Will EarthxHack provide travel reimbursements?",
  //   answer: e(
  //     <p>We are pleased to be able to provide travel reimbursements this year to our out of town visitors. You will need to apply for travel reimbursement in your application.</p>,
  //     <br/>,
  //     <p><b><u>⚠ Reimbursement is not guaranteed unless we explicitly tell you that you are eligible. ⚠</u></b></p>,
  //     <br/>,
  //     <p>Please only apply for travel reimbursement if you cannot attend without it - we want to enable as many people as possible to join us.</p>,
  //     <br/>,
  //     <p>Your reimbursement amount and method will be determined by your distance to the event. In an effort to be environmentally friendly, if selected to receive reimbursement, we will reimburse carpools within 300 miles of driving distance (minimum of 2 participants in the car) and flights for distances over 300 miles. Don’t have a car? The bus is OK too. Somehow found a train in Texas? That’s cool too!</p>,
  //     <br/>,
  //     <p>Unfortunately, we cannot reimburse accommodation or meals/other expenses beyond your primary transportation ticket or gas receipts. In addition, the maximum reimbursement amount under any circumstance is $250 (but we will communicate your limit to you individually). International visitors are more than welcome and we can provide letters for visa purposes, but unfortunately we cannot offer you any more than $250 under any circumstances.</p>
  //   )
  // },
  {
    question: "Are we allowed to build on past projects?",
    answer: e(
      <p>A hackathon is an experience to build something new within a set amount of time. Therefore, you cannot work on past projects. However, using your own open-source or third party libraries is fine, so long as the project is new.</p>
    )
  },
  {
    question: "What kind of hardware will you have?",
    answer: e(
      <p>We’ll be curating some suggested starter hardware for different types of projects, but due to the event being virtual, we won’t be able to offer access to our hardware library typically found at our in-person events. If you want to experiment with hardware, you are in charge of procuring what you need on your own.</p>
    )
  },
  {
    question: "Where will it be?",
    answer: e(
      <p>The event is virtual! Participants will be able to find more details on the live site once we get closer to the event.</p>
    )
  },
  {
    question: "What can I win?",
    answer: e(
      <p>We offer a prize pool of over $30,000 for this event. We’ll have plenty of challenges and sub-prizes as well as the main prizes. In addition, sponsors and partners may offer their own challenges - check back soon for more. </p>
    )
  },
  {
    question: "I got travel reimbursement - what should I do?",
    answer: e(
      <p>We are happy to refund any money you spent booking an airline ticket before this announcement should you be unable to get a refund. Shoot us an email informing us of your situation at <a href="mailto:hello@weareasterisk.com">hello@weareasterisk.com</a>.</p>
    )
  },
  {
    question: "What do I need to submit with my project?",
    answer: e(
      <p>Since this is a virtual hackathon and we won’t be able to see your work in person, so we’ll require a detailed submission on Devpost. We’ll only be able to work with whatever you write and upload, so make sure you put some effort into that! More details on how submission works can be found on the live site.</p>,
      // <ol className="pl-2" style={{listStyleType: "decimal"}}>
      //   <li>A video describing your hack, featuring at least one of the team members</li>
      //   <li>A description of the hack</li>
      //   <li>Answers to the questions on Devpost that are not jokes or half-assed</li>
      //   <li>Link to your code (Github, zip, whatever)</li>
      // </ol>
    )
  },
  {
    question: "Where can I get more details on the schedule?",
    answer: e(
      <p>A full event schedule and live stream times will be posted on the live site when they are available.</p>
    )
  },
]

export default data;