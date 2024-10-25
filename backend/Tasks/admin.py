from django.contrib import admin
from . import models

# Register your models here.
@admin.register(models.UserTasks)
class TasksAdmin(admin.ModelAdmin):
    list_display = ['taskTitle', 'description', 'taskImage', 'created_at']
    list_editable = ['description']
    list_per_page = 100
