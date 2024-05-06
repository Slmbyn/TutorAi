from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class BinaryConvo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    response = models.TextField()
    
    def __str__(self):
        return f'User: {self.user.username}, Message: {self.message[:50]}, GPT\'s Response: {self.response[:50]}'


class Note(models.Model):
    # user's foreign key
    # conversation's foreign key
    # note's text
    pass