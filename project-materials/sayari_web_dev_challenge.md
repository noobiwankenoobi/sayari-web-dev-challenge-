# Sayari Web Developer Code Challenge

The accompanying dataset models a simple version of a Stack Overflow-like site. We would like for you to model some part of an application using this data, potentially including a database layer, an API, and/or a front end client. Your code will be evaluated based on the quality of the solution, not the completeness, so feel free to focus your efforts on areas you find interesting or which effectively demonstrate your skill set. Love performance tuning Postgres? Go for it. Have opinionated ideas about API design? Be sure to include them. Enjoy cloud platform management or container orchestration (we use Kubernetes)? Include an example config. Have a different database of choice you think would be appropriate for the challenge? Use it.

Like all projects, parts of this should be interesting, with ample room for creativity, and parts will be rote or boring. Feel free to cut corners on the latter, so you can invest more time in the former. If you do cut corners, though, make a note of it and explain what you would have done, had this been a production application.

The main requirements:
* Think hard about data modeling. How should this data be modeled effectively in a database? How should it be exposed in an API? Pay special attention to data normalization.
* Consider including functionality in line with any of the following: show questions and answers for a specific user; for a single question show all answers; add a new answer to an existing question; delete a user and all their questions/answers/comments; .... There are a lot of possibilities here. Again, no need to implement all of them. Choose the functionality you find most technically interesting or that best illustrates your data modeling design choices.
* Document your development process and decision making, either via comments in the code, via a README file, or both.
* It should be easy to run with minimal setup. Docker or Docker Compose can be useful here. Avoid building a solution that can't be easily ported from your computer to ours.
* Give us enough code to make you look good. Solutions that tackle multiple components (e.g. database and API, or API and UI) tend to be more interesting.

On submission, we will set up a time with you to perform a code review and discuss what the next steps would be if this were a production application. None of these questions have right answers, just be prepared to convince us of the merits of your specific decisions.