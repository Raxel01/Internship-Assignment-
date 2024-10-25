from django.contrib import admin
from django.urls import path
from .views import userTaskView

urlpatterns = [
        path('userTasks/', userTaskView.as_view()),
]

