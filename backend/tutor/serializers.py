from django.contrib.auth.models import User
from rest_framework import serializers
from .models import BinaryConvo


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class BinaryConvoSerializer(serializers.ModelSerializer):
    class Meta:
        model = BinaryConvo
        fields = '__all__'