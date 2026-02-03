# Django Backend - Quick Start Guide

## Setup Steps

1. **Create and activate virtual environment:**
   ```bash
   cd backend
   python -m venv venv
   venv\Scripts\activate  # Windows
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run migrations:**
   ```bash
   python manage.py migrate
   ```

4. **Create superuser (optional):**
   ```bash
   python manage.py createsuperuser
   ```

5. **Start server:**
   ```bash
   python manage.py runserver
   ```

## Testing the API

Visit: http://localhost:8000/api/

You should see a JSON response with welcome message.

## Admin Panel

Visit: http://localhost:8000/admin/

Login with the superuser credentials you created.

## Configuration

- Database: SQLite (default)
- CORS: Configured for localhost:3000 and localhost:5173
- Debug: Enabled (disable in production)

## Common Commands

- Run server: `python manage.py runserver`
- Make migrations: `python manage.py makemigrations`
- Apply migrations: `python manage.py migrate`
- Create app: `python manage.py startapp <app_name>`
- Shell: `python manage.py shell`
