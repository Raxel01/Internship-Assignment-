from django.contrib import admin
from django.urls import path
from .views import userTaskView
# done
urlpatterns = [
        path('userTasks/', userTaskView.as_view()),
]

