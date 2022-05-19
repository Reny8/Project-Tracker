from io import open_code
from django.db import models
from authentication.models import User
# Create your models here.
class Projects(models.Model):
    owner = models.ForeignKey(User, related_name="admin", on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    due_date = models.DateField()
    assigned_users = models.ManyToManyField(User)