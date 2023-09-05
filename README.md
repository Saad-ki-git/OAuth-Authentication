# auth-OAuth

install all dependencies in backend with pip install -r requirements.txt 
install all dependencies in frontend with npm install
use npm build and create a build folder in react frontend
copy that build folder to the backend so that it can be used as template view (if you are windows user you don't need to do it)
Setup you googleOAuth client and secret id's in settings.py 
Setup you google email in settings.py like this 
# Setting for sending email from this email
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'your sending email here'
EMAIL_HOST_PASSWORD = 'passowrd here'
EMAIL_USE_TLS = True

