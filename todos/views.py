from django.shortcuts import render
from .models import Todo
from rest_framework import viewsets
from .serializers import TodoSerializer


class TodoViewset(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
