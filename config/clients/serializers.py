from rest_framework import serializers
from .models import ClientProfile
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email')

class ClientProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = ClientProfile
        fields = ('id', 'user', 'phone_number', 'risk_profile', 'financial_goals', 'created_at', 'updated_at')
        read_only_fields = ('created_at', 'updated_at') 