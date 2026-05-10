#!/bin/bash
# Traveloop Backend – One-command setup
# Run this once after cloning the repo.

set -e

echo "=== Traveloop Backend Setup ==="

# 1. Virtual environment
if [ ! -d "venv" ]; then
    echo "[1/5] Creating virtual environment..."
    python3 -m venv venv
else
    echo "[1/5] Virtual environment already exists."
fi

source venv/bin/activate

# 2. Install packages
echo "[2/5] Installing dependencies..."
pip install --quiet -r requirements.txt

# 3. .env check
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "[3/5] .env file created from .env.example – PLEASE EDIT IT before continuing."
    echo "      Set SECRET_KEY, DB_NAME, DB_USER, DB_PASSWORD then re-run this script."
    exit 1
else
    echo "[3/5] .env file found."
fi

# 4. Migrations
echo "[4/5] Running migrations..."
python manage.py makemigrations
python manage.py migrate

# 5. Done
echo ""
echo "[5/5] Setup complete!"
echo ""
echo "Next steps:"
echo "  source venv/bin/activate"
echo "  python manage.py createsuperuser"
echo "  python manage.py runserver"
echo ""
echo "API docs will be at: http://127.0.0.1:8000/api/docs/"
