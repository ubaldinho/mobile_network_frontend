const _features : {
   [key: number]: {
        [key : string]: any
} } = {
  1 : {
    basic: {
      description: [
          'A One-Star-class vehicle is made available to you.',
          'Access to 5 hours of work per day upon your initial login.These working hours are flexible and can be accumulated.',
          "Customized profile with photo and vehicle information.",
         
      ],
      prix: 2500,
      content: "Essential offer to start your driver business. Benefit from platform access and basic customer support."
    },
    standart: {
      description: [
          'All the benefits of the basic package are included.',
          'Legal support increasing as earning fidelity points',
          'Work hours on the platform are set at a duration of 12 hours.',
          
      ],
      prix: 5000,
      content: "Ideal for increasing your earnings. Enjoy priority in ride requests and enhanced visibility among clients."
    },
    premium: {
      description: [
          'All the benefits of both the basic and standard packages are included.',
          'A high-quality VIP service vehicle is made available to you.',
          'Unlimited and flexible work hours on the platform without any restrictions or limitations.',
          
      ],
      prix: 10000,
      content: "The best choice to maximize your earnings. Access exclusive rides and clients, as well as a VIP vehicle."
    },
  },
  2:{
    'base':{

    }
    
  }
  
};


export default _features;

