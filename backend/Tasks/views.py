from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Q
from django.conf import settings
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import UserTasks
from rest_framework.views import APIView
from .Serializers import taskSerializer
import json

# View Implemented : done
class userTaskView(APIView):
    
    def get(self, request):
        allTasks = UserTasks.objects.all()
        allTaskSerializer = taskSerializer(allTasks, many=True)
        return Response(allTaskSerializer.data, status=status.HTTP_200_OK)
    def delete(self, request):
        print('You Try to delete')
        # toBedeleted = UserTasks.objects.get(id=taskId)
        # toBedeleted.delete()
        pass
    def post(self, request):
       serializer = taskSerializer(data=request.data)
       serializer.is_valid(raise_exception=True)
       serializer.save()
       return Response(serializer.data, status=status.HTTP_201_CREATED)
       
    def patch(self, request, taskId):
        # toBeModifiyed = UserTasks.objects.get(id=taskId)
        # toBeModifiyed
        print('You Try to patch so change partial data')
        # b5.name = "New name"
        # b5.save()
        pass
