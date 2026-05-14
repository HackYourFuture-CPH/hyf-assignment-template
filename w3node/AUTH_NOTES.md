1. Which auth mechanism would you choose?
   • I implemented JWT authentication with access tokens and refresh tokens.This fits for the assignment because the backend is an API based and needs stateless authentication that works well with tools like Swagger.
2. Why would you not use the other mechanisms in those scenarios?
   • I did not use session based authentication because our backend is designed as a stateless API, not a server rendered app.
3. What is one security improvement you would like to make next if you had more time?
   I would add refresh token rotation, so every refresh generates a new token and invalidates the old one. This would reduce the risk of stolen refresh tokens and make the system more production ready.
