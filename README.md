# auth-OAuth

Install all dependencies in the backend with ** pip install -r requirements.txt **
Install all dependencies in frontend with **npm install**
Use **npm build** and create a build folder in react frontend
copy that build folder to the backend so that it can be used as a template view (if you are windows user you don't need to do it)

# Social Auth GoogleOAuth 
Setup you Google OAuth client and secrets id's in settings.py 
Setup your Google email in settings.py like this


# Setting for sending email from this email
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'your sending email here'
EMAIL_HOST_PASSWORD = 'passowrd here'
EMAIL_USE_TLS = True

