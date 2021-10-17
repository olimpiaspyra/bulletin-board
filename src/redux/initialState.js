/* eslint-disable linebreak-style */
export const initialState = {
  posts: {
    data: [
      {
        id: 1,
        title: 'A flat for sale',
        text: 'Morbi eget sollicitudin neque, eget suscipit lectus. Proin dictum nisl sed mi consectetur, in aliquet arcu dignissim. Integer finibus dolor.',
        datePublication: '2021.01.24',
        dateLastUpdate: '2021.04.28',
        email: 'john.doe@gmail.com',
        status: 'published',
        image: 'https://images.pexels.com/photos/5602170/pexels-photo-5602170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: '1250',
        phone: '+48 663065410',
        location: 'Warsaw',
      },
      {
        id: 2,
        title: 'Room for rent',
        text: 'Aliquam consectetur pharetra tempor. Sed sodales nulla egestas, facilisis nunc id, cursus dui. Curabitur ac elit dapibus, semper tellus sit.',
        datePublication: '2021.06.02',
        dateLastUpdate: '2021.08.11',
        email: 'anna.doe@gmail.com',
        status: 'published',
        image: 'https://images.pexels.com/photos/3607201/pexels-photo-3607201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        price: '200',
        phone: '+48 666609823',
        location: 'Oslo',
      },
      {
        id: 3,
        title: 'Apartment for rent',
        text: 'Vestibulum id maximus lacus. Sed et enim ac augue dictum vulputate facilisis et ex. Maecenas blandit nulla a efficitur lacinia.',
        datePublication: '2021.09.12',
        dateLastUpdate: '2021.10.03',
        email: 'mike.doe@gmail.com',
        status: 'closed',
        image: 'https://images.pexels.com/photos/1269807/pexels-photo-1269807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: '500',
        phone: '+48 668249746',
        location: 'Prague',
      },
      {
        id: 4,
        title: 'The best apartment to live',
        text: 'Mauris feugiat, neque at mattis semper, dui lacus interdum sapien, non varius tortor est id dolor. Ut dignissim elit suscipit.',
        datePublication: '2021.04.23',
        dateLastUpdate: '2021.07.24',
        email: 'jack.doe@gmail.com',
        status: 'draft',
        image: 'https://images.pexels.com/photos/2406875/pexels-photo-2406875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: '333',
        phone: '+48 660823894',
        location: 'Madrid',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  user: {
    active: true,
  },
};
