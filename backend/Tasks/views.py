from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Q
from django.conf import settings
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import UserTasks
from rest_framework.views import APIView
from .Serializers import taskSerializer, deleteSerializer
import json

# View Implemented : done
class userTaskView(APIView):
    def get(self, request):
        allTasks = UserTasks.objects.all()
        allTaskSerializer = taskSerializer(allTasks, many=True)
        return Response(allTaskSerializer.data, status=status.HTTP_200_OK)
    def delete(self, request):
        toBedeleted = UserTasks.objects.get(id=request.data.get('id'))
        toBedeleted.delete()
        return Response(None, status.HTTP_204_NO_CONTENT)
    def post(self, request):
       serializer = taskSerializer(data=request.data)
       serializer.is_valid(raise_exception=True)
       serializer.save()
       return Response(serializer.data, status=status.HTTP_201_CREATED)
       
    def patch(self, request):
        toBeModifiyed = UserTasks.objects.get(id=request.data.get('id'))
        if toBeModifiyed.TaskStatus != request.data.get('newStatus'):
            toBeModifiyed.TaskStatus =  request.data.get('newStatus')
            toBeModifiyed.save()
        return Response({'Id', request.data.get('id')}, status=status.HTTP_200_OK)
