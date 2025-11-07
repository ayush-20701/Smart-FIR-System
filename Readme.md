-------------------
DB Collections
-------------------
- User (Citizen)
	- userId (PK)
    - aadharNo
	- phone
	- email
	- role (admin/io/citizen)

	if(role is IO)
	- rank
	- station
	- casesAssigned (Cases assigned to that IO)
- FIRs
	- firId (PK)
	- userId
	- category      (robbery/theft/assault etc.) 
	- description
	- incLocation:  (coordinates to be fetched using gps and address to entered manually)
    {  
		long, (longitude)
		lat, (latitude)
		address (text)
	}
    - status (4 options)
        - registered
        - validating
        - under investigation
        - closed
    - userMedia     (array of URLs of files saved in firebase)
    - assignedTo    (userId of IO)
    - createdAt     (timestamp)
    - updatedAt     {array of timestamps}
    - tags          {char array of tags}
    - adminAttachments {array of URLs of files saved in firebase}
    - remarks       (remarks by IO - text)
------------------
BACKEND
------------------
- Public Routes
	- POST /auth/enterNo (for sending otp while login/signup)
	- POST /auth/verify (verification of OTP)
	- POST /firs/new    (submit new FIR)
	- GET /firs/:userId (All FIRs registered by that citizen)

- Protected Routes
	- GET /adm/firs/all (fetch all FIRs)
	- PATCH /adm/firs/:firId/assign     (Assign FIR to an IO)
	- PATCH /adm/firs/:firId/status     (Update case status)
	- PATCH /adm/firs/:firId/remarks    (Add remarks)
-----------------
FRONTEND
-----------------
