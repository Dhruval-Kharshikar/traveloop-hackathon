"""
Traveloop — Root URL Configuration
All app routes are prefixed with /api/
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [

    # Django admin panel (for superuser access)
    path('admin/', admin.site.urls),

    # ── Authentication ──────────────────────────────────────────────────────
    # POST /api/auth/register/   → create account
    # POST /api/auth/login/      → get access + refresh token
    # POST /api/auth/token/refresh/ → get new access token
    path('api/auth/', include('apps.users.urls')),
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # ── App Routes ──────────────────────────────────────────────────────────
    path('api/trips/',     include('apps.trips.urls')),
    path('api/itinerary/', include('apps.itinerary.urls')),
    path('api/community/', include('apps.community.urls')),
    path('api/packing/',   include('apps.packing.urls')),
    path('api/expenses/',  include('apps.expenses.urls')),
    path('api/journal/',   include('apps.journal.urls')),

]

# Serve uploaded media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)