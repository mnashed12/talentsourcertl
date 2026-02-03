# TalentSource RTL

A full-stack web application built with React (frontend) and Django (backend) with RTL (Right-to-Left) support for Arabic language.

## Project Structure

```
TalentSourceRTL/
├── backend/          # Django REST API
│   ├── talentsource/ # Django project configuration
│   ├── manage.py     # Django management script
│   └── requirements.txt
├── frontend/         # React application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Prerequisites

- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn

## Backend Setup (Django)

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
   - Windows:
     ```bash
     venv\Scripts\activate
     ```
   - macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Run migrations:
```bash
python manage.py migrate
```

6. Create a superuser (optional):
```bash
python manage.py createsuperuser
```

7. Start the Django development server:
```bash
python manage.py runserver
```

The backend API will be available at `http://localhost:8000`

## Frontend Setup (React)

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## Features

- ✅ Django REST Framework for API development
- ✅ React with Vite for fast development
- ✅ CORS configured for local development
- ✅ RTL (Right-to-Left) support for Arabic
- ✅ React Router for navigation
- ✅ Axios for API communication
- ✅ Responsive design

## API Endpoints

- `GET /api/` - API root with welcome message
- `GET /admin/` - Django admin panel

## Development

### Backend
- Django runs on port 8000
- Admin panel: http://localhost:8000/admin/
- API root: http://localhost:8000/api/

### Frontend
- React runs on port 3000
- Vite proxy configured to forward `/api` requests to Django backend

## Production Build

### Frontend
```bash
cd frontend
npm run build
```

The production build will be in the `frontend/dist` directory.

### Backend
For production deployment:
1. Set `DEBUG = False` in settings.py
2. Update `SECRET_KEY` with a secure value
3. Configure `ALLOWED_HOSTS`
4. Use a production database (PostgreSQL recommended)
5. Set up static files serving
6. Use a production server like Gunicorn

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is licensed under the MIT License.
