
//   function-2

function getRandomBurgers() {
    const burgers = ['Cheeseburger', 'Bacon Burger', 'Veggie Burger', 'Double Burger', 'Mushroom Swiss Burger'];
    const randomBurgers = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * burgers.length);
      randomBurgers.push(burgers[randomIndex]);
    }
    return randomBurgers;
  }

  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const order = {
          burgers: getRandomBurgers()
        };
        resolve(order);
      }, 2500);
    });
  }

  
  takeOrder().then(order => {
    console.log('Order:', order);
  });


//   function-3

function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        const prepStatus = {
          order_status: true,
          paid: false
        };
        resolve(prepStatus);
      }, 1500);
    });
  }

  
  orderPrep().then(status => {
    console.log('Order Preparation Status:', status);
  });

  // function-4

  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const paymentStatus = {
          order_status: true,
          paid: true
        };
        resolve(paymentStatus);
      }, 1000);
    });
  }

  
  payOrder().then(status => {
    console.log('Payment Status:', status);
  });


  //function-5

  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }

  const paymentStatus = {
    order_status: true,
    paid: true
  };

  if (paymentStatus.paid) {
    thankyouFnc();
  }
