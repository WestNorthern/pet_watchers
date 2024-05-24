# NannyPaw

[Check it out!](http://www.nannypaw.com)

### Heroku
https://damp-river-21053-0b318be2f5f2.herokuapp.com/

* Ruby 3.3.1 + Rails 7.1

* Reactified

* Postgres

### Product Summary

The Company is rolling out a new service, Cat and Dog Sitting.

### Running Tests
#### Unit Tests
`$ rails test`
#### E2E Tests
`$ rails test:system`

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
