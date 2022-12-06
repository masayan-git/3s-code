export const formState = () =>
  useState('contact', () => {
    return {
      company: '',
      name: 'testname',
      email: '',
      tel: '',
      content: '',
      flag: false
    }
  })
