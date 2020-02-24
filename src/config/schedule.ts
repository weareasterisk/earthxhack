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
      period: "12:10 - 12:25 PM",
      event: "Lightning Talk 1 - No Poverty, Zero Hunger, Good Health, Quality Education",
    },
    {
      period: "12:30 - 1:15 PM",
      event: "Workshop 1 - The Hackathon Mindset: Being Resourceful"
    },
    {
      period: "1:35 - 1:50 PM",
      event: "Lighting Talk 2 - Gender Equality, Reduced Inequality, Peace, Justice, Institutions"
    },
    {
      period: "1:55 - 2:40 PM",
      event: "Workshop 2 - Hackathon Starter Kits"
    },
    {
      period: "2:45 - 3:00 PM",
      event: "Lightning Talk 3 - Clean Water, Affordable Energy, Responsible Consumption, Climate Action"
    },
    {
      period: "4:20 - 4:35 PM",
      event: "Lightning Talk 4 - Decent Work/Economic Growth, Industry and Innovation, Partnerships for Goals"
    },
    {
      period: "5:45 - 6:00 PM",
      event: "Lightning Talk 5 - Sustainable Cities, Life Below Water, Life on Land"
    },
    {
      period: "6:00 PM",
      event: "Phase 1: Dream",
      phase: true
    },
    {
      period: "9:00 - 11:00 PM",
      event: "Ideation and Design Thinking Workshop"
    }
  ]
}

const dayTwo: ScheduleDay = {
  identifier: "Saturday, April 25th",
  items: [
    {
      period: "1:00 - 1:30 AM",
      event: "Researching Workshop"
    },
    {
      period: "3:00 - 3:45 AM",
      event: "Real Hacker Hours: An Introduction to Hackathons"
    },
    {
      period: "10:00 AM",
      event: "Phase 2: Build",
      phase: true
    },
    {
      period: "9:30 AM",
      event: "Doors Open"
    },
    {
      period: "9:30 - 11:00 AM",
      event: "Registration & Check-In"
    },
    {
      period: "9:30 - 10:30 AM",
      event: "Light Breakfast Refresh for Newcomers"
    },
    {
      period: "11:00 - 11:45 AM",
      event: "Opening Ceremony"
    },
    {
      period: "11:45 AM",
      event: "Hacking Begins"
    },
    {
      period: "12:00 PM",
      event: "Hardware Lab Opens"
    },
    {
      period: "11:45 AM - 12:30 PM",
      event: "Team Building and Ideation Session"
    },
    {
      period: "12:30 - 2:00 PM",
      event: "Lunch"
    },
    {
      period: "1:30 PM -10:00 AM (Sunday)",
      event: "Scavenger Hunt"
    },
    {
      period: "1:00 - 3:00 PM",
      event: "Photo Booth"
    },
    {
      period: "7:00 - 8:30 PM",
      event: "Dinner"
    },
    {
      period: "9:00 - 9:30 PM",
      event: "Treat Yo' Self! (Facemasks, Good Vibes)"
    },
    {
      period: "9:30 - 10:30 PM",
      event: "Hackathon Organizer Meetup"
    },
    {
      period: "10:30 - 11:30 PM",
      event: "Late Night Snack - Boba"
    },
    {
      period: "11:30 PM - 12:30 AM",
      event: "Hot Bytes"
    }
  ]
}

const dayThree: ScheduleDay = {
  identifier: "Sunday, April 26th",
  items: [
    {
      period: "1:00 - 1:30 AM",
      event: "Bob Ross MS Paint Party"
    },
    {
      period: "2:00 - 2:30 AM",
      event: "Late Night Snack"
    },
    {
      period: "2:00 - 2:45 AM",
      event: "Trivia"
    },
    {
      period: "2:00 - 7:00 AM",
      event: "Quiet Hours (Shhhh)"
    },
    {
      period: "7:00 - 11:00 AM",
      event: "Barista (Coffee)"
    },
    {
      period: "8:00 - 9:30 AM",
      event: "Breakfast"
    },
    {
      period: "8:30 - 8:45 AM",
      event: "Play 'How to Submit' Video"
    },
    {
      period: "9:30 AM",
      event: "!!! * Project Submissions Due * !!!"
    },
    {
      period: "10:00 - 10:30 AM",
      event: "'How to Win' Workshop",
    },
    {
      period: "11:00 AM - 12:00 PM",
      event: "Expo - General Judging"
    },
    {
      period: "11:30 AM - 12:30 PM",
      event: "Expo - Sponsor Challenge Judging"
    },
    {
      period: "12:00 PM",
      event: "Hardware Lab Closes"
    },
    {
      period: "12:00 PM",
      event: "Hacking Ends",
    },
    {
      period: "12:30 - 1:30 PM",
      event: "Lunch"
    },
    {
      period: "1:00 - 1:15 PM",
      event: "Final Pitch Briefing"
    },
    {
      period: "1:00 PM",
      event: "Hardware Return Final Call"
    },
    {
      period: "1:30 - 2:15 PM",
      event: "Final Presentations"
    },
    {
      period: "2:15 - 3:00 PM",
      event: "Closing Ceremony"
    },
    {
      period: "2:45 - 3:00 PM",
      event: "Awards"
    },
    {
      period: "3:30 PM",
      event: "Doors Close (cya next time!)"
    }
  ]
}

export default {dayOne, dayTwo, dayThree}