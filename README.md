## todos backend app

Backend for todos application. This repository contains a TDD training exercise. 

#### Backlog

- create a REST API that will return JSONs stored in resources dir. 

```gherkin    
When I request GET "/todos/example"
Then I should receive contents of "resources/example.json" file
```

- adding new todos

```gherkin
When I send a PUT request to "/todos/example"
Then the request body is stored in "resources/example.json" file
```
- removing todos

```gherkin
When I send a DELETE request to "/todos/example"
Then the file "resources/example.json" is removed
```

- listing todos
- resolving todos
- archiving todos
- listing filters
- list paging
- searching
- adding todos with POST (should generate file name)
- updating and removing nested TODO property
- HATEOAS links
- statistics endpoint



##### How to run

```bash
npm run start
```

