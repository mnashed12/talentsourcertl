import os
import sys

# Add your project directory to the sys.path
path = '/home/SimpleCiti/talentsourcertl/backend'
if path not in sys.path:
    sys.path.insert(0, path)

# Set the Django settings modulee
os.environ['DJANGO_SETTINGS_MODULE'] = 'talentsource.settings'

# Import and set up Django
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()