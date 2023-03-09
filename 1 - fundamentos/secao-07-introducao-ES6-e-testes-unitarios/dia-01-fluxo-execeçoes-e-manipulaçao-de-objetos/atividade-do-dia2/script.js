const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};
// console.log(order.order.delivery.deliveryPerson)
// console.log(order.address.street);

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const orderPerson = order.name;
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const phoneNumber = order.phoneNumber;
  const street = order.address.street;
  const homeNumber = order.address.number;
  const apNumber = order.address.apartment;
  console.log(`Ola ${deliveryPerson}, entrega para: ${orderPerson}, Telefone: ${phoneNumber}, R. ${street}, ${homeNumber}, AP: ${apNumber}`);
  // const 
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const orderPerson = order.name = 'Luiz Siva';
  const pizzas = Object.keys(order.order.pizza)
  // const margPizza = order.order.pizza.marguerita;
  // const peppPizza = order.order.pizza.pepperoni;
  const coke = order.order.drinks.coke.type;
  const payment = order.payment.total = 50;
  console.log(`Olá ${orderPerson}, o total do seu perdido de ${pizzas[0]}, ${pizzas[1]} e ${coke} é R$ ${payment}`);
};

orderModifier(order);