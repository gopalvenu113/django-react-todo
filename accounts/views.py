from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.decorators import action
from rest_framework.response import Response
from .serilaizers import LoginSerilaizer, RegisterSerializer
from rest_framework.authtoken.models import Token


class AuthViewset(viewsets.ViewSet):
    queryset = User.objects.all()

    @action(methods = ['post'], detail=False)
    def login(self, request, *args, **kwargs):
        serializer = LoginSerilaizer(data=request.data)
        serializer.is_valid()
        user = serializer.validated_data
        if user:
            return Response({
                "user": user.username,
                "token": Token.objects.get(user=user).key
            })
        return Response(serializer.data)
    
    @action(methods = ['post'], detail=False)
    def register(self, request, *args, **kwargs):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = Token.objects.create(user=user)
        if user:
            return Response({
                "user": user.username,
                "token": token.key
            })
        return Response(serializer.data)
