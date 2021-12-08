# Concept

## Resources

- User:
  - username
  - user image
  - email
  - password (salt and hash)
  - address
    - city
    - country
  - education (only if type is professional):
    - specialization
    - degree
    - background
  - type (patient or professional)
- Article:
  - title
  - title image
  - text
  - tags
  - links
  - status (draft, public)
- Request (for consultation):
  - time and date
  - duration
  - price
  - requester
  - professional
  - status (pending, accepted, rejected)

## In General

Resource (example):

- view route (React):
  - list many examples: /examples
  - edit example: /examples/:id
  - new example: /examples/new
- api route (Express):
  - create one examples: POST /api/examples
  - read many examples: GET /api/examples
  - read one example: GET /api/examples/:id
  - update one example: PUT /api/examples/:id
  - delete one example: DELETE /api/examples/:id
