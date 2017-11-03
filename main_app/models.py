from django.db import models
# Create your models here.
class Transaction(models.Model):
	DEPOSIT = "Deposit"
	WITHDRAWAL = "Withdrawal"
	transactionChoices = (
        (DEPOSIT, 'Deposit'),
        (WITHDRAWAL, 'Withdrawal')
    )
	
	action = models.CharField(max_length=11,
                  choices=transactionChoices,
                  default=DEPOSIT)
	description = models.CharField(max_length = 100)
	location = models.CharField(max_length = 100)
	amount = models.DecimalField(max_digits = 10, decimal_places = 2)
	
	def __str__(self):
		return self.description
	