from .models import UserTasks
from rest_framework import serializers


class taskSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserTasks
        fields = ['taskTitle', 'description', 'taskImage']
