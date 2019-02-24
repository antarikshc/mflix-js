MFlix
-----------------

This is a short guide on setting up the system and environment dependencies
required for the MFlix application to run.


Project Structure
-----------------

Most of the work will be implementing methods in the **dao** directory, which
contains all database interfacing methods. The API will make calls to Data
Access Objects (DAOs) that interact directly with MongoDB.

The unit tests in **test** will test these database access methods directly,
without going through the API. The UI will run these methods in integration
tests, and therefore requires the full application to be running.

The lesson handouts can be found in the **test/lessons** directory. These files
will look like **<lesson-name>.spec.js**, and can be run with ``npm test -t
<lesson-name>``.

The API layer is fully implemented, as is the UI. The application is programmed
to  run on port **5000** by default - if you need to run on a port other than
5000, you can edit the **index.html** file in the build directory to modify the
value of **window.host**.

Please do not modify the API layer in any way, under the **mflix-js/src/api**
directory. This may result in the front-end application failing to validate some
of the labs.


Node Library Dependencies
-------------------------

The dependencies for the MFlix application should be downloaded using the
``npm`` command-line tool. You can get this tool by `downloading Node.js
<https://nodejs.org/en/download/>`

Once ``npm`` is installed, you can install the MFlix dependencies by running the
following command from the **mflix-js** directory:

  npm install

You must run this from the top level of the project, so ``npm`` has access to
the **package.json** file where the dependencies are.

You may see warnings depending on your operating system from **fsevents** or
Husky warning about **git** missing. These are informational only and do not
impact the functionality of the application. You can safely ignore them.

MongoDB Installation
--------------------

It is recommended to connect MFlix with MongoDB Atlas, so you do not need to
have a MongoDB server running on your host machine. The lectures and labs in
this course will assume that you are using an Atlas cluster instead of a local
instance.

That said, you are still required to have the MongoDB server installed, in order
to be able to use two server tool dependencies:

- ``mongorestore``

  - A utility for importing binary data into MongoDB.

- ``mongo``

  - The MongoDB shell

Running the Application
-----------------------

In order for the application to use Atlas, you will need a file called **.env**
to contain the connection information. In the **mflix-js** directory you can
find two files, **dotenv_unix** (for Unix users) and **dotenv_win** (for Windows
users).

Open the file for your chosen operating system and enter your Atlas SRV
connection string as directed in the comment. This is the information the driver
will use to connect. Make sure **not** to wrap your Atlas SRV connection between
quotes::

  MFLIX_DB_URI = mongodb+srv://...

It's highly suggested you also change the **SECRET_KEY** to some very long, very
random string. While this application is only meant for local use during this
course, software has a strange habit of living a long time.

When you've edited the file, rename it to **.env** with the following command:

  mv dotenv_unix .env  # on Unix
  ren dotenv_win .env  # on Windows

*Note:* Once you rename this file to **.env**, it will no longer be visible in
Finder or File Explorer. However, it will be visible from Command Prompt or
Terminal, so if you need to edit it again, you can open it from there:

In the **mflix-js** directory, run the following commands:

  **install MFlix dependencies**
  
  npm install

  **start the MFlix application**
  
  npm start

This will start the application. You can then access the MFlix application at
`http://localhost:5000/ <http://localhost:5000/>`


Running the Unit Tests
----------------------

To run the unit tests for this course, you will use `Jest
<https://jestjs.io/docs/en/getting-started>` Jest has been included in this
project's dependencies, so ``npm install`` should install everything you need.

Each course lab contains a module of unit tests that you can call individually
with ``npm test``. For example, to run the test **connection-pooling.test.js**,
run the command:

  npm test -t connection-pooling

Each ticket will contain the exact command to run that ticket's specific unit
tests. You can run these commands from anywhere in the **mflix-js** project.
