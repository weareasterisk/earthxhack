import ScheduleDay from "../types/scheduleDay"

const dayOne: ScheduleDay = {
  identifier: "Friday, April 24th",
  items: [
    {
      period: "12:00 PM",
      event: "Phase 0: Learn",
      phase: true
    },
    {
      period: "6:00 PM",
      event: "Phase 1: Dream",
      phase: true
    }
  ]
}

const dayTwo: ScheduleDay = {
  identifier: "Saturday, April 25th",
  items: [
    {
      period: "10:00 AM",
      event: "Phase 2: Build"
    },
    {
      period: "9:30am",
      event: "Doors Open"
    },
    {
      period: "9:30-11:00am",
      event: "Registration & Check-In"
    },
    {
      period: "9:30-10:30am",
      event: "Light Breakfast Refresh for Newcomers"
    },
    {
      period: "11:00-11:45am",
      event: "Opening Ceremony"
    },
    {
      period: "11:45am",
      event: "Hacking Begins"
    },
    {
      period: "12:00pm",
      event: "Hardware Lab Opens"
    },
    {
      period: "11:45am-12:30pm",
      event: "Team Building and Ideation Session"
    },
    {
      period: "12:30-2:00pm",
      event: "Lunch"
    },
    {
      period: "1:30pm-10:00am (Sunday)",
      event: "Scavenger Hunt"
    },
    {
      period: "1:00-3:00pm",
      event: "Photo Booth"
    },
    {
      period: "7:00-8:30pm",
      event: "Dinner"
    },
    {
      period: "9:00-9:30pm",
      event: "Treat Yo' Self! (Facemasks, Good Vibes)"
    },
    {
      period: "9:30-10:30pm",
      event: "Hackathon Organizer Meetup"
    },
    {
      period: "10:30-11:30pm",
      event: "Late Night Snack - Boba"
    },
    {
      period: "11:30pm-12:30am",
      event: "Hot Bytes"
    }
  ]
}

const dayThree: ScheduleDay = {
  identifier: "Sunday, April 26th",
  items: [
    {
      period: "1:00-1:30am",
      event: "Bob Ross MS Paint Party"
    },
    {
      period: "2:00-2:30am",
      event: "Late Night Snack"
    },
    {
      period: "2:00-2:45am",
      event: "Trivia"
    },
    {
      period: "2:00-5:00am",
      event: "Quiet Hours"
    },
    {
      period: "5:00-7:00am",
      event: "Quiet Hours"
    },
    {
      period: "7:00-11:00am",
      event: "Barista (Coffee)"
    },
    {
      period: "8:00-9:30am",
      event: "Breakfast"
    },
    {
      period: "8:30-8:45am",
      event: "Play 'How to Submit' Video"
    },
    {
      period: "9:30-10:00am",
      event: "'How to Win' Workshop",
    },
    {
      period: "10:30am",
      event: "!!! * Project Submissions Due * !!!"
    },
    {
      period: "12:00pm",
      event: "Hardware Lab Closes"
    },
    {
      period: "12:00-1:30pm",
      event: "Lunch"
    },
    {
      period: "1:00-3:00pm",
      event: "Expo - General Judging"
    },
    {
      period: "2:00-3:00pm",
      event: "Expo - Sponsor Challenge Judging"
    },
    {
      period: "3:00-3:15pm",
      event: "Final Pitch Briefing"
    },
    {
      period: "3:15pm",
      event: "Hardware Return Final Call"
    },
    {
      period: "3:15-4:00pm",
      event: "Final Presentations"
    },
    {
      period: "4:15-5:00pm",
      event: "Closing Ceremony"
    },
    {
      period: "4:45-5:00pm",
      event: "Awards"
    },
    {
      period: "5:00pm",
      event: "Doors Close (cya next time!)"
    }
  ]
}

export default {dayOne, dayTwo, dayThree}