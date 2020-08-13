from rest_framework import viewsets

from counter.models import Counter
from .serializers import CounterSerializer

class CounterViewSet(viewsets.ModelViewSet):
    serializer_class = CounterSerializer
    queryset = Counter.objects.all()

