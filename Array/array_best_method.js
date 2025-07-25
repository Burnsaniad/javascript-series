// The Customer Array
let customers = [
  {
     'id': 1,
     'f_name': 'Abby',
     'l_name': 'Thomas',
     'gender': 'M',
     'married': true,
     'age': 32,
     'expense': 500,
     'purchased': ['Shampoo', 'Toys', 'Book']
  },
  {
     'id': 2,
     'f_name': 'Jerry',
     'l_name': 'Tom',
     'gender': 'M',
     'married': true,
     'age': 64,
     'expense': 100,
     'purchased': ['Stick', 'Blade']
  },
  {
     'id': 3,
     'f_name': 'Dianna',
     'l_name': 'Cherry',
     'gender': 'F',
     'married': true,
     'age': 22,
     'expense': 1500,
     'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
  },
  {
     'id': 4,
     'f_name': 'Dev',
     'l_name': 'Currian',
     'gender': 'M',
     'married': true,
     'age': 82,
     'expense': 90,
     'purchased': ['Book']
  },
  {
     'id': 5,
     'f_name': 'Maria',
     'l_name': 'Gomes',
     'gender': 'F',
     'married': false,
     'age': 7,
     'expense': 300,
     'purchased': ['Toys']
  }
];

// filter() method
{
  // filter example - Build Customer Data for Senior Citizens
  const seniorCustomers = customers.filter((customer) => {
    return (customer.age >= 60)
  });
//   console.log('[filter] Senior Customers = ', seniorCustomers);
}

// map() method
{
  // map example - Build Customer Data with title and full name
  const customersWithFullName = customers.map((customer) => {
    let title = '';
    if(customer.gender === 'M') {
      title = 'Mr.';
    } else if(customer.gender === 'F' && customer.married) {
      title = 'Mrs.';
    } else {
      title = 'Miss';
    }
    customer['full_name'] = title 
                            + " " 
                            + customer.f_name 
                            + " " 
                            + customer.l_name;
    return customer;
  });
//   console.log('[map] Customers With Full Name = ', customersWithFullName);
}

// reduce() method
{
  // reduce example - Get the Average Age of 
  // Customers who purchased 'Book'
  let count = 0;
  const total = customers.reduce(
    (accumulator, customer, currentIndex, array) => {
        if(customer.purchased?.includes('Book')) {
          accumulator = accumulator + customer.age;
          count = count + 1;
        }
        return (accumulator);
    }, 
  0);
  console.log('[reduce] Customer Avg age Purchased Book:'
                , Math.floor(total/count));
}


// some() method
{
  const hasYoungCustomer = customers.some((customer) => {
    return (customer.age < 10);
  });
  console.log('[some] Has Young Customer(Age < 10):', hasYoungCustomer);
}

// find() method
{
  const foundYoungCustomer = customers.find((customer) => {
      return (customer.age < 10);
  });
  console.log('[find] Found Young Customer(Age < 10): ', foundYoungCustomer);
}


// findIndex() method
{
  const index = customers.findIndex((customer) => {
      return (customer.age < 10);
  });
}

// findLastIndex() method
{
  const index = customers.findLastIndex((customer) => {
      return (customer.age < 10);
  });
}

// findLast() method
{
  const lastFoundYoungCustomer = customers.findLast((customer) => {
      return (customer.age < 10);
  });
  console.log('[find] Last Found Young Customer(Age < 10): ', lastFoundYoungCustomer);
}

// every() method
{
  const isThereWindowShopper = customers.every((customer) => {
      return (customer.purchased.length === 0);
  })
  console.log('[every] Everyone a window shopper?', isThereWindowShopper);
}

// entries() method
{
  for (const value of numbers.entries()) {
    console.log(value)
  }
}

// values() method
{
  for (const value of numbers.values()) {
    console.log(value)
  }
}

// flatMap() method
{
  const arr1 = [1, 2, 3, 4];
  arr1.map(item => item *2);
  arr1.flatMap(item => item *2);

  arr1.map(item => [item *2]);
  arr1.flatMap(item => [item *2]);

  arr1.map(item => [[item *2]]);
  arr1.flatMap(item => [[item *2]])
}

// reduceRight() method
{
  let number = [100, 40, 15];

  number.reduceRight((accumulator, current) => {
      return accumulator - current
  });
}

// Array method Chaining
{
  const marriedCustomers = customers.filter((customer) => {
    return (customer.married);
  });

  const expenseMapped = marriedCustomers.map((marriedCustomer) => {
    return marriedCustomer.expense;
  });

  const totalExpenseMarriedCustomer = expenseMapped.reduce(
    (accum, expense) => {
    return accum + expense;
   }, 0);
   console.log('Total Expense of Married Customers in INR: '
   , totalExpenseMarriedCustomer);

  // After Chining them
  const total = customers
                   .filter(customer => customer.married)
                   .map(married => married.expense)
                   .reduce((accum,expense) => accum + expense);
  console.log('Orchestrated total expense in INR: ', total);
}