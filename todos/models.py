from django.db import models
from django.contrib.auth.models import User


class Todo(models.Model):
    name = models.CharField(max_length=100)
    body = models.CharField(max_length=500, null=True, blank=True)
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, related_name='todos', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
