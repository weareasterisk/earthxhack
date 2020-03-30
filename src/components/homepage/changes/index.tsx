import React from "react"
import ContentWrapper from "../../common/contentwrapper"
import { List, ListItem } from "../../common/list"

const Changes: React.FC = () => {
  return (
    <React.Fragment>
      <ContentWrapper className="py-4 text-base lg:text-lg">
        <h2 className="lg:text-5xl md:text-4xl text-2xl pb-1 lg:pb-2">Changes to the event</h2>
        <p className="pb-1">
          We’re excited to announce that EarthxHack 2020 has transitioned to an online event. We hope that this 
          will give everyone the chance to participate in an even bigger and better event without having to leave 
          the comfort of their homes. As we all navigate the uncertainty of the COVID-19 outbreak together, 
          what better way to pass the time than to work together on solutions to make our planet a great place 
          to live once we can enjoy it again?
        </p>
        <p className="pb-1">As an overview, here is what you can expect from our virtual event:</p>
        <List>
          <ListItem n><b>Timing: </b>EarthxHack 2020 will begin at 9am CT on Friday, April 24th and run until 7pm CT on Sunday, April 26th. Submissions will be due by 6pm on Sunday.</ListItem>
          <ListItem n>
            <b>Dream: </b>Because of the unique nature of the virtual hackathon, we regret to inform you that we will no longer be offering <b>Dream</b> at this event.
            We hope to give this unique event format a shot soon, but we feel that it is best experienced in person. We apologize for any inconvenience.
          </ListItem>
          <ListItem n>
            <b>Learn: </b> We will be live streaming interactive workshops, talks, and experiences, live streamed and recorded throughout the week before the event from <b>April 20th - 24th</b>. All live streams will be posted and available for viewing on the live site.
          </ListItem>
          <ListItem>
            <b>Prizes: </b>we’ll be offering an expanded prize pool since we don’t have to buy you all food.
            <List>
              <ListItem>Total prize pool of <b>>$30,000 USD!</b></ListItem>
              <ListItem>First place will receive up to <b>$8,000.</b></ListItem>
              <ListItem>Second place will receive up to <b>$6,000</b></ListItem>
              <ListItem>Third place will receive up to <b>$4,000</b></ListItem>
              <ListItem>Fourth and fifth place teams will receive <b>$2,000</b>.</ListItem>
              <ListItem>A people’s choice award will also receive a prize of <b>$4,000</b>.</ListItem>
              <ListItem>We'll have over <b>$4,000</b> in additional prizes you can win throughout the event!</ListItem>
            </List>
          </ListItem>
          <ListItem>
            <b>Experience: </b> Although EarthxHack 2020 is a virtual event, we hope that we can all come together and experience some of the hackathon magic.
            <List>
              <ListItem>We'll have <b>game servers</b> set up, along with tournaments for you to play in</ListItem>
              <ListItem>A <b>Discord</b> will be set up to help you connect with your teammates and the community</ListItem>
              <ListItem>We'll have <b>live-streamed hosts</b> that will stay up all night with you, helping keep the enmergy going with some killer K-pop tracks and interesting content to help keep you mentally stimulated</ListItem>
              <ListItem>We'll have <b>competitions</b> throughout to give you a break from hacking.</ListItem>
              <ListItem>And of course, we'll have <b>workshops and tech talks</b> live streamed to help with education.</ListItem>
              <ListItem>Sponsors will be virtual, with <b>office hours</b> and <b>mock interviews</b> available virtually.</ListItem>
            </List>
          </ListItem>
          <ListItem n>
            <b>Judging</b> will be conducted over the week following project submissions. A panel of judges will review your submissions 
            (make sure to submit your video and a great description with your code!) and the winners will be announced on a live streamed show on Saturday, May 2nd.
          </ListItem>
          <ListItem>
            <b>Mentors</b> will be virtually available through Discord and our own <b>Q&A site</b>, where you can leave questions for your peers or our mentors.
            The most helpful mentors get prizes!
          </ListItem>
        </List>
        <p className="pb-1">We know that virtual events can be a whole new hackathon experience, and we’re excited to try our first ever virtual hackathon with all of you. We welcome your advice, feedback, and suggestions as we try this new thing out together.</p>
        <p>Can't wait to see you all!</p>
        <p className="pb-1">With <img src="https://cdn.weareasterisk.com/logos/svg/logo-only-rgb.svg" alt="*" className="inline h-1.25"></img>,</p>
        <p>Asterisk</p>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default Changes;