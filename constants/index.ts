export const headerLinks = [
   
    {
      label: 'About',
      route: '/about',
    },
    {
      label: 'Gallerie',
      route: '/gallery',
    },
    {
      label: 'Contact',
      route: '/kontakt',
    },
   
    {
      label: 'My Profile',
      route: '/user-profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }