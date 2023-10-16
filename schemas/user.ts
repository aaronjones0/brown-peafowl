export default {
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    {
      name: 'full_name',
      type: 'string',
      title: 'Full Name',
    },
    {
      name: 'first_name',
      type: 'string',
      title: 'First Name',
    },
    {
      name: 'middle_name',
      type: 'string',
      title: 'Middle Name',
    },
    {
      name: 'last_name',
      type: 'string',
      title: 'Last Name',
    },
    {
      name: 'username',
      type: 'string',
      title: 'Username',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'profile_image',
      type: 'image',
      title: 'Profile Image',
    },
  ],
}
