"""
Root URL configuration for Traveloop.

All API routes are prefixed with /api/v1/
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerUIView

urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),

    # API Docs (Swagger UI at /api/docs/)
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerUIView.as_view(url_name='schema'), name='swagger-ui'),

    # App routes
    path('api/v1/auth/',        include('apps.users.urls')),
    path('api/v1/trips/',       include('apps.trips.urls')),
    path('api/v1/itinerary/',   include('apps.itinerary.urls')),
    path('api/v1/community/',   include('apps.community.urls')),
    path('api/v1/packing/',     include('apps.packing.urls')),
    path('api/v1/expenses/',    include('apps.expenses.urls')),
    path('api/v1/notes/',       include('apps.notes.urls')),
    path('api/v1/search/',      include('apps.search.urls')),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
