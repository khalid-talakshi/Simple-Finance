from django.shortcuts import render
from .models import Transaction

# Create your views here.
				
#transactions = [
#	Transaction('Deposit', 'Allowance', 'Home', 25.00),
#	Transaction('Withdrawl', 'Food', 'Bar Burrito', 11.90),
#	Transaction('Withdrawl', 'Snacks', 'Dollarama', 5.71)
#]



def index(request):
	transactions = Transaction.objects.all()
	balance = sum(t.amount if t.action.lower()=='deposit' else -t.amount for t in transactions)
	return render(request, 'index.html', {'transactions':transactions,	'balance': balance})