from django.db import models

class home(models.Model):
   name=models.CharField(max_length=200)
   email = models.EmailField(unique=True)
   phone = models.CharField(max_length=20, null=True)
   password=models.CharField(max_length=200)
   refernce=models.CharField(max_length=200)

   def __str__(self):
        return self.name



