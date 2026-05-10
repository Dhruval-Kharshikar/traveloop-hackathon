# Traveloop – Backend

Django + MySQL REST API for the Traveloop travel planning platform.

---

## Project Structure

```
traveloop_backend/
├── manage.py
├── requirements.txt
├── .env.example                  ← copy to .env and fill in values
│
├── traveloop_backend/            ← Django project config
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
└── apps/
    ├── users/        ← Auth, registration, profile  (Screens 1, 2, 7)
    ├── trips/        ← Create/list/manage trips     (Screens 3, 4, 6)
    ├── itinerary/    ← Build & view itinerary       (Screens 5, 9)
    ├── community/    ← Community posts              (Screen 10)
    ├── packing/      ← Packing checklist            (Screen 11)
    ├── expenses/     ← Expense invoices & budget    (Screen 14)
    ├── notes/        ← Trip notes / journal         (Screen 13)
    └── search/       ← Global search + admin stats  (Screens 8, 12)
```

---

## Quick Start

### 1. Create & activate a virtual environment
```bash
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
```

### 2. Install dependencies
```bash
pip install -r requirements.txt
```

### 3. Create your .env file
```bash
cp .env.example .env
# Edit .env and fill in your SECRET_KEY, DB credentials, etc.
```

### 4. Create the MySQL database
```sql
CREATE DATABASE traveloop_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 5. Run migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 6. Create a superuser (for Django admin)
```bash
python manage.py createsuperuser
```

### 7. Start the development server
```bash
python manage.py runserver
```

API is now live at: **http://127.0.0.1:8000/api/v1/**  
Swagger UI docs: **http://127.0.0.1:8000/api/docs/**  
Django Admin: **http://127.0.0.1:8000/admin/**

---

## API Endpoints

All endpoints require `Authorization: Bearer <access_token>` except register and login.

### Auth  `/api/v1/auth/`
| Method | URL | Description |
|--------|-----|-------------|
| POST | `/register/` | Create account (Screen 2) |
| POST | `/login/` | Get JWT tokens (Screen 1) |
| POST | `/token/refresh/` | Refresh access token |
| GET / PUT / PATCH | `/profile/` | View or edit profile (Screen 7) |
| POST | `/change-password/` | Change password |

### Trips  `/api/v1/trips/`
| Method | URL | Description |
|--------|-----|-------------|
| GET | `/` | List user trips; filter with `?status=ongoing\|upcoming\|completed` |
| POST | `/` | Create trip (Screen 4) |
| GET | `/<id>/` | Trip detail |
| PUT / PATCH | `/<id>/` | Update trip |
| DELETE | `/<id>/` | Delete trip |

### Itinerary  `/api/v1/itinerary/`
| Method | URL | Description |
|--------|-----|-------------|
| GET / POST | `/sections/` | List/create sections; filter `?trip=<id>` |
| GET / PUT / PATCH / DELETE | `/sections/<id>/` | Section detail |
| GET / POST | `/days/` | List/create days; filter `?section=<id>` |
| GET / PUT / PATCH / DELETE | `/days/<id>/` | Day detail |
| GET / POST | `/activities/` | List/create activities; filter `?day=<id>` |
| GET / PUT / PATCH / DELETE | `/activities/<id>/` | Activity detail |

### Community  `/api/v1/community/`
| Method | URL | Description |
|--------|-----|-------------|
| GET | `/` | List all posts; search `?search=` filter `?place=&activity=` |
| POST | `/` | Create post |
| GET / PUT / PATCH / DELETE | `/<id>/` | Post detail (edit/delete own only) |

### Packing  `/api/v1/packing/`
| Method | URL | Description |
|--------|-----|-------------|
| GET / POST | `/categories/` | List/create categories; filter `?trip=<id>` |
| GET / PUT / PATCH / DELETE | `/categories/<id>/` | Category detail |
| GET / POST | `/items/` | List/create items; filter `?category=<id>` |
| GET / PUT / PATCH / DELETE | `/items/<id>/` | Item detail (toggle `is_packed`) |

### Expenses  `/api/v1/expenses/`
| Method | URL | Description |
|--------|-----|-------------|
| GET / POST | `/` | List/create expenses; filter `?trip=<id>&category=hotel` |
| GET / PUT / PATCH / DELETE | `/<id>/` | Expense detail |
| GET / PUT | `/budget/<trip_id>/` | View or set trip budget |

### Notes  `/api/v1/notes/`
| Method | URL | Description |
|--------|-----|-------------|
| GET / POST | `/` | List/create notes; filter `?trip=<id>&is_done=true&tag=` |
| GET / PUT / PATCH / DELETE | `/<id>/` | Note detail |

### Search  `/api/v1/search/`
| Method | URL | Description |
|--------|-----|-------------|
| GET | `/?q=<query>&type=trips\|community\|all` | Global search (Screen 8) |
| GET | `/admin-stats/` | Platform stats for admin dashboard (Screen 12) – staff only |

---

## Authentication Flow

```
POST /api/v1/auth/login/
→ { "access": "...", "refresh": "..." }

All subsequent requests:
  Authorization: Bearer <access token>

When access token expires:
POST /api/v1/auth/token/refresh/
  { "refresh": "<refresh token>" }
→ { "access": "..." }
```

---

## Notes for Frontend Integration

- **CORS** – Allowed origins are set in `settings.py`. Add your frontend URL there.
- **Media files** – Profile photos, banners, and community images are served at `/media/`.
- **Pagination** – All list endpoints are paginated (10 per page). Use `?page=2` to navigate.
- **Ordering** – Most lists support `?ordering=field` or `?ordering=-field` (descending).
