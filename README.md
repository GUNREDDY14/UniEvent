
PPT LINK - https://www.canva.com/design/DAGmwjCOfQY/9ShMA6Bvud2cZ1NeUy7tfg/edit?utm_content=DAGmwjCOfQY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

SCREEN-RECORDING OF THE WORKING WEBSITE - 


# UniEvent

UniEvent is a web-based platform designed to streamline the management, approval, and celebration of campus events. It provides role-based dashboards for students, club heads, faculty, and management to manage events efficiently.

## Features

### General Features
- **Role-Based Access**: Separate dashboards for students, club heads, faculty, and management.
- **Event Management**: Submit, approve, and publish events.
- **Club Management**: Explore and manage university clubs.
- **User Profiles**: View and edit user profiles.

### Role-Specific Features
#### Student
- View published events in a calendar format.
- Access event details, including time, venue, and description.

#### Club Head
- Submit event requests with supporting documents.
- View the status of submitted events and feedback from faculty/management.
- Publish approved events with venue and time details.

#### Faculty
- Approve or reject events submitted by club heads.
- Provide feedback for event improvements.

#### Management
- Approve or reject faculty-approved events.
- Send feedback to club heads for rejected events.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd UniEvent
   ```


 2.  npm install   or install express.js in the same fodler then run node server.js command. 

 3.  bash npm start 

 4. http://localhost:5000    to open the application in your browser.
 5. Incase of error (local host access denied) - change the port number to 3000 in server.js file.  then redo from step 2. make sure to stop the 5000 server runnning before you follow this step.

PROJECT STRUCTURE

UniEvent/
├── css/                # Stylesheets for different pages
├── uploads/            # Uploaded files (e.g., event documents, avatars)
├── [cleaned_club_descriptions.json](http://_vscodecontentref_/2)  # Club details
├── [club.html](http://_vscodecontentref_/3)           # Club Head Dashboard
├── [club.js](http://_vscodecontentref_/4)             # Club Head Dashboard Logic
├── [clubs.css](http://_vscodecontentref_/5)           # Clubs Page Styles
├── [clubs.html](http://_vscodecontentref_/6)          # Clubs Page
├── [clubs.js](http://_vscodecontentref_/7)            # Clubs Page Logic
├── [events.json](http://_vscodecontentref_/8)         # Event data
├── [faculty.html](http://_vscodecontentref_/9)        # Faculty Dashboard
├── [faculty.js](http://_vscodecontentref_/10)          # Faculty Dashboard Logic
├── [index.html](http://_vscodecontentref_/11)          # Login Page
├── [index.js](http://_vscodecontentref_/12)            # Login Page Logic
├── [management.html](http://_vscodecontentref_/13)     # Management Dashboard
├── [management.js](http://_vscodecontentref_/14)       # Management Dashboard Logic
├── [package.json](http://_vscodecontentref_/15)        # Project dependencies and scripts
├── [profile.html](http://_vscodecontentref_/16)        # User Profile Page
├── [profile.js](http://_vscodecontentref_/17)          # User Profile Logic
├── [README.md](http://_vscodecontentref_/18)           # Project documentation
├── [server.js](http://_vscodecontentref_/19)           # Backend server
├── [student.html](http://_vscodecontentref_/20)        # Student Dashboard
├── [student.js](http://_vscodecontentref_/21)          # Student Dashboard Logic
├── [user.json](http://_vscodecontentref_/22)           # User data


USAGE 

Login
Use the following credentials to log in based on your role:

Student:

Username: se22ucse288
Password: pass123

Club Head:
Username: clubhead01
Password: pass123

Faculty:
Username: faculty01
Password: pass123

Management:
Username: management01
Password: pass123
Select your role from the dropdown menu during login.

Role-Specific Dashboards
Student: View events in a calendar format.
Club Head: Submit events and view their status.
Faculty: Approve or reject events and provide feedback.
Management: Approve or reject faculty-approved events and send feedback.

SYSTEM INTERFACE

User Interface
Login Page: Allows users to log in with their credentials and select their role.
Student Dashboard: Displays a calendar view of published events.
Club Head Dashboard: Provides options to submit events, view their status, and publish approved events.
Faculty Dashboard: Lists events for approval or rejection with feedback options.
Management Dashboard: Displays faculty-approved events for final approval or rejection.

Backend API
Authentication:
POST /api/login: Authenticate users.
Event Management:
POST /api/events: Submit a new event.
POST /api/events/:eventId/approve: Approve an event (faculty).
POST /api/events/:eventId/management-approve: Approve an event (management).
POST /api/events/:eventId/reject: Reject an event.
POST /api/events/:eventId/feedback: Send feedback for an event.
POST /api/events/:eventId/publish: Publish an approved event.
GET /api/events: Fetch all events.
GET /api/published-events: Fetch published events.


TECHNOLOGIES USED
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: JSON files for data storage
File Uploads: Multer


REQUIREMENTS
express==5.1.0
multer==1.4.5-lts.2
