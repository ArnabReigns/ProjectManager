from django.db import models

# Create your models here.


class account(models.Model):

    First_Name = models.CharField(max_length=200)
    Last_Name = models.CharField(max_length=200)
    Email = models.CharField(max_length=200)
    Country = models.CharField(max_length=200)
    State = models.CharField(max_length=200)
    City = models.CharField(max_length=200)
    Password = models.CharField(max_length=200)
    

    def __str__(self):
        return self.Email