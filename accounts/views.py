from django.shortcuts import redirect, render
from .models import account 
from django.contrib.auth.hashers import make_password, check_password

# Create your views here.

def register(request):

    if request.method == 'POST':
        First_Name = request.POST['first_name']
        Last_Name = request.POST['last_name']
        Email = request.POST['email']
        Password = request.POST['password']
        confirm_Password = request.POST['cpassword']
        Country = request.POST['country']
        State = request.POST['state']
        City = request.POST['city']

        hashed_password = make_password(Password)

        if Password == confirm_Password:
            a = account.objects.create(First_Name = First_Name, Last_Name = Last_Name,Email = Email, Country = Country, State = State, City = City, Password = hashed_password)
            a.save()
            return redirect('/')
        else: 
            return redirect('/register')
    else:
        return render(request, 'signup.html')