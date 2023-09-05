

from pathlib import Path
import os
from datetime import timedelta
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-m+k3krk0sie%n65#@lw2w-h)833ax2=t8h(0u$^z7l&j$lj7@!'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["*"]


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    "accounts",
    "rest_framework",
    "djoser", #setting djsoer after installiation
    'social_django',
    'rest_framework_simplejwt',
    'corsheaders',
    'rest_framework_simplejwt.token_blacklist' #this help when we do migrations
]

MIDDLEWARE = [
    'social_django.middleware.SocialAuthExceptionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        # for redirect_uri to react and the build is the npm build of react  that we will copy and paste it in backends
        'DIRS': [os.path.join(BASE_DIR, "build")],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                "social_django.context_processors.backends",   #essential for social auth
                "social_django.context_processors.login_redirect"  #essential for social auth
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True




# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'




# Setting for sending email from this email
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'mygoogleid@gmail.com'
EMAIL_HOST_PASSWORD = 'MY PASSWORD'
EMAIL_USE_TLS = True



# Static files
STATIC_URL = 'static/'
# in the build folder there is a static folder from there we want to 
STATICFILES_DIRS = [os.path.join(BASE_DIR, "build/static")]
STATIC_ROOT = os.path.join(BASE_DIR,"static")


AUTH_USER_MODEL = "accounts.User"



# DJOSER Setting from   https://djoser.readthedocs.io/en/latest/settings.html here you will find all the different setting avaliable by djoser
DJOSER = {
    "LOGIN_FIELD":"email", #use email as login field
    "USER_CREATE_PASSWORD_RETYPE":True, # for password and confirm passowrd
    "PASSWORD_CHANGED_EMAIL_CONFIRMATION":True, #passowrd change confirm will be sent
    "USERNAME_CHANGED_EMAIL_CONFIRMATION":True, #email change confirm will be sent
    "USERNAME_CHANGED_EMAIL_CONFIRMATION":True, #changeing username endpoints will send confirmation email to user.
    "SEND_CONFIRMATION_EMAIL":True, #sending confirmation email when user is created
    "PASSWORD_RESET_CONFIRM_URL":'password/reset/confirm/{uid}/{token}', # when ever password is to be forgotten and need to be reseted
    "USERNAME_RESET_CONFIRM_URL":'email/reset/confirm/{uid}/{token}', # when ever email is to be forgotten and need to be reseted
    "SET_USERNAME_RETYPE":True,
    "SET_PASSWORD_RETYPE":True,
    "ACTIVATION_URL":"activate/{uid}/{token}", #This will activate our account
    "SEND_ACTIVATION_EMAIL":True, #This will send  activation email our account
    'SOCIAL_AUTH_TOKEN_STRATEGY': 'djoser.social.token.jwt.TokenStrategy',
    'SOCIAL_AUTH_ALLOWED_REDIRECT_URIS': ['http://127.0.0.1:8000/google'],
    "SERIALIZERS":{
         #custom serializer
        'user_create': 'accounts.serializers.UserCreateSerializer',
        'user': 'accounts.serializers.UserCreateSerializer',
        'current_user': 'accounts.serializers.UserCreateSerializer',
        'user_delete': 'djoser.serializers.UserDeleteSerializer',
    }
}

REST_FRAMEWORK = {
    # Set the default permission classes for all views
    "DEFAULT_PERMISSION_CLASSES": [
        # Only authenticated users are allowed to access the views
        'rest_framework.permissions.IsAuthenticated'
    ],
    
    # Set the default authentication classes for all views
    'DEFAULT_AUTHENTICATION_CLASSES': (
        # Token-based authentication is used for user identification
        'rest_framework.authentication.TokenAuthentication',
    ),
}

SIMPLE_JWT = {
   'AUTH_HEADER_TYPES': ('JWT',),
   "SLIDING_TOKEN_LIFETIME": timedelta(minutes=2),
    "SLIDING_TOKEN_REFRESH_LIFETIME": timedelta(minutes=30),
     'AUTH_TOKEN_CLASSES': ( #use access token as auth token it is doing it by default also
        'rest_framework_simplejwt.tokens.AccessToken',
    )

   
}

CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # Replace with your React app's URL
]


AUTHENTICATION_BACKENDS = (
    "social_core.backends.google.GoogleOAuth2", # enable us to use google in our apps
    'django.contrib.auth.backends.ModelBackend' #the login and password we did with jwt to work if this is not used the jwt authentication will not work
)

# Socail Authentication
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = 'CLIENT ID'
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = 'SECRET ID'
SOCIAL_AUTH_GOOGLE_OAUTH2_SCOPE = ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile', 'openid']
SOCIAL_AUTH_GOOGLE_OAUTH2_EXTRA_DATA = ['first_name', 'last_name']

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
CORS_ORIGIN_WHITELIST = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
CORS_ALLOW_CREDENTIALS = True
