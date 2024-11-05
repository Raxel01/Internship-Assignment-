from django.db import models
# from django.conf import settings
# from django.db.models import Q
# Create your models here

# Models Implemented
class UserTasks(models.Model):
    taskTitle   = models.CharField(max_length=50,null=False, blank=False)
    description = models.TextField(null=False,blank=False)
    taskImage   = models.ImageField(upload_to='media/')
    TaskStatus  = models.CharField(max_length=12,  default='STARTED')
    created_at  = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f' {self.taskTitle} -- with id =: {self.id}'
    
    class Meta:
        ordering = ['-created_at']

