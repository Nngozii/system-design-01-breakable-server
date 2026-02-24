# Breakable Server

Learning concepts: Scalability · Availability · Reliability · Latency vs Throughput vs Bandwidth · Client-Server Architecture

## What This Is
An extremely simple Express API with fast and slow endpoints, load-tested with autocannon to observe bottlenecks and understand system limits firsthand.

## What I Built
- Basic REST API with instant and heavy-task endpoints
- Load testing suite comparing endpoint performance
- Documentation of observed breakpoints and theoretical fixes

## Key Learnings
- What happens when a Node.js server gets overwhelmed
- The difference between latency (time per request) and throughput (requests per second)
- Why client-server separation matters for security and failure isolation

## Tech Stack
Node.js · Express · autocannon

## Run Server
npm start

## Run Autocannon on the terminal
#### sample command:
autocannon -m GET -d 5 -c 1 -p 1 http://localhost:xxxx/
Check out the documentation - [autocannon](https://www.npmjs.com/package/autocannon)