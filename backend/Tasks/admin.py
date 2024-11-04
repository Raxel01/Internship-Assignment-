from django.contrib import admin
from . import models

# Register your models here.
@admin.register(models.UserTasks)
class TasksAdmin(admin.ModelAdmin):
    list_display = ['taskTitle', 'description', 'taskImage', 'created_at', 'TaskStatus']
    list_editable = ['TaskStatus']
    list_per_page = 100
