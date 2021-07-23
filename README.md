# Boss Machine

## Project Overview
A fun project where I created the API endpoints for a front-end.  I didn't create the front-end for this application.

In the project I demonstrated my ability to:

 - Create custom middleware to parse requests
 - Use params to adhere to DRY when proccessing requests
 - Use nested routers to ensure scaleability
 - Use testing to identify and fix bugs within the back-end
 - Use a simulated datbase for CRUD operations
 - Use ES6 JS features like the spread operator and object deconstruction resulting in cleaner more maintainable code

## Routes Created
- `/api/minions`
  - GET /api/minions to get an array of all minions.
  - POST /api/minions to create a new minion and save it to the database.
  - GET /api/minions/:minionId to get a single minion by id.
  - PUT /api/minions/:minionId to update a single minion by id.
  - DELETE /api/minions/:minionId to delete a single minion by id.
- `/api/ideas`
  - GET /api/ideas to get an array of all ideas.
  - POST /api/ideas to create a new idea and save it to the database.
  - GET /api/ideas/:ideaId to get a single idea by id.
  - PUT /api/ideas/:ideaId to update a single idea by id.
  - DELETE /api/ideas/:ideaId to delete a single idea by id.
- `/api/meetings`
  - GET /api/meetings to get an array of all meetings.
  - POST /api/meetings to create a new meeting and save it to the database.
  - DELETE /api/meetings to delete _all_ meetings from the database.
- `/api/minions:minionId/work`
  - GET /api/minions/:minionId/work to get an array of all work for the specified minon.
  - POST /api/minions/:minionId/work to create a new work object and save it to the database.
  - PUT /api/minions/:minionId/work/:workId to update a single work by id.
  - DELETE /api/minions/:minionId/work/:workId to delete a single work by id.

## Schemas Used
- Minion:
  - id: string
  - name: string
  - title: string
  - salary: number
- Idea
  - id: string
  - name: string
  - description: string
  - numWeeks: number
  - weeklyRevenue: number
- Meeting
  - time: string
  - date: JS `Date` object
  - day: string
  - note: string
- Work:
  - id: string
  - title: string
  - description: string
  - hours: number
  - minionId: string