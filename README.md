Installation

•	Frontend(client) (React)
Create project in the root by
npx create-react-app client
cd client
Install dependencies using npm:
npm install
•	Backend(server) (Python)
Navigate to the server/ directory:
cd server/

Create a virtual environment or Conda environment:
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

or 

conda create -n env1 python=3.9+
conda activate env

Install backend dependencies:
pip install -r requirements.txt


Running the Application

Step 1: Run the Backend (Python Flask)
Navigate to the backend/ directory:
bash
cd server/
Start the Flask server:
Bash
conda activate env
flask run

or 
conda activate env
python app.pyc
By default, the backend will be available at http://127.0.0.1:5000/.
Step 2: Run the Frontend (React)
Open a new terminal and navigate to the frontend/ directory:
	bash
	cd client/

Start the React development server:
	bash
	npm start

The frontend will run on http://localhost:3000/.

Step 3: Access the Application
Once both servers are running, you can access the application by visiting http://localhost:3000/ in your browser.
