from rest_framework import serializers
from counter.models import Counter

class CounterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Counter
        fields = ('id','number','operation')