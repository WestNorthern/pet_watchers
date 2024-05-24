# NannyPaw

* Ruby 3.3.1 + Rails 7.1

* Reactified

* Postgres

### View the App on Heroku

https://damp-river-21053-0b318be2f5f2.herokuapp.com/

### Setup

`$ git clone git@github.com:WestNorthern/nannypaw.git`

`$ cd nannypaw`

`$ bundle install`

Make sure you have postgres running in the background, then

`$ rails db:migrate`

`$ rails s`

Visit localhost:3000 and check it out!

### Running Tests
#### Unit Tests
`$ rails test`
#### E2E Tests
`$ rails test:system`

### Product Summary

The Company is rolling out a new service, Cat and Dog Sitting.

### Product Requirements

A form to collect bookings that takes:
- First Name
- Last Name
- Animal Name
- Animal Type (Dog/Cat)
- Hours Requested (min 2, max 8)
- Date of service

A "pricing engine" to determine the cost of service
- Base charge of $20
- $10 additional per hour for dogs
- $5 additional per hour for cats

Display of all bookings on a separate page ("admin" pages)

Unit tests for the pricing engine

E2E (feature) tests for the booking form and admin pages

### Notes

Check out this cool logo my daughter made. She also thought NannyPaw would be an excellent app name.

![cool logo](https://media.discordapp.net/attachments/1128874173486338150/1243320765282259107/image.png?ex=6651b4f2&is=66506372&hm=2ac178be5f2b823083651c712bba8d4b1ed6a51dd9dc58dfe6d9e211ecc4f63e&=&format=webp&quality=lossless&width=564&height=548)

