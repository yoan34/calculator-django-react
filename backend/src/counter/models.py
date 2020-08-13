from django.db import models

class Counter(models.Model):
    number = models.FloatField(default=0)
    operation = models.CharField(max_length=20, default='')
    
    def __str__(self):
        return str(self.number)