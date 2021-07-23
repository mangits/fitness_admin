This provides GUIDANCE on the **Fitness Journey app**, which was supposed to be a tool to create custom routines, view exercises, log workouts and see your workouts. Given the ambition of the project and the amount of time spend creating login and register features for persistent data acccess...the actual site didn't get those features implemented.

What the Fitness Journey app does have is an Express server, Postgres database, full CRUD functionality and **Administrator portal**. I can provide the username/password upon request.

**ENDPOINTS:**

**/:** Routes to the Home component, where you can navigate to other endpoints

  default view:
  ![image](https://user-images.githubusercontent.com/83915121/126844567-f0b21ccb-08c1-41bf-9d40-1ef1114d2a97.png)

  admin view:
  ![image](https://user-images.githubusercontent.com/83915121/126844533-f1b09d53-bdf5-4665-9a8a-fa5a51db4728.png)

**/login:** Is an automatic redirect from all endpoints if login or registration has not occured

![image](https://user-images.githubusercontent.com/83915121/126843157-9b4dfbae-6bc9-4c55-b6e1-92ddb92dadf5.png)

  Login: Will check the current list of users and compare username and password combinations providing alerts as helpful hints. You have the ability to switch to the  registration page as well.
  
  ![image](https://user-images.githubusercontent.com/83915121/126844072-deadb766-e309-402c-8f7d-edad642c219e.png)
  
  Registration: Will take a username, email, and password combination and all three are required prior to submitting. Once submitted, the app **(GETS)** looks for usernames matching the current submission, if found you will be alerted to login or register. If not found, then the data will be **POST** to the database and the loggedIn boolean is updated before being redirected to the Home (/) page. You have the ability to switch to the login page as well.
  
  ![image](https://user-images.githubusercontent.com/83915121/126844097-ec7e755c-6e2b-4d6a-a17a-5a390ec86413.png)

**/admin:** ONLY accessible when the admin boolean is true for the logged in user. Displayes a list of users within the database with a **GET** request, you will then have the ability to **(PUT)** update the database entries or **DELETE** entries.

![image](https://user-images.githubusercontent.com/83915121/126845580-ecd83764-5531-4426-ad1c-6ed8fe022628.png)

**UNDER DEVELOPMENT:**

**/new_workout:** Furthest in development, features tabs for workout entries and notes. The idea is to **POST** the completed workout to the workouts table. For mobile this screen is swipeable to switch tabs and the icons and buttons scale well.

![image](https://user-images.githubusercontent.com/83915121/126844916-45b970a5-cee2-43a2-9ccb-f381046ca13c.png)

**/workout_history:** Will display past workouts by referencing the user_workouts table to get the workouts associated with the user before joining with the workouts table. These will be displayed as an overview and the details will provide the exact workout which include notes and mood.

**/custom_workout:** Will display a workout builder which draws from the exercises table.

**/browse_exercises:** Will display all exercises in the exercises table.

**DATABASE:**

  **Users:** Stores all registed users
  
  **UNDER DEVELOPMENT:**
  **Exercises:** Will store exercises for quick references and descriptions
  
  **User_Workouts:** Will provide a unique reference for each workout, given a workout consists of many exercises and will also connect to the notes tables.
  
  **Workouts:** Will provide an exercise, set, rep and weight (future inclusion of cardio/runtimes).
  
  **Notes:** Will provide a way to jot notes about how the workout felt or future workout ideas during a new workout. Will also include a mood column.
  
  Thanks for checking it out!
  
